const http = require('http');
const OpenAI = require('openai');
const process = require('process');
const fs = require('fs');

const express = require('express');
const app = express();
const port = 7860;

// 设置静态目录
app.use(express.static('public'));


var aiBaseUrl = 'https://api.deepseek.com/v1';

if (process.env.AI_BASE_URL != null) {
  aiBaseUrl = process.env.AI_BASE_URL;
}



var key = '';
try {
  if (process.env.DASHSCOPE_API_KEY != null) {
    key = process.env.DASHSCOPE_API_KEY;
  } else {
    if (fs.existsSync('./skey')) {
      key = fs.readFileSync('./skey', 'utf-8');
    }
  }
} catch (err) {
  console.error(err);
  if (fs.existsSync('./skey')) {
    key = fs.readFileSync('./skey', 'utf-8');
  }
}
if (key == null || key.length == 0) {
  key = ''
}
console.log("using ai base url", aiBaseUrl)
const openai = new OpenAI({
    apiKey: key,
    //baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1'
    //baseURL:'https://api.deepseek.com/v1'
    baseURL:aiBaseUrl
  });
async function chat(messages) {
    
    let reasoningContent = '';
    let answerContent = '';
    let isAnswering = false;
    try {
      if (aiBaseUrl == 'http://localhost:8000/v1') {
        let data = await fetch('http://localhost:8000/v1/chat/completions', {
                            method: 'POST', // 或者 'PUT' 取决于你想要的操作
                            headers: {
                                'Content-Type': 'application/json' // 设置Content-Type为text/plain
                            },
                            body: JSON.stringify({
                              messages
                            })
        }).then(response => response.text())
        return data
      } else {
        const stream = await openai.chat.completions.create({
            // You can replace with other Qwen3 models or QwQ models as needed
            model: "deepseek-chat",
            messages,
            stream: true,
            top_p: 0.8,
            temperature: 0.7,
            enable_search: false,
            enable_thinking: false,
            //thinking_budget: 4000
        });
        //console.log('='.repeat(20) + 'Thinking Process' + '='.repeat(20));

        for await (const chunk of stream) {
            if (!chunk.choices?.length) {
                console.log('Usage:');
                console.log(chunk.usage);
                continue;
            }

            const delta = chunk.choices[0].delta;
            
            // Only collect reasoning content
            if (delta.reasoning_content !== undefined && delta.reasoning_content !== null) {
                if (!isAnswering) {
                    process.stdout.write(delta.reasoning_content);
                }
                reasoningContent += delta.reasoning_content.toString();
            }

            // Receive content, start responding
            if (delta.content !== undefined && delta.content) {
                if (!isAnswering) {
                    console.log('='.repeat(20) + 'Complete Response' + '='.repeat(20));
                    isAnswering = true;
                }
                process.stdout.write(delta.content);
                answerContent += delta.content.toString();
            }
        }
      }
    } catch (error) {
        console.error('Error:', error);
    }
    return answerContent
}



var PROMPT =`
    有0,1,2,3四个国家, 以及和四个国家都敌对的魔物(标识为5)这5个势力。
	国家[0]是玩家, 你无法控制玩家, 不要以他的名义发布决策.
	国家[5]或者说势力[5]是魔物, 无法与任何国家和平.
	这个世界有324个区域(18*18), 以0到323索引, 每个区域仅可建立一座城市, 归属一方势力.
	
	你要以[id0, act0, arg0, id1, act1, arg1] 类似的形式给出json决策结果, 包裹在\`\`\`json \`\`\` 格式块内, 这个数组最大元素数量为60。
	形如\`\`\`json [0,4,1, 0, 5, 7] \`\`\`
  这个块内仅允许存在这一个一维数组.
	
	动作取值0时,  表示在以id对应的区域, 建立一个等级为arg的魔物巢穴,此时id为区域ID, 魔物巢穴等级从0到9不等, 数值越大越危险, 普通人的等级和0对应.
	动作取值3时, 表示id对应的国家, 自动抽调武装人口对arg对应的区域发起攻击,此时id为国家ID, arg为国家ID, 他们的目标是消灭所有敌对建筑和敌对单位(包括魔物), 并夺取该地, 如果此地的已经有归属且非敌对，那么不会夺取此地，只会清理这里的敌对建筑和单位.
	
	动作取值2时, 表示id对应的国家, 对arg对应的国家议和, 此时id和arg都是国家ID
	动作取值4时, 表示id对应的国家, 对arg对应的国家宣战, 此时id和arg都是国家ID

	动作取值11, 12,17,18,19, 21, 22, 23, 24, 25, 26 分别表示建造 田地, 民居, 市政厅, 铁匠铺, 酒馆, 募兵所, 步兵兵营, 弓兵兵营, 攻城兵兵营, 商铺, 城墙, 此时id为区域ID而不是国家的ID, 会消耗此城市的经济值进行建造, arg参数任意取值。
  务必要注意, 区域的经济值不够或者未知时, 不允许在此区域建造!国家不允许对尚未属于自己的区域进行建造!

	市政厅消耗5经济, 支持5人工作, 每人每天产出1食物5经济, 每个城市最大建造1座, 供2人口上限, 有足够的人口上限时人口会缓慢增长.
	田地消耗20经济, 支持1人工作, 每人每天产出3食物, 每个城市最大建造20座. 
	民居消耗10经济, 提供4人口上限, 每个城市最大建造40座.
	铁匠铺消耗20经济, 支持2人工作, 每人每天产出0.5装备, 每个城市最大建造4座.
	酒馆消耗20经济, 支持1人工作, 每人每天产出2经济, 每个城市最大建造1座, 建造了酒馆才能招募英雄.
	募兵所消耗15经济, 每个城市最大建造1座, 建造了募兵所才能建造各种兵营.
	步兵兵营消耗15经济, 支持10人工作(作为步兵), 每个城市最大建造10座.
	弓兵兵营消耗15经济, 支持10人工作(作为步兵), 每个城市最大建造10座.
	攻城兵兵营消耗15经济, 支持10人工作(作为步兵), 每个城市最大建造10座.
	商铺消耗50经济, 支持5人工作, 每人每天产出10经济, 每个城市最大建造1座.
	城墙消耗10经济, 提供30的城防值, 每个城市最大建造10座, 除了魔物, 其他敌对国家只有攻击削减完区域所有的城防值才能进入城市进行破坏.
	没有归属的区域, 只能由人们自发群聚, 产生了新归属之后, 才可以进行各种建造。
	建造只能消耗地方的经济值, 如果区域内经济值不足是无法建造的。如果没有提供给你一个区域地经济值，那么它的经济值为0，这样的区域是无法进行任何建造的。
  
  

	你要分别扮演这几个势力进行决策, 于此同时, 你要调整这个世界, 让它更为传奇.
	对决策和剧情设计要有简要说明。如果有额外思考, 要简明扼要.
`;
if (fs.existsSync('./PROMPT')) {
  PROMPT = fs.readFileSync('./PROMPT', 'utf-8');
}
//var msgs = [{role:'system', 'content':PROMPT}]

msgDict = {};
//const server = http.createServer((req, res) => {
app.post('/chat', (req, res) => {
  var allLength = PROMPT.length;
  var summarySet = false;
  //var noSummaryRawBody = '';
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString(); // 收集数据片段
    });
    req.on('end', () => {
      try {
        allLength += body.length
        if (allLength > 10000) {
          body += ".下一条消息里你简短总结一下当前的状况和未来的规划";
          //noSummaryRawBody = body;
          summarySet = true;
        }
        let uuid = req.headers['chatuuid'];
        if (uuid == null) {
          uuid = 'empty';
        }
        let msgs = [];
        if (uuid in msgDict) {
          msgs = msgDict[uuid];
        } else {
          msgDict[uuid] = msgs;
          msgs.push({'role':'system', 'content':PROMPT});
        }
        msgs.push({'role':'user', 'content':body});
        chat(msgs).then(answer => {
            res.writeHead(200, {'Content-Type': 'text/plain',"Access-Control-Allow-Origin": "*","Access-Control-Allow-Methods": "GET, POST, OPTIONS","Access-Control-Allow-Headers": "Content-Type","Access-Control-Max-Age": "3600"});            
            msgs.pop();//移除状态信息(文本量太大)
            msgs.push({'role':'user', content:answer});
            allLength += answer.length
            if (summarySet) {
              msgs = [
                {role:'system', 'content':PROMPT}, {'role':'user', content:answer}
              ];
              msgDict[uuid] = msgs;
              summarySet = false;
              allLength = PROMPT.length;
              console.log("uuid", uuid, "refresh summary\n", "rpompt length:", allLength);
            }
            res.end(answer + "\n");
            
            console.log("ip", req.ip, "uuid", uuid, "answer:", answer, "msgLen:", msgs.length, "allLength", allLength);
          });
    } catch (e) {
        res.statusCode = 400;
        res.end('Invalid content format!!!');
      }
    });    
}});



app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});


//server.listen(8081, () => {
//    console.log('Server running at http://localhost:8081/');
//});
//chat([{'role':'system','content':'you are a helpful assistant'}, {'role':'user', 'content':'today weather'}])

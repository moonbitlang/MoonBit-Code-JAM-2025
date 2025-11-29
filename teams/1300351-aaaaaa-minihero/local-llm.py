from modelscope import AutoModelForCausalLM, AutoTokenizer
class Chatter:
    def __init__(self, model_name, device='cuda'):
        self.device = device
        self.model = AutoModelForCausalLM.from_pretrained(
            model_name,
            dtype="auto", device_map="auto"
        )
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
    def chat(self, msg):
        messages = [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": msg}
        ]
        text = self.tokenizer.apply_chat_template(
            messages,
            tokenize=False,
            add_generation_prompt=True
        )
        model_inputs = self.tokenizer([text], return_tensors="pt").to(self.device)

        generated_ids = self.model.generate(
            model_inputs.input_ids,
            max_new_tokens=8192
        )
        generated_ids = [
            output_ids[len(input_ids):] for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)
        ]

        response = self.tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
        return response
    def chatWithMsgs(self, msgs):
        messages = msgs
        text = self.tokenizer.apply_chat_template(
            messages,
            tokenize=False,
            add_generation_prompt=True
        )
        model_inputs = self.tokenizer([text], return_tensors="pt").to(self.device)

        generated_ids = self.model.generate(
            model_inputs.input_ids,
            max_new_tokens=512
        )
        generated_ids = [
            output_ids[len(input_ids):] for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)
        ]
        
        response = self.tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
        return response
#chatter = Chatter('~/.cache/modelscope/hub/models/qwen/qwen3-0.6b','cpu')
chatter = Chatter('qwen/qwen3-0.6b','cpu')


from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()
class Msg(BaseModel):
    content: str
    role:str
class PostData(BaseModel):
    messages:List[Msg]

@app.post("/v1/chat/completions")
async def generate_text(request: PostData):
    print("chat")
    try:
        result = chatter.chatWithMsgs(request.messages)
        print("result")
        print(result)
        return result
    except Exception as e:
        print("exception occured")
        raise HTTPException(status_code=500, detail=str(e))


print(chatter.chatWithMsgs([{'role':'system', 'content':"you are a helpful assistant"},{'role':'user', 'content':"你好"}]))

"""
pip install modelscope accelerate fastapi uvicorn

# 文件名local-llm.py
uvicorn local-llm:app --reload &

接口测试脚本
wget -qO- --header="Content-Type: application/json" --method=POST\
  --body-data='{"messages": [{"role": "user", "content": "Hello!"}],"max_tokens": 10,"temperature": 0.7}' \
  http://localhost:8000/v1/chat/completions

注意这个返回的是纯文本, 所以不是符合openai格式的响应

"""
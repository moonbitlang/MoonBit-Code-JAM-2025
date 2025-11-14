# Demonmasterlqx/MoonP5

目前指定的 p5js 链接为 "https://cdn.jsdelivr.net/npm/p5@1.11.10/lib/p5.min.js"

## 参考资料

https://p5js.org/reference/

https://p5js.org/reference/p5.sound/

## 举例

要写成实例化

```js
const sketch = (p) => {
    p.setup = function(){
    p.createCanvas(100, 100);

    p.background(200);
    p.noFill(); // 将 noFill() 放在所有 arc() 之前

    // Bottom-right.
    p.arc(50, 55, 50, 50, 0, p.HALF_PI);

    // Bottom-left.
    p.arc(50, 55, 60, 60, p.HALF_PI, p.PI);

    // Top-left.
    p.arc(50, 55, 70, 70, p.PI, p.PI + p.QUARTER_PI);

    // Top-right.
    p.arc(50, 55, 80, 80, p.PI + p.QUARTER_PI, p.TWO_PI);

    }

}
console.log('⚡ 即将创建p5实例...');
new p5(sketch);
```

## 编写指南

采用trait的方式完成。也就是说在添加一个新特征的时候，需要先给trait里面添加一个接口，然后添加一个类的方法，然后为这个trait进行默认实现

举例，如果我现在要对一个类型为 A 的类型添加一个新的方法`craet_XXX`，并且将这个方法加入特征

```moonbit

pub(open) trait TraitName{
    // 得到共享的类型
    getA(Self) -> A
    // _ 下划线代表有默认实现
    craet_XXX(Self, params) -> ReturenType = _
}

// 本地方法实现，不要pub
fn A::craet_XXX_(self, params) -> ReturenType{
    pass
}

// 实现默认方法
impl TraitName with craet_XXX(Self, params) {
    Self.get().craet_XXX_(params)
}

```
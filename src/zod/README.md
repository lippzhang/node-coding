# zod
> https://zod.dev/
## 简介
Zod 是一个以 TypeScript 为首的模式声明和验证库。我使用术语 "模式 "来广义地指任何数据类型，从简单的 字符串 到复杂的嵌套对象。
## 如何运行
```js
pn dev # ts -> js
pn zod # run js
```
## 使用场景
ts中进行数据结构的校验

## 如何使用
```js
import { z } from "zod";
// 创建一个字符串的模式
const mySchema = z.string();

// 解析
mySchema.parse("tuna"); // => "tuna"
mySchema.parse(ˆ12); // => throws ZodError
```


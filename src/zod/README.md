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
TS中进行数据结构的校验。最大的特点是 开发期间以来类型检查，**运行时也可以进行校验**
* 校验后端API结构。避免后端随意更改接口，前端发现不了。可以在Axios中的reaponse中设置拦截器统一处理。
* Rspack这种cli工具校验用户的输入参数。
* NestJs写TS接口的时候，可以校验前端请求的接口参数是否符合预期。
* 结合react-hook-form进行校验
```js
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  age: z.number().min(10),
});

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
      <input {...register('name')} />
      {errors.name?.message && <p>{errors.name?.message}</p>}
      <input type="number" {...register('age', { valueAsNumber: true })} />
      {errors.age?.message && <p>{errors.age?.message}</p>}
      <input type="submit" />
    </form>
  );
};
```

## 部分缺点
* 增加了校验，会影响性能。

## 如何使用
```js
import { z } from "zod";
// 创建一个字符串的模式
const mySchema = z.string();

// 解析
mySchema.parse("tuna"); // => "tuna"
mySchema.parse(ˆ12); // => throws ZodError
```


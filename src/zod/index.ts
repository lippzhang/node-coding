import { z } from "zod";


// 创建一个字符串的模式
const mySchema = z.string();

// 解析
mySchema.parse("tuna"); // => "tuna"

// try {
//   mySchema.parse(ˆ12); // => throws ZodError
// } catch (error) {
//   console.log(error);
// }

// "安全"解析(如果验证失败不抛出错误)
mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
console.log(mySchema.safeParse(12)); // => { success: false; error: ZodError }

const User = z.object({
  username: z.string(),
});

User.parse({ username: "Ludwig" });

// extract the inferred type
type User = z.infer<typeof User>;
// { username: string }

// Strings


// ip
const ip = z.string().ip();

ip.parse("192.168.1.1"); // pass
ip.parse("84d5:51a0:9114:1855:4cfa:f2d7:1f12:7003"); // pass
ip.parse("84d5:51a0:9114:1855:4cfa:f2d7:1f12:192.168.1.1"); // pass

// ip.parse("256.1.1.1"); // fail
// ip.parse("84d5:51a0:9114:gggg:4cfa:f2d7:1f12:7003"); // fail
import { createClient } from "@vercel/kv";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // export default async function handler(request, response) {
  const customKvClient = createClient({
    url: process.env.KV_REST_API_URL as string, // 使用 process.env 来访问环境变量
    token: process.env.KV_REST_API_TOKEN as string, // 使用 process.env 来访问环境变量
    // automaticDeserialization: false,
  });

  // if (request.method === "POST") {
  //   // 处理保存新分数的逻辑
  //   const { scoreboard } = request.body;
  //   await customKvClient.zadd("scoreboard", scoreboard, Date.now().toString());
  //   response.status(200).json({ message: "Score updated" });
  // } else {
  try {
    // const highScore: any = await customKvClient.zrange("scoreboard", 0, 0, {
    //   withScores: true,
    // });
    const result: any = await customKvClient.zrange("scoreboard", 0, 0, {
      withScores: true,
    });
    const highScore = Number(result[1]).toFixed(2);
    // highScore = highScore.toFixed(2);
    response.status(200).json({ highScore });
  } catch (error: any) {
    response.status(500).json({ error: error.message });
    console.log(request);
  }
  // }
}

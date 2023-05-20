// // Next.
// import { NextResponse } from "next/server";

// // External packages.
// import { AxiosResponse } from "axios";
// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// export async function POST(req: Request, response: any) {
//   try {
//     const { title, role } = await req.json();

//     const aiResponse: any = await openai.createCompletion({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "user",
//           content: `Create a small blog post with html tags based on this title: ${title}`,
//         },
//         {
//           role: "ai",
//           content: `${
//             role || "I am a helpful assistant."
//           }. Write with html tags.`,
//         },
//       ],
//     });
//     console.log(aiResponse.data.choices[0].text);

//     return NextResponse.json({
//       content: aiResponse.data.choices[0].message?.content,
//     });
//   } catch (err: any) {
//     console.log(err, "EDIT_POST_ERROR");
//     return new NextResponse("Internal server error", { status: 500 });
//   }
// }

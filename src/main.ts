import * as fs from 'fs';

async function getChunks() {
  try{
    const response = await fetch("https://jigsaw.w3.org/HTTP/ChunkedScript")
    const reader = response.body?.getReader();
    const stream = fs.createWriteStream("result.txt");
    // @ts-ignore
    let chunk = await reader.read();
    const decoder = new TextDecoder()
    let i : number = 0;
    while (!chunk.done) {
      stream.write(chunk.value);
      // @ts-ignore
      chunk = await reader?.read();
      console.log(decoder.decode(chunk.value));
      i++;
      console.log(i);
    }
    stream.end();
    stream.on("finish", () => {
      console.log("Done");
    });
  }
  catch (e){
    console.log(e);
  }
}
  
getChunks();


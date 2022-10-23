import * as fs from "fs"
import { promisify} from "util"

const write = promisify(fs.writeFile);

export default async function load(file: string, transformed : unknown){
    await write(file, JSON.stringify(transformed));
    console.log(transformed);
}
import myTransformations from "./myTransformations";
import myLoadDataDestination from "./myLoadDataDestination";
import fetch from 'cross-fetch';

async function getUsers () {
    try{
        const abc = await fetch("https://jsonplaceholder.typicode.com/users");
        const abcjson = await abc.json();
        const arr = Object.entries(abcjson).map(myTransformations);
        await myLoadDataDestination('result.txt', arr);
    }
    catch(f){
        console.log(f);
    }
        
}

getUsers();

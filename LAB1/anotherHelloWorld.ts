function greeter(person: String){
    return "Hello " + person;
}

let user : string = "fofinho"; //if you remove the type, TypeScript will infer

let message = greeter(user);
let heading = document.createElement("h1");
heading.textContent = message;
document.body.appendChild(heading);
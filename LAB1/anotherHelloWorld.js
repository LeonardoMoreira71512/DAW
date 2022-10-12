function greeter(person) {
    return "Hello " + person;
}
var user = "fofinho"; //if you remove the type, TypeScript will infer
var message = greeter(user);
var heading = document.createElement("h1");
heading.textContent = message;
document.body.appendChild(heading);

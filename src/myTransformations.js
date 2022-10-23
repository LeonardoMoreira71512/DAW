"use strict";
exports.__esModule = true;
function changeEmail(s) {
    return s.replace(/\@(.*)/g, "@ualg.pt");
}
function myTransformations(element) {
    var myElement = element[1];
    return {
        replacedId: myElement.id,
        replacedName: myElement.name,
        username: myElement.username,
        email: changeEmail(myElement.email),
        address: myElement.address,
        phone: myElement.phone,
        website: myElement.website
    };
}
exports["default"] = myTransformations;

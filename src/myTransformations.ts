interface myType{
    id: string;
    name: string;
    username: string;
    email: string;
    address: string;
    phone: string;
    website: string;
}

function changeEmail(s: string) :string{
    return s.replace(/\@(.*)/g, "@ualg.pt");
}

export default function myTransformations(element: [string, unknown]){
    const myElement = element[1] as myType;
    return{
        replacedId: myElement.id,
        replacedName: myElement.name,
        username: myElement.username,
        email: changeEmail(myElement.email!),
        address: myElement.address,
        phone: myElement.phone,
        website: myElement.website
    }
}


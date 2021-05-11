import { LightningElement } from 'lwc';

// export default class HelloWorld extends LightningElement {
//     name ///undefined
//     age = 30;
//     fullname = "Salesforce india";
//     showData = false;
//     details = {
//         name: "dummy",
//         place: "Melbourne"
//     }
//     userList = ["A", "B", "C"]
// }


export default class HelloWorld extends LightningElement {
    fullname = "Zero To Hero";
    title = "aura";

    changeHandler(event) {
        this.title = event.target.value;
    }

}
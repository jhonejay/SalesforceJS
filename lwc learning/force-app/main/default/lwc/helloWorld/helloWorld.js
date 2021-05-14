import { LightningElement, track } from 'lwc';

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

    //data binding example
    fullname = "Zero To Hero";
    title = "aura";

    changeHandler(event) {
        this.title = event.target.value;
    }
    //end data binding

    //@track properties
    @track address = {
        city: "Melbourne",
        postcode: 3808,
        country: "Australia"
    }
    userList = ["a", "b", "c"]

    trackHandler(event) {
        this.address.city = event.target.value;
        //this.address = { ... this.address, "city": event.target.value }
        //this.userList[0] = "test"
    }
    //end @track properties

    //getters example
    users = ["john", "smith", "nik"]
    num1 = 10
    num2 = 20

    get firstUser() {
        return this.users[0].toUpperCase();
    }

    get total() {
        return this.num1 * this.num2;
    }
    //end getters example

    //conditional Rendering

    //end conditional Rendering
}
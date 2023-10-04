/*
    In JavaScript, a factory function is a function that produces and
    returns objects. Unlike constructors and classes, which create new
    instances using the new keyword, factory functions simply return
    new objects when called. Factory functions are a common pattern in
    JavaScript for object creation because they offer more flexibility
    and encapsulation compared to constructors.
*/

function createUser(firstName, lastName) {
    return {
        //firstName: firstName, // simple syntax is bellow
        firstName,
        lastName,
        fullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    };
}

const user1 = createUser("Muhammed", "Basheer");
const user2 = createUser("Fathima", "Thasni");

console.log(user1.fullName()); // "Muhammed Basheer"
console.log(user2.fullName()); // "Fathima Thasni"

/* advantages

 * No new Keyword: Factory functions don't require the use of the new
   keyword, making them less error-prone and more consistent.

 * Composition: You can use factory functions to compose complex objects
   by combining multiple factory functions.

 */
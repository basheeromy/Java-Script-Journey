/*
    In JavaScript, values are categorized into two main types: primitive
    types (also known as value types) and reference types (also known
    as objects or reference values). These two categories have distinct
    characteristics and behaviors in the language.

    --------------------------------------------------------------------

    Primitive Types (Value Types):

    Number: Represents numeric values (e.g., integers and floating-point
        numbers). Examples: 1, 3.14.

    String: Represents text or character data enclosed in single or double
        quotes. Examples: "Hello", 'JavaScript'.

    Boolean: Represents a true or false value. Examples: true, false.

    Undefined: Represents an uninitialized variable or missing property.
        Example: undefined.

    Null: Represents the intentional absence of any object value or
        value that signifies no object. Example: null.

    Symbol (ES6): Represents a unique and immutable value used as
        object property keys. Example: Symbol("mySymbol").

    BigInt (ES11): Represents large integers that cannot be represented
        by the Number type. Examples: 1234567890123456789012345678901234567890n.

    Primitive types are immutable, meaning their values cannot be
    changed after they are created. When you perform operations on
    primitive values, you are working with copies of the values, not
    the original values themselves.

    --------------------------------------------------------------------

    Reference Types (Objects):

    Object: Represents a collection of key-value pairs. Objects can
        contain properties, methods, and other objects. Example: {
            name: "John", age: 30 }.

    Array: A special type of object used to store ordered collections
        of values. Example: [1, 2, 3].

    Function: A type that represents executable code and can be used
        as a function or a constructor for creating objects. Example:
        function sayHello() { console.log("Hello!"); }.

    Date: Represents dates and times. Example: new Date().

    RegExp: Represents regular expressions for pattern matching.
        Example: /pattern/.

    Map and Set (ES6): Specialized data structures for key-value
        mappings (Map) and unique values (Set). Examples: new Map()
        and new Set().

    Reference types are mutable, meaning their values can be changed
    after creation. When you work with reference types, you are working
    with references or pointers to the actual data in memory.

    -------------------------------------------------------------------

    Differences between Primitive and Reference Types:

    Mutability:

        Primitive types are immutable; their values cannot be changed.

        Reference types are mutable; you can change their properties
        and contents.

    Copying:

        Primitive types are copied by value. Assigning a primitive
        value to a new variable creates an independent copy.

        Reference types are copied by reference. Assigning a reference
        type to a new variable creates a reference to the same
        underlying data.

    Comparison:

        Primitive types are compared by their values. Two primitive
        values with the same content are considered equal.

        Reference types are compared by reference. Two reference
        values are considered equal only if they refer to the same
        object in memory.

    Memory Management:

        Primitive values are stored directly in memory.

        Reference values are stored as references to memory locations
        where the actual data is stored.
*/

// both variables are treated as seperate values.
// this is primitive data type.
let x = 13;
let y = x;
x = 23;
console.log(x);
console.log(y);

// let's check objects

let a = {value: 20};
let b = a;
a.value = 30;
console.log(b);
console.log(a);

/*  when we changed variable a, value of varialble b also changed.
    because, object's reference is stored in the variable and we are
    copying the reference.
*/

// let's see with function.

let s = 10;

function increase(param) {
    param ++;
    console.log(param)
}
increase(s);
console.log(s);

/* here when we pass a primitive variable as arg to a function, actually
we will create an entirely new copy of that variable inside the function.
and we are modifying that new variable which is inside the function.*/

// see how objects works when we pass to funcitions

let c = {value: 23};
function decrease(obj) {
    obj.value --;
    console.log(obj.value);
}
decrease(c);
console.log(c.value);

/*
    As we pass the reference, changed value can be accessed from both
    variables.
*/

const object = {
    email: "email already exist.",
    mobile: "mobile number already exist."
}

for (let i in object) {
    console.log(i) // returns keys
}

for (const i in object) {
    console.log(object[i]) // returns values
}
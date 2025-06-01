// > ENCAPSULATION
// metode untuk menyatukan data dan method, bisa membatasi akses ke data yang ada di dalamnya(public property dan private property)
// walaupun sedikit ribet, dengan adanya oop dari sisi maintenance jadi lebih mudah
class User {
    name;
    #email; // private

    constructor(name, email) {
        this.name = name
        this.#email = email
    }

    // method adalah function yang disimpan di dalam class
    getEmail() {
        return this.#email;
    }
}

const user = new User('Fauzan', 'fauzan@gmail.com')
Object.seal(user)
console.log(user) // email tidak akan muncul, karena dibuat private

user.email = "bebas@gmail.com" // ini ngga boleh
console.log(user.getEmail())
console.log(user.email)
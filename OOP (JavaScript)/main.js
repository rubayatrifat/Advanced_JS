// // Constructor Function
// function UserData(name, role, age) {
//     this.name = name,
//     this.role = role,
//     this.age = age,
//     this.bio = `Hi there!! I'm ${name}, I'm a ${role} and I'm ${age} years old`
// }

// UserData.prototype.company = "C.Devs"

// let user1Bio = new UserData("Manush", "Front-end Developer", 22)
// let user2Bio = new UserData("Omuk", "Back-end Developer", 26)
// let user3Bio = new UserData("Rifat", "System Designer", 28)



// console.log(user1Bio.bio)
// console.log(user2Bio.bio)
// console.log(user3Bio.bio)

// console.log(user1Bio.company)
// console.log(user2Bio.company)
// console.log(user3Bio.company)



// ===== CLASSes

class CreateUser {
    constructor(name, email, color) {
        this.name = name
        this.email = email
        this.color = color
        this.role = "user"
    }

    write(text) {
        const h1 = document.createElement("h1")
        h1.textContent = `${this.name} (${this.role}): ${text}`
        h1.style.color = this.color
        document.body.appendChild(h1)
    }
}

class CreateAdmin extends CreateUser {
    constructor(name, email, color) {
        super(name, email, color)
        this.role = "admin"
    }

    eraseMsg(userName) {
        document.querySelectorAll("h1").forEach(item => {
            if(item.style.color === userName.color) {
                item.remove()
            }
        })
    }
}

const user1 = new CreateUser("Tobali Tamuk", "tamik@gfma.com", "red")
const user2 = new CreateUser("Estofa Sarder", "namki@asdf.com", "blue")
const admin1 = new CreateAdmin("Mosa Sarwar", "musasorwar@tuf.com", "green")

user1.write("Hlw")
user2.write("Fuck u")
user1.write("Brother")
user2.write("Fuck uuuuuuuuuuuu")
admin1.write("Mind ur language")
admin1.write("Imma delete ur msg")
admin1.eraseMsg(user2)
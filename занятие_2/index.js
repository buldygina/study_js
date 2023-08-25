const process = require("node:process")
//Объекты
//Объект выглядит так
//js
let object = {
    stroka: "bar",
    number: 0,
    massiv: [0, 1, 2, 3],
    stringArray: ["s", "o", "m", "e", "t", "h", "i", "n", "g"],
    objectInObject: {
        anotherProps: ""
    },
    myFunction: function(){
        console.log("hello world")
    }
}

console.log(object["stringArray"][2])
console.log(object.stringArray[2])
object.myFunction()


let users = [
    {
        name: "sasha",
        age: 19
    },
    {
        name: "liza",
        age: 19
    }
]

for (let person of users){
    console.log(person.age)
}
// базa данных
let socialNetworkDataBase = {
    users: [],
    groups: [],
    clips: [],
    music: [],
    stickers: []
}

function addUser(phone, email, password){
    socialNetworkDataBase.users.push({
        phoneNumber: phone,
        email: email,
        password: password,
        registredAt: "20.08.23",
        avatar: "pic",
        userStickers: [],
        userMusic: [],
        userClips: [],
        addusersticker: function(emoji, numb){
            for (let user of socialNetworkDataBase.users){
                if (numb === user.phoneNumber){
                    user.userStickers.push(emoji)

                }
            }
        }

    })
}
socialNetworkDataBase.users[0].addusersticker("😒", socialNetworkDataBase.users[0].phoneN)
function newGroup(name, descrition, avatar){
    socialNetworkDataBase.groups.push({
        name: name,
        descr: descrition,
        avatar: avatar,
        registredAt: "20.08.23",
        users: []
    })
}

function addClip(shortvideo, description, user){
    socialNetworkDataBase.clips.push({
        video: shortvideo,
        opisanie: description,
        user: user,
    })
}
function addSticker(emoji){
    socialNetworkDataBase.stickers.push({
        emoji: emoji
    })
    
}
function addSticker(file, name){
    socialNetworkDataBase.stickers.push({
        file: file,
        name: name
    })
    
}

// ввод данных
addUser("89160446717", "example@example.com", "hiokko")
console.log(socialNetworkDataBase)

// задание 1 объекты
// let user = {
//     name: "John",
//     surname: "Smith",
// }  
// {
// user.name["Pete"] = true
// }
// {
//     delete user.name
// }
// console.log(user.name)
// console.log(user.surname)
// задание 2
let John = {
    let : 100,
    Ann : 160,
    Pete : 130
}
{
    sum = John.let + John.Ann + John.Pete
}
console.log(sum)

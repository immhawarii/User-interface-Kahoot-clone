var name = "aknar";
var number = 10;
var arr = [];
var arr2 = [1, 2, 3, 4, 5, 6];
var arr3 = [];

var kahoot = new XMLHttpRequest();

kahoot.open("POST", "http://127.0.0.1:5000/register-user");
kahoot.setRequestHeader("Content-Type", "application/json")
kahoot.send(JSON.stringify({
    "user_id": 6,
    "username": "lons",
    "password": "lons123",
    "email": "lons@gmail.com"
}));

// kahoot.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var respons = this.response
//         console.log(respons)
//         alert(respons.message);
//         window.location = "/signUp.html";
//     } else if (this.readyState == 4) {
//         var respons = this.response
//         console.log(respons)
//         alert(respons.message);
//     }
// };


arr.push("dudung", "dadang", "diding", "dodong");

// // for (var i = 0; i < arr.length; i++) {
// //     if (i == 2) {
// //         continue;
// //     }
// //     console.log(i)
// //     console.log(arr[i])
// // }

// // let j = 0;
// // while (true) {
// //     console.log(arr[j]);
// //     j++;
// //     if (j == arr.length) {
// //         break;
// //     };
// // };

// // create function
// function testFunction(message) {
//     console.log(message);
// };
// testFunction("assalamualaikum");
// // another way to create function

// var testFunction2 = function (message) {
//     console.log(message);
// };
// testFunction2("assalamualaikum");
// another way again to create function
// const testFunction3 = (message) => console.log(message);
// testFunction3("assalamualaikum");
// create dictonary/object

var biodata = {
    used_data: [{
        id: 1,
        name: "nur imam hawari akbar",
        age: 21,
        address: "Jl. Setiabudi Gg Bpk Eni No.8/169A"
    }, {
        id: 2,
        name: "Hasna Nabila Khansa",
        age: 23,
        address: "Jl. Soekarno Hatta Bandung"

    }, {
        id: 3,
        name: "firman mulyawan",
        age: null,
        address: ["majalengka", "kuningan", "indramayu"]
    }],
    hobby: [{
        id: 1,
        name: "nur imam hawari akbar",
        hobby_name: "sleep"
    }, {
        id: 2,
        name: "firman mulyawan",
        hobby_name: "eat"
    }],
}
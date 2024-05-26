// let email = prompt("ВАШЕ ИМЯ")
// let login = prompt("ваш логин")
// let age = prompt("введите КАКОЙ ваш СЧЕТ НА КАРТЕ")
// alert((" ИМЯ:" + email) +( " логин:" + login) + (" СЧЕТ НА КАРТЕ:" + age))
// if(age < 1000)(
//     alert("спасибо за покупку")
// )
// else (age > 1000)(
//     alert("готовы потратить ваши деньги на всякую фигню")
// )

// let BMW = {
//     maxSpeed: 300,
//     rotorSpeed: 250,
//     price: 5000000,
//     go: function(){
//     alert("машина едет на район");
//  }
// }

//  alert("BMW " + (BMW.price))
//   alert("вы точно хотите купить?")
//     alert(BMW.go)
 
// let User = {
//     Login: "sasha",
//     password: 123,
//     auth: function(){
//         alert("авторизоваться?")
//     }
// }
// alert(User.Login);
// alert(User.password);
// User.auth()


// 
// 

function test(){
    let textarea = document.getElementById("textdelo");
   let delo = textarea.value
 let div = document.createElement("div");
 div.innerText = delo;
 
 div.classList.add("css.delo")
 let color = prompt("какого цвета будет ваше сообщение")
 document.body.append(div);
}

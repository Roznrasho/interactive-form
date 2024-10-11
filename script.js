

// String kann nicht addiert werden 

/*
- Variablen name = ageToday 
- Variabel Wert  (Inhalt) = "38"
- Veriable Type (Typeof) = string
*/

let ageToday = 38;
// const yearOfBirth = 1986;

/*
- Mann kann mit (+, -, /, oder *) Abrechnung durechführen
*/

// console. log(ageToday + yearOfBirth);

//console.log8("ageToday + yearOfBirth");


const userName = document.getElementById("name").value;
const country = document.getElementById("country").value;
const yearOfBirth = document.getElementById("year").value;
const form = document.getElementById("user-form");
const messageContent = document.getElementById("message-content").textContent;


// funktion syntax

const consoleLogs = () =>{
 console.log("Hallo mein lieber Browser");
 console.log(messageContent);
};

// consoleLogs();

// console.log("Noch Mal loggen");

form.addEventListener("submit",(event) => {
    event.preventDefault();
    consoleLogs();
});
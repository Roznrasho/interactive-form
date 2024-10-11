

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


const userName = document.getElementById("name");
const country = document.getElementById("country");
const yearOfBirth = document.getElementById("year");
const form = document.getElementById("user-form");
const messageContent = document.getElementById("message-content");


// funktion syntax
const currentYear = new Date ().getFullYear();

const consoleLogs = () =>{
 console.log("Hallo mein lieber Browser");
 console.log(messageContent);
};

// consoleLogs();

// console.log("Noch Mal loggen");
console.log(`Das Yahr ist ${currentYear}. Hurraaay!!!`);

form.addEventListener("submit",(event) => {
    event.preventDefault();
    consoleLogs();
    //Benutzerinformation aus Formuiar ausgeben
    console.log(`Name: ${userName.value}`);
    console.log(`Contry: ${country.value}`);
    console.log(`Alter: ${currentYear - yearOfBirth.value}`);
    messageContent.textContent =`Hallo, du bist: ${userName.value},
     du kommst aus: ${country.value},
      du bist: ${currentYear - yearOfBirth.value} alt.
     Herzlich Willkommen 👋 `;
});
let idade = 28;

if(idade > 18) {
    console.log("Você é maior de idade.")
}

let condicaoHumana = true;

if(idade > 18 && condicaoHumana) {
    console.log("Você é maior de idade.")
}

let mesAniversario = "Janeiro"; 

if (mesAniversario === "Janeiro" || mesAniversario === "Dezembro"){
    console.log("Parabéns!")
}

let nome = "Astrogildo";

if(nome.startsWith("R")) {
    console.log("Seu nome começa com R.")
}

nome = "Ronaldo";

if(nome.startsWith("R")) {
    console.log("Seu nome começa com R.")
}

let sobrenome = "Bragança";

if(sobrenome.length > 6 || sobrenome.startsWith("E")){
    console.log("Que sobrenome grande você tem.")
}
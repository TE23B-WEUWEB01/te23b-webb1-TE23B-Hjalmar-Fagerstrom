// while (true) {
//     var namn = prompt("ange ditt namn:");   //popup-ruta att skriva i
//     var lösen = prompt("ange ditt lösen:"); //popup-ruta att skriva i

//     if (namn != "alex" && lösen != "12345") {
//         document.writeln("användarnamn eller lösen stämmer inte <br>");
//     } else {
//         document.writeln(`välkommen in ${namn} <br>`);
//         break;
//     }
// }
// let ålder = prompt("hur gammal är du?");
// document.writeln(`hej ${namn} du är ${ålder} år gammal`);

// Läs in ett heltal mellan 5 och 10
// skriv ut så  många rader som heltalet i webbläsaren, tex:
// rad 1
// rad 2...

var tal = prompt("skriv ett tal mellan 5 till 10")

for (let index = 0; index < tal; index++) {
    document.writeln(`rad ${index} <br>`)
}
// var dag = "fredag";
// alert(dag);
// console.log("idag är det " + dag);

// vart är du född?
// var stad = prompt("vart är du född?");
// console.log("du är född i " + stad);

// // vi gör en enkel captcha
// var gissning = prompt("Är det ok att fuska på prov");
// if (gissning == "nej") {
//     alert("du är en människa");
// } else {
//     alert("du är en robot");
// }

// spamcheck med två slumpade tal 
// var slumptla1 = Math.round(Math.random() * 100);
// var slumptla2 = Math.round(Math.random() * 100);

// var gissning = prompt("vad är " + slumptla1 + " + " + slumptla2 + "?");
// if (gissning == slumptla1 + slumptla2) {
//     document.writeln("<h1>Du är en människa! </h1>");
// } else {
//     document.writeln("<h1>Du är en robot! </h1>");
// }

// skapa miniräknare
// var tal1 = prompt("skriv in första talet");
// var tal2 = prompt("skriv in andra talet");
// var summa = Number(tal1) + Number(tal2)

// document.writeln("summan är " + summa);

// läs in inkomst, 30,000 kr
// läs in skat, 30%
// skriv ut: din inkomst efter skatt är xxx med yy% i skatt

var brutto = prompt("vad är din inkomst för skatt")
var skatt = prompt("vilke prosent betallar du i skatt")
var inkomst = Number(brutto) * (100 - Number(skatt)) / 100;

document.writeln("<h1>din inkomst efter skatt är " + inkomst + " med " + skatt + "% i skatt  </h1>");
import { Importer } from "../../../JS/Importer/importer.js"
var importer = new Importer();

function loadSidebar() {
    document.getElementById("includedContent").innerHTML = importer.load("/FinalSolution/HTML/SharedComponents/Slidebar/slidebar.html");
}

function loadHeader() {
    document.getElementsByTagName("html")[0].innerHTML = importer.load("/FinalSolution/HTML/SharedComponents/Header/header.html");
}
loadHeader();
loadSidebar();
// (function onInit() {
//     loadHeader();
//     loadSidebar();
// });
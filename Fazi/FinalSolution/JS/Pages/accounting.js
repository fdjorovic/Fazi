import { Importer } from "../Importer/importer.js"
import { Table } from "../table.js"

var importer = new Importer();

function loadSidebar() {
    document.getElementById("includedContent").innerHTML = importer.loadComponent("../../../HTML/SharedComponents/Slidebar/slidebar.html");
}

function loadHeader() {
    document.getElementsByTagName("html")[0].children[0].innerHTML = importer.loadComponent("../../../HTML/SharedComponents/Header/header.html");
}

function loadTabOne() {
    document.getElementById("content").innerHTML = importer.loadComponent("../../../HTML/Pages/dashboardTab.html");
}

function loadData() {
    return JSON.parse(importer.loadComponent("../../../HTML/DATA/data.json"));
}

(function() {
    loadHeader();
    loadSidebar();
    loadTabOne();
})();

function rowClickFunction(index) {
    alert(index)
}

function cellClickFunction(index) {
    alert(index)
}

var parent = document.getElementById('table');
var data = loadData();
var columnData = ['Activity', 'Today', 'Yesterday', 'MTD', 'SPLIM', 'Change']
var rowData = ['Bet', 'Win', 'Jackpot Win', 'Total Win', 'GGR', 'Payout', 'Rounds', 'Largest Single Win', 'Unique Logins', 'New Players']
var rowClick = "rowClickFunction";
var cellClick = "cellClickFunction";
var table = new Table(parent, columnData, rowData, data, rowClick, cellClick);
table.generateWithRow();
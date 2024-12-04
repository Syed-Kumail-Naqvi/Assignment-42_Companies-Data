var companies = [

    //------- company No. 1 (Ferrari) -------- 
    {
        comp1Name : "FERRARI",
        comp1Prods : [
            {
               p1Name : "Ferrari F8",
               p1Price : 1099000,
               p1SellQuantity : 2265,
            },

            {
               p2Name : "Ferrari F12",
               p2Price : 880000,
               p2SellQuantity : 812,
            },
            {
               p3Name : "Ferrari F40",
               p3Price : 3750000,
               p3SellQuantity : 1315,
            },
        ],
    },

    //------- company No. 2 (Lamborghini) --------
    {
        comp2Name : "LAMBORGHINI",
        comp2Prods : [
            {
               p1Name : "lamborghini aventador sv",
               p1Price : 550542,
               p1SellQuantity : 900, 
            },
            {
               p2Name : "Lamborghini Sian FKP 37",
               p2Price : 13500000,
               p2SellQuantity : 63,
            },
            {
               p3Name : "Lamborghini Huracán",
               p3Price : 249865,
               p3SellQuantity : 1499,
            },
        ],
    },

    //------- company No. 3 (Toyota) -------- @
    {
        comp3Name : "TOYOTA",
        comp3Prods : [
            {
               p1Name : "TOYTOA SUPRA",
               p1Price : 60535,
               p1SellQuantity : 2652,
            },
            {
               p2Name : "toyota GT 86",
               p2Price : 21763,
               p2SellQuantity : 4133,
            },
            {
               p3Name : "Totota Fortuner 4 x 4 legender",
               p3Price : 19014000,
               p3SellQuantity : 3500,
            },
        ],
    },
    //------- company No. 4 (Audi) --------
    {
        comp4Name : "AUDI",
        comp4Prods : [
            {
               p1Name : "Audi R8",
               p1Price : 71228800,
               p1SellQuantity : 631, 
            },

            {
               p2Name : "Audi E-tron",
               p2Price : 51000000,
               p2SellQuantity : 7503,
            },

            {
               p3Name : "Audi Q8",
               p3Price : 85000000,
               p3SellQuantity : 2995,
            },
        ],
    },
];

// ------- COMPANY 1 'DATA DISPLAY IN TABLE' ------
document.getElementById("1p1:1").innerHTML = companies[0].comp1Prods[0].p1Name;
document.getElementById("1p1:2").innerHTML = companies[0].comp1Prods[0].p1Price;
document.getElementById("1p1:3").innerHTML = companies[0].comp1Prods[0].p1SellQuantity;
var comp1P1TotalRevenue = document.getElementById("1p1:4").innerHTML = companies[0].comp1Prods[0].p1Price * companies[0].comp1Prods[0].p1SellQuantity;

document.getElementById("1p2:1").innerHTML = companies[0].comp1Prods[1].p2Name;
document.getElementById("1p2:2").innerHTML = companies[0].comp1Prods[1].p2Price;
document.getElementById("1p2:3").innerHTML = companies[0].comp1Prods[1].p2SellQuantity;
var comp1P2TotalRevenue = document.getElementById("1p2:4").innerHTML = companies[0].comp1Prods[1].p2Price * companies[0].comp1Prods[1].p2SellQuantity;

document.getElementById("1p3:1").innerHTML = companies[0].comp1Prods[2].p3Name;
document.getElementById("1p3:2").innerHTML = companies[0].comp1Prods[2].p3Price;
document.getElementById("1p3:3").innerHTML = companies[0].comp1Prods[2].p3SellQuantity;
var comp1P3TotalRevenue = document.getElementById("1p3:4").innerHTML = companies[0].comp1Prods[2].p3Price * companies[0].comp1Prods[2].p3SellQuantity;

document.getElementById("comp1TotalRevenue").innerHTML =  comp1P1TotalRevenue + comp1P2TotalRevenue + comp1P3TotalRevenue;

// ------- COMPANY 2 'DATA DISPLAY IN TABLE' ------
document.getElementById("2p1:1").innerHTML = companies[1].comp2Prods[0].p1Name;
document.getElementById("2p1:2").innerHTML = companies[1].comp2Prods[0].p1Price;
document.getElementById("2p1:3").innerHTML = companies[1].comp2Prods[0].p1SellQuantity;
var comp2P1TotalRevenue = document.getElementById("2p1:4").innerHTML = companies[1].comp2Prods[0].p1Price * companies[1].comp2Prods[0].p1SellQuantity;

document.getElementById("2p2:1").innerHTML = companies[1].comp2Prods[1].p2Name;
document.getElementById("2p2:2").innerHTML = companies[1].comp2Prods[1].p2Price;
document.getElementById("2p2:3").innerHTML = companies[1].comp2Prods[1].p2SellQuantity;
var comp2P2TotalRevenue = document.getElementById("2p2:4").innerHTML = companies[1].comp2Prods[1].p2Price * companies[1].comp2Prods[1].p2SellQuantity;

document.getElementById("2p3:1").innerHTML = companies[1].comp2Prods[2].p3Name;
document.getElementById("2p3:2").innerHTML = companies[1].comp2Prods[2].p3Price;
document.getElementById("2p3:3").innerHTML = companies[1].comp2Prods[2].p3SellQuantity;
var comp2P3TotalRevenue = document.getElementById("2p3:4").innerHTML = companies[1].comp2Prods[2].p3Price * companies[1].comp2Prods[2].p3SellQuantity;

document.getElementById("comp2TotalRevenue").innerHTML = comp2P1TotalRevenue + comp2P2TotalRevenue + comp2P3TotalRevenue; 

// ------- COMPANY 3 'DATA DISPLAY IN TABLE' ------
document.getElementById("3p1:1").innerHTML = companies[2].comp3Prods[0].p1Name;
document.getElementById("3p1:2").innerHTML = companies[2].comp3Prods[0].p1Price;
document.getElementById("3p1:3").innerHTML = companies[2].comp3Prods[0].p1SellQuantity;
var comp3P1TotalRevenue = document.getElementById("3p1:4").innerHTML = companies[2].comp3Prods[0].p1Price * companies[2].comp3Prods[0].p1SellQuantity;

document.getElementById("3p2:1").innerHTML = companies[2].comp3Prods[1].p2Name;
document.getElementById("3p2:2").innerHTML = companies[2].comp3Prods[1].p2Price;
document.getElementById("3p2:3").innerHTML = companies[2].comp3Prods[1].p2SellQuantity;
var comp3P2TotalRevenue = document.getElementById("3p2:4").innerHTML = companies[2].comp3Prods[1].p2Price * companies[2].comp3Prods[1].p2SellQuantity;

document.getElementById("3p3:1").innerHTML = companies[2].comp3Prods[2].p3Name;
document.getElementById("3p3:2").innerHTML = companies[2].comp3Prods[2].p3Price;
document.getElementById("3p3:3").innerHTML = companies[2].comp3Prods[2].p3SellQuantity;
var comp3P3TotalRevenue = document.getElementById("3p3:4").innerHTML = companies[2].comp3Prods[2].p3Price * companies[2].comp3Prods[2].p3SellQuantity;

document.getElementById("comp3TotalRevenue").innerHTML = comp3P1TotalRevenue + comp3P2TotalRevenue + comp3P3TotalRevenue;

// ------- COMPANY 4 'DATA DISPLAY IN TABLE' ------
document.getElementById("4p1:1").innerHTML = companies[3].comp4Prods[0].p1Name;
document.getElementById("4p1:2").innerHTML = companies[3].comp4Prods[0].p1Price;
document.getElementById("4p1:3").innerHTML = companies[3].comp4Prods[0].p1SellQuantity;
var comp4P1TotalRevenue = document.getElementById("4p1:4").innerHTML = companies[3].comp4Prods[0].p1Price * companies[3].comp4Prods[0].p1SellQuantity;

document.getElementById("4p2:1").innerHTML = companies[3].comp4Prods[1].p2Name;
document.getElementById("4p2:2").innerHTML = companies[3].comp4Prods[1].p2Price;
document.getElementById("4p2:3").innerHTML = companies[3].comp4Prods[1].p2SellQuantity;
var comp4P2TotalRevenue = document.getElementById("4p2:4").innerHTML = companies[3].comp4Prods[1].p2Price * companies[3].comp4Prods[1].p2SellQuantity;



document.getElementById("4p3:1").innerHTML = companies[3].comp4Prods[2].p3Name;
document.getElementById("4p3:2").innerHTML = companies[3].comp4Prods[2].p3Price;
document.getElementById("4p3:3").innerHTML = companies[3].comp4Prods[2].p3SellQuantity;
var comp4P3TotalRevenue = document.getElementById("4p3:4").innerHTML = companies[3].comp4Prods[2].p3Price * companies[3].comp4Prods[2].p3SellQuantity;


document.getElementById("comp4TotalRevenue").innerHTML = comp4P1TotalRevenue + comp4P2TotalRevenue + comp4P3TotalRevenue; 

















let draggableObjects;
let dropPoints;
const StartButton = document.getElementById
("Empezar");
const result = document.getElementById("Resultado");
const controls =  document.querySelector(".controls-contaigner");
const dragContainer = document.querySelector(".drop-points");
const data = [
    "Thomas Edison", 
    "Gónzales Camarena", 
    "John Logie Baird",
    "Salvador Dalí", 
    "Diego RIvera",
    "León Trotski", 
    "Pablo Picasso",
    "Diego Rivera", 
    "Leonardo Da Vinci",
    "Helio", 
    "Hielo",
    "Hierro",
    "Mango",
    "Mélon", 
    "Manzana", 
    "Marte",
    "Saturno",
    "Mercurio",
    "18",
    "17",
    "16",
    "Nikki Roumel",
    "Emily Cooper",
    "Lily Collins",
    "Teólogo",
    "Geólogo",
    "Filósofo",
    "Rómulo y Remo",
    "Julio Cesár",
    "Marcus Cicero",
    "1778",
    "1991",
    "1894",
    "NIcaragua",
    "México",
    "Ecuador",
    "Marie Curie",
    "Helen Keller",
    "Ana Frank",
    "QuadPad",
    "Quidditch",
    "Carreras de Caballos",
    "España",
    "Colombia",
    "Venezuela",
    "Herbívoros",
    "Omnívoros",
    "Carnívoros",
    "Marcel",
    "Marley",
    "Lassie",
    "Colíbri",
    "Garza",
    "Loro",
    "TikTok",
    "Instragram",
    "Twitter",
    "Vatios",
    "Voltios",
    "Decibelios",
];

let deviceType = "";
let InitialX = 0,
InitialY = 0;
let currentElement = "";
let moverElement = false;

const IstouchDevice = () => {
    try{
        document.createEvent("TouchEvent");
        deviceType = "Touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};
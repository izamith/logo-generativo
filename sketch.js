//Gnerative system for Piscina de Pixel's logo
//Sistema generativo de logo para a Piscina de Pixel
//Isabela Zamith, 2020/2021

const logoSize = 400;
const grid = 4;
const miniShapes = 16
let colors = [];
const inception = 5

function setup() {
    createCanvas(1000,700,SVG);
    background(4,16,6)
    noLoop();
    rectMode(CENTER);
    angleMode(DEGREES);
    colors = [
        color(236,89,55),
        color(28,146,255),
        color(255,241,226)
    ];
    //debug
    console.log('Loaded')
}

function draw() {
    outside();
    centerCrosses();  
}

//FUNCOES DE DESENHO
//forma externa
function outside() {
    let theColor = getColor();
    let turn = getRandomInt();
    stroke(theColor);
    noFill();
    let theStroke = getRandomInt() ? 3 : 7;
    strokeWeight(theStroke);
    push();
        translate(width/2, height/2);
        if (turn == true) {
            rotate(45);
        }
        rect(0,0,logoSize,logoSize);  
    pop();
}

//linhas
function centerCrosses() {
    //numero ponto min
    let limit = getRandomInt() ? inception : inception*2;
    //distancia entre um e outro
    let dividers = (logoSize/2) / limit;
    //inicio
    let begin = floor(random(0,limit));
    let end = floor(random(begin,limit+1));
    let miniShapeSize = getRandomInt() ? miniShapes : miniShapes*2;
 
    let theColor = getColor();
    stroke(theColor);
    let theStroke = getRandomInt() ? 1 : 3;
    strokeWeight(theStroke);

    let doesFill = getRandomInt();
    if (doesFill==true) {
            fill(theColor);    
    } else {
        noFill(); 
    }
 
    //dá a volta e posiciona a linha em 
    //X posições espaçadas igual (grid)
    let n = getRandomInt() ? grid : grid*2
    const positions = 360/n;
    push();
        translate(width/2,height/2);
        for (var i=0; i<n; i++) {
            rect(begin*dividers,end*dividers,miniShapeSize,miniShapeSize);
            rotate(positions);
        };
    pop();
}

///FUNCOES SECUNDÁRIAS
//funcao sorteio de cor
function getColor() {
    //escolha de cor aleatória, random arredondado
    const ranCol = floor(random(0,colors.length));
    const colorIs = colors[ranCol];
     //atribui esse número à const de stroke
    return colorIs;
}
//funcao padrão true false para se basear nas escolhas
function getRandomInt() {
    const ranInt = random(0,1);
    if (ranInt <0.5) {
        return true;
    }
    else {
        return false;
    }
}

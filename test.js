//Gnerative system for Piscina de Pixel's logo
//Sistema generativo de logo para a Piscina de Pixel
//Isabela Zamith, 2020/2021

let colors =[]
const logoSize = 200;
const miniSize = logoSize/5
function setup() {
    colors = [
        color(236,89,55),
        color(28,146,255),
        color(255,241,226)
    ];
    createCanvas(1000,700,SVG);
    background(4,16,6)
    noLoop();
    rectMode(CENTER);
    angleMode(DEGREES);    
}

function draw() {
    translate(width/2, height/2);
    let picker = random(1)

    if (picker > 0.3) {
        outside();
        console.log(picker)
    }
    picker = random(1)
    if (picker > 0.7) {
        innerRect();
        console.log(picker)
    }
    picker = random(1)
    if (picker> 0.5) {
        centerCrosses();
        console.log(picker)
    }
    picker = random(1)
    if (picker > 0.7) {
        miniShapes();
        picker = random(1); 
            if (picker<0.3) {
                miniShapes();
            }
        console.log(picker)
    }
    picker = random(1); 
    if (picker < 0.3) {
        corners();
        console.log(picker)
    }
    //outside();
    //innerRect()
    //centerCrosses();
    //miniShapes();
    //corners()
}

function outside() {
    let turn = getRandomInt()
    let theColor = getColor()
    stroke(theColor);
    noFill()
    push()
    strokeWeight(7);
    if (turn == true) {
        rotate(45);
    } 
    rect(0,0,logoSize,logoSize);    
    pop()
}

function innerRect() {
    let both = getRandomInt() ? 0:1
    let theColor = getColor()
    stroke(theColor);
    noFill()
    strokeWeight(7);
    if (both==0) {
         //rectangles that make a square
     push()
     rect(0,0,logoSize,logoSize/2)
     rect(0,0,logoSize/2,logoSize)
     pop()
    } else {
        let choose = getRandomInt() ? 0:1
        if (choose==0) {
            push()
            rect(0,0,logoSize,logoSize/2)
            pop()
        }
        else {
           push()
           rect(0,0,logoSize/2,logoSize)
           pop()
        }
    }
    
}

function centerCrosses() {
    let theColor = getColor()
    stroke(theColor);
    strokeWeight(4);
    let both = getRandomInt() ? 0:1
    if (both==0) {
        push()
        line(-logoSize/2,0, logoSize/2, 0)
        pop()
    
        push()
            line(0,-logoSize/2, 0,logoSize/2)
        pop()
    } else {
        let choose = getRandomInt() ? 0:1
        if (choose==0) {
            push()
             line(-logoSize/2,0, logoSize/2, 0)
            pop()
        }
        else {
            push()
             line(0,-logoSize/2, 0,logoSize/2)
            pop()
        }
    }
    console.log('line')

    //diagonal
    /*
    push()
        line(-logoSize/2, -logoSize/2,  logoSize/2,  logoSize/2);
    pop()
    push()
        line(logoSize/2, -logoSize/2,  -logoSize/2,  logoSize/2);
    pop()
    */
}

function miniShapes() {
    let theColor = getColor()
    stroke(theColor);
    strokeWeight(3);
    noFill()
    let wich = random(1)
    if (wich < 0.2) {
        //ellipses
        push()
            ellipse(0,15,miniSize,miniSize);
            translate(15,-15);
            ellipse(0,15,miniSize,miniSize);
            translate(-15,-15);
            ellipse(0,15,miniSize,miniSize);
            translate(-15,15);
            ellipse(0,15,miniSize,miniSize);
        pop()

    } else if (0.2 < wich < 0.4) {
        //squares
        push()
            rect(20,20,miniSize,miniSize);
            rect(-20,20,miniSize,miniSize);
            rect(20,-20,miniSize,miniSize);
            rect(-20,-20,miniSize,miniSize);
        pop()   
    } else if (0.4 < wich < 0.8) {
        //x
        push()
            stroke(colors[1]);
            strokeWeight(3);
            noFill()
            line(0,0,10,10);
            line(0,0,10,-10);
            line(0,0,-10,-10);
            line(0,0,-10,10);
        pop()
    } else {
        //center square 
        push() 
            stroke(colors[1]);
            strokeWeight(3);
            noFill();
            rect(0,0,miniSize,miniSize)
        pop()
    }   
}

function corners() {
    let theColor = getColor()
    stroke(theColor);
    strokeWeight(7);
    //ends
    push()
    
    noFill();
    const cornerSize = logoSize/3
    //sup direito
    line(logoSize/2,-logoSize/2,cornerSize,-logoSize/2)
    line(logoSize/2,-logoSize/2,logoSize/2,-cornerSize)

    //inf direito
    line(logoSize/2,logoSize/2,cornerSize,logoSize/2)
    line(logoSize/2,logoSize/2,logoSize/2,cornerSize)

    //inf esquerdo
    line(-logoSize/2,logoSize/2,-logoSize/2,cornerSize)
    line(-logoSize/2,logoSize/2,-cornerSize,logoSize/2)

    //sup esquerdo
    line(-logoSize/2,-logoSize/2,-cornerSize,-logoSize/2)
    line(-logoSize/2,-logoSize/2,-logoSize/2,-cornerSize)


    pop()

    

    //paths

}

function getColor() {
    //escolha de cor aleatória, random arredondado
    const ranCol = floor(random(0,colors.length));
    const colorIs = colors[ranCol]
     //atribui esse número à const de stroke
    return colorIs;
}

//funcao padrão true false para ajudar nas escolhas
function getRandomInt() {
    const ranInt = random(0,1);
    if (ranInt <0.5) {
        return true 
    }
    else {
        return false
    }
}


































////////////////////////////////////////////////
/*
console.log('dehhhbug')

let colors = []
const grid = 50;

const size = 100;


function setup() {
    //array de cores
    colors = [
        color(0,78,129),
        color(0,114,189),
       // "transparent",
        //color(237,224,211)
    ];
    //cria o canvas e define que as formas sao em svg não pixels
    createCanvas(700,700,SVG);
    //não vai usar animaçoes
    noLoop();  
    angleMode(DEGREES);
    //formas começam a ser desenhadas pelo centro
    rectMode(CENTER)
}



function draw() {
   //testlines();
   //outerShape();
   centerCross()
   //getLineDirection();
  
   //    squarePool()
   //innerShapes();
   
}


function outerShape() {
    let strokeCol = getColor();
    //se for true, weight = 1, false é igual a 3
    let weight = getRandomInt() ? 3:5

    stroke(strokeCol);
    strokeWeight(weight)

    push()
    translate(width/2,height/2);
    rect(0,0,size,size);
    pop()
}


function centerCross() {
    translate(width/2,height/2);
    for (var j = 0; j<grid; j++) {
        noStroke()
        for (var i =0; i<grid; i++) {
            let fillCol = getColor();
           
                fill(fillCol)

             
                
            
            //iníciox, inicioy, tamanho, tamanho
            rect(((-size/2)+(size/grid)/2),(-size/2)+(size/grid)/2,size/grid,size/grid);
            translate(size/grid, 0);     
        }
        translate(-size, size/grid);

    }
}
       


function innerShapes() {
    translate(width/2,height/2);
    let fillCol = getColor();
    let strokeCol = getColor();
    //se for true, weight = 1, false é igual a 3
    let weight = getRandomInt() ? 1:3
    let pixelSize = getRandomInt() ? 10:50

    //posição aleatoria dentro do tamanho limite
    let positionX = floor(random(0,size/2))
    let positionY = floor(random(0, -size/2))
    console.log(positionX, positionY)
    fill(fillCol);
    stroke(strokeCol)
    //translate(size/grid,size/grid);
    rect(positionX,positionY,pixelSize,pixelSize);
}

function squarePool() {
    translate(width/2,height/2);
    for (var i = 0; i<grid; i++) {
        let fillCol = getColor();
        let strokeCol = getColor();
    //se for true, weight = 1, false é igual a 3
        let weight = getRandomInt() ? 1:3
        let pixelSize = getRandomInt() ? size/100:size/5

    //posição aleatoria dentro do tamanho limite
        let positionX = floor(random(0,size/2))
        let positionY = floor(random(0, -size/2))
        console.log(positionX, positionY)
        fill(fillCol);
        stroke(strokeCol)
    //translate(size/grid,size/grid);
        rect(positionX,positionY,pixelSize,pixelSize);
   
    }
}

function testlines() {
    const strokeCol = getColor();
    //posiciona a forma no meio
    translate(width/2,height/2);
    noFill();
    //stroke é a cor do random
    stroke(strokeCol);
    rect(0,0,size,size);
    stroke(colors[1])
    getLineDirection()
}

function getLineDirection() {
    let strokeCol = getColor();
    //se for true, weight = 1, false é igual a 3
    let weight = getRandomInt() ? 3:5

    push()
    translate(width/2,height/2);
     //random de 0 a 1 para definir a direcao das linhas
    const ranDir = (random(0,1));
   
    //vertical
    for (var i =0; i<grid; i++) {
        
    stroke(strokeCol);
    strokeWeight(weight)
        if (ranDir < 0.5) {
         line(-size/2,-size/2,-size/2, size/2)
        
            translate(size/grid, 0);
        }
        //horizontal
        else if (ranDir > 0.5) {
            line(-size/2,-size/2,size/2, -size/2)
            translate(0, size/grid);
        }        
    }
    pop() 
}

function getColor() {
    //escolha de cor aleatória, random arredondado
    const ranCol = floor(random(0,colors.length));
    const colorIs = colors[ranCol]
     //atribui esse número à const de stroke
    return colorIs;
}

//funcao padrão true false para ajudar nas escolhas
function getRandomInt() {
    const ranInt = random(0,1);
    if (ranInt <0.5) {
        return true 
    }
    else {
        return false
    }
}
*/


//////////////////////////

/*
let yoff = 0.0;

function makeBlob() {
 

    translate(width / 2, height / 2);
  

    
  
    beginShape();
    let xoff = 0;
    

    for (var a = 0; a < TWO_PI ; a += 0.1) {
      let offset = map(noise(xoff, yoff), 0, 1, -25, 25);
      let choice = 150+offset;
      let strokeCol = getColor();
      //se for true, weight = 1, false é igual a 3
      let weight = getRandomInt() ? 3:5
      noStroke();
      strokeWeight(weight);
      fill(strokeCol);
      let x = choice * cos(a);
      let y = choice * sin(a);
      curveVertex(x, y);
      console.log(x,y)
      xoff += 0.1;
     
      //ellipse(x, y, 4, 4);
    }
    
   
    
    endShape();
    yoff += 0.1;
  
}
*/

///////////////////////

/*

function outerShape() {
    let strokeCol = getColor();
    //se for true, weight = 1, false é igual a 3
    let weight = getRandomInt() ? 3:5

    stroke(strokeCol);
    strokeWeight(weight)

    push()
    translate(width/2,height/2);
    rect(0,0,size,size);
    pop()
}

function makeBlob() {
 

      translate(width / 2, height / 2);
    

      
    
      beginShape();
      let xoff = 0;
      

      for (var a = 0; a < TWO_PI ; a += 0.1) {
        let offset = map(noise(xoff, yoff), 0, 1, -25, 25);
        let choice = 150+offset;
        let strokeCol = getColor();
        //se for true, weight = 1, false é igual a 3
        let weight = getRandomInt() ? 3:5
        noStroke();
        strokeWeight(weight);
        fill(strokeCol);
        let x = choice * cos(a);
        let y = choice * sin(a);
        curveVertex(x, y);
        console.log(x,y)
        xoff += 0.1;
       
        //ellipse(x, y, 4, 4);
      }
      
     
      
      endShape();
      yoff += 0.1;
    
}



function centerCross() {
    translate(width/2,height/2);
    for (var j = 0; j<grid; j++) {
        noStroke()
        for (var i =0; i<grid; i++) {
            let fillCol = getColor();
           
                fill(fillCol)

             
                
            
            //iníciox, inicioy, tamanho, tamanho
            rect(((-size/2)+(size/grid)/2),(-size/2)+(size/grid)/2,size/grid,size/grid);
            translate(size/grid, 0);     
        }
        translate(-size, size/grid);

    }
}
       


function innerShapes() {
    translate(width/2,height/2);
    let fillCol = getColor();
    let strokeCol = getColor();
    //se for true, weight = 1, false é igual a 3
    let weight = getRandomInt() ? 1:3
    let pixelSize = getRandomInt() ? 10:50

    //posição aleatoria dentro do tamanho limite
    let positionX = floor(random(0,size/2))
    let positionY = floor(random(0, -size/2))
    console.log(positionX, positionY)
    fill(fillCol);
    stroke(strokeCol)
    //translate(size/grid,size/grid);
    rect(positionX,positionY,pixelSize,pixelSize);
}

function squarePool() {
    translate(width/2,height/2);
    for (var i = 0; i<grid; i++) {
        let fillCol = getColor();
        let strokeCol = getColor();
    //se for true, weight = 1, false é igual a 3
        let weight = getRandomInt() ? 1:3
        let pixelSize = getRandomInt() ? size/100:size/5

    //posição aleatoria dentro do tamanho limite
        let positionX = floor(random(0,size/2))
        let positionY = floor(random(0, -size/2))
        console.log(positionX, positionY)
        fill(fillCol);
        stroke(strokeCol)
    //translate(size/grid,size/grid);
        rect(positionX,positionY,pixelSize,pixelSize);
   
    }
}

function testlines() {
    const strokeCol = getColor();
    //posiciona a forma no meio
    translate(width/2,height/2);
    noFill();
    //stroke é a cor do random
    stroke(strokeCol);
    rect(0,0,size,size);
    stroke(colors[1])
    getLineDirection()
}

function getLineDirection() {
    let strokeCol = getColor();
    //se for true, weight = 1, false é igual a 3
    let weight = getRandomInt() ? 3:5

    push()
    translate(width/2,height/2);
     //random de 0 a 1 para definir a direcao das linhas
    const ranDir = (random(0,1));
   
    //vertical
    for (var i =0; i<grid; i++) {
        
    stroke(strokeCol);
    strokeWeight(weight)
        if (ranDir < 0.5) {
         line(-size/2,-size/2,-size/2, size/2)
        
            translate(size/grid, 0);
        }
        //horizontal
        else if (ranDir > 0.5) {
            line(-size/2,-size/2,size/2, -size/2)
            translate(0, size/grid);
        }        
    }
    pop() 
}

*/


///////////////////////

/*

function makePool() {
   
    //cores aleatórias e stroke weight
    let newColor = getColor()
    let shouldItBeFilled = getRandomInt() ? 0:1 
    let weight = getRandomInt() ? 0.5:1
    strokeWeight(weight)
    stroke(newColor);
    if (shouldItBeFilled == 1) {
        let newColor = getColor()
        fill(newColor)
    }

    let xCoordinates = rectangleGenerator();
    let yCoordinates = rectangleGenerator();
    console.log(xCoordinates, yCoordinates)
    //piscina central
    push()
        beginShape()
        for (var i = 0; i<xCoordinates.length; i++) {
            vertex(xCoordinates[i],yCoordinates[i]);        
        }    
        endShape(CLOSE) 
    pop()
}

function makeText() {
    //cores aleatórias e stroke weight
    let newColor = getColor()
    let shouldItBeFilled = getRandomInt() ? 0:1 
    stroke(newColor);
    if (shouldItBeFilled == 1) {
        let newColor = getColor()
        fill(newColor)
    }
    
    textSize(random(32));
    let xCoordinates = rectangleGenerator();
    let yCoordinates = rectangleGenerator();
    text('P', xCoordinates, yCoordinates);
}



   




function rectangleGenerator() {
    let Values=[];
    for (var i = 0; i <4; i++) {
        let x = floor(random(30,100));
       Values.push(x);
       if (Values[i]<Values[i-1]) {
        Values.pop(x);
        i-=1
       }
      
    }
    return(Values)
}

*/




///////////////

/* 
function rectangle() {

    let situation = getRandomInt() ? multiplo() : unico();

    function multiplo() {
        var i = floor(random(1,4))
        var j = 0
        console.log(i)
        do {
            drawRectangle()
            j+=1
        } while (j!=i)
        
     }

     function unico() {
         
     
        drawRectangle()
     }

    //vertex(3,3);
    //vertex(5,2);
    //vertex(7,3);
    //vertex(5,4);
    //vertex(3,3);
    //vertex(3,5);
    //vertex(5,6);
    //vertex(7,5);
    //vertex(7,3);
    //vertex(5,4);
    //vertex(5,6);
}

function drawRectangle() {
         
             //posiciona a forma no centro do canvas
            let newColor = getColor();
            let newStroke = getRandomInt() ? 0.4 : 0.7;

            strokeWeight(newStroke);
            stroke(newColor);
            noFill()
            beginShape();
                randomCoordinates()
                    vertex(x[0],y[0]);
                    vertex(x[1],y[1]);
                    vertex(x[2],y[0]);
                    vertex(x[1],y[2]);
                    vertex(x[0],y[0]);
                    vertex(x[0],y[3]);
                    vertex(x[1],y[4]);
                    //vertex(x[1],y[4]);
                          //vertex(x[1],y[4]);
                    vertex(x[2],y[3]);
                    vertex(x[2],y[0]);
                    vertex(x[1],y[2]);
                    vertex(x[1],y[4]);
            endShape();
            
            console.log('done');
        
           
}

*/

////////////////////

/*
function vertices() {
    stroke(0)
    fill(0)
    push()
        translate(width/2,height/2);
      
    

    ellipse(x[0],y[0],1,1);
    //ellipse(x[1],y[1],1,1);
    ellipse(x[2],y[0],1,1);
    ellipse(x[1],y[2],1,1);
    ellipse(x[0],y[0],1,1);
    //ellipse(x[0],y[3],1,1);
    ellipse(x[1],y[4],1,1);
          
                 //ellipse(x[2],y[3],1,1);
                 ellipse(x[2],y[0],1,1);
                 ellipse(x[1],y[2],1,1);
                 ellipse(x[1],y[4],1,1);
    
                 pop()
    
    //ellipse(3,3,1,1)
    //ellipse(3,3,1,1);
    //ellipse(5,2,1,1);
    //ellipse(7,3,1,1);
    //ellipse(5,4,1,1);
    //ellipse(3,3,1,1);
    //ellipse(3,5,1,1);
    //ellipse(5,6,1,1);
    //ellipse(7,5,1,1);
    //ellipse(7,3,1,1);
    //ellipse(5,4,1,1);
    //ellipse(5,6,1,1);
}
*/




/////////////////////

/*
//Generative system for Piscina de Pixel's logo
//Sistema generativo de logo para a Piscina de Pixel
//Isabela Zamith, 2020/2021

console.log('dehhhbug')

let colors = []
const grid = 5;

const logoSize = 500;
var x = []
var y = []//[3,2,4,5,6]
let largura;
let altura;
let colo 


function setup() {
    //array de cores
    colors = [

        color(0,114,189),
        color(4,16,6),
        color(236,89,55),
       // "transparent",
        color(237,224,211),
    ];

    //cria o canvas e define que as formas sao em svg não pixels
    createCanvas(550,550,SVG);
    //não vai usar animaçoes
    noLoop();  
    //angleMode(DEGREES);
    //formas começam a ser desenhadas pelo centro
    rectMode(CENTER);
    strokeCap(ROUND);
}



function draw() {
    let newColorOut = getColor();
    push();
    translate(width/2,height/2);
    drawPoli();
    pop()

    push()
    faces();
    pop()
    console.log('faces')
 
}

//gerar ou não
function base() {
    strokeWeight(0.5);
    stroke(0);
    beginShape()
    vertex(3,5);
    vertex(5,6);
    vertex(7,5);
    vertex(5,4);
    endShape(CLOSE)
}


//gerar ou não
function faces() {
    let newColor = getColor();
    fill(newColor);
    let isStroke = getRandomInt() ? 0 : 1;

    if (isStroke==0) {
        stroke(colo);
    }else {
        noStroke()
    }
    

    push()
    beginShape()
    translate(width/2,height/2-grid);
    vertex(x[0],y[0]);
    vertex(x[1],y[1]);
    vertex(x[2],y[0]);
    vertex(x[1],y[2]);
    endShape(CLOSE)
    pop()

    push()
    beginShape()
    translate(width/2-grid,height/2);
    vertex(x[0],y[0]);
    vertex(x[1],y[2]);
    vertex(x[1],y[4]);
    vertex(x[0],y[3]);
    endShape(CLOSE)
    pop()
   


    push()
    beginShape()
    translate(width/2+grid,height/2);
           vertex(x[2],y[0]);
           vertex(x[1],y[2]);
           vertex(x[1],y[4]);
           vertex(x[2],y[3]);
           endShape(CLOSE)
           pop()



}

//random: mais de um, tamanhos diferentes
function drawPoli() {     
    //posiciona a forma no centro do canvas
   let newColorOut = getColor();
   colo = newColorOut;
   let newStroke = getRandomInt() ? 0.4 : 1.5;

   strokeWeight(newStroke);
   stroke(newColorOut);
   noFill()
  
   
   beginShape();
       randomCoordinates()
           vertex(x[0],y[0]);
           vertex(x[1],y[1]);
           vertex(x[2],y[0]);
           vertex(x[1],y[2]);
           vertex(x[0],y[0]);
           vertex(x[0],y[3]);
           vertex(x[1],y[4]);
           // vertex(x[1],y[4]);
           // vertex(x[1],y[4]);
           vertex(x[2],y[3]);
           vertex(x[2],y[0]);
           vertex(x[1],y[2]);
           vertex(x[1],y[4]);
   endShape();
   
   console.log('done');

  
}

function randomCoordinates() {
    //largura, ponto no meio e ponto inicial do poligono
    const lim = 50
    //inicio, ponto 0
    var x0 = floor(random(1,lim/2))
    //distancia entre inicio e fim, fim necessariamente maior
    //já que o x1 não pode passar pra trás do x0,
    //a largura/2 que é x1 não pode ser menor que x0
    do {
        largura = floor(random(x0,lim))
    } while ((largura/2)<x0 || (largura/2)==x0  );
    //ponto no meio entre maior e menor, ambos os lados iguais
    //+ uma distância pequena pra perspectiva
    var x1 = largura/2 
    
    //adiciona ao array
    x.push(x0);
    x.push(x1);
    x.push(largura);

    console.log('random x');
    
    //altura, ponto inicial
    var y0 = floor(random(1,lim/2));
    //"profundidade" da face do topo
    var profundidade = floor(random(y0,y0-(lim/2))); 
    //profundidade projetada pra baixo, negativa
    var y2 = profundidade+lim/2; //floor(random(y0-y1))
    altura = lim; //floor(random(y2-10,y0))
    var y4 = floor(random(altura, (lim+(lim/2))))//altura-profundidade 
    
    y.push(y0); 
    y.push(profundidade);
    y.push(y2);
    y.push(altura);
    y.push(y4)
    console.log('random y');
    }

function getColor() {
    //escolha de cor aleatória, random arredondado
    const ranCol = floor(random(0,colors.length));
    const colorIs = colors[ranCol]
     //atribui esse número à const de stroke
    return colorIs;
}

//funcao padrão true false para ajudar nas escolhas
function getRandomInt() {
    const ranInt = random(0,1);
    if (ranInt <0.5) {
        return true 
    }
    else {
        return false
    }
}
*/



///////////////////
let myTopPipe;
let myPlayer;

function setup() {
  createCanvas(300, 300);
  
  myTopPipe = new Rectangle(300, 0, 60, 100, -.5);
  myBottomPipe = new Rectangle(300, 200, 60, 300, -.5);

  myPlayer = new Player(100,
    150,
    20,
    'violet');
}

function draw() {
  background(50);

  // update and show circle
  myTopPipe.move();
  myTopPipe.display();
  myBottomPipe.move();
  myBottomPipe.display();
  myPlayer.move();

  handleKeyboard();
  
  // update and show player
  myPlayer.collideTop(myTopPipe.x, myTopPipe.y, myTopPipe.h, myTopPipe.w);
  myPlayer.collideBottom(myBottomPipe.x, myBottomPipe.y, myBottomPipe.h, myBottomPipe.w);
  myPlayer.display();
}

class Player {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.life = 1;
    this.color = color;
  }
  moveUp() {
    this.y -= 10;
  }
  
  move() {
    this.y += 2;
    if (this.y > 300) {
      this.life -= 1.0;
    }
     if(this.life <= 0) {
        fill(128, 0, 0, 32);
        rect(0, 0, width, height);
        textAlign(CENTER);
        textSize(32);
        fill('yellow');
        text("GAME OVER", width/2, height/2);
        noLoop();
      } else {
      this.color = 'violet';
    }
  }

  collideTop(otherx, othery, otherh, otherw) {
    
    if (this.y < (othery + otherh) && this.x > otherx && this.x < (otherx + otherw))  {  {
      this.color = 'red';
      
      // take 1 point off of the counter
      this.life-=1.0;
      
      // check if the game is over
      if(this.life <= 0) {
        fill(128, 0, 0, 32);
        rect(0, 0, width, height);
        textAlign(CENTER);
        textSize(32);
        fill('yellow');
        text("GAME OVER", width/2, height/2);
        noLoop();
      } else {
      this.color = 'violet';
    }
    }
                                                                             }
  }
  collideBottom(otherx, othery, otherh, otherw) {
    
    if (this.y > (othery) && this.x > otherx && this.x < (otherx +     otherw))  {
      this.color = 'red';
      
      // take 1 point off of the counter
      this.life-=1.0;
      
      // check if the game is over
      if(this.life <= 0) {
        fill(128, 0, 0, 32);
        rect(0, 0, width, height);
        textAlign(CENTER);
        textSize(32);
        fill('yellow');
        text("GAME OVER", width/2, height/2);
        noLoop();
      }
    } else {
      this.color = 'violet';
    }
  }

  display() {
    // draw shape
    strokeWeight(10);
    stroke(this.color)
    circle(this.x,this.y, this.size);
    strokeWeight(1);
    
    // draw life
  
  }
  }


class Rectangle {
  constructor(x, y, w, h, xSpeed) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.xSpeed = xSpeed;
    this.color = color(255, 255, 255);
    this.score = 0;
  }

  move() {
    this.x += this.xSpeed;
    if(this.y == 0){
      
      if (this.x < -10 || this.x > 300) {
        let s = random(-50,50)
        this.h += s;
        if(this.h > 110 || this.h < 50){
          this.h = 100;
        }
        this.x = 300
        this.xSpeed *= 1.1;
        this.color = color(random(255),
          random(255),
          random(255));
        this.score += 1;
      }
    }
    else{
      if (this.x < -10 || this.x > 300) {
        let s = random(-50,50)
        this.y += s;
        if (this.y < 180 || this.y > 290){
          this.y = 200
        }
        this.x = 300
        this.xSpeed *= 1.1;
        this.color = color(random(255),
          random(255),
          random(255));
        this.score += 1;
      }
    }
  }
  

  display() {
    noStroke();
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    fill(255);
    textSize(24);
    text(this.score, 40, 50);
  }
  
}

function handleKeyboard() {
  if (keyIsPressed) {
    if (keyCode === UP_ARROW) {
      setTimeout(20);
      myPlayer.moveUp();
  }
  }
  // add more keys
}
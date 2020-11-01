var player
//var enemy
var baground, background1
var ground, inviGround
var boss
var bullet, bullet1
var score
var playerHp, enemyHp
var bulletGroup, enemyGroup
var enemy1Group, enemy2Group, enemy3Group, enemy4Group, enemy5Group, enemy6Group 
var enemyHp1, enemyHp2, enemyHp3, enemyHp4, enemyHp5, enemyHp6 

function preload() {
  Man1 = loadImage("man1.png");
  //Man2 = loadImage("man2.png");
  enemyImage = loadImage("enemy.png");

  Man1_Dead1 = loadAnimation("player1_death1.png", "player1_death2.png", "player1_death4.png", "player1_death5.png", "player1_death6.png", "player1_death7.png", "player1_death8.png");

  background1 = loadImage("backgroung.png");

  bullet1 = loadImage("bullet.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight);

  bulletGroup = new Group();
  enemyGroup = new Group();
  enemy1Group = new Group();
  enemy2Group = new Group();
  enemy3Group = new Group();
  enemy4Group = new Group();
  enemyBulletGroup = new Group();
  // enemy5Group = new Group();
  // enemy6Group = new Group();


  score = 0;
  //createSprite(400, 200, 50, 50);
  player = createSprite(displayWidth / 10, displayHeight - 150, 50, 50);
  player.addImage(Man1);
  player.scale = 0.5;
  playerHp = 100;
  //baground = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
  ground = createSprite(displayWidth/2, displayHeight - 10, displayWidth, displayHeight / 10);
  ground.shapeColor = "black";
  //inviGround = createSprite(displayWidth/2, displayHeight - 20, displayWidth, displayHeight / 10);
  //enemy = createSprite(displayWidth - 150, displayHeight -20, 500, 500);
  //boss = createSprite(displayWidth - 200, displayHeight - 20, 500, 500);

  enemyHp1 = 100;
  enemyHp2 = 100;
  enemyHp3 = 100;
  enemyHp4 = 100;
  // enemyHp5 = 100;
  // enemyHp6 = 100;


}

function draw() {
  background(background1);  



  text("SCORE :" + score, displayWidth - 100, displayHeight / 10);
  //textSize = 500;
  //text("Hp :" + playerHp, displayWidth / 100, displayHeight / 10 - 50);

  if(keyDown (UP_ARROW)) {
    player.y = player.y - 10;
  }

  if(keyDown (DOWN_ARROW)) {
    player.y = player.y + 10;
  }

  if(keyWentUp ("space")) {
    bullet = createSprite(player.x + 50, player.y - 35, 10, 10);
    //bullet.addImage(bullet1);
    bullet.velocityX = 10;
    bulletGroup.add(bullet);
    bullet.shapeColor = "black";
  }

  Enemy();

  enemy1();
  enemy2();
  enemy3();
  enemy4();
  // enemy5();
  // enemy6();

  if(bulletGroup.collide(enemyGroup)) {
    enemyHp = enemyHp - 50;
  }

  if(bulletGroup.collide(enemy1Group)) {
    enemyHp1 = enemyHp1 - 50;
  }

  if(bulletGroup.collide(enemy2Group)) {
    enemyHp2 = enemyHp2 - 50;
  }

  if(bulletGroup.collide(enemy3Group)) {
    enemyHp3 = enemyHp3 - 50;
  }

  if(bulletGroup.collide(enemy4Group)) {
    enemyHp4 = enemyHp4 - 50;
  }

  // if(bulletGroup.collide(enemy5Group)) {
  //   enemyHp5 = enemyHp5 - 50;
  // }

  // if(bulletGroup.collide(enemy6Group)) {
  //   enemyHp6 = enemyHp6 - 50;
  // }

  if(enemyHp == 0) {
    enemyGroup.destroyEach();
    enemyHp = 100;
    //bulletGroup.destroyEach();

  }


  if(enemyHp1 == 0) {
    enemy1Group.destroyEach();
    enemyHp1 = 100;
  }

  if(enemyHp2 == 0) {
    enemy2Group.destroyEach();
    enemyHp2 = 100;
  }

  if(enemyHp3 == 0) {
    enemy3Group.destroyEach();
    enemyHp3 = 100;
  }

  if(enemyHp4 == 0) {
    enemy4Group.destroyEach();
    enemyHp4 = 100;
  }

  // if(enemyHp5 == 0) {
  //   enemy5Group.destroyEach();
  //   enemyHp5 = 100;
  // }

  // if(enemyHp6 == 0) {
  //   enemy6Group.destroyEach();
  //   enemyHp6 = 100;
  // }
  
  player.collide(ground);

  //if(mousePressedOver(player)) {
    //player.addImage(Man2);
    //player.scale = 0.5;
  //}

  //if(enemyBullet.collide(player)) {
    //playerHp = playerHp - 20;
  //}

  if(enemyBulletGroup.collide(player)) {
    player.Hp = playerHp - 10
  }

  // if(enemyBullet1.collide(player)) {
  //   player.Hp = playerHp - 50
  // }

  // if(enemyBullet2.collide(player)) {
  //   player.Hp = playerHp - 50
  // }

  // if(enemyBullet3.collide(player)) {
  //   player.Hp = playerHp - 50
  // }

  // if(enemyBullet4.collide(player)) {
  //   player.Hp = playerHp - 50
  // }

  if(playerHp == 0) {
    
    player.addAnimation("A", Man1_Dead1);

    text("GAME OVER", displayWidth / 2, displayHeight / 2);
    text("SCORE" + score, displayWidth / 2, displayHeight / 4);

  }

  

  
  drawSprites();
}

function Enemy() {

  if(frameCount % 1000 == 0) {
      var enemy = createSprite(displayWidth - 300, displayHeight/2 + 100, 50, 50);
      enemy.addImage(enemyImage);
      enemy.scale = 0.6;
    
      enemyHp = 100;
      enemyGroup.add(enemy);

      var enemyBullet = createSprite(enemy.x, enemy.y, 10, 10);
      enemyBullet.velocityX = -10;
      enemyBulletGroup.add(enemyBullet);
    }
  }
  

  function enemy1() {
    if(frameCount % 100 == 0) {
      var enemy1 = createSprite(displayWidth - 300, displayHeight / 8 - 40);
      enemy1.debug = true;
      enemy1Group.add(enemy1);
      enemy1.addImage(enemyImage);
      enemy1.scale = 0.6;

      var enemyBullet1 = createSprite(enemy1.x, enemy1.y, 10, 10);
      enemyBullet1.velocityX = -10;
      enemyBulletGroup.add(enemyBullet1);
    }
  }

  function enemy2() {
    if(frameCount % 150 == 0) {
      var enemy2 = createSprite(displayWidth - 300, displayHeight / 6 + 70);
      enemy2.debug = true;
      enemy2Group.add(enemy2);
      enemy2.addImage(enemyImage);
      enemy2.scale = 0.6;

      var enemyBullet2 = createSprite(enemy2.x, enemy2.y, 10, 10);
      enemyBullet2.velocityX = -10;
      enemyBulletGroup.add(enemyBullet2)
    }

  }

  function enemy3() {
    if(frameCount % 500 == 0) {
      var enemy3 = createSprite(displayWidth - 300, displayHeight / 4 + 170);
      enemy3.debug = true;
      enemy3Group.add(enemy3);
      enemy3.addImage(enemyImage);
      enemy3.scale = 0.6;

      var enemyBullet3 = createSprite(enemy3.x, enemy3.y, 10, 10);
      enemyBullet3.velocityX = -10;
      enemyBulletGroup.add(enemyBullet3);
    }

  }

  function enemy4() {
    if(frameCount % 1000 ==0) {
      var enemy4 = createSprite(displayWidth - 300, player.y);
      enemy4.debug = true;
      enemy4Group.add(enemy4);
      enemy4.addImage(enemyImage);
      enemy4.scale = 0.6;

      var enemyBullet4 = createSprite(enemy4.x, enemy4.y, 10, 10);
      enemyBullet4.velocityX = -10;
      enemyBulletGroup.add(enemyBullet4);
    }

  }

  // function enemy5() {
  //   if(frameCount % 150 == 0) {
  //     var enemy5 = createSprite(displayWidth - 300, displayHeight - displayHeight - 1000);
  //     enemy5.debug = true;
  //     enemy5Group.add(enemy5);
  //     enemy5.addImage(enemyImage);
  //     enemy5.scale = 0.6;
  //   }

  // }

  // function enemy6() {
  //   if(frameCount % 100 == 0) {
  //     var enemy6 = createSprite(player.x * 15, player.y);
  //     enemy6.debug = true;
  //     enemy6Group.add(enemy6);
  //     enemy6.addImage(enemyImage);
  //     enemy6.scale = 0.6;
  //   }

  // }
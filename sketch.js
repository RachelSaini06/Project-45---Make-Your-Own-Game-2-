const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var continueButton, continueImg, continueHighlightedImg;

//Title Screen variables
var titleScreenImg, titleScreenText, titleScreenTextImg, pressSpaceText, pressSpaceImg;
var playButton, playButtonImg, playButtonHighlighted;
var titleMusic;

//First Dialogue Scene variables
var houseBgImg, outside1, outside2;
var girl, girlAngryImg, girlGoldImg, girlHappyImg, girlSurprisedImg, girlConfusedImg;
var wizard, wizardImg, wizardGoldImg, smokeImg;

//Dialogue
var dialogue;

var dialogue1, dialogue2, dialogue3, dialogue4, dialogue5, dialogue6, dialogue7, dialogue8;
var dialogue9, dialogue10, dialogue11, dialogue12, dialogue13;

var dialogue14, dialogue15, dialogue16, dialogue17, dialogue18, dialogue19;

var dialogue20, dialogue21, dialogue22, dialogue23, dialogue24, dialogue25, dialogue26;
var dialogue27, dialogue28, dialogue29, dialogue30, dialogue31, dialogue32, dialogue33;
var dialogue34, dialogue35, dialogue36, dialogue37, dialogue38, dialogue39, dialogue40;
var dialogue41, dialogue42, dialogue43, dialogue44, dialogue45;

var dialogue46, dialogue47, dialogue48, dialogue49, dialogue50, dialogue51, dialogue52;
var dialogue53, dialogue54, dialogue55, dialogue56, dialogue57, dialogue58;

//Level 1 variables
var level1BgImg;

//Level 2 variables

//Level 3 variables

//Ending Scene variables

var gameState = 0;

function preload(){
    titleScreenImg = loadImage("Images/Title Screen/titleScreen.png");
    titleScreenTextImg = loadImage("Images/Title Screen/gameTitleText.png");
    pressSpaceImg = loadImage("Images/pressSpaceToPlay.png");

    playButtonImg = loadImage("Images/Title Screen/playButton.png");
    playButtonHighlighted = loadImage("Images/Title Screen/playButtonHighlighted.png");

    titleMusic = loadSound("Music/strategy.wav");

    houseBgImg = loadImage("Images/Backgrounds/houseInterior.png");
    outside1 = loadImage("Images/Backgrounds/outside1.png");
    outside2 = loadImage("Images/Backgrounds/outside2.png");

    girlAngryImg = loadImage("Images/Girl/angryGirl.png");
    girlGoldImg = loadImage("Images/Girl/holdingGoldGirl.png");
    girlHappyImg = loadImage("Images/Girl/happyGirl.png");
    girlSurprisedImg = loadImage("Images/Girl/surprisedGirl.png");
    girlConfusedImg = loadImage("Images/Girl/confusedGirl.png");

    wizardImg = loadImage("Images/Wizard/wizard.png");
    wizardGoldImg = loadImage("Images/Wizard/wizardHoldingGold.png");
    smokeImg = loadImage("Images/Wizard/smoke.png")

    continueImg = loadImage("Images/ContinueButton.png");
    continueHighlightedImg = loadImage("Images/ContinueButtonDark.png");

    //dialogue
    dialogue1 = loadImage("Images/Dialogue/dialogue1.png");
    dialogue2 = loadImage("Images/Dialogue/dialogue2.png");
    dialogue3 = loadImage("Images/Dialogue/dialogue3.png");
    dialogue4 = loadImage("Images/Dialogue/dialogue4.png");
    dialogue5 = loadImage("Images/Dialogue/dialogue5.png");
    dialogue6 = loadImage("Images/Dialogue/dialogue6.png");
    dialogue7 = loadImage("Images/Dialogue/dialogue7.png");
    dialogue8 = loadImage("Images/Dialogue/dialogue8.png");
    dialogue9 = loadImage("Images/Dialogue/dialogue9.png");
    dialogue10 = loadImage("Images/Dialogue/dialogue10.png");
    dialogue11 = loadImage("Images/Dialogue/dialogue11.png");
    dialogue12 = loadImage("Images/Dialogue/dialogue12.png");
    dialogue13 = loadImage("Images/Dialogue/dialogue13.png");

}

function setup(){
    createCanvas(displayWidth - 4, displayHeight - 4);
    engine = Engine.create();
    world = engine.world;

    gameState = 0;
}

function draw(){
    background("#87ceeb");
    //titleMusic.play();
    Engine.update(engine);

    if (gameState === 0){
        background(titleScreenImg);

        titleMusic.play();

        titleScreenText = createSprite(displayWidth/2, displayHeight/4, 20, 20);
        titleScreenText.addImage(titleScreenTextImg);
        titleScreenText.scale = 0.7;
        titleScreenText.display();

        pressSpaceText = createSprite(displayWidth/2, displayHeight/2 + 330, 20, 20);
        pressSpaceText.addImage(pressSpaceImg);
        pressSpaceText.display();
        
        if (keyWentDown("SPACE")){
            gameState = 1;
            titleMusic.stop();
        }

    }

    if (gameState === 1){
        background(houseBgImg);

        girl = createSprite(displayWidth/2 - 550, displayHeight/2 + 130, 20, 20);
        girl.addImage(girlHappyImg);
        girl.scale = 0.8;
        girl.display();

        dialogue = createSprite(displayWidth/2, displayHeight/2 + 300, 20, 20);
        dialogue.addImage(dialogue1);
        dialogue.scale = 0.7;
        dialogue.display();

        textSize(20);
        stroke("gray");
        text("Press SPACEBAR to Continue", displayWidth/2 - 150, displayHeight/2 + 420);

        /*continueButton = createSprite(displayWidth/2, displayHeight/2 + 390);
        continueButton.addImage(continueImg);
        continueButton.scale = 0.3;
        continueButton.display();*/

        if (keyDown("SPACE")){
            gameState = 2;
        }
    }

    if (gameState === 2){
        background(houseBgImg);

        girl = createSprite(displayWidth/2 - 550, displayHeight/2 + 130, 20, 20);
        girl.addImage(girlGoldImg);
        girl.scale = 0.8;
        girl.display();

        dialogue = createSprite(displayWidth/2, displayHeight/2 + 300, 20, 20);
        dialogue.addImage(dialogue2);
        dialogue.scale = 0.7;
        dialogue.display();

        textSize(20);
        stroke("gray");
        text("Press SPACEBAR to Continue", displayWidth/2 - 150, displayHeight/2 + 420);

        if (keyWentDown("SPACE")){
            gameState = 3;
        }
    }

    if (gameState === 3){
        background(houseBgImg);

        girl = createSprite(displayWidth/2 - 550, displayHeight/2 + 130, 20, 20);
        girl.addImage(girlConfusedImg);
        girl.scale = 0.8;
        girl.display();

        dialogue = createSprite(displayWidth/2, displayHeight/2 + 300, 20, 20);
        dialogue.addImage(dialogue3);
        dialogue.scale = 0.7;
        dialogue.display();

        textSize(20);
        stroke("gray");
        text("Press SPACEBAR to Continue", displayWidth/2 - 150, displayHeight/2 + 420);

        textSize(50);
        stroke("black");
        text("*noise*", displayWidth/2 + 500, displayHeight/2);

        if (keyDown("SPACE")){
            gameState = 4;
        }
    }

    if (gameState === 4){
        background(houseBgImg);

        girl = createSprite(displayWidth/2 - 550, displayHeight/2 + 130, 20, 20);
        girl.addImage(girlConfusedImg);
        girl.scale = 0.8;
        girl.display();

        wizard = createSprite(displayWidth/2 + 550, displayHeight/2 + 130, 20, 20);
        wizard.addImage(smokeImg);
        wizard.scale= 0.8;
        wizard.display();

        dialogue = createSprite(displayWidth/2, displayHeight/2 + 300, 20, 20);
        dialogue.addImage(dialogue4);
        dialogue.scale = 0.7;
        dialogue.display();

        textSize(20);
        stroke("gray");
        text("Press SPACEBAR to Continue", displayWidth/2 - 150, displayHeight/2 + 420);


        if (keyWentDown("SPACE")){
            gameState = 5;
        }
    }

    if (gameState === 5){
        background(houseBgImg);

        girl = createSprite(displayWidth/2 - 550, displayHeight/2 + 130, 20, 20);
        girl.addImage(girlSurprisedImg);
        girl.scale = 0.8;
        girl.display();

        wizard = createSprite(displayWidth/2 + 550, displayHeight/2 + 90, 20, 20);
        wizard.addImage(wizardImg);
        wizard.scale= 0.9;
        wizard.display();

        dialogue = createSprite(displayWidth/2, displayHeight/2 + 300, 20, 20);
        dialogue.addImage(dialogue5);
        dialogue.scale = 0.7;
        dialogue.display();

        textSize(20);
        stroke("gray");
        text("Press SPACEBAR to Continue", displayWidth/2 - 150, displayHeight/2 + 420);


        if (keyDown("SPACE")){
            gameState = 6;
        }
    }

    if (gameState === 6){
        background(houseBgImg);

        girl = createSprite(displayWidth/2 - 550, displayHeight/2 + 130, 20, 20);
        girl.addImage(girlSurprisedImg);
        girl.scale = 0.8;
        girl.display();

        wizard = createSprite(displayWidth/2 + 550, displayHeight/2 + 90, 20, 20);
        wizard.addImage(wizardImg);
        wizard.scale= 0.9;
        wizard.display();

        dialogue = createSprite(displayWidth/2, displayHeight/2 + 300, 20, 20);
        dialogue.addImage(dialogue6);
        dialogue.scale = 0.7;
        dialogue.display();

        textSize(20);
        stroke("gray");
        text("Press SPACEBAR to Continue", displayWidth/2 - 150, displayHeight/2 + 420);


        if (keyWentDown("SPACE")){
            gameState = 7;
        }
    }

    if (gameState === 7){
        background(houseBgImg);

        girl = createSprite(displayWidth/2 - 550, displayHeight/2 + 130, 20, 20);
        girl.addImage(girlAngryImg);
        girl.scale = 0.8;
        girl.display();

        wizard = createSprite(displayWidth/2 + 550, displayHeight/2 + 90, 20, 20);
        wizard.addImage(wizardGoldImg);
        wizard.scale= 0.9;
        wizard.display();

        dialogue = createSprite(displayWidth/2, displayHeight/2 + 300, 20, 20);
        dialogue.addImage(dialogue7);
        dialogue.scale = 0.7;
        dialogue.display();

        textSize(20);
        stroke("gray");
        text("Press SPACEBAR to Continue", displayWidth/2 - 150, displayHeight/2 + 420);


        if (keyDown("SPACE")){
            gameState = 8;
        }
    }

    if (gameState === 8){
        background(houseBgImg);

        girl = createSprite(displayWidth/2 - 550, displayHeight/2 + 130, 20, 20);
        girl.addImage(girlSurprisedImg);
        girl.scale = 0.8;
        girl.display();

        wizard = createSprite(displayWidth/2 + 550, displayHeight/2 + 90, 20, 20);
        wizard.addImage(smokeImg);
        wizard.scale= 0.9;
        wizard.display();

        dialogue = createSprite(displayWidth/2, displayHeight/2 + 300, 20, 20);
        dialogue.addImage(dialogue8);
        dialogue.scale = 0.7;
        dialogue.display();

        textSize(20);
        stroke("gray");
        text("Press SPACEBAR to Continue", displayWidth/2 - 150, displayHeight/2 + 420);


        if (keyWentDown("SPACE")){
            gameState = 9;
        }
    }

    if (gameState === 9){
        background(outside1);

        dialogue = createSprite(displayWidth/2, displayHeight/2 + 300, 20, 20);
        dialogue.addImage(dialogue9);
        dialogue.scale = 0.7;
        dialogue.display();

        textSize(20);
        stroke("gray");
        text("Press SPACEBAR to Continue", displayWidth/2 - 150, displayHeight/2 + 420);


        if (keyDown("SPACE")){
            gameState = 10;
        }
    }

    if (gameState === 10){
        background(outside1);

        dialogue = createSprite(displayWidth/2, displayHeight/2 + 300, 20, 20);
        dialogue.addImage(dialogue10);
        dialogue.scale = 0.7;
        dialogue.display();

        textSize(20);
        stroke("gray");
        text("Press SPACEBAR to Continue", displayWidth/2 - 150, displayHeight/2 + 420);


        if (keyWentDown("SPACE")){
            gameState = 11;
        }
    }

    if (gameState === 11){
        background(outside1);

        dialogue = createSprite(displayWidth/2, displayHeight/2 + 300, 20, 20);
        dialogue.addImage(dialogue11);
        dialogue.scale = 0.7;
        dialogue.display();

        textSize(20);
        stroke("gray");
        text("Press SPACEBAR to Continue", displayWidth/2 - 150, displayHeight/2 + 420);


        if (keyDown("SPACE")){
            gameState = 12;
        }
    }

    if (gameState === 12){
        background(outside2);

        dialogue = createSprite(displayWidth/2, displayHeight/2 + 300, 20, 20);
        dialogue.addImage(dialogue12);
        dialogue.scale = 0.7;
        dialogue.display();

        textSize(20);
        stroke("gray");
        text("Press SPACEBAR to Continue", displayWidth/2 - 150, displayHeight/2 + 420);


        if (keyWentDown("SPACE")){
            gameState = 13;
        }
    }

    if (gameState === 13){
        background(outside2);

        dialogue = createSprite(displayWidth/2, displayHeight/2 + 300, 20, 20);
        dialogue.addImage(dialogue13);
        dialogue.scale = 0.7;
        dialogue.display();

        textSize(20);
        stroke("gray");
        text("Press SPACEBAR to Continue", displayWidth/2 - 150, displayHeight/2 + 420);


        /*if (keyDown("SPACE")){
            gameState = 13;
        }*/
    }

    //drawSprites();

}

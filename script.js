const canvas = document.getElementById('sprite');
const ctx = canvas.getContext('2d');

const SPRITE = new Image();
SPRITE.src='static/asset_shadow_dog.png';

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;

let gameFrame = 0;

let frameX = 0;
let frame_count = 7;
let stagger_frame = 4;

let frameY = 0;

function animate() {

    let frameResultX = SPRITE_WIDTH * frameX;
    let frameResultY = SPRITE_HEIGHT * frameY;
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(x,0,200,200);
    ctx.drawImage(SPRITE, frameResultX, frameResultY, SPRITE_WIDTH, SPRITE_HEIGHT, 0,0, SPRITE_WIDTH, SPRITE_HEIGHT);

    gameFrame ++;

    if (Math.floor(gameFrame % stagger_frame) === 1) {
        if(frameX == frame_count -1) frameX = 0;
        else frameX++;
    }
    console.log(gameFrame);
    requestAnimationFrame(animate);
}

animate();
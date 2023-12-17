// canvas
const canvas = document.getElementById('sprite');
const ctx = canvas.getContext('2d');

// canvas height and width
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
////////////////////////////////////////////////


////////////////////////////////////////////////
// make a new instance of player character image
const PLAYER_SPRITE = new Image();
PLAYER_SPRITE.src='static/asset_shadow_dog.png';

const SPRITE_WIDTH = 575;
const SPRITE_HEIGHT = 523;
////////////////////////////////////////////////


////////////////////////////////////////////////
// Sprite object, name and frames
let sprite = [
    {
        name: 'idle',
        frames: 7
    },
    {
        name: 'jump',
        frames: 7
    },
    {
        name: 'fall',
        frames: 7
    },
    {
        name: 'run',
        frames: 9
    },
    {
        name: 'dizzy',
        frames: 11
    },
    {
        name: 'sit',
        frames: 5
    },
    {
        name: 'roll',
        frames: 7
    },
    {
        name: 'bite',
        frames: 7
    },
    {
        name: 'ko',
        frames: 12
    },
    {
        name: 'getHit',
        frames: 4
    }
];

// mapped animation name and pixels
let spriteAnimation = []

// mapping function and function call
function map(sprite) {
    sprite.forEach((state, index) => {
        let locations = [];
        for (i = 0; i < state.frames; i++) {
            let positionX = i * SPRITE_WIDTH;
            let positionY = index * SPRITE_HEIGHT;
            locations.push({x: positionX, y: positionY});
        }
        
        spriteAnimation[state.name] = {loc : locations};
    })
}
map(sprite);

console.log(spriteAnimation);
////////////////////////////////////////////////


////////////////////////////////////////////////
// game frames and frame count
let gameFrame = 0;

let frameX = 0;
let frame_count = 7;
let stagger_frame = 4;

let frameY = 8;
////////////////////////////////////////////////


////////////////////////////////////////////////
// animation begins
function animate() {

    let frameResultX = SPRITE_WIDTH * frameX;
    let frameResultY = SPRITE_HEIGHT * frameY;
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(x,0,200,200);
    ctx.drawImage(PLAYER_SPRITE, frameResultX, frameResultY, SPRITE_WIDTH, SPRITE_HEIGHT, 0,0, SPRITE_WIDTH, SPRITE_HEIGHT);

    gameFrame ++;

    if (Math.floor(gameFrame % stagger_frame) === 1) {
        if(frameX == frame_count -1) frameX = 0;
        else frameX++;
    }
    // console.log(gameFrame);
    requestAnimationFrame(animate);
}
animate();
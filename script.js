// canvas
const canvas = document.getElementById('sprite');
const ctx = canvas.getContext('2d');

// canvas height and width
const CANVAS_WIDTH = canvas.width = 300;
const CANVAS_HEIGHT = canvas.height = 300;

// dropdown menu, to be populated later
let dropdown;
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
let state = 'idle';

let gameFrame = 0;

let frameX = 0;
let frame_count = spriteAnimation[state].loc.length;
let stagger_frame = 4;

// console.log(spriteAnimation[state].loc.length)

// commented out because not used anymore
// let frameY = 0;

////////////////////////////////////////////////


////////////////////////////////////////////////
// animation begins
function animate() {

    let frameResultX = SPRITE_WIDTH * frameX;
    let frameResultY = spriteAnimation[state].loc[0].y;

    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(x,0,200,200);
    ctx.drawImage(PLAYER_SPRITE, frameResultX, frameResultY, SPRITE_WIDTH, SPRITE_HEIGHT, 0,0, SPRITE_WIDTH/2, SPRITE_HEIGHT/2);

    gameFrame ++;

    if (Math.floor(gameFrame % stagger_frame) === 1) {

        // frame_count -1 is because index starts at zero, states are counted as one
        if(frameX == frame_count -1) frameX = 0;
        else frameX++;
    }
    // console.log(gameFrame);
    requestAnimationFrame(animate);
}
animate();

// dropdown menu creation
function populate_dropdown() {
    dropdown = document.createElement('select');
    document.getElementsByClassName('viewport')[0].insertBefore(dropdown,canvas);
    dropdown.classList.add('dropdown');


    dropdown = document.getElementsByClassName('dropdown')[0];
    
    sprite.forEach((element, index) => {
        let tmp = document.createElement('option');
        dropdown.appendChild(tmp);
        tmp.innerHTML = element.name;
        tmp.value = element.name;
    })
}
populate_dropdown();

// event listener
document.addEventListener('change', () => {
    state = dropdown.value;
    frame_count = spriteAnimation[state].loc.length;
})
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
        name: 'knockout',
        frames: 12
    },
    {
        name: 'damaged',
        frames: 4
    }
];

// mapped animation name and pixels
let spriteAnimation = []

// mapping function and function call
function map(sprite) {
    sprite.forEach((state, index) => {
        let locations = [];
        for (let i = 0; i < state.frames; i++) {
            let positionX = i * SPRITE_WIDTH;
            let positionY = index * SPRITE_HEIGHT;
            locations.push({x: positionX, y: positionY});
        }
        
        spriteAnimation[state.name] = {loc : locations};
    })
}
map(sprite);
////////////////////////////////////////////////


////////////////////////////////////////////////
// game frames and frame count
let state = 'idle';
let previous_state = state;
let frameResultX, frameResultY;

let gameFrame = 0;

let frameX = 0;
let frame_count = spriteAnimation[state].loc.length;
let stagger_frame = 5;
////////////////////////////////////////////////


////////////////////////////////////////////////
// dropdown menu creation
function populate_dropdown() {
    dropdown = document.createElement('select');
    document.getElementsByClassName('viewport')[0].insertBefore(dropdown, canvas);
    dropdown.classList.add('dropdown');


    dropdown = document.getElementsByClassName('dropdown')[0];
    
    sprite.forEach((element, index) => {
        let tmp = document.createElement('option');
        dropdown.appendChild(tmp);
        tmp.innerHTML = element.name;
        tmp.value = element.name;
    })

    let label = document.createElement('label');
    document.getElementsByClassName('viewport')[0].insertBefore(label, dropdown);
    label.setAttribute('for', 'dropdown');
    label.innerHTML = 'Choose animation';
}
populate_dropdown();


// event listener for dropdown
dropdown.addEventListener('change', function(e) {
    state = e.target.value;
})
////////////////////////////////////////////////


////////////////////////////////////////////////
// animation begins
function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    
    // calculate the frame position
    let position = Math.floor(gameFrame/stagger_frame) % spriteAnimation[state].loc.length;

    frameResultX = spriteAnimation[state].loc[position].x;
    frameResultY = spriteAnimation[state].loc[position].y;

    ctx.drawImage(PLAYER_SPRITE, frameResultX, frameResultY, SPRITE_WIDTH, SPRITE_HEIGHT, 0,0, SPRITE_WIDTH/2, SPRITE_HEIGHT/2);
    
    gameFrame ++;
    requestAnimationFrame(animate);
}
animate();
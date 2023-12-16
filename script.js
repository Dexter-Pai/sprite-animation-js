const canvas = document.getElementById('sprite');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// width and height of each frame
const SPRITE_WIDTH = 573;
const SPRITE_HEIGHT = 523;

// rescale to 100px width and appropriate height
let sprite_size_width = SPRITE_WIDTH/5.73;
let sprite_size_height = SPRITE_HEIGHT/5.73;

// for calculating midway position of the canvas
let sprite_width_position = ((CANVAS_WIDTH/2)-(sprite_size_width/2));
let sprite_height_position = ((CANVAS_HEIGHT/2)-(sprite_size_height/2));


const playerImage = new Image();
playerImage.src = 'static/asset_shadow_dog.png';
let x = 0;
let y = 0;
let frame_count = 7;

function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.fillRect(0,0,0,0);
    // x++;
    // if (x === 600-50) {
    //     x = 0;
    // }
    // console.log(x);
    ctx.drawImage(playerImage,SPRITE_WIDTH*x,SPRITE_HEIGHT*y,SPRITE_WIDTH,SPRITE_HEIGHT,sprite_width_position,sprite_height_position,sprite_size_width,sprite_size_height);
    if (x < frame_count-1) x++;
    else x = 0;
    requestAnimationFrame(animate);
};
animate();
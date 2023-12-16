const canvas = document.getElementById('sprite');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'static/asset_shadow_dog.png';
let x = 0;

function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    ctx.fillRect(x,x,50,50);
    x++;
    if (x === 600-50) {
        x = 0;
    }
    console.log(x);
    requestAnimationFrame(animate);
};
animate();
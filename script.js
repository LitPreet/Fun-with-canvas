const canvas = document.querySelector("#draw");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

ctx.strokeStyle = '#BADASS';
ctx.lineWidth = '20';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;
let hue = 0;



function draw(e)
{
    if (!isDrawing) return; // stop the fn from running when they are not moused down
    console.log(e);
    ctx.strokeStyle = `hsl(${hue},100%,46%)`;
    // start from 
    ctx.beginPath();
    // go to
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY];
    hue++;

    if(hue >= 360)
    {
        hue = 0;
    }
    // if(ctx.lineWidth >= 100 || ctx.lineWidth <=1)
    // {
    //     direction =!direction;
    // }
    // if(direction)
    // {
    //     ctx.lineWidth++;
    // }
    // else{
    //     ctx.lineWidth--;
    // }

}
canvas.addEventListener('mousedown',(e)=>
{
    isDrawing = true;
    [lastX,lastY] = [e.offsetX,e.offsetY];


})
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseout',()=> isDrawing = false);
canvas.addEventListener('mouseup',()=> isDrawing = false);

/**
 * Created by NewRed on 2017/8/21.
 */
var cwidth=400;//保存画布的宽度
var cheight=300;//保存画布的高度
var dicex=50;
var dicey=50;//保存骰子的水平与垂直高度
var dicewidth=100;
var diceheight=100;//保存骰子的高度与宽度
var dotrad=6;//保存原点的半径
var ctx;//保存画布上下文变量
function init() {
    var ch=1+Math.floor(Math.random()*6);//产生一个1~6之间的随机数
    drawface(ch);
}
function drawface(n){
    ctx=document.getElementById("canvas").getContext('2d');
    ctx.lineWidth=5;
    ctx.clearRect(dicex,dicey,dicewidth,diceheight);//清楚上次骰子的空间
    ctx.strokeRect(dicex,dicey,dicewidth,diceheight);//画出骰子面的轮廓
    ctx.fillStyle="#009966";//设置圆点的颜色
    switch(n){
        case 1:
            draw1();
            break;
        case 2:
            draw2();
            break;
        case 3:
            draw2();
            draw1();
            break;
        case 4:
            draw4();
            break;
        case 5:
            draw4();
            draw1();
            break;
        case 6:
            draw4();
            draw2mid();
            break;
    }
}
function draw1() {
    var dotx;
    var doty;
    ctx.beginPath();
    dotx=dicex+.5*dicewidth;
    doty=dicey+.5*diceheight;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}
function draw2() {
    var dotx;
    var doty;
    ctx.beginPath();
    dotx=dicex+3*dotrad;
    doty=dicey+3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    dotx=dicex+dicewidth-3*dotrad;
    doty=dicey+diceheight-3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}
function draw4() {
    var dotx;
    var doty;
    ctx.beginPath();
    dotx=dicex+3*dotrad;
    doty=dicey+3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    dotx=dicex+dicewidth-3*dotrad;
    doty=dicey+diceheight-3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    dotx=dicex+3*dotrad;
    doty=dicey+diceheight-3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    dotx=dicex+dicewidth-3*dotrad;
    doty=dicey+3*dotrad;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}
function draw2mid() {
    var dotx;
    var doty;
    ctx.beginPath();
    dotx=dicex+3*dotrad;
    doty=dicey+.5*diceheight;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    dotx=dicex+dicewidth-3*dotrad;
    doty=dicey+.5*diceheight;
    ctx.arc(dotx,doty,dotrad,0,Math.PI*2,true);
    ctx.closePath();
    ctx.fill();
}

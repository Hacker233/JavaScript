/**
 * Created by NewRed on 2017/8/26.
 */
var num=0,result=0,numshow="0";
var operate=0; //判断输入状态的标志
var calcul=0; //判断计算状态的标志
var quit=0; //防止重复按键的标志
function command(num){
    var str=String(document.calculator.numScreen.value); //获得当前显示数据
    str=(str!="0") ? ((operate==0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值;
    str=str + String(num); //给当前值追加字符
    document.calculator.numScreen.value=str; //刷新显示
    operate=0; //重置输入状态
    quit=0; //重置防止重复按键的标志
}
function dzero(){
    var str=String(document.calculator.numScreen.value);
    str=(str!="0") ? ((operate==0) ? str + "00" : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当str+"00"，否则返回"0";
    document.calculator.numScreen.value=str;
    operate=0;
}
function dot(){
    var str=String(document.calculator.numScreen.value);
    str=(str!="0") ? ((operate==0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0";
    for(i=0; i<=str.length;i++){ //判断是否已经有一个点号
        if(str.substr(i,1)==".") return false; //如果有则不再插入
    }
    str=str + ".";
    document.calculator.numScreen.value=str;
    operate=0;
}
function del(){ //退格
    var str=String(document.calculator.numScreen.value);
    str=(str!="0") ? str : "";
    str=str.substr(0,str.length-1);
    str=(str!="") ? str : "0";
    document.calculator.numScreen.value=str;
}
function clearscreen(){ //清除数据
    num=0;
    result=0;
    numshow="0";
    document.calculator.numScreen.value="0";
}
function plus(){ //加法
    calculate(); //调用计算函数
    operate=1; //更改输入状态
    calcul=1; //更改计算状态为加
}
function minus(){ //减法
    calculate();
    operate=1;
    calcul=2;
}
function times(){ //乘法
    calculate();
    operate=1;
    calcul=3;
}
function divide(){ //除法
    calculate();
    operate=1;
    calcul=4;
}
function persent(){ //求余
    calculate();
    operate=1;
    calcul=5;
}
function equal(){
    calculate(); //等于
    operate=1;
    num=0;
    result=0;
    numshow="0";
}
//
function calculate(){
    numshow=Number(document.calculator.numScreen.value);
    if(num!=0 && quit!=1){ //判断前一个运算数是否为零以及防重复按键的状态
        switch(calcul){ //判断要输入状态
            case 1:result=num+numshow;break; //计算"+"
            case 2:result=num-numshow;break; //计算"-"
            case 3:result=num*numshow;break;
            case 4:if(numshow!=0){result=num/numshow;}else{document.getElementById("note").innerHTML="被除数不能为零！"; setTimeout(clearnote,4000)} break;
            case 5:result=num%numshow;break;
        }
        quit=1; //避免重复按键
    }
    else{
        result=numshow;
    }
    numshow=String(result);
    document.calculator.numScreen.value=numshow;
    num=result; //存储当前值
}
function clearnote(){ //清空提示
    document.getElementById("note").innerHTML="";
}

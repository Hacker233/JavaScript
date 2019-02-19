window.onload=function() {
    var oDiv=document.getElementById("div1");
    var oLi=oDiv.getElementsByTagName("li");
    var oP=oDiv.getElementsByTagName("p")[0];
    var arr = ['1分', '2分', '3分', '4分', '5分'];
    var num=0;
    var flag=false;
    for(var i =0; i<oLi.length; i++){
        oLi[i].index = i;
        oLi[i].onmouseover = function(){

            canCelStar();//所有评分
            num=this.index;
            pinFen();

        };



        oLi[i].onclick = function(){
            pinFen();

            flag = true;
            alert('评分完毕,您的评分是'+(num+1)+'分');



        };

        oLi[i].onmouseout = function(){
            if(flag){
                flag = false;
            }else{

                canCelStar();

            }

        };

    }



    function pinFen(){
        for(var i=0; i<=num; i++){
            oLi[i].className = 'active';
        }

        oP.innerHTML = arr[num];
    }

    function canCelStar(){
        for(var i =0; i<oLi.length; i++){
            oLi[i].className = "";
        }

        oP.innerHTML = "点击星星评分";
    }
}

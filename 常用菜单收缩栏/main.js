/**
 * Created by NewRed on 2017/8/18.
 */
window.onload=function(){
    var oMenu=document.getElementById("menu");
    var aH2 = oMenu.getElementsByTagName('h2');
    var aUl = oMenu.getElementsByTagName('ul');
    for(var i=0;i<aH2.length;i++){
        aH2[i].index = i;
        aH2[i].onclick = function(){
            for(var i=0; i<aUl.length; i++){
                if(i==this.index){
                    if(aUl[this.index].style.display == 'block'){
                        aUl[this.index].style.display = 'none';
                        aH2[this.index].className="active11";
                    }
                    else{
                        aUl[this.index].style.display = 'block';
                        aH2[this.index].className="active";
                    }
                }
                else{
                    aUl[i].style.display = 'none';
                    aH2[i].className="active11";

                }
            }
        };
    }
}

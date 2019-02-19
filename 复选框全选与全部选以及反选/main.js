window.onload=function() {
    var oA=document.getElementsByTagName('a')[0];
    var oInput=document.getElementsByTagName('input');
    var oLabel=document.getElementsByTagName('label')[0];
    var isCheckAll=function() {
        for(var i= 1,n=0;i<oInput.length;i++)
        {
            oInput[i].checked;
            n++;
        }
        oInput[0].checked=n==oInput.length-1;
        oLabel.innerHTML=n==oInput.length-1?'全不选':'全选';
    }
    oInput[0].onclick=function(){
        for(var i=1;i<oInput.length;i++){
            oInput[i].checked=this.checked;
        }
        isCheckAll();
    }
    oA.onclick=function(){
        for(var i=1;i<oInput.length;i++){
            oInput[i].checked=!oInput[i].checked;
        }
        isCheckAll();
    }

}

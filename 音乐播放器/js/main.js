//元素剧中的方法
function _center(dom){
    dom.style.position="absolute";
    dom.style.top="50%";
    dom.style.left="50%";
    dom.style.marginTop=-dom.offsetHeight/2+"px";
    dom.style.marginLeft=-dom.offsetWidth/2+"px";
}
function dom(id){
    if(id.toString().indexOf("#")!=1){
        id=id.replace("#","");
    }
    return document.getElementById(id);
}
var musicDom=dom("#music");
_center(musicDom);
//元素居中方法结束
var i=0;
//封装操作音乐
var musicBox={
    musicDom:null,
    songs:[],
    init:function(){
        this.musicDom=document.createElement('audio');
    },
    add:function(src){
        this.songs.push(src);
    },
    play:function(index){
        this.musicDom.src=this.songs[index];
        this.musicDom.play();
    },
    stop:function(){
        this.musicDom.pause();
    },
    next:function(){
        this.play(i+1);
    },
    prev:function(){
        this.play(i-1);
    }
}
//添加两首歌曲
musicBox.add("mp3/1.mp3");
musicBox.add("mp3/2.mp3");
musicBox.add("mp3/3.mp3");
musicBox.add("mp3/4.mp3");
musicBox.add("mp3/5.mp3");

//点击播放或者暂停
var oStart=document.getElementById("start");
musicBox.init();
var onOff = true;
oStart.onclick=function() {
    if(onOff){
        oStart.src="img/pause.svg";
        musicBox.play(i);
        onOff=false;
    }
    else {
        oStart.src="img/start.svg";
        onOff=true;
        musicBox.stop();
    }
}
//点击播放或暂停结束

//点击播放下一首
var oNext=document.getElementById("next");
oNext.onclick=function() {
    musicBox.next();
    i++;
}
//点击播放上一首
var oPrev=document.getElementById("prev");
oPrev.onclick=function() {
    musicBox.prev();
}



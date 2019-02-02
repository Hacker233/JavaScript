window.onload =function(){
    //获取内容区里面得#main和#go，以及获取计数区。
    var main = document.getElementById('main');
    var go = document.getElementById('go');
    var count = document.getElementById('count');
    //设置四种颜色
    cols = ['#1AAB8A', '#E15650', '#121B39', '#80A84E'];
    //动态创建div
    function CDiv(classname) {
        //创建div节点，为一行
        var Div = document.createElement('div')
        //生成随机数，Math.floor()是四舍五入的作用，产生的数永远不会大于4，产生的随机数表示那个有颜色的那一个
        index = Math.floor(Math.random() * 4)
        //设置class
        Div.className = classname

        //在一行里面动态添加四个div，一行里面的四块
        for (var i = 0; i < 4; i++) {
            var iDiv = document.createElement('div')
            Div.appendChild(iDiv)
        }

        //判断#main里面是否有元素
        if (main.children.length == 0) {
            main.appendChild(Div);
        } else {
            //如果有元素，则在该元素之前插入
            main.insertBefore(Div, main.children[0]);
        }
        //随机的设置四个div块的背景颜色
        Div.children[index].style.backgroundColor = cols[index];
        Div.children[index].className = "i";
    }
    function move(obj) {
        //默认速度与计分
        var speed = 5, num = 0;
        //定义一个定时器
        obj.timer = setInterval(function () {
            //速度
            var step = parseInt(getComputedStyle(obj, null)['top']) + speed;
            obj.style.top = step + 'px'
            if (parseInt(getComputedStyle(obj, null)['top']) >= 0) {
                CDiv('row');
                obj.style.top = -150 + 'px';
            }
            if (obj.children.length == 6) {
                for (var i = 0; i < 4; i++) {
                    if (obj.children[obj.children.length - 1].children[i].className == 'i') {
                        //游戏结束
                        obj.style.top = '-150px';
                        count.innerHTML = '游戏结束,最高得分: ' + num;
                        //关闭定时器
                        clearInterval(obj.timer);
                        //显示开始游戏
                        go.children[0].innerHTML = '游戏结束';
                        go.style.display = "block";
                    }
                }
                obj.removeChild(obj.children[obj.children.length - 1]);
            }
            //点击与计分
            obj.onmousedown = function (event) {
                //点击的不是白盒子
                // 兼容IE
                event = event || window.event;
                if ((event.target ? event.target : event.srcElement).className == 'i') {
                    //点击后的盒子颜色
                    (event.target ? event.target : event.srcElement).style.backgroundColor = "#bbb";
                    //清除盒子标记
                    (event.target ? event.target : event.srcElement).className = '';
                    //计分
                    num++;
                    //显示得分
                    count.innerHTML = '当前得分: ' + num;
                }
                else {
                    //游戏结束
                    obj.style.top = 0;
                    count.innerHTML = '游戏结束,最高得分: ' + num;
                    //关闭定时器
                    clearInterval(obj.timer);
                    //显示开始游戏
                    go.children[0].innerHTML = '游戏结束';
                    go.style.display = "block";
                }
                //盒子加速
                if (num % 10 == 0) {
                    speed++;
                }
            }
            //松开触发停止
            obj.onmouseup = function (event) {
            }
        }, 20)
    }
    go.children[0].onclick = function(){
        if (main.children.length) {
            //暴力清除main里面所有盒子
            main.innerHTML = '';
        }
        //清空计分
        count.innerHTML = '游戏开始';
        //隐藏开始盒子
        this.parentNode.style.display = "none";
        move(main);
    }
}
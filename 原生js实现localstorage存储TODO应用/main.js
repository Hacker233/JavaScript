(function(){

    function newFun() {

        var addItems = document.querySelector('.add-items');//选中类为.add-items的元素
        var itemsList = document.querySelector('.plates');//todolist列表
        var buttons = document.querySelector('.buttons');
        var items = JSON.parse(localStorage.getItem('items')) || [];//获取本地缓存到的所有item，将一个对象字符串转换为对象

        //添加item方法
        function handleSubmit(e) {
            e.preventDefault();//阻止默认事件的触发，防止在提交后页面自己刷新
            var name = this.querySelector('[name=item]').value;//获取输入框中的值

            var item = {
                name: name,
                done: false//增加一个状态bool，后面会用到
            };
            items.push(item);
            localStorage.setItem('items', JSON.stringify(items));//将对象转化为字符串，因为本地存储只能以字符串的形式存储
            updateList( items, itemsList);//更新列表
            this.reset();
        }

        function updateList(plates = [], plateList) {
            plateList.innerHTML = plates.map( function(plate, i)  {

                return '<li><input type="checkbox" data-index="' + i + '" id="plate' + i + '" ' + (plate.done ? 'checked' : '') + ' /><label for="plate' + i + '">' + plate.name + '</label></li>';}).join('');
        }


        //事件委托
        // 此处使用到了事件委托：
        // 假设我们队一个input列表进行了事件监听，但我们如法保证，此列表在接下来的状态下是否进行了更新，刷新等改变原来节点的操作，如果有这样的操作出现，那么我们之前的事件监听器就无法再起到监听的作用；
        // 但我们可以对input列表的父元素进行事件监听，让它们的父元素处于监听状态，当我们所点击的元素是其子元素的话，就告诉它的子元素，执行相应的事件；
        // 相当于委托父元素帮我们监听所有子元素，这样无论子元素列表进行怎么样的更新，改变，只要父元素节点不发生改变就可以持续起到监听的 作用。
        // 通过e.target.matches('input')可以判断所点击的元素是不是input元素，e.target返回所点击的宿主元素。
        // 通过获取到所点击的列表的序号，更改其done属性，更新后进行存储，就可以实现完成状态的事件。
        function toggleChecked(e) {
            if (!e.target.matches('input')) return;
            var item = e.target.dataset.index;
            items[item].done = !items[item].done;
            localStorage.setItem('items', JSON.stringify(items));
            updateList( items, itemsList);
        }


        //添加button事件
        function doButtonPress(e) {
            var action = e.target.dataset.action;
            switch (action) {
                case "clear":
                    items = [];
                    break;
                case "check":
                    items.map( function(item) {
                        return item.done = true;
                    } );
                    break;
                case "uncheck":
                    items.map( function(item) {
                        return item.done = false ;
                    } );
                    break;
                default:
                    return;
            }
            localStorage.setItem('items', JSON.stringify(items));
            updateList( items, itemsList);
        }

        addItems.addEventListener('submit', handleSubmit);
        itemsList.addEventListener('click', toggleChecked);
        buttons.addEventListener('click', doButtonPress);

        updateList(items, itemsList);

    }

    document.addEventListener('DOMContentLoaded', newFun);
    //当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。另一个不同的事件 load 应该仅用于检测一个完全加载的页面。 在使用 DOMContentLoaded 更加合适的情况下使用 load 是一个令人难以置信的流行的错误，所以要谨慎。
    //注意：DOMContentLoaded 事件必须等待其所属script之前的样式表加载解析完成才会触发。

}());

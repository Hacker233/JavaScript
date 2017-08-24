function game2048(container)
{
    this.container = container;
    this.tiles = new Array(16);
}
 
game2048.prototype = {
    init: function(){
        for(var i = 0, len = this.tiles.length; i < len; i++){
            var tile = this.newTile(0);
            tile.setAttribute('index', i);
            this.container.appendChild(tile);
            this.tiles[i] = tile;
        }
        this.randomTile();
        this.randomTile();
    },
    newTile: function(val){
        var tile = document.createElement('div');
        this.setTileVal(tile, val)
        return tile;
    },
    setTileVal: function(tile, val){
        tile.className = 'tile tile' + val;
        tile.setAttribute('val', val);
        tile.innerHTML = val > 0 ? val : '';
    },
    randomTile: function(){
        var zeroTiles = [];
        for(var i = 0, len = this.tiles.length; i < len; i++){
            if(this.tiles[i].getAttribute('val') == 0){
                zeroTiles.push(this.tiles[i]);
            }
        }
        var rTile = zeroTiles[Math.floor(Math.random() * zeroTiles.length)];
        this.setTileVal(rTile, Math.random() < 0.8 ? 2 : 4);
    },
    move:function(direction){
        var j;
        switch(direction){
            case 'W':
                for(var i = 4, len = this.tiles.length; i < len; i++){
                    j = i;
                    while(j >= 4){
                        this.merge(this.tiles[j - 4], this.tiles[j]);
                        j -= 4;
                    }
                }
                break;
            case 'S':
                for(var i = 11; i >= 0; i--){
                    j = i;
                    while(j <= 11){
                        this.merge(this.tiles[j + 4], this.tiles[j]);
                        j += 4;
                    }
                }
                break;
            case 'A':
                for(var i = 1, len = this.tiles.length; i < len; i++){
                    j = i;
                    while(j % 4 != 0){
                        this.merge(this.tiles[j - 1], this.tiles[j]);
                        j -= 1;
                    }
                }
                break;
            case 'D':
                for(var i = 14; i >= 0; i--){
                    j = i;
                    while(j % 4 != 3){
                        this.merge(this.tiles[j + 1], this.tiles[j]);
                        j += 1;
                    }
                }
                break;
        }
        this.randomTile();
    },
    merge: function(prevTile, currTile){
        var prevVal = prevTile.getAttribute('val');
        var currVal = currTile.getAttribute('val');
        if(currVal != 0){
            if(prevVal == 0){
                this.setTileVal(prevTile, currVal);
                this.setTileVal(currTile, 0);
            }
            else if(prevVal == currVal){
                this.setTileVal(prevTile, prevVal * 2);
                this.setTileVal(currTile, 0);
            }
        }
    },
    equal: function(tile1, tile2){
        return tile1.getAttribute('val') == tile2.getAttribute('val');
    },
    max: function(){
        for(var i = 0, len = this.tiles.length; i < len; i++){
            if(this.tiles[i].getAttribute('val') == 2048){
                return true;
            }
        }
    },
    over: function(){
        for(var i = 0, len = this.tiles.length; i < len; i++){
            if(this.tiles[i].getAttribute('val') == 0){
                return false;
            }
            if(i % 4 != 3){
                if(this.equal(this.tiles[i], this.tiles[i + 1])){
                    return false;
                }
            }
            if(i < 12){
                if(this.equal(this.tiles[i], this.tiles[i + 4])){
                    return false;
                }
            }
        }
        return true;
    },
    clean: function(){
        for(var i = 0, len = this.tiles.length; i < len; i++){
            this.container.removeChild(this.tiles[i]);
        }
        this.tiles = new Array(16);
    }
}
 
var game, startBtn;
 
window.onload = function(){
    var container = document.getElementById('div2048');
    startBtn = document.getElementById('start');
    startBtn.onclick = function(){
        this.style.display = 'none';
        game = game || new game2048(container);
        game.init();
    }
}
 
window.onkeydown = function(e){
    var keynum, keychar;
    if(window.event){       // IE
        keynum = e.keyCode;
    }
    else if(e.which){       // Netscape/Firefox/Opera
        keynum = e.which;
    }
    keychar = String.fromCharCode(keynum);
    if(['W', 'S', 'A', 'D'].indexOf(keychar) > -1){
        if(game.over()){
            game.clean();
            startBtn.style.display = 'block';
            startBtn.innerHTML = 'game over, replay?';
            return;
        }
        game.move(keychar);
    }
}
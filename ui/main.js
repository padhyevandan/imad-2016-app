console.log('Loaded!');
//move image

var img = document.getElementById('mypic');

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}

img.onClick = function(){
    var interval = setInterval(moveRight,50);
    
};
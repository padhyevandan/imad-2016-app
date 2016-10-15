console.log('Loaded!');
//move image

var img = document.getElementById('mypic');

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function(){
    var interval = setInterval(moveRight,50);
    //img.style.marginLeft='100px';
};
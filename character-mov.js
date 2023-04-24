var player = document.getElementById("player");
var projectile = document.getElementById("projectile");
var bullet = getComputedStyle(projectile).getPropertyValue("--strt")

function moveLeft() {
    let left = parseFloat(getComputedStyle(player).getPropertyValue("left"));
    left -= 7.5;
    player.style.left = left + "px";
}
function moveRight() {
    let left = parseFloat(getComputedStyle(player).getPropertyValue("left"));
    left += 7.5;
    player.style.left = left + "px";
}
function moveUp() {
    let top = parseFloat(getComputedStyle(player).getPropertyValue("top"));
    top -= 7.5;
    player.style.top = top + "px";
}
function moveDown() {
    let top = parseFloat(getComputedStyle(player).getPropertyValue("top"));
    top += 7.5;
    player.style.top = top + "px";
}
//function declaration to allow our div to move up, down, left, right
var map = { "ArrowUp": false, "ArrowDown": false, "ArrowLeft": false, "ArrowRight": false };
//event listeners can only listen to one key at a time so we'll use an array to keep track of keys that are being pressed
document.addEventListener("keydown", event => {
    //save status if key pressed into map array
    if (event.key == "ArrowUp") {
        map["ArrowUp"] = true;
    }
    if (event.key == "ArrowRight") {
        map["ArrowRight"] = true;
    }
    if (event.key == "ArrowLeft") {
        map["ArrowLeft"] = true;
    }
    if (event.key == "ArrowDown") {
        map["ArrowDown"] = true;
    }
    if (map["ArrowDown"]) { moveDown(); }
    if (map["ArrowUp"]) { moveUp(); }
    if (map["ArrowLeft"]) { moveLeft(); }
    if (map["ArrowRight"]) { moveRight(); }
});
//now when we press our key the event listener will set the respected array index to true, but it will never set it back to false
//for that will use a seperate event listener to keep track of keys that are being let go so we can set them back to false when they are
document.addEventListener("keyup", e => {
    if (e.key == "ArrowUp") {
        map["ArrowUp"] = false;
    }
    if (e.key == "ArrowRight") {
        map["ArrowRight"] = false;
    }
    if (e.key == "ArrowLeft") {
        map["ArrowLeft"] = false;
    }
    if (e.key == "ArrowDown") {
        map["ArrowDown"] = false;
    }
});

//using an interval we will attempt to update the projectile div's top and left properties to match those of our player div
//after it update it will run the animation which lasts 500ms where by then the next shot will have an updated property and new anim



setInterval(function () {
    projectile.style.backgroundColor = "blueviolet";
    if (projectile.classList != "animate") {
        projectile.classList.add("animate");
    }else {
        projectile.classList.remove("animate");
    }
    let shotX = parseFloat(getComputedStyle(player).getPropertyValue("left"));
    let shotY = parseFloat(getComputedStyle(player).getPropertyValue("top"));
    shotY -= 50;
    projectile.style.setProperty('--strt', shotY + "px")
    projectile.style.left = shotX + "px";
    projectile.style.backgroundColor("black");
    setInterval(function(){
    projectile.remove();
},10);
}, 1000);

//Finally we've created our function that can successfully make our projectile div follow our player div without being its child
//this will allow us to make more dynamic physics in our game.
//we've now finally implemented a single shot that does not follow the player as they move(that took longer than expected)



//now we will try to animate our projectile going up and then going back down
//we'll use the setInterval function to animate the projectile
/* 
In a default (non-stricT) mode, 'this' is set to the window object in free function calls,
which may lead to surprising results */
var obj = { 
    location: "right:20px",
    setLocation(side, pixels) {
        this.location = side + " " + pixels + "px";
    }
}

function goLeft(setter) {
    setter("left", 10);
}

goLeft(obj.setLocation); // tries to navigate to URL "left%2010px"

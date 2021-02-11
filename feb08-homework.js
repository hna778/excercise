// 1
var asset = 800000;
console.log("Asset ",asset);
if (asset >1000000) {
    console.log("rich");
} else {
    console.log("poor");
}

// 2
function Asset(x) {
        if (asset >1000000) {
            console.log("rich");
        } 
        if (asset >500000) {
            console.log("fair rich");
        } else {
            console.log("poor");
        }
            console.log("Asset ",x);
    }
    Asset(700000);

// 3
function create_hacker_speak() {
    var input = "javascript is awesome";
    var output = "";
    for (var i = 0; i < input.length; i++) {
        if (input[i] === "a") {
            output += 4;
        } else if (input[i] === "e") {
            output += 3;
        } else if (input[i] === "i") {
            output += 1; 
        } else if (input[i] === "o") {
            output += 0;
        } else { (output += input[i]);
        }
            console.log(output);
                }

create_hacker_speak();
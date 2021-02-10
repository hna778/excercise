var asset = 800000;
console.log("Asset ",asset);
if (asset >1000000) {
    console.log("rich");
} else {
    console.log("poor");
}

function Asset(x) {
    console.log("Asset ",x)
}
Asset(700000);
if (asset >1000000) {
    console.log("rich");
} 
if (asset >500000) {
    console.log("fair rich");
}else {
    console.log("poor");
}
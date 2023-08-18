document.getElementById("bold").addEventListener("click",function(){
     document.getElementById("filed").style.fontWeight = "900";
    
})
// for italic 
document.getElementById("italic").addEventListener("click",function(){
    document.getElementById("filed").style.fontStyle = "italic";
})
// for under line 
document.getElementById("under-line").addEventListener("click",function(){
    document.getElementById("filed").style.textDecoration = "underline";
})
// text left 
document.getElementById("left").addEventListener("click",function(){
    document.getElementById("filed").style.textAlign = "left";
})
// for right
document.getElementById("center").addEventListener("click",function(){
    document.getElementById("filed").style.textAlign = "center";
})
document.getElementById("right").addEventListener("click",function(){
    document.getElementById("filed").style.textAlign = "right";
})
document.getElementById("color").addEventListener("input",function(){
    var color = this.value;
    document.getElementById("filed").style.color = color;
})
document.getElementById("number-font").addEventListener("change", function () {
    const i = document.getElementById("number-font");
    const iInnerString = i.value;
    const iNUmber = parseFloat(iInnerString) + "px";

    document.getElementById("filed").style.fontSize = iNUmber;
});



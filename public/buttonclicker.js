level = 0;
mul = 4;
val = mul;
function onClick() {
 if(val > 1) {
   val--;
   document.getElementById("theButton").innerHTML = val;
} else {
   mul += mul;
   val = mul;
   level++;
   document.getElementById("level").innerHTML = "LEVEL: " + level;
   document.getElementById("theButton").innerHTML = val;
}

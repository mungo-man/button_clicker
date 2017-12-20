 level = 0;
 mul = 4;
 val = mul;
 function onClick() {
  if(val > 1) {
    val--;
    document.getElementById("counter").innerHTML = val;
 } else {
    val += val;
    level++;
    document.getElementById("level").innerHTML = "LEVEL: " + level;
 }

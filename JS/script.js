var d,h,m,s,clock,colour;

function clockk(){
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

if(h <= 9){
    h = "0" + h;
}
if(m <= 9){
    m = "0" + m;
}
if(s <= 9){
    s = "0" + s;
}

clock = h + ":" + m + ":" + s;
colour = "#" + h + m + s;

document.getElementById("clock").innerHTML = clock;
document.body.style.backgroundColor = colour;

//Its call a function or executes a code snipped after specified delay.
setTimeout(clockk,1000);
}
clockk();
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStlye = "blue";
ctx.lineWidth = 5;
ctx.arc(200, 210, 40 ,0 , 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStlye = "black";
ctx.lineWidth = 5;
ctx.arc(300, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStlye = "red";
ctx.lineWidth = 5;
ctx.arc(400, 210, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStlye = "yellow";
ctx.lineWidth = 5;
ctx.arc(250, 250, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStlye = "greeen";
ctx.lineWidth = 5;
ctx.arc(350, 250, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStlye = "gray";
ctx.lineWidth = 2;
ctx.rect(87, 143, 430, 200,);
ctx.stroke();
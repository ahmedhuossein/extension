let count = 0;

const pressed = document.getElementById("button");
pressed.addEventListener("click", function(e) {
  count = count + 1;
  console.log(count);

  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // Set canvas dimensions only if the count is less than or equal to 1
  if (count <= 1) {
    canvas.height = 2000
    canvas.width = 2000
    
  }

  let painting = false;
  let currentColor = "black";
  let currentWidth = "10"

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = currentWidth;
    ctx.lineCap = "round";
    ctx.lineJoin = "round"

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    
  }

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);

  const erased = document.getElementById("button2");
  erased.addEventListener("click", function(e) {
    currentColor = "white"; // Change the color to white for erasing
    ctx.fill();
    currentWidth = 20; // Adjust the line width for erasing
  })
    
  pressed.addEventListener("click", function(e) {
      currentColor = "black"
      currentWidth = 10;
    })

  const reset = document.getElementById("button3");
  reset.addEventListener("click", function(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
 
  });
});
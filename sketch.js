var canvasSize = { x: 720, y: 400 };
var acceptableGoal;

var basisGoalSize = 350
var goalSize = { x: basisGoalSize, y: basisGoalSize * 0.39 }

function setup() {
  createCanvas(canvasSize.x, canvasSize.y);
  arrowPos = {
    x: (canvasSize.x / 2) - (8 / 2),
    y: canvasSize.y - 30 * 5.8,
  };
  arrow2Pos = {
    x: (canvasSize.x / 2) - (8 / 2),
    y: canvasSize.y - 30 * 5.8,
  };
  triggerRight = true;
  trigger2Right = true;
}


var clicked = false;
var clicked2 = false;
function draw() {
  var bgcolor = 'rgba(0,200,0, 1)'
  background(bgcolor);
  // acceptableGoal = goal();
  goal();
  ball();
  arrow(clicked);
  arrow2(clicked, clicked2)
}

function goal() {
  rect(
    (canvasSize.x / 2) - (goalSize.x / 2),
    goalSize.y / 2.5,
    goalSize.x,
    goalSize.y
  );
  return 'aaa';
}

var ballSize = 45;
function ball() {
  circle(
    (canvasSize.x / 2),
    canvasSize.y - ballSize * 2,
    ballSize);
}


function arrow(clicked) {
  var arrowSize = { x: 8, y: 30 };
  rect(
    arrowPos.x,
    arrowPos.y,
    arrowSize.x,
    arrowSize.y
  )
  if (arrowPos.x + arrowSize.x > (canvasSize.x / 2) + ((goalSize.x * 1.5) / 2)) {
    triggerRight = false;
  }
  if (arrowPos.x < (canvasSize.x / 2) - ((goalSize.x * 1.5) / 2)) {
    triggerRight = true;
  }

  if (triggerRight && !clicked) {
    arrowPos.x = arrowPos.x + 13;
  } else if (!triggerRight && !clicked) {
    arrowPos.x = arrowPos.x - 13;
  }
  return arrowPos.x;
}

function arrow2(clicked, clicked2) {
  var arrowSize = { x: 8, y: 30 };
  rect(
    arrow2Pos.x,
    arrow2Pos.y,
    arrowSize.x,
    arrowSize.y
  )
  if (arrow2Pos.x + arrowSize.x > (canvasSize.x / 2) + ((goalSize.x * 1.5) / 2)) {
    trigger2Right = false;
  }
  if (arrow2Pos.x < (canvasSize.x / 2) - ((goalSize.x * 1.5) / 2)) {
    trigger2Right = true;
  }

  if (trigger2Right && clicked && !clicked2) {
    arrow2Pos.x = arrow2Pos.x + 13;
  } else if (!trigger2Right && clicked && !clicked2) {
    arrow2Pos.x = arrow2Pos.x - 13;
  }
  return arrow2Pos.x;
}

function mouseClicked() {
  if (!clicked) {
    clicked = true;
  }else{
    clicked2 = true;
  }
}
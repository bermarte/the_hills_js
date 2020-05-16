//score, lifes, direction
let score_tele = 0;
let hiscore = 0;
let lifes = 20;
let dir;
let score_teleworm_element = document.getElementById('score-tele-worm');
let lifes_teleworm_element = document.getElementById('lifes-tele-worm');
let hiscore_teleworm_element = document.getElementById('hiscore-tele-worm');

window.addEventListener("load", () => {
  const c_tele = document.getElementById("my_canvas");
  const ctx_tele = c_tele.getContext("2d");

  //single unit
  const box = 22;
  //stage width
  const width_box = 16;

  c_tele.width = box * width_box;
  c_tele.height = c_tele.width;

  let center = c_tele.width / 2;


  let worm = [];
  worm[0] = {
    x: center,
    y: center
  };

  const ranPos = () => {
    ran = Math.floor(Math.random() * poss_pos.length);
    let ran_first = poss_pos[ran][0];
    let ran_second = poss_pos[ran][1];
    let arr = [ran_first, ran_second];
    return arr;
  };

  //squares: 0,22,44,66,88,110,132,154,176,198,220,242,264,286,308,330,352
  //210 possible positions
  //from poss_pos[0] to poss_pos[209]
  poss_pos = [
    [66, 0],
    [88, 0],
    [110, 0],
    [132, 0],
    [154, 0],
    [176, 0],
    [198, 0],
    [220, 0],
    [242, 0],
    [264, 0],
    [286, 0],

    [66, 22],
    [88, 22],
    [110, 22],
    [132, 22],
    [154, 22],
    [176, 22],
    [198, 22],
    [220, 22],
    [242, 22],
    [264, 22],
    [286, 22],

    [0, 44],
    [66, 44],
    [88, 44],

    [154, 44],
    [176, 44],
    [198, 44],

    [264, 44],
    [286, 44],
    [308, 44],
    [330, 44],
    [352, 44],
    //
    [0, 66],
    [66, 66],
    [88, 66],

    [154, 66],
    [176, 66],
    [198, 66],

    [264, 66],
    [286, 66],
    [308, 66],
    [330, 66],
    [352, 66],

    [66, 88],
    [88, 88],

    [154, 88],
    [176, 88],
    [198, 88],

    [264, 88],
    [286, 88],

    [66, 110],
    [88, 110],
    [110, 110],
    [132, 110],
    [154, 110],
    [176, 110],
    [198, 110],
    [220, 110],
    [242, 110],
    [264, 110],
    [286, 110],

    [0, 132],
    [22, 132],
    [44, 132],
    [66, 132],
    [88, 132],
    [110, 132],
    [132, 132],
    [154, 132],
    [176, 132],
    [198, 132],
    [220, 132],
    [242, 132],
    [264, 132],
    [286, 132],
    [308, 132],
    [330, 132],
    [352, 132],

    [0, 154],
    [22, 154],
    [44, 154],
    [66, 154],
    [88, 154],

    [154, 154],
    [176, 154],
    [198, 154],

    [264, 154],
    [286, 154],
    [308, 154],
    [330, 154],
    [352, 154],

    [66, 176],
    [88, 176],

    [154, 176],
    [176, 176],
    [198, 176],

    [264, 176],
    [286, 176],

    [66, 198],
    [88, 198],

    [154, 198],
    [176, 198],
    [198, 198],

    [264, 198],
    [286, 198],

    [0, 220],
    [22, 220],
    [44, 220],
    [66, 220],
    [88, 220],
    [110, 220],
    [132, 220],
    [154, 220],
    [176, 220],
    [198, 220],
    [220, 220],
    [242, 220],
    [264, 220],
    [286, 220],
    [308, 220],
    [330, 220],
    [352, 220],

    [0, 242],
    [22, 242],
    [44, 242],
    [66, 242],
    [88, 242],
    [110, 242],
    [132, 242],
    [154, 242],
    [176, 242],
    [198, 242],
    [220, 242],
    [242, 242],
    [264, 242],
    [286, 242],
    [308, 242],
    [330, 242],
    [352, 242],

    [66, 264],
    [88, 264],

    [154, 264],
    [176, 264],
    [198, 264],

    [264, 264],
    [286, 264],

    //
    [66, 286],
    [88, 286],

    [154, 286],
    [176, 286],
    [198, 286],

    [264, 286],
    [286, 286],

    [0, 308],
    [22, 308],
    [44, 308],
    [66, 308],
    [88, 308],

    [154, 308],
    [176, 308],
    [198, 308],

    [264, 308],
    [286, 308],
    [308, 308],
    [330, 308],
    [352, 308],

    [0, 330],
    [22, 330],
    [44, 330],
    [66, 330],
    [88, 330],
    [110, 330],
    [132, 330],
    [154, 330],
    [176, 330],
    [198, 330],
    [220, 330],
    [242, 330],
    [264, 330],
    [286, 330],
    [308, 330],
    [330, 330],
    [352, 330],

    [0, 352],
    [22, 352],
    [44, 352],
    [66, 352],
    [88, 352],
    [110, 352],
    [132, 352],
    [154, 352],
    [176, 352],
    [198, 352],
    [220, 352],
    [242, 352],
    [264, 352],
    [286, 352],
    [308, 352],
    [330, 352],
    [352, 352]
  ];

  var ran_pos = ranPos();
  let point = {
    x: ran_pos[0],
    y: ran_pos[1]
  };

  //squares: 0,22,44,66,88,110,132,154,176,198,220,242,264,286,308,330,352
  let maze = [
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  let keyboard_active = false;
  if (keyboard_active) {
    document.addEventListener("keydown", direction);

    function direction(e) {
      if (e.keyCode == 37 && dir != "right") {
        console.log("left");
        dir = "left";
      } else if (e.keyCode == 38 && dir != "down") {
        console.log("up");
        dir = "up";
      } else if (e.keyCode == 39 && dir != "left") {
        console.log("right");
        dir = "right";
      } else if (e.keyCode == 40 && dir != "up") {
        console.log("down");
        dir = "down";
      }
    }
  }

  function draw() {
    ctx_tele.fillStyle = "#9b5517";
    ctx_tele.fillRect(0, 0, c_tele.width, c_tele.height);
    //worm
    for (let i = 0; i < worm.length; i++) {
      if (!i == 0) {
        ctx_tele.fillStyle = "#EB8F7F";
      } else {
        ctx_tele.fillStyle = "#C87A32";
      }
      //shape
      //box: ctx_tele.fillRect(worm[i].x, worm[i].y, box, box);
      ctx_tele.beginPath();
      ctx_tele.arc(worm[i].x, worm[i].y, box / 2, 0, 2 * Math.PI);
      ctx_tele.fill();
    }

    //old pos of worm
    let worm_x = worm[0].x,
      worm_y = worm[0].y;

    //target
    ctx_tele.beginPath();
    ctx_tele.fillStyle = "red";
    ctx_tele.arc(point.x, point.y, box / 2, 0, 2 * Math.PI);
    ctx_tele.fill();

    //maze thing
    for (m = 0; m < maze.length; m++) {
      for (mr = 0; mr < maze[m].length; mr++) {
        //console.log("m table " + m + "m rij" + mr);
        if (maze[m][mr] === 1) {
          ctx_tele.fillStyle = "green";
          ctx_tele.fillRect(mr * box, m * box, box, box);
        }
      }
    }

    //collisions
    let maze_blocks_pos = [
      //orizontal
      [0, 0],
      [22, 0],
      [44, 0],
      [308, 0],
      [330, 0],
      [352, 0],
      [0, 22],
      [22, 22],
      [44, 22],
      [308, 22],
      [330, 22],
      [352, 22],

      [0, 88],
      [22, 88],
      [44, 88],
      [308, 88],
      [330, 88],
      [352, 88],
      [0, 110],
      [22, 110],
      [44, 110],
      [308, 110],
      [330, 110],
      [352, 110],

      [0, 176],
      [22, 176],
      [44, 176],
      [308, 176],
      [330, 176],
      [352, 176],
      [0, 198],
      [22, 198],
      [44, 198],
      [308, 198],
      [330, 198],
      [352, 198],

      [0, 264],
      [22, 264],
      [44, 264],
      [308, 264],
      [330, 264],
      [352, 264],
      [0, 286],
      [22, 286],
      [44, 286],
      [308, 286],
      [330, 286],
      [352, 286],

      //vertical obstacles
      [110, 44],
      [132, 44],
      [220, 44],
      [242, 44],

      [110, 66],
      [132, 66],
      [220, 66],
      [242, 66],

      [110, 88],
      [132, 88],
      [220, 88],
      [242, 88],

      [110, 154],
      [132, 154],
      [220, 154],
      [242, 154],

      [110, 176],
      [132, 176],
      [220, 176],
      [242, 176],

      [110, 198],
      [132, 198],
      [220, 198],
      [242, 198],

      //264,286,308
      [110, 264],
      [132, 264],
      [220, 264],
      [242, 264],

      [110, 286],
      [132, 286],
      [220, 286],
      [242, 286],

      [110, 308],
      [132, 308],
      [220, 308],
      [242, 308]
    ];
    //where is the worm
    //where(worm_x, worm_y);

    //check collisions
    function isArrayInArray(arr, item) {
      let item_as_string = JSON.stringify(item);

      let contains = arr.some(function (ele) {
        return JSON.stringify(ele) === item_as_string;
      });
      return !contains;
    }

    function canMove(x, y) {
      let xy_pos = [x, y];
      return isArrayInArray(maze_blocks_pos, xy_pos);
    }

    //where is the worm
    function where(x, y) {
      let xy_pos = [x, y];
      console.log(xy_pos);
      //console.log("worm can move: " + isArrayInArray(maze_blocks_pos, xy_pos));
    }

    //check direction
    if (canMove(worm_x, worm_y)) {
      if (dir == "left") {
        worm_x -= box;
      }
      if (dir == "right") {
        worm_x += box;
      }
      if (dir == "up") {
        worm_y -= box;
      }
      if (dir == "down") {
        worm_y += box;
      }
    }

    //eat target
    if (worm_x == point.x && worm_y == point.y) {
      score_tele++;
      score_teleworm_element.innerHTML = score_tele;

      //move target
      ran_pos = ranPos();

      point = {
        x: ran_pos[0],
        y: ran_pos[1]
      };
    } else {
      //pop
      worm.splice(worm.length - 1, 1);
    }

    //stop walls
    //left wall
    if (worm_x <= 0) {
      worm_x = 0;
    }
    //right wall
    if (worm_x >= c_tele.width) {
      worm_x = c_tele.width;
    }
    //top wall
    if (worm_y >= c_tele.height) {
      worm_y = c_tele.height;
    }
    if (worm_y <= 0) {
      worm_y = 0;
    }

    if (!canMove(worm_x, worm_y)) {
      worm_y = center;
      worm_x = center;
      lifes--;
      lifes_teleworm_element.innerHTML = lifes;
    }

    //add block
    let new_block = { x: worm_x, y: worm_y };
    worm.unshift(new_block);

    //score in canvas
    /*
    ctx_tele.fillStyle = "black";
    ctx_tele.font = "32px Arial";
    ctx_tele.fillText("score = " + score_tele, 0, box);
    */

    //lifes:
    //ctx_tele.fillText("lifes = " + lifes, 0, c_tele.height);
    if (lifes == 0) {
      clearInterval(game_tele_worm);

      worm.length = 0;
      worm[0] = {
        x: center,
        y: center
      };

      ctx_tele.fillStyle = "#9b5517";
      ctx_tele.fillRect(0, 0, c_tele.width, c_tele.height);
      ctx_tele.fillStyle = "black";

      ctx_tele.textAlign = "center";
      ctx_tele.font = "bold 22pt Courier";
      ctx_tele.fillText("GAME OVER", center, center);
      ctx_tele.font = "18pt Courier";
      ctx_tele.fillText("points: " + score_tele, center, center / 1.5);
      ctx_tele.fillText("'play game' to restart", center, center + 56);
      if (score_tele > hiscore) {
        hiscore = score_tele;

      }
      ctx_tele.fillText("hi-score: " + hiscore, center, center / 1.9);
      hiscore_teleworm_element.innerHTML = hiscore;
    }
  }

  //let game_tele_worm = setInterval(draw, 100);

  setInterval(function () {
    draw();
  }, 1000);
  document.getElementById("play_tele-worm").addEventListener("click", play_tele_worm);

  function play_tele_worm() {

    ctx_tele.textAlign = "start";
    score_tele = 0;
    lifes = 20;
    lifes_teleworm_element.innerHTML = lifes;
    score_teleworm_element.innerHTML = score_tele;
    game_tele_worm = setInterval(draw, 1000);

  };

  /* 
    joystick tele-worm 
    tele_left
    tele_up
    tele_right
    tele_down
    */

  document.getElementById("tele_left").addEventListener("click", tele_go_left);
  document.getElementById("tele_up").addEventListener("click", tele_go_up);
  document.getElementById("tele_right").addEventListener("click", tele_go_right);
  document.getElementById("tele_down").addEventListener("click", tele_go_down);



  function tele_go_left() {
    console.log("left");
    dir = "left";
  }
  function tele_go_up() {
    console.log("up");
    dir = "up";
  }
  function tele_go_right() {
    console.log("right");
    dir = "right";
  }
  function tele_go_down() {
    console.log("down");
    dir = "down";
  }
});



window.addEventListener("load", function () {
    const c_black = document.getElementById("canvas_black");
    const ctx_black = c_black.getContext("2d");

    //c_black.width = 300;
    //c_black.height = 500;
});

function BlackJack() {
    let score = 0; //default 0
    let dealer_score = 0; //default 0
    const MIN = 1;
    const MAX = 11;
    const BJ_MAX = 21;
    const MAX_DEALER = 15;

    Object.defineProperty(this, 'surrender', {
        get: function () {
            return surrender;
        }
    });
    Object.defineProperty(this, 'stand', {
        get: function () {
            return stand;
        }
    });
    let randomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    this.hit = function () {
        console.log('hit game');
        let hit = randomInt(MIN, MAX);
        console.log(`we have a ${hit}`);
        score += hit;
        console.log(`our score is ${score}`);
        document.getElementById('black_score').innerHTML = score;
        let res = document.getElementById('black_results');
        if (score > BJ_MAX) {
            console.log("you loose");
            surrender();

        }
        else if (score == BJ_MAX) {
            console.log("you win");
            win();
        }

        else {
            console.log("continue");

        }

    };
    let black_div = document.getElementById('black_div');
    let results = document.getElementById('black_results');
    const msg = document.createElement('div');

    let replay = function () {
        console.log('play again');
        score = 0;
        dealer_score = 0;
        document.getElementById('black_dealer_score').innerHTML = '?';
        document.getElementById('black_score').innerHTML = score;
        black_div.innerHTML = "<input type='button' class='btn btn-primary' value='HIT' id='hit'><input type='button' class='btn btn-primary' value='STAND' id='stand'><input type='button' class='btn btn-primary' value='SURRENDER' id='surrender'>";
        document.getElementById('hit').addEventListener('click', black_game.hit);
        document.getElementById('stand').addEventListener('click', black_game.stand);
        document.getElementById('surrender').addEventListener('click', black_game.surrender);
        results.removeChild(msg);
    }
    let feedback = null;
    let win = function () {
        msg.innerHTML = '<h4 class="bg-dark text-white my-5">You Win</h4>';
        results.appendChild(msg);
        black_div.innerHTML = "<input type='button' class='btn btn-primary' value='PLAY AGAIN' id='play_again'>";
        document.getElementById('play_again').addEventListener('click', replay);
        feedback = 'You win';
        msg_box();
    }

    let surrender = function () {
        console.log("dealer wins");
        msg.innerHTML = '<h4 class="bg-dark text-white">You Loose</h4>';
        results.appendChild(msg);
        black_div.innerHTML = "<input type='button' class='btn btn-primary' value='PLAY AGAIN' id='play_again'>";
        document.getElementById('play_again').addEventListener('click', replay);
        feedback = 'You loose';
        msg_box();
    }
    let tie = function () {
        console.log("it is a tie");
        msg.innerHTML = '<h4 class="bg-dark text-white">Tie</h4>';
        results.appendChild(msg);
        black_div.innerHTML = "<input type='button' class='btn btn-primary' value='PLAY AGAIN' id='play_again'>";
        document.getElementById('play_again').addEventListener('click', replay);
        feedback = 'tie';
        msg_box();
    }

    function msg_box() {
        if (confirm(feedback)) {
            return;
          }
    }
    
    let showDealer = function () {
       document.getElementById('black_dealer_score').innerHTML = dealer_score;
    }

    let stand = function () {
        if (score == 0) {
            console.log("dealer wins");
            msg.innerHTML = '<h4 class="bg-dark text-white my-5">You did not Hit</h4>';
            results.appendChild(msg);
            black_div.innerHTML = "<input type='button' class='btn btn-primary' value='PLAY AGAIN' id='play_again'>";
            document.getElementById('play_again').addEventListener('click', replay);
        }
        else {
            do {
                let hit_dealer = randomInt(MIN, MAX);
                console.log(`dealer has a ${hit_dealer}`);
                dealer_score += hit_dealer;
                console.log(`dealer's score is ${dealer_score}`);
            }
            while (
                dealer_score <= MAX_DEALER
            );

            if (dealer_score > BJ_MAX){
                console.log("player wins");
                win();
                showDealer();
            }
            if (score > dealer_score){
                console.log("player wins");
                win();
                showDealer();
            }
            else if (score == dealer_score){
                console.log("tie");
                tie();
                showDealer();
            }
    
            else if (dealer_score < BJ_MAX){
                console.log("dealer wins");
                surrender();
                showDealer();
            }

        }
    }
}

const black_game = new BlackJack();

document.getElementById('surrender').addEventListener('click', black_game.surrender);
document.getElementById('hit').addEventListener('click', black_game.hit);
document.getElementById('stand').addEventListener('click', black_game.stand);

/*
examples:
black_game.score = 7;
console.log(black_game.score);
black_game.hit();
*/
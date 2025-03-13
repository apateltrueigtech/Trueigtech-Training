function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    if (roll === 6) {
        console.log("Jackpot!");
    } else if (roll === 4 || roll === 5) {
        console.log("You win!");
    } else {
        console.log("Try again!");
    }

    console.log(`You rolled a ${roll}`);
    }

rollDice();

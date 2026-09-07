class SlotMachine {
  constructor() {
    this.coins = 0; // Inicializamos
  }

  play() {
    this.coins++;
    const reel1 = Math.random() < 0.5; // 50% de probabilidad entre true y false
    const reel2 = Math.random() < 0.5;
    const reel3 = Math.random() < 0.5;

    if (reel1 && reel2 && reel3) { // Si los 3 son true
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else { // Si no lo son
      console.log("Good luck next time!!");
    }
  }
}

// Ejemplo (distinto cada vez que se ejecute)
const machine1 = new SlotMachine(); // 5 tiradas
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
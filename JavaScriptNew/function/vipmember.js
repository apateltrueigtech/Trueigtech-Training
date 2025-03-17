//  Create a function that returns the VIP status of a player based on their total spending.
const player = {
    name: "Aditi Patel", 
    totalSpending: 3500, 

    getVIPStatus: function () {
        if (this.totalSpending >= 5000) {
            return " Gold Member";
        } else if (this.totalSpending >= 1000) {
            return " Silver Member";
        } else {
            return " Regular Member";
        }
    }
};

console.log(`Player: ${player.name}`);
console.log(`Total Spending: $${player.totalSpending}`);
console.log(`VIP Status: ${player.getVIPStatus()}`);

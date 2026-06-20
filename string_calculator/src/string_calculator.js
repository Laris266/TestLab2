

	function calculate(dice){
    if (!Array.isArray(dice)) {
        return 0;
    }

    let total = 0;
    for (const value of dice) {
        if (value === 3) {
            total += 2;
        } else if (value === 5) {
            total += 4;
        }
    }
    return total;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = calculate;
}

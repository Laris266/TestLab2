var calculate;
if (typeof require !== 'undefined' && typeof module !== 'undefined' && module.exports) {
    calculate = require('../src/string_calculator');
}

describe('calculate', function() {

    it('should return 6 for [1,2,3,4,5]', function() {
        expect(calculate([1,2,3,4,5])).toBe(6);
    });
	it('should return 4 for [2,2,3,3]', function() {
        expect(calculate([2,2,3,3])).toBe(4);
    });
	it('should return 2 for [6,6,4,4,1,3]', function() {
        expect(calculate([6, 6, 4, 4, 1, 3])).toBe(2);
    });

});
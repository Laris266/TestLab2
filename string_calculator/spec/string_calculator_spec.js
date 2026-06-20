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
	it('should return 12 for [3,5,3,5,4,2]', function() {
        expect(calculate([3,5,3,5,4,2])).toBe(12);
    });
	it('should return 0 for [2,4,6]', function() {
        expect(calculate([2,4,6])).toBe(0);
    });

});
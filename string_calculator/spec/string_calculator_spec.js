describe('Electron around the cores', function() {
	beforeEach(function() {
		electrons = new ElectronAroundTheCores();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});
});

describe('The calculated discount', function() {
    var discountCalculator = new DiscountCalculator();

    it('is 15% if the value is >= 50000', function() {
        expect(discountCalculator.calculate_discount(50001)).toEqual(7500.15);
    });
    
    it('is 10% if the value is >= 10000', function () {
        expect(discountCalculator.calculate_discount(11111)).toEqual(1111.1);
    });
    
    it('is 7% if the value is >= 7000', function() {
        expect(discountCalculator.calculate_discount(7001)).toEqual(490.07);
    });
    
    it('is 5% if the value is >= 5000', function() {
        expect(discountCalculator.calculate_discount(6357.21)).toEqual(317.86);
    });
    
    it('is 3% if the value is >= 1000', function () {
        expect(discountCalculator.calculate_discount(1357.74)).toEqual(40.73);
    });

    it('is 0 if the value is less than 1000', function() {
        expect(discountCalculator.calculate_discount(542)).toEqual(0);
    });

    it('is 0 is the value is undefined', function () {
        expect(discountCalculator.calculate_discount()).toEqual(0);
    });

    it('is 0 if the value is 0', function () {
        expect(discountCalculator.calculate_discount(0)).toEqual(0);
    });
});
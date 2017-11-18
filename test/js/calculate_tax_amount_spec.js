
describe('The tax amount', function() {
    var taxCalculator = new TaxCalculator();

    it('is 47,95 if total price is 700 and we are in UT (tax rate 6.85%)', function() {
        expect(47.95).toEqual(taxCalculator.calculate_tax(700, 'UT'));
    });

    it('is 97,27 if total price is 1420 and we are in UT (tax rate 6.85%)', function() {
        expect(97.27).toEqual(taxCalculator.calculate_tax(1420, 'UT'));
    });

    it('is 800 if total price is 10000 and we are in NV (tax rate 8.00%)', function(){
        expect(800).toEqual(taxCalculator.calculate_tax(10000, 'NV'));
    });

    it('is 808 if total price is 10100 and we are in NV (tax rate 8.00%)', function() {
        expect(808).toEqual(taxCalculator.calculate_tax(10100, 'NV'));
    });

    it('is 303.5 if total_price is 4856 and we are in TX (tax rate 6.25%)', function() {
        expect(303.5).toEqual(taxCalculator.calculate_tax(4856, 'TX'));
    });

    it('is 147.28 if total price is 3682 and we are in AL (tax rate 4.00%)', function(){
        expect(147.28).toEqual(taxCalculator.calculate_tax(3682, 'AL'));
    });

    it('is 213.5925 if total price is 2589 and we are in CA (8.25%)', function() {
        expect(213.5925).toEqual(taxCalculator.calculate_tax(2589, 'CA'));
    });

    it('is 0 if total price is 0', function () {
        expect(0).toEqual(taxCalculator.calculate_tax(0, 'UT'));
    });

    it('is 0 if state code is undefined or empty', function() {
        expect(0).toEqual(taxCalculator.calculate_tax(1000000));
    });
});


// what if either total_price or state_code is not valid?
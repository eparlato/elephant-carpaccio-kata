describe('Orders processing', function () {
    it('zero items', function () {
        var priceCalculator = new PriceCalculator();
        var taxCalculator = new TaxCalculator();
        var discountCalculator = new DiscountCalculator();

        var input = {
            tot_items: 0,
            price_per_item: 0,
            state_code: ""
        };
        var orderProcessor = new OrderProcessor(priceCalculator, taxCalculator, discountCalculator);
        var total_price = orderProcessor.process(input);
        
        expect(total_price).toEqual('$0');
    });
});
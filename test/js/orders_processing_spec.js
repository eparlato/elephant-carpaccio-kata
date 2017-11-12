describe('Orders processing', function () {
    
    var priceCalculator = new PriceCalculator();
    var taxCalculator = new TaxCalculator();
    var discountCalculator = new DiscountCalculator();
    var input;
    var orderProcessor = new OrderProcessor(priceCalculator, taxCalculator, discountCalculator);
    var total_price;

    it('zero items - slice 0', function () {

        input = {
            tot_items: 0,
            price_per_item: 0,
            state_code: ""
        };

        total_price = orderProcessor.process(input);
        
        expect(total_price).toEqual('$0');
    });

    it('1 item with a fixed price - slice 1', function () {

        input = {
            tot_items: 1,
            price_per_item: 5,
            state_code: ""
        };

        total_price = orderProcessor.process(input);
        
        expect(total_price).toEqual('$5');
    });

    it('2 items, total with no taxes nor discount - slice 2', function () {
        input = {
            tot_items: 2,
            price_per_item: 7,
            state_code: ""
        };

        total_price = orderProcessor.process(input);
        
        expect(total_price).toEqual('$14');
    });
});
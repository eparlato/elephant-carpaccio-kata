describe('When I process an order', function () {
    var EMPTY_STATE_CODE = '';

    var priceCalculator = new PriceCalculator();
    var taxCalculator = new TaxCalculator();
    var discountCalculator = new DiscountCalculator();
    var input;
    var orderProcessor = new OrderProcessor(priceCalculator, taxCalculator, discountCalculator);
    var total_price;

    it('total price is $0 if there are no items', function () {

        input = {
            tot_items: 0,
            price_per_item: 0,
            state_code: EMPTY_STATE_CODE
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$0');
    });

    it('total price is $5 if I have 1 item whose price is 5 - slice 1', function () {

        input = {
            tot_items: 1,
            price_per_item: 5,
            state_code: EMPTY_STATE_CODE
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$5');
    });

    it('total price is $14 if I have 2 items and price_per_item is 7 (no taxes no discount) - slice 2', function () {
        input = {
            tot_items: 2,
            price_per_item: 7,
            state_code: EMPTY_STATE_CODE
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$14');
    });

    it('total price is $20 if I have 5 items and price_per_item is 4 (no taxes no discount) - slice 3', function () {
        input = {
            tot_items: 5,
            price_per_item: 4,
            state_code: EMPTY_STATE_CODE
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$20');
    });

    it('tax value is 137 (6.85%) if state_code is UT - slice 4', function () {

        input = {
            tot_items: 2,
            price_per_item: 1000,
            state_code: 'UT'
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$2137');
    });

    it('tax rate is 160 if state code is NV - slice 5', function () {

        input = {
            tot_items: 2,
            price_per_item: 1000,
            state_code: 'NV'
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$2160');
    });
});
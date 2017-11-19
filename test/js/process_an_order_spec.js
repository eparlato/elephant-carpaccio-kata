describe('When I process an order', function () {
    var EMPTY_STATE_CODE = '';

    var input;
    var orderProcessor;
    var total_price;

    beforeEach(function() {
        total_price = 0;
        input = {};
    });

    it('the total price is $0 if there are no items', function () {
        orderProcessor = new OrderProcessor(
            new PriceCalculator(), 
            new TaxCalculatorNoTaxesStub(), 
            new DiscountCalculatorNoDiscountStub()
        );

        input = {
            tot_items: 0,
            price_per_item: 0,
            state_code: EMPTY_STATE_CODE
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$0');
    });

    it('the total price is $5 if I have 1 item whose price is 5 - slice 1', function () {
        orderProcessor = new OrderProcessor(
            new PriceCalculator(), 
            new TaxCalculatorNoTaxesStub(), 
            new DiscountCalculatorNoDiscountStub()
        );

        input = {
            tot_items: 1,
            price_per_item: 5,
            state_code: EMPTY_STATE_CODE
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$5');
    });

    it('the total price is $14 if I have 2 items and price_per_item is 7 (no taxes no discount) - slice 2', function () {
        orderProcessor = new OrderProcessor(
            new PriceCalculator(), 
            new TaxCalculatorNoTaxesStub(), 
            new DiscountCalculatorNoDiscountStub()
        );
        
        input = {
            tot_items: 2,
            price_per_item: 7,
            state_code: EMPTY_STATE_CODE
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$14');
    });

    it('the total price is $20 if I have 5 items and price_per_item is 4 (no taxes no discount) - slice 3', function () {
        orderProcessor = new OrderProcessor(
            new PriceCalculator(), 
            new TaxCalculatorNoTaxesStub(), 
            new DiscountCalculatorNoDiscountStub()
        );
        
        input = {
            tot_items: 5,
            price_per_item: 4,
            state_code: EMPTY_STATE_CODE
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$20');
    });

    it('the tax value is 137 (6.85%) if state_code is UT - slice 4', function () {
        orderProcessor = new OrderProcessor(
            new PriceCalculator(), 
            new TaxCalculator(), 
            new DiscountCalculatorNoDiscountStub()
        );

        input = {
            tot_items: 2,
            price_per_item: 1000,
            state_code: 'UT'
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$2137');
    });

    it('the tax rate is 160 if state code is NV - slice 5', function () {
        orderProcessor = new OrderProcessor(
            new PriceCalculator(), 
            new TaxCalculator(), 
            new DiscountCalculatorNoDiscountStub()
        );

        input = {
            tot_items: 2,
            price_per_item: 1000,
            state_code: 'NV'
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$2160');
    });

    it('the tax rate is 120 if total price is 1500 and the state code is NV', function () {
        orderProcessor = new OrderProcessor(
            new PriceCalculator(), 
            new TaxCalculator(), 
            new DiscountCalculatorNoDiscountStub()
        );

        input = {
            tot_items: 3,
            price_per_item: 500,
            state_code: 'NV'
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$1620');
    });

    it('the tax rate is different whether the state code is different - slice 6', function() {
        orderProcessor = new OrderProcessor(
            new PriceCalculator(), 
            new TaxCalculator(), 
            new DiscountCalculatorNoDiscountStub()
        );

        input = {
            tot_items: 5,
            price_per_item: 20
        };

        input.state_code = 'UT';
        expect(orderProcessor.process(input)).toEqual('$106.85');

        input.state_code = 'NV';
        expect(orderProcessor.process(input)).toEqual('$108');

        input.state_code = 'TX';
        expect(orderProcessor.process(input)).toEqual('$106.25');

        input.state_code = 'AL';
        expect(orderProcessor.process(input)).toEqual('$104');

        input.state_code = 'CA';
        expect(orderProcessor.process(input)).toEqual('$108.25');
    });

    it('the discount is $30 if we spend $1000 - slice 7', function() {
        orderProcessor = new OrderProcessor(
            new PriceCalculator(), 
            new TaxCalculator(), 
            new DiscountCalculator()
        );
        
        input = {
            tot_items: 2,
            price_per_item: 500,
            state_code: ''
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$970');
    });

    it('the total price is $1133.6875 if we buy for $1100 (3% discount) in TX - slice 8', function() {
        orderProcessor = new OrderProcessor(
            new PriceCalculator(), 
            new TaxCalculator(), 
            new DiscountCalculator()
        );
        
        input = {
            tot_items: 2,
            price_per_item: 550,
            state_code: 'TX'
        };

        total_price = orderProcessor.process(input);
        
        expect(total_price).toEqual('$1133.6875');
    });

    it('the total price is $5187 if we buy for $5250 (5% discount) in AL - slice 9', function() {
        orderProcessor = new OrderProcessor(
            new PriceCalculator(),
            new TaxCalculator(),
            new DiscountCalculator()
        );

        input = {
            tot_items: 5,
            price_per_item: 1050,
            state_code: 'AL'
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$5187');
    });

    it('the total price is $553664.16 if we buy for $603120 (15% discount) in NV - slice 10', function () {
        orderProcessor = new OrderProcessor(
            new PriceCalculator(),
            new TaxCalculator(),
            new DiscountCalculator()
        );

        input = {
            tot_items: 10,
            price_per_item: 60312,
            state_code: 'NV'
        };

        total_price = orderProcessor.process(input);

        expect(total_price).toEqual('$553664.16');
    });
});
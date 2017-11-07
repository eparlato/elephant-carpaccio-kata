describe('The product', function () {
    it('returns $0 if no items are insert (slice 0)', function () {
        var priceCalculator = new PriceCalculator();
        var product = new Product(priceCalculator);

        expect(product.total_price()).toEqual('$0');
    });

    it('returns $5 if 1 item is passed', function () {
        var priceCalculator = new PriceCalculator();
        var product = new Product(priceCalculator);

        expect(product.total_price({items: 1})).toEqual('$5');
    });
});
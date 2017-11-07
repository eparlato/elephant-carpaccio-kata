describe('The product', function () {
    it('returns $0 if no items are insert (slice 0)', function () {
        var priceCalculator = new PriceCalculator();
        var product = new Product(priceCalculator);

        expect(product.total_price()).toEqual('$0');
    });
});
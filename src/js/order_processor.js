function OrderProcessor(priceCalculator, taxCalculator, discountCalculator) {
    
    this.process = function(input) {
        var result = priceCalculator.calculate(input);
        
        return '$' + result;
    };
}
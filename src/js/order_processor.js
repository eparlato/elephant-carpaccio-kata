function OrderProcessor(priceCalculator, taxCalculator, discountCalculator) {
    
    this.process = function(input) {
        var result; 
       
        var total_price = priceCalculator.calculate(input);
        var discount_value = discountCalculator.calculate_discount(total_price);

        total_price -= discount_value;
        var tax_value = taxCalculator.calculate_tax(total_price, input.state_code);

        result = total_price + tax_value;

        return '$' + result;
    };
}
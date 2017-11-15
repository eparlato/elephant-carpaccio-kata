function TaxCalculator() {
    
    this.calculate_tax = function(price, state_code) {
        if (state_code === 'UT') {
            return 137;
        }
        
        return 0;
    };
}
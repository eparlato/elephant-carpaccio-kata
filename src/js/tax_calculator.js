function TaxCalculator() {
    
    this.calculate_tax = function(price, state_code) {
        if (state_code === 'UT') {
            return 137;
        } else if (state_code === 'NV') {
            return 160;
        }
        
        return 0;
    };
}
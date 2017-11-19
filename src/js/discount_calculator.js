function DiscountCalculator() {
    
    this.calculate_discount = function(total_value) {
        if (total_value != undefined &&  total_value === 1000) {
            return 30;
        }

        return 0;
    };
}
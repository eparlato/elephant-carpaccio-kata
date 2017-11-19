function DiscountCalculator() {
    
    this.calculate_discount = function(total_value) {
        if (total_value != undefined &&  total_value === 1000) {
            return 30;
        } else if (total_value != undefined &&  total_value > 1000) {
            return (total_value * 3) / 100;
        }

        return 0;
    };
}
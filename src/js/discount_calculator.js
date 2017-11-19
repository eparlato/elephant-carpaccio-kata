function DiscountCalculator() {

    this.calculate_discount = function (value) {
        if (value === undefined || value == 0) {
            return 0;
        }

        var discount_percentage;

        if (value >= 50000) {
            discount_percentage = 15;
        } else if (value >= 10000) {
            discount_percentage = 10;
        } else if(value >= 7000) {
            discount_percentage = 7;
        } else if (value >= 5000) {
            discount_percentage = 5;
        } else if (value >= 1000) {
           discount_percentage = 3;
        } else {
            discount_percentage = 0;
        }

        return Math.round(value * discount_percentage) / 100;
    };
}
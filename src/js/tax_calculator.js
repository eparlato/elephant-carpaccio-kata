function TaxCalculator() {

    var tax_rate = {
        UT: 6.85,
        NV: 8.00,
        TX: 6.25,
        AL: 4.00,
        CA: 8.25
    };

    this.calculate_tax = function (price, state_code) {
        if (state_code === undefined || state_code === '') {
            return 0;
        }

        return (price * tax_rate[state_code]) / 100;
    };

}
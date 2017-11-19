function TaxCalculatorNoTaxesStub() {
    this.calculate_tax = function (price, state_code) {
        return 0;
    };
}
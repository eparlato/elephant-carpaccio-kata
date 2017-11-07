function Product(priceCalculator) {

    this.total_price = function (input_params) {
        var tot_items = input_params === undefined ? 0 : input_params.items;
        var total = priceCalculator.calculate(tot_items);
       
        return '$' + total;
    };
}
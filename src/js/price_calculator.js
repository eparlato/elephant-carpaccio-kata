function PriceCalculator () {

    this.calculate = function (input) {
        var result = input.tot_items * input.price_per_item;

        return result;
    };

}
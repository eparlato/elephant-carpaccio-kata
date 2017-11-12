function PriceCalculator () {

    this.calculate = function (input) {
        var result = input.tot_items === 0 ? 0 : 5;

        return result;
    };

}
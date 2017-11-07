function PriceCalculator () {

    this.calculate = function (tot_items) {
        if (tot_items === 0) {
            return 0;
        } else {
            return 5;
        }
    };
}
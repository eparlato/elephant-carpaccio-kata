(function () {
    var button_calculate = document.getElementById('button_calculate');

    button_calculate.onclick = function () {
        var priceCalculator = new PriceCalculator();
        var product = new Product(priceCalculator);
        var output_total_price = document.getElementById('output_total_price');
        
        var total_price = product.total_price();

        output_total_price.value = total_price;
    };
})();
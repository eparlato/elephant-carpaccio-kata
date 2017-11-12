(function () {
    var button_calculate = document.getElementById('button_calculate');
    var products_form = document.getElementById('products_form');

    button_calculate.onclick = function () {
        var inputLoader = new InputLoader();
        var outputDisplay = new OutputDisplay(products_form);
        
        var priceCalculator = new PriceCalculator();
        var taxCalculator = new TaxCalculator();
        var discountCalculator = new DiscountCalculator();
        
        var orderProcessorInputs = inputLoader.inputs_from(products_form);
        var orderProcessor = new OrderProcessor(priceCalculator, taxCalculator, discountCalculator);
        var total_price = orderProcessor.process(orderProcessorInputs);
        
        outputDisplay.display(total_price);
    };

})();
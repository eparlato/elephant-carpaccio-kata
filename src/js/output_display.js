function OutputDisplay(products_form) {
    
    var output_total_price = products_form.querySelector('#output_total_price');

    this.display = function (total_price) {
        output_total_price.innerHTML = total_price;
    };
}
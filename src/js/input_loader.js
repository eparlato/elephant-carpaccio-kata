function InputLoader () {
    
    this.inputs_from = function (products_form) {
        var tot_items_node = products_form.querySelector('#tot_items');
        var price_per_item_node = products_form.querySelector('#price_per_item');
        var state_code_node = products_form.querySelector('#state_code');

        var result = {
            tot_items: tot_items_node.value,
            price_per_item: price_per_item_node.value,
            state_code: state_code_node.value
        };

        return result;
    };
}
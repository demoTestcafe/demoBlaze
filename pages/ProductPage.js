import { Selector, t } from "testcafe";

class ProductPage{
    constructor(){
        this.product = Selector('.name');
        this.productDescription = Selector('strong').withText('Product description');
        this.addToCartBtn = Selector('a.btn.btn-success.btn-lg');

    }
}

export default new ProductPage();
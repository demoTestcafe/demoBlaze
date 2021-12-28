import { Selector, t } from "testcafe";

class CartPage{
    constructor(){
       this.product = Selector('h2').withText('Products');
       this.placeOrderBtn = Selector('button').withText('Place Order');
       this.subtitlePlaceOrderModal = Selector('#orderModalLabel');
       this.name = Selector('#name');
       this.country = Selector('#country');
       this.city = Selector('#city');
       this.card = Selector('#card');
       this.month = Selector('#month');
       this.year = Selector('#year');
       this.purchaceBtn = Selector('button').withText('Purchase');
       this.messageSuccessful = Selector('h2').withText('Thank you for your purchase!');
       this.OkBtn = Selector('button').withText('OK');
    }
}

export default new CartPage();
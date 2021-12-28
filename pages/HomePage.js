import {Selector, t} from "testcafe";

class HomePage{
   constructor(){
       this.subtitleHeader = Selector('a').withText('PRODUCT STORE');
       this.signUpLink = Selector('#signin2');
       this.logInLink = Selector('a').withText('Log in');
       this.cartLink = Selector('a').withText('Cart');
       this.contactLink = Selector('a').withText('Contact');
       this.welcomeLink = Selector('#nameofuser');

       this.newMessageModal = Selector('h5').withText('New message');
       this.contactEmailTxt = Selector('#recipient-email');
       this.contactNameTxt = Selector('#recipient-name');
       this.messageTxt = Selector('#message-text');
       this.sendMessageBtn = Selector('button').withText('Send message');

   }
}


export default new HomePage();
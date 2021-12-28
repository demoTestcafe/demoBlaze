import { ClientFunction} from "testcafe";
import homePage from '../pages/HomePage';
import signUpPage from '../pages/SignUpPage';
import categoriesPage from '../pages/CategoriesPage';
import productPage from '../pages/ProductPage';
import cartPage from '../pages/CartPage';

const URL = 'https://www.demoblaze.com/';
const getURL = ClientFunction(() => window.location.href);
const dataSet = require('../data/data.json');

var randomNumber = Math.floor(Math.random()*10000);
var userName = 'Pablo'+randomNumber;

fixture ("Sign Up Fixture")
      .page(URL);

test('Assert Home Page Test', async t => {
    await t 
       .expect(getURL()).eql(URL)
       .takeScreenshot()
       .expect(homePage.subtitleHeader.exists).ok();
});  

dataSet.forEach(data => {
test('Place Order test', async t => {
    await t 
    .maximizeWindow()
    .click(homePage.signUpLink)
    .setNativeDialogHandler(() => true)
    .expect(signUpPage.subtitleSignUp.exists).ok()
    .typeText(signUpPage.userName, data.username+randomNumber)
    .typeText(signUpPage.password, data.password )
    .takeScreenshot()
    .click(signUpPage.signUpBtn)
    .expect(homePage.welcomeLink.exists).ok()
    //Select Product Phones test
    .click(categoriesPage.laptopsCategories)
    .click(categoriesPage.sonyVaio)
    .wait(1000)
    .takeScreenshot()
    //Add to Cart test
    .click(productPage.addToCartBtn)
    .setNativeDialogHandler(() => true)
    .pressKey("enter")
    //Place Order test
    .click(homePage.cartLink)
    .wait(2000)
    .click(cartPage.placeOrderBtn)
    .setNativeDialogHandler(() => true)
    .typeText(cartPage.name, data.name)
    .typeText(cartPage.country, data.country)
    .typeText(cartPage.city, data.city)
    .typeText(cartPage.card, data.card)
    .typeText(cartPage.month, data.month)
    .typeText(cartPage.year, data.year)
    .click(cartPage.purchaceBtn)
    .expect(cartPage.messageSuccessful.exists).ok()
    .takeScreenshot()
    .click(cartPage.OkBtn);
})
});




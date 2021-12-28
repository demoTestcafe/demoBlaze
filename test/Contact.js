import { ClientFunction} from "testcafe";
import homePage from '../pages/HomePage';

const dataContactSet = require('../data/contactData.json');
const URL = 'https://www.demoblaze.com/';
const getURL = ClientFunction(() => window.location.href);

fixture ("Contact Fixture")
      .page(URL);


test('Assert Home Page Test', async t => {
        await t 
           .expect(getURL()).eql(URL)
           .takeScreenshot()
           .expect(homePage.subtitleHeader.exists).ok();
});


dataContactSet.forEach(data => {
test('Send Message Test', async t =>{
    await t
      .maximizeWindow()
      .click(homePage.contactLink)
      .setNativeDialogHandler(() => true)
      .typeText(homePage.contactEmailTxt, data.email)
      .typeText(homePage.contactNameTxt, data.name)
      .typeText(homePage.messageTxt, data.message)
      .click(homePage.sendMessageBtn);      
})
})



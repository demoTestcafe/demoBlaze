import { Selector, t} from "testcafe";


class SignUpPage{
   constructor(){
       this.subtitleSignUp = Selector('h5').withText('Sign up');
       this.userName = Selector('#sign-username');
       this.password = Selector('#sign-password');
       this.signUpBtn = Selector('button').withText('Sign up');
   }

}

export default new SignUpPage();
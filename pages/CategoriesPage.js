import { Selector, t } from "testcafe";

class CategoriesPage{
    constructor(){
        this.phoneCategories = Selector('a').withText('Phones');
        this.laptopsCategories = Selector('a').withText('Laptops');
        this.monitorsCategories = Selector('a').withText('Monitors');
        this.samsungGalaxyS6 = Selector('a').withText('Samsung galaxy s6');
        this.sonyVaio = Selector('a').withText('Sony vaio i5');

    }
}

export default new CategoriesPage();
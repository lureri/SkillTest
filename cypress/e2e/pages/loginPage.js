import {faker} from "@faker-js/faker";

class loginPage{

    //Page objects
    static nameInput = `.//input[@placeholder="Name"]`;
    static emailInput = `.//div[h2[contains(text(),"New User Signup!")]]//input[@placeholder="Email Address"]`;
    static signupBtn = './/button[contains(text(),"Signup")]';
    static loginBtn = './/button[contains(text(),"Login")]';

    // user info
    static firstName = faker.person.firstName();
    static lastName = faker.person.lastName();
    static email = faker.internet.email();


    /**
     * @name proceedToSignup
     * @param firstName
     * @param lastName
     * @param email
     *@description fill the name and email and send the user to signup page
     *@author Luis Rivera
     */
    static proceedToSignup(firstName, lastName, email){

        cy.xpath(this.nameInput).type(`${firstName} ${lastName}`);
        cy.xpath(this.emailInput).type(email);
        cy.xpath(this.signupBtn).click();
    }

    /**
     * @name verifyLogout
     *@description verify that the user logout successfully
     *@author Luis Rivera
     */
    static verifyLogout(){
        cy.xpath(this.loginBtn).should('be.visible');
    }


}
export default loginPage;
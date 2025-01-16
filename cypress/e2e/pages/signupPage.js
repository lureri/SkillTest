
class signupPage{

//Page objects
    static genderRadioBtn = `.//label[contains(.,"Mr.")]//input`;
    static passwordInput = `.//input[@name="password"]`;
    static daySelect = './/select[option[contains(text(),"Day")]]';
    static monthSelect = './/select[option[contains(text(),"Month")]]';
    static yearSelect = './/select[option[contains(text(),"Year")]]';
    static newsletterCheckBox = './/div[label[contains(text(),"Sign up for our newsletter!")]]//input';
    static partnersCheckBox = './/div[label[contains(text(),"Receive special offers from our partners!")]]//input';
    static firstNameInput = './/p[label[contains(text(),"First name")]]//input';
    static lastNameInput = './/p[label[contains(text(),"Last name")]]//input';
    static companyNameInput = './/p[label[contains(text(),"Company")]]//input';
    static addressNameInput = './/input[@name="address1"]';
    static stateSelect = './/p[label[contains(text(),"State")]]//input';
    static citySelect = './/p[label[contains(text(),"City")]]//input';
    static zipcodeSelect = './/p[label[contains(text(),"Zipcode")]]//input';
    static mobileNumberSelect = './/p[label[contains(text(),"Mobile Number")]]//input';
    static createAccountBtn = './/button[contains(text(),"Create Account")]';
    static createAccountInfo = './/b[text()="Account Created!"]';
    static continueBtn = './/a[text()="Continue"]'


    /**
     * @name enterAccountInfo
     * @param password
     * @param day
     * @param month
     * @param year
     *@description fill the credircard form, confirm and pay the order and send the user to home page
     *@author Luis Rivera
     */
    static enterAccountInfo(password, day, month, year) {
        cy.xpath(this.genderRadioBtn).check();
        cy.xpath(this.passwordInput).type(password);
        cy.xpath(this.daySelect).select(day);
        cy.xpath(this.monthSelect).select(month);
        cy.xpath(this.yearSelect).select(year);
        cy.xpath(this.newsletterCheckBox).check();
        cy.xpath(this.partnersCheckBox).check();

    }

    /**
     * @name enterAddressInfo
     * @param firstName
     * @param lastName
     * @param companyName
     * @param address
     * @param state
     * @param city
     * @param zipCode
     * @param phoneNumber
     *@description fill the credircard form, confirm and pay the order and send the user to home page
     *@author Luis Rivera
     */
    static enterAddressInfo(firstName, lastName, companyName, address, state, city, zipCode, phoneNumber){
        cy.xpath(this.firstNameInput).type(firstName);
        cy.xpath(this.lastNameInput).type(lastName);
        cy.xpath(this.companyNameInput).type(companyName);
        cy.xpath(this.addressNameInput).type(address);
        cy.xpath(this.stateSelect).type(state);
        cy.xpath(this.citySelect).type(city);
        cy.xpath(this.zipcodeSelect).type(zipCode);
        cy.xpath(this.mobileNumberSelect).type(phoneNumber);


    }

    /**
     * @name createAccount
     *@description create the account and send the user to the home page
     *@author Luis Rivera
     */
    static createAccount(){
        cy.xpath(this.createAccountBtn).click();
        cy.xpath(this.createAccountInfo).should('be.visible');
        cy.xpath(this.continueBtn).click();
    }


}
export default signupPage;
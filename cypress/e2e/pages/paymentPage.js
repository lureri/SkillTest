class paymentPage{

    //Page objects
    static nameCardInput = 'input[name="name_on_card"]';
    static cardInput = './/div[label[text()="Card Number"]]/input';
    static cvcInput = './/div[label[text()="CVC"]]/input';
    static expirationMonthInput = './/div[label[text()="Expiration"]]/input';
    static expirationYearInput = './/input[@placeholder="YYYY"]';
    static confirmOrderBtn = './/button[text()="Pay and Confirm Order"]';
    static confirmOrderInfo = './/b[text()="Order Placed!"]'
    static continueBtn = './/a[text()="Continue"]'


    /**
     * @name payOrder
     * @param creditcardHolder
     * @param cardNumber
     * @param cvv
     * @param month
     * @param year
     *@description fill the credircard form, confirm and pay the order and send the user to home page
     *@author Luis Rivera
     */
    static payOrder(creditcardHolder, cardNumber, cvv, month, year){

        cy.get(this.nameCardInput).type(creditcardHolder,{ force: true });
        cy.xpath(this.cardInput).type(cardNumber,{ force: true });
        cy.xpath(this.cvcInput).type(cvv, { force: true });
        cy.xpath(this.expirationMonthInput).type(month, { force: true });
        cy.xpath(this.expirationYearInput).type(year, { force: true });
        cy.xpath(this.confirmOrderBtn).click();
        cy.xpath(this.confirmOrderInfo).should('be.visible');
        cy.xpath(this.continueBtn).click();
    }



}
export default paymentPage;

class cartPage{

    //Page objects
    static checkoutBtn = `.//a[contains(text(),"Checkout")]`;
    static checkoutInfo = './/h4[text()="Checkout"]';
    static registerLoginLink = './/a[u[contains(text(),"Register / Login")]]';
    static proceedCheckoutBtn = './/a[contains(text(),"Proceed To Checkout")]';
    static messageTextArea = './/div[label[contains(text(),"add a comment")]]//textarea';
    static placeOrderBtn = './/a[contains(text(),"Place Order")]';


    /**
     * @name proceedToCheckout
     *@description perform the checkout and send the user to the login page
     *@author Luis Rivera
     */
    static proceedToCheckout(){

        cy.xpath(this.checkoutBtn).click();
        cy.xpath(this.checkoutInfo).should('be.visible');
        cy.xpath(this.registerLoginLink).click();
    }

    /**
     * @name confirmOrder
     * @param productDescription
     *@description perform the checkout, confirm the order and send the user to payment page
     *@author Luis Rivera
     */
    static confirmOrder(productDescription){
        cy.xpath(this.proceedCheckoutBtn).click();
        cy.xpath(this.messageTextArea).type(productDescription);
        cy.xpath(this.placeOrderBtn).click();
    }

}
export default cartPage;
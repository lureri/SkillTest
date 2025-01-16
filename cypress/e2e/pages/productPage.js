class productPage{


//Page objects
    static productViewBtn = `.//a[contains(text(),"View Product")]`;
    static addToCartBtn = `.//span[label[contains(.,"Quantity")]]//button[@type="button"][contains(.,"Add to cart")]`;
    static productQuantityInput= `.//span[label[contains(.,"Quantity")]]//input[@name="quantity"]`;
    static addedInfo = './/h4[text()="Added!"]';
    static viewCartLink = './/a[u[contains(text(),"View Cart")]]';

    /**
     * @name selectProduct
     * @param productIndex
     * @param productQuantity
     *@description select the product, set the product quantity and continue to cart
     *@author Luis Rivera
     */
    static selectProduct(productIndex, productQuantity){

        cy.xpath(this.productViewBtn).eq(productIndex).click();
        cy.xpath(this.productQuantityInput).clear().type(productQuantity);
        cy.xpath(this.addToCartBtn).click();
        cy.xpath(this.addedInfo).should('be.visible');
        cy.xpath(this.viewCartLink).click();
    }


}
export default productPage;
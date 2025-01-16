class homePage{

//Page objects
    static productsPageLink = './/a[contains(text(),"Products")]';
    static cartPageLink = './/a[contains(text(),"Cart")]';
    static logoutLink = './/a[contains(text(),"Logout")]';

    /**
     * @name navigateToProductsPage
     *@description send the user to products page
     *@author Luis Rivera
     */
    static navigateToProductsPage(){

        cy.xpath(this.productsPageLink).click()
    }

    /**
     * @name navigateToCartPage
     *@description send the user to cart page
     *@author Luis Rivera
     */
    static navigateToCartPage(){

        cy.xpath(this.cartPageLink).click()
    }

    /**
     * @name logout
     *@description log out the user
     *@author Luis Rivera
     */
    static logout(){

        cy.xpath(this.logoutLink).click()
    }

}
export default homePage;
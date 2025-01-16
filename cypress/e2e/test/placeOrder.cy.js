import {createRandom} from "../../support/commands";
import SignupPage from "../pages/signupPage";
const { faker } = require('@faker-js/faker');
const homePage = require("../pages/homePage");
const productPage = require("../pages/productPage");
const cartPage = require("../pages/cartPage");
const loginPage = require("../pages/loginPage");
const signupPage = require("../pages/signupPage");
const paymentPage = require("../pages/paymentPage");


describe('Automation Exercise', () => {
  it('Place an order on Automation Exercise', () => {

    // verifies that a user can successfully order clothes in the platform
    homePage.navigateToProductsPage();
    productPage.selectProduct(3, createRandom(20));
    cartPage.proceedToCheckout();
    loginPage.proceedToSignup(loginPage.firstName, loginPage.lastName, loginPage.email);
    signupPage.enterAccountInfo(faker.internet.password(), createRandom(28), faker.date.month(), faker.number.int({min: 1900, max: 2021}).toString())
    SignupPage.enterAddressInfo(loginPage.firstName, loginPage.lastName, faker.company.name(), faker.location.street(), faker.location.state(), faker.location.city(), faker.location.zipCode(), faker.phone.number())
    signupPage.createAccount();
    homePage.navigateToCartPage();
    cartPage.confirmOrder(faker.commerce.productDescription());
    paymentPage.payOrder(faker.person.fullName(), faker.finance.creditCardNumber(), faker.finance.creditCardCVV(), createRandom(12), faker.number.int({min:2025, max:2034}));
    homePage.logout();
    loginPage.verifyLogout()

  })
})
import { faker } from "@faker-js/faker";
import { dashboard } from "./constant.cy";
// const email = faker.internet.email()
const rr = +`${faker.phone.number(10)}`;
console.log("444444444444444444444444", typeof rr);
// faker.person.lastName()
// faker.person.firstName() // 'Antwan'

describe("MySuit", () => {
  beforeEach(() => {
    cy.wait(6000);
    cy.visit("https://beta.albertisa.co/signin");
  });

  // it('Check that if you find WikiVoyage on the page, then click on it and validate (Go to If)', () => {
  //     cy.title().should('eq', 'Wikipedia')
  //     cy.get('body').then((body) => {
  //         if (body.find('[data-jsl10n="wikivoyage.name"]').length > 0) {
  //             cy.get('[data-jsl10n="wikivoyage.name"]').click()
  //         }
  //         else {
  //             cy.get('[data-jsl10n="wiktionary.name"]').click()
  //         }
  //     })
  //     cy.title().should('eq', 'Wikivoyage')
  // })
  it("NavigationTest", () => {
    // cy.screenshot("homepage");

    cy.get("#email").type("AmaniGusikowski@yopmail.com");

    cy.get("#password").type("Intel@123");

    cy.get(".checkmark").click();

    cy.get(".btn-primary").click();

    cy.wait(30000);
    cy.xpath("//span[normalize-space()='My Profile']").click();
    cy.get("div.ng-star-inserted > .ml-auto").click();

    cy.get(
      ".flex-col > .ant-select > .ant-select-selector > .ant-select-selection-item"
    ).click();
    cy.get(
      '[title="Samoa Standard Time"] > .ant-select-item-option-content'
    ).click();
    cy.get(".angular-editor-placeholder").type("Hello World");
    cy.get(".ant-switch").click();
    cy.get(".items-center > .ant-btn > .ng-star-inserted").click();
    cy.xpath("//span[normalize-space()='Save']").click();

    cy.get(
      ":nth-child(2) > .text-base > .ant-menu-submenu-title > span.ng-star-inserted"
    ).click();
    cy.get(".aisa-button-container").click();

    cy.xpath("//input[@id='companyName']").clear();
    cy.xpath("//input[@id='companyName']").type("Rids Test");
    cy.xpath("//input[@id='address']").clear();
    cy.xpath("//input[@id='address']").type("Noida");
    cy.get(":nth-child(4) > .ant-select > .ant-select-selector").click();
    cy.get('[title="Albania"] > .ant-select-item-option-content').click();
    cy.get("#phoneNumber").clear();
    cy.get("#phoneNumber").type(`2300160`);
    cy.get(
      ":nth-child(6) > .ant-select > .ant-select-selector > .ant-select-selection-item"
    ).click();
    cy.get('[title="Elbasan"] > .ant-select-item-option-content').click();

    //cy.xpath("//input[@id='website']").type(www.eagle.com)
    cy.xpath("//input[@id='city']").clear();
    cy.xpath("//input[@id='city']").type("Gong");
    cy.get(
      ":nth-child(1) > .ant-select-show-search > .ant-select-selector"
    ).click();

    cy.get(
      ".ant-select-item-option-active > .ant-select-item-option-content"
    ).click();
    cy.get(".ml-1").type("11000");
    cy.get(".ml-1").clear();

    cy.get(
      '[class-name="btn-primary flex mr-4"] > .aisa-button-container'
    ).click();
    // cy.get('[title="Contacts"] > .justify-between > .flex > span > .pt-2'

    cy.get(
      '[title="Contacts"] > .justify-between > .flex > span > .pt-2'
    ).click();
    cy.xpath(
      "//div[@class='aisa-loader-container ng-tns-c437-0 ng-trigger ng-trigger-default ng-star-inserted']"
    ).click();
    cy.xpath("//em[@class='ph-plus mt-0.5 pr-1']").click();

    cy.xpath("//input[@placeholder='Enter the first name']").type(
      `${faker.person.firstName()}`
    );

    cy.xpath("//input[@placeholder='Enter the last name']").type(
      `${faker.person.lastName()}`
    );
    var fakeNames = faker.internet.userName();
    //cy.get('#edit-name').type(fakeNames)
    cy.xpath("//input[@placeholder='Enter email address']").type(
      `${faker.person.firstName()}${faker.person.lastName()}@yopmail.com`
    );

    cy.xpath("//input[@placeholder='+1']").type("91");

    cy.xpath("//input[@placeholder='Enter phone number']").type('1347567820');
    cy.get(":nth-child(2) > .label").click();

    cy.xpath("//button[@class='btn-primary']").click();

cy.xpath("//tr[@id='target22']//span[@class='flex ng-star-inserted']").click();

    cy.get('.ph-dots-three-fill').click();
});
    
    });
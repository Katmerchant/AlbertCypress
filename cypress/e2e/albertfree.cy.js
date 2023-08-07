import { faker } from "@faker-js/faker";
import { dashboard } from "./constant.cy";
// const email = faker.internet.email()
const rr = +`${faker.phone.number(10)}`;
console.log('444444444444444444444444',typeof(rr));
// faker.person.lastName()
// faker.person.firstName() // 'Antwan'
it("NavigationTest", () => {
  cy.visit("https://beta.albertisa.co/signin");
  //cy.screenshot("homepage");

  cy.get("#email").type("freesuperadmin123@yopmail.com");

  cy.get("#password").type("Intel@123");
  cy.get(".checkmark").click();
  cy.get(".btn-primary").click(dashboard);

  cy.wait(30000);
  cy.xpath("//span[normalize-space()='Team Management']").click();
  cy.xpath("//span[normalize-space()='Add User']").click();
  cy.xpath("//input[@placeholder='Enter a first name. e.g. John']").type(
    `${faker.person.firstName()}`);
  cy.xpath("//input[@placeholder='Enter a last name. e.g. Gold']").type(
    `${faker.person.lastName()}`);

  cy.xpath("//input[@placeholder='Email. e.g. john@email.com']").type(`${faker.person.firstName()}${faker.person.lastName()}@yopmail.com`);

cy.get('[class-name="btn-primary mr-3"] > .aisa-button-container').click()

cy.wait(30000);

cy.get('[title="Contacts"] > .justify-between > .flex > span > .pt-2').click();

    cy.xpath("//button[normalize-space()='Add Contact']").click();

    cy.xpath("//input[@placeholder='Enter the first name']").type(
      `${faker.person.firstName()}`);

    cy.xpath("//input[@placeholder='Enter the last name']").type(
      `${faker.person.lastName()}`);
    // var fakeNames = faker.internet.userName()
    // cy.get('#edit-name').type(fakeNames)
    cy.xpath("//input[@placeholder='Enter email address']").type(`${faker.person.firstName()}${faker.person.lastName()}@yopmail.com`);

  //cy.xpath("//input[@placeholder='+1']").type("91");

  cy.xpath("//input[@placeholder='Enter phone number']").type("9978453531");

  cy.xpath("//button[@class='btn-primary']").click();

  cy.wait(30000);
  cy.get('#target3 > .ant-table-cell-fix-right > .flex > .ph-trash').click()

  
});

  

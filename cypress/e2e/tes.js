import { faker } from "@faker-js/faker";
const name = `${faker.person.firstName()}${faker.person.lastName()}`
    const email = `${name}@yopmail.com`
    const password = `@${faker.internet.password()}`;
    console.log('email',email)
describe("MySuit", () => {
  // beforeEach(() => {
  //     cy.visit("https://beta.albertisa.co/signin");
  //   });

  it("NavigationTest", () => {
    
    cy.visit("https://beta.albertisa.co/signin");
    // https://beta.albertisa.co/register
    //cy.screenshot("homepage");

    //cy.viewport(1280, 720)

    cy.wait(500);

    cy.get(".text-blue-500").click();

    cy.get("#companyName").type(`${name}`);

    cy.get("#companyEmail").type(`${email}`);

    cy.get("#companyPassword").type(`${password}`);

    cy.get("#confirmPassword").type(`${password}`);

    cy.get('.checkmark').click();

    cy.xpath("//button[@class='btn-primary w-full text-lg']").click()
    

    // cy.get(".text-blue-500").click();
    // cy.wait(50000);

    // cy.visit("https://yopmail.com/")

    // cy.get('.ycptinput').type(`${email}`)
    
    // cy.get("#email").type(`${faker.person.firstName()}${faker.person.lastName()}@yopmail.com`);
    // cy.get("#password").type(`@${faker.internet.password()}`);

    // cy.get(".checkmark").click();

    // cy.get(".btn-primary").click();

    // cy.wait(7000);

    // cy.xpath("//body//aisa-root//div[3]//div[3]//span[1]//button[1]").click();

    // cy.get(":nth-child(1) > .rounded").type("6200000000000005");

    // cy.get("input[placeholder='Type Credit Card CVV of the card owner']").type("700");
    
    // cy.get("input[placeholder='MM']").type("12");

    // cy.get(" input[placeholder='YYYY']").type("2026");

    // cy.get(".grid > :nth-child(4) > .rounded").type("Ritual");

    // cy.get(":nth-child(5) > .rounded").type("Test");

    // cy.get(":nth-child(6) > .rounded").type("test 123");

    // cy.get(":nth-child(7) > .rounded").type("ABC Company");

    // cy.get(":nth-child(8) > .rounded").type("Delhi");

    // cy.xpath("//input[@placeholder='Type code']").type("56901");

    // cy.get(".ant-select-selection-search-input").click();

    // cy.get('[title="Australia"] > .ant-select-item-option-content').click();

    // cy.xpath("//button[@class='btn-primary ng-star-inserted']").click();

    // cy.get(":nth-child(1) > .mt-10").click();

    // cy.get(".mb-4 > .justify-between > .btn-primary").click();
    
    // it("NavigationTest", () => {
    // cy.visit("https://yopmail.com/")
    // })
    it('check that if you find Yopmail on the page,then click on it and validate (Go to If)',()=>{
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        cy.title().should('eq','email')
    cy.get('body').then((body) => {
        if (body.find('[data-jsl10n="yopmail.name"]').length > 0) {
            cy.get('[data-jsl10n="yopmail.name"]').click()
        }
        else {
            cy.get('[data-jsl10n="wiktionary.name"]').click()
        }
    })
    cy.title().should('eq', 'Wikivoyage')
})



    })
})

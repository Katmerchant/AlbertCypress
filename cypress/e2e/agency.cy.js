describe("MySuit", () => {
  it("NavigationTest", () => {
    cy.visit("https://beta.albertisa.co/signin");

    cy.screenshot("homepage");

    //cy.viewport(1280, 720);

    cy.get("#email").type("agencyalbert@yopmail.com");

    cy.get("#password").type("Intel@123");

    cy.get(".checkmark").click();

    cy.get(".btn-primary").click();

    cy.wait(90000);

    cy.get(
      ":nth-child(11) > .text-base > .ant-menu-submenu-title > span.ng-star-inserted"
    ).click();

    cy.get(".btn-primary-outline").click();

    cy.xpath("//input[@placeholder='Enter business name']").type("Ton");

    cy.xpath("//input[@placeholder='Enter business email']").type(
      "corpe@yopmail.com"
    );

    cy.get(".ant-dropdown-trigger").click();

    cy.get(":nth-child(98)").click();

    cy.xpath("//input[@placeholder='Enter phone number']").type("9712642024");

    cy.xpath("//input[@placeholder='Enter the website']").type("www.corpe.c");

    cy.xpath("//input[@placeholder='Enter the address']").type("Delhi");

    cy.get(
      ":nth-child(19) > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input"
    ).click();

    cy.get(
      ".ant-select-item-option-active > .ant-select-item-option-content"
    ).click();

    cy.xpath("//input[@placeholder='Enter your city']").type("Chandigarh");

    cy.xpath("//input[@placeholder='Enter ZIP']").type("110002");

    cy.xpath("//button[@class='btn-primary ng-star-inserted']").click();

    cy.wait(90000);

    cy.xpath("//span[normalize-space()='Team Management']").click();

    cy.get(".btn-primary > span").click();

    cy.xpath("//input[@placeholder='Enter a first name. e.g. John']").type(
      "Albert"
    );

    cy.xpath("//input[@placeholder='Enter a last name. e.g. Gold']").type(
      "Framework"
    );

    cy.xpath("//input[@placeholder='Email. e.g. john@email.com']").type(
      "fram@yopmail.com"
    );

    cy.get(
      ".role > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input"
    ).click();

    cy.get('[title="Account"] > .ant-select-item-option-content').click();

    cy.xpath(
      "//button[@class='aisa-button-container btn-default btn-primary mr-3']"
    ).click();
  });
});

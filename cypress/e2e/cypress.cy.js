import {
  values,
  registerNewAccountPayload,
  phoneNumber,
  website,
  address,
  lastName,
  firstName,
  newEmailID,
  countryCode,
  verifyURL,
  login,
  dashboard,
  visitPage,
  apiCalls,
 
} from "./constant.cy";
describe("MySuit", () => {
  // beforeEach(() => {
  // cy.wait(30000);
  //cy.visit("https://beta.albertisa.co");
  //cy.clearAllCookies()
  //});

  it("Register NavigationTest", () => {
    console.log("4444444444444444444444444444444444444444", visitPage);
    cy.visit(visitPage);
    console.log("1111111111111", values);
    //cy.screenshot("homepage");
    cy.viewport(1280, 720);
    cy.get(".text-blue-500").click();
    cy.get("#companyName").type(`${values.name}`);
    cy.get("#companyEmail").type(`${values.email}`);
    cy.get("#companyPassword").type(`${values.password}`);
    cy.get("#confirmPassword").type(`${values.password}`);
    cy.get(".checkmark").click();
    cy.xpath("//button[@class='btn-primary w-full text-lg']").click();
    cy.wait(8000);
    console.log(registerNewAccountPayload);
    // let iop = loginBodyMassage("6fefbca5-00ad-4060-b3f6-c394f275fe2a","b325800f-e18f-47a7-9de1-00047293643a");
    // console.log(iop);
  });

  it("Verify Account Created", () => {
    // cy.visit(verifyURL);
    cy.wait(2000);
    cy.visit(
      `https://beta.albertisa.co/verify-email/${registerNewAccountPayload}`
    );
    // cy.wait(4000);
  });

  it("Login Account", () => {
    //  cy.wait(30000);
    cy.visit("https://beta.albertisa.co/signin");
    cy.wait(8000);
    cy.get("#email").type(`${values.email}`);
    cy.get("#password").type(`${values.password}`);
    cy.get(".checkmark").click();
    cy.get(".btn-primary").click();
    cy.wait(3000);

    cy.get(
      ":nth-child(1) > .pt-4 > span.ng-star-inserted > .btn-primary"
    ).click();

    cy.get(".mt-10").click();
    cy.xpath("//input[@id='companyName']").type(`${values.name}`);
    cy.xpath(
      "//nz-select-item[@title='India Standard Time - Kolkata']"
    ).click();
    cy.xpath(
      "//div[normalize-space()='India Standard Time - Kolkata']"
    ).click();
    cy.get(".btn-primary").click();

    cy.get("#phoneNumber").type(`${phoneNumber}`);
    
    cy.get("#website").type(`${website}`);
    cy.get("#address").type(`${address}`);

    cy.get(
      ":nth-child(8) > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input"
    ).click();
    cy.get('[title="Algeria"] > .ant-select-item-option-content').click();

    cy.get(
      ":nth-child(10) > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input"
    ).click();
    cy.get(
      ".ant-select-item-option-active > .ant-select-item-option-content"
    ).click();

    cy.get(
      ":nth-child(12) > .ant-select > .ant-select-selector > .ant-select-selection-search > .ant-select-selection-search-input"
    ).click();
    cy.get('[title="Awlaf"] > .ant-select-item-option-content').click();

    cy.get(".ml-1").type("110005");
    //console.log(cy.request(Authorization));
    //cy.xpath("//button[@class='btn-primary']").click();
    cy.wait(3000);
    cy.get('.btn-primary').click()

  //   cy.get('.btn-primary').click()
  //   cy.wait(5000);
  //       cy.request(apiCalls.POST, loginDetails, { name: 'Jane' }).then(
  //       (response) => {
  //       // response.body is automatically serialized into JSON
  //       expect(response.body).to.have.property('name', 'Jane') // true
  //     }
  //   )
  // });

  // it("Go to Dashboard",()=>{
  //   cy.visit(dashboard);
  //   cy.wait(15000);
  // })

  // it("Free Team management", () => {
  // cy.wait(30000);
  // cy.xpath("//span[normalize-space()='Team Management']").click();
  // cy.xpath("//span[normalize-space()='Add User']").click();
  //   cy.xpath("//input[@placeholder='Enter a first name. e.g. John']").type(
  //   `${firstName}`
  //   );
  //   cy.xpath("//input[@placeholder='Enter a last name. e.g. Gold']").type(
  //     `${lastName}`
  //   );
  //   cy.xpath("//input[@placeholder='Email. e.g. john@email.com']").type(
  //     `${newEmailID}`
  //   );
  //   cy.get('[class-name="btn-primary mr-3"] > .aisa-button-container').click();
  //   cy.wait(8000);
  // });

  //   it("Add Contacts", () => {
  //     cy.wait (3000);
  //     cy.visit("https://beta.albertisa.co/contacts");
  //     cy.xpath("//em[@class='pt-2 text-lg ph-address-book-fill text-blue-400']").click()
  //     cy.xpath("//button[normalize-space()='Add Contact']").click()

  // cy.xpath("//input[@placeholder='Enter the first name']").type(
  //       `${firstName}`
  //     );

  //     cy.xpath("//input[@placeholder='Enter the last name']").type(`${lastName}`);
  //     cy.xpath("//input[@placeholder='Enter email address']").type(
  //       `${newEmailID}`
  //     );
  //     cy.xpath("//input[@placeholder='+1']").type(`${countryCode}`);
  //     cy.xpath("//input[@placeholder='Enter phone number']").type(
  //       `${phoneNumber}`
  //     );
  //     cy.xpath("//button[@class='btn-primary']").click();
  //     cy.wait(8000);
  //     cy.get("#target3 > .ant-table-cell-fix-right > .flex > .ph-trash").click();
  //   });
});
})


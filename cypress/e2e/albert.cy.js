import { faker } from "@faker-js/faker";
// const email = faker.internet.email()
const rr = faker.phone.number(10);
// faker.person.lastName()
// faker.person.firstName() // 'Antwan'
console.log(`email: `, rr);

describe("MySuit", () => {
  it("Scenario 1", function () {
    // URL launch

    cy.visit("https://beta.albertisa.co/signin"); 
    //handling prompt alert

    cy.window().then(function (p) {
      //stubbing prompt window

    cy.stub(p, "prompt").returns("Albert CRM");
      //click on Click for JS prompt button

    cy.get(":nth-child(3) > button").click();
      // verify application message on clicking on OK
    cy.get("#result").contains("You entered: Albert");

    });

  });
});

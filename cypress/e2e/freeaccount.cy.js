import { faker } from "@faker-js/faker";

// const email = faker.internet.email()
const phoneNumber = faker.phone.number("91########");
console.log("444444444444444444444444", phoneNumber);
// faker.person.lastName()
// `${faker.person.firstName()}` // 'Antwan'
// faker.phone.number('+48 91 ### ## ##')
describe("MySuit", () => {
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
    cy.visit("https://beta.albertisa.co/signin");
    //  cy.screenshot("homepage");

    cy.get("#email").type("Yahoo2j@yopmail.com");

    cy.get("#password").type("RIDNIK#1234nrk");

    cy.get(".checkmark").click();

    cy.get(".btn-primary").click();

    cy.wait(30000);

    cy.xpath("//span[normalize-space()='My Profile']").click({ force: true });
    cy.get("div.ng-star-inserted > .ml-auto").click({force:true});

    cy.get(".flex-col > .ant-select > .ant-select-selector").click({force:true});

    cy.get('.ant-select-item-option-selected > .ant-select-item-option-content').click({force:true})
    // cy.xpath("//div[@class='angular-editor-textarea']").clear();

    // cy.xpath("//div[@class='angular-editor-textarea']").type( "Welcome to Albert!");

    cy.xpath("//button[normalize-space()='Save Signature']").click();

    cy.xpath("//span[normalize-space()='Save Changes']").click();

    cy.xpath("//span[normalize-space()='Save']").click();

    cy.get(':nth-child(1) > .grid > :nth-child(1) > .ant-select > .ant-select-selector').click({force:true})
    cy.get('[title="09:00 am"] > .ant-select-item-option-content').click({force:true})

    cy.get(':nth-child(1) > .grid > div.ng-star-inserted > .ant-select > .ant-select-selector').click({force:true})
    cy.get('[title="10:00 pm"] > .ant-select-item-option-content').click({force:true})

    cy.get(':nth-child(1) > .weekday-card__header > .color-blue').click({force:true})

    cy.get('.items-center > .ant-btn').click({force:true})

    cy.xpath("//span[normalize-space()='Save']").click({force:true})

    cy.get(":nth-child(2) > .text-base > .ant-menu-submenu-title > span.ng-star-inserted").click({force:true});
    cy.get(".aisa-button-container").click();

    cy.xpath("//input[@id='companyName']").clear();
    cy.xpath("//input[@id='companyName']").type("Free Albert Account");
    cy.xpath("//input[@id='address']").clear();
    cy.xpath("//input[@id='address']").type("Delhi");
    cy.get(":nth-child(4) > .ant-select > .ant-select-selector").click();

    cy.get('[title="Albania"] > .ant-select-item-option-content').click({force: true,});
    cy.get("#phoneNumber").clear();
    cy.get("#phoneNumber").type(`2300160`);

    cy.get(':nth-child(6) > .ant-select > .ant-select-selector').click({force:true})

    cy.xpath("//div[contains(text(),'Delvine')]").click({force:true})

    cy.xpath("//input[@id='website']").clear();
    cy.xpath("//input[@id='website']").type("www.test.com");
    cy.xpath("//input[@id='city']").clear();
    cy.xpath("//input[@id='city']").type("Delhi");
    cy.get(":nth-child(1) > .ant-select-show-search > .ant-select-selector").click({force:true});

    cy.get(".ant-select-item-option-active > .ant-select-item-option-content").click({force:true});
    cy.get(".ml-1").clear();
    cy.get(".ml-1").type("11000");
    

    cy.get('[class-name="btn-primary flex mr-4"] > .aisa-button-container').click({force:true});
    // cy.get('[title="Contacts"] > .justify-between > .flex > span > .pt-2'

    cy.get('[title="Contacts"] > .justify-between > .flex > span > .pt-2').click({ force: true });

    cy.get('[nztooltiptitle="Add Contact"]').click({ force: true });

    cy.xpath("//input[@placeholder='Enter the first name']").type(`${faker.person.firstName()}`);

    cy.xpath("//input[@placeholder='Enter the last name']").type(`${faker.person.lastName()}`);
    var fakeNames = faker.internet.userName();
    //cy.get('#edit-name').type(fakeNames)
    cy.xpath("//input[@placeholder='Enter email address']").type( `${faker.person.firstName()}${faker.person.lastName()}@yopmail.com`);

    cy.xpath("//input[@placeholder='+1']").type("91");

    cy.get(".overflow-auto > :nth-child(4)").click();

    cy.xpath("//input[@placeholder='Enter phone number']").type(faker.phone.number("91########"));
    cy.get(":nth-child(2) > .label").click();

    cy.get(":nth-child(2) > .ml-1").type("Toyota");
    cy.xpath("//input[@placeholder='Enter the Street address']").type("Delhi");

    cy.xpath("//input[@placeholder='Enter the City Name']").type("Delhi");

    cy.get(":nth-child(11) > .ant-select > .ant-select-selector").click();

    cy.xpath("//div[normalize-space()='Albania']").click({force:true});

    cy.get(":nth-child(14) > .ml-1").type("Uttar Pradesh");

    cy.xpath("//input[@placeholder='Enter the Zipcode / Postal code']").type(
      "11002"
    );

    cy.xpath("//input[@placeholder='Enter the contact website']").type( "www.website.com"
    );


    cy.xpath("//button[@class='btn-primary']").click();

    cy.wait(3000);

    cy.visit("https://beta.albertisa.co/lead/activity-log/64f9f702e88437001b2585f8")

    cy.get('.flex > .mr-2').click({force:true})

    cy.get('.absolute > div.ng-tns-c533-17 > :nth-child(1)').click({force:true});

    cy.xpath("//input[@placeholder='Subject']").type("Albert Message",{force:true});

    cy.xpath("//div[@class='angular-editor-textarea']").type("Hello to Albert!",{force:true});
    cy.xpath("//button[@title='Insert Emojis']").click({ force: true });

   cy.xpath("//ngx-emoji[@class='ng-star-inserted']//span[@aria-label='😊, blush']//span").click({ force: true });


    cy.get('.ph-paper-plane-tilt-fill').click({force:true})

    cy.get('.ph-file-text-fill').click({force:true})

    cy.get('.px-3 > .w-full').type('Note Important Points',{force:true})


   cy.wait(3000);

  cy.visit("https://beta.albertisa.co/settings/calendar");

    cy.get('.action__create > .ant-dropdown-trigger').click({force: true });

    cy.get(':nth-child(2) > .mr-2').click({force:true})

    cy.xpath("//input[@placeholder='Enter the name of calendar']").type(`${faker.person.firstName()}`,{ force: true });

    cy.xpath( "//textarea[@placeholder='Write down some details about calendar']").type("A Calendar is a device which describes day and date of the week");

    cy.get(".ant-select-selector").click({ force: true });

    cy.xpath("//span[normalize-space()='Add Calendar']").click({ force: true });

    cy.get(".flex-row > :nth-child(1) > .justify-center").click({force: true,});

     cy.get(".btn-primary").click();

    // cy.get('.ng-tns-c630-245.ng-tns-c632-244 > .border > .p-4').click({multiple:true})

    cy.xpath("//input[@placeholder='Type event name here']").type('Free Event')

    cy.get(':nth-child(2) > .ant-select > .ant-select-selector').click({force:true})
    cy.xpath("//div[normalize-space()='Kathryn']").click();

    cy.get('.ant-dropdown-trigger').click({force:true})
    cy.get('[style="background-color: rgb(255, 218, 225);"]').click({force:true})

    cy.get(':nth-child(4) > .ant-select > .ant-select-selector').click({force:true})
    cy.get('[title="Virtual Meeting (Web Conference)"] > .ant-select-item-option-content').click({force:true})

    cy.xpath("//input[@placeholder='Type location detail here']").type("Delhi");

    cy.xpath("//textarea[@placeholder='Write down some details invitee should know about the event']").type('Zoom Meeting Event',{force:true})

    cy.get('.justify-end > .flex').click({force:true})

    cy.get('.flex-col > .ant-select > .ant-select-selector').click({force:true})
    cy.get('[title="30mins"]').click({force:true})

    cy.get('[nzvalue="within-next"] > :nth-child(2) > :nth-child(1) > .ant-select > .ant-select-selector').click({force:true})

    cy.get('.ant-radio-wrapper-checked > :nth-child(2) > :nth-child(1) > .ant-select > .ant-select-selector').click({force:true})

    cy.get('.w-72 > .ant-select > .ant-select-selector').click({force:true})

    cy.get('[title="Next 90 days"]').click({force:true})

    cy.get('[nzvalue="custom-hours"] > .ant-radio > .ant-radio-input').click({force:true})

    cy.get(':nth-child(1) > .grid > :nth-child(1) > .ant-select > .ant-select-selector').click({force:true})
    cy.get('[title="09:30 am"]').click({force:true})

    cy.get(':nth-child(1) > .grid > div.ng-star-inserted > .ant-select > .ant-select-selector').click({force:true})
    cy.get('[title="10:30 pm"]').click({force:true})

    cy.get(':nth-child(1) > .weekday-card__header > .color-blue').click({force:true})

    cy.get('.justify-end > .flex').click({force:true})

    cy.xpath("//span[normalize-space()='Save Event']").click({force:true})

      cy.wait(3000);

    cy.visit("https://beta.albertisa.co/settings/deals");

    cy.get(".aisa-button-container").click({ force: true });

    cy.xpath("//input[@placeholder='Sales Pipeline']").type(`${faker.person.firstName()}`);

    cy.xpath("//button[normalize-space()='Save']").click({force:true});

    cy.get('.ant-collapse-item.ng-tns-c148-41 > .ant-collapse-header > .ant-collapse-extra > .flex > span.ng-star-inserted > .mr-2').click({force:true})
    
    cy.xpath("//input[@placeholder='Input here']").type('Stage Input',{force:true})

    cy.get(".active > .justify-between > .flex > span > .pt-2").click({force: true});

    cy.visit("https://beta.albertisa.co/deals/list");

    cy.get('span.ng-star-inserted > .flex').click({force:true})

    cy.xpath("//input[@id='text-field-title']").type('Free Pipeline')

    cy.get('#drop-down-contact > .ant-select-selector').click({force:true})
    cy.xpath("//span[normalize-space()='(KathrynEbert@yopmail.com)']").click({force:true})

    cy.xpath("//input[@id='text-field-company']").type('Microsoft')
    cy.get('#drop-down-deal-owner > .ant-select-selector').click({force:true})
    cy.get('[title="CRM Free  (Yahoo2j@yopmail.com)"]').click({force:true})

    cy.xpath("//input[@id='text-field-value']").type('1000')

    cy.get('#drop-down-currency > .ant-select-selector').click({force:true})
    cy.get('[title="€-EUR"] > .ant-select-item-option-content').click({force:true})

    cy.get('#drop-down-pipeline > .ant-select-selector').click({force:true})
    cy.get('[title="Arden"] > .ant-select-item-option-content').click({force:true})

    cy.get('#drop-down-pipeline-stage > .ant-select-selector').click({force:true})

    cy.get('#drop-down-priority > .ant-select-selector').click({force:true})
    cy.get('[title="Low"]').click({force:true})

    cy.get('#drop-down-status > .ant-select-selector').click({force:true})
    cy.get('[title="Won"]').click({force:true})

    cy.get('#date-time-estimated-close-date').click({force:true})
    cy.xpath("//td[@title='9/27/2023']//div[@class='ant-picker-cell-inner ng-star-inserted'][normalize-space()='27']").click({force:true})

    cy.get('.border-top > .ng-star-inserted > .btn-primary').click({force:true})

    cy.visit("https://beta.albertisa.co/workflow/listing");

    cy.get(".btn-primary").click();

    cy.get(".p-5").click();

    cy.xpath("//input[@placeholder='Type title here']").type(`${faker.person.firstName()}`);

    cy.xpath("//textarea[@placeholder='Type Description here']").type("Workflow is the series of activities that are necessary to complete a task. Each step in a workflow has a specific step before it and a specific step after it, with the exception of the first and last steps.");

    cy.get('.justify-end > .btn-primary').click({force:true});

    cy.xpath("//em[@class='pt-2 text-lg ph-note text-gray-400']").click();

   

//   cy.visit("https://beta.albertisa.co/workflow/builder/65003d5695ac8f0056835792");

//   cy.get('.px-2').click({multiple:true})

//   cy.xpath("//li[normalize-space()='Contact Created']").click({force:true})

//   cy.xpath("//input[@placeholder='Add trigger name']").type('Rids Trigger')  
//   cy.get('.flex.ng-tns-c647-21 > .w-full > .ant-select > .ant-select-selector').click({force:true})

//   cy.get('[title="Contact Tag"]').click({force:true})

//   cy.get('.flex.ng-tns-c646-23 > div.w-full > .ant-select > .ant-select-selector').click({force:true})
//   cy.get('.ant-select-item-option-active').click({force:true})

//   cy.get('.flex.ng-tns-c301-22 > .w-full > .ant-select > .ant-select-selector').click();

//   });
// })


    
 
  });
});
  
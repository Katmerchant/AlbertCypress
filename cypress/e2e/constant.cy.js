import { faker } from "@faker-js/faker";
import * as base32 from "hi-base32";

const name = `${faker.person.firstName()}${faker.person.lastName()}`;

export const values = {
  name: name,
  email: `${name}@yopmail.com`,
  password: "Intel@123",
  mailDomain: "yopmail.com",
  accountPhone:+`${faker.phone.number(10)}`
};

export const teamMangement = {
  teamManagementlastName: `${faker.person.lastName()}`,
  teamManagementfirstName: `${faker.person.firstName()}`,
  teamManagementnewEmailID: `${faker.person.firstName()}${faker.person.lastName()}@yopmail.com`,
};

export const contact = {
  contactphoneNumber: +`${faker.phone.number(10)}`,
  contactcountryCode: +`${1}`,
  contactnewEmailID: `${faker.person.firstName()}${faker.person.lastName()}@yopmail.com`,
  contactlastName: `${faker.person.lastName()}`,
  contactfirstName: `${faker.person.firstName()}`,
};

// export const values = {
//     name :"OtiliaBecker",
//     email:`OtiliaBecker@yopmail.com`,
//     password:"Intel@123",
//     mailDomain:"yopmail.com"
//     }
export const apiCalls = {
  GET: "GET",
  POST: "POST",
  DELETE: "delete",
  PUT: "put",
};

export const phoneNumber =  +`${faker.phone.number(10)}`;
export const website = `${faker.internet.url()}`;
export const address = "25F pkt2";
export const lastName = `${faker.person.lastName()}`;
export const firstName = `${faker.person.firstName()}`;
export const newEmailID = `${faker.person.firstName()}${faker.person.lastName()}@yopmail.com`;
export const registerNewAccountPayload = base32.encode(
  JSON.stringify({ email: `${name}@yopmail.com` })
);
export const verifyURL = `https://beta.albertisa.co/verify-email/${base32.encode(
  JSON.stringify({ email: `${name}@yopmail.com` })
)}`;
export const login = "https://beta.albertisa.co/signin";
export const dashboard = `https://beta.albertisa.co/dashboard`;
export const visitPage = `https://beta.albertisa.co`;
export const loginDetails =
  "https://api-user.albertisa.co/api/v1/users/company/update/details";

  

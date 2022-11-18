// const { Given, When, Then, After } = require("@cucumber/cucumber");
// const assert = require("assert/strict");
// const { By, until } = require("selenium-webdriver");

// Given("I am on the Manage Buildings page", async function () {
//     await this.load();
//     await this.driver.get("http://localhost:3000");
//     await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"root\"]/div/div[3]")));
//   });

// When('I click on the New Building button', async function () {
//   const btn = await(this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/div/button")));
//   btn.click();
// });

// Then('An Add Building pop-up should appear', async function () {
//   // Write code here that turns the phrase above into concrete actions
//   const modal = await(this.getCompanyModal());
//   assert.ok(modal);
// });

// After(async function () {
//   await this.driver.quit();
// });
// const { Given, When, Then, After} = require("@cucumber/cucumber");
// const assert = require("assert/strict");
// const { By, until, equal} = require("selenium-webdriver");

// Given('I am on the Manage Buildings Page', async function () {
//   await this.load();
//   // await this.driver.get("http://localhost:3000");
//   await this.getToBuildingsPage();
// });

// When('I click on the New Building button', async function () {
//   const parent = await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div"));
//   const nr = await (await parent.findElements(By.xpath("./child::*"))).length
//   // const ln = await(await this.driver.findElements(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div"))).length;
//   await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"root\"]/div/div[2]/h2")));
//   button = await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div["+(nr-1)+"]"))
//   //*[@id="root"]/div/div[2]/div/div[5]/div/div[1]/div
//   button.click();
// });
// //*[@id="root"]/div/div[2]/div/div[1]
// Then('An Add Building pop-up should appear', async function () {
//   // Write code here that turns the phrase above into concrete actions
//   // await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[2]/div/div[1]/div")));
//   // const popup = await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[2]/div/div[1]/div/h1")).getText();
//   // assert.equal(popup,"Add Building");
//   await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[2]/div/div[1]/div")));
//   const modal = await(this.getBuildingModal());
//   assert.ok(modal);
// });

// //Scenario: Add a new building successfully
// When('I enter {string} as the Building name', async function (string) {
//   // await this.driver.findElement
//   inpName = await this.getBuildingNameField();
//   inpName.click()
//   inpName.sendKeys(string);

// });

// When('I enter {string} as the Building address', async function (string) {
//   addName = await this.getBuildingAddressField();
//   addName.click();
//   addName.sendKeys(string);

// });

// When('I click on the Add button', async function () {
//   button = await this.getBuildingFormAddButton();
//   button.click();
// });

// Then('I should be notified', async function () {
//   textElem = await this.getConfirmationModal();
//   text = await textElem.getText();
//   assert.equal(text,"Building added successfully");
// });

// Then('I should be notified with the message {string}', async function (string) {
//   // Write code here that turns the phrase above into concrete actions
//   await this.driver.sleep(1000)
//   textElem = await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div/div/div[1]/div[2]"));
//   text = await textElem.getText();
//   assert.equal(text,string);
//   //*[@id="1"]/div[1]/div[2]
//   //*[@id="1"]/div[1]/div[2]
//   //*[@id="root"]/div/div[1]/div/div/div[1]/div[2]
//   //*[@id="5"]/div[1]/div[2]
//   //*[@id="6"]/div[1]/div[2]
// });
// // /html/body/div/div/div[1]/div/div/div[1]/div[2]


// Then('the company should be added to the list', function () {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

// // After(async function () {
// //   await this.driver.quit();
// // });

// //*[@id="root"]/div/div[2]/div/div[3]/div


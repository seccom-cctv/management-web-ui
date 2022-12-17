const { Given, When, Then, After} = require("@cucumber/cucumber");
const assert = require("assert/strict");
const { By, until, equal} = require("selenium-webdriver");
const delay = ms => new Promise(res => setTimeout(res, ms));


Given('that I\'m on the main welcome page',{timeout: 3 * 5000}, async function () {
    await this.load();
    await this.driver.manage().deleteAllCookies();
    await delay(7000)
    await this.driver.get("http://localhost:3000")
});



// Given('that I\'m not logged in', async function () {
    
//     await this.driver.wait(until.elementLocated(By.id("login-button")));
//     const elem = await this.driver.findElement(By.id("login-button"));
//     const text = await elem.getAttribute("innerText");
//     assert.equal(text,"LOGIN");
// });


When('I click on the Login button', async function () {
    await this.driver.wait(until.elementLocated(By.id("login-button")));
    const btn = await this.driver.findElement(By.id("login-button"));
    btn.click();

});


Then('I should be redirected to the login page',{timeout: 2 * 5000}, async function () {
    await delay(7000);
    const url = await this.driver.getCurrentUrl();
    assert(url.includes("amazoncognito"));

});


Given('I\'m on the login page', {timeout: 3 * 7000}, async function () {
    await this.load();
    await this.driver.manage().deleteAllCookies();
    await delay(7000)
    await this.driver.get("http://localhost:3000");
    await this.driver.wait(until.elementLocated(By.id("login-button")));
    const btn = await this.driver.findElement(By.id("login-button"));
    btn.click();
    await delay(9000);
    await this.driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div[1]/div[2]/div[2]/div[3]/div/div/span")));
    const elem = await this.driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[2]/div[2]/div[3]/div/div/span"));
    const text = await elem.getAttribute("innerText");
    assert.equal(text,"Sign in with your email and password");
});



When('I enter {string} as the email', async function (string) {
    await this.driver.wait(until.elementLocated(By.id("signInFormUsername")));
    const elem = await this.driver.findElement(By.id("signInFormUsername"));
    await elem.click();
    await elem.sendKeys(string);
    text = await elem.getAttribute("value");
    assert.equal(text,string)
});

When('I enter {string} as the password', async function (string) {
    await this.driver.wait(until.elementLocated(By.id("signInFormPassword")));
    const elem = await this.driver.findElement(By.id("signInFormPassword"));
    await elem.click();
    await elem.sendKeys(string);
    text = await elem.getAttribute("value");
    assert.equal(text,string)
});

When('I click on the Sign In button', async function () {
    await this.driver.wait(until.elementLocated(By.xpath("/html/body/div[1]/div/div[1]/div[2]/div[2]/div[3]/div/div/form/input[3]")));
    const btn = await this.driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/div[2]/div[2]/div[3]/div/div/form/input[3]"));
    btn.click();
});

Then('I should login successfully', {timeout: 2 * 5000}, async function () {
    await delay(7000);
    const url = await this.driver.getCurrentUrl();
    assert(url.includes("buildings"));
});

Then("I should see the login error message {string}", async function(string) {
    await delay(3000);
    textElem = await this.driver.findElement(By.id("loginErrorMessage"));
    text = await textElem.getText();
    assert.equal(text,string);
});

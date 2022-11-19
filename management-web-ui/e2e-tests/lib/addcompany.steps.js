const { Given, When, Then, After} = require("@cucumber/cucumber");
const assert = require("assert/strict");
const { By, until, equal} = require("selenium-webdriver");

Given('I am on the Welcome Page', async function () {
    await this.load();
    await this.driver.get("http://localhost:3000");
});

When('I click on the Add Company button', async function () {
// Write code here that turns the phrase above into concrete actions
    await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"add-new-company-button\"]/button")));
    const btn = await this.driver.findElement(By.xpath("//*[@id=\"add-new-company-button\"]/button"));
    btn.click();
});

Then('An Add Company pop-up should appear', async function () {
    // Write code here that turns the phrase above into concrete actions
    await this.driver.wait(until.elementLocated(By.id("add-company-modal")));
    const modal = await(this.driver.findElement(By.id("add-new-company-button")));
    assert.ok(modal);
    await this.driver.wait(until.elementLocated(By.id("add-company-modal-title")));
    const textElem = await this.driver.findElement(By.id("add-company-modal-title"));
    const text = await textElem.getAttribute("innerText");
    assert.equal(text,"Add Company");
});

When('I click on the Add button', async function () {
    await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"submit-company\"]/button")));
    const btn = await this.driver.findElement(By.xpath("//*[@id=\"submit-company\"]/button"));
    btn.click();
  });

Then('I should see the message {string}', async function (string) {
    if(string.includes("name")) {
        await this.driver.wait(until.elementLocated(By.id("invalid-name-company")))
        const elem = await this.driver.findElement(By.id("invalid-name-company"));
        const text = await elem.getAttribute("innerText");
        assert.equal(text,string)
    }
    else if (string.includes("address")) {
        await this.driver.wait(until.elementLocated(By.id("invalid-address-company")))
        const elem = await this.driver.findElement(By.id("invalid-address-company"));
        const text = await elem.getAttribute("innerText");
        assert.equal(text,string)
    }
    else if (string.includes("phone")) {
        await this.driver.wait(until.elementLocated(By.id("invalid-phone-company")))
        const elem = await this.driver.findElement(By.id("invalid-phone-company"));
        const text = await elem.getAttribute("innerText");
        assert.equal(text,string)
    }
    else if (string.includes("email")) {
        await this.driver.wait(until.elementLocated(By.id("invalid-email-company")))
        const elem = await this.driver.findElement(By.id("invalid-email-company"));
        const text = await elem.getAttribute("innerText");
        assert.equal(text,string)
    }
    else {
        return false;
    }
    
  });

  When('I enter {string} as the Company name', async function (string) {
    await this.driver.wait(until.elementLocated(By.id("company-name")));
    const elem = await this.driver.findElement(By.id("company-name"));
    await elem.click();
    await elem.sendKeys(string);
    text = await elem.getAttribute("value");
    assert.equal(text,string)
  });

  When('I enter {string} as the Company address', async function (string) {
    await this.driver.wait(until.elementLocated(By.id("company-address")));
    const elem = await this.driver.findElement(By.id("company-address"));
    await elem.click();
    await elem.sendKeys(string);
    text = await elem.getAttribute("value");
    assert.equal(text,string)
  });

  When('I enter {string} as the Company phone', async function (string) {
    await this.driver.wait(until.elementLocated(By.id("company-phone")));
    const elem = await this.driver.findElement(By.id("company-phone"));
    await elem.click();
    await elem.sendKeys(string);
    text = await elem.getAttribute("value");
    assert.equal(text,string)
  });

  When('I enter {string} as the Company email', async function (string) {
    await this.driver.wait(until.elementLocated(By.id("company-email")));
    const elem = await this.driver.findElement(By.id("company-email"));
    await elem.click();
    await elem.sendKeys(string);
    text = await elem.getAttribute("value");
    assert.equal(text,string)
  });

  Then('I should be notified', async function () {
    await this.driver.sleep(1000);
    await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"root\"]/div/div[1]/div")));
    textElem = await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div"));
    text = await textElem.getText();
    assert.equal(text,"New Company Created !");
  });

  Then('the company named {string} should be added to the list', async function (string) {
    await this.driver.get("http://localhost:3000");
    await this.driver.wait(until.elementLocated(By.id("add-new-company-button")));
    textElem = await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[4]/ul/a[1]/li/div[1]"))
    text = await textElem.getText();
    assert.equal(text,string)
  });


After(async function () {
  await this.driver.quit();
});
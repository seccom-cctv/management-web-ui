const { Given, When, Then, After} = require("@cucumber/cucumber");
const assert = require("assert/strict");
const { By, until, equal} = require("selenium-webdriver");

Given('I am on the Manage Buildings Page', async function () {
  await this.load();
  // await this.driver.get("http://localhost:3000");
  await this.getToBuildingsPage();
});

When('I click on the New Building button', async function () {
  const parent = await this.driver.findElement(By.id("buildings-list-id"));
  let nr = await (await parent.findElements(By.xpath("./child::*"))).length;
//   // const ln = await(await this.driver.findElements(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div"))).length;
//   await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"root\"]/div/div[2]/h2")));
//   button = await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div["+(nr-1)+"]"))
//   //*[@id="root"]/div/div[2]/div/div[5]/div/div[1]/div
// //   button.click();
    // await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"buildings-list-id\"]/div["+(nr)+"]")));
    // this.driver.findElement
    // this.driver.execute_script("arguments[0].scrollIntoView();", await this.driver.findElement(By.xpath("//*[@id=\"buildings-list-id\"]/div[7]")));
    await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"buildings-list-id\"]/div["+(nr-1)+"]")));
    btn = await this.driver.findElement(By.xpath("//*[@id=\"buildings-list-id\"]/div["+(nr-1)+"]"));
    // btn = await this.driver.findElement(By.xpath("//*[@id=\"buildings-list-id\"]/div["+(nr)+"]"));
    btn.click();
//     btn.click();
});

Then('An Add Building pop-up should appear', async function () {
  // Write code here that turns the phrase above into concrete actions
  // await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[2]/div/div[1]/div")));
  // const popup = await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[2]/div/div[1]/div/h1")).getText();
  // assert.equal(popup,"Add Building");
  await this.driver.wait(until.elementLocated(By.id("add-building-modal")));
  const modal = this.driver.findElement(By.id("add-building-modal"));
  assert.ok(modal);
});


When('I click on the Add form button', async function () {
    await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"add-building-modal\"]/div[3]/button[1]")));
    const btn = await this.driver.findElement(By.xpath("//*[@id=\"add-building-modal\"]/div[3]/button[1]"));
    btn.click();
});

Then('I should see the error message {string}', async function (string) {
    if(string.includes("name")) {
        await this.driver.wait(until.elementLocated(By.id("invalid-building-name")))
        const elem = await this.driver.findElement(By.id("invalid-building-name"));
        const text = await elem.getAttribute("innerText");
        assert.equal(text,string)
    }
    else if (string.includes("address")) {
        await this.driver.wait(until.elementLocated(By.id("invalid-building-address")))
        const elem = await this.driver.findElement(By.id("invalid-building-address"));
        const text = await elem.getAttribute("innerText");
        assert.equal(text,string)
    }
    else {
        return false;
    }
  });

  When('I enter {string} as the Building name', async function (string) {
    await this.driver.wait(until.elementLocated(By.id("building-name")));
    const elem = await this.driver.findElement(By.id("building-name"));
    await elem.click();
    await elem.sendKeys(string);
    text = await elem.getAttribute("value");
    assert.equal(text,string)
  });

  When('I enter {string} as the Building address', async function (string) {
    await this.driver.wait(until.elementLocated(By.id("building-address")));
    const elem = await this.driver.findElement(By.id("building-address"));
    await elem.click();
    await elem.sendKeys(string);
    text = await elem.getAttribute("value");
    assert.equal(text,string)
  });

  Then('I should be notified with the message {string}', async function (string) {
    await this.driver.sleep(1000);
    await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"root\"]/div/div[1]/div")));
    textElem = await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div"));
    text = await textElem.getText();
    assert.equal(text,string);
  });

  Then('the building named {string} should be added to the list', async function (string) {
    await this.getToBuildingsPage();
    // elem = await this.driver.wait(until.elementLocated(By.id("add-new-company-button")));
    // let indx = (await elem.findElements(By.xpath("./child::*")).length)-2;
    //*[@id="buildings-list-id"]/div[1]/p
    const parent = await this.driver.findElement(By.id("buildings-list-id"));
    let nr = await (await parent.findElements(By.xpath("./child::*"))).length;
    await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"buildings-list-id\"]/div["+(nr-2)+"]/p")));
    textElem = await this.driver.findElement(By.xpath("//*[@id=\"buildings-list-id\"]/div["+(nr-2)+"]/p"));
    text = await textElem.getText();
    assert.equal(text,string)
    
  });



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


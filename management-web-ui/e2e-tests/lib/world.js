const {
    setWorldConstructor,
    World,
    setDefaultTimeout,
  } = require("@cucumber/cucumber");
  const { Builder, By, until } = require("selenium-webdriver");
  const chromedriver = require("chromedriver");
  const chrome = require("selenium-webdriver/chrome");

  class AddCompanyWorld extends World {
    constructor(options) {
      super(options);
    }
  
    async load() {
      setDefaultTimeout(10 * 1000);
      this.appUrl = this.parameters.appUrl;
      const service = new chrome.ServiceBuilder(chromedriver.path);
      let chromeOptions = new chrome.Options();
      let headless = true;
      if (headless) {
        chromeOptions = chromeOptions.headless();
      }
      this.driver = await new Builder()
        .forBrowser("chrome")
        .setChromeService(service)
        .setChromeOptions(chromeOptions)
        .build();
    }
  
    // async getAddButton() {
    //   return this.driver.findElement(By.name("addTodoInput"));
    // }

    // async getCompanyModal() {
    //   return this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]/div"));
    // }

    async getToBuildingsPage() {
      //Ir para as building pages
      await this.driver.get("http://localhost:3000");
      const x = await (await this.driver.findElements(By.xpath("//*[@id=\"root\"]/div/div[4]/ul/a"))).length;
      if (x>0) {
        await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[4]/ul/a/li/div[6]")).click();
        await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[3]/a/button")).click();
      }
      else {
        // Registar uma nova company
        await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"root\"]/div/div[3]")));
        await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[3]/div/button")).click();
        await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]/div/div[1]/input")).click()
        await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]/div/div[1]/input")).sendKeys("Test Company");
        await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]/div/div[2]/input")).click()
        await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]/div/div[2]/input")).sendKeys("Test Address");
        await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]/div/div[3]/input")).click()
        await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]/div/div[3]/input")).sendKeys("256173625");
        await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]/div/div[4]/input")).click()
        await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]/div/div[4]/input")).sendKeys("mrt@ua.pt");
        await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]/div/div[5]/button[1]")).click()

        //Ir para as building pages
        await this.driver.wait(until.elementLocated(By.xpath("//*[@id=\"root\"]/div/div[4]/ul/a/li/div[6]")));
        await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[4]/ul/a/li/div[6]")).click();
        await this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div[3]/a/button")).click();
      }
    }

    async getNewBuildingButton() {
      return this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[1]/div"));
    }

    async getBuildingForm() {
      return this.driver.findElements(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[2]/div/div[1]/div"))
    }

    async getBuildingModal() {
      return this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[2]/div/div[1]/div"))
    }

    async getBuildingNameField() {
      return this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[2]/div/div[1]/div/div[1]/input"))
    }

    async getBuildingAddressField() {
      return this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[2]/div/div[1]/div/div[2]/input"))
    }

    async getBuildingFormAddButton() {
      return this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div/div[2]/div/div[1]/div/div[3]/button[1]"))
    }//segundo array de div

    async getConfirmationModal() {
      return this.driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[1]/div"))
    }


  
    // async getAddTodoButton() {
    //   return this.driver.findElement(By.id("addTodoBtn"));
    // }
  
    // async getTodoCountText() {
    //   return this.driver.findElement(By.id("todoCountText"));
    // }
  
    // async getTodoElementByText(text) {
    //   const todoElement = await this.driver.findElement(By.id("todoList"));
    //   const todoItemsElements = await todoElement.findElements(By.css("li"));
    //   for (let todoItem of todoItemsElements) {
    //     const textEle = await todoItem.findElement(By.id("text"));
    //     const eleText = await textEle.getText();
    //     if (eleText === text) {
    //       const actionBtn = await todoItem.findElement(By.id("actionBtn"));
    //       const id = await todoItem.getAttribute("id");
    //       return {
    //         textElement: todoItem,
    //         buttonElement: actionBtn,
    //         status: id === "pendingTodo" ? "pending" : "completed",
    //       };
    //     }
    //   }
    // }
  }
  
  setWorldConstructor(AddCompanyWorld);
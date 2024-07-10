const { Builder, By, Key, until } = require('selenium-webdriver');

async function testForm() {
  // Create a new instance of the Firefox driver
  let driver = await new Builder().forBrowser('firefox').build();

  try {
    // Navigate to the webpage containing the form
    await driver.get('file:///C:/Users/user/Documents/GitHub/Full-Stack/test/index.html');

    // Fill in the "Name" field
    await driver.findElement(By.name('name')).sendKeys('Test Name');

    // Fill in the "Email" field
    await driver.findElement(By.name('email')).sendKeys('test@example.com');

    // Fill in the "Age" field
    await driver.findElement(By.name('age')).sendKeys('25');

    // Select "Gender"
    await driver.findElement(By.name('gender')).sendKeys('זכר');

    // Click the submit button
    // await driver.findElement(By.xpath('//button[text()="שלח והדפס ל-Console"]')).click();
    await driver.findElement(By.name('send')).click();

    // Wait for the page to load and check the result
    await driver.wait(until.titleIs('print to console'), 1000);
  } finally {
    // Quit the driver
    await driver.quit();
  }
}

testForm();

const {Builder, By, Key, util} = require('selenium-webdriver');

(async function classDem(){
    let driver = await new Builder().forBrowser('firefor'), build();
    try{
        await driver.getCapabilities('https://www.cisco.com');
        // await driver.findElement(By.name('q').sendKeys('devnet', KEY.RETURN))
    } finally{}
})
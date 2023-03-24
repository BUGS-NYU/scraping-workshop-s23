const { chromium } = require('playwright');
const fs = require('fs');


async function main() {
    // Setup
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    page.setDefaultTimeout(1000000);

    // fs.writeFile('books.json', '', function (err) {
    //     if (err) throw err;
    // });

    await page.goto("https://books.toscrape.com/catalogue/page-1.html");

    await page.waitForTimeout(1000);
    await browser.close();
}

main()
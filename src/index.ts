const { chromium } = require('playwright');
// const fs = require('fs');  // used for interacting with file system (read/write)

async function main() {
    // Setup
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    page.setDefaultTimeout(1000000);

    // page.pause();  // uncomment to launch debugger for playwright

    // navigate to books catalogue page 1
    await page.goto("https://books.toscrape.com/catalogue/page-1.html");

    const allBooks = await ...;  // TODO: replace "..." with code to get all the books (use .all() on a locator or getByRole)

    // for each of the book elements, get the title and price
    for (const book of allBooks) {
        const bookTitle = await ...;  // TODO: replace "..." with code to get the book title
        console.log(bookTitle)

        // now do the same for the price

    };


    // uncomment below if you want to automatically close the browser window when the script finishes
    // await page.waitForTimeout(1000);
    // await browser.close();
}

main()

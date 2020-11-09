const puppeteer = require("puppeteer");
const url = "https://www.hellorf.com";

async function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function captureScreenShot() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);
  await timeout(15000);
  await page.pdf({ format: "A4", path: "./pdf.pdf" });
  await page.screenshot({
    path: "./jpeg.jpg",
    // fullPage: true,
  });
  await page.screenshot({
    type: "png",
    path: "./png.png",
    // fullPage: true,
  });
  browser.close();
}

captureScreenShot();

import { NextApiHandler } from "next";
import puppeteer from "puppeteer";

const Handler: NextApiHandler = async (_req, res) => {
  const browser = await puppeteer.launch({headless:false})
  const page = await browser.newPage()


  await page.goto('https://generate-pdf-with-next.vercel.app')

  await page.emulateMediaType('screen')

  // Create PDF Buffer
  const buffer = await page.pdf({ format: 'a4' })

  console.log(buffer)

  // Return pdf buffer to caller.
  // res.end(buffer) 

  // Close browser **after** we returned the PDF to the caller.
  await browser.close()
  res.send("good")
}

export default Handler

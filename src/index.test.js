import puppeteer from 'puppeteer'
import ip from 'ip'

describe('Progressive Weather', () => {
  let browser
  let page
  const LOCAL_ADDR = ip.address()

  beforeAll(async () => {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    page = await browser.newPage()
  })

  test('displays a spinner while loading', async () => {
    await page.goto(`http://${LOCAL_ADDR}:5000/`)

    // At cold start the spinner should be present.
    let spinner = await page.$eval('.spinner', () => true)
    expect(spinner).toBe(true)

    // Waits for the weather widgets to appear.
    await page.waitForSelector('.current-weather-widget__main-wrapper')

    // Spinner should be gone now.
    try {
      spinner = await page.$eval('.spinner', () => true)
    } catch (e) {
      spinner = false
    }

    expect(spinner).toBe(false)
  }, 10000)

  test('can navigate to Settings page', async () => {
    await page.goto(`http://${LOCAL_ADDR}:5000/`)

    const navigationPromise = page.waitForNavigation()
    // Back button should not be rendered,
    // so the first button must be settings.
    await page.click('button')
    await navigationPromise

    const pageTitle = await page.$eval('.header-shell__title', e => e.textContent)
    expect(pageTitle).toBe('Settings')
  }, 3000)

  test('can navigate from Settings back to Main page', async () => {
    const navigationPromise = page.waitForNavigation()
    // Settings button should not be rendered in settings page,
    // so the first button must be the back button.
    await page.click('button')
    await navigationPromise

    const pageTitle = await page.$eval('.header-shell__title', e => e.textContent)
    expect(pageTitle).toBe('Berlin Mitte')
  }, 3000)

  test('redirects to the Main page when navigating to an unused route', async () => {
    await page.goto(`http://${LOCAL_ADDR}:5000/most-likely-unused-route`)

    expect(page.url()).toBe(`http://${LOCAL_ADDR}:5000/`)
  }, 3000)

  afterAll(() => {
    browser.close()
  })
})
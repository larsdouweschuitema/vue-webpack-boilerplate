module.exports = {
  'example e2e test': function (browser) {
    browser
      .url(browser.launch_url)
      .waitForElementVisible('div', 1000)
      .assert.containsText('h1', 'App')
      .end()
  }
}
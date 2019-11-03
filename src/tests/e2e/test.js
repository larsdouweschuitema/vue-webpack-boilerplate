module.exports = {
  'example e2e test': function (browser) {
    browser
      .url('localhost:8080')
      .waitForElementVisible('div#app', 1000)
      .assert.containsText('h1', 'App')
      .end()
  }
}
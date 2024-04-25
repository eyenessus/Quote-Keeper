const { assert } = require("chai");

describe("user visits root test", () => {
  describe("posting  a quote", () => {
    it('saves quote and metadata submitted by user',()=>{
      let quote = 'I love you for thousand years';
      let attributed ='Emerson S.'
      let source = 'Alec Benjamin S.'

      browser.url('/')
      browser.setValue('textarea[id=quote]',quote)
      browser.setValue('input[id=attributed]',attributed)
      browser.setValue('input[id=source]',source)
      browser.click('button[type=submit]')

      assert.include(browser.getText('#quote'),quote)
      assert.include(browser.getText('#attributed'),attributed)
      assert.include(browser.getText('#source'),source)
    })
  });
});

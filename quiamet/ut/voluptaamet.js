const assert = require('assert');
const Translator = require('../index');

describe('Translator', function() {
  let translator;
  
  // Initialize a new Translator instance before each test
  beforeEach(() => {
    translator = new Translator('');
  });

  it('should translate empty string to empty string', async function() {
    // Use strictEqual for better type checking
    assert.strictEqual(await translator.toEn(), '');
  });
});

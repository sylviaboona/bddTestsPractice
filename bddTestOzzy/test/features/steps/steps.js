// const defineSupportCode = require('@cucumber/cucumber').defineSupportCode;

const {Given, When, Then} = require('@cucumber/cucumber');
const assert = require('assert');

// defineSupportCode(function({ Given, Then, When }) {
  let answer = 0;

  Given('I start with {int}', function (input) {
    answer = input;
  });
  When('I add {int}', function (input) {
    answer = answer + input;
  });
  When('I multiply by {int}', function (input) {
    answer = answer * input;
  });
  Then('I end up with {int}', function (input) {
    assert.strictEqual(answer, input);
  });
// });

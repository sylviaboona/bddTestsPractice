const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber');
let app = require('../../../src/app')

Given("today is {string}", function(givenDay){
    // Write code here that turns the phrase above into concrete actions
    this.today = givenDay;
    // return 'Pending'
});

When("I ask whether it's Friday yet", function(){
    // Write code here that turns the phrase above into concrete actions
    this.actualAnswer = app.isItFriday(this.today)
    // return 'Pending'
});

Then("I should be told {string}", function(expectedAnswer){
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.actualAnswer, expectedAnswer)
    // return 'Pending'
});




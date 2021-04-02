const assert = require('assert');
const {Given, When, Then} = require('@cucumber/cucumber')
const app = require('../../../app')

Given("today is {string}", function(givenDay){
    this.today = givenDay;
})

When("I ask whether its Friday yet", function(){
 this.actualAnswer = app.isItFriday(this.today) 
});

Then("I should be told {string}", function(expectedAnswer){
    assert.equal(this.actualAnswer, expectedAnswer)
})
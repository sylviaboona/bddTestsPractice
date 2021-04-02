Feature: Is it Friday yet?
    Everybody wants to know when its Friday

    Scenario: Tuesday is not Friday
        Given today is Tuesday
        When I ask whether its Friday yet
        Then I should be told "Nedda Bambi"
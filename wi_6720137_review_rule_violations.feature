
Feature: AI code review rule validation

  # This feature intentionally contains violations for testing.
  # The comments are deliberately multiline.
  # The review agent should flag unnecessary multiline comments.

  Scenario: Validate hybrid scoping
    Given the application is available
    When I wait for 5000 milliseconds
    Then the application should be ready


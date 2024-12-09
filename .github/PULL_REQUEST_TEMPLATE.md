Pull Request: Add Weekly Summary Feature
Description
This pull request adds a "Weekly Summary" feature to BiteCal, providing users with insights into their dietary habits over a week. The summary includes total calories consumed, macronutrient breakdown, and graphical trends for meal timing.

Changes Made

Added a new "Weekly Summary" page in the user dashboard.
Implemented backend logic to aggregate and calculate weekly dietary data.
Created frontend components to display the summary data in charts and tables.
Updated API endpoints to support weekly data fetching.
How to Test

Log into the BiteCal application.
Log meals for at least one week.
Navigate to the "Weekly Summary" section under the dashboard.
Verify that the summary accurately reflects the logged data, including:
Total calories consumed.
Macronutrient breakdown (carbs, protein, fats).
Trends displayed in graphs.
Screenshots or Visuals

Example of the "Weekly Summary" page displaying calorie and nutrient trends.

Checklist

 Code adheres to BiteCal’s coding standards.
 Tests have been added to validate weekly data aggregation.
 Documentation updated to include the "Weekly Summary" feature.
 Related issues are linked below.
Related Issues
Closes #42 - "Add Weekly Summary Feature"

Additional Notes

This feature introduces a new dependency: Chart.js for rendering graphs. Ensure the library is installed before deploying.
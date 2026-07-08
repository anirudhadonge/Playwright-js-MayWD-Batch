# Topics for today
1. Hooks
2. Annotations
3. tags

## Hooks
There are methods to organise the actions performed in the test
1. Before All : This method gets executed before all the test in the file or scope gets executed.
2. Before each : This method gets invokes before each test
3. After All : this method gets invokes after all the test in the file or scope finish execution
4. After Each : THis method gets Invokes after each test
5. Describe : It is a method to group the tests.
6. steps(): You can enclose specific test inside this block


## Annoations : There are methods for performing specific actions
1. only : 
    syntax : test.only()
    When ever you mark any test as only , that test would only get execute
2. skip : test.skip(), The mark test gets skipped from the execution.
3. fixme : test.fixme(), The marked as fixed me would not get execute and would get skipped in the execute, However this annotation specifies that the test need to be fixed.
4. slow : by default the timeout period for test is 30 sec. 
5. serial(): This annotation is applied on the describe level, it will execute test in sequence i.e. one by one and application for those test inside the describe block.


## Tags in Playwright test
When group test on the bases of their priority
e.g. Smoke, regression (p1, p2, p3), functionality
1. adding a tag in the test description e.g. test("@smoke Fill and press sequencially test, async({page})=>{})
2. test("Fill and press sequencially test,{
    tags:[@Smoke]
} async({page})=>{})

When executing the test the Command Line Argument that we need to for executing the specific category of test is
npx playwright test --grep "<tag>"
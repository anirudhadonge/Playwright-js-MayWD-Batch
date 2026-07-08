# Assertion
Validation of the Actions performed.

## Type of Assertions
1. Auto Retrying Assertions : After every interval of time the arrertion validate condition. Once is condition is satishfied , assertion pass and the script moves a head.
2. Non-retrying Assertions
3. Hard Assertions
4. Soft Assertions



### Auto Retry Assertions
Timeout--- Maximum time within the condition should be satisified
polling time --- after the interval of time our expect method would try to check the state of the element.

element --- Visible 
{
polling time ---> check the visibility of element --if false --- wait polling time ----> check the visibility of element
} till the timeout is reached.

All the Retry assertions as applied on the html elements 

Syntax :
await expect(<LocatorObject>).<Method for validating the condition>()
When ever we want to validate a negative condition we add .not in front of the validation methods
list of Assertions
1. toBeVisible() : Validated the element is visible
2. toBeHidden(); Element is in-visible
3. toBeEnabled();
4. toBeChecked();
5. toHaveText(<Text>): To Validate the exact Text
6. toContainsText(<Text>): validate partial Text
7. toHaveURL(): Validating the url
8. toHaveTitle(): to Valdiate the title of the page
9. toHaveAttribute(): check the value of the attribute of a element
10. toHaveCount(): validate the count of the element

### Assertions Link : https://playwright.dev/docs/test-assertions#auto-retrying-assertions



## Non-Retry-Assertions
Those Assertions which validated or compares values 
e.g 
a = 10
b = 9
// compare whether two values are equal or not.

Syntax : expect(<value>).<conditions>()
e.g. expect(a).toBe(b)


## Hard Assert
When an assertion fails the script stops at that point.
syntax : await expect(<LocatorObject>).<Method for validating the condition>()
## Soft Assert
When an assertion fails the script continue to execute and at the end of the execution it will mark the test as failed.
syntax await expect.soft(<LocatorObject>).<Method for validating the condition>()
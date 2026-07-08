# Playwright Waits (Implicit wait) (Auto Wait)
By Default Auto waits gets applied when you are performing any action on an element
The checks that are performed by Auto waits are
1. Attached
2. Visible
3. Stable
4. Enabled

These are also called as Actionability. https://playwright.dev/docs/actionability#introduction
Default timeout is 30000 ms

Set the Timeout using the function page.setDefaultTimeout()

## Explicit Wait
1. WaitForTimeOut(Time out in miliseconds): When Ever we want to pause our execution for a period of time
2. waitForLoadState : The wait is applied on the page level
    a.domcontentloaded : DOM (Document object model) is loaded completely
    b. Load : All the resources jsscript, css , DOM 
    c. NetworkIdle: All the network calls to get completed and there are not are no network calls left.
3. WaitFor: This wait is applied on the element level
    a. Hidden : It will wait till the element is hidden( not present on the Html UI); e.g. Loader Icon
    b. Visible : It will wait for the element to be present on HTML UI
    c. Attached : We would check whether the element is Attached to the DOM or not 
    d. detached : We would check whether the element is detached from the DOM

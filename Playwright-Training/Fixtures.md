# Fixtures

In Playwright inbuild object inside the Test are called as Fixtures
1. BrowserName
2. Browser
3. Browser Context
4. Page
5. APIRequest


## Custom Fixture
You are Enhancing the Capability of the test Object
syntax: 
let baseTest = test.Extend({})

import {test, expect} from '@playwright\test' -- eariler 
import {baseTest, expect} from '<place where you have create custom fixture>

Now my custome fixture contains the following objects
1. BrowserName
2. Browser
3. Browser Context
4. Page
5. APIRequest
6. LoginPage
7. ProductPage
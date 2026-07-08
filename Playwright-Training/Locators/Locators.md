# Locators

it is the address of a element on the html page

## Types

1. Xpath
2. CSS locators

All the tools would get the control of HTML page using the DOM object
DOM they can perform different actions

## Opening the dev tools

1. Option (...) > More Tools > Dev Tool
2. Right click on the html page and select Inspect
3. Press F12 Key

## XPath

1. syntax : //<html tag>[@<attribute>='<value of the attribute>']
   e.g <a href="/checkboxes">Checkboxes</a>
   //a[@href='/checkboxes']
2. Partial value of the attribute
   - we use a method called as contains(<attribute>,<partial value>)
   - syntax : //<html tag>[contains(@<attribute>,'<value of the attribute>')]
   - e.g. //input[contains(@id,'shub')]
3. Navigating from one Element to the other element.
   - Parent Element to the Child Element
     e.g. <div class='parent> - Parent of Input
     <input></input> -- Child of Div
     </div>
     //div[@class='userform']//input[@title='Email']
     syntax : //<html tag of Parent>[@<attribute>='<value of the attribute>']//<html tag of child>[@<attribute>='<value of the attribute>']
   - Child Element to Parent Element
     e.g. <div class='parent> - Parent of Input
     <input></input> -- Child of Div
     <label></label>
     </div>
     //input[@title='Email']//parent::div
     synatx : //<html tag of child>[@<attribute>='<value of the attribute>']//parent::<html tag of parent>[@<attribute>='<value of the attribute>']
   - Child to Ancestor
     Ancestor e.g
     <div class = "ancestor"> // Ancestor of input
        <div class="ancestor"> // Ancestor of Input
            <div class="parent"> // parent of input
                <input> // this is the child element
            </div>
       </div>
    </div>
    //input[@id='pass']//ancestor::div[@data-id="3727598"]
    syntax : //<html tag of child>[@<attribute>='<value of the attribute>']//ancestor::<html tag of the ancestor>[@<attribute>='<value of the attribute>']
   - Ancestor to Child
        e.g //<html tag of the ancestor>[@<attribute>='<value of the attribute>']//<html tag of child>[@<attribute>='<value of the attribute>']
        //div[@data-id="3727598"]//input[@id='pass']
   - Navigate between Sibling
        e.g.
        <div class='parent'>
            <input>
            <label> label tag</label>
            <input>
            <p>
            <textbox>
        </div>
     - Following-siblings : we move from the top element to the element below (element on the same level)
        synatx : //<html tag of the top sibling>[@<attribute>='<value of the attribute>']//following-sibling::<html of the sibling>[@<attribute>='<value of the attribute>']
        e.g. //input[@id='pass']//following-sibling::button
     - Preceding-siblings : we move from bottom to top
             synatx : //<html tag of the bottom sibling>[@<attribute>='<value of the attribute>']//preceding-sibling::<html of the sibling>[@<attribute>='<value of the attribute>']
            e.g.//button[@value='Submit']//preceding-sibling::input[@id='pass']
4. Html Text: text() method is used to find an element
    syntax: //<html tag>[text()='<text>']
    e.g. //button[text()='Submit']
5. and
    syntax : //<html tag>[@attribute='value' and @attribute2='value' and @attribute3='value']
    e.g. //input[@class="selectors-input jsSelector" and @title='Email']
6. or 
    syntax : //<html tag>[@attribute='value' or  @attribute2='value']
    e.g.//input[@class="selectors-input jsSelector" or @title='Email']


# CSS Locators
There are few rules that we need to know.
1. Class attribute is denote with a "." Syntax : <Html tag>.<Class Attribute value>
2. id attribute is denote with a "#". Syntax : <html tag>#<id attribute value>
3. Any Other attribute other than class or Id then Syntax [<attribute name>='<Attribute value>']
4. If we want to use a partial value of Attribute [<attribute name>*='<Attribute value>']
5. if we want find the locator using an attribute whose value starts with some text [<attribute name>^='<Attribute value>']
6. Parent to child e.g <css locator of the parent> <css locator of the child>
7. moving between immediate sibling <css locator of element> + <css locator of immediate sibling>
    e.g. <div class='userform'>
            <label>User Name</label>
            <input id='shub11' title='Email'>
            <br>
            <input id=pass>
         </div>


## Important things to remimber
1. Address of the element
2. Create a locator Object (Playwright Object) --- This object would keep all the information about the element and can perform actions on the element.

# Playwright Locator Object : Methods for creating locator Objects
1. Locate by role
2. Locate by Label
3. Locate by Placeholder
4. Locate by text
5. Locate by alt Text
6. Locate by title
7. Locate by test id
8. locate by css or xpath
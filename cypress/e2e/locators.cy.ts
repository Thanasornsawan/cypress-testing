describe('Locators', () => {

    beforeEach(()=>{
        cy.visit('/elements')
    })

    it('locator element with get', () => {
        //get all element by tag name
        cy.get("button")
        //get all element by class name
        cy.get(".btn-with-class")
        //get all element with specific class
        cy.get("[class='Elements-btn btn-with-class more-btn-classes'")
        //get element with specific id
        cy.get("#btn-with-id")
        //get all element by specific attribute
        cy.get("[type='submit']")
        //get all element by tag name 'button' and class 'Elements-btn'
        cy.get("button.Elements-btn")
        // Get all elements by tag name AND class and id 
        cy.get("button.Elements-btn#btn-with-id")
        // Get all elements by tag name AND class and type attribute
        cy.get("button.Elements-btn[type='submit']")
        // Get all elements with specific data test id
        cy.get("[data-cy='btn-id-1']")
        //custome cypress commnad in /support/commands.ts
        cy.getByTestId("btn-id-1")
    })

    it('locating elements with contain', () => {
        // Get element by text
        cy.contains("Unique Text")

        // Get element by text
        cy.contains("Not Unique Text")

        // Combine get with contains
        cy.get("[type='submit']").contains("Not Unique Text")

        // Get element by tag name and text
        cy.contains("[type='submit']", "Not Unique Text")

        // Get element by descent and text 
        cy.contains("span", "Not Unique Text")
        cy.contains("form", "Not Unique Text")
        cy.get("form").contains("Not Unique Text")
    })

})
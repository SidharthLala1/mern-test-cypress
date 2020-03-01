/// <reference types="Cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // https://on.cypress.io/interacting-with-elements

  /**
   * This test case checks the Text "Todos List" is present-01
   */
  it("Get header text", () => {
    cy.get(".container > div > h3").should("have.text", "Todos List");
  });


  it("Create to do", () => {
    cy.contains('Create Todo').should('have.attr', 'href', '/create');
  });
  /**
   * Test to create a new Todo-02
   */

  it("Create to do", () => {
    cy.contains('Create Todo')
      .should('have.attr', 'href', '/create');
    cy.get("#root > div > nav > div > ul > li:nth-child(2) > a").click();
    cy.get('#root > div > div > form > div:nth-child(1) > input')
      .type("sid")
      .should("have.value", "sid");
    cy.get('#root > div > div > form > div:nth-child(2) > input')
      .type("test")
      .should("have.value", "test");

    cy.get('input[value="Low"]').check();

    cy.get('input[type="submit"]').click();
  });


  /**
   * Test case to update a ToDo-03
   */

  it("Update a todo", () => {
    cy.get("#root > div > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > a").click();
    cy.get('#root > div > div > form > div:nth-child(1) > input')
      .type("sid")
    cy.get('#root > div > div > form > div:nth-child(2) > input')
      .type("test")
    cy.get("#priorityMedium").click();
    cy.get("#root > div > div > form > div:nth-child(3) > div:nth-child(6) > input").click();

  });

  /**
   * Test case to delete a todo-04
   */

  it("delete a todo", () => {
    cy.get("#root > div > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > a").click();
    cy.get("input[type='button']").click();
  });

  /**
   * Test case to makr a todo complete-04
   */

  it('should allow me to mark a todo as completed', function () {
    // complete all todos
    // we use 'check' instead of 'click'
    // because that indicates our intention much clearer
    cy.get("#root > div > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > a").click();
    cy.get("input[type='checkbox']").check()
    cy.get("input[type='submit']").click()

  });

});
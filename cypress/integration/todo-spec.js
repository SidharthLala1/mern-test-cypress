/**
 * API Test case for create TODO-01
 */

describe('CreateTodo', () => {
  
    it('Create a todo with description and responsible', () => {
        cy.server()
        cy.fixture('todos.json').as('todoslist')
        cy.route({
            method: 'POST',
            url: '/todos/add',
            response: '{"result": "todo added successfully"}',
            status: 200
        }).as('todoslist');
        
    });

});

/**
 * API Test case for Lisiting all the TODOS-02
 */

describe('Listtodo', function() {
    it('feth the list of todos', function() {
        cy.server().should((server) => {
            expect(server.delay).to.eq(0)
            expect(server.method).to.eq('GET')
            expect(server.status).to.eq(200)
        })
        cy.fixture('todos.json').as('todoslist')
        cy.route({
            method: 'GET',
            url: '/todos/',
            response: '@todoslist',
            status: 200
        });
    });

});

/**
 * API Test case for deleting a the TODO-03
 */

describe('Deletetodo', function () {
    it('Delete the todos', function () {
        cy.server()
        cy.fixture('todos.json').as('todoslist')
        cy.route({
            method: 'DELETE',
            url: '/todos/delete/5e56b883eba37d3ce4d6297a',
            response: '{"result": "Todo deleted"}',
            status: 200
        });
    });

});

/**
 * API Test case for updating a the TODO-04
 */

describe('Updatetodo', function () {
    it('Update a todos', function () {
        cy.server()
        cy.fixture('todos.json').as('todoslist')
        cy.route({
            method: 'PUT',
            url: '/todos/update/5e56b72eeba37d3ce4d62979',
            response: '{"result": "Todo updated"}',
        });
    });

});
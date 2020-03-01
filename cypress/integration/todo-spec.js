describe('CreateTodo', () => {
    let data = {
        "todo_description": "Test1",
        "todo_responsible": "Test1",
        "todo_priority": "High",
        "todo_completed": false
    }
    it('Create a todo with description and responsible', () => {
        cy.fixture('todos').as('todoslist')
        cy.server()
        cy.route({
            method: 'POST',
            url: '/todos/add',
            response: '{"result": "todo added successfully"}',
            status: 200
        });
    });

});


describe('Listtodo', function() {
    it('feth the list of todos', function() {
        cy.fixture('todos').as('todoslist')
        cy.server().should((server) => {
            expect(server.delay).to.eq(0)
            expect(server.method).to.eq('GET')
            expect(server.status).to.eq(200)
        })
        cy.route({
            method: 'GET',
            url: '/todos/',
            response: '@todoslist',
            status: 200
        });
    });

});


describe('Deletetodo', function () {
    it('Delete the todos', function () {
        cy.fixture('todos').as('todoslist')
        cy.server()
        cy.route({
            method: 'DELETE',
            url: '/todos/delete/5e56b883eba37d3ce4d6297a',
            response: '{"result": "Todo deleted"}',
            status: 200
        });
    });

});

describe('Updatetodo', function () {
    it('Update a todos', function () {
        cy.fixture('todos').as('todoslist')
        cy.server()
        cy.route({
            method: 'PUT',
            url: '/todos/update/5e56b72eeba37d3ce4d62979',
            response: '{"result": "Todo updated"}',
        });
    });

});
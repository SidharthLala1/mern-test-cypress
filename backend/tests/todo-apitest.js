const app = require('../server') // Link to your server file
const request = require('supertest')

/**
 * Test to add a Todo
 */

 describe('#POST  /todos/add', function(){
     let data = {
         "todo_description": "Test1",
         "todo_responsible": "Test1",
         "todo_priority": "High",
         "todo_completed": false
     }
    it('Creata a new todo', function(done){
        request(app)
            .post('/todos/add')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);

    })
 });


/**
 * Testing get all todo endpoint
 */
describe('#GET /todos/', function () {
    it('should get all todos', function (done) {
        request(app)
           .get('/todos/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
});

/**
 * Testing get a todo endpoint by giving an existing todo
 */
describe('#GET /todos/:id', function () {
    it('should get single todo', function (done) {
        request(app)
            .get('/todos/5e583600fc27447280270c16')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    })
});

/**
 * Testing get a todo endpoint by giving an non-existing todo
 */
describe('#GET /todos/:id', function () {
    it('should not get single task', function (done) {
        request(app)
            .get('/todos/5e583600fc27447280270c1sd7')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(404) //expecting HTTP status code
            .expect('"todo not found"') // expecting content value
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});


/**
 * Testing DELETE a todo endpoint by giving an existing todo
*/

describe('#DELETE /todos/delete/:id', function () {
    it('should delete a single todo', function (done) {
        request(app)
            .delete('/todos/delete/5e56ade0eba37d3ce4d62977')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect('"Todo deleted"')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    })
});


/**
 * Testing UPDATE a todo endpoint by giving an existing todo
*/

describe('#UPDATE /todos/update/:id' , function(){
    let data = {
        "todo_description": "Test1",
        "todo_responsible": "Test1",
        "todo_priority": "High",
        "todo_completed": false
    }
    it('should update the todo description' , function(done){
        request(app)
            .put('/todos/update/5e56b883eba37d3ce4d6297a')
            .send(data)
            .set('Accept' , 'application/json')
            .expect('Content-Type', /json/)
            .expect('"Todo updated"')
            .end((err) => {
                if (err) return done(err);
                done();
            });
    })

});
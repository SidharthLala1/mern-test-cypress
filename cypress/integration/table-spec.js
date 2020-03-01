/// <reference types="cypress" />
const neatCSV = require('neat-csv')

describe('CSV', () => {
    it('has table rows for each row of CSV file', () => {
        cy.visit('http://localhost:3000/')
        cy.readFile('todos.csv')
            .then(neatCSV) // converts text into list of objects
            /* eslint-disable-next-line no-console */
            .then(console.table) // convenient method for printing list of objects in DevTools console
            .then((records) => {
                cy.get('#root > div > div > table > thead' ).should(($rows) => {
                    [1]
                    // go through each row and confirm it shows the right information from CSV
                    $rows.each((k, $row) => {
                        const record = records[k]
                        const $cells = $row.children
                     .then(console.$rows);
                        expect($cells[0])
                            .to.have.property('innerText')
                            .equal(record['Description'])

                        expect($cells[1])
                            .to.have.property('innerText')
                            .equal(record['Responsible'])

                        expect($cells[2])
                            .to.have.property('innerText')
                            .equal(record['Priority'])
                           
                        expect($cells[3])
                            .to.have.property('innerText')
                            .equal(record['Actions'])
                })
            })
    })
})
})
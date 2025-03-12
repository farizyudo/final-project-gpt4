import loginElement from "../support/loginElement";
import logoutElement from "../support/logoutElement";
const userData = require('../fixtures/user.json')


function randomDivisi() {
    const randomString = Math.random().toString(36).substring(2, 6)
    const name = "Divisi " + randomString
    return name
}


describe('Master Data', () => {

    beforeEach(() => {
        cy.visit('https://pxdemo.geekgarden.id/')
        loginElement.inputUsername(userData.valid_email)
        loginElement.inputPassword(userData.valid_pass)
        loginElement.BTNlogin()
        cy.get('.css-mmj810 > :nth-child(22)').click() // klik master data
    })

    describe('Divisi', () => {
        beforeEach(() => {

            cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(1)').click() // klik master data
        })

        it.only('Tambah data Divisi', () => {
            cy.get('.css-1azotaz > .chakra-button').click()  // Klik tambah data
            cy.get('.chakra-input.css-1tx1nxa').type(randomDivisi()) // input data
            cy.get('.css-ez23ye').click() // simpan data
        })

    })

    // describe('Level', () => {
    //     beforeEach(() => {

    //         cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(1)').click() // klik master data
    //     })

    //     it.only('Tambah data Level', () => {
    //         cy.get('.css-1azotaz > .chakra-button').click()  // Klik tambah data
    //         cy.get('.chakra-input.css-1tx1nxa').type(randomDivisi()) // input data
    //         cy.get('.css-ez23ye').click() // simpan data
    //     })
    // })
})
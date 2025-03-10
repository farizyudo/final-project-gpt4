import loginElement from "../support/loginElement";
import logoutElement from "../support/logoutElement";
const userData = require('../fixtures/user.json')

describe('e2e Profile', () => {

    beforeEach(() => {
        cy.visit('https://pxdemo.geekgarden.id/')
        loginElement.inputUsername(userData.valid_email)
        loginElement.inputPassword(userData.valid_pass)
        loginElement.BTNlogin()
    })

    after(() => {
        logoutElement.berhasilLogout()
    })

    it('Profile', () => {

        cy.get('.chakra-avatar__img').click()
        cy.contains('Profile').click()
        cy.get('.css-t72zj9 > :nth-child(1) > .chakra-button').click()
    })
})
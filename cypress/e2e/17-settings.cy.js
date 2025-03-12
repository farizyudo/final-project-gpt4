import loginElement from "../support/loginElement";
import logoutElement from "../support/logoutElement";
const userData = require('../fixtures/user.json')

describe('e2e', () => {

    beforeEach(() => {
        cy.visit('https://pxdemo.geekgarden.id/')
        loginElement.inputUsername(userData.valid_email)
        loginElement.inputPassword(userData.valid_pass)
        loginElement.BTNlogin()
    })

    it('', () => {

    });


})
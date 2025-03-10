import loginElement from "../support/loginElement";
import logoutElement from "../support/logoutElement";
const userData = require('../fixtures/user.json')

describe('Logout', () => {

    beforeEach(() => {
        cy.visit('https://pxdemo.geekgarden.id/')
    })

    it.only('login dan logout', () => {
        loginElement.inputUsername(userData.valid_email)
        loginElement.inputPassword(userData.valid_pass)
        loginElement.BTNlogin()
        logoutElement.batalLogout()
        logoutElement.berhasilLogout()
    });


})
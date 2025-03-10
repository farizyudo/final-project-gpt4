import loginElement from "../support/loginElement";
const userData = require('../fixtures/user.json')

describe('Login Performtrix', () => {

  beforeEach(() => {
    cy.visit('https://pxdemo.geekgarden.id/')
  })

  // Login Success | Positive Cases 
  it('Login dengan email dan password valid', () => {                              // Login Success

    loginElement.inputUsername(userData.valid_email)
    loginElement.inputPassword(userData.valid_pass)
    loginElement.BTNlogin()
    cy.wait(1000)
    cy.contains('PERFORMATRIX').should('be.visible')
  })

  it('Login menggunakan email valid dengan kombinasi huruf besar dan kecil', () => { // Login Success uppercase and lowercase Email

    loginElement.inputUsername('SuPeR_UseR@gmail.com')
    loginElement.inputPassword('password')
    loginElement.BTNlogin()
    cy.wait(1000)
    cy.contains('PERFORMATRIX').should('be.visible')
  })

  // Login Failed | Negative Cases

  it('Login menggunakan password dengan kombinasi huruf besar dan kecil', () => {  // login failed uppercase and lowercase password

    loginElement.inputUsername('super_user@gmail.com')
    loginElement.inputPassword('PasSworD')
    loginElement.BTNlogin()
    cy.contains('These credentials do not match our records').should('be.visible')
  })

  it('Login menggunakan email dan password yang salah', () => {                   // Login menggunakan email dan password yang salah

    loginElement.inputUsername('super_admin@gmail.com')
    loginElement.inputPassword('PassworD')
    loginElement.BTNlogin()
    cy.wait(1000)
    cy.contains('These credentials do not match our records').should('be.visible')
  })

  it('Login menggunakan email yang salah', () => {                              // Login menggunakan email yang salah

    loginElement.inputUsername('super_admin@gmail.com')
    loginElement.inputPassword('password')
    loginElement.BTNlogin()
    cy.contains('These credentials do not match our records').should('be.visible')
  })

  it('Login menggunakan password yang salah', () => {                           // Login menggunakan password yang salah

    loginElement.inputUsername('super_user@gmail.com')
    loginElement.inputPassword('superadmin')
    loginElement.BTNlogin()
    cy.contains('These credentials do not match our records').should('be.visible')
  })

  it('Login menggunakan email dan password yang kosong', () => {              // Email & Password Kosong

    loginElement.BTNlogin()
    cy.contains('email required').should('be.visible')
    cy.contains('password required').should('be.visible')
    cy.wait(2000)
  })

  it('Login menggunakan email yang kosong', () => {                          // Email Kosong
    loginElement.inputPassword('password')
    loginElement.BTNlogin()

    cy.contains('email required').should('be.visible')
    cy.wait(2000)
  })

  it('Login menggunakan password yang kosong', () => {                        // password Kosong
    loginElement.inputUsername('super_user@gmail.com')
    loginElement.BTNlogin()

    cy.contains('password required').should('be.visible')
    cy.wait(2000)
  })

  it('Login menggunakan password yang kurang dari 6 karakter', () => {         // Login dengan password kurang dari 6 karakter
    loginElement.inputUsername('super_user@gmail.com')
    loginElement.inputPassword('pass')
    loginElement.BTNlogin()

    cy.contains('password must be at least 6 characters').should('be.visible')
    cy.wait(2000)
  })

  it('Percobaan login dengan SQL Injection email dan password', () => {                         // Percobaan login dengan SQL Injection Email & Password
    loginElement.inputUsername("' OR '1'='1' --")
    loginElement.inputPassword("' OR '1'='1' --")
    loginElement.BTNlogin()

    cy.contains('not a valid email').should('be.visible')
    cy.contains('not a valid email').should('be.visible')
    cy.wait(2000)
  })

  it('Percobaan login dengan SQL Injection email', () => {                         // Percobaan login dengan SQL Injection Email
    loginElement.inputUsername("' OR '1'='1' --")
    loginElement.inputPassword('password')
    loginElement.BTNlogin()

    cy.contains('not a valid email').should('be.visible')
    cy.wait(2000)
  })

  it('Percobaan login dengan SQL Injection password', () => {                         // Percobaan login dengan SQL Injection Password
    loginElement.inputUsername('uper_user@gmail.com')
    loginElement.inputPassword("' OR '1'='1' --")
    loginElement.BTNlogin()
    cy.contains('These credentials do not match our records').should('be.visible')
    // cy.get('#toast-1-description')
    cy.wait(2000)
  })

})
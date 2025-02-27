import loginElement from "../support/loginElement"


describe('Login', () => {

  // Login Success | Positive Cases 

  it('Login dengan email dan password valid', () => {                              // Login Success
    cy.visit('https://pxdemo.geekgarden.id/')
    cy.get(loginElement.email).type('super_user@gmail.com')
    cy.get(loginElement.pass).type('password')
    cy.get(loginElement.logInButton).click()
    cy.contains('PERFORMATRIX').should('be.visible')
  })

  it('Login menggunakan email valid dengan kombinasi huruf besar dan kecil', () => { // Login Success uppercase and lowercase Email
    cy.visit('https://pxdemo.geekgarden.id/')
    cy.get(loginElement.email).type('SuPeR_UseR@gmail.com')
    cy.get(loginElement.pass).type('password')
    cy.get(loginElement.logInButton).click()
    cy.contains('PERFORMATRIX').should('be.visible')
  })

  // Login Failed | Negative Cases

  it('Login menggunakan password dengan kombinasi huruf besar dan kecil', () => {  // login failed uppercase and lowercase password
    cy.visit('https://pxdemo.geekgarden.id/')
    cy.get(loginElement.email).type('super_user@gmail.com')
    cy.get(loginElement.pass).type('PasSworD')
    cy.get(loginElement.logInButton).click()
    cy.contains('These credentials do not match our records').should('be.visible')
  })

  it('Login menggunakan email dan password yang salah', () => {
    cy.visit('https://pxdemo.geekgarden.id/')
    cy.get(loginElement.email).type('super_admin@gmail.com')
    cy.get(loginElement.pass).type('Password')
    cy.get(loginElement.logInButton).click()
    cy.contains('These credentials do not match our records').should('be.visible')
  })

  it('Login menggunakan email yang salah', () => {
    cy.visit('https://pxdemo.geekgarden.id/')
    cy.get(loginElement.email).type('super_admin@gmail.com')
    cy.get(loginElement.pass).type('password')
    cy.get(loginElement.logInButton).click()
    cy.contains('These credentials do not match our records').should('be.visible')
  })

  it('Login menggunakan password yang salah', () => {
    cy.visit('https://pxdemo.geekgarden.id/')
    cy.get(loginElement.email).type('super_user@gmail.com')
    cy.get(loginElement.pass).type('superadmin')
    cy.get(loginElement.logInButton).click()
    cy.contains('password must be at least 6 characters').should('be.visible')
  })

  it('Login menggunakan email dan password yang kosong', () => {                  // Email & Password Kosong
    cy.visit('https://pxdemo.geekgarden.id/')
    cy.get(loginElement.logInButton).click()
    cy.contains('email required').should('be.visible')
    cy.contains('password required').should('be.visible')
  })

  it('Login menggunakan email yang kosong', () => {                                 // Email Kosong
    cy.visit('https://pxdemo.geekgarden.id/')
    cy.get(loginElement.pass).type('password')
    cy.get(loginElement.logInButton).click()
    cy.contains('email required').should('be.visible')
  })

  it('Login menggunakan password yang kosong', () => {                                 // password Kosong
    cy.visit('https://pxdemo.geekgarden.id/')
    cy.get(loginElement.email).type('super_user@gmail.com')
    cy.get(loginElement.logInButton).click()
    cy.contains('password required').should('be.visible')
  })

  it('Login menggunakan password yang kurang dari 6 karakter', () => {
    cy.visit('https://pxdemo.geekgarden.id/')
    cy.get(loginElement.email).type('super_user@gmail.com')
    cy.get(loginElement.pass).type('PASS')
    cy.get(loginElement.logInButton).click()
    cy.contains('password must be at least 6 characters').should('be.visible')
  })

})
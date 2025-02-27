import loginElement from "../support/loginElement"


describe('Login', () => {

    // Login Success | Positive Cases 

    it('Login dengan email dan password valid', () => {                              // Login Success
        cy.visit('https://pxdemo.geekgarden.id/')

        // Login
        cy.get(loginElement.email).type('super_user@gmail.com')
        cy.get(loginElement.pass).type('password')
        cy.get(loginElement.logInButton).click()

        // 1. Dashboard
        cy.contains('PERFORMATRIX').should('be.visible')
        cy.contains('HOME').should('be.visible')
        cy.contains('Sudah Presensi').should('be.visible')
        cy.contains('Belum Presensi').should('be.visible')
        cy.get('.css-mmj810 > :nth-child(3)').click()
        cy.wait(500)

        // Presensi
        cy.contains('Presensi').should('be.visible')
        cy.get('.css-1wzo0ow > .chakra-text').click()
        cy.contains('Sudah Presensi').should('be.visible')
        cy.contains('Belum Presensi').should('be.visible')
        cy.wait(500)

        // Izin
        cy.get('.css-1ilq6rg').click()
        cy.contains('Cuti Tahunan :').should('be.visible')
        cy.contains('WFH :').should('be.visible')
        cy.contains('Sakit :').should('be.visible')
        cy.contains('Pulang Lebih Awal :').should('be.visible')
        cy.contains('Setengah Hari :').should('be.visible')
        cy.contains('Tidak Hadir :').should('be.visible')
        cy.wait(500)

        // PENDING APPROVAL
        cy.contains('PENDING APPROVAL').should('be.visible')
        cy.get('.chakra-select').select('Cuti')
        cy.get(':nth-child(6) > .chakra-button').click()
        cy.get(':nth-child(3) > .css-q2nun9 > .chakra-text').click()

        cy.get('.chakra-select').select('Lembur')
        cy.get('.chakra-select').select('Sakit')

        cy.get('.chakra-select').select('WFH')
        cy.get(':nth-child(5) > .chakra-button').click()
        cy.get(':nth-child(3) > .css-q2nun9 > .chakra-text').click()

        cy.get('.chakra-select').select('Pulang Lebih Awal')
        cy.get('.chakra-select').select('Setengah Hari')
        cy.wait(500)

    })
})
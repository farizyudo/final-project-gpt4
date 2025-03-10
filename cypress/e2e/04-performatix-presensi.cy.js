import loginElement from "../support/loginElement"


describe('Contoh', () => {
    it('Login menggunakan password yang kosong', () => {

        // Start Login
        cy.visit('https://pxdemo.geekgarden.id/')
        cy.get(loginElement.email).type('super_user@gmail.com')
        cy.get(loginElement.pass).type('password')
        cy.get(loginElement.logInButton).click()
        // End Login


        // 3. Presensi
        cy.get(':nth-child(4) > .css-q2nun9 > .chakra-text').click()

        // 3.1 OnSite
        cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(1) > .css-raryvg > .chakra-text').click()
        // Export 
        cy.get('.css-eqb2pg > .chakra-button').click()
        cy.contains('Terjadi Kesalahan Saat Export').should('be.visible')

        // Klik Atas 5x -> klik bawah 1x
        cy.get('.css-1jj9yua > :nth-child(1)').click()
        cy.get('.css-1jj9yua > :nth-child(1)').click()
        cy.get('.css-1jj9yua > :nth-child(1)').click()
        cy.get('.css-1jj9yua > :nth-child(1)').click()
        cy.get('.css-1jj9yua > :nth-child(1)').click()
        cy.get('.css-1jj9yua > :nth-child(2)').click()

        //Select 
        cy.get('.chakra-select').select('Keterangan')
        cy.get('.chakra-select').select('Terlambat')
        cy.get('.chakra-select').select('Tidak Terlambat')

        //Search
        cy.get('.css-1jke4yk > .chakra-input')
        cy.get('.css-1jke4yk > .chakra-input') // Dapatkan input search
            .type('Super User{enter}')

        // 3.2 Freelancer
        cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(2)').click()

        // Export 
        cy.get('.css-1bp8de1 > .chakra-button').click()
        cy.contains('Terjadi Kesalahan Saat Export').should('be.visible')

        // Klik atas 2x klik bawah 1x
        cy.get('.css-1jj9yua > :nth-child(1)').click()
        cy.get('.css-1jj9yua > :nth-child(1)').click()
        cy.get('.css-1jj9yua > :nth-child(2)').click()

        //Select 
        cy.get('.chakra-select').select('All')
        cy.get('.chakra-select').select('Terlambat')
        cy.get('.chakra-select').select('Tidak Terlambat')

        //Search
        cy.get('.css-1a4uaa8 > .css-79elbk > .chakra-input')
            .type('Super User{enter}')
        cy.wait(500)

        // 3.3 Tidak Hadir
        cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(3)').click()

        // Klik atas 2x klik bawah 1x
        cy.get('.css-1jj9yua > :nth-child(1)').click()
        cy.get('.css-1jj9yua > :nth-child(1)').click()
        cy.get('.css-1jj9yua > :nth-child(2)').click()

        //Search
        cy.get('.css-1a4uaa8 > .css-79elbk > .chakra-input')
            .type('Super User{enter}')
        cy.wait(500)
    })
})
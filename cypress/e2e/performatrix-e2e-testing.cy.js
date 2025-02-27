import loginElement from "../support/loginElement"


describe('Performatrix 2E2 Testing', () => {

    // Login Success | Positive Cases 

    it('Login dengan email dan password valid', () => {                              // Login Success
        cy.visit('https://pxdemo.geekgarden.id/')

        // Login
        cy.get(loginElement.email).type('super_user@gmail.com')
        cy.get(loginElement.pass).type('password')
        cy.get(loginElement.logInButton).click()
        cy.wait(500)

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

        // PENDING APPROVAL Select
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

        // 2. Profile
        cy.get('.chakra-avatar__img').click() // Klik Avatar
        cy.contains('Profile').click()   // Klik Profile
        cy.get('.css-t72zj9 > :nth-child(1) > .chakra-button').click()
        cy.wait(500)

        // 3. Presensi
        // Buka Presensi
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
        cy.wait(500)

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
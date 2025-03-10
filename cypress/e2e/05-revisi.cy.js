import loginElement from "../support/loginElement";
import logoutElement from "../support/logoutElement";
const userData = require('../fixtures/user.json')

describe('e2e revisi', () => {

    beforeEach(() => {
        cy.visit('https://pxdemo.geekgarden.id/')
        loginElement.inputUsername(userData.valid_email)
        loginElement.inputPassword(userData.valid_pass)
        loginElement.BTNlogin()
    })

    // after(() => {
    //     logoutElement.berhasilLogout()
    // })

    // Revisi Umum
    it('Menampilkan Data Revisi Sesuai dengan Jenis yang Dipilih', () => {
        cy.get(':nth-child(6) > .css-q2nun9 > .chakra-text').click()        //klik revisi
        cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(1)').click() // revisi presensi
        cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(2)').click() // revisi cuti
    });


    it('Menampilkan Pesan "Belum Ada Data" Jika Tidak Ada Revisi', () => {
        cy.get(':nth-child(6) > .css-q2nun9 > .chakra-text').click() //klik revisi
        cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(1)').click() // revisi presensi
        cy.contains('Belum Ada Data').should('be.visible') // cek "Belum Ada Data"
    });

    it('Menampilkan Perubahan Menu Berjalan Lancar Tanpa Reload Berlebihan', () => {
        cy.get(':nth-child(6) > .css-q2nun9 > .chakra-text').click()        //klik revisi
        cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(1)').click() // revisi presensi
        cy.wait(1000)
        cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(2)').click() // revisi cuti
        cy.wait(1000)
        cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(1)').click() // revisi presensi
        cy.wait(1000)
        cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(2)').click() // revisi cuti
        cy.wait(1000)
        cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(1)').click() // revisi presensi
        cy.wait(1000)
        cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(2)').click() // revisi cuti
    });


    // Revisi Presensi
    describe('Revisi Presensi', () => {

        beforeEach(() => {
            cy.get(':nth-child(6) > .css-q2nun9 > .chakra-text').click()        //klik revisi
            cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(1)').click() // revisi presensi
        })

        it('TS.Rev.004.004 : Admin mengganti batas data perhalaman / pagination', () => {

            // Klik Atas 5x -> klik bawah 1x
            cy.get('.css-1jj9yua > :nth-child(1)').click()
            cy.get('.css-1jj9yua > :nth-child(1)').click()
            cy.get('.css-1jj9yua > :nth-child(1)').click()
            cy.get('.css-1jj9yua > :nth-child(1)').click()
            cy.get('.css-1jj9yua > :nth-child(1)').click()
            cy.get('.css-1jj9yua > :nth-child(2)').click()
            cy.contains('25').should('be.visible') // cek "25"
        });
        // Tanggal
        it('TS.Rev.004.005 : Admin mengganti tanggal mulai dan tanggal akhir untuk melakukan filter pada data', () => {
            // Tanggal Mulai
            cy.get(':nth-child(2) > .css-79elbk > .chakra-input').type('2025-03-11')
            cy.get(':nth-child(2) > .css-79elbk > .chakra-input').should('have.value', '2025-03-11')

            // Tanggal Akhir
            cy.get(':nth-child(3) > .css-79elbk > .chakra-input').type('2025-03-11')
            cy.get(':nth-child(3) > .css-79elbk > .chakra-input').should('have.value', '2025-03-11')
        });

        // Search
        it('TS.Rev.004.006 : Admin melakukan search dengan kata kunci yang valid', () => {
            cy.get('.css-1a4uaa8 > .css-79elbk > .chakra-input').type('Super User{enter}')
            cy.get('.css-1a4uaa8 > .css-79elbk > .chakra-input').should('have.value', 'Super User')

        });

    })


    // Revisi Cuti
    describe('Revisi Cuti', () => {

        beforeEach(() => {
            cy.get(':nth-child(6) > .css-q2nun9 > .chakra-text').click()        //klik revisi
            cy.get('[style="overflow: hidden; display: block; opacity: 1; height: auto;"] > .css-6x8sxj > :nth-child(2)').click() // revisi cuti
        })

        it('TS.Rev.004.011 : Admin mengganti batas data perhalaman / pagination', () => {

            // Klik Atas 5x -> klik bawah 1x
            cy.get('.css-1jj9yua > :nth-child(1)').click()
            cy.get('.css-1jj9yua > :nth-child(1)').click()
            cy.get('.css-1jj9yua > :nth-child(1)').click()
            cy.get('.css-1jj9yua > :nth-child(1)').click()
            cy.get('.css-1jj9yua > :nth-child(1)').click()
            cy.get('.css-1jj9yua > :nth-child(2)').click()
            cy.contains('25').should('be.visible') // cek "25"
        });
        // Tanggal
        it.only('TS.Rev.004.012 : Admin mengganti tanggal mulai dan tanggal akhir untuk melakukan filter pada data', () => {
            // Tanggal Mulai
            cy.get(':nth-child(2) > .css-79elbk > .chakra-input').type('2025-03-11')
            cy.get(':nth-child(2) > .css-79elbk > .chakra-input').should('have.value', '2025-03-11')

            // Tanggal Akhir
            cy.get(':nth-child(3) > .css-79elbk > .chakra-input').type('2025-03-11')
            cy.get(':nth-child(3) > .css-79elbk > .chakra-input').should('have.value', '2025-03-11')
        });

        // Search
        it.only('TS.Rev.004.013 : Admin melakukan search dengan kata kunci yang valid', () => {
            cy.get('.css-1a4uaa8 > .css-79elbk > .chakra-input').type('Super User{enter}')
            cy.get('.css-1a4uaa8 > .css-79elbk > .chakra-input').should('have.value', 'Super User')

        });
    })

})
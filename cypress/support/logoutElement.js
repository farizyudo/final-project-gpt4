class logoutElement {
    klikProfile = '.chakra-avatar__img'
    logout = '#menu-list-\\:rg\\:-menuitem-\\:ri\\:'
    ya = '.css-18zw69y'
    tidak = '.css-ez23ye'


    berhasilLogout() {
        cy.get(this.klikProfile)
            .should('be.visible') // Pastikan elemen profile terlihat
            .click()
        // cy.wait(1000)
        cy.get(this.logout)
            .should('be.visible') // Pastikan elemen logout terlihat
            .click()
        cy.get(this.ya)
            .should('be.visible') // Pastikan elemen logout terlihat
            .click()
    }

    batalLogout() {
        cy.get(this.klikProfile)
            .should('be.visible') // Pastikan elemen profile terlihat
            .click()
        cy.get(this.logout)
            .should('be.visible') // Pastikan elemen logout terlihat
            .click()
        cy.get(this.tidak)
            .should('be.visible') // Pastikan elemen logout terlihat
            .click()
    }


}
export default new logoutElement()
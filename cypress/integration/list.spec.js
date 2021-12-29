describe('List test', () => {
    it('List should be displayed', () => {
        cy.visit('127.0.0.1:5500/list.html');
        cy.get('.card').first().find('.card-role').should('contain.text', 'Builds');
        cy.get('.card').first().find('h5.card-text').should('contain.text', 'Magic is power');
        cy.get('.card').first().find('p.card-text').should('contain.text', 'Ability power items only');
    });
});
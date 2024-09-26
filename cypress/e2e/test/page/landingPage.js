class landingPage{
    NavigateToUrl(){
        return cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/');
    }
    clickAddUserButton(){
        return cy.contains('Add User').click();
    }
    enterSearchName(name){
        return cy.get('input[placeholder="Search"]').type(name);
    }
    enterSearchNameField(name){
        return cy.get('input[placeholder="Search"]')
    }
    checkUserShowsOnSearch(name){
        cy.get('tr').contains(name).should('be.visible');
    }
    deleteUser(name){
        cy.get('td.smart-table-data-cell').find('.btn.btn-link').last().click();
    }
    verifyUserDeleted(name){
        cy.get('tbody').contains(name).should('not.exist');
    }
    confirmDelete(){
        cy.get('.btn-primary').click()
    }
}
export default landingPage;
class userDetailsPage{
enterFirstname(){
    return cy.get('[name="FirstName"]').type('John');
}

enterLastname(){
    return cy.get('input[name="LastName"]').type('Doe');
}

enterUsername(){
    return cy.get('input[name="UserName"]').type('Doe');
}
enterPassword(){
    return cy.get('input[name="Password"]').type('Doe');
}
selectAACompany(){
    return cy.get('input[type="radio"]').eq(0).check()
}

selectRole(){
    return cy.get('[name="RoleId"]').select('1')
}

enterEmail(){
    return cy.get('input[name="Email"]').type('email@email.com')
}
enterCellphone(){
    return cy.get('input[name="Mobilephone"]').type('1234567890')
}
clickSaveButton(){
    return cy.get('button').contains('Save').click();
}
}
export default userDetailsPage;
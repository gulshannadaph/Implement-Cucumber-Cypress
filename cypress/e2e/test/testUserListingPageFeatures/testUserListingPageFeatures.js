import { Given, Then , When} from "@badeball/cypress-cucumber-preprocessor";
import landingPage from '../page/landingPage';
import userDetailsPage from '../page/userDetailsPage';
const landingPageInstance = new landingPage();
const userDetailsPageInstance = new userDetailsPage();

Given('Navigate to url', () => {
    landingPageInstance.NavigateToUrl();
});

When('user clicks on add user button', () => {
    landingPageInstance.clickAddUserButton();
});
When('user enters user details', () => {
    userDetailsPageInstance.enterFirstname();
    userDetailsPageInstance.enterLastname();
    userDetailsPageInstance.enterUsername();
    userDetailsPageInstance.enterPassword();
    userDetailsPageInstance.selectAACompany();
    userDetailsPageInstance.selectRole();
    userDetailsPageInstance.enterEmail();
    userDetailsPageInstance.enterCellphone();


});

When('user clicks on save button', () => {
    userDetailsPageInstance.clickSaveButton();
    landingPageInstance.enterSearchName('John');
    landingPageInstance.checkUserShowsOnSearch('John');
});

Then('user verifies user is added', () => {
    landingPageInstance.enterSearchNameField().clear();
});
Then ('user searched Novak',() => {
    landingPageInstance.enterSearchName('Novak');
})
Then('user deletes user', () => {
landingPageInstance.deleteUser('Novak');
landingPageInstance.confirmDelete();
})
Then('user verifies user is deleted', () => {
  landingPageInstance.verifyUserDeleted('Novak');  
})

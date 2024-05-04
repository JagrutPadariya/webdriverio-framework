import BasePage from "./base.page";
import dataGenerator from "../../../utils/data-generator";

class ContactUsPage extends BasePage {
  open() {
    return super.open("/Contact-Us/contactus.html"); //super is used to call the 'open()' method
  }

  get inputFirstName() {
    return $('//*[@name="first_name"]');
  }

  get inputLastName() {
    return $('//*[@name="last_name"]');
  }

  get inputEmailAddress() {
    return $('//*[@name="email"]');
  }

  get inputComments() {
    return $('//*[@name="message"]');
  }

  get submitButton() {
    return $('//input[@value="SUBMIT"]');
  }

  get successfulSubmissionHeader() {
    return $("#contact_reply > h1");
  }

  get unsuccessfulSubmissionHeader() {
    return $("body");
  }

  async submitForm(firstName, lastName, emailAddress, message) {
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputEmailAddress.setValue(emailAddress);
    await this.inputComments.setValue(message);
    await this.submitButton.click();
  }

  async submitForm_UsingRandomData(firstName, lastName) {
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputEmailAddress.setValue(
      "AutoEmail_" + dataGenerator.generateRandomString() + "@gmail.com"
    );
    await this.inputComments.setValue(
      "Random Message" + dataGenerator.generateRandomString()
    );
    await browser.pause(4000);
    await this.submitButton.click();
  }
}
export default new ContactUsPage();

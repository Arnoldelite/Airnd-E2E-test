// spec.js
describe('Protractor Demo App', function() {
    var close = element(by.buttonText('Close'));
    var cont = element(by.buttonText('Continue!'));
    var Account = element(by.partialLinkText('Account'));
    var Delivery = element(by.partialLinkText('Delivery'));
    var partner = element(by.repeater('partner in partners').row(0));
    var EC = protractor.ExpectedConditions;
    var logOut = element(by.partialLinkText('Log Out'));
    beforeEach(function() {
    //browser.ignoreSynchronization = true;
    browser.get('https://airnd-website.firebaseapp.com/#/app/home');
  });

  it('should load airnd homepage', function() {
      browser.wait(EC.elementToBeClickable(close), 10000);
      close.click();
      browser.wait(EC.elementToBeClickable(Account), 10000);
      Account.click();
      //browser.wait(EC.visibilityOf($('Log In')), 5000);
      element(by.model('loginData.username')).sendKeys('arnold@airnd.ca');
      element(by.model('loginData.password')).sendKeys('airnd');
      element(by.buttonText('Log In')).click();
      browser.wait(EC.elementToBeClickable(cont), 15000);
      cont.click();
      browser.wait(EC.visibilityOf(partner), 15000);
      partner.click();
      browser.wait(EC.elementToBeClickable(Account), 10000);
      Account.click();
      browser.wait(EC.visibilityOf(logOut), 10000);
      logOut.click();
      
      
  });
    

});

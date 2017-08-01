import { AngularPwappsHelloMobilePage } from './app.po';

describe('angular-pwapps-hello-mobile App', () => {
  let page: AngularPwappsHelloMobilePage;

  beforeEach(() => {
    page = new AngularPwappsHelloMobilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

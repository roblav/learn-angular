import { FirstFormPage } from './app.po';

describe('first-form App', function() {
  let page: FirstFormPage;

  beforeEach(() => {
    page = new FirstFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { FormsApp01Page } from './app.po';

describe('forms-app01 App', function() {
  let page: FormsApp01Page;

  beforeEach(() => {
    page = new FormsApp01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

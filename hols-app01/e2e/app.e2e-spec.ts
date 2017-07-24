import { NgMd01Page } from './app.po';

describe('ng-md01 App', () => {
  let page: NgMd01Page;

  beforeEach(() => {
    page = new NgMd01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

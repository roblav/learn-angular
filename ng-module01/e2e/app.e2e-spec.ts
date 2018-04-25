import { NgModule01Page } from './app.po';

describe('ng-module01 App', () => {
  let page: NgModule01Page;

  beforeEach(() => {
    page = new NgModule01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { HolidayAppPage } from './app.po';

describe('holiday-app App', () => {
  let page: HolidayAppPage;

  beforeEach(() => {
    page = new HolidayAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

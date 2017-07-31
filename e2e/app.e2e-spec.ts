import { RestDataGraphicsDemoPage } from './app.po';

describe('rest-data-graphics-demo App', () => {
  let page: RestDataGraphicsDemoPage;

  beforeEach(() => {
    page = new RestDataGraphicsDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

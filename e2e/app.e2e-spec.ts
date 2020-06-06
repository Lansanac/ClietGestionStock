import { ClietGestionStockPage } from './app.po';

describe('cliet-gestion-stock App', function() {
  let page: ClietGestionStockPage;

  beforeEach(() => {
    page = new ClietGestionStockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { SoccerPage } from './app.po';

describe('soccer App', function() {
  let page: SoccerPage;

  beforeEach(() => {
    page = new SoccerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

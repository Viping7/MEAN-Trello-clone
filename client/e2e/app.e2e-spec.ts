import { TrelloClonePage } from './app.po';

describe('trello-clone App', () => {
  let page: TrelloClonePage;

  beforeEach(() => {
    page = new TrelloClonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

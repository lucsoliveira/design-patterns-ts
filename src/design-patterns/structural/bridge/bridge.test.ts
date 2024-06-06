import {
  ListItemMedias,
  ListItemOnlyTexts,
  PostContentType,
  VideoContentType,
} from '.';

describe('bridge', () => {
  test('should render only text contents', () => {
    const content = [new PostContentType('Post Name', 'https://link.com')];

    const listItems = content.map((i) => new ListItemOnlyTexts(i).render());

    expect(listItems).toStrictEqual(['<li><div>Post Name</div></li>']);
  });

  test('should render only media contents', () => {
    const content = [
      new VideoContentType(
        'Post Name',
        'http://videothumb.com/image.jpg',
        'Legend Image',
        'https://link.com'
      ),
    ];

    const listItems = content.map((i) => new ListItemMedias(i).render());

    expect(listItems).toStrictEqual([
      "<li><div><img src='http://videothumb.com/image.jpg' alt='Legend Image' /></div></li>",
    ]);
  });

  test('should render both as text', () => {
    const content = [
      new PostContentType('Post Name', 'https://link.com'),
      new VideoContentType(
        'Video Name',
        'http://videothumb.com/image.jpg',
        'Legend Image',
        'https://link.com'
      ),
    ];

    const listItems = content.map((i) => new ListItemOnlyTexts(i).render());

    expect(listItems).toStrictEqual([
      '<li><div>Post Name</div></li>',
      '<li><div>Video Name</div></li>',
    ]);
  });
});

interface ContentType {
  render(): {
    title: string;
    caption?: string;
    thumb?: string;
    link: string;
  };
}

abstract class ListItem {
  constructor(protected contentType: ContentType) {}
  abstract render(): string;
}

export class ListItemMedias extends ListItem {
  render() {
    return `<li><div><img src='${this.contentType.render().thumb}' alt='${
      this.contentType.render().caption
    }' /></div></li>`;
  }
}

export class ListItemOnlyTexts extends ListItem {
  render() {
    return `<li><div>${this.contentType.render().title}</div></li>`;
  }
}

export class PostContentType implements ContentType {
  constructor(readonly title: string, readonly link: string) {}

  render() {
    return {
      title: this.title,
      link: this.link,
    };
  }
}

export class VideoContentType implements ContentType {
  constructor(
    readonly title: string,
    readonly thumb: string,
    readonly caption: string,
    readonly link: string
  ) {}

  render() {
    return {
      title: this.title,
      caption: this.caption,
      thumb: this.thumb,
      link: this.link,
    };
  }
}

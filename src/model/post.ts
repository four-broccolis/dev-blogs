export class Post {
  title!: string;
  description!: string;
  link!: string;
  name!: string;
  published!: string;
  platform!: string;
  topic!: string;

  static sample: Post = {
    description: "66",
    link: "https://bepolar.tistory.com/71",
    name: "name",
    platform: "Tistory",
    published: "Tue, 15 Feb 2022 18:39:14 GMT",
    title: "66",
    topic: "웹개발|게임개발",
  };
}

export class Post {
  title!: string;
  description!: string;
  link!: string;
  name!: string;
  published!: string;
  platform!: string;
  topic!: string;

  static sample: Post = {
    description:
      "안녕 나는 내용이야 안녕 나는 내용이야 안녕 나는 내용이야안녕 나는 내용이야 안녕 나는 내용이야..안녕 나는 내용이야 안녕 나는 내용이야 안녕 나는 내용이야...",
    link: "https://bepolar.tistory.com/71",
    name: "name",
    platform: "Tistory",
    published: "Tue, 15 Feb 2022 18:39:14 GMT",
    title: "[JavaScript] 동기&비동기&콜백함수",
    topic: "웹개발|게임개발",
  };
}

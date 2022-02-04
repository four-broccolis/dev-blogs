export class Post {
  title!: string;
  body!: string;
  createdAt!: Date;
  platform!: string;

  static sample: Post = {
    title: "대규모 서비스에게 바라는 3가지 - 데이터 중심 애플리케이션 설계 1장",
    body: "데이터 중심 애플리케이션 설계, 마틴 클레프만 지음. OREILLY.\n서비스의 중심이 데이터가 되고 있다.\n점점 커지는 데이터 관리의 중요성\n트위터, 유투브, 넷플릭스, 인스타그램. 전 세계 사람들이 사용하는 대규모 서비스의 공통점은 데이터가 곧 경쟁력이 된다는 점이다. 데이터로부터 새로운 발견을 하고, 그 발견을 제폼에 녹여내서 사용자에게 유용한 서비스를 제공한다.\n다들 말하는 유투브의 알고리즘도, 넷플릭스의 추천 영상도 모두 데이터에서 나온다.",
    createdAt: new Date("2022-02-04"),
    platform: "velog",
  };
}

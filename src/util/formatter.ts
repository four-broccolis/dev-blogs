enum KrDayOfWeek {
  "일",
  "월",
  "화",
  "수",
  "목",
  "금",
  "토",
}

export default class Formatter {
  static formatDate(date: Date): string {
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    const dayOfMonth: number = date.getDate();
    const dayOfWeek: number = date.getDay();
    const dateString: string = `${year}년 ${month}월 ${dayOfMonth}일 ${KrDayOfWeek[dayOfWeek]}요일`;
    return dateString;
  }
}

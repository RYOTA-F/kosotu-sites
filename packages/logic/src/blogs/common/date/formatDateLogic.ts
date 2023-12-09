import dayjs from 'dayjs'

/**
 * 日付フォーマット変換ロジック
 */
export class DateFormatLogic {
  constructor(private date: string) {}

  /**
   * YYYY-MM-DDに変換
   */
  formatYYYYMMDD() {
    return dayjs(this.date).format('YYYY-MM-DD')
  }
}

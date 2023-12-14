import dayjs from 'dayjs'
import { DateFormatLogicArgs } from './formatDateLogic.types'

/**
 * 日付フォーマット変換ロジック
 */
export class DateFormatLogic {
  private readonly date: DateFormatLogicArgs['date']

  constructor(private readonly args: DateFormatLogicArgs) {
    this.date = this.args.date
  }

  /**
   * YYYY-MM-DDに変換
   */
  formatYYYYMMDD() {
    return dayjs(this.date).format('YYYY-MM-DD')
  }
}

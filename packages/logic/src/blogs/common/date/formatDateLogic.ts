import dayjs from 'dayjs'
import { DateFormatLogicArgs } from './formatDateLogic.types'

/**
 * 日付フォーマット変換 Logic
 */
export class DateFormatLogic {
  private readonly date: DateFormatLogicArgs['date']

  constructor(private readonly args: DateFormatLogicArgs) {
    this.date = this.args.date
  }

  /**
   * YYYY-MM-DD変換を実行
   */
  formatYYYYMMDD(): string {
    return dayjs(this.date).format('YYYY-MM-DD')
  }
}

import { TagPathsLogicArgs, TagPathsLogicResponse } from './tagPaths.types'

/**
 * タグのパスを生成する Logic
 */
export class TagPathsLogic {
  private readonly tags: TagPathsLogicArgs['tags']

  constructor(private readonly args: TagPathsLogicArgs) {
    this.tags = this.args.tags
  }

  /**
   * パス生成を実行
   */
  execute(): TagPathsLogicResponse {
    return this.tags.map((tag) => ({ id: tag.id }))
  }
}

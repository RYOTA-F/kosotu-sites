import { TagPathsLogicArgs, TagPathsLogicResponse } from './tagPaths.types'

export class TagPathsLogic {
  private readonly tags: TagPathsLogicArgs['tags']

  constructor(private readonly args: TagPathsLogicArgs) {
    this.tags = this.args.tags
  }

  execute(): TagPathsLogicResponse {
    return this.tags.map((tag) => ({ id: tag.id }))
  }
}

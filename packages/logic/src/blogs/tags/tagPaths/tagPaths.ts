import { TagPathsLogicArgs } from './tagPaths.types'

export class TagPathsLogic {
  private readonly tags: TagPathsLogicArgs['tags']

  constructor(private readonly args: TagPathsLogicArgs) {
    this.tags = this.args.tags
  }

  execute() {
    return this.tags.map((tag) => ({ id: tag.id }))
  }
}

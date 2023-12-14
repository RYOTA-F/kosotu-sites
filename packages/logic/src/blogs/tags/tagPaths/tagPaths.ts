import { Tag } from 'type/microCMS'

export class TagPathsLogic {
  constructor(private tags: Tag[]) {}

  execute() {
    return this.tags.map((tag) => ({ id: tag.id }))
  }
}

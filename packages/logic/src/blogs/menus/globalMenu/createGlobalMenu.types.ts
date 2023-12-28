import { Category, GlobalMenu } from 'type/microCMS'

export interface CreateGlobalMenuLogicArgs {
  categories: Category[]
}

export interface CreateGlobalMenuLogicResponse {
  globalMenu: GlobalMenu[]
}

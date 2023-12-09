import { ICategory } from 'type/microCMS'

export interface CategoryItemProps {
  category: ICategory | ICategoryItemParent
}

interface ICategoryItemParent {
  id: string
  name: string
}

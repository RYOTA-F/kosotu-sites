import { Category } from 'type/microCMS'

export interface CategoryItemProps {
  category: Category | CategoryItemParent
}

interface CategoryItemParent {
  id: string
  name: string
}

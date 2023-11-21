'use client'

import { useState } from 'react'
import { ChevronRightSvg } from '../../elements/Svg'
import { AccordionMenuProps } from './AccordionMenu.types'
import { ARIA_LABEL } from './AccordionMenu.const'
import style from './AccordionMenu.module.css'

export function AccordionMenu({ label, path, menuList }: AccordionMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={style.menuContainer}
      aria-label={ARIA_LABEL.ACCORDION_MENU}
    >
      <a href={path} className={style.menuLink}>
        {label}
      </a>
      {isOpen && menuList.length && (
        <ul className={style.subMenu} aria-label={ARIA_LABEL.MENU_CONTAINER}>
          {menuList.map((v) => (
            <li key={v.label} className={style.subMenuItem}>
              <a href={v.path} className={style.subMenuLink}>
                <span className={style.icon}>
                  <ChevronRightSvg height={12} width={12} />
                </span>
                {v.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

import { ProfileInfoProps } from './ProfileInfo.types'
import { ARIA_LABEL, DECORATION, BUTTON_LABEL } from './ProfileInfo.const'
import style from './ProfileInfo.module.css'
import { LinkButton } from '../../../elements/LinkButton'
import { TwitterSvg } from '../../../elements/Svg'

export function ProfileInfo({
  profilePath,
  image,
  author,
  descriptions,
  twitter,
}: ProfileInfoProps) {
  return (
    <div className={style.profileInfo} aria-label={ARIA_LABEL.PROFILE_INFO}>
      <div className={style.imageContainer}>
        <a href={profilePath}>
          {/* eslint-disable-next-line */}
          <img src={image.path} alt={image.alt} className={style.image} />
        </a>
      </div>
      <span className={style.authorName}>{author.name}</span>
      <span className={style.authorCopy}>{author.copy}</span>
      <div className={style.descriptionContainer}>
        {descriptions.map((description) => (
          <ul key={description.label} className={style.descriptionList}>
            <li>
              {DECORATION.LIST_LABEL}
              {description.label}
              <ul className={style.descriptionItems}>
                {description.items.map((descriptionItem) => (
                  <li key={descriptionItem} className={style.descriptionItem}>
                    {DECORATION.LIST_ITEM}
                    {descriptionItem}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ))}
      </div>
      <div className={style.buttonContainer}>
        <LinkButton href={profilePath}>{BUTTON_LABEL}</LinkButton>
      </div>
      <div className={style.twitterContainer}>
        <a href={twitter.url} target="_blank">
          <TwitterSvg
            height={twitter.height}
            width={twitter.width}
            color={twitter.color}
          />
        </a>
      </div>
    </div>
  )
}

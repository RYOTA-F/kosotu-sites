import { H1, H2 } from 'ui/components/elements/Heading'
import { Label } from 'ui/components/elements/Label'
import { List } from 'ui/components/blogs/common/List'
import { PROFILE } from './profile.const'

export default function ProfilePage() {
  return (
    <section className="w-full text-[#4a5567] whitespace-pre-line">
      {/* タイトル */}
      <H1>{PROFILE.TITLE}</H1>
      <p className="my-[60px] px-6 leading-[2.5]">{PROFILE.DESCRIPTION}</p>
      {/* 概要 */}
      <H2>{PROFILE.ABOUT.TITLE}</H2>
      <div className="px-5">
        <p className="leading-[2.5]">{PROFILE.ABOUT.CONTENT}</p>
        <div className="mt-5 mb-10">
          <Label>{PROFILE.ABOUT.LABEL}</Label>
          <div className="mt-4">
            <List list={PROFILE.ABOUT.LIST.map<string>((v) => v)} />
          </div>
        </div>
      </div>
      {/* 目的 */}
      <H2>{PROFILE.PURPOSE.TITLE}</H2>
      <div className="px-5">
        <p className="leading-[2.5]">{PROFILE.PURPOSE.CONTENT}</p>
      </div>
      {/* 技術スタック */}
      <H2>{PROFILE.SKILL.TITLE}</H2>
      <div className="px-5">
        {/* フロントエンド */}
        <Label>{PROFILE.SKILL.FRONT_END.LABEL}</Label>
        <div className="mt-2">
          <List list={PROFILE.SKILL.FRONT_END.LIST.map<string>((v) => v)} />
        </div>
        {/* バックエンド */}
        <div className="mt-5">
          <Label>{PROFILE.SKILL.BACK_END.LABEL}</Label>
          <div className="mt-2">
            <List list={PROFILE.SKILL.BACK_END.LIST.map<string>((v) => v)} />
          </div>
        </div>
        {/* インフラ */}
        <div className="mt-5 mb-10">
          <Label>{PROFILE.SKILL.INFRA.LABEL}</Label>
          <div className="mt-2">
            <List list={PROFILE.SKILL.INFRA.LIST.map<string>((v) => v)} />
          </div>
        </div>
      </div>
    </section>
  )
}

import { H1, H3 } from 'ui/components/elements/Heading'
import { PRIVACY_POLICY, ARIA_LABEL } from './privacyPolicy.const'

export default function PrivacyPolicyPage() {
  return (
    <div
      className="w-full text-gray-text-t3"
      aria-label={ARIA_LABEL.PRIVACY_POLICY}
    >
      <H1>{PRIVACY_POLICY.TITLE}</H1>
      <p className="my-[60px] leading-[1.8]">{PRIVACY_POLICY.DESCRIPTION}</p>
      {/* 個人情報保護 */}
      <H3>{PRIVACY_POLICY.PERSONAL_INFORMATION.TITLE}</H3>
      <div className="leading-[1.8]">
        {PRIVACY_POLICY.PERSONAL_INFORMATION.CONTENT}
      </div>
      {/* Cookie */}
      <H3>{PRIVACY_POLICY.COOKIE.TITLE}</H3>
      <div className="leading-[1.8]">
        {PRIVACY_POLICY.COOKIE.DESCRIPTION}
        <ul className="my-8 pl-6">
          {PRIVACY_POLICY.COOKIE.LIST.map((v) => (
            <li key={v} className="relative">
              <span className="absolute -left-5 font-bold">・</span>
              {v}
            </li>
          ))}
        </ul>
        {PRIVACY_POLICY.COOKIE.CONTENT}
      </div>
      {/* 広告 */}
      <H3>{PRIVACY_POLICY.ADVERTISEMENT.TITLE}</H3>
      <div className="leading-[1.8]">
        {PRIVACY_POLICY.ADVERTISEMENT.CONTENT}
        <a
          href={PRIVACY_POLICY.ADVERTISEMENT.LINK.URL}
          target="_blank"
          className="block p-3 text-blue-link"
        >
          {PRIVACY_POLICY.ADVERTISEMENT.LINK.TEXT}
        </a>
      </div>
      {/* アクセス解析 */}
      <H3>{PRIVACY_POLICY.ACCESS_ANALYSIS.TITLE}</H3>
      <div className="leading-[1.8]">
        {PRIVACY_POLICY.ACCESS_ANALYSIS.CONTENT}
      </div>
      <a
        href={PRIVACY_POLICY.ACCESS_ANALYSIS.LINK.URL}
        target="_blank"
        className="block p-3 text-blue-link"
      >
        {PRIVACY_POLICY.ACCESS_ANALYSIS.LINK.TEXT}
      </a>
    </div>
  )
}

import type { SVGProps } from 'react'
import './BenefitsSection.css'

interface Benefit {
  id: string
  title: string
  description: string
  icon: 'wallet' | 'piggy' | 'cap' | 'laptop'
  highlighted?: boolean
}

const BENEFITS: Benefit[] = [
  { id: 'tuition', title: '교육비 최대 100%지원', description: '최대 18,566,400원 상당의 프리미엄\n교육 국비 지원\n(내일배움카드 필요)', icon: 'wallet' },
  { id: 'allowance', title: '매월 훈련장려금', description: '학습에 몰입할 수 있도록 매월 최대\n30만원 이상의 훈련장려금 지급', icon: 'piggy' },
  { id: 'mentoring', title: '현직자 기반 실무 피드백', description: 'kt cloud 현직자 및 실무진이 프로젝트\n피드백과 멘토링에 참여합니다.\n실무 관점에서 문제를 분석하고 개선하는 경험을 제공', icon: 'cap' },
  { id: 'facility', title: '학습 환경 지원', description: '노트북 대여 및 웹캠\n등 최적의 학습 환경 제공', icon: 'laptop', highlighted: true },
]

type BenefitIconProps = SVGProps<SVGSVGElement> & { type: Benefit['icon'] }

function BenefitIcon({ type, ...props }: BenefitIconProps) {
  const common = { width: 26, height: 26, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', ...props }

  if (type === 'wallet') {
    return <svg {...common} aria-hidden="true"><rect x="2.5" y="6" width="19" height="13" rx="2.4" stroke="currentColor" strokeWidth="1.6" /><path d="M2.5 10H21.5" stroke="currentColor" strokeWidth="1.6" /><circle cx="16.5" cy="14" r="1.4" fill="currentColor" /></svg>
  }

  if (type === 'piggy') {
    return <svg {...common} aria-hidden="true"><path d="M4 12.5C4 9 7 6.5 11.5 6.5C15 6.5 17 8 17.6 8.8L20 8.2L19.3 10.8C19.7 11.5 20 12.4 20 13.3C20 16.5 16.6 18.5 12 18.5C7.5 18.5 4 16.3 4 12.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="14.2" cy="11.5" r="0.9" fill="currentColor" /><path d="M8 18.2L7.4 20M14.5 18.2L14 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
  }

  if (type === 'cap') {
    return <svg {...common} aria-hidden="true"><path d="M12 5L22 9.5L12 14L2 9.5L12 5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><path d="M6.5 11.5V15.5C6.5 17 9 18.3 12 18.3C15 18.3 17.5 17 17.5 15.5V11.5" stroke="currentColor" strokeWidth="1.6" /><path d="M21 10V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
  }

  return <svg {...common} aria-hidden="true"><rect x="3" y="4.5" width="18" height="12" rx="1.6" stroke="currentColor" strokeWidth="1.6" /><path d="M1.5 19.5H22.5L20.5 16.5H3.5L1.5 19.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
}

function BenefitsSection() {
  return (
    <section className="kt-benefits" id="support" aria-labelledby="kt-benefits-title">
      <div className="kt-benefits-inner">
        <h2 className="kt-benefits-title" id="kt-benefits-title">목표를 현실로 만드는 압도적 혜택</h2>
        <p className="kt-benefits-subtitle">오직 성장에만 집중할 수 있도록 kt cloud가 완벽하게 지원합니다.</p>
        <div className="kt-benefits-grid">
          {BENEFITS.map((benefit) => (
            <article key={benefit.id} className={`kt-benefit-card ${benefit.highlighted ? 'kt-benefit-card-active' : ''}`}>
              <div className="kt-benefit-icon"><BenefitIcon type={benefit.icon} /></div>
              <h3 className="kt-benefit-title">{benefit.title}</h3>
              <p className="kt-benefit-desc">{benefit.description.split('\n').map((line, index) => <span key={line}>{line}{index < benefit.description.split('\n').length - 1 && <br />}</span>)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection

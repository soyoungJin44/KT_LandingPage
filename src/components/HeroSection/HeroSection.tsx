import type { SVGProps } from 'react'
import './HeroSection.css'

type IconProps = SVGProps<SVGSVGElement>

function CalendarIcon(props: IconProps) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="16" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9.5H21" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 2.5V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16.5 2.5V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="7" y="12.2" width="3.2" height="3.2" rx="0.6" fill="currentColor" />
    </svg>
  )
}

function DeviceIcon(props: IconProps) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="4" width="14" height="10" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 12.5H16.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14.5" y="10" width="7" height="9" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function HeroSection() {
  return (
    <div className="kt-page">
      <header className="kt-nav">
        <div className="kt-nav-inner">
          <a className="kt-logo" href="#hero" aria-label="kt cloud TECH UP 홈">
            <span>kt</span> cloud TECH UP
          </a>
          <nav className="kt-nav-links" aria-label="주요 섹션">
            <a href="#courses">과정 찾기</a>
            <a href="#support">교육 혜택</a>
            <a href="#faq">FAQ</a>
            <a href="#consultation">상담 신청</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="kt-hero" id="hero">
          <div className="kt-hero-bg" aria-hidden="true" />
          <div className="kt-hero-galaxy" aria-hidden="true" />
          <div className="kt-hero-aurora" aria-hidden="true" />
          <div className="kt-hero-overlay" aria-hidden="true" />

          <div className="kt-hero-content">
            <div className="kt-card">
              <div className="kt-badge">
                <span className="kt-badge-dot" />
                모집 기간: 2026.08.13 (목) - 2026.09.29 (화)
              </div>

              <p className="kt-eyebrow">미래를 주도하다</p>

              <h1 className="kt-headline">
                미래를 이끌어갈 사이버 정예,
                <br />
                <span className="kt-headline-red">kt cloud TECH UP</span>
              </h1>

              <p className="kt-desc">
                수요가 급증하는 기술 분야에서 커리어를 가속화하세요.
                <br />
                <span className="kt-tech-highlight">
                    생성형 AI
                    <span className="kt-tech-divider">·</span>
                    사이버 보안
                    <span className="kt-tech-divider">·</span>
                    클라우드 네이티브
                </span>
                <br />
                트랙 중 하나를 선택하여 인증된 전문가로 성장할 수 있습니다.
                </p>

              <a className="kt-cta-btn" href="#consultation">지금 지원하기</a>
            </div>
          </div>
        </section>

        <section className="kt-info" aria-label="교육 정보">
          <div className="kt-info-grid">
            <div className="kt-info-item">
              <CalendarIcon className="kt-icon kt-icon-pink" />
              <h2 className="kt-info-title">지원 일정</h2>
              <p className="kt-info-value">26.08.13 (목) - 26.09.29 (화)</p>
              <p className="kt-info-sub">*선착순 50명 모집인원</p>
            </div>

            <div className="kt-info-item">
              <CalendarIcon className="kt-icon kt-icon-blue" />
              <h2 className="kt-info-title">교육 일정</h2>
              <p className="kt-info-value">26.09.30 (수) - 27.04.20 (화)</p>
            </div>

            <div className="kt-info-item">
              <DeviceIcon className="kt-icon kt-icon-blue" />
              <h2 className="kt-info-title">교육 방법</h2>
              <p className="kt-info-value kt-info-link">100% 온라인</p>
              <p className="kt-info-sub">*PC등 장비지원</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default HeroSection

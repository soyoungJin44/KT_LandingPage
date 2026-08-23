import { FormEvent, SVGProps, useState } from 'react'

type Module = {
  month: string
  title: string
  summary: string
  topics: string[]
}

const modules: Module[] = [
  {
    month: '01',
    title: '보안 기초와 네트워크',
    summary: '시스템과 네트워크의 구조를 이해하는 첫 단계',
    topics: ['TCP/IP와 OSI 7계층', 'Linux 운영체제 기초', '보안 위협과 취약점 이해'],
  },
  {
    month: '02',
    title: '시스템 보안',
    summary: '운영체제의 취약점을 분석하고 방어하는 방법',
    topics: ['Linux 보안 설정', 'Windows 서버 보안', '접근 제어와 로그 분석'],
  },
  {
    month: '03',
    title: '웹 애플리케이션 보안',
    summary: '실제 서비스에서 발생하는 웹 취약점 실습',
    topics: ['OWASP Top 10', '모의 해킹 프로세스', 'Burp Suite 활용'],
  },
  {
    month: '04',
    title: '침해사고 대응',
    summary: '공격 흔적을 추적하고 사고를 대응하는 훈련',
    topics: ['디지털 포렌식 기초', '악성코드 분석', '침해사고 대응 절차'],
  },
  {
    month: '05',
    title: '클라우드 보안',
    summary: '클라우드 환경의 보안 설계와 운영',
    topics: ['AWS 보안 아키텍처', '컨테이너 보안', '클라우드 침투 테스트'],
  },
  {
    month: '06',
    title: '보안 관제와 자동화',
    summary: 'SOC에서 사용하는 도구와 탐지 시나리오',
    topics: ['SIEM 관제 실습', '탐지 룰 작성', 'Python 보안 자동화'],
  },
  {
    month: '07',
    title: '프로젝트와 취업 포트폴리오',
    summary: '현업 수준의 팀 프로젝트로 역량을 증명',
    topics: ['실전 보안 프로젝트', '기술 문서화와 발표', '현직자 멘토링 및 취업 코칭'],
  },
]

const benefits = [
  { icon: '₩', chip: 'K-DIGITAL TRAINING', title: '교육비 전액 지원', body: 'K-Digital Training으로 7개월 교육비 부담 없이 역량에 집중하세요.' },
  { icon: '⌁', chip: 'FIELD-READY', title: '현업 중심 커리큘럼', body: '클라우드와 보안 관제 환경을 그대로 재현한 실습 중심 과정입니다.' },
  { icon: '↗', chip: 'EMPLOYMENT SUPPORT', title: '취업 성장 지원', body: '현직자 멘토링부터 포트폴리오, 면접까지 커리어를 함께 설계합니다.' },
  { icon: '⌘', chip: 'SECURITY LAB', title: '실전 장비와 환경', body: '가상화된 침투 테스트 랩과 클라우드 실습 환경을 제공합니다.' },
]

function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4.5" width="18" height="16" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9.5H21" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 2.5V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16.5 2.5V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="7" y="12.2" width="3.2" height="3.2" rx="0.6" fill="currentColor" />
    </svg>
  )
}

function DeviceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="4" width="14" height="10" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 12.5H16.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14.5" y="10" width="7" height="9" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function CyberDefensePage() {
  const [openModule, setOpenModule] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <header className="kt-nav">
        <div className="kt-nav-inner">
          <a className="kt-logo" href="#top" aria-label="kt cloud TECH UP 홈">kt cloud TECH UP</a>
          <a className="kt-nav-btn" href="#apply">지원하기</a>
        </div>
      </header>

      <main id="top">
        <section className="kt-hero">
          <div className="kt-hero-bg" aria-hidden="true" />
          <div className="kt-hero-overlay" aria-hidden="true" />
          <div className="kt-hero-content">
            <div className="kt-card">
              <div className="kt-badge"><span className="kt-badge-dot" />모집 기간: 2026.08.13 (목) - 2026.09.29 (화)</div>
              <p className="kt-eyebrow">미래를 주도하다</p>
              <h1 className="kt-headline">미래를 이끌어갈 사이버 정예,<br /><span className="kt-headline-red">kt cloud TECH UP</span></h1>
              <p className="kt-desc">수요가 급증하는 기술 분야에서 커리어를 가속화하세요. 생성형 AI, 사이버 보안, 클라우드<br className="desktop-break" /> 네이티브 트랙 중 하나를 선택하여 인증된 전문가로 성장할 수 있습니다.</p>
              <a className="kt-cta-btn" href="#apply">지금 지원하기</a>
            </div>
          </div>
        </section>

        <section className="kt-info" aria-label="교육 안내">
          <div className="kt-info-grid">
            <div className="kt-info-item"><CalendarIcon className="kt-icon kt-icon-pink" /><h3 className="kt-info-title">지원 일정</h3><p className="kt-info-value">26.08.13 (목) - 26.09.29 (화)</p><p className="kt-info-sub">*선착순 60명 모집인원</p></div>
            <div className="kt-info-item"><CalendarIcon className="kt-icon kt-icon-blue" /><h3 className="kt-info-title">교육 일정</h3><p className="kt-info-value">26.09.30 (수) - 27.04.20 (화)</p></div>
            <div className="kt-info-item"><DeviceIcon className="kt-icon kt-icon-blue" /><h3 className="kt-info-title">교육 방법</h3><p className="kt-info-value kt-info-link">온라인 / 비대면 실시간</p></div>
          </div>
        </section>

        <section className="program section-wrap" id="program">
          <div className="section-heading"><p className="kicker">WHY TECH UP <span>01 / 03</span></p><h2>배우는 것을 넘어,<br /><em>해내는 사람</em>이 됩니다.</h2></div>
          <div className="benefits-grid">{benefits.map((benefit) => <article className="benefit-card" key={benefit.title}><div className="benefit-icon">{benefit.icon}</div><span className="benefit-chip">{benefit.chip}</span><h3>{benefit.title}</h3><p>{benefit.body}</p><span className="card-arrow">↗</span></article>)}</div>
        </section>

        <section className="curriculum section-wrap" id="curriculum">
          <div className="section-heading curriculum-heading"><p className="kicker">THE PROGRAM <span>02 / 03</span></p><h2>7개월, 하나의<br /><em>명확한 로드맵.</em></h2><p className="section-note">기초부터 실전 프로젝트까지.<br />단계별로 쌓아 올리는 보안 전문가의 기본기.</p></div>
          <div className="module-list">{modules.map((module, index) => { const isOpen = openModule === index; return <article className={`module ${isOpen ? 'is-open' : ''}`} key={module.month}><button className="module-trigger" onClick={() => setOpenModule(isOpen ? -1 : index)} aria-expanded={isOpen}><span className="module-number">MONTH {module.month}</span><span className="module-title">{module.title}</span><span className="module-summary">{module.summary}</span><span className="module-toggle">{isOpen ? '−' : '+'}</span></button>{isOpen && <div className="module-detail"><ul>{module.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul><span className="detail-label">CORE SKILLS / {module.month}</span></div>}</article> })}</div>
        </section>

        <section className="apply section-wrap" id="apply">
          <div className="apply-copy"><p className="kicker">START YOUR STORY <span>03 / 03</span></p><h2>당신의 다음 장면을<br /><em>지금 시작하세요.</em></h2><p>보안을 향한 진심만 있다면 충분합니다.<br />지금 지원하고 TECH UP의 다음 주인공이 되어보세요.</p><div className="apply-info"><span>APPLICATION PERIOD</span><strong>2024. 08. 01 — 2024. 09. 15</strong></div></div>
          <form className="apply-form" onSubmit={handleSubmit}><div className="form-header"><span>APPLICATION_FORM</span><span>STEP 01 / 01</span></div><label>이름<input required name="name" placeholder="이름을 입력해주세요" /></label><label>이메일<input required type="email" name="email" placeholder="name@email.com" /></label><label>연락처<input required type="tel" name="phone" placeholder="010-0000-0000" /></label><label className="checkbox-label"><input required type="checkbox" /> 개인정보 수집 및 이용에 동의합니다.</label><button className="button button-primary form-submit" type="submit">{submitted ? '지원서가 접수되었습니다' : '지원서 제출하기'} <span>↗</span></button>{submitted && <p className="success-message" role="status">확인 메일을 보내드렸습니다. 곧 연락드릴게요.</p>}</form>
        </section>
      </main>
      <footer className="site-footer"><span className="brand"><span className="brand-mark">kt</span> cloud <span className="brand-divider">/</span> TECH UP</span><span>© 2024 kt cloud. ALL RIGHTS RESERVED.</span><a href="#top">BACK TO TOP ↑</a></footer>
      <a className="mobile-sticky-cta" href="#apply">지금 지원하기 <span>↗</span></a>
    </div>
  )
}

export default CyberDefensePage

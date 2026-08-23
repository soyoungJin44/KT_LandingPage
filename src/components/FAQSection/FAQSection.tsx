import { useState } from 'react'
import FooterSection from '../FooterSection/FooterSection'
import './FAQSection.css'

interface FAQItem {
  question: string
  answer: string
}

const FAQS: FAQItem[] = [
  { question: '전공자가 아니어도 지원 가능한가요?', answer: '네, 가능합니다. 프로그래밍 기초부터 알려드리는 커리큘럼이 준비되어 있으므로 비전공자도 충분히 따라오실 수 있습니다. 열정과 의지가 가장 중요합니다.' },
  { question: '내일배움카드는 어떻게 발급받나요?', answer: '직업훈련포털(HRD-Net)에서 온라인으로 신청하거나, 가까운 고용센터에 방문하여 신청하실 수 있습니다. 지원 자격 확인을 위해 미리 확인하시는 것을 권장합니다.' },
  { question: '교육은 어떻게 진행되나요?', answer: '오프라인(강남캠퍼스)과 온라인(메타버스)을 병행하는 하이브리드 방식으로 진행됩니다. 실무 중심의 프로젝트와 멘토링이 포함되어 있습니다.' },
  { question: '취업 지원 프로그램이 있나요?', answer: '네, 이력서 첨삭, 모의 면접, 포트폴리오 리뷰 등 체계적인 취업 지원 프로그램을 제공합니다. 또한 협력 기업들과의 채용 연계 기회도 지원됩니다.' },
  { question: '팀 프로젝트는 어떻게 구성되나요?', answer: '실무와 유사한 환경을 위해 다양한 백그라운드를 가진 수강생들과 팀을 이룹니다. 기획부터 개발, 배포까지 전 과정을 협업하여 경험하게 됩니다.' },
]

function PlusIcon({ open }: { open: boolean }) {
  return (
    <svg className={`kt-faq-icon ${open ? 'kt-faq-icon-open' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5V19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function FAQRow({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`kt-faq-row ${open ? 'kt-faq-row-open' : ''}`}>
      <button type="button" className="kt-faq-question" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span><span className="kt-faq-q-mark">Q.</span> {item.question}</span>
        <PlusIcon open={open} />
      </button>
      {open && <div className="kt-faq-answer"><span className="kt-faq-a-mark">A.</span> {item.answer}</div>}
    </div>
  )
}

function FAQSection() {
  return (
    <>
      <section className="kt-faq" id="faq" aria-labelledby="kt-faq-title">
        <div className="kt-faq-inner">
          <h2 className="kt-faq-title" id="kt-faq-title">자주 묻는 질문 <span className="kt-faq-title-en">(FAQ)</span></h2>
          <div className="kt-faq-list">{FAQS.map((item) => <FAQRow key={item.question} item={item} />)}</div>
        </div>
      </section>
      <FooterSection />
    </>
  )
}

export default FAQSection

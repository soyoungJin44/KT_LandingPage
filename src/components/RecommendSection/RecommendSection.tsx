import './RecommendSection.css'
import ConsultSection from '../ConsultSection/ConsultSection'

interface RecommendGroup {
  id: string
  title: string
  items: string[]
}

const GROUPS: RecommendGroup[] = [
  {
    id: 'genai',
    title: '생성형 AI',
    items: ['AI 서비스 기획 및 개발에 관심 있는 분', '최신 LLM 기술 트렌드를 실무에 적용하고 싶은 분', '데이터 활용 및 분석 역량을 키우고 싶은 분'],
  },
  {
    id: 'security',
    title: '사이버 보안',
    items: ['화이트해커, 정보보안 전문가를 꿈꾸는 분', '시스템 및 네트워크 인프라 보안에 관심 있는 분', '사이버 위협 대응 및 분석 실무를 경험하고 싶은 분'],
  },
  {
    id: 'cloud-native',
    title: '클라우드 네이티브',
    items: ['대규모 인프라 설계 및 운영에 관심 있는 분', 'MSA, Kubernetes 기반 개발 역량을 갖추고 싶은 분', '클라우드 엔지니어, DevOps로 성장하고 싶은 분'],
  },
]

function RecommendSection() {
  return (
    <>
      <section className="kt-recommend" aria-labelledby="kt-recommend-title">
        <div className="kt-recommend-inner">
          <div className="kt-recommend-heading">
            <span className="kt-recommend-line" aria-hidden="true" />
            <h2 className="kt-recommend-title" id="kt-recommend-title">이런 분들께 추천합니다</h2>
            <span className="kt-recommend-line" aria-hidden="true" />
          </div>

          <div className="kt-recommend-grid">
            {GROUPS.map((group) => (
              <div key={group.id} className="kt-recommend-col">
                <h3 className="kt-recommend-col-title">{group.title}</h3>
                <ul className="kt-recommend-list">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 무료 상담 신청 폼 (추천 섹션 바로 아래) ===== */}
      <ConsultSection />
    </>
  )
}

export default RecommendSection

import { useEffect } from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import CurriculumSection from './components/CurriculumSection/CurriculumSection'
import BenefitsSection from './components/BenefitsSection/BenefitsSection'
import RecommendSection from './components/RecommendSection/RecommendSection'
import FAQSection from './components/FAQSection/FAQSection'

function App() {
  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>('#root section:not(#hero)')

    revealTargets.forEach((element) => element.classList.add('kt-reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isCurriculumGroup = entry.target.matches('.kt-track, .kt-curr')

          if (entry.isIntersecting) {
            entry.target.classList.add('kt-reveal-visible')
            if (isCurriculumGroup) {
              revealTargets.forEach((target) => {
                if (target.matches('.kt-track, .kt-curr')) target.classList.add('kt-reveal-visible')
              })
            }
          } else {
            entry.target.classList.remove('kt-reveal-visible')
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
    )

    revealTargets.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <HeroSection />
      <CurriculumSection />
      <BenefitsSection />
      <RecommendSection />
      <FAQSection />
    </>
  )
}

export default App

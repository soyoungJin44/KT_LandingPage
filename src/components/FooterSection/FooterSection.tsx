import "./FooterSection.css";

const NAV_LINKS = [
  { label: "과정 찾기", href: "#courses" },
  { label: "통합 프로젝트", href: "#project" },
  { label: "교육 혜택", href: "#support" },
  { label: "FAQ", href: "#faq" },
  { label: "상담 신청", href: "#consultation" },
];

/**
 * 실제 KT 공식 로고(상표) 파일을 쓰고 싶으시면,
 * 이 컴포넌트 대신 <img src="/assets/kt-logo.svg" className="kt-footer-logo-mark" /> 로 교체하세요.
 * 지금은 Hero 상단 내비게이션과 톤을 맞춘 심플한 자체 마크입니다.
 */
function LogoMark() {
  return (
    <svg
      className="kt-footer-logo-mark"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="22" height="22" rx="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 12H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 7V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="kt-footer">
      <div className="kt-footer-inner">
        <div className="kt-footer-brand">
          <LogoMark />
          <span className="kt-footer-logo">kt cloud TECH UP</span>
        </div>

        <nav className="kt-footer-nav" aria-label="footer navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="kt-footer-nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="kt-footer-copyright">© {year} kt cloud TECH UP. All rights reserved.</p>
      </div>
    </footer>
  );
}

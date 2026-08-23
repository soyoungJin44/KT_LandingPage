import { useState } from "react";
import "./ConsultSection.css";

interface ConsultFormConfig {
  id: string;
  optionsLabel: string;
  options: string[];
  accent: string;
  accentDark: string;
}

/**
 * 왼쪽 폼: 관심 교육과정 선택 (red 강조)
 * 오른쪽 폼: 희망 지원 제도 선택 (blue 강조)
 * label만 다르게 하고 싶으시면 optionsLabel 값만 "관심 교육과정"으로 바꾸시면 돼요.
 * 색상은 accent / accentDark 값만 바꾸면 카드별로 자유롭게 조정됩니다.
 */
const FORMS: ConsultFormConfig[] = [
  {
    id: "course",
    optionsLabel: "관심 교육과정",
    options: ["생성형AI", "사이버보안", "클라우드 네이티브"],
    accent: "#e8434f",
    accentDark: "#c32d3a",
  },
  {
    id: "support",
    optionsLabel: "희망 지원 제도",
    options: ["국민내일배움카드", "국민취업지원제도", "국비지원제도"],
    accent: "#3b82f6",
    accentDark: "#2563eb",
  },
];

function ConsultFormCard({ config }: { config: ConsultFormConfig }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [hasCard, setHasCard] = useState<"yes" | "no">("yes");

  const toggleOption = (opt: string) => {
    setSelected((prev) => (prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]));
  };

  return (
    <form
      className="kt-consult-card"
      style={
        {
          "--kt-consult-accent": config.accent,
          "--kt-consult-accent-dark": config.accentDark,
        } as React.CSSProperties
      }
      onSubmit={(e) => e.preventDefault()}
    >
      <h3 className="kt-consult-card-title">무료 상담 신청</h3>

      <div className="kt-consult-field">
        <div className="kt-consult-label-row">
          <label className="kt-consult-label">
            {config.optionsLabel} <span className="kt-consult-required">*</span>
          </label>
          <span className="kt-consult-hint">최소 1개 이상 선택</span>
        </div>
        <div className="kt-consult-pills">
          {config.options.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`kt-consult-pill ${selected.includes(opt) ? "kt-consult-pill-active" : ""}`}
              onClick={() => toggleOption(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="kt-consult-field">
        <label className="kt-consult-label" htmlFor={`${config.id}-name`}>
          이름
        </label>
        <input id={`${config.id}-name`} className="kt-consult-input" type="text" placeholder="홍길동" />
      </div>

      <div className="kt-consult-field">
        <label className="kt-consult-label" htmlFor={`${config.id}-phone`}>
          번호
        </label>
        <input id={`${config.id}-phone`} className="kt-consult-input" type="tel" placeholder="010-0000-0000" />
      </div>

      <div className="kt-consult-field">
        <label className="kt-consult-label" htmlFor={`${config.id}-region`}>
          지역
        </label>
        <input
          id={`${config.id}-region`}
          className="kt-consult-input"
          type="text"
          placeholder="예) 서울시 강남구"
        />
      </div>

      <div className="kt-consult-field">
        <label className="kt-consult-label">내일배움카드 소지 여부</label>
        <div className="kt-consult-radio-row">
          <label className="kt-consult-radio">
            <input
              type="radio"
              name={`${config.id}-card`}
              checked={hasCard === "yes"}
              onChange={() => setHasCard("yes")}
            />
            <span className="kt-consult-radio-dot" />
            예
          </label>
          <label className="kt-consult-radio">
            <input
              type="radio"
              name={`${config.id}-card`}
              checked={hasCard === "no"}
              onChange={() => setHasCard("no")}
            />
            <span className="kt-consult-radio-dot" />
            아니요
          </label>
        </div>
      </div>

      <div className="kt-consult-field">
        <label className="kt-consult-label" htmlFor={`${config.id}-memo`}>
          남기고싶은 메모
        </label>
        <textarea id={`${config.id}-memo`} className="kt-consult-textarea" placeholder="궁금한 점을 남겨주세요." />
      </div>

      <button type="submit" className="kt-consult-submit">
        무료상담 신청하기
      </button>
    </form>
  );
}

export default function ConsultSection() {
  return (
    <section className="kt-consult">
      <div className="kt-consult-inner">
        <div className="kt-consult-divider" aria-hidden="true" />
        <p className="kt-consult-eyebrow">FREE CONSULTATION</p>
        <h2 className="kt-consult-title">레벨업 할 준비가 되셨나요?</h2>
        <p className="kt-consult-subtitle">아래 양식을 남겨주시면 교육 매니저가 빠르게 안내드리겠습니다.</p>

        <div className="kt-consult-grid">
          {FORMS.map((form) => (
            <ConsultFormCard key={form.id} config={form} />
          ))}
        </div>
      </div>
    </section>
  );
}

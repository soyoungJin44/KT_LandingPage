import { useState } from "react";
import "./ConsultSection.css";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzUrmDm4-KTtPYOPRV8dl4ahtYE86c3TL0dEGSomEkUmrPb1n4p68b60aXbxhyEaM7qZQ/exec";

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

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const form = event.currentTarget;
//     const name = form.elements.namedItem(`${config.id}-name`) as HTMLInputElement;
//     const phone = form.elements.namedItem(`${config.id}-phone`) as HTMLInputElement;
//     const region = form.elements.namedItem(`${config.id}-region`) as HTMLInputElement;

//     if (selected.length === 0 || !name.value.trim() || !phone.value.trim() || !region.value.trim()) {
//       window.alert("필수 항목을 모두 입력해 주세요.");
//     }
//   };
const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const form = event.currentTarget;

  const name = form.elements.namedItem(`${config.id}-name`) as HTMLInputElement;
  const phone = form.elements.namedItem(`${config.id}-phone`) as HTMLInputElement;
  const region = form.elements.namedItem(`${config.id}-region`) as HTMLInputElement;
  const memo = form.elements.namedItem(`${config.id}-memo`) as HTMLTextAreaElement;

  // 필수값 확인
  if (
    selected.length === 0 ||
    !name.value.trim() ||
    !phone.value.trim() ||
    !region.value.trim()
  ) {
    window.alert("필수 항목을 모두 입력해 주세요.");
    return;
  }

  // Google Sheets로 보낼 데이터
  const data = {
    type: config.id,
    selectedOptions: selected.join(", "),
    name: name.value.trim(),
    phone: phone.value.trim(),
    region: region.value.trim(),
    hasCard: hasCard === "yes" ? "예" : "아니요",
    memo: memo.value.trim(),
  };

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    window.alert("상담 신청이 완료되었습니다.");

    // 입력값 초기화
    setSelected([]);
    setHasCard("yes");
    form.reset();
  } catch (error) {
    console.error("상담 신청 오류:", error);
    window.alert("상담 신청 중 오류가 발생했습니다.");
  }
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
      onSubmit={handleSubmit}
    >
      <h3 className="kt-consult-card-title">
  {config.id === "course" ? "교육과정 상담 신청" : "지원제도 상담 신청"}
</h3>
<p className="kt-consult-card-desc">
  {config.id === "course"
    ? "원하는 교육과정을 선택하고 맞춤형 상담을 받아보세요!"
    : "현재 받을 수 있는 지원제도를 확인하고 상담받아보세요!"}
</p>

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
          이름 <span className="kt-consult-required">*</span>
        </label>
        <input id={`${config.id}-name`} name={`${config.id}-name`} className="kt-consult-input" type="text" placeholder="홍길동" aria-required="true" />
      </div>

      <div className="kt-consult-field">
        <label className="kt-consult-label" htmlFor={`${config.id}-phone`}>
          번호 <span className="kt-consult-required">*</span>
        </label>
        <input id={`${config.id}-phone`} name={`${config.id}-phone`} className="kt-consult-input" type="tel" placeholder="010-0000-0000" aria-required="true" />
      </div>

      <div className="kt-consult-field">
        <label className="kt-consult-label" htmlFor={`${config.id}-region`}>
          지역 <span className="kt-consult-required">*</span>
        </label>
        <input
          id={`${config.id}-region`}
          name={`${config.id}-region`}
          className="kt-consult-input"
          type="text"
          placeholder="예) 서울시 강남구"
          aria-required="true"
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
        {/* <textarea id={`${config.id}-memo`} className="kt-consult-textarea" placeholder="궁금한 점을 남겨주세요." /> */}
        <textarea
            id={`${config.id}-memo`}
            name={`${config.id}-memo`}
            className="kt-consult-textarea"
            placeholder="궁금한 점을 남겨주세요."
            />
      </div>

      <button type="submit" className="kt-consult-submit">
        무료상담 신청하기
      </button>
    </form>
  );
}

export default function ConsultSection() {
  return (
    <section className="kt-consult" id="consultation">
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

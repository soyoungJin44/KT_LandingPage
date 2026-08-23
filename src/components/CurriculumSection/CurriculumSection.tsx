import { useState } from "react";
import ConsultSection from "../ConsultSection/ConsultSection";
import "./CurriculumSection.css";

/* =========================================================
   ConsultSection(무료 상담 신청 폼 2개) + 트랙 선택 + 단계별 커리큘럼을
   순서대로 하나의 컴포넌트에 합쳤습니다.
   - 맨 위: 무료 상담 신청 폼 (ConsultSection)
   - 중간: 트랙 탭 (생성형 AI / 사이버 보안 / 클라우드 네이티브)
   - 아래쪽: 단계별 커리큘럼 (1~7단계 아코디언)
   각 블록은 각자 독립적인 상태(useState)를 가집니다.
   ========================================================= */

/* ---------------- 트랙(Image 1) 데이터 ---------------- */

interface StepItem {
  label: string;
  detail: string;
}

interface Step {
  id: number;
  step: string;
  title: string;
  items: StepItem[];
}

interface Track {
  id: string;
  tabLabel: string;
  overviewLabel: string;
  title: string;
  description: string;
  checklist: string[];
  stackTitle: string;
  stack: string[];
  rolesTitle: string;
  roles: string[];
  accent: string;
  accentDark: string;
  steps: Step[];
}

/* ---------------- 트랙별 단계 커리큘럼 데이터 ---------------- */

const GENAI_STEPS: Step[] = [
  {
    id: 1,
    step: "1개월",
    title: "기초 이론과 실무 프로세스 학습",
    items: [
      { label: "오리엔테이션", detail: "과정 목표와 방향성을 설명하고, 상세 커리큘럼 및 학습 일정 소개합니다." },
      {
        label: "생성형 AI 개요 & LLM",
        detail: "생성형 AI 역사와 LLM(GPT, BERT 등) 개념 이해, 토큰화 및 임베딩 기법, 전이학습과 파인튜닝 개요를 학습합니다.",
      },
      {
        label: "파인튜닝",
        detail: "데이터 준비 및 라벨링, 하이퍼파라미터 최적화, 전이학습 기반 성능 향상과 다양한 프롬프트 구조를 실습합니다.",
      },
      {
        label: "오픈소스 LLM 활용",
        detail: "Hugging Face Transformers를 활용한 모델 서빙 및 API 배포 실습과 모델 경량화, 커뮤니티 오픈소스 프로젝트 전략을 학습합니다.",
      },
      {
        label: "프롬프트 엔지니어링",
        detail: "프롬프트 템플릿 설계, 조건부 생성, 체인 오브 싱크 기법, 상황별 활용 사례 연구 및 품질 개선 피드백 루프 기법을 분석합니다.",
      },
      {
        label: "LLM 성능 평가",
        detail: "BLEU, ROUGE, METEOR 등 LLM 평가 지표와 퍼플렉시티, 로스 기반 모델 비교, 실제 서비스 환경에서의 성능 테스트를 학습합니다.",
      },
      {
        label: "취업 준비 역량 테스트 대비",
        detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다. 최신 구직 동향 및 사례를 연구하며, 자기 PR을 위한 효과적인 취업 전략을 학습합니다.",
      },
    ],
  },
  {
    id: 2,
    step: "2개월",
    title: "고급 기술과 전문 개발 응용",
    items: [
      {
        label: "생성형 AI 응용 애플리케이션 개발",
        detail: "챗봇, 요약, 번역 등 다양한 응용 사례 설계, 멀티모달 모델 결합 가능성 탐색, 실시간 API 제공, 사용자 피드백 수집 및 개선 사이클을 운영합니다.",
      },
      {
        label: "최신 생성형 AI 기술",
        detail: "In-Context Learning과 Zero/Few-shot 기법, RAG 트렌드, 대규모 파라미터 스케일링 및 모델 압축(Quantization, Pruning) 사례를 학습합니다.",
      },
      {
        label: "LLM 데이터 준비 및 전처리",
        detail: "코퍼스 수집, 클리닝 프로세스, 토큰화와 어휘 사전 구성, 데이터 증강(Augmentation) 기법, 분산 환경에서 대규모 데이터 처리 방식을 학습합니다.",
      },
      { label: "특강1", detail: "기업 연사 또는 전문가를 초빙하여 사이버 보안 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      {
        label: "취업 준비 역량 테스트 대비",
        detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다. 최신 구직 동향 및 사례를 연구하며, 자기 PR을 위한 효과적인 취업 전략을 학습합니다.",
      },
      {
        label: "기본 프로젝트",
        detail: "생성형 AI 파이프라인을 구축하고 간단한 LLM 모델을 파인튜닝하여 다양한 응용 사례를 학습합니다. 프롬프트 엔지니어링을 실습하며 모델 성능을 검증하고, MLOps를 도입하여 자동화된 배포 환경을 구성합니다.",
      },
    ],
  },
  {
    id: 3,
    step: "3개월",
    title: "기본 프로젝트 시작",
    items: [
      {
        label: "기본 프로젝트",
        detail: "생성형 AI 파이프라인을 구축하고 간단한 LLM 모델을 파인튜닝하여 다양한 응용 사례를 학습합니다. 프롬프트 엔지니어링을 실습하며 모델 성능을 검증하고, MLOps를 도입하여 자동화된 배포 환경을 구성합니다.",
      },
      {
        label: "심화 프로젝트",
        detail: "대규모 오픈소스 LLM 활용과 커스텀 파인튜닝을 통해 멀티모달 데이터를 통합하고 복합 생성형 AI 서비스를 설계합니다. 모델 성능 평가 및 모니터링을 통해 최적화 전략을 습득하며 팀 기반 협업으로 완성도 있는 AI 서비스를 개발합니다.",
      },
      { label: "특강2", detail: "기업 연사 또는 전문가를 초빙하여 사이버 보안 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      {
        label: "취업 준비 역량 테스트 대비",
        detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다. 최신 구직 동향 및 사례를 연구하며, 자기 PR을 위한 효과적인 취업 전략을 학습합니다.",
      },
    ],
  },
  {
    id: 4,
    step: "4개월",
    title: "심화 프로젝트 시작 및 해커톤",
    items: [
      {
        label: "심화 프로젝트",
        detail: "대규모 오픈소스 LLM 활용과 커스텀 파인튜닝을 통해 멀티모달 데이터를 통합하고 복합 생성형 AI 서비스를 설계합니다. 모델 성능 평가 및 모니터링을 통해 최적화 전략을 습득하며 팀 기반 협업으로 완성도 있는 AI 서비스를 개발합니다.",
      },
      { label: "해커톤", detail: "제한된 시간 내 팀별 아이디어 구상과 제품 설계를 진행하며 집중적인 협업을 통해 창의적 해결능력을 학습합니다." },
      { label: "특강3", detail: "기업 연사 또는 전문가를 초빙하여 사이버 보안 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      {
        label: "취업 준비 역량 테스트 대비",
        detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다. 최신 구직 동향 및 사례를 연구하며, 자기 PR을 위한 효과적인 취업 전략을 학습합니다.",
      },
    ],
  },
  {
    id: 5,
    step: "5개월",
    title: "실무 통합 프로젝트 시작",
    items: [
      {
        label: "실무 통합 프로젝트",
        detail: "클라우드, 보안, 디자인 등 타 과정과 협업하여 최신 생성형 AI 기술을 결합한 고급 솔루션을 구현합니다. 고가용성과 확장성을 고려한 클라우드 운영을 통해 실시간 서비스와 유지보수 체계를 완성하며 실제 현장에서의 활용 역량을 증대시킵니다.",
      },
      { label: "특강4", detail: "기업 연사 또는 전문가를 초빙하여 사이버 보안 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      { label: "취업 준비 역량 테스트 대비", detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다." },
      { label: "커리어 성장 전략", detail: "개인 목표와 학습 로드맵을 설계하며 전문가 멘토링과 네트워크 확장 전략을 학습합니다." },
      { label: "협업 및 커뮤니케이션", detail: "팀워크를 강화하는 커뮤니케이션 전략과 갈등 해결 기법을 실습합니다." },
    ],
  },
  {
    id: 6,
    step: "6개월",
    title: "실무 통합 프로젝트 집중 개발",
    items: [
      {
        label: "실무 통합 프로젝트",
        detail: "클라우드, 보안, 디자인 등 타 과정과 협업하여 최신 생성형 AI 기술을 결합한 고급 솔루션을 구현합니다. 고가용성과 확장성을 고려한 클라우드 운영을 통해 실시간 서비스와 유지보수 체계를 완성하며 실제 현장에서의 활용 역량을 증대시킵니다.",
      },
      { label: "특강5", detail: "기업 연사 또는 전문가를 초빙하여 사이버 보안 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      { label: "취업 준비 역량 테스트 대비", detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다." },
      { label: "제품 개발 프로세스와 문화", detail: "애자일 환경에서 제품 아이디어 발굴부터 시장 출시까지의 과정을 이해하며 사례 중심으로 학습합니다." },
      { label: "포트폴리오 기획 및 구성", detail: "개인 역량과 기술을 구성하는 효과적인 포트폴리오 설계와 성공 사례를 분석합니다." },
    ],
  },
  {
    id: 7,
    step: "7개월",
    title: "프로젝트 마무리, 최종 발표 및 수료",
    items: [
      {
        label: "실무 통합 프로젝트",
        detail: "클라우드, 보안, 디자인 등 타 과정과 협업하여 최신 생성형 AI 기술을 결합한 고급 솔루션을 구현합니다. 고가용성과 확장성을 고려한 클라우드 운영을 통해 실시간 서비스와 유지보수 체계를 완성하며 실제 현장에서의 활용 역량을 증대시킵니다.",
      },
      { label: "특강6", detail: "기업 연사 또는 전문가를 초빙하여 사이버 보안 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      { label: "취업 준비 역량 테스트 대비", detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다." },
      { label: "이력서 작성 및 자기 PR", detail: "이력서를 통해 강점을 부각시키고 자기 PR 전략을 활용하여 자신을 효과적으로 표현하는 방법을 학습합니다." },
      {
        label: "프로젝트 발표회",
        detail: "프로젝트의 결과물을 발표하고, 심사위원과 현직자로부터 피드백을 받아 전체적인 성과와 구현 과정을 평가받습니다.",
      },
      { label: "수료식", detail: "7개월 간의 학습과 프로젝트를 마무리하며, 수료식을 통해 교육 과정에 대한 회고와 향후 계획을 공유합니다." },
    ],
  },
];

const CLOUD_NATIVE_STEPS: Step[] = [
  {
    id: 1,
    step: "1개월",
    title: "클라우드 네이티브 및 DevOps 핵심 학습",
    items: [
      { label: "오리엔테이션", detail: "과정 목표와 방향성을 설명하고, 상세 커리큘럼 및 학습 일정 소개합니다." },
      { label: "Docker", detail: "컨테이너 기반 애플리케이션 실행 환경을 구축하고, 이미지 생성 및 자동화된 관리 흐름을 학습합니다." },
      {
        label: "Kubernetes",
        detail: "클러스터 관리와 리소스 생성 및 배포 자동화를 통해 컨테이너 워크로드 운영 및 안정성을 익힙니다.",
      },
      {
        label: "클라우드 보안",
        detail: "클라우드 환경 내 보안 위협을 분석하고 이를 강화하는 DevSecOps 도구 활용 전략을 학습합니다.",
      },
      {
        label: "CI/CD",
        detail: "빌드 자동화와 지속적 통합을 위한 파이프라인 설계와 Jenkins 및 GitHub Actions를 활용한 배포 실습을 진행합니다.",
      },
      {
        label: "Service Mesh",
        detail: "Istio 및 Linkerd를 활용해 마이크로서비스 간 통신 관리와 트래픽 분산 전략을 학습합니다.",
      },
      {
        label: "취업 준비 역량 테스트 대비",
        detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다. 최신 구직 동향 및 사례를 연구하며, 자기 PR을 위한 효과적인 취업 전략을 학습합니다.",
      },
    ],
  },
  {
    id: 2,
    step: "2개월",
    title: "클라우드 네이티브 실무 역량 학습",
    items: [
      {
        label: "모니터링/로그",
        detail: "시스템 성능 모니터링과 메트릭 수집 방법을 익히고, Grafana 대시보드를 통해 시각화 실습을 진행합니다.",
      },
      { label: "API Gateway", detail: "요청 처리, 보안 인증 및 API의 변환 프로세스를 설계하고 운영 기법을 학습합니다." },
      {
        label: "클라우드 네트워킹",
        detail: "클라우드 환경에서 VPC와 서브넷 구성 및 네트워크 최적화를 실습하며 고가용성을 설계합니다.",
      },
      { label: "특강1", detail: "기업 연사 또는 전문가를 초빙하여 클라우드 서비스 활용 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      {
        label: "취업 준비 역량 테스트 대비",
        detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다. 최신 구직 동향 및 사례를 연구하며, 자기 PR을 위한 효과적인 취업 전략을 학습합니다.",
      },
      {
        label: "기본 프로젝트",
        detail:
          "클라우드 네이티브 아키텍처의 기초 설계 원리를 학습하고, 컨테이너 기반 개발 환경을 구축하여 마이크로서비스 간 연계 작업과 통합 테스트를 수행합니다. CI/CD 시스템 설계를 통해 자동화된 배포 파이프라인을 구현하며, 실무 환경에 초점을 둔 협업 프로젝트를 진행합니다.",
      },
    ],
  },
  {
    id: 3,
    step: "3개월",
    title: "기본 프로젝트 시작",
    items: [
      {
        label: "기본 프로젝트",
        detail:
          "클라우드 네이티브 아키텍처의 기초 설계 원리를 학습하고, 컨테이너 기반 개발 환경을 구축하여 마이크로서비스 간 연계 작업과 통합 테스트를 수행합니다. CI/CD 시스템 설계를 통해 자동화된 배포 파이프라인을 구현하며, 실무 환경에 초점을 둔 협업 프로젝트를 진행합니다.",
      },
      {
        label: "심화 프로젝트",
        detail:
          "고급 네트워크 및 서비스 메시를 활용한 분산 시스템 아키텍처를 설계하여 내구성과 보안을 강화합니다. 중앙 집중식 로깅 및 실시간 모니터링 시스템을 구축하며, 업무 확장성을 고려한 아키텍처 재설계와 팀 기반 협업을 통해 실무 응용 능력을 키웁니다.",
      },
      { label: "특강2", detail: "기업 연사 또는 전문가를 초빙하여 클라우드 서비스 활용 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      {
        label: "취업 준비 역량 테스트 대비",
        detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다. 최신 구직 동향 및 사례를 연구하며, 자기 PR을 위한 효과적인 취업 전략을 학습합니다.",
      },
    ],
  },
  {
    id: 4,
    step: "4개월",
    title: "심화 프로젝트 시작 및 해커톤",
    items: [
      {
        label: "심화 프로젝트",
        detail:
          "고급 네트워크 및 서비스 메시를 활용한 분산 시스템 아키텍처를 설계하여 내구성과 보안을 강화합니다. 중앙 집중식 로깅 및 실시간 모니터링 시스템을 구축하며, 업무 확장성을 고려한 아키텍처 재설계와 팀 기반 협업을 통해 실무 응용 능력을 키웁니다.",
      },
      { label: "해커톤", detail: "제한된 시간 내 팀별 아이디어 구상과 제품 설계를 진행하며 집중적인 협업을 통해 창의적 해결능력을 학습합니다." },
      { label: "특강3", detail: "기업 연사 또는 전문가를 초빙하여 클라우드 서비스 활용 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      {
        label: "취업 준비 역량 테스트 대비",
        detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다. 최신 구직 동향 및 사례를 연구하며, 자기 PR을 위한 효과적인 취업 전략을 학습합니다.",
      },
    ],
  },
  {
    id: 5,
    step: "5개월",
    title: "실무 통합 프로젝트 시작",
    items: [
      {
        label: "실무 통합 프로젝트",
        detail:
          "복잡한 분산 시스템 환경에서 다중 클라우드 플랫폼 간 상호 운용성을 설계하고, Terraform을 활용한 인프라 코드 자동화를 실습합니다. 고가용성과 실시간 운영을 보장하는 배포 전략을 통해 최적화된 클라우드 네이티브 환경을 구성하며, 전체 프로젝트 과정을 협업으로 진행하여 통합 역량을 완성합니다.",
      },
      { label: "특강4", detail: "기업 연사 또는 전문가를 초빙하여 클라우드 서비스 활용 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      { label: "취업 준비 역량 테스트 대비", detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다." },
      { label: "커리어 성장 전략", detail: "개인 목표와 학습 로드맵을 설계하며 전문가 멘토링과 네트워크 확장 전략을 학습합니다." },
      { label: "협업 및 커뮤니케이션", detail: "팀워크를 강화하는 커뮤니케이션 전략과 갈등 해결 기법을 실습합니다." },
    ],
  },
  {
    id: 6,
    step: "6개월",
    title: "실무 통합 프로젝트 집중 개발",
    items: [
      {
        label: "실무 통합 프로젝트",
        detail:
          "복잡한 분산 시스템 환경에서 다중 클라우드 플랫폼 간 상호 운용성을 설계하고, Terraform을 활용한 인프라 코드 자동화를 실습합니다. 고가용성과 실시간 운영을 보장하는 배포 전략을 통해 최적화된 클라우드 네이티브 환경을 구성하며, 전체 프로젝트 과정을 협업으로 진행하여 통합 역량을 완성합니다.",
      },
      { label: "특강5", detail: "기업 연사 또는 전문가를 초빙하여 클라우드 서비스 활용 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      { label: "취업 준비 역량 테스트 대비", detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다." },
      { label: "제품 개발 프로세스와 문화", detail: "애자일 환경에서 제품 아이디어 발굴부터 시장 출시까지의 과정을 이해하며 사례 중심으로 학습합니다." },
      { label: "포트폴리오 기획 및 구성", detail: "개인 역량과 기술을 구성하는 효과적인 포트폴리오 설계와 성공 사례를 분석합니다." },
    ],
  },
  {
    id: 7,
    step: "7개월",
    title: "프로젝트 마무리, 최종 발표 및 수료",
    items: [
      {
        label: "실무 통합 프로젝트",
        detail:
          "복잡한 분산 시스템 환경에서 다중 클라우드 플랫폼 간 상호 운용성을 설계하고, Terraform을 활용한 인프라 코드 자동화를 실습합니다. 고가용성과 실시간 운영을 보장하는 배포 전략을 통해 최적화된 클라우드 네이티브 환경을 구성하며, 전체 프로젝트 과정을 협업으로 진행하여 통합 역량을 완성합니다.",
      },
      { label: "특강6", detail: "기업 연사 또는 전문가를 초빙하여 클라우드 서비스 활용 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      { label: "취업 준비 역량 테스트 대비", detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다." },
      { label: "이력서 작성 및 자기 PR", detail: "이력서를 통해 강점을 부각시키고 자기 PR 전략을 활용하여 자신을 효과적으로 표현하는 방법을 학습합니다." },
      {
        label: "프로젝트 발표회",
        detail: "프로젝트의 결과물을 발표하고, 심사위원과 현직자로부터 피드백을 받아 전체적인 성과와 구현 과정을 평가받습니다.",
      },
      { label: "수료식", detail: "7개월 간의 학습과 프로젝트를 마무리하며, 수료식을 통해 교육 과정에 대한 회고와 향후 계획을 공유합니다." },
    ],
  },
];

const SECURITY_STEPS: Step[] = [
  {
    id: 1,
    step: "1개월",
    title: "기초 보안 개념 및 실무 전략",
    items: [
      { label: "오리엔테이션", detail: "과정 목표와 방향성을 설명하고, 상세 커리큘럼 및 학습 일정 소개합니다." },
      {
        label: "사이버 시큐리티 개요",
        detail: "정보보안 핵심 개념, 위협 모델, 공격 유형(DDoS 등), 보안 정책, 거버넌스 및 규제(ISO 27001, GDPR 등)를 학습합니다.",
      },
      {
        label: "네트워크 보안",
        detail: "방화벽, IDS/IPS 실습과 네트워크 패킷 분석, 취약점 대응 전략을 익히고 VLAN/VPN 등 네트워크 아키텍처 설계 기술을 학습합니다.",
      },
      {
        label: "클라우드 보안",
        detail: "클라우드 책임 공유 모델, CSP 보안 서비스 실습(AWS, Azure), 클라우드 네이티브 보안 전략, IAM 정책 설정 및 감사를 학습합니다.",
      },
      {
        label: "최신 사이버 보안 기술",
        detail: "제로 트러스트, EDR/XDR 위협 탐지, Threat Intelligence, 머신러닝 기반 보안 분석 등 최신 보안 기술 트렌드를 실습과 함께 학습합니다.",
      },
      {
        label: "침투 테스트",
        detail: "침투 테스트 절차, Metasploit/Nmap 툴 실습, 웹/네트워크 취약점 공격 사례 분석, 보고서 작성 및 대응 방안을 학습합니다.",
      },
      {
        label: "취업 준비 역량 테스트 대비",
        detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다. 최신 구직 동향 및 사례를 연구하며, 자기 PR을 위한 효과적인 취업 전략을 학습합니다.",
      },
    ],
  },
  {
    id: 2,
    step: "2개월",
    title: "심화 보안 기술 및 대응",
    items: [
      {
        label: "암호학",
        detail: "대칭/비대칭 키 암호화, 해시 함수(MD5, SHA 등), PKI 인증서, TLS/SSL 통신 보안 등 암호화 기법과 양자 암호화 기술 동향을 학습합니다.",
      },
      {
        label: "보안 관제 및 로그 분석",
        detail: "SIEM 개념, 로그 수집/정규화 및 상관분석, 탐지 규칙 설정, 알림 시스템 구성, 침해 사고 대응 시나리오와 포렌식 연계를 실습합니다.",
      },
      {
        label: "취약점 진단 및 대응",
        detail: "취약점 스캐너(Nessus, OpenVAS) 활용, CVE 기반 위험도 평가, 패치 관리와 구성 오류 점검, 취약점 리포트 작성 및 대응 프로세스를 학습합니다.",
      },
      { label: "특강1", detail: "기업 연사 또는 전문가를 초빙하여 사이버 보안 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      {
        label: "취업 준비 역량 테스트 대비",
        detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다. 최신 구직 동향 및 사례를 연구하며, 자기 PR을 위한 효과적인 취업 전략을 학습합니다.",
      },
      {
        label: "기본 프로젝트",
        detail:
          "네트워크 보안 설정과 침투 테스트를 통해 보안 취약점을 진단하고, 클라우드 환경에서 IAM 및 보안 정책을 수립하는 기초적인 보안 운영을 실습합니다. 기본 보안 관제 시스템을 구축하고 로그 분석을 통해 위협을 탐지하고 대응하는 단계적 실습을 진행합니다.",
      },
    ],
  },
  {
    id: 3,
    step: "3개월",
    title: "기본 프로젝트 시작",
    items: [
      {
        label: "기본 프로젝트",
        detail:
          "네트워크 보안 설정과 침투 테스트를 통해 보안 취약점을 진단하고, 클라우드 환경에서 IAM 및 보안 정책을 수립하는 기초적인 보안 운영을 실습합니다. 기본 보안 관제 시스템을 구축하고 로그 분석을 통해 위협을 탐지하고 대응하는 단계적 실습을 진행합니다.",
      },
      {
        label: "심화 프로젝트",
        detail:
          "고급 네트워크 및 클라우드 보안을 강화하며, SIEM 활용과 암호학으로 설계된 보안 솔루션을 구현하여 실시간 위협 탐지 및 대응 역량을 발전시킵니다. 팀 단위로 협업하여 복합 보안 시스템을 설계하고 운영하며 심화된 실무 경험을 쌓습니다.",
      },
      { label: "특강2", detail: "기업 연사 또는 전문가를 초빙하여 사이버 보안 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      {
        label: "취업 준비 역량 테스트 대비",
        detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다. 최신 구직 동향 및 사례를 연구하며, 자기 PR을 위한 효과적인 취업 전략을 학습합니다.",
      },
    ],
  },
  {
    id: 4,
    step: "4개월",
    title: "심화 프로젝트 시작 및 해커톤",
    items: [
      {
        label: "심화 프로젝트",
        detail:
          "고급 네트워크 및 클라우드 보안을 강화하며, SIEM 활용과 암호학으로 설계된 보안 솔루션을 구현하여 실시간 위협 탐지 및 대응 역량을 발전시킵니다. 팀 단위로 협업하여 복합 보안 시스템을 설계하고 운영하며 심화된 실무 경험을 쌓습니다.",
      },
      { label: "해커톤", detail: "제한된 시간 내 팀별 아이디어 구상과 제품 설계를 진행하며 집중적인 협업을 통해 창의적 해결능력을 학습합니다." },
      { label: "특강3", detail: "기업 연사 또는 전문가를 초빙하여 사이버 보안 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      {
        label: "취업 준비 역량 테스트 대비",
        detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다. 최신 구직 동향 및 사례를 연구하며, 자기 PR을 위한 효과적인 취업 전략을 학습합니다.",
      },
    ],
  },
  {
    id: 5,
    step: "5개월",
    title: "실무 통합 프로젝트 시작",
    items: [
      {
        label: "실무 통합 프로젝트",
        detail:
          "멀티클라우드 환경에 적합한 통합 보안 아키텍처를 설계하고, 실시간 DevSecOps 위협 대응 시스템을 구축합니다. 클라우드, AI 등 타 과정과 협업하여 보안 강화를 위한 종합 솔루션을 구현하며 재해 복구 및 고가용성 운영 역량을 완성합니다.",
      },
      { label: "특강4", detail: "기업 연사 또는 전문가를 초빙하여 사이버 보안 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      { label: "취업 준비 역량 테스트 대비", detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다." },
      { label: "커리어 성장 전략", detail: "개인 목표와 학습 로드맵을 설계하며 전문가 멘토링과 네트워크 확장 전략을 학습합니다." },
      { label: "협업 및 커뮤니케이션", detail: "팀워크를 강화하는 커뮤니케이션 전략과 갈등 해결 기법을 실습합니다." },
    ],
  },
  {
    id: 6,
    step: "6개월",
    title: "실무 통합 프로젝트 집중 개발",
    items: [
      {
        label: "실무 통합 프로젝트",
        detail:
          "멀티클라우드 환경에 적합한 통합 보안 아키텍처를 설계하고, 실시간 DevSecOps 위협 대응 시스템을 구축합니다. 클라우드, AI 등 타 과정과 협업하여 보안 강화를 위한 종합 솔루션을 구현하며 재해 복구 및 고가용성 운영 역량을 완성합니다.",
      },
      { label: "특강5", detail: "기업 연사 또는 전문가를 초빙하여 사이버 보안 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      { label: "취업 준비 역량 테스트 대비", detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다." },
      { label: "제품 개발 프로세스와 문화", detail: "애자일 환경에서 제품 아이디어 발굴부터 시장 출시까지의 과정을 이해하며 사례 중심으로 학습합니다." },
      { label: "포트폴리오 기획 및 구성", detail: "개인 역량과 기술을 구성하는 효과적인 포트폴리오 설계와 성공 사례를 분석합니다." },
    ],
  },
  {
    id: 7,
    step: "7개월",
    title: "프로젝트 마무리, 최종 발표 및 수료",
    items: [
      {
        label: "실무 통합 프로젝트",
        detail:
          "멀티클라우드 환경에 적합한 통합 보안 아키텍처를 설계하고, 실시간 DevSecOps 위협 대응 시스템을 구축합니다. 클라우드, AI 등 타 과정과 협업하여 보안 강화를 위한 종합 솔루션을 구현하며 재해 복구 및 고가용성 운영 역량을 완성합니다.",
      },
      { label: "특강6", detail: "기업 연사 또는 전문가를 초빙하여 사이버 보안 사례와 과정에 필요한 심화 주제를 다루는 특강을 진행합니다." },
      { label: "취업 준비 역량 테스트 대비", detail: "매월 과정 별 역량 평가 및 피드백을 진행합니다." },
      { label: "이력서 작성 및 자기 PR", detail: "이력서를 통해 강점을 부각시키고 자기 PR 전략을 활용하여 자신을 효과적으로 표현하는 방법을 학습합니다." },
      {
        label: "프로젝트 발표회",
        detail: "프로젝트의 결과물을 발표하고, 심사위원과 현직자로부터 피드백을 받아 전체적인 성과와 구현 과정을 평가받습니다.",
      },
      { label: "수료식", detail: "7개월 간의 학습과 프로젝트를 마무리하며, 수료식을 통해 교육 과정에 대한 회고와 향후 계획을 공유합니다." },
    ],
  },
];

/**
 * roles(연결 직무): 커리큘럼 내용을 바탕으로 트랙별 4개씩 정리.
 */
const TRACKS: Track[] = [
  {
    id: "genai",
    tabLabel: "생성형 AI",
    overviewLabel: "GENERATIVE AI TRACK",
    title: "상상을 실제 서비스로 바꾸는 생성형 AI 엔지니어링",
    description:
      "프롬프트 엔지니어링부터 RAG, LLM 활용과 파인튜닝까지. 데이터 전처리에서 서비스 배포까지 연결하는 실전형 AI 개발 역량을 완성합니다.",
    checklist: ["LLM 기반 AI 챗봇 서비스", "AI 문서 분석 · 업무 자동화", "AI Agent 서비스 구축", "Prompt Engineering 프로젝트"],
    stackTitle: "핵심 기술 스택",
    stack: ["Python", "Prompt", "RAG", "LLM"],
    rolesTitle: "연결 직무",
    roles: ["생성형 AI 개발자", "AI 엔지니어", "RAG·LLM 개발자", "MLOps 엔지니어"],
    accent: "#e8434f",
    accentDark: "#c32d3a",
    steps: GENAI_STEPS,
  },
  {
    id: "security",
    tabLabel: "사이버 보안",
    overviewLabel: "CYBER SECURITY TRACK",
    title: "공격을 이해하고, 탐지하고, 대응하는 사이버 보안 실무",
    description:
      "Network, IAM, SIEM, Zero Trust를 중심으로 위협을 이해하고 탐지·대응하는 실전형 보안 역량을 완성합니다.",
    checklist: ["클라우드·네트워크 보안 프로젝트", "보안 관제 및 침해 대응 프로젝트", "취약점 분석·진단 프로젝트", "DevSecOps 보안 자동화 프로젝트"],
    stackTitle: "핵심 기술 스택",
    stack: ["Network", "IAM", "SIEM", "Zero Trust"],
    rolesTitle: "연결 직무",
    roles: ["보안 관제(SOC) 담당자", "침투 테스트 엔지니어", "보안 아키텍트", "사이버 보안 컨설턴트"],
    accent: "#3b82f6",
    accentDark: "#2563eb",
    steps: SECURITY_STEPS,
  },
  {
    id: "cloud-native",
    tabLabel: "클라우드 네이티브",
    overviewLabel: "CLOUD NATIVE TRACK",
    title: "안정적으로 배포하고 유연하게 확장하는 클라우드 네이티브",
    description:
      "Docker, Kubernetes, CI·CD, Terraform을 기반으로 안정적으로 배포하고 유연하게 확장하는 클라우드 네이티브 실무 역량을 완성합니다.",
    checklist: ["컨테이너 기반 서비스 구축", "Kubernetes 클러스터 운영", "CI/CD 파이프라인 구축", "클라우드 인프라 자동화"],
    stackTitle: "핵심 기술 스택",
    stack: ["Docker", "Kubernetes", "CI·CD", "Terraform"],
    rolesTitle: "연결 직무",
    roles: ["클라우드 엔지니어", "DevOps 엔지니어", "인프라 엔지니어", "SRE(사이트 신뢰성 엔지니어)"],
    accent: "#7c5cfa",
    accentDark: "#5f3fe0",
    steps: CLOUD_NATIVE_STEPS,
  },
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8 12.2L10.6 14.8L16 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------------- 커리큘럼 단계 렌더링 컴포넌트 ---------------- */

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`kt-curr-chevron ${open ? "kt-curr-chevron-open" : ""}`}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AccordionRow({ item }: { item: StepItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`kt-curr-accordion-row ${open ? "kt-curr-accordion-row-open" : ""}`}>
      <button type="button" className="kt-curr-accordion-head" onClick={() => setOpen((v) => !v)}>
        <span>· {item.label}</span>
        <ChevronIcon open={open} />
      </button>
      {open && <div className="kt-curr-accordion-body">{item.detail}</div>}
    </div>
  );
}

/* ---------------- 병합된 컴포넌트 ---------------- */

export default function CurriculumSection() {
  // 트랙(Image 1) 상태
  const [activeTrackId, setActiveTrackId] = useState<string>(TRACKS[0].id);
  const activeTrack = TRACKS.find((t) => t.id === activeTrackId) ?? TRACKS[0];

  // 커리큘럼 단계(Image 2) 상태
  const [activeStepId, setActiveStepId] = useState<number>(1); // 기본값: 1개월
  const activeStep = activeTrack.steps.find((s) => s.id === activeStepId) ?? activeTrack.steps[0];

  return (
    <>
      {/* ===== 무료 상담 신청 폼 ===== */}
      <ConsultSection />

      {/* ===== Image 1: 트랙 선택 ===== */}
      <section className="kt-track">
        <div className="kt-track-inner">
          <h2 className="kt-track-title">당신의 미래를 위한 3가지 트랙</h2>
          <p className="kt-track-subtitle">관심 있는 트랙을 선택하여 상세 커리큘럼을 확인하세요.</p>

          <div className="kt-tabs">
            {TRACKS.map((track) => (
              <button
                key={track.id}
                type="button"
                className={`kt-tab ${track.id === activeTrackId ? "kt-tab-active" : ""}`}
                style={{ "--kt-tab-accent": track.accent } as React.CSSProperties}
                onClick={() => setActiveTrackId(track.id)}
              >
                {track.tabLabel}
              </button>
            ))}
          </div>

          <div
            className="kt-panel"
            style={
              {
                "--kt-track-accent": activeTrack.accent,
                "--kt-track-accent-dark": activeTrack.accentDark,
              } as React.CSSProperties
            }
          >
            <div className="kt-panel-left">
              <span className="kt-overview-label">{activeTrack.overviewLabel}</span>
              <h3 className="kt-panel-title">{activeTrack.title}</h3>
              {activeTrack.description && <p className="kt-panel-desc">{activeTrack.description}</p>}

              {activeTrack.checklist.length > 0 && (
                <ul className="kt-checklist">
                  {activeTrack.checklist.map((item) => (
                    <li key={item}>
                      <span className="kt-check-icon">
                        <CheckIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="kt-panel-right">
              <div className="kt-stack-card">
                <h4 className="kt-stack-title">{activeTrack.stackTitle}</h4>
                <div className="kt-stack-pills">
                  {activeTrack.stack.map((item) => (
                    <span key={item} className="kt-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="kt-roles-card">
                <h4 className="kt-roles-title">{activeTrack.rolesTitle}</h4>
                <div className="kt-roles-pills">
                  {activeTrack.roles.map((role) => (
                    <span key={role} className="kt-roles-pill">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Image 2: 단계별 커리큘럼 ===== */}
      <section className="kt-curr">
        <div
          className="kt-curr-card"
          style={
            {
              "--kt-accent": activeTrack.accent,
              "--kt-accent-dark": activeTrack.accentDark,
            } as React.CSSProperties
          }
        >
          <div className="kt-curr-header">
            <p className="kt-curr-eyebrow">Curriculum</p>
            <h2 className="kt-curr-title">
              단계별 학습 설계로
              <br />
              탄탄하게 쌓는 커리큘럼
            </h2>
          </div>

          <div className="kt-curr-body">
            <div className="kt-curr-list">
              {activeTrack.steps.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`kt-curr-list-item ${s.id === activeStepId ? "kt-curr-list-item-active" : ""}`}
                  onClick={() => setActiveStepId(s.id)}
                >
                  <span className="kt-curr-list-step">{s.step}</span>
                  <span className="kt-curr-list-title">{s.title}</span>
                </button>
              ))}
            </div>

            <div className="kt-curr-panel">
              <span className="kt-curr-badge">{activeStep.step}</span>
              <h3 className="kt-curr-panel-title">{activeStep.title}</h3>

              <div className="kt-curr-label">
                <span className="kt-curr-checkbox" aria-hidden="true" />
                학습 내용
              </div>

              <div className="kt-curr-accordion">
                {activeStep.items.map((item) => (
                  <AccordionRow key={item.label} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

# 핏쉐어 랜딩페이지 구현 방안

## 1. 프로젝트 개요

* **목적**: 핏쉐어 서비스의 가치 제안을 명확히 전달하고, 회원 전환(가입/앱 다운로드)을 극대화하는 단일 페이지 웹사이트 구축
* **대상**: 20‒40대 운동/헬스 관심 사용자, 피트니스 제휴 시설 운영자
* **핵심 KPI**

  * 방문 대비 회원가입 전환율 ≥ 15 %
  * 페이지 로드 시간 (LCP) ≤ 2.5 s (모바일 4G 기준)
  * SEO Lighthouse 점수 ≥ 95

## 2. 핵심 메시지·콘텐츠 정의

| 섹션           | 메시지                                            | CTA             |
| ------------ | ---------------------------------------------- | --------------- |
| Hero         | “핏쉐어 하나면 어디서나 운동할 수 있어요.”                      | “지금 무료 체험하기”    |
| Benefits     | • 전국 제휴 헬스장 자유 이용<br>• 1개월 단위 구독<br>• 친구 초대 할인 | 내부 링크(결제∙가입 섹션) |
| Social Proof | 사용자 후기(★4.8/5) • 언론 보도 • 기업 제휴 로고              | “후기 더 보기”       |
| Pricing      | Basic / Pro / Team 구독 요금제 비교                   | “플랜 선택”         |
| FAQ          | 자주 묻는 질문 5‑7개                                  | 문의 폼으로 연결       |
| Footer       | 회사 정보 • 개인정보·이용약관 • SNS 링크                     | —               |

> **TODO**: 실제 카피·이미지는 마케팅팀과 협의해 확정

## 3. 정보 아키텍처 & 와이어프레임

```
[Header]  로고 | 메뉴 | CTA Button  
[Hero]    메시지 + 모션 이미지/GIF  
[Benefits] 3‑column 아이콘형  
[Video]   30s 소개 영상 (선택)  
[Social Proof] Carousel  
[Pricing] Toggleable 카드형  
[FAQ] Accordion  
[CTA Banner] Gradient 배경 + 버튼  
[Footer]
```

* **Figma**로 Hi‑Fi UI 디자인 및 모바일(375 px) / 데스크톱(1280 px) Breakpoint 설계
* 컴포넌트 기반(Design System) 개발 → 재사용·운영 효율화

## 4. 디자인 가이드

* **톤앤매너**: Active · Fresh · Trustworthy
* **Primary Color**: `#03C75A` (핏쉐어 그린)
* **Secondary**: `#101010` Black, `#F5F5F5` Light Grey
* **폰트**: Pretendard (Webfont), 16 px base, 1.5 rem line-height
* **모션**: Framer Motion Fade‑in / Slide‑up 0.4 s
* 접근성 (WCAG 2.1 AA) 대비 색 대비 4.5+:1 이상

## 5. 기술 스택

| 영역        | 선택 기술                           | 비고                    |
| --------- | ------------------------------- | --------------------- |
| Frontend  | **Next.js 14** + **TypeScript** | App Router, SSG/ISR   |
| Styling   | **Tailwind CSS**                | 클래스 기반, JIT           |
| 상태관리      | TanStack Query                  | 외부 API 캐싱             |
| CMS       | Strapi Cloud                    | 프로모션 문구 실시간 수정        |
| Analytics | GA4, Meta Pixel                 | 전환 추적, A/B Test       |
| 배포        | Vercel                          | CI/CD, Preview Deploy |
| 양식 처리     | react-hook-form + reCAPTCHA v3  | 스팸 방지                 |

## 6. SEO·퍼포먼스 전략

* 메타 태그, Open Graph, JSON‑LD 구조화 데이터(FAQPage) 삽입
* 이미지 `next/optimized‑images` & WebP 변환, `priority`/`loading="lazy"`
* CLS 최소화를 위해 Critical CSS 인라인, 폰트 Preload
* Core Web Vitals 모니터링(Vercel Analytics, SpeedCurve)

## 7. 접근성(Accessibility)

* 시맨틱 HTML5 (header/nav/main/section/aside/footer)
* 키보드 Navigable, Skip‑to‑content 링크
* ARIA‑label, alt 텍스트
* 컬러 대비 자동 테스트 (axe-core CI)

## 8. 데이터 연동·백엔드

* REST API `/api/signup` → CRM(예: HubSpot) 파이프라인 연결
* Webhook으로 가입 이벤트 Slack #sales 알림
* 서버리스 함수(`pages/api/`)로 간편 처리

## 9. 테스트 전략

| 구분     | 툴             | 목표               |
| ------ | ------------- | ---------------- |
| Unit   | Vitest        | 컴포넌트 로직 100 %    |
| E2E    | Playwright    | 주요 Flow (가입, 결제) |
| 퍼포먼스   | Lighthouse‑CI | PR마다 자동 점검       |
| 시각적 회귀 | Chromatic     | UI 변경 diff 검사    |

## 10. 일정·WBS (예시)

| 주차  | Deliverable              |
| --- | ------------------------ |
| 1주차 | 요구 사항 확정, IA & Copy 초안   |
| 2주차 | Figma 디자인 시안 ①           |
| 3주차 | 디자인 확정, Next.js 기본 구조 세팅 |
| 4주차 | 섹션별 개발, CMS 연동           |
| 5주차 | QA & Cross‑browser test  |
| 6주차 | SEO 최적화, Launch          |

> *버퍼 1주 포함 총 7주*

## 11. 역할 분담

* **PM**: 일정·리스크 관리, 대내외 커뮤니케이션
* **디자이너 1**: UI/UX, Design System
* **FE 개발 2**: Next.js 구현·테스트
* **BE 개발 1**: CMS·API 설계
* **마케팅**: 콘텐츠·카피라이팅, 캠페인 설정

## 12. 리스크 & 대응

| 위험      | 영향    | 대응 방안                   |
| ------- | ----- | ----------------------- |
| 콘텐츠 지연  | 일정 지연 | 초안 기반 Dummy 텍스트로 선개발    |
| 성능 미달   | 전환 저하 | Lighthouse‑CI & 이미지 최적화 |
| SEO 순위↓ | 노출 감소 | 전문 컨설턴트 리뷰 & 리포트        |

## 13. 유지보수·운영

* GitHub PR → Vercel Preview → Merge 시 Production 배포
* CMS 통해 복수 랜딩 A/B 테스트
* 월 1회 Lighthouse Audit & 오류 티켓 관리 (Jira)

---

> 최종 검수 후 `README.md` 로 저장, GitHub Repo 루트에 위치


---

<!-- 기존 템플릿 내용은 아래로 이동 -->


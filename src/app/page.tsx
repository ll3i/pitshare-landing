import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#03C75A]">PitShare</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
            <a href="#benefits" className="hover:text-[#03C75A]">혜택</a>
            <a href="#social" className="hover:text-[#03C75A]">후기</a>
            <a href="#pricing" className="hover:text-[#03C75A]">요금제</a>
            <a href="#faq" className="hover:text-[#03C75A]">FAQ</a>
          </nav>
          <div className="flex gap-2">
            <a href="#" className="px-4 py-1.5 rounded bg-[#03C75A] text-white font-semibold text-sm hover:bg-[#029e48] transition">회원가입</a>
            <a href="#" className="px-4 py-1.5 rounded border border-[#03C75A] text-[#03C75A] font-semibold text-sm hover:bg-[#e6f9ef] transition">로그인</a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#03C75A] to-[#101010] text-white py-20 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                핏쉐어 하나면<br />
                <span className="text-[#F5F5F5]">어디서나 운동할 수 있어요.</span>
              </h1>
              <p className="mb-8 text-lg opacity-90 max-w-md">
                전국 제휴 헬스장 자유 이용, 1개월 단위 구독, 친구 초대 할인까지!<br />
                지금 무료 체험으로 새로운 운동 라이프를 시작하세요.
              </p>
              <a href="#pricing" className="inline-block px-8 py-3 rounded-full bg-white text-[#03C75A] font-bold text-lg shadow hover:bg-[#e6f9ef] transition">지금 무료 체험하기</a>
            </div>
            <div className="flex-1 flex justify-center">
              <Image src="/next.svg" alt="핏쉐어 일러스트" width={320} height={240} className="drop-shadow-xl" />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#03C75A]">핏쉐어 주요 혜택</h2>
            <p className="text-gray-600">운동을 더 쉽고, 더 자유롭게, 더 저렴하게!</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F5F5] rounded-xl p-8 flex flex-col items-center shadow-sm">
              <span className="text-4xl mb-4">🏋️‍♂️</span>
              <h3 className="font-bold text-lg mb-2">전국 제휴 헬스장 자유 이용</h3>
              <p className="text-gray-600 text-sm">원하는 곳에서 언제든 운동! 위치 제한 없이 제휴 시설을 자유롭게 이용하세요.</p>
            </div>
            <div className="bg-[#F5F5F5] rounded-xl p-8 flex flex-col items-center shadow-sm">
              <span className="text-4xl mb-4">📅</span>
              <h3 className="font-bold text-lg mb-2">1개월 단위 구독</h3>
              <p className="text-gray-600 text-sm">장기 약정 NO! 필요한 기간만 부담 없이 구독하고 해지도 간편하게.</p>
            </div>
            <div className="bg-[#F5F5F5] rounded-xl p-8 flex flex-col items-center shadow-sm">
              <span className="text-4xl mb-4">🤝</span>
              <h3 className="font-bold text-lg mb-2">친구 초대 할인</h3>
              <p className="text-gray-600 text-sm">친구와 함께하면 모두 할인! 초대할수록 더 커지는 혜택.</p>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section id="social" className="py-16 bg-[#F5F5F5]">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#03C75A]">사용자 후기 & 제휴사</h2>
            <p className="text-gray-600">평점 4.8/5.0 | 10,000+ 회원이 선택!</p>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
              <span className="text-3xl mb-2">"</span>
              <p className="text-gray-700 text-sm mb-4">여행 중에도 가까운 헬스장을 쓸 수 있어 정말 편리해요!</p>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">🧑‍💼</span>
                <span className="text-xs text-gray-500">김OO, 직장인</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
              <span className="text-3xl mb-2">"</span>
              <p className="text-gray-700 text-sm mb-4">1개월만 써보고 싶었는데, 해지도 쉬워서 부담 없어요.</p>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">👩‍🎓</span>
                <span className="text-xs text-gray-500">이OO, 대학생</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow flex flex-col items-center">
              <span className="text-3xl mb-2">"</span>
              <p className="text-gray-700 text-sm mb-4">친구랑 같이 쓰니 할인도 받고, 운동도 더 재밌어요!</p>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">🧑‍🤝‍🧑</span>
                <span className="text-xs text-gray-500">박OO, 프리랜서</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="bg-white rounded px-4 py-2 text-xs text-gray-600 shadow">🏢 피트니스월드</span>
            <span className="bg-white rounded px-4 py-2 text-xs text-gray-600 shadow">🏢 짐프렌즈</span>
            <span className="bg-white rounded px-4 py-2 text-xs text-gray-600 shadow">🏢 헬스존</span>
            <span className="bg-white rounded px-4 py-2 text-xs text-gray-600 shadow">🏢 바디핏</span>
          </div>
          <a href="#" className="inline-block px-6 py-2 rounded-full border border-[#03C75A] text-[#03C75A] font-semibold text-sm hover:bg-[#e6f9ef] transition">후기 더 보기</a>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#03C75A]">요금제 안내</h2>
            <p className="text-gray-600">필요에 따라 선택하는 합리적인 구독 플랜</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-gray-200 bg-[#F5F5F5] p-8 flex flex-col items-center shadow-sm">
              <h3 className="font-bold text-lg mb-2">Basic</h3>
              <div className="text-2xl font-extrabold mb-2">₩0</div>
              <p className="text-gray-600 text-sm mb-4">기본 헬스장 이용, 친구 초대 할인</p>
              <ul className="text-xs text-gray-500 mb-6 space-y-1">
                <li>제휴 헬스장 월 5회</li>
                <li>친구 초대 할인</li>
                <li>앱 알림</li>
              </ul>
              <a href="#" className="w-full py-2 rounded bg-[#03C75A] text-white font-semibold text-sm hover:bg-[#029e48] transition text-center">시작하기</a>
            </div>
            <div className="rounded-xl border-2 border-[#03C75A] bg-white p-8 flex flex-col items-center shadow-lg scale-105">
              <h3 className="font-bold text-lg mb-2">Pro</h3>
              <div className="text-2xl font-extrabold mb-2">₩29,000</div>
              <p className="text-gray-600 text-sm mb-4">무제한 헬스장 이용, 모든 혜택 포함</p>
              <ul className="text-xs text-gray-500 mb-6 space-y-1">
                <li>제휴 헬스장 무제한</li>
                <li>친구 초대 할인</li>
                <li>프리미엄 앱 기능</li>
              </ul>
              <a href="#" className="w-full py-2 rounded bg-[#03C75A] text-white font-semibold text-sm hover:bg-[#029e48] transition text-center">시작하기</a>
            </div>
            <div className="rounded-xl border border-gray-200 bg-[#F5F5F5] p-8 flex flex-col items-center shadow-sm">
              <h3 className="font-bold text-lg mb-2">Team</h3>
              <div className="text-2xl font-extrabold mb-2">₩99,000</div>
              <p className="text-gray-600 text-sm mb-4">10인 이하 팀, 전용 관리 기능</p>
              <ul className="text-xs text-gray-500 mb-6 space-y-1">
                <li>모든 Pro 혜택</li>
                <li>팀 관리 대시보드</li>
                <li>팀 전용 할인</li>
              </ul>
              <a href="#" className="w-full py-2 rounded bg-[#03C75A] text-white font-semibold text-sm hover:bg-[#029e48] transition text-center">시작하기</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 bg-[#F5F5F5]">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#03C75A]">자주 묻는 질문</h2>
            <p className="text-gray-600">궁금한 점이 있으신가요?</p>
          </div>
          {/* FAQ Accordion */}
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {q: "가입은 어떻게 하나요?", a: "상단의 '회원가입' 버튼을 클릭해 간단히 가입할 수 있습니다."},
              {q: "해지는 언제든 가능한가요?", a: "네, 구독은 언제든 해지할 수 있습니다. 남은 기간은 환불되지 않습니다."},
              {q: "제휴 헬스장은 어디서 확인하나요?", a: "앱 또는 홈페이지에서 제휴 시설 목록을 확인할 수 있습니다."},
              {q: "친구 초대 할인은 어떻게 적용되나요?", a: "내 초대 링크로 가입한 친구가 결제 시 자동으로 할인됩니다."},
              {q: "팀 요금제는 어떻게 신청하나요?", a: "문의하기를 통해 별도 상담 후 신청 가능합니다."},
            ].map((item, i) => (
              <details key={i} className="bg-white rounded shadow p-4 group">
                <summary className="font-semibold cursor-pointer text-[#03C75A] group-open:mb-2">{item.q}</summary>
                <div className="text-gray-700 text-sm mt-2">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 bg-gradient-to-r from-[#03C75A] to-[#101010] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">지금 바로 핏쉐어와 함께 운동을 시작하세요!</h2>
            <p className="mb-6 text-lg opacity-90">회원가입만 해도 1개월 무료 체험 혜택을 드립니다.</p>
            <a href="#" className="inline-block px-8 py-3 rounded-full bg-white text-[#03C75A] font-bold text-lg shadow hover:bg-[#e6f9ef] transition">무료 체험하기</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#101010] text-gray-300 py-10 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-4">
          <div>
            <div className="text-xl font-bold text-white mb-2">PitShare</div>
            <div className="text-sm mb-2">© 2024 핏쉐어 | All rights reserved.</div>
            <div className="flex gap-3 mt-2">
              <a href="#" className="hover:text-[#03C75A]">이용약관</a>
              <a href="#" className="hover:text-[#03C75A]">개인정보처리방침</a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2 text-white">회사 정보</div>
            <div className="text-sm">핏쉐어(주) | 사업자등록번호 123-45-67890<br/>서울특별시 강남구 테헤란로 123</div>
          </div>
          <div>
            <div className="font-semibold mb-2 text-white">SNS</div>
            <div className="flex gap-3">
              <a href="#" className="hover:text-[#03C75A]">Instagram</a>
              <a href="#" className="hover:text-[#03C75A]">Facebook</a>
              <a href="#" className="hover:text-[#03C75A]">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

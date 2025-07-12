import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#f5f7fa]">
      {/* 상단 네비게이션 */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0074FF]/80 via-[#03C75A]/80 to-[#FFD447]/80 backdrop-blur shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-2xl font-extrabold text-white tracking-tight">FitShare</span>
          <ul className="hidden md:flex gap-8 text-white/90 font-semibold text-base">
            <li><a href="#features" className="hover:text-white transition">기능</a></li>
            <li><a href="#how" className="hover:text-white transition">플로우</a></li>
            <li><a href="#testimonials" className="hover:text-white transition">후기</a></li>
            <li><a href="#pricing" className="hover:text-white transition">요금제</a></li>
            <li><a href="#cta" className="hover:text-white transition">문의</a></li>
          </ul>
          <div className="flex gap-2">
            <button className="bg-white/90 text-[#03C75A] font-bold px-5 py-2 rounded-full shadow hover:bg-white transition">앱 다운로드</button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0074FF] via-[#03C75A] to-[#FFD447] text-white text-center flex flex-col items-center justify-center min-h-[70vh] relative overflow-hidden">
        {/* 일러스트/이모지 */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 opacity-20 pointer-events-none select-none">
          <span className="text-[12rem] md:text-[16rem]">🏋️‍♂️</span>
        </div>
        <h1 className="relative z-10 text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl mb-6">방치된 장비를 월수익 자산으로!</h1>
        <p className="relative z-10 text-lg md:text-2xl font-medium mb-8 opacity-90">P2P 운동장비 구독 플랫폼, 핏쉐어 – 한국·몽골 동시 론칭!<br />앱 다운로드/사전예약으로 얼리버드 혜택!</p>
        <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button className="bg-white text-[#03C75A] font-bold px-8 py-4 rounded-full shadow-lg text-lg hover:bg-gray-100 transition">앱 다운로드</button>
          <button className="bg-white text-[#0074FF] font-bold px-8 py-4 rounded-full shadow-lg text-lg hover:bg-gray-100 transition">몽골 베타 사전예약</button>
        </div>
        <div className="relative z-10 flex gap-2 justify-center mt-2">
          <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold">🇰🇷 한국</span>
          <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold">🇲🇳 몽골</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-[#03C75A]">핏쉐어 주요 기능</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center gap-4">
            <span className="text-5xl">🤖</span>
            <h3 className="font-bold text-xl">AI 매칭</h3>
            <p className="text-gray-500">수요자와 자동 매칭, 최적화 추천</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="text-5xl">📦</span>
            <h3 className="font-bold text-xl">장비 등록</h3>
            <p className="text-gray-500">방치된 장비를 간편하게 등록</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="text-5xl">🛡️</span>
            <h3 className="font-bold text-xl">보험·보증</h3>
            <p className="text-gray-500">안심 보험/보증 서비스 제공</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 bg-[#f0f6ff] text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-[#0074FF]">How It Works</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="flex-1 flex flex-col items-center gap-4">
            <span className="text-4xl bg-white rounded-full w-16 h-16 flex items-center justify-center shadow mb-2">1</span>
            <h3 className="font-bold text-lg mb-1">장비 등록</h3>
            <p className="text-gray-500">방치된 장비를 간편하게 등록</p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-4">
            <span className="text-4xl bg-white rounded-full w-16 h-16 flex items-center justify-center shadow mb-2">2</span>
            <h3 className="font-bold text-lg mb-1">AI 매칭</h3>
            <p className="text-gray-500">수요자와 자동 매칭, 최적화 추천</p>
          </div>
          <div className="flex-1 flex flex-col items-center gap-4">
            <span className="text-4xl bg-white rounded-full w-16 h-16 flex items-center justify-center shadow mb-2">3</span>
            <h3 className="font-bold text-lg mb-1">보험·보증</h3>
            <p className="text-gray-500">안심 보험/보증 서비스 제공</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-[#03C75A]">실제 사용자 후기</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#f0f6ff] rounded-2xl p-8 flex flex-col items-center shadow">
            <span className="text-4xl mb-2">🧑‍💼</span>
            <p className="text-gray-700 mb-2">“방치하던 러닝머신으로 매달 수익이 생겨요! 앱도 직관적이고, 보험 덕분에 안심돼요.”</p>
            <span className="text-sm text-gray-500">지민(서울)</span>
          </div>
          <div className="bg-[#f0f6ff] rounded-2xl p-8 flex flex-col items-center shadow">
            <span className="text-4xl mb-2">👩‍🎓</span>
            <p className="text-gray-700 mb-2">“고가 장비를 저렴하게 빌릴 수 있어 좋아요. 현지 창고에서 바로 픽업 가능해서 편리해요!”</p>
            <span className="text-sm text-gray-500">Anu(울란바토르)</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-[#f5f7fa] text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-[#0074FF]">요금제 안내</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="flex-1 bg-white rounded-2xl p-10 shadow flex flex-col items-center">
            <h3 className="font-bold text-xl mb-2 text-[#03C75A]">한국 월 구독</h3>
            <p className="text-2xl font-extrabold text-[#03C75A] mb-4">₩29,000~/월</p>
            <ul className="text-gray-700 text-center space-y-1 mb-6">
              <li>모든 장비 무제한 이용</li>
              <li>보험·보증 포함</li>
              <li>앱 전용 혜택</li>
            </ul>
            <button className="bg-[#03C75A] text-white font-bold px-8 py-3 rounded-full shadow hover:bg-[#029e4b] transition">앱 다운로드</button>
          </div>
          <div className="flex-1 bg-white rounded-2xl p-10 shadow flex flex-col items-center">
            <h3 className="font-bold text-xl mb-2 text-[#0074FF]">몽골 단기 렌트</h3>
            <p className="text-2xl font-extrabold text-[#0074FF] mb-4">₮15,000~/7일</p>
            <ul className="text-gray-700 text-center space-y-1 mb-6">
              <li>7/14/30일 단기 렌트</li>
              <li>현지 파트너 창고 픽업</li>
              <li>보험·보증 포함</li>
            </ul>
            <button className="bg-[#0074FF] text-white font-bold px-8 py-3 rounded-full shadow hover:bg-[#005fcc] transition">베타 사전예약</button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id="cta" className="py-20 bg-gradient-to-r from-[#03C75A] via-[#0074FF] to-[#FFD447] text-white text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 drop-shadow">지금 바로 앱 다운로드 또는 베타 대기자 등록!</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#03C75A] font-bold px-8 py-4 rounded-full shadow-lg text-lg hover:bg-gray-100 transition">앱 다운로드</button>
          <button className="bg-white text-[#0074FF] font-bold px-8 py-4 rounded-full shadow-lg text-lg hover:bg-gray-100 transition">몽골 베타 신청</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#222] text-white py-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
          <div className="text-base">© 2025 FitShare | 사업자등록번호 123-45-67890 | 서울특별시 강남구 | contact@fitshare.com</div>
          <div className="flex gap-6 mt-4 md:mt-0 text-2xl justify-center">
            <a href="#" className="hover:text-[#03C75A] transition" aria-label="홈페이지">🌐</a>
            <a href="#" className="hover:text-[#0074FF] transition" aria-label="앱">📱</a>
            <a href="#" className="hover:text-[#FFD447] transition" aria-label="이메일">✉️</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

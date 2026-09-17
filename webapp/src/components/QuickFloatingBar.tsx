import React from 'react';
import { PhoneCall, Calculator, Lock } from 'lucide-react';
import { PageId } from '../types';

interface QuickFloatingBarProps {
  onOpenQuickCounsel: () => void;
  onNavigate: (page: PageId) => void;
}

export const QuickFloatingBar: React.FC<QuickFloatingBarProps> = ({
  onOpenQuickCounsel,
  onNavigate,
}) => {
  return (
    <>
      {/* 1. Desktop Floating Speed Dial (Right side, PC only) */}
      <aside
        id="desktop-floating-speed-dial"
        className="hidden xl:flex fixed right-6 bottom-8 z-40 flex-col gap-2.5 select-none"
        aria-label="빠른 바로가기 및 상담"
      >
        {/* 1분 자가진단 플로팅 버튼 */}
        <button
          id="floating-btn-diagnosis"
          onClick={() => onNavigate('diagnosis')}
          className="group flex items-center gap-3 bg-[#151C2C] text-white p-3 rounded-2xl shadow-xl hover:shadow-2xl border border-[#D7AE66]/50 hover:border-[#D7AE66] transition-all hover:-translate-x-1 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-[#20293D] flex items-center justify-center text-[#D7AE66] group-hover:scale-105 transition-transform">
            <Calculator className="w-5 h-5" />
          </div>
          <div className="text-left pr-2">
            <div className="text-[10px] text-[#D7AE66] font-semibold flex items-center gap-1">
              <span>1분 만에 확인</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </div>
            <div className="text-xs font-bold text-white tracking-tight">자가진단 탕감률 계산</div>
          </div>
        </button>

        {/* 100% 비밀보장 무료상담 플로팅 버튼 */}
        <button
          id="floating-btn-counsel"
          onClick={onOpenQuickCounsel}
          className="group flex items-center gap-3 bg-gradient-to-r from-[#D7AE66] to-[#C59C53] text-[#151C2C] p-3 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-x-1 transition-all cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-[#151C2C] text-[#D7AE66] flex items-center justify-center group-hover:scale-105 transition-transform">
            <Lock className="w-5 h-5" />
          </div>
          <div className="text-left pr-2">
            <div className="text-[10px] text-[#151C2C]/80 font-bold">100% 비밀보장</div>
            <div className="text-xs font-black text-[#151C2C] tracking-tight">간편 무료상담 신청</div>
          </div>
        </button>
      </aside>

      {/* 2. Mobile Bottom Fixed CTA Bar (화면 가림 최소화 + 전화상담 / 1분 자가진단 / 상담신청 3-Way UX) */}
      <nav
        id="mobile-bottom-fixed-cta"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#121824]/95 backdrop-blur-md border-t border-[#25324C] px-2 py-2 shadow-2xl safe-area-pb"
        aria-label="모바일 하단 고정 상담바"
      >
        <div className="max-w-md mx-auto grid grid-cols-3 gap-1.5">
          {/* 1. 전화상담 (즉시 통화) */}
          <a
            id="btn-mobile-bottom-call"
            href="tel:050369821000"
            className="min-h-[46px] flex flex-col items-center justify-center py-1.5 px-1 bg-[#1C263A] hover:bg-[#232F46] active:bg-[#151D2C] rounded-xl text-slate-100 border border-slate-700/70 text-center transition-all cursor-pointer"
            title="대표전화 바로걸기"
          >
            <div className="flex items-center gap-1 text-[#D7AE66]">
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="text-[10px] text-slate-300 font-medium">전화상담</span>
            </div>
            <div className="text-[11px] font-black text-white tracking-tight mt-0.5">0503-6982-1000</div>
          </a>

          {/* 2. 1분 자가진단 (부담 없는 탐색) */}
          <button
            id="btn-mobile-bottom-diagnosis"
            onClick={() => onNavigate('diagnosis')}
            className="min-h-[46px] flex flex-col items-center justify-center py-1.5 px-1 bg-[#1A2336] hover:bg-[#222E46] rounded-xl text-[#D7AE66] border border-[#D7AE66]/40 text-center transition-all cursor-pointer"
          >
            <div className="flex items-center gap-1">
              <Calculator className="w-3.5 h-3.5 text-[#D7AE66]" />
              <span className="text-[10px] text-[#D7AE66] font-bold">1분 자가진단</span>
            </div>
            <div className="text-[11px] font-bold text-white tracking-tight mt-0.5">자격·탕감 확인</div>
          </button>

          {/* 3. 상담신청 (메인 전환) */}
          <button
            id="btn-mobile-bottom-counsel"
            onClick={() => onNavigate('consultation')}
            className="min-h-[46px] flex flex-col items-center justify-center py-1.5 px-1 bg-gradient-to-r from-[#D7AE66] to-[#C59C53] hover:from-[#e4c281] hover:to-[#D7AE66] active:scale-[0.98] rounded-xl text-[#151C2C] font-black text-center shadow-lg transition-all cursor-pointer"
          >
            <div className="flex items-center gap-1 text-[#151C2C]">
              <Lock className="w-3.5 h-3.5" />
              <span className="text-[10px] font-extrabold uppercase tracking-tighter">100% 비밀보장</span>
            </div>
            <div className="text-[11px] font-black text-[#151C2C] mt-0.5">
              상담 신청하기
            </div>
          </button>
        </div>
      </nav>
    </>
  );
};

import React, { useState, useEffect } from 'react';
import {
  PageId,
  DeviceMode,
  StoryCase,
  RehabSubTab,
  BankruptcySubTab,
  DiagnosisAnswers,
  ConsultationFormData,
} from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuickCounselModal } from './components/QuickCounselModal';
import { QuickFloatingBar } from './components/QuickFloatingBar';
import { HomeView } from './views/HomeView';
import { RehabView } from './views/RehabView';
import { BankruptcyView } from './views/BankruptcyView';
import { StoryView } from './views/StoryView';
import { NewsView } from './views/NewsView';
import { DiagnosisView } from './views/DiagnosisView';
import { ConsultationView } from './views/ConsultationView';
import { DesignSystemView } from './views/DesignSystemView';
import { SitemapUxView } from './views/SitemapUxView';
import { CursorGuideView } from './views/CursorGuideView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [quickCounselOpen, setQuickCounselOpen] = useState<boolean>(false);
  const [selectedStory, setSelectedStory] = useState<StoryCase | null>(null);
  const [currentRehabTab, setCurrentRehabTab] = useState<RehabSubTab>('overview');
  const [currentBankruptcyTab, setCurrentBankruptcyTab] = useState<BankruptcySubTab>('overview');
  const [consultationPrefill, setConsultationPrefill] = useState<Partial<ConsultationFormData> | undefined>(undefined);

  const handleNavigate = (page: PageId, subTab?: string) => {
    if (page === 'rehab' && subTab) {
      setCurrentRehabTab(subTab as RehabSubTab);
    } else if (page === 'rehab' && !subTab) {
      setCurrentRehabTab('overview');
    }

    if (page === 'bankruptcy' && subTab) {
      setCurrentBankruptcyTab(subTab as BankruptcySubTab);
    } else if (page === 'bankruptcy' && !subTab) {
      setCurrentBankruptcyTab('overview');
    }

    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDiagnosisApply = (diagnosis: DiagnosisAnswers) => {
    setConsultationPrefill({
      incomeType: diagnosis.hasRegularIncome === '예' ? '정기 소득 있음 (급여/사업/아르바이트)' : '현재 소득 없음 (구직/질병/가사)',
      overdueStatus: diagnosis.overdueStatus || '연체 전 (정상 상환 중이나 버거움)',
      counselWish: diagnosis.priorityGoal || '월 변제금 낮추기',
      notes: `[자가진단 결과 연동]\n• 상환 곤란도: ${diagnosis.repaymentDifficulty}\n• 재산 대비 부채: ${diagnosis.debtVsAsset}\n• 우선 목표: ${diagnosis.priorityGoal}`,
    });
    setCurrentPage('consultation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectStory = (story: StoryCase | null) => {
    setSelectedStory(story);
    if (story && currentPage !== 'story') {
      setCurrentPage('story');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Device Frame Container Classes
  const getDeviceFrameClass = () => {
    if (deviceMode === 'tablet') {
      return 'max-w-[768px] mx-auto shadow-2xl my-8 rounded-3xl overflow-hidden border-[8px] border-slate-800 bg-[#F7F8FA] min-h-[90vh] transition-all duration-300';
    }
    if (deviceMode === 'mobile') {
      return 'max-w-[390px] mx-auto shadow-2xl my-8 rounded-[40px] overflow-hidden border-[10px] border-slate-800 bg-[#F7F8FA] min-h-[850px] transition-all duration-300';
    }
    return 'w-full bg-[#F7F8FA] min-h-screen transition-all duration-300';
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#222222]">
      {/* Device Mode Notice Banner (Only shown when simulator is active) */}
      {deviceMode !== 'desktop' && (
        <div className="bg-[#151C2C] text-xs text-center py-2 px-4 text-[#D7AE66] border-b border-slate-800 flex items-center justify-center gap-2">
          <span>
            {deviceMode === 'tablet' ? '📟 태블릿 반응형 뷰 (768px)' : '📱 모바일 반응형 뷰 (390px)'} 시뮬레이션 모드 활성화 중
          </span>
          <button
            onClick={() => setDeviceMode('desktop')}
            className="underline text-white font-bold ml-2 hover:text-[#D7AE66]"
          >
            데스크탑 전체화면으로 복귀
          </button>
        </div>
      )}

      {/* Frame Container */}
      <div className={getDeviceFrameClass()}>
        {/* Navigation Header */}
        <Header
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenQuickCounsel={() => setQuickCounselOpen(true)}
          deviceMode={deviceMode}
          onChangeDeviceMode={setDeviceMode}
        />

        {/* Main Content Area */}
        <main className="min-h-[600px]">
          {currentPage === 'home' && (
            <HomeView
              onNavigate={handleNavigate}
              onOpenQuickCounsel={() => setQuickCounselOpen(true)}
              onSelectStory={handleSelectStory}
            />
          )}

          {currentPage === 'rehab' && (
            <RehabView
              onNavigate={handleNavigate}
              onOpenQuickCounsel={() => setQuickCounselOpen(true)}
              initialTab={currentRehabTab}
            />
          )}

          {currentPage === 'bankruptcy' && (
            <BankruptcyView
              onNavigate={handleNavigate}
              onOpenQuickCounsel={() => setQuickCounselOpen(true)}
              initialTab={currentBankruptcyTab}
            />
          )}

          {currentPage === 'story' && (
            <StoryView
              onNavigate={handleNavigate}
              onOpenQuickCounsel={() => setQuickCounselOpen(true)}
              selectedStory={selectedStory}
              onSelectStory={handleSelectStory}
            />
          )}

          {currentPage === 'news' && (
            <NewsView
              onNavigate={handleNavigate}
              onOpenQuickCounsel={() => setQuickCounselOpen(true)}
            />
          )}

          {currentPage === 'diagnosis' && (
            <DiagnosisView
              onNavigate={handleNavigate}
              onApplyWithDiagnosis={handleDiagnosisApply}
            />
          )}

          {currentPage === 'consultation' && (
            <ConsultationView
              onNavigate={handleNavigate}
              prefillData={consultationPrefill}
            />
          )}

          {currentPage === 'design-system' && <DesignSystemView />}

          {currentPage === 'sitemap-ux' && <SitemapUxView onNavigate={handleNavigate} />}

          {currentPage === 'cursor-guide' && <CursorGuideView />}
        </main>

        {/* Global Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenQuickCounsel={() => setQuickCounselOpen(true)}
        />

        {/* Persistent Floating & Mobile Bottom Quick Action Bar */}
        <QuickFloatingBar
          onOpenQuickCounsel={() => setQuickCounselOpen(true)}
          onNavigate={handleNavigate}
        />
      </div>

      {/* Quick Counsel Modal Popup */}
      <QuickCounselModal
        isOpen={quickCounselOpen}
        onClose={() => setQuickCounselOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

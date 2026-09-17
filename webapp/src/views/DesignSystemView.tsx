import React, { useState } from 'react';
import {
  Palette,
  Type,
  Layers,
  MousePointer,
  Square,
  FormInput,
  CheckSquare,
  Tag,
  Compass,
  ArrowRight,
  Maximize2,
  Minimize2,
  Copy,
  Check,
  Smartphone,
  Tablet,
  Laptop,
  CheckCircle2,
  HelpCircle,
  FileText,
  Lock,
  PhoneCall,
  Calculator,
  ChevronDown,
} from 'lucide-react';
import { PageId } from '../types';

interface DesignSystemViewProps {
  onNavigate?: (page: PageId) => void;
}

export const DesignSystemView: React.FC<DesignSystemViewProps> = ({ onNavigate }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const gnuBoardComponents = [
    { name: 'Header', desc: 'ìƒë‹¨ 68px ê³ ì • GNB + ì•ˆì‹¬ ê³µì§€ ë  + ë¸Œëžœë“œ ë¡œê³  + ë¹ ë¥¸ ì „í™”' },
    { name: 'MegaMenu', desc: 'ê°œì¸íšŒìƒÂ·ê°œì¸íŒŒì‚° 5ëŒ€ ì„œë¸Œë©”ë‰´(ê°œìš”, ìžê²©, ì ˆì°¨, ì„œë¥˜, ìƒë‹´) í˜¸ë²„ ë“œë¡­ë‹¤ìš´' },
    { name: 'MobileMenu', desc: 'ëª¨ë°”ì¼ í–„ë²„ê±° í„°ì¹˜ ì‹œ ì—´ë¦¬ëŠ” ìŠ¬ë¼ì´ë“œ ì•„ì½”ë””ì–¸ ë“œë¡œì–´ ë‚´ë¹„ê²Œì´ì…˜' },
    { name: 'Hero', desc: 'ê³µê°í˜• í—¤ë“œì¹´í”¼ + ì‹ ë¢° ë±ƒì§€ + ìƒë‹´ì‹ ì²­/ìžê°€ì§„ë‹¨ ë“€ì–¼ CTA + 1:1 ì‚¬ì§„' },
    { name: 'SectionTitle', desc: 'ì„¹ì…˜ ì£¼ì œ, ì†Œì œëª©(H2, H3), ë§¥ë½ ì„¤ëª… ì¹´í”¼ì˜ ì •ëˆëœ í—¤ë”' },
    { name: 'InfoCard', desc: 'ì›ê¸ˆ ìµœëŒ€ 90% íƒ•ê°, ë…ì´‰ ê¸ˆì§€ëª…ë ¹ ë“± í•µì‹¬ í˜œíƒì„ ì „ë‹¬í•˜ëŠ” 2ì—´/3ì—´ ì¹´ë“œ' },
    { name: 'StepCard', desc: '1:1 ë¹„ë°€ìƒë‹´ë¶€í„° ì¸ê°€ê²°ì •ê¹Œì§€ 7ë‹¨ê³„ íšŒìƒ ì§„í–‰ ë¡œë“œë§µ ì¹´ë“œ' },
    { name: 'Timeline', desc: 'ì ‘ìˆ˜ â†’ ê¸ˆì§€ëª…ë ¹(3~7ì¼) â†’ ê°œì‹œ â†’ ì±„ê¶Œìžì§‘íšŒ â†’ ì¸ê°€ ì ˆì°¨ì˜ ì‹œê°„ì¶• íë¦„' },
    { name: 'FAQAccordion', desc: 'ë¹„ë°€ë³´ìž¥, ìˆ˜ìž„ë£Œ ë¶„ë‚©, ë¶ˆì´ìµ ì—¬ë¶€ ë“± í•µì‹¬ ì§ˆë¬¸ ì›í„°ì¹˜ ê°œí ì•„ì½”ë””ì–¸' },
    { name: 'CTASection', desc: 'íŽ˜ì´ì§€ í•˜ë‹¨ ë° ì¤‘ê°„ì— ìžì—°ìŠ¤ëŸ½ê²Œ ë°°ì¹˜ë˜ëŠ” ë¹„ê³µê°œ ìƒë‹´ ìœ ë„ ë°´ë“œ' },
    { name: 'ConsultForm', desc: 'ê¸°ë³¸ì •ë³´ 3ì´ˆ ìž…ë ¥ â†’ ìƒí™©ì„ íƒ â†’ ë™ì˜ 3ë‹¨ê³„ ìŠ¤í…í˜• ì•ˆì‹¬ ìƒë‹´ ì‹ ì²­ í¼' },
    { name: 'DiagnosisStep', desc: '1ë¬¸ 1ë‹µ ì¸í„°ëž™í‹°ë¸Œ ìžê°€ì§„ë‹¨ ì§ˆë¬¸ ì¹´ë“œ ë° ì§„í–‰ í”„ë¡œê·¸ë ˆìŠ¤ ë°”' },
    { name: 'DiagnosisResult', desc: 'ë‹µë³€ ìš”ì•½ + ê°œì¸íšŒìƒ ì í•© ê°€ì´ë“œ + ìƒë‹´ì‹ ì²­ ìžë™ì—°ë™ ë²„íŠ¼' },
    { name: 'StoryCard', desc: '/story ê²Œì‹œíŒ ì „ìš©: íƒ•ê°ë¥ (%), ì±„ë¬´ ì „í›„ ë¹„êµ, ë²•ì›, íƒœê·¸í˜• ì¹´ë“œ' },
    { name: 'NewsCard', desc: '/news ê²Œì‹œíŒ ì „ìš©: ì¹´í…Œê³ ë¦¬, ì œëª©, ìš”ì•½ 2ì¤„, ë‚ ì§œ, ì¡°íšŒìˆ˜ ì •ë³´ ì¹´ë“œ' },
    { name: 'PostList', desc: 'ê²Œì‹œíŒ ëª©ë¡ ê³µí†µ: ì¹´í…Œê³ ë¦¬ í•„í„° íƒ­ + í‚¤ì›Œë“œ ê²€ìƒ‰ë°” + íŽ˜ì´ì§€ë„¤ì´ì…˜' },
    { name: 'PostDetail', desc: 'ê²Œì‹œê¸€ ìƒì„¸ ê³µí†µ: ì œëª©/ë©”íƒ€ â†’ ë³¸ë¬¸ â†’ ê´€ë ¨ ì½˜í…ì¸  â†’ ìƒë‹´ CTA ì—°ê³„ êµ¬ì¡°' },
    { name: 'Breadcrumb', desc: 'í™ˆ > ê²Œì‹œíŒëª… > ìƒì„¸ ì¹´í…Œê³ ë¦¬ë¡œ ì´ì–´ì§€ëŠ” ì‚¬ìš©ìž ìœ„ì¹˜ íƒìƒ‰ê¸°' },
    { name: 'Footer', desc: '3ëŒ€ ì•ˆì‹¬ ë°°ë„ˆ(ë¹„ë°€ë³´ìž¥, í™˜ë¶ˆë³´ìž¥, ë¬´ì´ìžë¶„ë‚©) + ë²•ë¥ ì‚¬ë¬´ì†Œ ì •ë³´ + ë©´ì±… ê³µì§€' },
    { name: 'MobileBottomCTA', desc: 'í™”ë©´ ê°€ë¦¼ì„ ìµœì†Œí™”í•˜ë©° [ì „í™”ìƒë‹´] [1ë¶„ ìžê°€ì§„ë‹¨] [ìƒë‹´ì‹ ì²­] 3-Way í•˜ë‹¨ ê³ ì •ë°”' },
  ];

  const uxChecklist = [
    {
      q: '1. ì²« í™”ë©´ì—ì„œ ì‚¬ì´íŠ¸ì˜ ëª©ì ì„ ë°”ë¡œ ì´í•´í•  ìˆ˜ ìžˆëŠ”ê°€?',
      a: 'ì˜ˆ. ë©”ì¸ ížˆì–´ë¡œ ì¹´í”¼("í˜¼ìž ê³ ë¯¼í•˜ì§€ ë§ˆì„¸ìš”. ê°œì¸íšŒìƒ, ì§€ê¸ˆë¶€í„° ì°¨ê·¼ì°¨ê·¼ ì•Œì•„ë³´ì„¸ìš”.")ì™€ "100% ë¹„ê³µê°œ ì•ˆì‹¬ìƒë‹´" ë±ƒì§€ë¥¼ í†µí•´ ê°œì¸íšŒìƒ ë²•ë¥ ìƒë‹´ ì‚¬ì´íŠ¸ìž„ì„ 3ì´ˆ ì•ˆì— ì§ê´€ì ìœ¼ë¡œ íŒŒì•…í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.',
    },
    {
      q: '2. ê°œì¸íšŒìƒ ì •ë³´ë¥¼ ì‰½ê²Œ ì°¾ì„ ìˆ˜ ìžˆëŠ”ê°€?',
      a: 'ì˜ˆ. GNBì˜ "ê°œì¸íšŒìƒ" ë©”ë‰´ì— ë§ˆìš°ìŠ¤ë¥¼ ì˜¬ë¦¬ë©´ ê°œìš”, ìžê²©ìš”ê±´, 5ë‹¨ê³„ ì ˆì°¨, ì¤€ë¹„ì„œë¥˜ë¡œ ì¦‰ì‹œ ì´ë™í•  ìˆ˜ ìžˆëŠ” ë©”ê°€ë©”ë‰´ê°€ ì œê³µë©ë‹ˆë‹¤.',
    },
    {
      q: '3. ìžê°€ì§„ë‹¨ìœ¼ë¡œ ì´ë™í•˜ê¸° ì‰¬ìš´ê°€?',
      a: 'ì˜ˆ. í—¤ë” ë‚´ë¹„ê²Œì´ì…˜, ížˆì–´ë¡œ ë²„íŠ¼, ë³¸ë¬¸ ì¤‘ê°„ ë°°ë„ˆ, ëª¨ë°”ì¼ í•˜ë‹¨ ê³ ì •ë°”ì˜ [1ë¶„ ìžê°€ì§„ë‹¨] ë²„íŠ¼ì„ í†µí•´ ì–´ëŠ í™”ë©´ì—ì„œë“  1í´ë¦­ìœ¼ë¡œ ì§„ìž… ê°€ëŠ¥í•©ë‹ˆë‹¤.',
    },
    {
      q: '4. ìƒë‹´ ì‹ ì²­ ë²„íŠ¼ì„ ì‰½ê²Œ ì°¾ì„ ìˆ˜ ìžˆëŠ”ê°€?',
      a: 'ì˜ˆ. ìµœìƒë‹¨ ì•ˆì‹¬ë°”, í—¤ë” ìš°ì¸¡ ê³¨ë“œ ë²„íŠ¼, ë©”ì¸ ì¤‘ê°„ ë°°ë„ˆ, ëª¨ë“  ê²Œì‹œê¸€ í•˜ë‹¨, ëª¨ë°”ì¼ í•˜ë‹¨ ê³ ì •ë°”ì— ì¼ê´€ëœ í†¤ì•¤ë§¤ë„ˆë¡œ ë°°ì¹˜ë˜ì–´ ìžˆìŠµë‹ˆë‹¤.',
    },
    {
      q: '5. ìƒë‹´ ì‹ ì²­ ê³¼ì •ì´ ë³µìž¡í•˜ì§€ ì•Šì€ê°€?',
      a: 'ì˜ˆ. 1ë‹¨ê³„(ì„±í•¨/ê°€ëª… + ì—°ë½ì²˜)ë§Œ ìž…ë ¥í•˜ë©´ ìµœì†Œ ì ‘ìˆ˜ê°€ ê°€ëŠ¥í•˜ë©°, ë¶€ë‹´ìŠ¤ëŸ¬ìš´ ê¸ˆìœµì •ë³´ëŠ” 2ë‹¨ê³„ ì„ íƒí˜• ì¹´ë“œë¡œ ë¶„ë¦¬í•˜ì—¬ ì‹¬ë¦¬ì  ì´íƒˆì„ ì›ì²œ ì°¨ë‹¨í–ˆìŠµë‹ˆë‹¤.',
    },
    {
      q: '6. ëª¨ë°”ì¼ì—ì„œ ìƒë‹´ ì „í™˜ì´ íŽ¸ë¦¬í•œê°€?',
      a: 'ì˜ˆ. ëª¨ë°”ì¼ í•˜ë‹¨ 58px ìŠ¬ë¦¼ ê³ ì •ë°”ì— [ì „í™”ìƒë‹´ 0503-6982-1000], [1ë¶„ ìžê°€ì§„ë‹¨], [ìƒë‹´ ì‹ ì²­í•˜ê¸°]ê°€ í•­ìƒ ì—„ì§€ì†ê°€ë½ ì˜ì—­ì— ìœ ì§€ë˜ì–´ ì „í™˜ì´ ì¦‰ì‹œ ë°œìƒí•©ë‹ˆë‹¤.',
    },
    {
      q: '7. Storyì™€ News ê²Œì‹œíŒì„ ì‰½ê²Œ íƒìƒ‰í•  ìˆ˜ ìžˆëŠ”ê°€?',
      a: 'ì˜ˆ. GNB ë° ëª¨ë°”ì¼ ë©”ë‰´ì— /story(ì‹ ìš©íšŒë³µ ê²½í—˜ë‹´), /news(ê°œì¸íšŒìƒ ë‰´ìŠ¤Â·ì •ë³´)ê°€ ë…ë¦½ ë°°ì¹˜ë˜ì–´ ìžˆìœ¼ë©°, ì¹´í…Œê³ ë¦¬ íƒ­ê³¼ ê²€ìƒ‰ë°”ë¡œ ì‹ ì†í•˜ê²Œ í•„í„°ë§í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.',
    },
    {
      q: '8. ëª¨ë“  ì •ë³´ íŽ˜ì´ì§€ì—ì„œ ë‹¤ìŒ í–‰ë™ì´ ëª…í™•í•œê°€?',
      a: 'ì˜ˆ. /storyì™€ /newsì˜ ëª¨ë“  ìƒì„¸ íŽ˜ì´ì§€ëŠ” [ë³¸ë¬¸ â†’ ê´€ë ¨ ì½˜í…ì¸  â†’ ìƒë‹´ CTA] êµ¬ì¡°ë¡œ ëë‚˜ ì‚¬ìš©ìžê°€ ì •ë³´ ìŠµë“ í›„ ìžì—°ìŠ¤ëŸ½ê²Œ ìžê°€ì§„ë‹¨ì´ë‚˜ ìƒë‹´ ì‹ ì²­ìœ¼ë¡œ ì´ì–´ì§‘ë‹ˆë‹¤.',
    },
    {
      q: '9. CTAê°€ ê³¼ë„í•˜ê²Œ ê´‘ê³ ì²˜ëŸ¼ ë³´ì´ì§€ ì•ŠëŠ”ê°€?',
      a: 'ì˜ˆ. ë²ˆì©ì´ëŠ” ì• ë‹ˆë©”ì´ì…˜ì´ë‚˜ ìžê·¹ì ì¸ ë¬¸êµ¬("ë¹š 100% íƒ•ê° ë³´ìž¥")ë¥¼ ì² ì €ížˆ ë°°ì œí•˜ê³ , ì°¨ë¶„í•œ ë„¤ì´ë¹„ì™€ ê³¨ë“œ í†¤ìœ¼ë¡œ "ë¹„ë°€ë³´ìž¥ 1:1 ìƒë‹´" ì›ì¹™ì„ ì¤€ìˆ˜í–ˆìŠµë‹ˆë‹¤.',
    },
    {
      q: '10. ë²•ë¥ /ê¸ˆìœµ ì„œë¹„ìŠ¤ ì‚¬ì´íŠ¸ë¡œì„œ ì‹ ë¢°ê°ì„ ì£¼ëŠ”ê°€?',
      a: 'ì˜ˆ. ë³€í˜¸ì‚¬ë²• ì œ26ì¡° ë¹„ë°€ìœ ì§€ ëª…ì‹œ, ì„œìš¸íšŒìƒë²•ì› ì‹¤ì œ ì‚¬ê±´ë²ˆí˜¸/ì¸ê°€ê²°ì • ì •ë³¸ ë°ì´í„°, ê¸°ê° ì‹œ 100% í™˜ë¶ˆë³´ìž¥ì œ, ìˆ˜ìž„ë£Œ ë¬´ì´ìž ë¶„ë‚© ì œë„ë¥¼ ê³µì‹ ëª…ì‹œí•˜ì—¬ ê·¹ë„ì˜ ì‹ ë¢°ê°ì„ í˜•ì„±í•©ë‹ˆë‹¤.',
    },
  ];

  return (
    <div className="space-y-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 pt-6">
      {/* Header Overview */}
      <div className="bg-[#151C2C] text-white rounded-3xl p-8 sm:p-12 border border-[#252f44]">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202B40] border border-[#D7AE66]/50 text-[#D7AE66] text-xs font-bold">
            <span>FINAL PRODUCTION SPECIFICATION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            ê°œì¸íšŒìƒ ì „ë¬¸ ì‚¬ì´íŠ¸ UI Design System & ê·¸ëˆ„ë³´ë“œ 5 ê·œê²©
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            ê³¼ë„í•œ ì±„ë¬´ë¡œ ê³ í†µë°›ëŠ” ì˜ë¢°ì¸ì—ê²Œ <strong>ì•ˆì •ê°, ì‹ ë¢°, ì „ë¬¸ì„±</strong>ì„ ì „ë‹¬í•˜ê³ , <strong>ì •ë³´ ê²€ìƒ‰ â†’ ì‹ ë¢° í˜•ì„± â†’ ìžê°€ì§„ë‹¨ â†’ ìƒë‹´ ì‹ ì²­</strong>ìœ¼ë¡œ ìžì—°ìŠ¤ëŸ½ê²Œ ì´ì–´ì§€ë„ë¡ ì„¤ê³„ëœ ì‹¤ì œ êµ¬í˜„ìš© ìµœì¢… ë””ìžì¸ ì‹œìŠ¤í…œìž…ë‹ˆë‹¤.
          </p>
        </div>
      </div>

      {/* 1. GnuBoard 5 Component Architecture (ê·¸ëˆ„ë³´ë“œ ì»´í¬ë„ŒíŠ¸ ê·œê²©) */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs font-bold text-[#D7AE66]">01. ARCHITECTURE</span>
            <h2 className="text-2xl font-black text-[#151C2C]">
              ê·¸ëˆ„ë³´ë“œ 5 ìž¬ì‚¬ìš© ì»´í¬ë„ŒíŠ¸ 20ì¢… ëª…ì„¸
            </h2>
          </div>
          <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-mono">
            Modular & Reusable
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          Cursorì—ì„œ ì‹¤ì œ êµ¬í˜„ ì‹œ ì¤‘ë³µ ì½”ë“œë¥¼ ë°©ì§€í•˜ê³  ìœ ì§€ë³´ìˆ˜ë¥¼ ìš©ì´í•˜ê²Œ í•˜ê¸° ìœ„í•´ ì•„ëž˜ 20ê°œ ì»´í¬ë„ŒíŠ¸ ë‹¨ìœ„ë¡œ ë¶„ë¦¬ ì„¤ê³„ë˜ì—ˆìŠµë‹ˆë‹¤.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gnuBoardComponents.map((comp, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-[#D7AE66] transition-all space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#D7AE66] font-mono">
                  #{String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-[10px] bg-white text-gray-500 px-1.5 py-0.5 rounded border border-gray-200 font-mono">
                  PHP/HTML
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-[#151C2C]">{comp.name}</h3>
              <p className="text-xs text-gray-600 leading-snug">{comp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ê²Œì‹œíŒ 2ê°œ êµ¬ì¡° ìƒì„¸ ëª…ì„¸ (/story, /news) */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs font-bold text-[#D7AE66]">02. BOARD SYSTEM</span>
            <h2 className="text-2xl font-black text-[#151C2C]">
              ì •í™•ížˆ 2ê°œì˜ ê²Œì‹œíŒ êµ¬ì¡° (/story, /news)
            </h2>
          </div>
          <span className="text-xs bg-[#EBFBEE] text-[#2B8A3E] font-bold px-3 py-1 rounded-full">
            GnuBoard 5 Board Skin
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ê²Œì‹œíŒ 1: /story */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-[#F7F8FA] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                URL: /story
              </span>
              <span className="text-xs text-gray-500 font-semibold">ì¹´ë“œí˜• Layout</span>
            </div>
            <h3 className="text-xl font-extrabold text-[#151C2C]">
              ì‹ ìš©íšŒë³µ ê²½í—˜ë‹´
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              ë²•ì› ì¸ê°€ê²°ì •ì„ ë°›ì€ ì‹¤ì œ ì˜ë¢°ì¸ì˜ ê°ë©´ ì‚¬ë¡€ì™€ ì§„ì†”í•œ í›„ê¸°ë¥¼ ì¹´ë“œ í˜•íƒœë¡œ ì œê³µí•˜ì—¬ ì‹ ë¢°ê°ì„ ê·¹ëŒ€í™”í•©ë‹ˆë‹¤.
            </p>

            <div className="space-y-2 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200">
              <div className="font-bold text-[#151C2C] pb-1 border-b border-gray-100">
                ê²Œì‹œê¸€ ëª©ë¡ (PostList / StoryCard)
              </div>
              <ul className="space-y-1 list-disc pl-4 text-gray-600">
                <li>ì¹´í…Œê³ ë¦¬ ë±ƒì§€ (ì§ìž¥ì¸, ê°œì¸ì‚¬ì—…ìž, ì£¼ë¶€, ì²­ë…„/í”„ë¦¬ëžœì„œ)</li>
                <li>ì œëª© (2ì¤„ ì œí•œ, ë§ì¤„ìž„ ì ìš©)</li>
                <li>ì§§ì€ ìš”ì•½ (ì˜ë¢°ì¸ ìƒí™© ë° ê°ë©´ ê³„ê¸°)</li>
                <li>ì±„ë¬´ ê°ë©´ ì „í›„ ë¹„êµ ë°•ìŠ¤ (ì›ê¸ˆ vs ìµœì¢…íƒ•ê°ì•¡, íƒ•ê°ë¥  %)</li>
                <li>ìž‘ì„±ì¼, ê´€í•  ë²•ì›, ìƒì„¸ë³´ê¸° ë§í¬</li>
              </ul>
            </div>

            <div className="space-y-2 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200">
              <div className="font-bold text-[#151C2C] pb-1 border-b border-gray-100">
                ê²Œì‹œê¸€ ìƒì„¸ íŽ˜ì´ì§€ (PostDetail)
              </div>
              <ul className="space-y-1 list-disc pl-4 text-gray-600">
                <li>Breadcrumb: í™ˆ &gt; ì‹ ìš©íšŒë³µ ê²½í—˜ë‹´ &gt; ì¹´í…Œê³ ë¦¬</li>
                <li>ì œëª©, ì‹ ì²­ì¸ ì •ë³´, ìž‘ì„±ì¼, ì¡°íšŒìˆ˜, ê³µìœ í•˜ê¸°</li>
                <li>ì¸ê°€ê²°ì • ì •ë³¸ ê¸°ì¤€ ì±„ë¬´ ì¡°ì • ìŠ¤íƒ¯ ì¹´ë“œ</li>
                <li>ë³¸ë¬¸ (ìƒì„¸ ì§„í–‰ ê²½ê³¼ ë° ë²•ì› ì ˆì°¨)</li>
                <li>ì˜ë¢°ì¸ ìží•„ ê°ì‚¬ í›„ê¸° ë°œì·Œ ë°•ìŠ¤</li>
                <li>ê´€ë ¨ ì½˜í…ì¸  (ë‹¤ë¥¸ ì˜ë¢°ì¸ ê²½í—˜ë‹´ 3ê°œ)</li>
                <li><strong>ìƒë‹´ CTA</strong> (1ë¶„ ìžê°€ì§„ë‹¨ + ë¹„ê³µê°œ ìƒë‹´ì‹ ì²­ ë“€ì–¼ ë²„íŠ¼)</li>
              </ul>
            </div>

            {onNavigate && (
              <button
                onClick={() => onNavigate('story')}
                className="w-full py-2.5 bg-[#151C2C] text-white hover:bg-[#202c44] font-bold text-xs rounded-xl transition-colors cursor-pointer text-center"
              >
                /story ê²Œì‹œíŒ í™”ë©´ í™•ì¸í•˜ê¸° â†’
              </button>
            )}
          </div>

          {/* ê²Œì‹œíŒ 2: /news */}
          <div className="border border-gray-200 rounded-2xl p-6 bg-[#F7F8FA] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200 font-bold">
                URL: /news
              </span>
              <span className="text-xs text-gray-500 font-semibold">ì •ë³´ì„± ì¹¼ëŸ¼ Layout</span>
            </div>
            <h3 className="text-xl font-extrabold text-[#151C2C]">
              ê°œì¸íšŒìƒ ë‰´ìŠ¤ Â· ì •ë³´
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              ì •ë³´ì„± ì‚¬ì´íŠ¸ì²˜ëŸ¼ ê¹”ë”í•˜ê³  ê°€ë…ì„± ë†’ì€ ë””ìžì¸ìœ¼ë¡œ ë²•ì› ì¤€ì¹™ ê°œì •, ë…ì´‰ ëŒ€ì²˜, ì••ë¥˜ í•´ì œ ë“±ì˜ ë²•ë¥  ì§€ì‹ì„ ì „ë‹¬í•©ë‹ˆë‹¤.
            </p>

            <div className="space-y-2 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200">
              <div className="font-bold text-[#151C2C] pb-1 border-b border-gray-100">
                ê²Œì‹œê¸€ ëª©ë¡ (PostList / NewsCard)
              </div>
              <ul className="space-y-1 list-disc pl-4 text-gray-600">
                <li>ì¹´í…Œê³ ë¦¬ (ìµœì‹ ê°œì •, ë…ì´‰ëŒ€ì²˜, ë²•ë¥ ìƒì‹, ìžì£¼ë¬»ëŠ”ì§ˆë¬¸)</li>
                <li>ì œëª© (ë³¼ë“œ í°íŠ¸, í˜¸ë²„ ì‹œ ê³¨ë“œ í¬ì¸íŠ¸)</li>
                <li>ìš”ì•½ (2ì¤„ ë¼ì¸ í´ëž¨í”„ë¡œ ì •ëˆëœ ì„¤ëª…)</li>
                <li>ìž‘ì„±ìž, ë‚ ì§œ, ì¡°íšŒìˆ˜ ë©”íƒ€ ì •ë³´</li>
                <li>ì „ë¬¸ ë³´ê¸° í™”ì‚´í‘œ ì•¡ì…˜</li>
              </ul>
            </div>

            <div className="space-y-2 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200">
              <div className="font-bold text-[#151C2C] pb-1 border-b border-gray-100">
                ê²Œì‹œê¸€ ìƒì„¸ íŽ˜ì´ì§€ (PostDetail)
              </div>
              <ul className="space-y-1 list-disc pl-4 text-gray-600">
                <li>Breadcrumb: í™ˆ &gt; ê°œì¸íšŒìƒ ë‰´ìŠ¤ Â· ì •ë³´ &gt; ì¹´í…Œê³ ë¦¬</li>
                <li>ì œëª©, ì¹´í…Œê³ ë¦¬ ë±ƒì§€, ìž‘ì„±ì¼, ì¡°íšŒìˆ˜</li>
                <li>ìš”ì•½ ë¦¬ë“œ ë°•ìŠ¤ (Summary)</li>
                <li><strong>ë³¸ë¬¸</strong> (ê°€ë…ì„± ë†’ì€ íƒ€ì´í¬ê·¸ëž˜í”¼)</li>
                <li><strong>ê´€ë ¨ ì •ë³´</strong> (í•¨ê»˜ ì½ìœ¼ë©´ ë„ì›€ë˜ëŠ” ë²•ë¥  ì¹¼ëŸ¼ 3ê°œ)</li>
                <li><strong>ìƒë‹´ CTA</strong> ("ë‚˜ì—ê²Œë„ ì ìš© ê°€ëŠ¥í• ê¹Œ?" 1ë¶„ ì§„ë‹¨ & ë¹„ê³µê°œ ìƒë‹´ì‹ ì²­)</li>
              </ul>
            </div>

            {onNavigate && (
              <button
                onClick={() => onNavigate('news')}
                className="w-full py-2.5 bg-[#151C2C] text-white hover:bg-[#202c44] font-bold text-xs rounded-xl transition-colors cursor-pointer text-center"
              >
                /news ê²Œì‹œíŒ í™”ë©´ í™•ì¸í•˜ê¸° â†’
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. ë°˜ì‘í˜• ê¸°ì¤€ ë° Mobile ìµœì í™” ê·œê²© */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs font-bold text-[#D7AE66]">03. RESPONSIVE SYSTEM</span>
            <h2 className="text-2xl font-black text-[#151C2C]">ë°˜ì‘í˜• ê·œê²© ë° Mobile ìµœì í™”</h2>
          </div>
          <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-mono">
            Desktop / Tablet / Mobile
          </span>
        </div>

        {/* 3ëŒ€ ë¸Œë ˆì´í¬í¬ì¸íŠ¸ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50 space-y-3">
            <div className="flex items-center gap-2 text-[#151C2C]">
              <Laptop className="w-5 h-5 text-[#D7AE66]" />
              <h3 className="font-extrabold text-base">Desktop</h3>
            </div>
            <div className="text-xs font-mono text-[#D7AE66] font-bold">1440px (ìµœëŒ€ ë„ˆë¹„ 1280px ì»¨í…Œì´ë„ˆ)</div>
            <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
              <li>Header 68px ë†’ì´ ê³ ì •, ë©”ê°€ë©”ë‰´ í˜¸ë²„ í™œì„±í™”</li>
              <li>ê·¸ë¦¬ë“œ: ì¹´ë“œ 3ì—´ ë°°ì—´, ë„‰ë„‰í•œ ì—¬ë°±(gap-6)</li>
              <li>í°íŠ¸: Display 36~44px, H1 28~32px, ë³¸ë¬¸ 16px</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50 space-y-3">
            <div className="flex items-center gap-2 text-[#151C2C]">
              <Tablet className="w-5 h-5 text-[#D7AE66]" />
              <h3 className="font-extrabold text-base">Tablet</h3>
            </div>
            <div className="text-xs font-mono text-[#D7AE66] font-bold">768px ~ 1199px</div>
            <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
              <li>íƒœë¸”ë¦¿ ì „ìš© 2ì—´ ì¹´ë“œ ê·¸ë¦¬ë“œ ìžë™ ìž¬ë°°ì—´</li>
              <li>í—¤ë” GNB ê°„ê²© ì¶•ì†Œ ë° í„°ì¹˜ ìµœì í™”</li>
              <li>í¼ ìž…ë ¥ ì˜ì—­ íŒ¨ë”© ìžë™ ì¡°ì • (p-6)</li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50 space-y-3">
            <div className="flex items-center gap-2 text-[#151C2C]">
              <Smartphone className="w-5 h-5 text-[#D7AE66]" />
              <h3 className="font-extrabold text-base">Mobile (í•µì‹¬ ì§‘ì¤‘)</h3>
            </div>
            <div className="text-xs font-mono text-[#D7AE66] font-bold">375px ~ 767px</div>
            <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-4">
              <li><strong>ê¸€ìž í¬ê¸°</strong>: ë³¸ë¬¸ 14~15px, ì œëª© 20~24px ê°€ë…ì„± ìœ ì§€</li>
              <li><strong>ë²„íŠ¼ í¬ê¸°</strong>: ìµœì†Œ í„°ì¹˜ ë†’ì´ 46px ì´ìƒ ë³´ìž¥</li>
              <li><strong>ì¹´ë“œ ë°°ì—´</strong>: 1ì—´ ìˆ˜ì§ ìŠ¤íƒ, í™”ë©´ í­ 100% í™œìš©</li>
              <li><strong>ì—¬ë°±</strong>: ë‚´ë¶€ íŒ¨ë”© px-4 sm:px-6ìœ¼ë¡œ ì—¬ë°± ë‚­ë¹„ ì°¨ë‹¨</li>
              <li><strong>Bottom CTA</strong>: [ì „í™”ìƒë‹´ 0503-6982-1000] [ìžê°€ì§„ë‹¨] [ìƒë‹´ì‹ ì²­] 3-Way ê³ ì •</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. ìµœì¢… UX 10ëŒ€ ê²€ì‚¬ ìžê°€ì§„ë‹¨ (Final UX Audit) */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs font-bold text-[#D7AE66]">04. UX AUDIT</span>
            <h2 className="text-2xl font-black text-[#151C2C]">
              ìµœì¢… UX ê²€ì‚¬: 10ëŒ€ í•µì‹¬ ê¸°ì¤€ ê²€í†  ê²°ê³¼
            </h2>
          </div>
          <span className="text-xs bg-[#EBFBEE] text-[#2B8A3E] font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>10/10 ALL PASSED</span>
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
          'ë””ìžì¸ë§Œ ì˜ˆìœ ì‚¬ì´íŠ¸'ê°€ ì•„ë‹ˆë¼, ì‹¬ë¦¬ì  ë¶ˆì•ˆì„ ê²ªëŠ” ì˜ë¢°ì¸ì—ê²Œ ì‹¤ì§ˆì ì¸ í•´ê²°ì±…ì„ ì œì‹œí•˜ê³  <strong>ì‹ ë¢°ë¥¼ ë°”íƒ•ìœ¼ë¡œ ìƒë‹´ ì „í™˜ì„ ê²¬ì¸í•˜ëŠ”ì§€</strong> 10ê°€ì§€ ê¸°ì¤€ìœ¼ë¡œ ì—„ê²©í•˜ê²Œ ìžì²´ ê²€ì¦ì„ ë§ˆì³¤ìŠµë‹ˆë‹¤.
        </p>

        <div className="space-y-3">
          {uxChecklist.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-1.5"
            >
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#151C2C] text-[#D7AE66] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  âœ“
                </span>
                <div className="space-y-1 flex-1">
                  <h3 className="text-sm font-bold text-[#151C2C]">{item.q}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COLOR & TYPOGRAPHY SYSTEM COMPACT REFERENCE */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <span className="text-xs font-bold text-[#D7AE66]">05. FOUNDATION SPEC</span>
            <h2 className="text-2xl font-black text-[#151C2C]">ìƒ‰ìƒ ë° íƒ€ì´í¬ê·¸ëž˜í”¼ ê·œê²©</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {[
            { name: 'Main Navy', hex: '#151C2C', desc: 'ì£¼ ìƒ‰ìƒ, í—¤ë”' },
            { name: 'Point Gold', hex: '#D7AE66', desc: 'í•µì‹¬ CTA, ê°•ì¡°' },
            { name: 'Background', hex: '#F7F8FA', desc: 'ìº”ë²„ìŠ¤ ë°°ê²½' },
            { name: 'White', hex: '#FFFFFF', desc: 'ì¹´ë“œ, í¼, ëª¨ë‹¬' },
            { name: 'Text Dark', hex: '#222222', desc: 'ë³¸ë¬¸ 1ìˆœìœ„ í—¤ë“œë¼ì¸' },
            { name: 'Sub Text', hex: '#666666', desc: 'ì„¤ëª…ë¬¸, ë¶€ê°€ ìº¡ì…˜' },
            { name: 'Border', hex: '#E5E7EB', desc: 'ì¹´ë“œ í…Œë‘ë¦¬ ì„ ' },
          ].map((c) => (
            <div key={c.hex} className="border border-gray-200 rounded-xl overflow-hidden shadow-2xs">
              <div className="h-16 flex items-end p-2" style={{ backgroundColor: c.hex }}>
                <span className="text-[11px] font-mono font-bold text-white mix-blend-difference">
                  {c.hex}
                </span>
              </div>
              <div className="p-2.5 bg-white space-y-0.5">
                <div className="text-xs font-bold text-gray-900">{c.name}</div>
                <div className="text-[10px] text-gray-500 leading-tight">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};


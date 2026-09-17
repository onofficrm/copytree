import React, { useState } from 'react';
import {
  FileCode,
  FolderTree,
  Terminal,
  Copy,
  Check,
  Code2,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';

export const CursorGuideView: React.FC = () => {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyCode = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(id);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const codeSnippets = {
    folderTree: `gnuboard5/
â”œâ”€â”€ theme/
â”‚   â””â”€â”€ hope_partner/
â”‚       â”œâ”€â”€ head.php                  # ê³µí†µ í—¤ë” (68px) & GNB & ë©”ê°€ë©”ë‰´ & ëª¨ë°”ì¼ ë“œë¡œì–´
â”‚       â”œâ”€â”€ tail.php                  # ê³µí†µ í‘¸í„° & ëª¨ë°”ì¼ ê³ ì • í•˜ë‹¨ CTA ë°” (58px)
â”‚       â”œâ”€â”€ index.php                 # ë©”ì¸ ëžœë”© í…œí”Œë¦¿
â”‚       â”œâ”€â”€ page.php                  # ì •ì  íŽ˜ì´ì§€ ë¼ìš°í„° (rehab, bankruptcy, diagnosis)
â”‚       â”œâ”€â”€ counsel_update.php        # ìƒë‹´ì‹ ì²­ DB ì €ìž¥ ë° ì¹´ì¹´ì˜¤ ì•Œë¦¼í†¡ ë°œì†¡
â”‚       â”œâ”€â”€ css/
â”‚       â”‚   â””â”€â”€ style.css             # Tailwind ë¹Œë“œëœ ë°˜ì‘í˜• CSS
â”‚       â””â”€â”€ skin/
â”‚           â””â”€â”€ board/
â”‚               â”œâ”€â”€ story/            # [ê²Œì‹œíŒ 1] ì‹¤ì œ íƒ•ê° ê²½í—˜ë‹´ ìŠ¤í‚¨ (/story)
â”‚               â”‚   â”œâ”€â”€ list.skin.php # ì¹´ë“œí˜• ì „í›„ ì±„ë¬´ ë¹„êµ ë¦¬ìŠ¤íŠ¸
â”‚               â”‚   â””â”€â”€ view.skin.php # ìƒì„¸ ì‚¬ì—° ë° ì˜ë¢°ì¸ í›„ê¸° ë·°
â”‚               â””â”€â”€ news/             # [ê²Œì‹œíŒ 2] íšŒìƒ ì •ë³´ ë° ë²•ë¥  ì¹¼ëŸ¼ ìŠ¤í‚¨ (/news)
â”‚                   â”œâ”€â”€ list.skin.php # ì¹¼ëŸ¼í˜• ë¦¬ìŠ¤íŠ¸ & íƒœê·¸ í•„í„°
â”‚                   â””â”€â”€ view.skin.php # ë³¸ë¬¸ ë·° & í•˜ë‹¨ ìƒë‹´ CTA`,

    headPhpSnippet: `<?php
// theme/hope_partner/head.php
if (!defined('_GNUBOARD_')) exit;
include_once(G5_THEME_PATH.'/head.sub.php');
?>
<!-- 1. ìƒë‹¨ ì•ˆì‹¬/ì‹ ë¢° ì•Œë¦¼ ë°” -->
<div id="top-notice-bar" class="bg-[#111723] text-slate-300 text-xs py-1.5 px-4 border-b border-[#1E283C]">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
        <div class="flex items-center gap-3">
            <span class="text-[#D7AE66] font-bold">100% ë¹„ê³µê°œ ë³´ìž¥</span>
            <span class="text-slate-600 hidden sm:inline">â€¢</span>
            <span class="hidden sm:inline">ì „êµ­ ë²•ì› ë¹„ëŒ€ë©´ ì „ìžì†Œì†¡ ì§€ì›</span>
            <span class="text-slate-600 hidden md:inline">â€¢</span>
            <span class="hidden md:inline text-[#D7AE66]">ìˆ˜ìž„ë£Œ ë¬´ì´ìž ë¶„ë‚©</span>
        </div>
        <div class="flex items-center gap-2">
            <span class="text-slate-400 hidden sm:inline">ëŒ€í‘œì „í™”</span>
            <a href="tel:050369821000" class="text-[#D7AE66] font-bold">0503-6982-1000</a>
        </div>
    </div>
</div>

<!-- 2. ë©”ì¸ í—¤ë” (ë†’ì´: 68px) -->
<header id="header" class="sticky top-0 z-40 bg-[#151C2C] text-white border-b border-[#222E46] shadow-md h-[68px]">
    <div class="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        <!-- ì™¼ìª½: ë¡œê³  & ë¸Œëžœë“œëª… -->
        <a href="<?php echo G5_URL; ?>" class="flex items-center gap-2.5 group">
            <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1E293B] border border-[#D7AE66]/60 flex items-center justify-center text-[#D7AE66]">
                <i class="fa fa-shield"></i>
            </div>
            <div>
                <div class="flex items-center gap-1.5">
                    <span class="text-lg sm:text-xl font-black text-white group-hover:text-[#D7AE66]">ì°½ì›ê°œì¸íšŒìƒ</span>
                    <span class="text-[10px] bg-[#252f44] text-[#D7AE66] px-1.5 py-0.5 rounded border border-[#D7AE66]/30 font-semibold">ì•ˆì‹¬ì§€ì›ì„¼í„°</span>
                </div>
                <p class="text-[11px] text-slate-400 font-normal">ì°½ì›Â·ê²½ë‚¨ ê´€í•  ì°½ì›ì§€ë°©ë²•ì› ì „ë¬¸ ì•ˆì‹¬ìƒë‹´</p>
            </div>
        </a>

        <!-- ê°€ìš´ë°: Desktop Navigation (ê°œì¸íšŒìƒ, ê°œì¸íŒŒì‚°, ì‹ ìš©íšŒë³µ ê²½í—˜ë‹´, ë‰´ìŠ¤/ì •ë³´, ìžê°€ì§„ë‹¨) -->
        <nav class="hidden lg:flex items-center gap-1.5 h-full">
            <!-- ê°œì¸íšŒìƒ Dropdown -->
            <div class="relative h-full flex items-center group">
                <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=rehab" class="px-3.5 py-2 text-sm font-semibold rounded-lg text-slate-200 hover:text-white hover:bg-[#202B3F] flex items-center gap-1">
                    <span>ê°œì¸íšŒìƒ</span>
                    <i class="fa fa-chevron-down text-xs text-slate-400 group-hover:rotate-180 transition-transform"></i>
                </a>
                <div class="dropdown-menu hidden group-hover:block absolute top-[64px] left-0 w-72 bg-[#172033] border border-[#2D3C5A] rounded-2xl shadow-2xl p-3 z-50">
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=rehab&tab=overview" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">ê°œì¸íšŒìƒì´ëž€</a>
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=rehab&tab=qualification" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">ê°œì¸íšŒìƒ ìžê²©</a>
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=rehab&tab=process" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">ê°œì¸íšŒìƒ ì ˆì°¨</a>
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=rehab&tab=docs" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">ì¤€ë¹„ì„œë¥˜</a>
                    <div class="border-t border-[#25324C] my-1"></div>
                    <a href="<?php echo G5_BBS_URL; ?>/write.php?bo_table=counsel" class="block p-2.5 rounded-xl bg-[#D7AE66] text-[#151C2C] text-xs font-extrabold text-center">ê°œì¸íšŒìƒ 1:1 ìƒë‹´ì‹ ì²­</a>
                </div>
            </div>

            <!-- ê°œì¸íŒŒì‚° Dropdown -->
            <div class="relative h-full flex items-center group">
                <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=bankruptcy" class="px-3.5 py-2 text-sm font-semibold rounded-lg text-slate-200 hover:text-white hover:bg-[#202B3F] flex items-center gap-1">
                    <span>ê°œì¸íŒŒì‚°</span>
                    <i class="fa fa-chevron-down text-xs text-slate-400 group-hover:rotate-180 transition-transform"></i>
                </a>
                <div class="dropdown-menu hidden group-hover:block absolute top-[64px] left-0 w-72 bg-[#172033] border border-[#2D3C5A] rounded-2xl shadow-2xl p-3 z-50">
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=bankruptcy&tab=overview" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">ê°œì¸íŒŒì‚°ì´ëž€</a>
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=bankruptcy&tab=qualification" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">ê°œì¸íŒŒì‚° ìžê²©</a>
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=bankruptcy&tab=process" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">ê°œì¸íŒŒì‚° ì ˆì°¨</a>
                    <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=bankruptcy&tab=docs" class="block p-2.5 rounded-xl hover:bg-[#232F46] text-xs font-bold text-slate-200">ì¤€ë¹„ì„œë¥˜</a>
                    <div class="border-t border-[#25324C] my-1"></div>
                    <a href="<?php echo G5_BBS_URL; ?>/write.php?bo_table=counsel" class="block p-2.5 rounded-xl bg-[#D7AE66] text-[#151C2C] text-xs font-extrabold text-center">ê°œì¸íŒŒì‚° 1:1 ìƒë‹´ì‹ ì²­</a>
                </div>
            </div>

            <!-- ì‹ ìš©íšŒë³µ ê²½í—˜ë‹´ (/story) -->
            <a href="<?php echo G5_BBS_URL; ?>/board.php?bo_table=story" class="px-3.5 py-2 text-sm font-semibold rounded-lg text-slate-200 hover:text-white hover:bg-[#202B3F]">
                ì‹ ìš©íšŒë³µ ê²½í—˜ë‹´
            </a>

            <!-- ë‰´ìŠ¤/ì •ë³´ (/news) -->
            <a href="<?php echo G5_BBS_URL; ?>/board.php?bo_table=news" class="px-3.5 py-2 text-sm font-semibold rounded-lg text-slate-200 hover:text-white hover:bg-[#202B3F]">
                ë‰´ìŠ¤/ì •ë³´
            </a>

            <!-- ìžê°€ì§„ë‹¨ (ê°•ì¡° ë±ƒì§€) -->
            <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=diagnosis" class="ml-1 px-3.5 py-1.5 text-sm font-bold rounded-lg text-[#D7AE66] bg-[#D7AE66]/10 border border-[#D7AE66]/40 hover:bg-[#D7AE66]/20 flex items-center gap-1.5">
                <i class="fa fa-calculator"></i>
                <span>1ë¶„ ìžê°€ì§„ë‹¨</span>
            </a>
        </nav>

        <!-- ì˜¤ë¥¸ìª½: ì „í™”ìƒë‹´ CTA & ìƒë‹´ì‹ ì²­ ë²„íŠ¼ -->
        <div class="hidden lg:flex items-center gap-3">
            <a href="tel:050369821000" class="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-200 hover:text-[#D7AE66]">
                <div class="w-8 h-8 rounded-lg bg-[#202B3F] border border-slate-700 flex items-center justify-center text-[#D7AE66]">
                    <i class="fa fa-phone"></i>
                </div>
                <div class="leading-tight">
                    <div class="text-[10px] text-slate-400">ì•¼ê°„Â·ì£¼ë§ ìƒë‹´ê°€ëŠ¥</div>
                    <div class="text-sm font-bold text-white">0503-6982-1000</div>
                </div>
            </a>
            <a href="<?php echo G5_BBS_URL; ?>/write.php?bo_table=counsel" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D7AE66] to-[#C59C53] text-[#151C2C] font-extrabold text-sm shadow-md hover:brightness-110">
                ìƒë‹´ì‹ ì²­
            </a>
        </div>

        <!-- ëª¨ë°”ì¼: í–„ë²„ê±° í† ê¸€ ë²„íŠ¼ -->
        <div class="flex items-center gap-2 lg:hidden">
            <a href="tel:050369821000" class="p-2 text-[#D7AE66] bg-[#222E46] rounded-lg"><i class="fa fa-phone"></i></a>
            <button id="btn-mobile-menu" type="button" class="p-2 text-slate-200 bg-[#222E46] rounded-lg" onclick="toggleMobileMenu()">
                <i class="fa fa-bars"></i>
            </button>
        </div>
    </div>
</header>`,

    storyListSkin: `<?php
// theme/hope_partner/skin/board/story/list.skin.php
if (!defined('_GNUBOARD_')) exit;
add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.css">', 0);
?>

<div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
    <!-- ì¹´í…Œê³ ë¦¬ í•„í„° íƒ­ -->
    <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-6 border-b border-gray-200">
        <a href="<?php echo get_pretty_url($bo_table); ?>" 
           class="px-4 py-2 rounded-xl text-xs font-bold <?php echo !$sca ? 'bg-[#151C2C] text-[#D7AE66]' : 'bg-gray-100 text-gray-700'; ?>">
            ì „ì²´
        </a>
        <?php foreach ($categories as $cat) { ?>
            <a href="<?php echo get_pretty_url($bo_table, '', 'sca='.urlencode($cat)); ?>" 
               class="px-4 py-2 rounded-xl text-xs font-bold <?php echo $sca == $cat ? 'bg-[#151C2C] text-[#D7AE66]' : 'bg-gray-100 text-gray-700'; ?>">
                <?php echo $cat; ?>
            </a>
        <?php } ?>
    </div>

    <!-- íƒ•ê° ì„±ê³µì‚¬ë¡€ ë°˜ì‘í˜• ì¹´ë“œ ê·¸ë¦¬ë“œ -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <?php for ($i=0; $i<count($list); $i++) { 
            $court = $list[$i]['wr_1']; // ì‹ ì²­ ë²•ì›
            $orig_debt = number_format((int)$list[$i]['wr_2']); // ê¸°ì¡´ ì±„ë¬´
            $relief_debt = number_format((int)$list[$i]['wr_3']); // íƒ•ê° ê¸ˆì•¡
            $relief_rate = $list[$i]['wr_4']; // íƒ•ê°ë¥  (%)
            $monthly_pay = $list[$i]['wr_5']; // í™•ì • ì›” ë³€ì œê¸ˆ
        ?>
        <div class="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-xs hover:shadow-lg hover:border-[#D7AE66] transition-all">
            <div class="flex items-center justify-between gap-2 mb-3">
                <span class="text-xs font-bold px-2.5 py-0.5 bg-gray-100 text-gray-800 rounded">
                    <?php echo $list[$i]['ca_name']; ?>
                </span>
                <span class="text-xs font-extrabold px-2.5 py-0.5 bg-[#EBFBEE] text-[#2B8A3E] rounded-md">
                    <?php echo $relief_rate; ?>% íƒ•ê° ì¸ê°€
                </span>
            </div>

            <h3 class="text-base font-bold text-[#151C2C] mb-3">
                <a href="<?php echo $list[$i]['href']; ?>" class="hover:text-[#D7AE66]">
                    <?php echo $list[$i]['subject']; ?>
                </a>
            </h3>

            <!-- ì±„ë¬´ ë¹„êµ ë°•ìŠ¤ -->
            <div class="grid grid-cols-2 gap-2 bg-[#F7F8FA] p-3 rounded-xl text-xs mb-3">
                <div>
                    <div class="text-[10px] text-gray-400">ê¸°ì¡´ ì±„ë¬´ì´ì•¡</div>
                    <div class="font-bold text-gray-700 line-through"><?php echo $orig_debt; ?>ì›</div>
                </div>
                <div class="border-l border-gray-200 pl-3">
                    <div class="text-[10px] text-[#2B8A3E] font-bold">ìµœì¢… íƒ•ê°ì•¡</div>
                    <div class="font-black text-[#2B8A3E]"><?php echo $relief_debt; ?>ì›</div>
                </div>
            </div>

            <div class="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-100">
                <span><?php echo $court; ?></span>
                <a href="<?php echo $list[$i]['href']; ?>" class="font-bold text-[#151C2C] hover:text-[#D7AE66]">
                    ìƒì„¸ë³´ê¸° â†’
                </a>
            </div>
        </div>
        <?php } ?>
    </div>
</div>`,

    indexPhpSnippet: `<?php
// theme/hope_partner/index.php
if (!defined('_GNUBOARD_')) exit;
include_once(G5_THEME_PATH.'/head.php');
?>
<!-- [1] Hero Section: ê³µê°í˜• í—¤ë“œì¹´í”¼, ë“€ì–¼ CTA, 1:1 ìƒë‹´ ì‚¬ì§„ -->
<section class="bg-[#151C2C] text-white pt-10 pb-16 px-4 sm:px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B] text-[#D7AE66] text-xs font-semibold">
                <i class="fa fa-lock"></i> 100% ë¹„ê³µê°œ ì•ˆì‹¬ìƒë‹´
            </div>
            <h1 class="text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-[1.25]">
                í˜¼ìž ê³ ë¯¼í•˜ì§€ ë§ˆì„¸ìš”.<br>
                <span class="text-[#D7AE66]">ê°œì¸íšŒìƒ</span>, ì§€ê¸ˆë¶€í„° ì°¨ê·¼ì°¨ê·¼ ì•Œì•„ë³´ì„¸ìš”.
            </h1>
            <p class="text-slate-300 text-sm sm:text-base max-w-xl">
                í˜„ìž¬ ìƒí™©ì— ë§žëŠ” íšŒìƒ ê°€ëŠ¥ì„±ê³¼ ì§„í–‰ ë°©ë²•ì„ ìƒë‹´ì„ í†µí•´ í™•ì¸í•´ë³´ì„¸ìš”.
            </p>
            <div class="flex flex-wrap gap-3 pt-2">
                <a href="<?php echo G5_BBS_URL; ?>/write.php?bo_table=counsel" class="px-6 py-3.5 rounded-xl bg-[#D7AE66] text-[#151C2C] font-black text-sm">ë¬´ë£Œ ìƒë‹´ ì‹ ì²­</a>
                <a href="<?php echo G5_BBS_URL; ?>/page.php?pid=diagnosis" class="px-6 py-3.5 rounded-xl bg-[#202B40] text-white border border-slate-700 font-bold text-sm">ìžê°€ì§„ë‹¨</a>
            </div>
        </div>
        <div class="lg:col-span-5">
            <img src="<?php echo G5_THEME_URL; ?>/img/counseling_hero.jpg" alt="ì „ë¬¸ ìƒë‹´" class="rounded-3xl shadow-2xl w-full">
        </div>
    </div>
</section>

<!-- [2] í•µì‹¬ ë¬¸ì œ í•´ê²° 5ëŒ€ ìƒí™©ë³„ ì¹´ë“œ -->
<!-- [3] ê°œì¸íšŒìƒ í•µì‹¬ ì •ë³´ 4ê°€ì§€ ì¹´ë“œ -->
<!-- [4] ê°œì¸íšŒìƒ ì§„í–‰ ê³¼ì • 7ë‹¨ê³„ íƒ€ìž„ë¼ì¸ -->
<!-- [5] ìžê°€ì§„ë‹¨ CTA ("ë‚´ ìƒí™©ë„ ê°œì¸íšŒìƒì´ ê°€ëŠ¥í• ê¹Œìš”?") -->
<!-- [6] ì¤‘ê°„ ìƒë‹´ CTA ("í˜„ìž¬ ìƒí™©ì„ ì •í™•í•˜ê²Œ í™•ì¸í•˜ê³  ì‹¶ë‹¤ë©´...") -->

<!-- [7] ì‹ ìš©íšŒë³µ ê²½í—˜ë‹´ ìµœì‹ ê¸€ (/story ì—°ë™) -->
<?php echo latest('theme/story_latest', 'story', 4, 40); ?>

<!-- [8] ë‰´ìŠ¤/ì •ë³´ ìµœì‹ ê¸€ (/news ì—°ë™) -->
<?php echo latest('theme/news_latest', 'news', 4, 40); ?>

<!-- [9] FAQ ì•„ì½”ë””ì–¸ -->
<!-- [10] Final CTA: ìƒë‹´ ì‹ ì²­ í¼ -->

<?php
include_once(G5_THEME_PATH.'/tail.php');
?>`,

    counselUpdate: `<?php
// theme/hope_partner/counsel_update.php
include_once('./_common.php');

$name = clean_xss_tags(trim($_POST['name']));
$phone = clean_xss_tags(trim($_POST['phone']));
$service_type = clean_xss_tags(trim($_POST['service_type']));
$debt_amount = clean_xss_tags(trim($_POST['debt_amount']));
$call_time = clean_xss_tags(trim($_POST['call_time']));
$notes = clean_xss_tags(trim($_POST['notes']));

if (!$name || !$phone) {
    alert('ì„±í•¨ê³¼ ì•ˆì‹¬ ì—°ë½ì²˜ë¥¼ ìž…ë ¥í•´ ì£¼ì„¸ìš”.');
}

// 1. ê·¸ëˆ„ë³´ë“œ ìƒë‹´ì‹ ì²­ ì „ìš© í…Œì´ë¸” ì €ìž¥
$sql = " INSERT INTO g5_counsel_request 
            SET name = '{$name}',
                phone = '{$phone}',
                service_type = '{$service_type}',
                debt_amount = '{$debt_amount}',
                call_time = '{$call_time}',
                notes = '{$notes}',
                ip = '{$_SERVER['REMOTE_ADDR']}',
                reg_date = '".G5_TIME_YMDHIS."' ";
sql_query($sql);

// 2. ë‹´ë‹¹ ë³€í˜¸ì‚¬ì—ê²Œ ì¦‰ì‹œ ë¹„ê³µê°œ ì•Œë¦¼ í†µë³´ (ì¹´ì¹´ì˜¤ ì•Œë¦¼í†¡ ë˜ëŠ” SMS API)
// send_aligo_sms($phone, "ì°½ì›ê°œì¸íšŒìƒ ë¹„ê³µê°œ ìƒë‹´ì‹ ì²­ ì ‘ìˆ˜ì™„ë£Œ");

alert('ë¹„ë°€ìƒë‹´ ì‹ ì²­ì´ ì„±ê³µì ìœ¼ë¡œ ì ‘ìˆ˜ë˜ì—ˆìŠµë‹ˆë‹¤. ì§€ì •í•˜ì‹  ì‹œê°„ì— ì¡°ìš©ížˆ ì—°ë½ë“œë¦¬ê² ìŠµë‹ˆë‹¤.', G5_URL);
?>`,
  };

  return (
    <div className="space-y-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 pt-6">
      {/* Header Banner */}
      <div className="bg-[#151C2C] text-white rounded-3xl p-8 sm:p-12 border border-[#252f44]">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202B40] border border-[#D7AE66]/50 text-[#D7AE66] text-xs font-bold">
            <Terminal className="w-3.5 h-3.5" />
            <span>DEVELOPER QUICK-START GUIDE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Cursor IDE & ê·¸ëˆ„ë³´ë“œ 5 ê°œë°œ êµ¬í˜„ ê°€ì´ë“œ
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            ë””ìžì¸ ê²°ê³¼ë¥¼ Cursorì— ê°€ì ¸ê°€ì„œ ê·¸ëˆ„ë³´ë“œ 5 í…Œë§ˆ ë° ê²Œì‹œíŒ 2ê°œ(/story, /news)ë¡œ ê·¸ëŒ€ë¡œ êµ¬í˜„í•  ìˆ˜ ìžˆëŠ” íŒŒì¼ íŠ¸ë¦¬ì™€ PHP/HTML ì½”ë“œ í…œí”Œë¦¿ìž…ë‹ˆë‹¤.
          </p>
        </div>
      </div>

      {/* 1. FOLDER ARCHITECTURE */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <FolderTree className="w-5 h-5 text-[#D7AE66]" />
            <h2 className="text-xl font-bold text-[#151C2C]">1. ê·¸ëˆ„ë³´ë“œ 5 í…Œë§ˆ ê¶Œìž¥ í´ë” êµ¬ì¡°</h2>
          </div>
          <button
            onClick={() => copyCode(codeSnippets.folderTree, 'tree')}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50"
          >
            {copiedSection === 'tree' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSection === 'tree' ? 'ë³µì‚¬ë¨' : 'êµ¬ì¡° ë³µì‚¬'}</span>
          </button>
        </div>
        <pre className="bg-[#0F141F] text-slate-200 p-5 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed">
          {codeSnippets.folderTree}
        </pre>
      </section>

      {/* 2. HEADER & NAVIGATION TEMPLATE (head.php) */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#D7AE66]" />
            <h2 className="text-xl font-bold text-[#151C2C]">
              2. í—¤ë” & ë‚´ë¹„ê²Œì´ì…˜ í…œí”Œë¦¿ (theme/hope_partner/head.php)
            </h2>
          </div>
          <button
            onClick={() => copyCode(codeSnippets.headPhpSnippet, 'head')}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
          >
            {copiedSection === 'head' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSection === 'head' ? 'ë³µì‚¬ë¨' : 'head.php ì½”ë“œ ë³µì‚¬'}</span>
          </button>
        </div>
        <p className="text-xs text-gray-500">
          ë†’ì´ 68px, 3ì´ˆ ì¸ì‹ UX(íšŒìƒì •ë³´, 1ë¶„ ìžê°€ì§„ë‹¨, 100% ë¹„ë°€ìƒë‹´), ë©”ê°€ ë“œë¡­ë‹¤ìš´ ë° ëª¨ë°”ì¼ í–„ë²„ê±° ë©”ë‰´ê°€ í¬í•¨ëœ ê·¸ëˆ„ë³´ë“œ 5 ì‹œë§¨í‹± í…œí”Œë¦¿ìž…ë‹ˆë‹¤.
        </p>
        <pre className="bg-[#0F141F] text-sky-300 p-5 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed max-h-96">
          {codeSnippets.headPhpSnippet}
        </pre>
      </section>

      {/* 2-1. MAIN HOMEPAGE 10-SECTION TEMPLATE (index.php) */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#D7AE66]" />
            <h2 className="text-xl font-bold text-[#151C2C]">
              3. ë©”ì¸ í™ˆíŽ˜ì´ì§€ 10ëŒ€ ì „í™˜ ì„¹ì…˜ í…œí”Œë¦¿ (theme/hope_partner/index.php)
            </h2>
          </div>
          <button
            onClick={() => copyCode(codeSnippets.indexPhpSnippet, 'index')}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
          >
            {copiedSection === 'index' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSection === 'index' ? 'ë³µì‚¬ë¨' : 'index.php ì½”ë“œ ë³µì‚¬'}</span>
          </button>
        </div>
        <p className="text-xs text-gray-500">
          ì‹¤ì œ ìƒë‹´ ì „í™˜ì„ ìœ„í•´ ì„¤ê³„ëœ 10ëŒ€ í•µì‹¬ ì„¹ì…˜(Hero, 5ëŒ€ ë¬¸ì œí•´ê²°, í•µì‹¬ì •ë³´ 4ê°œ, 7ë‹¨ê³„ íƒ€ìž„ë¼ì¸, ìžê°€ì§„ë‹¨, ì‹ ìš©íšŒë³µ ê²½í—˜ë‹´ /story, ë‰´ìŠ¤ /news, FAQ, Final CTA)ì„ ê·¸ëˆ„ë³´ë“œ 5ì— ê·¸ëŒ€ë¡œ ë§¤í•‘í•œ í…œí”Œë¦¿ìž…ë‹ˆë‹¤.
        </p>
        <pre className="bg-[#0F141F] text-amber-100 p-5 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed max-h-96">
          {codeSnippets.indexPhpSnippet}
        </pre>
      </section>

      {/* 4. BOARD 1 SKIN TEMPLATE */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-[#D7AE66]" />
            <h2 className="text-xl font-bold text-[#151C2C]">
              4. ê²Œì‹œíŒ 1: /story ì¹´ë“œí˜• ë¦¬ìŠ¤íŠ¸ ìŠ¤í‚¨ (list.skin.php)
            </h2>
          </div>
          <button
            onClick={() => copyCode(codeSnippets.storyListSkin, 'story')}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
          >
            {copiedSection === 'story' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSection === 'story' ? 'ë³µì‚¬ë¨' : 'PHP ì½”ë“œ ë³µì‚¬'}</span>
          </button>
        </div>
        <p className="text-xs text-gray-500">
          ê·¸ëˆ„ë³´ë“œì˜ ê¸°ë³¸ ì—¬ë¶„ í•„ë“œ(wr_1~wr_5)ë¥¼ ì±„ë¬´ì•¡, íƒ•ê°ë¥ , ë²•ì› ë°ì´í„°ë¡œ ë§¤í•‘í•˜ì—¬ Cursorì—ì„œ ì¦‰ì‹œ ë¶™ì—¬ë„£ì–´ ì‚¬ìš©í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤.
        </p>
        <pre className="bg-[#0F141F] text-emerald-300 p-5 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed max-h-96">
          {codeSnippets.storyListSkin}
        </pre>
      </section>

      {/* 5. FORM HANDLER SCRIPT */}
      <section className="bg-white border border-[#E5E7EB] rounded-3xl p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#D7AE66]" />
            <h2 className="text-xl font-bold text-[#151C2C]">
              5. ìƒë‹´ì‹ ì²­ ë°±ì—”ë“œ í•¸ë“¤ëŸ¬ (counsel_update.php)
            </h2>
          </div>
          <button
            onClick={() => copyCode(codeSnippets.counselUpdate, 'counsel')}
            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer"
          >
            {copiedSection === 'counsel' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSection === 'counsel' ? 'ë³µì‚¬ë¨' : 'í•¸ë“¤ëŸ¬ ë³µì‚¬'}</span>
          </button>
        </div>
        <pre className="bg-[#0F141F] text-amber-200 p-5 rounded-2xl text-xs font-mono overflow-x-auto leading-relaxed">
          {codeSnippets.counselUpdate}
        </pre>
      </section>
    </div>
  );
};


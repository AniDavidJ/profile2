import React, { useState } from 'react';
import { 
  Smartphone, ArrowRightLeft, CreditCard, RefreshCw, 
  Send, ShieldCheck, CheckCircle2, ChevronRight, Lock, 
  Sliders, Eye, EyeOff, Layers, Sparkles 
} from 'lucide-react';

export default function PhoneSimulator() {
  const [activeTab, setActiveTab] = useState('fx'); // 'fx', 'brand', 'cards', 'summary'
  
  // FX State
  const [sendAmount, setSendAmount] = useState('5000');
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [fxSuccess, setFxSuccess] = useState(false);

  // Brand Refresh State
  const [brandVersion, setBrandVersion] = useState('new'); // 'old' | 'new'

  // Card Controls State
  const [isCardFrozen, setIsCardFrozen] = useState(false);
  const [cardLimit, setCardLimit] = useState(15000);
  const [showCardNumber, setShowCardNumber] = useState(false);

  // FX Rates relative to AED
  const exchangeRates = {
    INR: { rate: 22.85, symbol: '₹', flag: '🇮🇳', name: 'Indian Rupee' },
    USD: { rate: 0.272, symbol: '$', flag: '🇺🇸', name: 'US Dollar' },
    EUR: { rate: 0.251, symbol: '€', flag: '🇪🇺', name: 'Euro' },
    GBP: { rate: 0.215, symbol: '£', flag: '🇬🇧', name: 'British Pound' },
    PHP: { rate: 15.65, symbol: '₱', flag: '🇵🇭', name: 'Philippine Peso' },
  };

  const currentRateObj = exchangeRates[selectedCurrency];
  const calculatedReceived = (parseFloat(sendAmount || '0') * currentRateObj.rate).toFixed(2);

  const handleExecuteTransfer = () => {
    setFxSuccess(true);
    setTimeout(() => {
      setFxSuccess(false);
    }, 4000);
  };

  return (
    <section id="simulator" className="py-20 bg-slate-900/60 dark:bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Mobile Prototype</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            RAKBANK Digital Banking in Action
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Interact with live simulations of the key modules I developed: the Foreign Exchange (FX) engine, 
            the nationwide <span className="text-cyan-400 font-semibold">Brand Refresh</span> revamp, and Credit Card lifecycle management.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Controls & Architecture explanation on Left */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>Select a Feature to Test:</span>
              </h3>
              <p className="text-sm text-slate-400">
                Click below to switch the interactive mobile viewport on the right. Experience real-time rate calculation, UI themes, and state updates.
              </p>
            </div>

            {/* Feature Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => setActiveTab('fx')}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeTab === 'fx'
                    ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <ArrowRightLeft className={`w-5 h-5 ${activeTab === 'fx' ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/40">Core</span>
                </div>
                <div className="font-bold text-sm">FX Transfer Engine</div>
                <p className="text-xs text-slate-400 mt-1">Live exchange rate math, multi-currency pairs & instant execution</p>
              </button>

              <button
                onClick={() => setActiveTab('brand')}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeTab === 'brand'
                    ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <RefreshCw className={`w-5 h-5 ${activeTab === 'brand' ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800/40">Revamp</span>
                </div>
                <div className="font-bold text-sm">Brand Refresh Demo</div>
                <p className="text-xs text-slate-400 mt-1">Compare the legacy look vs the modernized RAKBANK UI & design system</p>
              </button>

              <button
                onClick={() => setActiveTab('cards')}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeTab === 'cards'
                    ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <CreditCard className={`w-5 h-5 ${activeTab === 'cards' ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-800/40">Mobile/Web</span>
                </div>
                <div className="font-bold text-sm">Credit Card Hub</div>
                <p className="text-xs text-slate-400 mt-1">Interactive card freeze/unfreeze, limit slider & security controls</p>
              </button>

              <button
                onClick={() => setActiveTab('summary')}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeTab === 'summary'
                    ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <Layers className={`w-5 h-5 ${activeTab === 'summary' ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">Ledger</span>
                </div>
                <div className="font-bold text-sm">Transaction Summary</div>
                <p className="text-xs text-slate-400 mt-1">Local & international transactions with categorized breakdown</p>
              </button>
            </div>

            {/* Architecture Details Box */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-3 font-mono">
              <div className="text-cyan-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5 font-sans">
                <ShieldCheck className="w-4 h-4" />
                <span>Technical Implementation Highlights</span>
              </div>
              <ul className="space-y-2 list-disc list-inside text-slate-300 font-sans">
                <li><strong className="text-white">Hybrid Bridge:</strong> Communication between native React Native shell and high-performance WebViews for dynamic financial widgets.</li>
                <li><strong className="text-white">High Security:</strong> End-to-end tokenization, SSL pinning, and central banking compliance.</li>
                <li><strong className="text-white">Micro-Interactions:</strong> Haptic feedback, smooth layout transitions, and instant offline-ready optimistic UI.</li>
              </ul>
            </div>

          </div>

          {/* Interactive Phone Mockup on Right */}
          <div className="lg:col-span-6 flex justify-center">
            
            {/* Phone Outer Shell */}
            <div className="w-[340px] sm:w-[380px] h-[720px] bg-slate-950 rounded-[48px] p-3.5 shadow-2xl shadow-cyan-900/30 border-[6px] border-slate-800 relative flex flex-col justify-between">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900/90 ml-auto mr-2"></div>
              </div>

              {/* Phone Inner Screen */}
              <div className="w-full h-full bg-slate-900 rounded-[38px] overflow-hidden flex flex-col text-slate-100 relative">
                
                {/* Status Bar */}
                <div className="pt-4 px-6 pb-2 flex items-center justify-between text-[11px] text-slate-400 font-medium z-20">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span>5G</span>
                    <span className="w-5 h-2.5 border border-slate-400 rounded-sm p-0.5 flex">
                      <span className="w-full h-full bg-emerald-400 rounded-xs"></span>
                    </span>
                  </div>
                </div>

                {/* App Bar / Header */}
                <div className={`px-5 py-3 transition-colors duration-300 flex items-center justify-between border-b ${
                  activeTab === 'brand' && brandVersion === 'old'
                    ? 'bg-rose-900/40 border-rose-800/40'
                    : 'bg-slate-950/80 border-slate-800'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                      activeTab === 'brand' && brandVersion === 'old'
                        ? 'bg-red-600 text-white'
                        : 'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-md'
                    }`}>
                      {activeTab === 'brand' && brandVersion === 'old' ? 'RB' : 'RAK'}
                    </div>
                    <div>
                      <div className="font-bold text-xs tracking-tight text-white flex items-center gap-1">
                        RAKBANK
                        {activeTab === 'brand' && (
                          <span className="text-[9px] px-1 py-0.2 bg-cyan-500/20 text-cyan-300 rounded">
                            {brandVersion === 'new' ? 'REFRESHED' : 'LEGACY'}
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400">Digital Banking</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block">Total Balance</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">AED 84,250.00</span>
                  </div>
                </div>

                {/* Main Interactive Screen Content */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
                  
                  {/* TAB 1: FX ENGINE */}
                  {activeTab === 'fx' && (
                    <div className="space-y-3.5 animate-fadeIn">
                      <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span>Live FX Conversion</span>
                          <span className="text-cyan-400 flex items-center gap-1 text-[10px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span> Live Rate
                          </span>
                        </div>

                        {/* From Currency (AED) */}
                        <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-500 block">You Transfer</span>
                            <input
                              type="number"
                              value={sendAmount}
                              onChange={(e) => setSendAmount(e.target.value)}
                              className="w-28 bg-transparent text-sm font-bold text-white focus:outline-none font-mono"
                              placeholder="0.00"
                            />
                          </div>
                          <div className="flex items-center gap-1.5 bg-slate-800 px-2 py-1 rounded-lg">
                            <span>🇦🇪</span>
                            <span className="font-bold text-xs">AED</span>
                          </div>
                        </div>

                        {/* Currency Pair Selector */}
                        <div className="flex items-center justify-between px-1">
                          <span className="text-[10px] text-slate-400">Target Currency:</span>
                          <div className="flex gap-1">
                            {Object.keys(exchangeRates).map((curr) => (
                              <button
                                key={curr}
                                onClick={() => setSelectedCurrency(curr)}
                                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all ${
                                  selectedCurrency === curr
                                    ? 'bg-cyan-500 text-white'
                                    : 'bg-slate-800 text-slate-400 hover:text-white'
                                }`}
                              >
                                {curr}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* To Currency Result */}
                        <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
                          <div>
                            <span className="text-[10px] text-slate-500 block">Recipient Gets ({currentRateObj.name})</span>
                            <div className="text-sm font-bold text-emerald-400 font-mono">
                              {currentRateObj.symbol} {calculatedReceived}
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 bg-slate-800 px-2 py-1 rounded-lg">
                            <span>{currentRateObj.flag}</span>
                            <span className="font-bold text-xs">{selectedCurrency}</span>
                          </div>
                        </div>

                        {/* Rate details breakdown */}
                        <div className="text-[10px] text-slate-400 space-y-1 pt-1 border-t border-slate-800/80">
                          <div className="flex justify-between">
                            <span>Live Spot Rate:</span>
                            <span className="font-mono text-slate-300">1 AED = {currentRateObj.rate} {selectedCurrency}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Transfer Fee:</span>
                            <span className="text-emerald-400 font-medium">AED 0.00 (Zero Fee Promo)</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Speed:</span>
                            <span className="text-slate-300">Instant Execution</span>
                          </div>
                        </div>

                        {/* Execute Button */}
                        <button
                          onClick={handleExecuteTransfer}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-md shadow-cyan-500/20 active:scale-95 transition-transform flex items-center justify-center gap-1.5"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Execute FX Transfer</span>
                        </button>

                        {/* Confirmation Toast */}
                        {fxSuccess && (
                          <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] flex items-center gap-2 animate-fadeIn">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <div>
                              <div className="font-bold">Deal Executed Successfully!</div>
                              <div>Ref: RAK-FX-{Math.floor(100000 + Math.random() * 900000)}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* TAB 2: BRAND REFRESH DEMO */}
                  {activeTab === 'brand' && (
                    <div className="space-y-3.5 animate-fadeIn">
                      <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-white text-xs">Brand Refresh Comparison</span>
                          <div className="flex gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
                            <button
                              onClick={() => setBrandVersion('old')}
                              className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                                brandVersion === 'old' ? 'bg-red-700 text-white' : 'text-slate-400'
                              }`}
                            >
                              Old Design
                            </button>
                            <button
                              onClick={() => setBrandVersion('new')}
                              className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                                brandVersion === 'new' ? 'bg-cyan-500 text-white' : 'text-slate-400'
                              }`}
                            >
                              New Refresh
                            </button>
                          </div>
                        </div>

                        {/* Simulated UI Card showing the theme change */}
                        <div className={`p-4 rounded-2xl transition-all duration-300 ${
                          brandVersion === 'old'
                            ? 'bg-neutral-800 border-2 border-neutral-700 text-neutral-300'
                            : 'bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/60 border border-cyan-500/40 text-white shadow-xl shadow-cyan-950/50'
                        }`}>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <div className={`w-7 h-7 rounded-md flex items-center justify-center font-bold text-xs ${
                                brandVersion === 'old' ? 'bg-red-600 text-white' : 'bg-rose-600 text-white shadow'
                              }`}>
                                {brandVersion === 'old' ? 'RB' : 'RAK'}
                              </div>
                              <span className="font-bold text-xs">
                                {brandVersion === 'old' ? 'RAKBANK Classic' : 'RAKBANK Modern'}
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400">
                              {brandVersion === 'old' ? 'v4.1.0' : 'v5.8.0 Refresh'}
                            </span>
                          </div>

                          <div className="space-y-2">
                            <div className={`h-2 rounded-full ${brandVersion === 'old' ? 'bg-neutral-700' : 'bg-gradient-to-r from-cyan-400 to-blue-500'}`}></div>
                            <div className="flex justify-between text-[10px] text-slate-400">
                              <span>Design System:</span>
                              <span className="font-semibold text-slate-200">
                                {brandVersion === 'old' ? 'Legacy XML & CSS' : 'Unified React Native & Web Tokens'}
                              </span>
                            </div>
                            <div className="flex justify-between text-[10px] text-slate-400">
                              <span>Brand Colors:</span>
                              <span className="font-semibold text-slate-200">
                                {brandVersion === 'old' ? 'Standard Red' : 'Modernized Palette & Dark Mode'}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          As part of the Brand Refresh team, I updated and migrated all mobile app screens, 
                          modernized icons, updated logos, revamped webview styling, and established unified UI tokens.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: CREDIT CARDS */}
                  {activeTab === 'cards' && (
                    <div className="space-y-3.5 animate-fadeIn">
                      {/* Virtual Card Visual */}
                      <div className={`p-4 rounded-2xl transition-all duration-300 border relative overflow-hidden ${
                        isCardFrozen 
                          ? 'bg-slate-900 border-slate-700 opacity-60 filter grayscale' 
                          : 'bg-gradient-to-tr from-slate-900 via-indigo-950 to-blue-900 border-cyan-500/40 shadow-xl shadow-cyan-950/40'
                      }`}>
                        {isCardFrozen && (
                          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-10">
                            <span className="px-3 py-1 bg-rose-600/90 text-white font-bold text-[11px] rounded-full flex items-center gap-1 shadow">
                              <Lock className="w-3 h-3" /> CARD FROZEN
                            </span>
                          </div>
                        )}

                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <span className="text-[9px] uppercase tracking-wider text-cyan-300 font-bold block">RAKBANK Platinum</span>
                            <span className="text-[11px] font-bold text-white">World Elite Mastercard</span>
                          </div>
                          <div className="w-8 h-6 bg-amber-400/90 rounded-sm"></div>
                        </div>

                        <div className="font-mono text-sm tracking-widest text-slate-200 mb-3 flex items-center justify-between">
                          <span>{showCardNumber ? '5241 8890 1234 9876' : '•••• •••• •••• 9876'}</span>
                          <button onClick={() => setShowCardNumber(!showCardNumber)} className="text-slate-400 hover:text-white">
                            {showCardNumber ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                          </button>
                        </div>

                        <div className="flex justify-between text-[10px] text-slate-400">
                          <div>
                            <span className="block text-[8px] uppercase">Card Holder</span>
                            <span className="font-bold text-slate-200">ANI VALUED CLIENT</span>
                          </div>
                          <div>
                            <span className="block text-[8px] uppercase">Expires</span>
                            <span className="font-bold text-slate-200">08/29</span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Controls */}
                      <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800 space-y-3">
                        <div className="text-xs font-bold text-white flex justify-between items-center">
                          <span>Card Security Controls</span>
                          <span className="text-[10px] text-cyan-400">Mobile + WebView Sync</span>
                        </div>

                        {/* Freeze / Unfreeze Switch */}
                        <div className="flex items-center justify-between py-1 border-b border-slate-800">
                          <div>
                            <span className="text-xs font-medium text-slate-200 block">Instant Card Freeze</span>
                            <span className="text-[10px] text-slate-400">Temporarily lock all spending</span>
                          </div>
                          <button
                            onClick={() => setIsCardFrozen(!isCardFrozen)}
                            className={`w-11 h-6 rounded-full transition-colors p-0.5 ${
                              isCardFrozen ? 'bg-rose-600' : 'bg-slate-700'
                            }`}
                          >
                            <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                              isCardFrozen ? 'translate-x-5' : 'translate-x-0'
                            }`} />
                          </button>
                        </div>

                        {/* Daily Limit Slider */}
                        <div className="space-y-1.5 pt-1">
                          <div className="flex justify-between text-[11px]">
                            <span className="text-slate-400">Daily Spending Limit:</span>
                            <span className="font-mono text-cyan-400 font-bold">AED {cardLimit.toLocaleString()}</span>
                          </div>
                          <input
                            type="range"
                            min="2000"
                            max="50000"
                            step="1000"
                            value={cardLimit}
                            onChange={(e) => setCardLimit(Number(e.target.value))}
                            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: TRANSACTION SUMMARY */}
                  {activeTab === 'summary' && (
                    <div className="space-y-2.5 animate-fadeIn">
                      <div className="flex justify-between items-center px-1">
                        <span className="font-bold text-white text-xs">Recent Ledger</span>
                        <span className="text-[10px] text-cyan-400">View All</span>
                      </div>

                      {[
                        { title: 'FX Transfer (INR Remittance)', date: 'Today, 2:15 PM', amount: '- AED 5,000.00', status: 'Completed', type: 'fx' },
                        { title: 'Local IPP Instant Transfer', date: 'Yesterday', amount: '- AED 1,200.00', status: 'Completed', type: 'local' },
                        { title: 'Credit Card Settlement', date: '24 Sep', amount: '- AED 3,450.00', status: 'Completed', type: 'card' },
                        { title: 'Salary Credit - Tech Dev', date: '01 Sep', amount: '+ AED 22,000.00', status: 'Credited', type: 'salary' },
                      ].map((item, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-slate-200 text-[11px]">{item.title}</div>
                            <div className="text-[9px] text-slate-500">{item.date} • {item.status}</div>
                          </div>
                          <div className={`font-mono font-bold text-xs ${
                            item.amount.startsWith('+') ? 'text-emerald-400' : 'text-slate-200'
                          }`}>
                            {item.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>

                {/* Bottom App Navigation Bar inside simulated phone */}
                <div className="bg-slate-950 border-t border-slate-800 py-2.5 px-6 flex items-center justify-between text-slate-500 text-[10px]">
                  <button onClick={() => setActiveTab('fx')} className={`flex flex-col items-center gap-0.5 ${activeTab === 'fx' ? 'text-cyan-400' : 'hover:text-slate-300'}`}>
                    <ArrowRightLeft className="w-4 h-4" />
                    <span>FX</span>
                  </button>
                  <button onClick={() => setActiveTab('brand')} className={`flex flex-col items-center gap-0.5 ${activeTab === 'brand' ? 'text-cyan-400' : 'hover:text-slate-300'}`}>
                    <RefreshCw className="w-4 h-4" />
                    <span>Brand</span>
                  </button>
                  <button onClick={() => setActiveTab('cards')} className={`flex flex-col items-center gap-0.5 ${activeTab === 'cards' ? 'text-cyan-400' : 'hover:text-slate-300'}`}>
                    <CreditCard className="w-4 h-4" />
                    <span>Cards</span>
                  </button>
                  <button onClick={() => setActiveTab('summary')} className={`flex flex-col items-center gap-0.5 ${activeTab === 'summary' ? 'text-cyan-400' : 'hover:text-slate-300'}`}>
                    <Layers className="w-4 h-4" />
                    <span>Summary</span>
                  </button>
                </div>

                {/* Home Indicator */}
                <div className="pb-1 pt-0.5 bg-slate-950 flex justify-center">
                  <div className="w-24 h-1 bg-slate-700 rounded-full"></div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

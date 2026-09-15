import React, { useState, useEffect, useRef } from 'react';
import { WhatsAppIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { trackWhatsAppClick } from '../utils/analytics';
import { X, QrCode, ExternalLink, Copy, Check } from 'lucide-react';
import QRCode from 'qrcode';
import { motion, AnimatePresence } from 'motion/react';

export const FloatingWhatsApp: React.FC = () => {
  const [showQrModal, setShowQrModal] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Determine if client is mobile or tablet
  const isMobileOrTablet = () => {
    if (typeof window === 'undefined') return false;
    const isMobileUA = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
      navigator.userAgent
    );
    const isTouchNarrow =
      ('ontouchstart' in window || navigator.maxTouchPoints > 0) && window.innerWidth < 1024;
    return isMobileUA || isTouchNarrow;
  };

  // Generate QR Code data URL on mount
  useEffect(() => {
    QRCode.toDataURL(
      PERSONAL_INFO.whatsappUrl,
      {
        width: 240,
        margin: 1.5,
        color: {
          dark: '#0F172A',
          light: '#FFFFFF',
        },
        errorCorrectionLevel: 'H',
      },
      (err, url) => {
        if (!err && url) {
          setQrCodeDataUrl(url);
        }
      }
    );
  }, []);

  // Close modal on escape key or clicking outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowQrModal(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        const btn = document.getElementById('floating-whatsapp-btn');
        if (btn && btn.contains(e.target as Node)) return;
        setShowQrModal(false);
      }
    };

    if (showQrModal) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showQrModal]);

  const handleButtonClick = (e: React.MouseEvent) => {
    trackWhatsAppClick();
    if (isMobileOrTablet()) {
      // On mobile and tablet: directly open WhatsApp
      window.location.href = PERSONAL_INFO.whatsappUrl;
    } else {
      // On desktop web: toggle QR code modal for scanning
      e.preventDefault();
      setShowQrModal((prev) => !prev);
    }
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside aria-label="WhatsApp quick contact" className="relative">
      {/* Desktop QR Code Modal */}
      <AnimatePresence>
        {showQrModal && (
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 z-50 w-76 sm:w-84 rounded-2xl bg-white dark:bg-[#1E2230] border border-slate-200 dark:border-white/15 p-5 shadow-2xl text-slate-900 dark:text-[#FAF9F6] text-center"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                </div>
                <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-[#FAF9F6]">
                  Chat on WhatsApp
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setShowQrModal(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close QR Code window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* QR Code Container */}
            <div className="bg-slate-50 dark:bg-[#161822] p-3 rounded-xl border border-slate-200/80 dark:border-white/10 mb-3 flex flex-col items-center">
              {qrCodeDataUrl ? (
                <div className="relative p-2 bg-white rounded-lg shadow-xs">
                  <img
                    src={qrCodeDataUrl}
                    alt="WhatsApp QR Code for Rajakumar Sivasubramanian"
                    width={190}
                    height={190}
                    className="w-44 h-44 object-contain rounded"
                  />
                  {/* Subtle WhatsApp badge in center of QR */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-8 h-8 rounded-full bg-white p-0.5 shadow-md flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-[#25D366] flex items-center justify-center">
                        <WhatsAppIcon className="w-4 h-4 fill-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-44 h-44 flex items-center justify-center text-xs text-slate-400">
                  Generating QR Code...
                </div>
              )}

              <p className="text-[11px] text-slate-500 dark:text-[#94A3B8] mt-2.5 flex items-center justify-center gap-1">
                <QrCode className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Scan with phone camera or WhatsApp</span>
              </p>
            </div>

            {/* Direct Web Action & Phone info */}
            <div className="space-y-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in WhatsApp Web</span>
              </a>

              <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-[#272B3D] border border-slate-200 dark:border-white/10 text-xs">
                <span className="font-semibold text-slate-700 dark:text-[#CBD5E1]">
                  {PERSONAL_INFO.phone}
                </span>
                <button
                  type="button"
                  onClick={copyPhoneNumber}
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-1 text-[11px] font-medium transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        Copied
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (Bottom-Right) */}
      <a
        id="floating-whatsapp-btn"
        href={PERSONAL_INFO.whatsappUrl}
        onClick={handleButtonClick}
        aria-label="Contact Rajakumar on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-hidden focus-visible:ring-4 focus-visible:ring-[#25D366]/40 cursor-pointer"
      >
        {/* Subtle breathing ping halo */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"
          style={{ animationDuration: '3.5s' }}
          aria-hidden="true"
        />

        {/* WhatsApp Icon */}
        <div className="relative z-10">
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white drop-shadow-xs" />
        </div>

        {/* Hover Tooltip on desktop */}
        <span className="pointer-events-none absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900/90 dark:bg-[#1E2230]/95 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md border border-white/10 hidden lg:block">
          {showQrModal ? 'Close QR Scanner' : 'WhatsApp & QR Code'}
        </span>
      </a>
    </aside>
  );
};

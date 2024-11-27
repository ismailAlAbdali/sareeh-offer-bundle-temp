'use client';

import { Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from './i18n-provider';
import { translations } from '@/lib/translations';
import { useState } from 'react';
import LoadingOverlay from '@/components/loading-overlay';
import { motion, AnimatePresence } from 'framer-motion';

const MAIL_TO = process.env.NEXT_PUBLIC_MAIL_TO;
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

if (!WHATSAPP_NUMBER) {
  throw new Error('Missing WhatsApp number environment variable');
}

export default function ContactButtons() {
  const { language } = useI18n();
  const wa_messages =   translations[language].whatsapp
  const t = translations[language].contact;
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleWhatsApp = () => {
    setIsRedirecting(true);
    
    
    setTimeout(() => {
      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${wa_messages.heroMessage}`
     
      
      window.location.href = whatsappURL;
      setIsRedirecting(false);
    }, 1500);
  };

  const handleEmail = () => {
    window.open(MAIL_TO, '_blank');
  };

  return (
    <>
      <AnimatePresence>
        {isRedirecting && (
          <LoadingOverlay 
            message={wa_messages.directing_message}
          />
        )}
      </AnimatePresence>

      <div className="flex gap-2">
        <Button
          variant="default"
          size="sm"
          onClick={handleWhatsApp}
          disabled={isRedirecting}
          className="flex-1 md:flex-none"
        >
          <MessageCircle className={`h-4 w-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
          {t.whatsapp}
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={handleEmail}
          className="flex-1 md:flex-none"
        >
          <Mail className={`h-4 w-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
          {t.email}
        </Button>
      </div>
    </>
  );
}
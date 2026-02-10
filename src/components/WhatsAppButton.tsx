import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const whatsappNumber = "+919876543210"; // Replace with real number
  const message = "Hello INTECH SYSTEM, I'm interested in your services.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 left-6 z-[60]">
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-white p-2 pr-5 rounded-full shadow-2xl border border-slate-100 group transition-all"
      >
        <div className="bg-[#25D366] text-white p-3 rounded-full shadow-lg group-hover:shadow-[#25D366]/40 transition-all">
          <MessageCircle className="w-6 h-6 fill-current" />
        </div>
        <div className="hidden sm:block">
          <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold leading-none">Chat with us</div>
          <div className="text-slate-800 font-bold leading-tight">WhatsApp</div>
        </div>
        
        {/* Animated Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping -z-10" />
      </motion.a>
    </div>
  );
};

import { motion } from 'framer-motion';
import { Truck, ShieldCheck, HeadphonesIcon, Award, Clock, Zap } from 'lucide-react';

const trustFeatures = [
  {
    icon: Truck,
    title: "On-Time Delivery",
    description: "We respect your schedule and ensure all projects are completed within the agreed timeframe."
  },
  {
    icon: ShieldCheck,
    title: "Authorized Dealer",
    description: "Certified partner for leading brands ensuring you get 100% genuine products and warranties."
  },
  {
    icon: HeadphonesIcon,
    title: "Lifetime Support",
    description: "Our relationship doesn't end with installation. We provide continuous technical assistance."
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "We only use industrial-grade equipment that has been tested for extreme reliability."
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Emergency support available with guaranteed response times for critical security failures."
  },
  {
    icon: Zap,
    title: "Smart Efficiency",
    description: "Energy-efficient solutions that reduce operational costs while maximizing performance."
  }
];

export const TrustSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 group"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

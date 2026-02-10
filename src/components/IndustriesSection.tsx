import { motion } from 'framer-motion';

const industries = [
  { name: "Hospitality", icon: "🏨", count: "50+" },
  { name: "Retail", icon: "🛍️", count: "120+" },
  { name: "Education", icon: "🎓", count: "40+" },
  { name: "Residential", icon: "🏠", count: "300+" },
  { name: "Healthcare", icon: "🏥", count: "25+" },
  { name: "Corporate", icon: "🏢", count: "80+" }
];

export const IndustriesSection = () => {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-3">Sectors We Serve</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Versatile Solutions for Every Industry</h3>
            <p className="text-slate-400 text-lg">
              We specialize in tailoring our security and IT infrastructure to the unique demands of various business environments.
            </p>
          </div>
          <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-2xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-white mb-1">15+</div>
            <div className="text-blue-400 font-medium">Industry Segments</div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-8 rounded-[2rem] text-center hover:bg-white/10 transition-all cursor-default group"
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{industry.icon}</div>
              <div className="text-white font-bold mb-1">{industry.name}</div>
              <div className="text-blue-400 text-xs font-bold">{industry.count} Projects</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

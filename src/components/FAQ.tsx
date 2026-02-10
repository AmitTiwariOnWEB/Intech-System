import { motion } from 'framer-motion';

const faqData = [
  {
    question: "Do you offer on-site maintenance after installation?",
    answer: "Yes, we provide comprehensive Annual Maintenance Contracts (AMC) and on-site support for all our installations to ensure your systems run smoothly 24/7."
  },
  {
    question: "Can I access my security cameras remotely?",
    answer: "Absolutely. All our modern CCTV systems are integrated with cloud technology, allowing you to view live footage and recordings from your smartphone or laptop anywhere in the world."
  },
  {
    question: "How long does a typical installation take?",
    answer: "An average residential setup takes 1-2 days, while commercial projects vary based on scale. We provide a detailed timeline during our initial site survey."
  },
  {
    question: "Are your IT solutions scalable for growing businesses?",
    answer: "Yes, we design all IT infrastructure with scalability in mind, using modular networking and cloud solutions that can grow as your business expands."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">FAQ</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Common Questions</h3>
        </div>

        <div className="space-y-4">
          {faqData.map((item, i) => (
            <motion.details
              key={i}
              className="group border border-slate-200 rounded-2xl overflow-hidden transition-all hover:border-blue-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none bg-white hover:bg-slate-50 transition-colors">
                <span className="font-bold text-slate-900 pr-4">{item.question}</span>
                <span className="text-blue-600 transition-transform duration-300 group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </span>
              </summary>
              <div className="p-6 pt-0 text-slate-600 bg-white border-t border-slate-50">
                {item.answer}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

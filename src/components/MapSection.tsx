import { MapPin, ExternalLink } from 'lucide-react';

export const MapSection = () => {
  // Replace with actual INTECH SYSTEM location coordinates or address
  const address = "123 Business Hub, MG Road, Mumbai, Maharashtra, India";
  const encodedAddress = encodeURIComponent(address);
  
  // Using a standard iframe src for demonstration as API key is not available
  const standardIframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.02641662453!2d72.8361021!3d18.9298716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c13f03a67d%3A0x67692694b998399e!2sGateway%20Of%20India%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
          <div className="grid lg:grid-cols-3">
            {/* Map Info */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Our Location</h2>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">Visit Our Office</h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We are conveniently located in the heart of the business district. Come talk to us about your security needs.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Headquarters</div>
                    <div className="text-slate-500">{address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Working Hours</div>
                    <div className="text-slate-500">Mon - Sat: 9:00 AM - 7:00 PM</div>
                  </div>
                </div>
              </div>

              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
              >
                Get Directions <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Map Iframe */}
            <div className="lg:col-span-2 min-h-[400px] h-full relative">
              <iframe
                title="Office Location"
                src={standardIframeSrc}
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

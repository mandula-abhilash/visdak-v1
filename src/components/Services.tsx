import { Globe, Smartphone, Code2, Rocket, BarChart, HeartHandshake } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-primary-emerald font-medium">Our Solutions</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">
            Digital Excellence, 
            <span className="text-primary-emerald">Rural Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions crafted with global expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Globe,
              title: "Web Development",
              description: "Modern, responsive websites that drive growth",
              gradient: "from-emerald-500 to-green-500"
            },
            {
              icon: Smartphone,
              title: "Mobile Apps",
              description: "Native and cross-platform solutions",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              icon: Code2,
              title: "Custom Software",
              description: "Tailored applications for your needs",
              gradient: "from-purple-500 to-pink-500"
            },
            {
              icon: Rocket,
              title: "Performance",
              description: "Lightning-fast digital experiences",
              gradient: "from-orange-500 to-yellow-500"
            },
            {
              icon: BarChart,
              title: "Analytics",
              description: "Data-driven growth strategies",
              gradient: "from-cyan-500 to-blue-500"
            },
            {
              icon: HeartHandshake,
              title: "Support",
              description: "24/7 dedicated assistance",
              gradient: "from-pink-500 to-rose-500"
            }
          ].map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="service-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="icon-container group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6 text-primary-emerald relative z-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-emerald transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
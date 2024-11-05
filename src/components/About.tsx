import { Trophy, Users, Globe2, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From our base in Nandikandi, India, we're revolutionizing how rural tech companies deliver global solutions.
          </p>
        </div>

        <div className="stats-grid mb-16">
          {[
            { icon: Trophy, value: "100+", label: "Projects Completed" },
            { icon: Users, value: "50+", label: "Happy Clients" },
            { icon: Globe2, value: "10+", label: "Countries Served" },
            { icon: Clock, value: "24/7", label: "Support Available" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl card-hover">
                <Icon className="h-10 w-10 text-primary-emerald mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're proving that world-class technology solutions can come from anywhere. 
              By combining global standards with rural values, we deliver reliable, 
              cost-effective digital solutions that help businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { CreditCard, Award, TrendingUp, Zap, Coins, ArrowUpRight } from 'lucide-react';

function FeatureCard({ icon: Icon, iconColor, title, description, label }) {
  return (
    <div className="bg-[#121212] border border-neutral-800 p-8 flex flex-col justify-between group hover:border-neutral-500 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-neutral-500/5 rounded-full blur-2xl group-hover:opacity-60 transition-opacity" />
      <div>
        <div className={`${iconColor} mb-6 p-3 bg-neutral-900 inline-block border border-neutral-800`}>
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold mb-3 tracking-tight">{title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-8 pt-4 border-t border-neutral-900 flex justify-between items-center text-xs font-mono text-neutral-500 group-hover:text-white transition-colors">
        <span>{label}</span>
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}

export default function FeaturesGrid() {
  const features = [
    {
      icon: CreditCard,
      iconColor: 'text-cyan-400',
      title: 'Card Bill Payments',
      description: 'Pay any credit card bill instantly with direct clearing and automatic statement analysis protection.',
      label: 'NEOPOP // PROTOCOL'
    },
    {
      icon: Award,
      iconColor: 'text-purple-400',
      title: 'Premium Rewards',
      description: 'Burn CRED Coins to claim handpicked luxury rewards, stays, access parameters, and tech drops.',
      label: 'EXCLUSIVE // REWARDS'
    },
    {
      icon: TrendingUp,
      iconColor: 'text-emerald-400',
      title: 'Score Analysis',
      description: 'Get monthly structural reporting down to individual factors affecting consumer credit health metrics.',
      label: 'EXPERIAN // METRICS'
    },
    {
      icon: Zap,
      iconColor: 'text-amber-400',
      title: 'Custom UPI Mint',
      description: 'Skip the line with highly secure, custom-skinned abstract UPI payment strings offering dynamic cashback loops.',
      label: 'LIGHTNING // UPI'
    },
    {
      icon: Coins,
      iconColor: 'text-blue-400',
      title: 'CRED Mint Cash',
      description: 'Instantly withdraw high-volume capital directly to your primary savings account at optimal micro-interest parameters.',
      label: 'LIQUIDITY // CASH'
    }
  ];

  return (
    <section id="features" className="py-24 md:py-36 max-w-7xl mx-auto px-6 md:px-12">
      <div className="mb-16 space-y-4">
        <p className="text-xs font-bold uppercase text-cyan-400 tracking-widest">Ecosystem Perks</p>
        <h2 className="bg-gradient-to-r from-amber-200 to-amber-600 bg-clip-text text-transparent">Product suites engineered for convenience.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, idx) => (
          <FeatureCard key={idx} {...item} />
        ))}
        
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-dashed border-neutral-800 p-8 flex flex-col justify-center items-center text-center group relative">
          <h4 className="text-lg font-bold tracking-tight mb-2">More coming soon</h4>
          <p className="text-neutral-500 text-xs max-w-[200px]">We iterate parameters dynamically weekly. Stay updated.</p>
          <div className="mt-6 text-xs uppercase bg-white text-black px-4 py-2 font-bold tracking-widest group-hover:invert duration-300 transition-all cursor-pointer">
            Explore Roadmap
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect, useMemo } from 'react';
import { 
  ChevronRight, 
  Map as MapIcon, 
  Database, 
  Cpu, 
  Activity, 
  ArrowRight,
  Menu,
  X,
  FileText,
  Smartphone,
  Layout,
  CloudSun,
  Search,
  CheckCircle2,
  TrendingUp,
  Info,
  Layers,
  Calendar,
  Plus,
  Minus,
  HelpCircle
} from 'lucide-react';

// --- Sub-components ---

const DashboardHero: React.FC = () => {
  return (
    <div className="relative mx-auto max-w-6xl p-4 md:p-8">
      {/* The "Barra Verde" Behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[50%] md:h-[60%] bg-[#435a3d]/20 rounded-[3rem] md:rounded-[4rem] pointer-events-none"></div>
      
      {/* Mockup Image Container */}
      <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-neutral-200 z-10 bg-white">
        <img 
          src="vitis-hero.png" 
          alt="VITIs Dashboard Mockup" 
          className="w-full h-auto block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-[#435a3d] vitis-3d-subtle">VITIs</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-neutral-600">
          <a href="#problem" className="hover:text-[#435a3d] transition-colors">Problem</a>
          <a href="#modelling" className="hover:text-[#435a3d] transition-colors">Methodology</a>
          <a href="#explorer" className="hover:text-[#435a3d] transition-colors">Explorer</a>
          <a href="#overview" className="hover:text-[#435a3d] transition-colors">System</a>
        </div>
        <button className="bg-[#435a3d] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#2f402a] transition-all">
          Academic Project
        </button>
      </div>
    </nav>
  );
};

const SectionHeading: React.FC<{ subtitle?: string; title: string; center?: boolean; titleClassName?: string }> = ({ subtitle, title, center, titleClassName }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    {subtitle && <p className="text-[#435a3d] font-semibold text-xs uppercase tracking-[0.3em] mb-3">{subtitle}</p>}
    <h2 className={`text-4xl md:text-5xl font-serif font-semibold leading-tight ${titleClassName || 'text-neutral-800'}`}>{title}</h2>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#435a3d] selection:text-white">
      <Navbar />

      {/* 1. Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-7xl md:text-[8.5rem] font-serif font-bold text-[#435a3d] leading-none mb-6 tracking-tighter vitis-3d">
            VITIs
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-neutral-600 leading-relaxed font-light mb-16">
            A data-driven decision support system for monitoring and predicting vineyard water stress.
          </p>
          
          <DashboardHero />
        </div>
      </header>

      {/* 2. Problem Definition */}
      <section id="problem" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading subtitle="Context" title="Addressing Spatial Heterogeneity" />
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-light">
                <p>
                  Water stress is one of the most critical challenges in modern Mediterranean viticulture. In these environments, water availability often becomes the limiting factor for grape quality and yield.
                </p>
                <p>
                  However, vineyards are not uniform. Intra-parcel spatial heterogeneity driven by soil depth, slope, and vine vigor means that different zones of the same field respond differently to climatic pressure. 
                </p>
                <p className="border-l-2 border-[#435a3d] pl-6 italic">
                  Timing is everything. Predicting stress before it manifests physiologically allows for surgical irrigation interventions, preserving resources and ensuring crop resilience.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/5] md:aspect-square">
              <img 
                src="vineyard-landscape.jpg" 
                alt="Mediterranean Vineyard Landscape" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Data Sources */}
      <section id="data" className="py-24 bg-vitis-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Data Pipeline" title="Scientific Foundations" center />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sentinel-2",
                source: "Copernicus Programme",
                desc: "High-resolution multi-spectral imagery (10m) used to derive vegetation indices and monitor leaf-level water content through the season.",
                icon: <MapIcon className="w-8 h-8 text-[#435a3d]" />
              },
              {
                title: "ERA5 Climatic",
                source: "ECMWF Reanalysis",
                desc: "Integrating temperature, VPD (Vapour Pressure Deficit), humidity, and radiation data to model the atmospheric demand for water.",
                icon: <CloudSun className="w-8 h-8 text-[#435a3d]" />
              },
              {
                title: "Field Observations",
                source: "In-situ Monitoring",
                desc: "Ground-truth phenological stages (BBCH) and field notes are integrated to calibrate the models to specific varietal behaviors.",
                icon: <Database className="w-8 h-8 text-[#435a3d]" />
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-1">{item.title}</h3>
                <p className="text-[#435a3d] text-[10px] font-bold uppercase tracking-widest mb-4">{item.source}</p>
                <p className="text-neutral-500 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Modelling Approach */}
      <section id="modelling" className="py-24 bg-white overflow-hidden border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative">
               <div className="bg-[#435a3d]/5 rounded-3xl p-12 border border-[#435a3d]/10">
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#435a3d] text-white flex items-center justify-center shrink-0 font-bold">1</div>
                      <div>
                        <h4 className="font-serif text-xl font-bold mb-2">Data Integration</h4>
                        <p className="text-sm text-neutral-500 font-light">Harmonizing spectral, climatic, and phenological variables into a unified parcel grid.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#435a3d] text-white flex items-center justify-center shrink-0 font-bold">2</div>
                      <div>
                        <h4 className="font-serif text-xl font-bold mb-2">Supervised Learning</h4>
                        <p className="text-sm text-neutral-500 font-light">Training models to recognize non-linear relationships between drivers and stress levels.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#435a3d] text-white flex items-center justify-center shrink-0 font-bold">3</div>
                      <div>
                        <h4 className="font-serif text-xl font-bold mb-2">Short-term Prediction</h4>
                        <p className="text-sm text-neutral-500 font-light">Generating actionable insights for a 3–7 day operational window.</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
            <div className="order-1 md:order-2">
              <SectionHeading subtitle="Methodology" title="Modelling Approach" />
              <div className="text-lg text-neutral-600 leading-relaxed font-light space-y-6">
                <p>
                  The project employs a supervised machine learning framework that integrates spectral, climatic, and phenological variables to model vineyard dynamics. 
                </p>
                <p>
                  The primary objective is the short-term prediction of water stress within a 3–7 day horizon, allowing for proactive field management and precise resource allocation.
                </p>
                <p>
                  Model outputs are specifically designed to be interpretable for decision support, ensuring that complex data patterns are translated into specific insights for operational tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Decision Support Logic */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeading 
            subtitle="Impact" 
            title="Actionable Insight, Not Raw Data" 
            center 
            titleClassName="text-[#a3b18a]" 
          />
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-white font-light leading-relaxed mb-12 opacity-100">
              The true value of VITIs lies in translating high-dimensional data into specific, spatialized indicators that support real-world decisions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Targeted Irrigation", icon: <Activity className="mx-auto mb-4 w-6 h-6 text-[#a3b18a]" /> },
                { label: "Yield Protection", icon: <ChevronRight className="mx-auto mb-4 w-6 h-6 text-[#a3b18a]" /> },
                { label: "Resource Efficiency", icon: <Database className="mx-auto mb-4 w-6 h-6 text-[#a3b18a]" /> },
                { label: "Risk Mitigation", icon: <Activity className="mx-auto mb-4 w-6 h-6 text-[#a3b18a]" /> }
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                  {item.icon}
                  <span className="text-xs font-bold uppercase tracking-widest block text-white">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Application Overview */}
      <section id="overview" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="The Interface" title="Comprehensive System Overview" center />
          
          <div className="space-y-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="space-y-12">
                  <div className="group border-b border-neutral-100 pb-8 hover:border-[#435a3d] transition-colors cursor-default">
                    <h3 className="text-2xl font-serif font-bold mb-3 flex items-center gap-3">
                      <Layout className="w-5 h-5 text-[#435a3d]" /> Monitoring
                    </h3>
                    <p className="text-neutral-500 font-light">Real-time spatial visualization of the Crop Water Stress Index (CWSI) across different blocks and varieties.</p>
                  </div>
                  <div className="group border-b border-neutral-100 pb-8 hover:border-[#435a3d] transition-colors cursor-default">
                    <h3 className="text-2xl font-serif font-bold mb-3 flex items-center gap-3">
                      <Activity className="w-5 h-5 text-[#435a3d]" /> Predictions
                    </h3>
                    <p className="text-neutral-500 font-light">Short-term stress forecasts based on ML inference, including variable importance analysis (VPD, Temperature).</p>
                  </div>
                  <div className="group border-b border-neutral-100 pb-8 hover:border-[#435a3d] transition-colors cursor-default">
                    <h3 className="text-2xl font-serif font-bold mb-3 flex items-center gap-3">
                      <Smartphone className="w-5 h-5 text-[#435a3d]" /> Field Notes & Mobile
                    </h3>
                    <p className="text-neutral-500 font-light">Seamless field data entry and simplified mobile views for on-the-go ground validation.</p>
                  </div>
                  <div className="group border-b border-neutral-100 pb-8 hover:border-[#435a3d] transition-colors cursor-default">
                    <h3 className="text-2xl font-serif font-bold mb-3 flex items-center gap-3">
                      <FileText className="w-5 h-5 text-[#435a3d]" /> Data Export
                    </h3>
                    <p className="text-neutral-500 font-light">Automated generation of PNG maps, CSV datasets, and analytical PDF reports for documentation.</p>
                  </div>
               </div>
               <div className="relative">
                  <div className="aspect-[4/3] bg-neutral-50 rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
                    <img 
                      src="forest-light.jpg" 
                      alt="Visual Context" 
                      className="w-full h-full object-cover"
                    />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Process Overview */}
      <section className="py-24 bg-vitis-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Workflow" title="The VITIs Process" center />
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-[#435a3d]/10 hidden md:block -translate-y-12"></div>
            
            {[
              { step: "01", label: "Data Acquisition", desc: "Sentinel-2 & ERA5 ingestion" },
              { step: "02", label: "Model Training", desc: "Feature extraction & ML processing" },
              { step: "03", label: "Predictive Insight", desc: "Stress forecasting & risk analysis" },
              { step: "04", label: "Operational Decision", desc: "In-field irrigation management" }
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center w-full md:w-1/4">
                <div className="w-20 h-20 bg-[#435a3d] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-serif font-bold shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-serif text-xl font-bold mb-2">{item.label}</h4>
                <p className="text-sm text-neutral-500 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-white py-16 border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          {/* Brand Name Centered */}
          <div className="flex flex-col items-center text-center mb-10">
            <span className="font-serif text-4xl font-bold text-[#435a3d] block mb-3 tracking-tighter vitis-3d-subtle">VITIs</span>
            <p className="text-neutral-500 font-light max-w-2xl">
              Advanced agro-environmental data science for sustainable viticulture and water resource management.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-neutral-50 mb-12">
            <div className="text-neutral-400 text-xs tracking-widest uppercase">
              Fundamentals of Agro-Environmental Data Science (FADS)
            </div>
            <div className="flex gap-8 text-neutral-400 text-xs tracking-widest uppercase">
              <span>© 2026 Academic Project</span>
              <span>Mediterranean Agriculture</span>
            </div>
          </div>

          {/* Academic Statement at the very end, smaller */}
          <div className="text-center">
             <p className="text-neutral-400 text-[10px] font-medium leading-relaxed italic opacity-80">
               “This website constitutes the official project presentation for the FADS Assignment 02, as agreed with the course instructor.”
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
import { useEffect, useRef, useState } from 'react';
import { PROFILE, EXPERIENCE, EDUCATION, SKILLS, PROJECTS, MILITARY_SERVICE, CLUBS } from './constants';
import { AIChat } from './components/AIChat';
import { GripVertical } from 'lucide-react';

// --- Stars Animation Component (獨立定義，放在 App 外面) ---
const StarsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setSize();

    const circles: any[] = [];
    const colorArray = ['#4c1a22', '#4c1a23', '#5d6268', '#1f2e37', '#474848', '#542619', '#ead8cf', '#4c241f', '#d6b9b1', '#964a47'];

    class Circle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      radius: number;
      minRadius: number;
      color: string;

      constructor(x: number, y: number, dx: number, dy: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        const drawRadius = Math.max(0, this.radius);
        ctx.beginPath();
        ctx.arc(this.x, this.y, drawRadius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update(mouse: { x: number; y: number }) {
        if (this.x + this.radius > width || this.x - this.radius < 0) this.dx = -this.dx;
        if (this.y + this.radius > height || this.y - this.radius < 0) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;

        const mouseDist = 50;
        if (mouse.x - this.x < mouseDist && mouse.x - this.x > -mouseDist && 
            mouse.y - this.y < mouseDist && mouse.y - this.y > -mouseDist) {
          if (this.radius < 1.5) this.radius += 1;
        } else if (this.radius > this.minRadius) {
          this.radius -= 1;
        }

        this.draw();
      }
    }

    const init = () => {
      circles.length = 0;
      for (let i = 0; i < 800; i++) {
        const radius = Math.random() * 1.5;
        const x = Math.random() * (width - radius * 2) + radius;
        const y = Math.random() * (height - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * 0.5;
        const dy = (Math.random() - 0.5) * 0.5;
        const color = colorArray[Math.floor(Math.random() * colorArray.length)];
        circles.push(new Circle(x, y, dx, dy, radius, color));
      }
    };

    const mouse = { x: -100, y: -100 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    const handleResize = () => {
      setSize();
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    init();

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      circles.forEach(c => c.update(mouse));
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      id="stars" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

// --- Identity Animation Component ---
const Identity = ({ state }: { state: 'working' | 'rest' | 'robot' | 'flat' }) => {
  return (
    <div className={`loading ${state}`} id="identity" title="Identity">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [view, setView] = useState<'home' | 'experience' | 'projects' | 'about'>('home');
  const [identityState, setIdentityState] = useState<'working' | 'robot' | 'flat'>('working');

  useEffect(() => {
    let isMounted = true;
    const runAnimationCycle = async () => {
      while (isMounted) {
        setIdentityState('working');
        await new Promise(r => setTimeout(r, 3000));
        if (!isMounted) break;

        setIdentityState('flat');
        await new Promise(r => setTimeout(r, 1500));
        if (!isMounted) break;

        setIdentityState('robot'); 
        await new Promise(r => setTimeout(r, 3000));
        if (!isMounted) break;

        setIdentityState('flat');
        await new Promise(r => setTimeout(r, 1500));
        if (!isMounted) break;
      }
    };
    runAnimationCycle();
    return () => { isMounted = false; };
  }, []);

  const handleNav = (newView: 'home' | 'experience' | 'projects' | 'about') => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="wrapper" style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      
      {/* 1. Background Stars */}
      <StarsCanvas />
      
      {/* 2. Main Container (Content) */}
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* === HOME VIEW === */}
        <div className={`template color-yellow ${view === 'home' ? 'current' : ''}`} data-template="home">
          
          <main className="flex flex-col lg:flex-row items-center lg:justify-between w-full h-full gap-8 lg:gap-20 px-4 lg:px-0 py-4 lg:py-0 pb-32 lg:pb-0">
            
            {/* Left Side: Navigation */}
            <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-1/2 z-10 lg:pl-8 order-2 lg:order-1 mt-2 lg:mt-0 text-center lg:text-left">
              <div className="home-line-item group">
                  <div className="hidden lg:block absolute left-[-20px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500">
                    <GripVertical size={20} />
                  </div>
                  <span className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"><mark>Data Engineer</mark></span>
              </div>
              <div className="home-line-item group">
                  <div className="hidden lg:block absolute left-[-20px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500">
                    <GripVertical size={20} />
                  </div>
                <span className="text-lg sm:text-2xl lg:text-4xl text-slate-300 font-normal leading-snug">Rooted in Animal and Brain Science</span>
              </div>
              <div className="home-line-item group">
                  <div className="hidden lg:block absolute left-[-20px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500">
                    <GripVertical size={20} />
                  </div>
                <span className="text-slate-400 font-mono text-sm sm:text-base lg:text-lg">{PROFILE.email.replace('mailto:', '')}</span>
              </div>
              <div className="home-line-item group">
                  <div className="hidden lg:block absolute left-[-20px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500">
                    <GripVertical size={20} />
                  </div>
                <span className="text-slate-400 font-mono text-sm sm:text-base lg:text-lg">{PROFILE.phone}</span>
              </div>
              <div className="home-line-item group">
                  <div className="hidden lg:block absolute left-[-20px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500">
                    <GripVertical size={20} />
                  </div>
                <div className="links">
                  <a className="link color-yellow cursor-pointer" onClick={() => handleNav('experience')}>View Experience</a>
                  <a className="link color-green cursor-pointer" onClick={() => handleNav('projects')}>Side Project</a>
                  <a className="link color-red cursor-pointer" onClick={() => handleNav('about')}>About Me</a>
                </div>
              </div>
            </div>

            {/* Right Side: Card */}
            <div className="flex w-full lg:w-1/2 justify-center lg:justify-end items-center lg:h-full z-20 lg:pr-8 order-1 lg:order-2 mb-4 lg:mb-0">
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                <div className="relative bg-[#1a1c20]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl flex flex-col items-center text-center gap-4 lg:gap-6">
                  <div className="w-full flex justify-start">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]"></div>
                    </div>
                  </div>
                  <div className="relative shrink-0 mt-2">
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                    <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-xl mx-auto">
                        <img src={PROFILE.avatarUrl} alt={PROFILE.name} className="w-full h-full object-cover object-top" />
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 lg:mb-4 font-[Roboto Slab] tracking-wide">{PROFILE.name}</h2>
                    <p className="text-slate-300 text-xs lg:text-sm leading-relaxed font-sans px-2">{PROFILE.summary}</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
          
          <footer className="fixed-footer">
            <div className="links">
              <a className="link small alt" href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="link small alt" href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="link small alt" href="https://medium.com/@adams-chang" target="_blank" rel="noopener noreferrer">Medium</a>
            </div>
          </footer>
        </div>

        {/* === EXPERIENCE VIEW === */}
        <div className={`template color-yellow ${view === 'experience' ? 'current' : ''}`} data-template="experience">
          <main>
            <h1><span>Professional <mark>Experience</mark></span></h1>
            <ul className="experience-list">
              {EXPERIENCE.map((exp) => (
                <li key={exp.id}>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company} | {exp.period}</h4>
                  <ul style={{listStyle: 'disc', paddingLeft: '20px', color: '#aaa', fontSize: '13px', lineHeight: '1.6', marginBottom: '10px'}}>
                    {exp.description.map((desc, idx) => (
                      <li key={idx} style={{marginBottom: '5px'}}>{desc}</li>
                    ))}
                  </ul>
                  <div className="tech-stack">
                    {exp.technologies?.map(t => <span key={t}>{t}</span>)}
                  </div>
                </li>
              ))}
            </ul>
            <div className="links pb-8" style={{marginTop: '60px'}}>
              <a className="link color-red cursor-pointer" onClick={() => handleNav('home')}>Back Home</a>
            </div>
          </main>
        </div>

        {/* === PROJECTS VIEW === */}
        <div className={`template color-blue ${view === 'projects' ? 'current' : ''}`} data-template="projects">
          <main>
            <h1><span>Side <mark>Projects</mark></span></h1>
            <div className="projects-list">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="project-item">
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                  <div className="project-links">
                    {proj.repoUrl && (
                      <a href={proj.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    )}
                    {proj.demoUrl && (
                      <a href={proj.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    )}
                  </div>
                  <div className="tech-stack" style={{marginTop: '15px'}}>
                      {proj.technologies.map(t => (
                        <span key={t} style={{
                          display: 'inline-block',
                          background: 'rgba(255,255,255,0.1)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          marginRight: '5px',
                          marginBottom: '5px',
                          color: '#ddd'
                        }}>{t}</span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="links pb-8" style={{marginTop: '60px'}}>
              <a className="link color-red cursor-pointer" onClick={() => handleNav('home')}>Back Home</a>
            </div>
          </main>
        </div>

        {/* === ABOUT VIEW === */}
        <div className={`template color-green ${view === 'about' ? 'current' : ''}`} data-template="about">
          <main>
            <h1><span>About <mark>Me</mark></span></h1>
            
            {/* Education */}
            <div style={{marginBottom: '40px'}}>
              <h2 style={{color: 'white', fontSize: '24px', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px'}}>Education</h2>
              {EDUCATION.map((edu, i) => (
                <div key={i} style={{marginBottom: '20px', color: '#aaa'}}>
                  <strong style={{color: '#fff', fontSize: '18px', display: 'block'}}>{edu.degree}</strong>
                  <span style={{fontSize: '14px', color: '#419d78'}}>{edu.school}</span>
                  <div style={{fontSize: '12px', marginTop: '5px'}}>{edu.period}</div>
                </div>
              ))}
            </div>

            {/* Military Service */}
            <div style={{marginBottom: '40px'}}>
              <h2 style={{color: 'white', fontSize: '24px', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px'}}>Military Service</h2>
              {MILITARY_SERVICE.map((mil) => (
                <div key={mil.id} style={{marginBottom: '20px'}}>
                   <strong style={{color: '#fff', fontSize: '18px', display: 'block'}}>{mil.role}</strong>
                   <span style={{fontSize: '14px', color: '#419d78'}}>{mil.company} | {mil.period}</span>
                   <ul style={{listStyle: 'disc', paddingLeft: '20px', color: '#aaa', fontSize: '13px', lineHeight: '1.6', marginTop: '10px'}}>
                    {mil.description.map((desc, idx) => (
                      <li key={idx} style={{marginBottom: '5px'}}>{desc}</li>
                    ))}
                   </ul>
                </div>
              ))}
            </div>

            {/* Club Experience */}
            <div style={{marginBottom: '40px'}}>
              <h2 style={{color: 'white', fontSize: '24px', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px'}}>Club Experience</h2>
              {CLUBS.map((club) => (
                <div key={club.id} style={{marginBottom: '20px'}}>
                   <strong style={{color: '#fff', fontSize: '18px', display: 'block'}}>{club.role}</strong>
                   <span style={{fontSize: '14px', color: '#419d78'}}>{club.company} | {club.period}</span>
                   <ul style={{listStyle: 'disc', paddingLeft: '20px', color: '#aaa', fontSize: '13px', lineHeight: '1.6', marginTop: '10px'}}>
                    {club.description.map((desc, idx) => (
                      <li key={idx} style={{marginBottom: '5px'}}>{desc}</li>
                    ))}
                   </ul>
                </div>
              ))}
            </div>
            
            {/* Skills */}
            <div style={{marginBottom: '40px'}}>
              <h2 style={{color: 'white', fontSize: '24px', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px'}}>Key Skills</h2>
              <div className="skills-grid">
                {SKILLS.map((cat, i) => (
                  <div key={i} className="skill-card">
                    <h4>{cat.category}</h4>
                    <div>
                      {cat.items.map(skill => <span key={skill}>{skill}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="links pb-8" style={{marginTop: '60px'}}>
              <a className="link color-red cursor-pointer" onClick={() => handleNav('home')}>Back Home</a>
            </div>
          </main>
        </div>

        {/* 3. Floating Elements */}
        <Identity state={identityState} />
        <AIChat />

      </div>
    </div>
  );
}
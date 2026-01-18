import { useEffect, useRef, useState } from 'react';
import { PROFILE, EXPERIENCE, EDUCATION, SKILLS, PROJECTS, MILITARY_SERVICE, CLUBS } from './constants';
import { AIChat } from './components/AIChat';
import { GripVertical } from 'lucide-react';

// --- Stars Animation Component ---
const StarsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

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
        // Prevent negative radius error
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

        // Interactivity
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
      for (let i = 0; i < 800; i++) { // Reduced count slightly for performance
        const radius = Math.random() * 1.5;
        const x = Math.random() * (width - radius * 2) + radius;
        const y = Math.random() * (height - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * 0.5; // Slower speed
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
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
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

  return <canvas ref={canvasRef} id="stars" />;
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

// --- Main App Component ---
export default function App() {
  const [view, setView] = useState<'home' | 'experience' | 'projects' | 'about'>('home');
  const [identityState, setIdentityState] = useState<'working' | 'robot' | 'flat'>('working');

  // Cycle identity state: Working -> Flat -> Robot(Fluctuated) -> Flat -> Repeat
  useEffect(() => {
    let isMounted = true;
    
    const runAnimationCycle = async () => {
      while (isMounted) {
        // 1. Working (default moving)
        setIdentityState('working');
        await new Promise(r => setTimeout(r, 3000));
        if (!isMounted) break;

        // 2. Flatten
        setIdentityState('flat');
        await new Promise(r => setTimeout(r, 3000));
        if (!isMounted) break;

        // 3. Fluctuated (Robot/Wave animation)
        setIdentityState('robot'); 
        await new Promise(r => setTimeout(r, 3000));
        if (!isMounted) break;

        // 4. Flatten again before going back to working
        setIdentityState('flat');
        await new Promise(r => setTimeout(r, 3000));
        if (!isMounted) break;
      }
    };

    runAnimationCycle();

    return () => { isMounted = false; };
  }, []);

  const handleNav = (newView: 'home' | 'experience' | 'projects' | 'about') => {
    setView(newView);
  };

  return (
    <div className="wrapper">
      <StarsCanvas />
      {/* 新增的個人照片背景 - CSS handles the image path directly */}
      <div 
        id="my-profile-bg"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '60vh', 
          height: '100vh',
          zIndex: 0, 
          
          // 👇 這裡直接寫字串路徑，React 會自動去 public 資料夾找
          backgroundImage: `
            linear-gradient(
              to right, 
              #171a19 5%, 
              rgba(23, 26, 25, 0.9) 30%, 
              rgba(23, 26, 25, 0.4) 60%, 
              rgba(23, 26, 25, 0) 100%
            ), 
            url('/images/profile.jpg') 
          `,
          // ⚠️ 注意：如果您放在 public/images 裡面，上面就要改成 url('/images/profile.jpg')
          
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="container">
        
        {/* HOME VIEW */}
        <div className={`template color-yellow ${view === 'home' ? 'current' : ''}`} data-template="home">
          
          <main className="flex flex-col justify-center">
            
            <div className="home-line-item group">
               <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500">
                  <GripVertical size={20} />
               </div>
               <span className="text-7xl md:text-7xl font-bold leading-tight"><mark>Data Engineer</mark></span>
            </div>

            <div className="home-line-item group">
               <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500">
                  <GripVertical size={20} />
               </div>
              <span className="text-3xl md:text-4xl text-slate-300 whitespace-nowrap font-normal">Began From Animal and Brain Science</span>
            </div>

            <div className="home-line-item group">
               <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500">
                  <GripVertical size={20} />
               </div>
              <span className="text-slate-400 font-mono text-lg">{PROFILE.email.replace('mailto:', '')}</span>
            </div>

            <div className="home-line-item group">
               <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500">
                  <GripVertical size={20} />
               </div>
              <span className="text-slate-400 font-mono text-lg">{PROFILE.phone}</span>
            </div>
            
            <div className="home-line-item group">
               <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500">
                  <GripVertical size={20} />
               </div>
              <div className="links">
                <a className="link color-yellow" onClick={() => handleNav('experience')} title="View Experience">
                  View Experience
                </a>
                <a className="link color-green" onClick={() => handleNav('projects')} title="Side Project">
                  Side Project
                </a>
                <a className="link color-red" onClick={() => handleNav('about')} title="About Me">
                  About Me
                </a>
              </div>
            </div>

          </main>
          
          <footer>
            <div className="links">
              <a className="link small alt" href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="link small alt" href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="link small alt" href="https://medium.com/@adams-chang" target="_blank" rel="noopener noreferrer">Medium</a>
            </div>
          </footer>
        </div>

        {/* EXPERIENCE VIEW */}
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

            <div className="links" style={{marginTop: '30px'}}>
              <a className="link color-red" onClick={() => handleNav('home')}>Back Home</a>
            </div>
          </main>
        </div>

        {/* PROJECTS VIEW */}
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

            <div className="links" style={{marginTop: '30px'}}>
              <a className="link color-red" onClick={() => handleNav('home')}>Back Home</a>
            </div>
          </main>
        </div>

        {/* ABOUT ME VIEW */}
        <div className={`template color-green ${view === 'about' ? 'current' : ''}`} data-template="about">
          <main>
            <h1><span>About <mark>Me</mark></span></h1>
            
            {/* Education Section */}
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
            
            {/* Technical Skills Summary */}
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

            <div className="links" style={{marginTop: '30px'}}>
              <a className="link color-red" onClick={() => handleNav('home')}>Back Home</a>
            </div>
          </main>
        </div>

        {/* Identity Animation Top Left */}
        <Identity state={identityState} />
        
        {/* Floating AI Chat */}
        <AIChat />

      </div>
    </div>
  );
}
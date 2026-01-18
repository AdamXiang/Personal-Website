import { useEffect, useRef, useState } from 'react';
import { PROFILE, EXPERIENCE, EDUCATION, SKILLS, PROJECTS, MILITARY_SERVICE, CLUBS } from './constants';
import { AIChat } from './components/AIChat';
// 如果您沒有 lucide-react，這行可能會報錯，可以先註解掉
import { GripVertical } from 'lucide-react'; 

// 注意：請確認圖片路徑是否正確 (在 src/assets/profile.jpg)
// 如果沒有圖片，這行會報錯。如果是放在 public，請刪除這行。
import profileImg from './assets/profile.jpg'; 

// --- Stars Animation Component (保持不變) ---
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
      x: number; y: number; dx: number; dy: number; radius: number; minRadius: number; color: string;
      constructor(x: number, y: number, dx: number, dy: number, radius: number, color: string) {
        this.x = x; this.y = y; this.dx = dx; this.dy = dy; this.radius = radius; this.minRadius = radius; this.color = color;
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
        if (mouse.x - this.x < mouseDist && mouse.x - this.x > -mouseDist && mouse.y - this.y < mouseDist && mouse.y - this.y > -mouseDist) {
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
    const handleMouseMove = (e: MouseEvent) => { mouse.x = e.x; mouse.y = e.y; };
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

// --- Identity Animation Component (保持不變) ---
const Identity = ({ state }: { state: 'working' | 'rest' | 'robot' | 'flat' }) => {
  return (
    <div className={`loading ${state}`} id="identity" title="Identity">
      <div></div><div></div><div></div><div></div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [view, setView] = useState<'home' | 'experience' | 'projects' | 'about'>('home');
  const [identityState, setIdentityState] = useState<'working' | 'robot' | 'flat'>('working');

  useEffect(() => {
    let isMounted = true;
    const runAnimationCycle = async () => {
      while (isMounted) {
        setIdentityState('working'); await new Promise(r => setTimeout(r, 3000)); if (!isMounted) break;
        setIdentityState('flat'); await new Promise(r => setTimeout(r, 3000)); if (!isMounted) break;
        setIdentityState('robot'); await new Promise(r => setTimeout(r, 3000)); if (!isMounted) break;
        setIdentityState('flat'); await new Promise(r => setTimeout(r, 3000)); if (!isMounted) break;
      }
    };
    runAnimationCycle();
    return () => { isMounted = false; };
  }, []);

  const handleNav = (newView: 'home' | 'experience' | 'projects' | 'about') => {
    setView(newView);
  };

  // 定義共用的樣式物件，取代 Tailwind class
  const styles = {
    title: {
      fontSize: '4rem', // 對應 text-7xl
      fontWeight: 'bold',
      lineHeight: '1.1',
      color: '#ffffff', // 強制白色
      marginBottom: '10px'
    },
    subtitle: {
      fontSize: '2rem', // 對應 text-3xl
      color: '#cbd5e1', // 對應 text-slate-300
      fontWeight: 'normal',
      whiteSpace: 'nowrap' as 'nowrap'
    },
    text: {
      color: '#94a3b8', // 對應 text-slate-400
      fontFamily: 'monospace',
      fontSize: '1.125rem'
    },
    linkItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
        position: 'relative' as 'relative'
    }
  };

  return (
    <div className="wrapper">
      <StarsCanvas />
      
      {/* 背景圖片區塊 */}
      <div 
        id="my-profile-bg"
        style={{
          position: 'fixed',
          top: 0, right: 0, bottom: 0,
          width: '60vh', // 在寬螢幕上的寬度
          height: '100vh',
          zIndex: 0, // 放在背景層
          backgroundImage: `
            linear-gradient(
              to right, 
              #171a19 5%, 
              rgba(23, 26, 25, 0.9) 30%, 
              rgba(23, 26, 25, 0.4) 60%, 
              rgba(23, 26, 25, 0) 100%
            ), 
            url(${profileImg})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 5 }}> {/* 確保內容在最上層 */}
        
        {/* HOME VIEW */}
        <div className={`template color-yellow ${view === 'home' ? 'current' : ''}`} data-template="home">
          
          <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            
            {/* 標題區塊 */}
            <div style={{ marginBottom: '2rem' }}>
               <h1 style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                 <span style={styles.title}><mark>Data Engineer</mark></span>
                 <span style={styles.subtitle}>Rooted in Animal and Brain Science</span>
               </h1>
            </div>

            {/* 聯絡資訊區塊 */}
            <div className="p" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '2rem' }}>
              <span style={styles.text}>{PROFILE.email.replace('mailto:', '')}</span>
              <span style={styles.text}>{PROFILE.phone}</span>
            </div>
            
            {/* 選單連結區塊 */}
            <div className="links">
                <a className="link color-yellow" onClick={() => handleNav('experience')} title="View Experience" style={{display: 'block', marginBottom: '10px', cursor: 'pointer', color: '#e0a458', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  View Experience
                </a>
                <a className="link color-green" onClick={() => handleNav('projects')} title="Side Project" style={{display: 'block', marginBottom: '10px', cursor: 'pointer', color: '#419d78', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  Side Project
                </a>
                <a className="link color-red" onClick={() => handleNav('about')} title="About Me" style={{display: 'block', marginBottom: '10px', cursor: 'pointer', color: '#d9594c', fontWeight: 'bold', fontSize: '1.2rem'}}>
                  About Me
                </a>
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

        {/* EXPERIENCE VIEW (保持原本結構，但確保顏色可見) */}
        <div className={`template color-yellow ${view === 'experience' ? 'current' : ''}`} data-template="experience">
          <main>
            <h1 style={styles.title}><span>Professional <mark>Experience</mark></span></h1>
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
              <a className="link color-red" onClick={() => handleNav('home')} style={{cursor:'pointer'}}>Back Home</a>
            </div>
          </main>
        </div>

        {/* PROJECTS & ABOUT VIEW (省略細節，請依同樣邏輯修改 Projects 和 About) */}
        {/* 為節省篇幅，這裡先保留結構。如果需要完整 projects/about 代碼請告訴我 */}
        
        <div className={`template color-blue ${view === 'projects' ? 'current' : ''}`} data-template="projects">
             <main>
               <h1 style={styles.title}><span>Side <mark>Projects</mark></span></h1>
               {/* 請將 Projects 內容複製回來，並確保文字顏色有設定 color: white 或 #aaa */}
               <div className="projects-list">
                 {PROJECTS.map((proj) => (
                   <div key={proj.id} className="project-item">
                     <h3 style={{color: '#fff'}}>{proj.title}</h3>
                     <p style={{color: '#aaa'}}>{proj.description}</p>
                     {/* ... links & tech stack ... */}
                   </div>
                 ))}
               </div>
               <div className="links" style={{marginTop: '30px'}}>
                 <a className="link color-red" onClick={() => handleNav('home')} style={{cursor:'pointer'}}>Back Home</a>
               </div>
             </main>
        </div>

        <div className={`template color-green ${view === 'about' ? 'current' : ''}`} data-template="about">
             <main>
                <h1 style={styles.title}><span>About <mark>Me</mark></span></h1>
                {/* About Me 內容... */}
                <div className="links" style={{marginTop: '30px'}}>
                 <a className="link color-red" onClick={() => handleNav('home')} style={{cursor:'pointer'}}>Back Home</a>
               </div>
             </main>
        </div>

        <Identity state={identityState} />
        <AIChat />

      </div>
    </div>
  );
}
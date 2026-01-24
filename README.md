# 🚀 Personal Portfolio Website

<div align="center">
  
  ![Portfolio Banner](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)
  
  **A modern, interactive portfolio showcasing my journey as a Data Engineer**
  
  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.1.6-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  
  [View Live Demo](#) • [Report Bug](#) • [Request Feature](#)
  
</div>

---

## 📖 Overview

This is my personal portfolio website built with modern web technologies, featuring an **AI-powered chatbot assistant**, **interactive particle animations**, and a clean, professional design. The site showcases my professional experience, technical skills, and side projects in data engineering.

### ✨ Key Highlights

- 🎨 **Interactive Canvas Background** - Dynamic particle system that responds to mouse movement
- 🤖 **AI Chat Assistant** - Powered by Google Gemini AI to answer questions about my background
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Fast & Modern** - Built with Vite and React for optimal performance
- 🎯 **Professional Timeline** - Clean presentation of experience and projects
- 🎭 **Animated UI Elements** - Smooth transitions and engaging micro-interactions

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vite** - Next-generation build tool

### Features & Integrations
- **Google Gemini AI** - AI chatbot for interactive Q&A
- **Lucide React** - Beautiful icon library
- **Custom Canvas Animations** - HTML5 Canvas for particle effects

### Styling
- Custom CSS animations
- Responsive design with mobile-first approach
- Dark theme with gradient accents

---

## 🎯 Features

### 🏠 Home View
- Eye-catching hero section with profile card
- Animated identity indicator with multiple states (working, robot, flat)
- Quick navigation to different sections
- Social media links (GitHub, LinkedIn, Medium)

### 💼 Experience Section
- Timeline-based display of professional experience
- Detailed role descriptions and achievements
- Technology tags for each position
- Companies: DATARGET, Logitech, uppeta, CXG, Cathay Financial Holdings

### 🚀 Projects Showcase
- Grid layout of side projects
- Direct links to GitHub repositories and live demos
- Tech stack visualization
- Projects include: FastAPI services, dbt pipelines, Databricks implementations

### 👨‍💻 About Me
- Educational background (NYCU Brain Science, NTU Animal Sciences)
- Military service experience (Taiwan Technical Mission in Eswatini)
- Club leadership and community involvement
- Comprehensive skills matrix

### 💬 AI Chat Assistant
- Real-time conversational interface
- Context-aware responses about my background
- Powered by Google Gemini AI
- Professional and concise answers for recruiters

---

## 📁 Project Structure

```
adamxiang-personal-website/
├── components/
│   ├── AIChat.tsx          # AI chatbot component
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Projects grid
│   ├── Skills.tsx          # Skills display
│   └── Sidebar.tsx         # Navigation sidebar
├── App.tsx                 # Main application component
├── constants.tsx           # Profile data and content
├── types.ts                # TypeScript interfaces
├── styles.css              # Custom styles and animations
├── index.html              # HTML entry point
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Google Gemini API Key** (for AI chat feature)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AdamXiang/personal-website.git
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   API_KEY=your_google_gemini_api_key_here
   ```
   
   Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

---

## 🎨 Customization Guide

### Update Personal Information

Edit `constants.tsx` to update your:
- Profile information (name, email, summary)
- Work experience
- Projects
- Skills
- Education

```typescript
export const PROFILE: Profile = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... more fields
};
```

### Modify Styling

- **Colors**: Edit CSS variables in `styles.css`
- **Animations**: Customize animation timings and effects in `styles.css`
- **Layout**: Adjust Tailwind classes in component files

### Configure AI Assistant

Update the system instruction in `components/AIChat.tsx`:

```typescript
const SYSTEM_INSTRUCTION = `You are a helpful AI assistant for...`;
```

---

## 📸 Screenshots

### Home View
![Home View - Desktop](https://via.placeholder.com/800x500/171a19/e0a458?text=Home+View)

*Interactive hero section with animated particles and profile card*

### Experience Timeline
![Experience Section](https://via.placeholder.com/800x500/171a19/419d78?text=Experience+Timeline)

*Professional experience displayed in a clean timeline format*

### Projects Showcase
![Projects Grid](https://via.placeholder.com/800x500/171a19/53a2be?text=Projects+Showcase)

*Side projects with technology tags and repository links*

### AI Chat Assistant
![AI Chat](https://via.placeholder.com/400x500/ffffff/000000?text=AI+Chat+Interface)

*Interactive chatbot powered by Google Gemini*

---

## 🎭 Key Components

### Stars Canvas Animation
```typescript
// Particle system with mouse interaction
- 800 particles with random colors
- Mouse proximity triggers particle growth
- Smooth, continuous animation loop
```

### Identity Animation
```typescript
// Three states indicator
- Working: Circular rotation pattern
- Robot: High-amplitude wave effect
- Flat: Horizontal line formation
```

### AI Chat Integration
```typescript
// Google Gemini AI
- Context-aware responses
- Resume data integration
- Professional tone optimization
```

---

## 🔧 Configuration

### Vite Config
- Base path set to `./` for subdirectory deployment
- Environment variable injection
- React plugin with Fast Refresh

### TypeScript
- Strict mode enabled
- Modern ES2020 target
- JSX support via React

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Connect With Me

<div align="center">
  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/ching-hsiang-chang-782281217/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github)](https://github.com/AdamXiang)
[![Medium](https://img.shields.io/badge/Medium-Read-000000?style=for-the-badge&logo=medium)](https://medium.com/@adams-chang)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:lavouver96@gmail.com)

</div>

---

## 💡 Future Enhancements

- [ ] Add blog section for technical articles
- [ ] Implement dark/light theme toggle
- [ ] Add project case studies with detailed breakdowns
- [ ] Integrate analytics to track visitor engagement
- [ ] Add downloadable resume PDF
- [ ] Implement multilingual support (EN/ZH)
- [ ] Add testimonials section
- [ ] Create custom 404 page

---

## 🙏 Acknowledgments

- Particle animation inspired by [yahiarefaiea-official-website-beta](https://github.com/yahiarefaiea/yahiarefaiea-official-website-beta)
- Icons by [Lucide React](https://lucide.dev/)
- AI capabilities powered by [Google Gemini](https://ai.google.dev/)
- Design inspiration from modern portfolio trends

---

<div align="center">
  
  **Built with ❤️ by Adam Chang**
  
  ⭐ Star this repo if you found it helpful!
  
</div>

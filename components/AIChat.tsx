import { useEffect, useRef, useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageCircle, Send, X } from 'lucide-react';
import { ABOUT, EXPERIENCE, LIVE, PROFILE, REPOS, SKILLS } from '../data/content';
import { useLang } from '../lang';

const SYSTEM_INSTRUCTION = `You are a helpful AI assistant on the personal website of ${PROFILE.name} (Adam).
Answer questions from recruiters or visitors about Adam's background, skills and projects.

Context:
Profile: ${JSON.stringify({ name: PROFILE.name, email: PROFILE.email, socials: PROFILE.socials })}
About: ${ABOUT.map((a) => a.en).join(' ')}
Experience: ${JSON.stringify(EXPERIENCE.map((e) => ({ role: e.role.en, company: e.company.en, period: e.period, bullets: e.bullets.map((b) => b.en), tech: e.tech })))}
Live products: ${JSON.stringify(LIVE.map((p) => ({ name: p.name.en, url: p.url, pitch: p.pitch.en })))}
GitHub projects: ${JSON.stringify(REPOS.map((r) => ({ repo: r.repo, about: r.desc.en, tech: r.tech })))}
Skills: ${JSON.stringify(SKILLS.map((s) => ({ group: s.group.en, items: s.items })))}
He also served 237 days of diplomatic alternative service with the Taiwan Technical Mission in Eswatini (Nov 2024 to Jul 2025) on a pig industry project.

Guidelines:
1. Be professional, concise and polite. Reply in the language the visitor writes in.
2. Only answer questions about Adam's professional life and this website.
3. If asked for contact details, give the email or LinkedIn from the profile.
4. Keep answers under 100 words unless asked for detail. Never invent facts that are not in the context.`;

type Message = { role: 'user' | 'model'; text: string };

const COPY = {
  hello: { en: "Hi! I'm Adam's AI assistant. Ask me about his experience, skills or projects.", zh: '嗨！我是 Adam 的 AI 助理，歡迎問我他的經歷、技能或作品。' },
  title: { en: 'Ask about Adam', zh: '問問關於 Adam 的事' },
  placeholder: { en: 'For example: what has he built with Kafka?', zh: '例如：他用 Kafka 做過什麼？' },
  open: { en: 'Open the AI assistant', zh: '開啟 AI 助理' },
  close: { en: 'Close the AI assistant', zh: '關閉 AI 助理' },
  send: { en: 'Send message', zh: '送出訊息' },
  thinking: { en: 'Thinking', zh: '思考中' },
  error: { en: 'The assistant could not be reached. Try again in a moment, or email Adam directly.', zh: '目前無法連上助理。請稍後再試，或直接寫信給 Adam。' },
};

export function AIChat() {
  const { t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, loading]);

  // Without an API key the assistant cannot answer, so the button is not shown at all.
  if (!process.env.API_KEY) return null;

  const send = async () => {
    const userMsg = input.trim();
    if (!userMsg || loading) return;
    setInput('');
    const history = [...messages, { role: 'user' as const, text: userMsg }];
    setMessages(history);
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: history.map((m) => ({ role: m.role, parts: [{ text: m.text }] })),
        config: { systemInstruction: SYSTEM_INSTRUCTION },
      });
      setMessages((prev) => [...prev, { role: 'model', text: response.text || t(COPY.error) }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: 'model', text: t(COPY.error) }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat">
      {isOpen && (
        <div className="chat-window" role="dialog" aria-label={t(COPY.title)}>
          <div className="chat-head">
            <strong>{t(COPY.title)}</strong>
            <button onClick={() => setIsOpen(false)} aria-label={t(COPY.close)}>
              <X size={20} />
            </button>
          </div>
          <div className="chat-log">
            <p className="msg model">{t(COPY.hello)}</p>
            {messages.map((m, i) => (
              <p key={i} className={`msg ${m.role}`}>
                {m.text}
              </p>
            ))}
            {loading && <p className="msg model pending">{t(COPY.thinking)}…</p>}
            <div ref={endRef} />
          </div>
          <form
            className="chat-form"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={t(COPY.placeholder)} aria-label={t(COPY.title)} />
            <button type="submit" disabled={loading || !input.trim()} aria-label={t(COPY.send)}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)} aria-label={t(isOpen ? COPY.close : COPY.open)} aria-expanded={isOpen}>
        {isOpen ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
}

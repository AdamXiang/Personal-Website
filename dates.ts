import type { Job } from './data/content';

// Today's date as YYYY-MM-DD in the visitor's own time zone.
export function todayISO(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export type JobState = 'upcoming' | 'current' | 'past';

export function jobState(job: Job, today = todayISO()): JobState {
  if (today < job.start) return 'upcoming';
  if (job.end && today > job.end) return 'past';
  return 'current';
}

// The day the Lion Travel role starts; before it, the site talks about it as upcoming.
export const LION_START = '2026-12-07';
export const afterLionStart = (today = todayISO()) => today >= LION_START;

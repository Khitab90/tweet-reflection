export const MIN_TOPIC_WORDS = 3;

export const TOPIC_TOO_SHORT_MESSAGE = `Write at least ${MIN_TOPIC_WORDS} words so there's enough to work with.`;

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

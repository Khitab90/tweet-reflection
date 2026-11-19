export const MIN_TOPIC_CHARS = 15;

export const TOPIC_TOO_SHORT_MESSAGE = `Write at least ${MIN_TOPIC_CHARS} characters so there's enough to work with.`;

export function topicLength(text: string): number {
  return text.trim().length;
}

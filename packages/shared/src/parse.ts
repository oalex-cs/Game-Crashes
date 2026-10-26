import type { ServerEvent } from './events';

const EVENT_TYPES: readonly string[] = ['round_start', 'tick', 'crashed', 'balance_update'];

export function parseServerEvent(raw: string): ServerEvent | null {
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return null;
  }

  if (typeof data !== 'object' || data === null) return null;

  const type = (data as { type?: unknown }).type;
  if (typeof type !== 'string' || !EVENT_TYPES.includes(type)) return null;

  return data as ServerEvent;
}
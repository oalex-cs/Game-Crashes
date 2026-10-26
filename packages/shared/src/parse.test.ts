import { describe, expect, it } from 'vitest';
import { parseServerEvent } from './parse';

describe('parseServerEvent', () => {
  it('parses a valid tick event', () => {
    const event = { type: 'tick', roundId: 'r1', multiplier: 1.5, elapsedMs: 1000, serverTime: 1 };
    expect(parseServerEvent(JSON.stringify(event))).toEqual(event);
  });

  it('returns null for invalid JSON', () => {
    expect(parseServerEvent('{not json')).toBeNull();
  });

  it('returns null for JSON that is not an object', () => {
    expect(parseServerEvent('42')).toBeNull();
    expect(parseServerEvent('null')).toBeNull();
  });

  it('returns null for an unknown event type', () => {
    expect(parseServerEvent(JSON.stringify({ type: 'hack' }))).toBeNull();
  });
});
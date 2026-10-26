import type { PlayerBet, RoundPhase } from './types';

export type ApiErrorCode =
  | 'BETTING_CLOSED'
  | 'INVALID_AMOUNT'
  | 'INSUFFICIENT_BALANCE'
  | 'ALREADY_BET'
  | 'NO_ACTIVE_BET'
  | 'ROUND_NOT_RUNNING';

export type ApiError = {
  error: { code: ApiErrorCode; message: string };
};

// POST /bet
export type BetRequest = { amount: number };
export type BetResponse = {
  roundId: string;
  amount: number;
  balance: number;
};

// POST /cashout  (sem corpo: o servidor sabe quem é pelo header)
export type CashoutResponse = {
  roundId: string;
  multiplier: number;
  payout: number;
  balance: number;
};

// GET /state
export type StateResponse = {
  phase: RoundPhase;
  roundId: string | null;
  multiplier: number;
  bettingEndsAt: number | null;
  serverTime: number;
  balance: number;
  bet: PlayerBet | null;
  lastCrashPoint: number | null;
};
export type RoundPhase = 'betting' | 'running' | 'crashed';

export type PlayerBet = {
  amount: number;
  cashedOutAt: number | null; // null = ainda não sacou
};
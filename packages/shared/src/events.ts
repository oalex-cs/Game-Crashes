export type RoundStartEvent = {
  type: 'round_start';
  roundId: string;
  bettingEndsAt: number; // timestamp (ms) do servidor
  serverTime: number;
};

export type TickEvent = {
  type: 'tick';
  roundId: string;
  multiplier: number;
  elapsedMs: number; // tempo desde o início da rodada
  serverTime: number;
};

export type CrashedEvent = {
  type: 'crashed';
  roundId: string;
  crashPoint: number;
};

export type BalanceUpdateEvent = {
  type: 'balance_update';
  balance: number;
};

export type ServerEvent = RoundStartEvent | TickEvent | CrashedEvent | BalanceUpdateEvent;
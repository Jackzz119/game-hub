import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

type GamePhase = "ready" | "playing" | "ended";

export interface GameState {
  blocksCount: number;
  blocksSeed: number;
  startTime: number;
  endTime: number;
  phase: GamePhase;
  start: () => void;
  restart: () => void;
  end: () => void;
}

export default create(
  subscribeWithSelector(
    (set: (fn: (state: GameState) => Partial<GameState>) => void) => {
      return {
        blocksCount: 10,
        blocksSeed: 0,

        /**
         * Time
         */
        startTime: 0,
        endTime: 0,

        /**
         * Phases
         */
        phase: "ready",

        start: () => {
          set((state) => {
            if (state.phase === "ready")
              return { phase: "playing", startTime: Date.now() };

            return {};
          });
        },

        restart: () => {
          set((state) => {
            if (state.phase === "playing" || state.phase === "ended")
              return { phase: "ready", blocksSeed: Math.random() };

            return {};
          });
        },

        end: () => {
          set((state) => {
            if (state.phase === "playing")
              return { phase: "ended", endTime: Date.now() };

            return {};
          });
        },
      };
    }
  )
);

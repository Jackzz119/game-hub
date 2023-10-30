import { useKeyboardControls } from "@react-three/drei";
import useGame from "./stores/useGame.jsx";
import { useEffect, useRef, useState } from "react";
import { addEffect } from "@react-three/fiber";
import { LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { kv } from "@vercel/kv";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function Interface() {
  const time = useRef<HTMLDivElement | null>(null);

  const restart = useGame((state) => state.restart);
  const phase = useGame((state) => state.phase);

  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);

  const [highRecord, setHighRecord] = useState(null);
  const [percentage, setPercentage] = useState(null);

  async function updateScore(timeRecord: Number) {
    // get the highest score, which is the shortest time record
    // ZRANGE scoreboard 0 0
    console.log(process.env.KV_REST_API_URL);
    console.log(process.env.VERCEL_ENV);
    const highestScore = await kv.zrange("scoreboard", 0, 0, {
      withScores: true,
    });

    // get the stat that what percentage you won
    // ZCOUNT scoreboard 25 +inf
    // ZCARD scoreboard
    const slowerCount = await kv.zcount("scoreboard", 25, "+inf");
    const totalCount = await kv.zcard("scoreboard");
    return { highest: highestScore, percentage: slowerCount / totalCount };
  }

  useEffect(() => {
    const unsubscribeEffect = addEffect(async () => {
      const state = useGame.getState();

      let elapsedTime: number = 0;

      if (state.phase === "playing") elapsedTime = Date.now() - state.startTime;
      else if (state.phase === "ended") {
        elapsedTime = state.endTime - state.startTime;
        const timeRecord = (elapsedTime / 1000).toFixed(2);

        const response = await updateScore(Number(timeRecord));
        setPercentage(response.percentage);
        setHighRecord(response.highest);
      }

      elapsedTime /= 1000;
      elapsedTime = Number(elapsedTime.toFixed(2));

      if (time.current) time.current.textContent = String(elapsedTime);
    });

    return () => {
      unsubscribeEffect();
    };
  }, []);

  return (
    <div className="interface">
      {/* links */}
      <div className="links">
        <LinkBox as="div">
          <LinkOverlay as={Link} to="/h">
            <div className="homepage">Home</div>
          </LinkOverlay>
        </LinkBox>
        <LinkBox as="div" marginTop={2}>
          <LinkOverlay as={Link} to="/">
            <div className="collection">Collection</div>
          </LinkOverlay>
        </LinkBox>
      </div>

      {/* Time */}
      <div ref={time} className="time">
        0.00
      </div>

      {/* Restart */}
      {phase === "ended" && (
        <div>
          <div className="restart" onClick={restart}>
            Restart
          </div>
          <div className="win">
            <Text textAlign="center">The hightest record is {highRecord}</Text>
            <Text textAlign="center">You have won {percentage} %</Text>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="controls">
        <div className="raw">
          <div className={`key ${forward ? "active" : ""}`}></div>
        </div>
        <div className="raw">
          <div className={`key ${leftward ? "active" : ""}`}></div>
          <div className={`key ${backward ? "active" : ""}`}></div>
          <div className={`key ${rightward ? "active" : ""}`}></div>
        </div>
        <div className="raw">
          <div className={`key large ${jump ? "active" : ""}`}></div>
        </div>
      </div>
    </div>
  );
}

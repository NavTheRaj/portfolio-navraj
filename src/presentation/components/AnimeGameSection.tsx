import { useMemo, useState } from "react";
import { Button, Card, Flex, Progress, Typography } from "antd";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";

type GameCard = {
  id: number;
  symbol: string;
  matched: boolean;
};

const symbols = ["⚔️", "🦊", "🔥", "🌙", "🍜", "👺", "🐉", "🗡️"];

function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = next[i];
    next[i] = next[j];
    next[j] = current;
  }
  return next;
}

function createDeck(): GameCard[] {
  const doubled = [...symbols, ...symbols];
  return shuffle(doubled).map((symbol, index) => ({
    id: index,
    symbol,
    matched: false
  }));
}

export function AnimeGameSection() {
  const [cards, setCards] = useState<GameCard[]>(() => createDeck());
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [lock, setLock] = useState<boolean>(false);
  const [moves, setMoves] = useState<number>(0);

  const matchedCount = useMemo(
    () => cards.filter((card) => card.matched).length,
    [cards]
  );
  const completed = matchedCount === cards.length;
  const progress = (matchedCount / cards.length) * 100;

  const resetGame = () => {
    setCards(createDeck());
    setFlippedIds([]);
    setLock(false);
    setMoves(0);
  };

  const onCardClick = (id: number) => {
    if (lock || flippedIds.includes(id)) {
      return;
    }

    const clicked = cards.find((card) => card.id === id);
    if (!clicked || clicked.matched) {
      return;
    }

    const nextFlipped = [...flippedIds, id];
    setFlippedIds(nextFlipped);

    if (nextFlipped.length < 2) {
      return;
    }

    setMoves((prev) => prev + 1);
    setLock(true);

    const [firstId, secondId] = nextFlipped;
    const first = cards.find((card) => card.id === firstId);
    const second = cards.find((card) => card.id === secondId);

    const isMatch = first?.symbol === second?.symbol;

    window.setTimeout(() => {
      if (isMatch) {
        setCards((prev) =>
          prev.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, matched: true }
              : card
          )
        );
      }
      setFlippedIds([]);
      setLock(false);
    }, 520);
  };

  return (
    <section id="game" className="page-section">
      <SectionTitle eyebrow="Play" title="Anime Memory Duel" />
      <Card bordered={false} className="game-shell">
        <Flex justify="space-between" align="center" wrap gap={12} className="game-top">
          <Typography.Text className="card-subtitle">
            Match pairs to complete the duel.
          </Typography.Text>
          <Flex gap={12} align="center">
            <Typography.Text className="card-subtitle">Moves: {moves}</Typography.Text>
            <Button onClick={resetGame}>Restart</Button>
          </Flex>
        </Flex>
        <Progress percent={Number(progress.toFixed(0))} showInfo={false} />
        <div className="game-grid">
          {cards.map((card, index) => {
            const isFlipped = flippedIds.includes(card.id) || card.matched;
            return (
              <motion.button
                key={card.id}
                type="button"
                className={`game-card ${isFlipped ? "game-card-open" : ""}`}
                onClick={() => onCardClick(card.id)}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
              >
                <span>{isFlipped ? card.symbol : "?"}</span>
              </motion.button>
            );
          })}
        </div>
        {completed ? (
          <Typography.Paragraph className="game-win">
            Duel complete. You cleared all matches in {moves} moves.
          </Typography.Paragraph>
        ) : null}
      </Card>
    </section>
  );
}

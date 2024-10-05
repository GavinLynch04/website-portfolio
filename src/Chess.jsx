import { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

const ChessGame = () => {
    const [game, setGame] = useState(new Chess());

    const onDrop = (sourceSquare, targetSquare) => {
        const move = game.move({
            from: sourceSquare,
            to: targetSquare,
            promotion: 'q'
        });

        if (move) {
            setGame(new Chess(game.fen()));
        }

        return;
    };

    return (
        <div>
            <Chessboard
                position={game.fen()}
                onDrop={onDrop}
            />
        </div>
    );
};

export default ChessGame;

function TicTacToe() {
  let gameboard = {
    gameboard: ["", "", "", "", "", "", "", "", ""],
    x: "✖",
    o: "⌾",
  };

  let players = {
    playerOne: {
      symbol: gameboard.x,
      score: null,
      name: null,
    },
    playerTwo: {
      symbol: gameboard.o,
      score: null,
      name: null,
    },
  };

  let gameLogic = {
    currentPlayer: null,
    changePlayer: () => {
      currentPlayer = nextPlayer;
      nextPlayer = currentPlayer;
    },
    placeSymbol: (position) => {
      if (gameboard.gameboard[position] == "") {
        gameboard.gameboard[position] = gameLogic.currentPlayer.symbol;
        console.log(gameboard.gameboard);
      }
    },
    gameLoop: () => {
      for (i = 0; i < 9; i++) {
        if (
          gameboard.gameboard.filter((gameCell) => {
            gameCell == "";
          })
        ) {
          gameLogic.placeSymbol(
            prompt("Where would you like to place your symbol?")
          );
          gameLogic.currentPlayer == players.playerOne
            ? (gameLogic.currentPlayer = players.playerTwo)
            : (gameLogic.currentPlayer = players.playerOne);
        }
      }
    },

    init: () => {
      gameLogic.currentPlayer = players.playerOne;
      gameLogic.nextPlayer = players.playerTwo;
      gameLogic.gameLoop();
    },
  };

  return {
    init: gameLogic.init,
  };
}
TicTacToe().init();

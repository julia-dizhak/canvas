'use strict';

canvasExamplesApp.controller('chessboardController', function($scope) {

    class Board {
      constructor(config) {
        this.options = {
          selector: document.querySelector("chess-board"),
          width: 400,
          size: 8,
          light: "#fff",
          dark: "#1f1f21"
        };

        if (config) {
          Object.assign(this.options, this.options, config);
          this.draw();
        }
      }

      draw() {
        let element = this.options.selector,
            ctx = element.getContext("2d"),
            squareWidth = this.options.width / this.options.size,
            totalSquares = Math.pow(this.options.size, 2),
            i, x, y = -1;

        element.width = this.options.width;
        element.height = this.options.width;

        for (i = 0; i < totalSquares; i++ ) {
          x++;
          if ( i % this.options.size === 0) {
            y++;
            x = 0;
          }

           ctx.beginPath();
           ctx.rect(x * squareWidth, y * squareWidth, squareWidth, squareWidth);
           ctx.fillStyle = (x + y) % 2 ? this.options.dark : this.options.light;
           ctx.fill();
        }
      }
    }

    let chessBoard = new Board({
      selector: document.querySelector("#chess-board")
    });
});

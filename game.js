// Definir o tamanho do jogo
const canvasWidth = 400;
const canvasHeight = 400;

// Criar o canvas
const canvas = document.getElementById("game-canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Definir o contexto do canvas
const ctx = canvas.getContext("2d");

// Definir as propriedades da cobra
const snakeSize = 10;
let snakeLength = 4;
let snake = [];
let snakeX = canvasWidth / 2;
let snakeY = canvasHeight / 2;

// Desenhar a cobra
function drawSnake() {
  // Adicionar a nova posição da cabeça da cobra
  snake.unshift({ x: snakeX, y: snakeY });

  // Reduzir o comprimento da cobra se for maior que o comprimento máximo
  if (snake.length > snakeLength) {
    snake.pop();
  }

  // Desenhar cada segmento da cobra
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = "#333";
    ctx.fillRect(snake[i].x, snake[i].y, snakeSize, snakeSize);
  }
}

// Atualizar o estado da cobra
function updateSnake() {
  // Movimentar a cobra para a direita
  snakeX += snakeSize;

  // Verificar se a cobra colidiu com a parede
  if (snakeX >= canvasWidth) {
    snakeX = 0;
  }

  // Desenhar a cobra
  drawSnake();
}

// Iniciar o jogo
function startGame() {
  setInterval(updateSnake, 1000 / 10);
}

// Iniciar o jogo quando a página carregar
window.onload = startGame;
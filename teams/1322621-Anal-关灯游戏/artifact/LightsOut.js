const game_state = {
    map00: null,
    map01: null,
    map02: null,
    map10: null,
    map11: null,
    map12: null,
    map20: null,
    map21: null,
    map22: null,
    cols: null,
    rows: null,
    toggle: null,
    is_win: false
};

const importObject = {
    lib: {
        random: () => {
            return Math.random();
        },

    },
    spectest: {
        print_char: (x) => console.log(String.fromCharCode(x)),
        print_string: (ptr, len) => {
            // Create a string from the WASM memory
            const memory = importObject.exports.memory;
            if (!memory) {
                console.error("WASM memory not available");
                return;
            }

            const buffer = new Uint8Array(memory.buffer, ptr, len);
            const str = new TextDecoder().decode(buffer);
            console.log(str);
        },
    },
}

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let CELL_SIZE = 100;
let PADDING = 0; // Will be calculated after WASM loads

// Resize canvas to fit window
function resizeCanvas() {
    const container = canvas.parentElement;
    const maxWidth = Math.min(window.innerWidth * 0.9, 600);
    const maxHeight = Math.min(window.innerHeight * 0.6, 600);
    const size = Math.min(maxWidth, maxHeight);

    canvas.width = size;
    canvas.height = size;

    // Update cell size based on canvas size
    if (game_state.cols && game_state.rows) {
        CELL_SIZE = Math.floor((size - 20) / Math.max(game_state.cols(), game_state.rows()));
        PADDING = (size - CELL_SIZE * Math.max(game_state.cols(), game_state.rows())) / 2;
    }
}

// Initial resize
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// 绘制
function draw() {
    // Don't draw until WASM is loaded
    if (game_state.cols() === null || game_state.rows() === null) return;

    // Recalculate cell size and padding based on current canvas size
    CELL_SIZE = Math.floor((canvas.width - 20) / Math.max(game_state.cols(), game_state.rows()));
    PADDING = (canvas.width - CELL_SIZE * Math.max(game_state.cols(), game_state.rows())) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < game_state.rows(); i++) {
        for (let j = 0; j < game_state.cols(); j++) {
            const x = PADDING + j * CELL_SIZE;
            const y = PADDING + i * CELL_SIZE;
            let map = game_state[`map${i}${j}`]();
            ctx.fillStyle = map ? '#ffcc00' : '#333';
            ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, CELL_SIZE, CELL_SIZE);
        }
    }

    if (game_state.is_win()) {
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = '48px sans-serif';
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.fillText('你赢了！', canvas.width / 2, canvas.height / 2);
    }
}

// 点击处理
canvas.addEventListener('click', (e) => {
    // Don't handle clicks until WASM is loaded
    if (game_state.cols === null || game_state.rows === null) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const col = Math.floor((x - PADDING) / CELL_SIZE);
    const row = Math.floor((y - PADDING) / CELL_SIZE);

    if (row >= 0 && row < game_state.rows() && col >= 0 && col < game_state.cols()) {
        game_state.toggle(row, col);
        draw();
    }
});

let wasm_path = "LightsOut.wasm";
WebAssembly.instantiateStreaming(
    fetch(wasm_path),
    importObject
).then((obj) => {
    const exports = obj.instance.exports;
    // Make exports available to import functions
    importObject.exports = exports;
    game_state.map00 = exports["map00"];
    game_state.map01 = exports["map01"];
    game_state.map02 = exports["map02"];
    game_state.map10 = exports["map10"];
    game_state.map11 = exports["map11"];
    game_state.map12 = exports["map12"];
    game_state.map20 = exports["map20"];
    game_state.map21 = exports["map21"];
    game_state.map22 = exports["map22"];
    game_state.cols = exports["cols"]; // Fixed variable name
    game_state.rows = exports["rows"]; // Fixed assignment
    game_state.toggle = exports["toggle"];
    game_state.is_win = exports["is_win"];

    // Resize canvas based on actual game dimensions
    resizeCanvas();
    draw();

}).catch(err => {
    console.error("WASM 加载失败:", err);
});

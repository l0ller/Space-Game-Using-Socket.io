# Space Shooter Multiplayer Game

A real-time multiplayer space shooter game built with Phaser 3, Socket.IO and Node.js. Features include room-based multiplayer, different game modes, and power-ups.

## Features

- 🚀 Real-time multiplayer space combat
- 🏆 Competitive gameplay with points system
- 🎮 Multiple game modes including Classic and Black Hole
- 🔋 Power-ups (Speed boost, Multi-shot, Coin attraction)
- 🏠 Room-based multiplayer system
- 🎯 Physics-based movement and combat
- 🌌 Dynamic space environment

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/l0ller/Space-Game-Using-Socket.io.git
cd Space-Game-Using-Socket.io
```

2. Install dependencies:
```bash
npm install
```

## Running the Game

1. Build the client-side code:
```bash
npm run build
```

2. Start the server:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:5000`

## Game Controls

- **Arrow Keys**: Control spacecraft movement
- **Spacebar**: Fire weapons
- **C**: Create new room (in room selection)
- **Enter**: Confirm selections
- **ESC**: Return to previous menu

## Gameplay Mechanics

### Basic Gameplay
- Collect coins to earn points
- Avoid enemy fire and collisions
- First player to reach 100 points wins

### Power-ups
- **Speed Boost** (Green): Increases ship speed
- **Multi-shot** (Orange): Fire multiple bullets
- **Attract** (Cyan): Attracts nearby coins

### Game Modes
- **Classic**: Traditional space combat
- **Black Hole**: Adds gravitational effects and challenges

## Technical Details

### Client Architecture

```
client/
├── assets/         # Game assets (images, sounds)
├── scenes/         # Phaser game scenes
├── constants.js    # Game constants
├── index.html      # Main HTML file
└── main.js         # Game entry point
```

### Server Architecture

```
server/
├── constants.js    # Server constants
└── index.js        # Socket.IO and Express server
```

### Network Protocol

The game uses a binary keystroke system for efficient network communication:
- `000000` format represents: Up,Down,Left,Right,Fire,Collision
- Updates are sent only when keystroke state changes
- Client-side prediction reduces perceived lag

## Development Notes

### Local Development
1. Set server endpoint in `client/scenes/PlayGame.js`:
```javascript
this.ENDPOINT = "localhost:5000";
```

2. Update server configuration in `server/index.js` if needed

### Building for Production
1. Update endpoints for production environment
2. Run production build:
```bash
npm run build:prod
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

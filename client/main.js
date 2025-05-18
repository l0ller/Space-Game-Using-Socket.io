import Phaser from 'phaser';
import PlayGame from "./scenes/PlayGame";
import Welcome from "./scenes/Welcome";
import Winner from "./scenes/Winner";
import RoomSelection from "./scenes/RoomSelection";
import LevelSelect from "./scenes/LevelSelect";
import Constants from "./constants";

// Custom starfield shader
const starfieldShader = {
  key: 'starfield',
  fragment: `
    precision mediump float;
    uniform float time;
    uniform vec2 resolution;

    void main() {
      vec2 p = (gl_FragCoord.xy / resolution.xy) - 0.5;
      float stars = 0.0;
      for(float i = 0.0; i < 5.0; i++) {
        vec2 position = p * (i * 0.5);
        position.y += time * 0.05 * (i + 0.5) * 0.1;
        position = fract(position);
        float intensity = 0.05 / length(position - 0.5);
        stars += intensity * smoothstep(0.9, 1.0, intensity);
      }
      gl_FragColor = vec4(vec3(stars), 1.0);
    }
  `
};

// Custom light flare shader
const lightFlareShader = {
  key: 'flare',
  fragment: `
    precision mediump float;
    uniform float time;
    uniform vec2 resolution;
    
    void main() {
      vec2 uv = gl_FragCoord.xy / resolution.xy;
      vec2 center = vec2(0.5, 0.5);
      float dist = distance(uv, center) * 2.0;
      
      float brightness = 0.3 - dist;
      vec3 color = vec3(0.5, 0.5, 1.0) * brightness;
      
      // Add some lens flare elements
      float flare1 = max(0.0, 0.3 - length(uv - center) * 4.0);
      color += vec3(1.0, 0.8, 0.5) * flare1;
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
};

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.RESIZE,
    parent: 'game',
    width: Constants.WIDTH,
    height: Constants.HEIGHT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: { default: "arcade" },
  backgroundColor: "#202830",
  render: {
    pixelArt: false,
    antialias: true
  },
  // Add custom shaders
  shaders: [starfieldShader, lightFlareShader]
};

const game = new Phaser.Game(config);

game.scene.add("roomselection", RoomSelection);
game.scene.add("playgame", PlayGame);
game.scene.add("welcome", Welcome);
game.scene.add("winner", Winner);
game.scene.add("levelselect", LevelSelect);
game.scene.start("welcome");

// Listen for resize events to update game dimensions
window.addEventListener('resize', () => {
  // Scale manager handles the resizing automatically
  // We just need to update any custom UI elements or calculations
  game.events.emit('resize', Constants.WIDTH, Constants.HEIGHT);
});
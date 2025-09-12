// src/components/DarkVeil.jsx
import { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle, Vec2 } from "ogl";
import "./DarkVeil.css";

// Vertex shader (keep simple, just pass positions)
const vertex = /* glsl */ `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// Fragment shader (red glow on black background)
const fragment = /* glsl */ `
precision highp float;

uniform float uTime;
uniform vec2 uResolution;

uniform float uNoise;
uniform float uScan;
uniform float uScanFreq;
uniform float uWarp;

varying vec2 vUv;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  uv -= 0.5;
  uv.x *= uResolution.x / uResolution.y;

  // Warp distortion
  uv.x += sin(uv.y * 10.0 + uTime) * uWarp * 0.05;
  uv.y += cos(uv.x * 10.0 + uTime) * uWarp * 0.05;

  // Glow effect
  float dist = length(uv) * 2.0;
  float glow = 0.4 / dist;

  // Noise
  float n = (random(uv * uTime) - 0.5) * uNoise;

  // Scanlines
  float scan = sin((uv.y + uTime * 0.5) * 100.0 * uScanFreq) * uScan;

  // Final red glow on black background
  vec3 color = vec3(glow + n + scan, 0.0, 0.0);

  gl_FragColor = vec4(color, 1.0);
}
`;

export default function DarkVeil({
  noiseIntensity = 0.1,
  scanlineIntensity = 0.1,
  speed = 0.5,
  scanlineFrequency = 1,
  warpAmount = 0.05,
  resolutionScale = 1,
}) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const parent = canvas.parentElement;

    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2),
      canvas,
    });

    const gl = renderer.gl;
    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2() },
        uNoise: { value: noiseIntensity },
        uScan: { value: scanlineIntensity },
        uScanFreq: { value: scanlineFrequency },
        uWarp: { value: warpAmount },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const w = parent.clientWidth,
        h = parent.clientHeight;
      renderer.setSize(w * resolutionScale, h * resolutionScale);
      program.uniforms.uResolution.value.set(w, h);
    };

    window.addEventListener("resize", resize);
    resize();

    const start = performance.now();
    let frame = 0;

    const loop = () => {
      program.uniforms.uTime.value =
        ((performance.now() - start) / 1000) * speed;
      program.uniforms.uNoise.value = noiseIntensity;
      program.uniforms.uScan.value = scanlineIntensity;
      program.uniforms.uScanFreq.value = scanlineFrequency;
      program.uniforms.uWarp.value = warpAmount;
      renderer.render({ scene: mesh });
      frame = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [
    noiseIntensity,
    scanlineIntensity,
    speed,
    scanlineFrequency,
    warpAmount,
    resolutionScale,
  ]);

  return <canvas ref={ref} className="darkveil-canvas" />;
}

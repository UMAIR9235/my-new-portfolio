"use client";
import React, { useEffect, useRef } from "react";

interface CanvasCircleAnimationProps {
  width: number;
  height: number;
}

interface Point {
  x: number;
  y: number;
}

// ... keep your existing Particle class definition ...
class Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  radians: number;
  velocity: number;
  distanceFromCenter: number;
  lastMouse: Point;
  context: CanvasRenderingContext2D;

  constructor(
    x: number,
    y: number,
    radius: number,
    color: string,
    context: CanvasRenderingContext2D
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.context = context;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.distanceFromCenter = Math.floor(Math.random() * (120 - 50 + 1) + 50);
    this.lastMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  }

  update(mouse: Point) {
    const lastPoint = { x: this.x, y: this.y };

    // Update radians for rotation
    this.radians += this.velocity;

    // Smooth mouse interpolation
    this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
    this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

    // Calculate new position
    this.x =
      this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
    this.y =
      this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;

    this.draw(lastPoint);
  }

  private draw(lastPoint: Point) {
    this.context.beginPath();
    this.context.strokeStyle = this.color;
    this.context.lineWidth = this.radius;
    this.context.moveTo(lastPoint.x, lastPoint.y);
    this.context.lineTo(this.x, this.y);
    this.context.stroke();
    this.context.closePath();
  }
}

const CanvasCircleAnimation: React.FC<CanvasCircleAnimationProps> = ({
  width,
  height,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(null);
  const mousePos = useRef<{ x: number; y: number }>({
    x: width / 2,
    y: height / 2,
  });

  const colors = ["#00BDFF", "#4D39CE", "#088EFF"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width === 0 || height === 0) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    // Set canvas dimensions from props
    canvas.width = width;
    canvas.height = height;

    // Initialize particles
    const init = () => {
      particles.current = Array.from({ length: 10 }, () => {
        const radius = Math.random() * 2 + 1;
        return new Particle(
          width / 2, // Use container width
          height / 2, // Use container height
          radius,
          colors[Math.floor(Math.random() * colors.length)],
          context
        );
      });
    };

    // Animation loop
    const animate = () => {
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, width, height);

      particles.current.forEach((particle) =>
        particle.update(mousePos.current)
      );
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    // Start animation
    init();
    animate();

    // Cleanup
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [width, height, colors]); // Re-run when dimensions change

  return (
    <canvas
      ref={canvasRef}
      style={{
        background: "black",
        width: "100%",
        height: "100%",
      }}
      className=""
    />
  );
};

export default CanvasCircleAnimation;

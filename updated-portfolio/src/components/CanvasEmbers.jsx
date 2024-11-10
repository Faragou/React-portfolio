import React, { useEffect, useRef } from 'react';
import './CanvasEmbers.scss';

const CanvasEmbers = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const embers = [];
    const emberCount = 200;

    
    const emberSettings = {
      maxSize: 4,
      minSize: 1,
      maxSpeed: 2, 
      minSpeed: 0.5,
      color: 'rgba(0, 176, 255, 0.7)', 
    };

    // Adjust canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 100; 
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    
    class Ember {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 50; 
        this.size = emberSettings.minSize + Math.random() * (emberSettings.maxSize - emberSettings.minSize);
        this.speed = emberSettings.minSpeed + Math.random() * (emberSettings.maxSpeed - emberSettings.minSpeed);
        this.opacity = 1;
        this.fadeRate = Math.random() * 0.02 + 0.005;
        this.color = emberSettings.color;
      }

      update() {
        this.y -= this.speed;
        this.opacity -= this.fadeRate;
        if (this.opacity <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace('0.7', this.opacity.toFixed(2));
        ctx.fill();
      }
    }

    
    for (let i = 0; i < emberCount; i++) {
      embers.push(new Ember());
    }

    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      embers.forEach((ember) => {
        ember.update();
        ember.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="embersCanvas"></canvas>;
};

export default CanvasEmbers;

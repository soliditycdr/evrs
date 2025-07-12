
import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  connections: number[];
}

interface BlockchainBackgroundProps {
  opacity?: number;
  className?: string;
}

const BlockchainBackground = ({ opacity = 0.8, className = "" }: BlockchainBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createNodes = () => {
      const nodes: Node[] = [];
      const nodeCount = Math.floor((canvas.width * canvas.height) / 15000); // More nodes

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5, // Faster movement
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 6 + 4, // Larger nodes
          opacity: Math.random() * 0.8 + 0.4, // Higher opacity
          connections: []
        });
      }

      // Create more blockchain-like connections
      nodes.forEach((node, i) => {
        const connectionCount = Math.floor(Math.random() * 4) + 2; // More connections
        for (let j = 0; j < connectionCount; j++) {
          const targetIndex = Math.floor(Math.random() * nodes.length);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
      });
      
      nodesRef.current = nodes;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodesRef.current.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Wrap around screen edges
        if (node.x < 0) node.x = canvas.width;
        if (node.x > canvas.width) node.x = 0;
        if (node.y < 0) node.y = canvas.height;
        if (node.y > canvas.height) node.y = 0;

        // Draw connections first (behind nodes)
        node.connections.forEach(connectionIndex => {
          const connectedNode = nodesRef.current[connectionIndex];
          if (!connectedNode) return;

          const dx = node.x - connectedNode.x;
          const dy = node.y - connectedNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Draw connections for longer distances and make them more visible
          if (distance < 200) {
            const lineOpacity = 0.6 * (1 - distance / 200); // Much more visible
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.strokeStyle = `rgba(0, 191, 255, ${lineOpacity})`; // Bright cyan
            ctx.lineWidth = 2; // Thicker lines
            ctx.stroke();

            // Add glowing effect to lines
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(0, 191, 255, ${lineOpacity})`;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.strokeStyle = `rgba(0, 191, 255, ${lineOpacity * 0.5})`;
            ctx.lineWidth = 4;
            ctx.stroke();
            ctx.shadowBlur = 0;

            // Enhanced data flow animation along the line
            const flowPos = (Date.now() / 1500 + i) % 1;
            const flowX = node.x + (connectedNode.x - node.x) * flowPos;
            const flowY = node.y + (connectedNode.y - node.y) * flowPos;
            
            ctx.save();
            ctx.shadowBlur = 8;
            ctx.shadowColor = `rgba(255, 0, 255, ${lineOpacity})`;
            ctx.beginPath();
            ctx.arc(flowX, flowY, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 0, 255, ${lineOpacity})`; // Bright magenta
            ctx.fill();
            ctx.restore();
          }
        });

        // Draw node with enhanced glow
        ctx.save();
        ctx.shadowBlur = 20; // Stronger glow
        ctx.shadowColor = `rgba(0, 191, 255, ${node.opacity})`;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 191, 255, ${node.opacity})`; // Bright cyan
        ctx.fill();
        
        // Add bright inner highlight
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity * 0.9})`; // Bright white center
        ctx.fill();
        
        ctx.restore();

        // Enhanced pulsing effect to more nodes
        if (i % 5 === 0) { // More pulsing nodes
          const pulseSize = node.size + Math.sin(Date.now() / 800 + i) * 4; // Bigger pulse
          ctx.save();
          ctx.shadowBlur = 15;
          ctx.shadowColor = `rgba(0, 255, 127, ${node.opacity * 0.6})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 255, 127, ${node.opacity * 0.6})`; // Bright green
          ctx.lineWidth = 2;
          ctx.stroke();
          ctx.restore();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      createNodes();
    };

    // Initialize
    resizeCanvas();
    createNodes();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ 
        background: 'transparent',
        opacity: opacity,
        zIndex: 1
      }}
    />
  );
};

export default BlockchainBackground;

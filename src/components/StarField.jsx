import React, { useEffect, useRef } from 'react';

const StarField = ({ isDark }) => {
    const canvasRef = useRef(null);
    const stars = [];

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const createStars = (num) => {
        stars.length = 0;
        for (let i = 0; i < num; i++) {
            stars.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                radius: Math.random() * 1 + 0.5,
                alpha: Math.random(),
                speed: Math.random() * (isDark ? 2 : 1) + 1,
                color: getRandomColor(),
                isMeteor: Math.random() < 0.1
            });
        }
    };

    const drawStars = (ctx) => {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = star.color;
            ctx.fill();

            if (star.isMeteor) {
                ctx.strokeStyle = star.color;
                ctx.lineWidth = star.radius;
                ctx.moveTo(star.x, star.y);
                ctx.lineTo(star.x - 15, star.y + 5);
                ctx.stroke();
            }

            star.x += star.isMeteor ? star.speed * 2 : star.speed;
            star.y += star.speed;

            if (star.y > window.innerHeight || star.x > window.innerWidth) {
                star.y = Math.random() * window.innerHeight;
                star.x = 0;
            }
        });
    };

    const animate = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            drawStars(ctx);
            requestAnimationFrame(animate);
        }
    };

    useEffect(() => {
        createStars(200);
        animate();
    }, [isDark]);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default StarField;
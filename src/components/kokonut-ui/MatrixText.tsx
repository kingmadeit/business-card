/**
 * @author: @dorian_baffier
 * @description: Matrix Text
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 * 
 * 
 * modified by @author: @kingmadeit
 */

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "motion/react";

interface LetterState {
    char: string;
    isMatrix: boolean;
    isSpace: boolean;
}

interface MatrixTextProps {
    text?: string;
    className?: string;
    initialDelay?: number;
    letterAnimationDuration?: number;
    letterInterval?: number;
    tag?: keyof typeof motion;
    className?: string
}

const MatrixText = ({
    text = "kingmadeit!",
    initialDelay = 200,
    letterAnimationDuration = 500,
    letterInterval = 100,
    tag = "h2",
    className = ''
}: MatrixTextProps) => {
    const [letters, setLetters] = useState<LetterState[]>(() =>
        text.split("").map((char) => ({
            char,
            isMatrix: false,
            isSpace: char === " ",
        }))
    );
    const [isAnimating, setIsAnimating] = useState(false);

    const getRandomChar = useCallback(
        () => (Math.random() > 0.5 ? "1" : "0"),
        []
    );

    const animateLetter = useCallback(
        (index: number) => {
            if (index >= text.length) return;

            requestAnimationFrame(() => {
                setLetters((prev) => {
                    const newLetters = [...prev];
                    if (!newLetters[index].isSpace) {
                        newLetters[index] = {
                            ...newLetters[index],
                            char: getRandomChar(),
                            isMatrix: true,
                        };
                    }
                    return newLetters;
                });

                setTimeout(() => {
                    setLetters((prev) => {
                        const newLetters = [...prev];
                        newLetters[index] = {
                            ...newLetters[index],
                            char: text[index],
                            isMatrix: false,
                        };
                        return newLetters;
                    });
                }, letterAnimationDuration);
            });
        },
        [getRandomChar, text, letterAnimationDuration]
    );

    const startAnimation = useCallback(() => {
        if (isAnimating) return;

        setIsAnimating(true);
        let currentIndex = 0;

        const animate = () => {
            if (currentIndex >= text.length) {
                setIsAnimating(false);
                return;
            }

            animateLetter(currentIndex);
            currentIndex++;
            setTimeout(animate, letterInterval);
        };

        animate();
    }, [animateLetter, text, isAnimating, letterInterval]);

    useEffect(() => {
        const timer = setTimeout(startAnimation, initialDelay);
        return () => clearTimeout(timer);
    }, []);

    const motionVariants = useMemo(
        () => ({
            matrix: {
                color: "#53da53ff",
                textShadow: "0 2px 4px rgba(0, 255, 0, 0.5)",
            }
        }),
        []
    );

    const MotionTag = motion(tag);

    return (
       <div className="flex flex-wrap items-center justify-center">
            {letters.map((letter, index) => (
                <MotionTag
                    key={`${index}-${letter.char}`}
                    className={`text-center overflow-hidden ${className}`}
                    initial="initial"
                    animate={letter.isMatrix ? "matrix" : "normal"}
                    variants={motionVariants}
                    transition={{
                        duration: 0.1,
                        ease: "easeInOut",
                    }}
                    style={{
                        display: "inline-block",
                        fontVariantNumeric: "tabular-nums",
                    }}
                >
                    {letter.isSpace ? "\u00A0" : letter.char}
                </MotionTag>
            ))}
        </div>
    );
};

export default MatrixText;

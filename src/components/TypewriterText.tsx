import { useState, useEffect } from "react";

interface TypewriterTextProps {
    text: string;
    speed?: number;
    className?: string;
    delay?: number;
    highlightCount?: number;
    highlightClassName?: string;
}

export const TypewriterText = ({
    text,
    speed = 40,
    className = "",
    delay = 0,
    highlightCount = 0,
    highlightClassName = "text-primary",
}: TypewriterTextProps) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let intervalId: NodeJS.Timeout;
        let isCancelled = false;

        setDisplayedText(""); // Reset text on text change

        timeoutId = setTimeout(() => {
            let i = 0;
            // Use text string directly for character appending
            intervalId = setInterval(() => {
                if (isCancelled) return;

                // Use a functional state update to safely append characters
                setDisplayedText((prev) => {
                    // Re-evaluating the string to prevent double appends in React strict mode
                    // or just slice it from the main text directly
                    return text.slice(0, prev.length + 1);
                });

                i++;
                if (i >= text.length) {
                    clearInterval(intervalId);
                }
            }, speed);
        }, delay * 1000); // delay is assumed to be in seconds if it matches framer-motion, but let's say milliseconds here. Actually, we'll keep delay in ms. Wait, usually delay is in ms.

        return () => {
            isCancelled = true;
            clearTimeout(timeoutId);
            clearInterval(intervalId);
        };
    }, [text, speed, delay]);

    // Display a blinking cursor while typing, otherwise just the text
    const isTyping = displayedText.length < text.length;

    const renderText = () => {
        if (highlightCount <= 0) return displayedText;

        const words = text.split(" ");
        if (words.length <= highlightCount) {
            return <span className={highlightClassName}>{displayedText}</span>;
        }

        const normalWords = words.slice(0, words.length - highlightCount);
        const highlightedWords = words.slice(words.length - highlightCount);

        const normalPart = normalWords.join(" ") + " ";
        const highlightedPart = highlightedWords.join(" ");

        if (displayedText.length <= normalPart.length) {
            return displayedText;
        } else {
            return (
                <>
                    {normalPart}
                    <span className={highlightClassName}>
                        {displayedText.slice(normalPart.length)}
                    </span>
                </>
            );
        }
    };

    return (
        <span className={className}>
            {renderText()}
            <span className={`inline-block w-[3px] h-[1em] bg-current ml-1 align-baseline transition-opacity duration-100 ${isTyping ? 'animate-pulse opacity-100' : 'opacity-0'}`}></span>
        </span>
    );
};

import { useEffect, useState } from "react";
import { TYPEWRITER_OPTIONS, TYPEWRITER_CONFIG } from "@/constant/typewriter";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  className?: string;
  prefix?: string;
  suffix?: string;
}

const TypewriterText = ({ className, prefix = "", suffix = "" }: TypewriterTextProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentWord = TYPEWRITER_OPTIONS[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => {
            setIsDeleting(true);
          }, TYPEWRITER_CONFIG.pauseDuration);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % TYPEWRITER_OPTIONS.length);
        }
      }
    }, isDeleting ? TYPEWRITER_CONFIG.deletingSpeed : TYPEWRITER_CONFIG.typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex]);

  return (
    <span className={cn("inline-block", className)}>
      {prefix}
      <span className="relative">
        {currentText}
        <span
          className="inline-block w-0.5 h-[1em] bg-foreground ml-1 animate-pulse"
          style={{ animationDuration: "1s" }}
        />
      </span>
      {suffix}
    </span>
  );
};

export default TypewriterText;


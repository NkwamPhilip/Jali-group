import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface VideoBackgroundProps {
  src: string;
  className?: string;
  overlayOpacity?: number;
  enableParallax?: boolean;
}

/**
 * Extracts YouTube video ID from various YouTube URL formats
 */
const getYouTubeVideoId = (url: string): string | null => {
  if (!url.includes("youtube.com") && !url.includes("youtu.be") && !url.includes("/")) {
    return url;
  }

  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

const isYouTubeUrl = (src: string): boolean => {
  return src.includes("youtube.com") || src.includes("youtu.be") || getYouTubeVideoId(src) !== null;
};

const VideoBackground = ({
  src,
  className,
  overlayOpacity = 0.45,
  enableParallax = true,
}: VideoBackgroundProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isYouTube = useMemo(() => isYouTubeUrl(src), [src]);
  const youtubeVideoId = useMemo(() => (isYouTube ? getYouTubeVideoId(src) : null), [src, isYouTube]);

  const youtubeEmbedUrl = useMemo(() => {
    if (!youtubeVideoId) return null;
    return `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1`;
  }, [youtubeVideoId]);

  useEffect(() => {
    if (!containerRef.current) return;

    const elementToAnimate = isYouTube ? iframeRef.current : videoRef.current;
    if (!elementToAnimate) return;

    gsap.fromTo(
      elementToAnimate,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    );

    if (isYouTube && iframeRef.current && containerRef.current) {
      const updateIframeSize = () => {
        const container = containerRef.current;
        const iframe = iframeRef.current;
        if (!container || !iframe) return;

        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const aspectRatio = 16 / 9;

        let width, height;
        if (containerWidth / containerHeight > aspectRatio) {
          height = containerHeight;
          width = height * aspectRatio;
        } else {
          width = containerWidth;
          height = width / aspectRatio;
        }

        const scale = 1.1;
        iframe.style.width = `${width * scale}px`;
        iframe.style.height = `${height * scale}px`;
      };

      updateIframeSize();
      window.addEventListener("resize", updateIframeSize);

      return () => {
        window.removeEventListener("resize", updateIframeSize);
      };
    }

    if (enableParallax) {
      const parallax = gsap.to(elementToAnimate, {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => {
        parallax.kill();
      };
    }
  }, [enableParallax, isYouTube]);

  return (
    <div ref={containerRef} className={cn("absolute inset-0 z-0 overflow-hidden", className)}>
      {isYouTube && youtubeEmbedUrl ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            ref={iframeRef}
            src={youtubeEmbedUrl}
            className="pointer-events-none"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              border: "none",
            }}
            title="Background video"
          />
        </div>
      ) : (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
          <div className="w-full h-full bg-gradient-to-br from-background via-surface to-background" />
        </video>
      )}
      <div
        className="absolute inset-0 bg-background"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
};

export default VideoBackground;


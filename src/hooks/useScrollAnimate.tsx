import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ScrollAnimationProps {
  variant: {
    visible: Record<string, any>;
    hidden: Record<string, any>;
  };
  playOnce?: boolean;
  threshold?: number;
}

const useScrollAnimation = ({
  variant,
  playOnce = true,
  threshold = 0.5,
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: playOnce });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView, playOnce]);

  return {
    ref,
    controls,
    variants: variant,
  };
};

export default useScrollAnimation;

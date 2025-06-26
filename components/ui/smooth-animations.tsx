"use client"

import { motion, useReducedMotion, useInView, MotionProps } from "framer-motion"
import { useRef, forwardRef, ReactNode } from "react"
import { cn } from "@/lib/utils"

// Базовые варианты анимаций с оптимизацией производительности
export const animationVariants = {
  fadeIn: {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      }
    }
  },
  slideUp: {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1],
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      }
    }
  },
  slideLeft: {
    initial: { opacity: 0, x: 50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
    exit: { 
      opacity: 0, 
      x: -30,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      }
    }
  },
  slideRight: {
    initial: { opacity: 0, x: -50 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
    exit: { 
      opacity: 0, 
      x: 30,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      }
    }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.68, -0.55, 0.265, 1.55],
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      }
    }
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  }
}

interface SmoothMotionProps extends MotionProps {
  children: ReactNode
  className?: string
  variant?: keyof typeof animationVariants
  delay?: number
  duration?: number
  once?: boolean
}

// Оптимизированный компонент анимации с Intersection Observer
export const SmoothMotion = forwardRef<HTMLDivElement, SmoothMotionProps>(({
  children,
  className,
  variant = "fadeIn",
  delay = 0,
  duration,
  once = true,
  ...props
}, ref) => {
  const motionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(motionRef, { 
    once, 
    margin: "-10% 0px -10% 0px",
    amount: 0.3
  })
  const shouldReduceMotion = useReducedMotion()

  const customVariant = duration ? {
    ...animationVariants[variant],
    animate: {
      ...animationVariants[variant].animate,
      transition: {
        ...animationVariants[variant].animate.transition,
        duration,
        delay,
      }
    }
  } : {
    ...animationVariants[variant],
    animate: {
      ...animationVariants[variant].animate,
      transition: {
        ...animationVariants[variant].animate.transition,
        delay,
      }
    }
  }

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={motionRef}
      className={cn("will-change-transform", className)}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      exit="exit"
      variants={customVariant}
      style={{ willChange: "transform, opacity" }}
      {...props}
    >
      {children}
    </motion.div>
  )
})

SmoothMotion.displayName = "SmoothMotion"

// Компонент для плавного появления элементов списка
interface StaggerContainerProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
}

export const StaggerContainer = ({ 
  children, 
  className, 
  delay = 0,
  staggerDelay = 0.1 
}: StaggerContainerProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-transform", className)}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          }
        }
      }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  )
}

// Компонент для hover-эффектов с оптимизацией
interface HoverMotionProps extends MotionProps {
  children: ReactNode
  className?: string
  scale?: number
  y?: number
  rotateY?: number
  duration?: number
}

export const HoverMotion = ({ 
  children, 
  className, 
  scale = 1.05, 
  y = -5,
  rotateY = 0,
  duration = 0.2,
  ...props 
}: HoverMotionProps) => {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={cn("will-change-transform cursor-pointer", className)}
      whileHover={{ 
        scale, 
        y, 
        rotateY,
        transition: { 
          duration,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }}
      whileTap={{ 
        scale: scale * 0.95,
        transition: { 
          duration: 0.1,
          ease: "easeOut"
        }
      }}
      style={{ willChange: "transform" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Компонент для плавной прокрутки
export const ScrollReveal = ({ 
  children, 
  className,
  threshold = 0.3,
  rootMargin = "-10%"
}: {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold,
    margin: rootMargin
  })
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={cn("will-change-transform", className)}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          ease: [0.25, 1, 0.5, 1]
        }
      } : { opacity: 0, y: 50 }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  )
} 
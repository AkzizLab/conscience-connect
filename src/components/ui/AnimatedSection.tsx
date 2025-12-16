import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in' | 'fade-down';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

const animationClasses: Record<AnimationType, string> = {
  'fade-up': 'scroll-fade-up',
  'fade-in': 'scroll-fade-in',
  'fade-down': 'scroll-fade-down',
  'slide-left': 'scroll-slide-left',
  'slide-right': 'scroll-slide-right',
  'scale-in': 'scroll-scale-in',
};

export const AnimatedSection = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className,
  threshold = 0.1,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return (
    <div
      ref={ref}
      className={cn(
        animationClasses[animation],
        isVisible && 'is-visible',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface StaggeredListProps {
  children: ReactNode[];
  animation?: AnimationType;
  baseDelay?: number;
  className?: string;
  itemClassName?: string;
}

export const StaggeredList = ({
  children,
  animation = 'fade-up',
  baseDelay = 100,
  className,
  itemClassName,
}: StaggeredListProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={cn(
            animationClasses[animation],
            isVisible && 'is-visible',
            itemClassName
          )}
          style={{ animationDelay: `${index * baseDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

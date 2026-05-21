import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

type LayoutElement = 'div' | 'section' | 'nav' | 'header' | 'footer' | 'aside' | 'main' | 'ul';

const containerVariants = cva('mx-auto w-full px-4 sm:px-6 lg:px-8', {
  variants: {
    size: {
      sm: 'max-w-2xl',
      md: 'max-w-3xl',
      lg: 'max-w-5xl',
      xl: 'max-w-7xl',
      full: 'max-w-none',
    },
  },
  defaultVariants: { size: 'lg' },
});

export type ContainerProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof containerVariants> & { as?: LayoutElement };

export function Container({ as: Tag = 'div', size, className, ...props }: ContainerProps) {
  return <Tag className={cn(containerVariants({ size }), className)} {...props} />;
}

const sectionVariants = cva('w-full', {
  variants: {
    spacing: {
      sm: 'py-10 sm:py-12',
      md: 'py-12 sm:py-16',
      lg: 'py-16 sm:py-24',
      xl: 'py-24 sm:py-32',
      none: '',
    },
  },
  defaultVariants: { spacing: 'lg' },
});

export type SectionProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof sectionVariants> & { as?: LayoutElement };

export function Section({ as: Tag = 'section', spacing, className, ...props }: SectionProps) {
  return <Tag className={cn(sectionVariants({ spacing }), className)} {...props} />;
}

const stackVariants = cva('flex flex-col', {
  variants: {
    gap: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
      '2xl': 'gap-12',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
  },
  defaultVariants: { gap: 'md' },
});

export type StackProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof stackVariants> & { as?: LayoutElement };

export function Stack({ as: Tag = 'div', gap, align, className, ...props }: StackProps) {
  return <Tag className={cn(stackVariants({ gap, align }), className)} {...props} />;
}

const clusterVariants = cva('flex flex-wrap', {
  variants: {
    gap: {
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
    },
  },
  defaultVariants: { gap: 'md', align: 'center' },
});

export type ClusterProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof clusterVariants> & { as?: LayoutElement };

export function Cluster({
  as: Tag = 'div',
  gap,
  align,
  justify,
  className,
  ...props
}: ClusterProps) {
  return <Tag className={cn(clusterVariants({ gap, align, justify }), className)} {...props} />;
}

const gridVariants = cva('grid', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    },
    gap: {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-12',
    },
  },
  defaultVariants: { cols: 3, gap: 'md' },
});

export type GridProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof gridVariants> & { as?: LayoutElement };

export function Grid({ as: Tag = 'div', cols, gap, className, ...props }: GridProps) {
  return <Tag className={cn(gridVariants({ cols, gap }), className)} {...props} />;
}

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariants = cva('text-foreground', {
  variants: {
    variant: {
      display: 'font-light tracking-[-0.035em] leading-[0.95]',
      h1:      'font-light tracking-[-0.03em]',
      h2:      'font-light tracking-[-0.03em]',
      h3:      'font-medium tracking-[-0.02em]',
      h4:      'font-medium',
      h5:      'font-semibold tracking-[0.14em]',
      h6:      'font-medium',
    },
  },
  defaultVariants: { variant: 'h1' },
});

type HeadingVariant = NonNullable<VariantProps<typeof headingVariants>['variant']>;
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level: HeadingLevel;
  variant?: HeadingVariant;
};

export function Heading({ level, variant, className, ...props }: HeadingProps) {
  const Tag = `h${level}` as HeadingTag;
  const effective = variant ?? (`h${level}` as HeadingVariant);
  return <Tag className={cn(headingVariants({ variant: effective }), className)} {...props} />;
}

type LeveledProps = Omit<HeadingProps, 'level'>;
export const H1 = (props: LeveledProps) => <Heading level={1} {...props} />;
export const H2 = (props: LeveledProps) => <Heading level={2} {...props} />;
export const H3 = (props: LeveledProps) => <Heading level={3} {...props} />;
export const H4 = (props: LeveledProps) => <Heading level={4} {...props} />;
export const H5 = (props: LeveledProps) => <Heading level={5} {...props} />;
export const H6 = (props: LeveledProps) => <Heading level={6} {...props} />;

const textVariants = cva('', {
  variants: {
    variant: {
      body: 'text-foreground text-lg leading-relaxed',
      lead: 'text-muted-foreground text-xl leading-relaxed',
      muted: 'text-muted-foreground text-base',
      small: 'text-muted-foreground text-sm',
      caption: 'text-muted-foreground text-xs',
    },
  },
  defaultVariants: { variant: 'body' },
});

type TextElement = 'p' | 'span' | 'div';

export type TextProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof textVariants> & {
    as?: TextElement;
  };

export function Text({ as: Tag = 'p', variant, className, ...props }: TextProps) {
  return <Tag className={cn(textVariants({ variant }), className)} {...props} />;
}

type VariantlessProps = Omit<TextProps, 'as' | 'variant'>;
export const P = (props: Omit<TextProps, 'as'>) => <Text as="p" {...props} />;
export const Lead = (props: VariantlessProps) => <Text as="p" variant="lead" {...props} />;
export const Muted = (props: VariantlessProps) => <Text as="p" variant="muted" {...props} />;
export const Small = (props: VariantlessProps) => <Text as="p" variant="small" {...props} />;
export const Caption = (props: VariantlessProps) => <Text as="span" variant="caption" {...props} />;

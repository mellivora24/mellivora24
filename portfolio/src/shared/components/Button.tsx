import React, { useEffect, useRef, useState } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const sizeMap: Record<ButtonSize, React.CSSProperties> = {
  sm: { height: 34, paddingInline: 14, fontSize: 13, gap: 6 },
  md: { height: 42, paddingInline: 20, fontSize: 14, gap: 8 },
  lg: { height: 50, paddingInline: 28, fontSize: 16, gap: 10 },
};

const variantMap: Record<
  ButtonVariant,
  {
    base: React.CSSProperties;
    hover: React.CSSProperties;
    focusRing: string;
  }
> = {
  primary: {
    base: {
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-bg)',
      borderColor: 'var(--color-primary)',
    },
    hover: {
      backgroundColor: 'var(--color-primary-soft)',
      borderColor: 'var(--color-primary-soft)',
      boxShadow: 'var(--shadow-glow)',
    },
    focusRing: '0 0 0 3px var(--color-primary-glow)',
  },
  secondary: {
    base: {
      backgroundColor: 'var(--color-accent)',
      color: 'var(--color-text)',
      borderColor: 'var(--color-accent)',
    },
    hover: {
      backgroundColor: 'var(--color-accent-soft)',
      borderColor: 'var(--color-accent-soft)',
      boxShadow: 'var(--shadow-glow-blue)',
    },
    focusRing: '0 0 0 3px var(--color-accent-glow)',
  },
  outline: {
    base: {
      backgroundColor: 'transparent',
      color: 'var(--color-text)',
      borderColor: 'var(--color-border)',
    },
    hover: {
      backgroundColor: 'var(--color-surface)',
      borderColor: 'var(--color-primary)',
    },
    focusRing: '0 0 0 3px var(--color-primary-glow)',
  },
  ghost: {
    base: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-muted)',
      borderColor: 'transparent',
    },
    hover: {
      backgroundColor: 'var(--color-surface)',
      color: 'var(--color-text)',
    },
    focusRing: '0 0 0 3px var(--color-primary-glow)',
  },
};

const Spinner: React.FC<{ size: number }> = ({ size }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    ref.current?.animate(
      [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
      { duration: 700, iterations: Infinity }
    );
  }, []);

  return (
    <span
      ref={ref}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        borderRadius: '50%',
        border: '2px solid currentColor',
        borderTopColor: 'transparent',
        opacity: 0.85,
        flexShrink: 0,
      }}
    />
  );
};

export const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      disabled,
      style: styleOverride,
      onMouseEnter,
      onMouseLeave,
      onMouseDown,
      onMouseUp,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const isDisabled = disabled || isLoading;
    const { base, hover, focusRing } = variantMap[variant];
    const sizeStyle = sizeMap[size];
    const spinnerSize = sizeStyle.fontSize ? Number(sizeStyle.fontSize) + 2 : 16;

    const style: React.CSSProperties = {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      borderRadius: 'var(--radius)',
      border: '1px solid transparent',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      width: fullWidth ? '100%' : undefined,
      opacity: isDisabled ? 0.5 : 1,
      transition:
        'background-color var(--transition), color var(--transition), border-color var(--transition), box-shadow var(--transition), transform 0.15s ease',
      ...sizeStyle,
      ...base,
      ...(isHovered && !isDisabled ? hover : {}),
      ...(isFocused && !isDisabled ? { boxShadow: focusRing } : {}),
      ...(isActive && !isDisabled ? { transform: 'translateY(1px) scale(0.98)' } : {}),
      ...styleOverride,
    };

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        style={style}
        onMouseEnter={(e) => {
          setIsHovered(true);
          onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          setIsHovered(false);
          setIsActive(false);
          onMouseLeave?.(e);
        }}
        onMouseDown={(e) => {
          setIsActive(true);
          onMouseDown?.(e);
        }}
        onMouseUp={(e) => {
          setIsActive(false);
          onMouseUp?.(e);
        }}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        {...props}
      >
        {isLoading ? (
          <Spinner size={spinnerSize} />
        ) : (
          leftIcon && <span style={{ display: 'inline-flex' }}>{leftIcon}</span>
        )}
        {children}
        {!isLoading && rightIcon && (
          <span style={{ display: 'inline-flex' }}>{rightIcon}</span>
        )}
      </button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

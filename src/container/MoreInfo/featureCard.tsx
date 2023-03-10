interface Props {
  children: React.ReactNode;
  className?: String;
}

export const Container = ({ children, className = "", ...rest }: Props) => {
  return (
    <div
      className={`bg-white w-[343px] lg:w-auto rounded-2xl overflow-hidden relative drop-shadow-2xl ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export const Title = ({ children, className = "", ...rest }: Props) => {
  return (
    <h3 className={`font-extrabold tracking-wide ${className}`} {...rest}>
      {children}
    </h3>
  );
};

export const Description = ({ children, className = "", ...rest }: Props & { left?: boolean }) => {
  return (
    <p className={`text-base font-normal tracking-wide ${className}`} {...rest}>
      {children}
    </p>
  );
};

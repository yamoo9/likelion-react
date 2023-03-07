export default function CountButton({ children, ...restProps }) {
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
}

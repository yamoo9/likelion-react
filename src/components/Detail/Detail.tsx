interface Props {
  [key: string]: unknown;
}

export function Detail(props: Props): JSX.Element {
  return <div id="detail" {...props} />;
}

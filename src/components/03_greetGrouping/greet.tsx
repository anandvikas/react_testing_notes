// types ---
type greetProps = {
  name?: string;
};

// component ---
export const Greet = (props: greetProps) => {
  return <div>Hello {props.name}</div>;
};

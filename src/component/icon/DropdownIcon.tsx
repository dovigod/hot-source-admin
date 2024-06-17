export function DropdownIcon(props: any) {
  const size = props.size ?? "1";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size * 24}
      viewBox="0 -960 960 960"
      width={size * 24}
      fill={props.color ?? "#e8eaed"}
      {...props}
    >
      <path d="M480-360 280-560h400L480-360Z" />
    </svg>
  );
}

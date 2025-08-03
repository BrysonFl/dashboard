interface PrimaryButtonsProps {
  title: string,
  onClick: () => void
}

export const PrimaryButton = ({ title, onClick }: PrimaryButtonsProps) => {
  return (
    <button onClick={ onClick }>
      <span>{ title  }</span>
    </button>
  );
}
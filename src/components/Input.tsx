interface InputProps {
  leftIcon?: string,
  rightIcon?: string,
  placeholder?: string,
  onChange: (event: any) => void
}

export const Input = ({ leftIcon, rightIcon, placeholder, onChange }: InputProps) => {
  return (
    <div>
      <label>
        <span>
          <img src={ leftIcon } />
        </span>
        <input type="text" placeholder={ placeholder } onChange={ onChange } />
        <span>
          <img src={ rightIcon } />
        </span>
      </label>
    </div>
  );
}
import * as S from "./styles";

const Input = ({
  onChange,
  placeholder,
  type,
  required,
}: {
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  onChange: (value: string) => void;
}) => {
  return (
    <S.Input
      required={required && required}
      type={type && type}
      placeholder={placeholder && placeholder}
      onChange={(e) => onChange(e.target.value)}
    ></S.Input>
  );
};
export default Input;

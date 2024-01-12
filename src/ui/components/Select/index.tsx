import { ISelectProps } from "../../../data/@types";
import * as S from "./styles";

const Select = ({
  data,
  label,
  width,
  onChange,
  required,
}: {
  data: ISelectProps[];
  label: string;
  width?: string;
  required?: boolean;
  onChange: (value: any) => void;
}) => {
  return (
    <>
      <S.Select
        required={required && required}
        name="select"
        style={{ width: width ? width : "35%" }}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        <S.Option value={label}>{label}</S.Option>
        {data.map(({ id, name }) => (
          <S.Option key={id} value={id}>
            {name}
          </S.Option>
        ))}
      </S.Select>
    </>
  );
};
export default Select;

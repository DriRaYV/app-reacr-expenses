import * as S from "./styles";

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return <S.Button onClick={() => onClick()}>{text}</S.Button>;
};
export default Button;

import moment from "moment";
import { ITableProps } from "../../../data/@types";
import * as S from "./styles";

const Table = ({ data }: { data: ITableProps[] }) => {
  return (
    <S.Box>
      <S.Table>
        <S.Head>
          <S.Row>
            <S.Col>Local</S.Col>
            <S.Col>Tipo</S.Col>
            <S.Col>Preço</S.Col>
            <S.Col>Data</S.Col>
          </S.Row>
        </S.Head>
        <S.Body>
          {data.map(({ name, type, price, date }) => (
            <S.Row>
              <S.Data>{name}</S.Data>
              <S.Data>{type}</S.Data>
              <S.Data>{price}</S.Data>
              <S.Col>
                {moment(date, "YYYY-MM-DDTHH:mm:sssZ").format("DD/MM/YYYY")}
              </S.Col>
            </S.Row>
          ))}
        </S.Body>
      </S.Table>
    </S.Box>
  );
};
export default Table;

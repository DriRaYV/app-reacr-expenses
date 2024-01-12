import { useEffect, useState } from "react";
import * as S from "./styles";
import Table from "../../ui/components/Table";
import Select from "../../ui/components/Select";
import { IMetrics, ITableProps } from "../../data/@types";
import { handleFilterDate, handleFilterRows } from "../../ui/utils";
import Input from "../../ui/components/Input";
import Button from "../../ui/components/Button";
import {
  GetExpenseMetrics,
  GetExpenseTypes,
  GetExpenses,
  GetMonths,
  PostExpense,
} from "../../ui/service/Home";
import LoadingSpinner from "../../ui/components/Loading";
const HomePage = () => {
  const [monthData, setMonthData] = useState<string>(handleFilterDate());
  const [selectedOptionType, setSelectedOptionType] = useState(null);
  const [selectedOptionPeriod, setSelectedOptionPeriod] = useState(null);
  const [originalRows, setOriginalRows] = useState([]);
  const [rows, setRows] = useState<ITableProps[]>([]);
  const [optionsPeriod, setOptionsPeriod] = useState([]);
  const [optionsType, setOptionsType] = useState([]);
  const [metrics, setMetrics] = useState<IMetrics>();
  const [inputType, setInputType] = useState("");
  const [inputPlace, setInputPlace] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [loading, setLoading] = useState(true);
  const labelPeriod = "Período de Busca";
  const labelType = "Tipo de Gasto";

  useEffect(() => {
    setRows(
      handleFilterRows(
        selectedOptionType,
        selectedOptionPeriod,
        originalRows,
        labelType,
        labelPeriod
      )
    );
  }, [selectedOptionType, selectedOptionPeriod]);

  useEffect(() => {
    if (selectedOptionPeriod) {
      setMonthData(
        selectedOptionPeriod == labelPeriod
          ? handleFilterDate()
          : String(selectedOptionPeriod).toUpperCase()
      );
    }
  }, [selectedOptionPeriod]);

  const handleSubmit = async (
    name: string,
    type: string,
    price: string,
    date: string
  ) => {
    if (name && type && price && date) {
      const res = await PostExpense({
        date: date,
        fk_expense_type_id: parseInt(type),
        name: name,
        price: Number(price),
      });

      if (res) window.location.reload();
    }
    return null;
  };

  const handleGetMonths = async () => {
    const res = await GetMonths();
    if (res) setOptionsPeriod(res);
  };

  const handleGetExpenseTypes = async () => {
    const res = await GetExpenseTypes();
    if (res) setOptionsType(res);
  };

  const handleGetExpenses = async () => {
    const res = await GetExpenses();
    if (res) {
      setRows(res);
      setOriginalRows(res);
    }
  };

  const handleGetExpenseMetrics = async () => {
    const res = await GetExpenseMetrics();
    if (res) {
      setMetrics(res[0]);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await handleGetExpenseTypes();
      await handleGetMonths();
      await handleGetExpenses();
      await handleGetExpenseMetrics();
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (
      rows.length &&
      originalRows.length &&
      optionsPeriod.length &&
      optionsType.length &&
      metrics
    )
      setLoading(false);
  }, [rows, originalRows, optionsPeriod, optionsType, metrics]);

  return loading ? (
    <S.BoxLoading>
      <LoadingSpinner />
    </S.BoxLoading>
  ) : (
    <>
      <S.PageWrapper>
        <S.HeaderBox>
          <S.BigNumberBox>
            <S.BigNumber>
              Entradas:
              <br /> R$ {metrics?.entries}
            </S.BigNumber>
          </S.BigNumberBox>
          <S.BigNumberBox>
            <S.BigNumber>
              Saídas:
              <br /> R$
              {Number(metrics?.expenses) * -1 || ""}
            </S.BigNumber>
          </S.BigNumberBox>
          <S.BigNumberBox>
            <S.BigNumber>
              Sobram:
              <br /> R$
              {metrics?.remains}
            </S.BigNumber>
          </S.BigNumberBox>
        </S.HeaderBox>
        <S.Title>MÊS {monthData}</S.Title>
        <S.BoxContent>
          <Select
            label={labelPeriod}
            data={optionsPeriod}
            onChange={(e) => setSelectedOptionPeriod(e)}
          ></Select>
          <Select
            label={labelType}
            data={optionsType}
            onChange={(e) => setSelectedOptionType(e)}
          ></Select>
        </S.BoxContent>

        <Table data={rows} />

        <S.Title>ADICIONAR GASTO OU ENTRADA</S.Title>
        <S.FormBox>
          <Select
            required={true}
            width="20%"
            label={labelType}
            data={optionsType}
            onChange={(e) => setInputType(e)}
          />
          <Input
            required={true}
            onChange={(e) => setInputPlace(e)}
            placeholder="Insira o local"
          />
          <Input
            type="number"
            required={true}
            onChange={(e) => setInputValue(e)}
            placeholder="Insira o valor"
          />
          <Input
            type="date"
            required={true}
            onChange={(e) => setInputDate(e)}
            placeholder="Insira a data"
          />
        </S.FormBox>
        <Button
          text="SALVAR"
          onClick={() => {
            handleSubmit(inputPlace, inputType, inputValue, inputDate);
          }}
        />
      </S.PageWrapper>
    </>
  );
};

export default HomePage;

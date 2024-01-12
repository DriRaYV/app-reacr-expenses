import axios from "axios";
import { IDataExpenseDto, ITableProps } from "../../../data/@types";

const GetMonths = async () => {
  const res = await axios
    .get(`${process.env.REACT_APP_API_URL}/months`)
    .then((res) => res?.data)
    .catch((err) => err);
  return res;
};
const GetExpenseTypes = async () => {
  const res = await axios
    .get(`${process.env.REACT_APP_API_URL}/expense-types`)
    .then((res) => res?.data)
    .catch((err) => err);
  return res;
};

const GetExpenses = async () => {
  const res = await axios
    .get(`${process.env.REACT_APP_API_URL}/expenses`)
    .then((res) => res?.data)
    .catch((err) => err);
  return res;
};

const GetExpenseMetrics = async () => {
  const res = await axios
    .get(`${process.env.REACT_APP_API_URL}/expenses/metrics`)
    .then((res) => res?.data)
    .catch((err) => err);
  return res;
};

const PostExpense = async (body: IDataExpenseDto): Promise<ITableProps> => {
  const res = await axios
    .post(`${process.env.REACT_APP_API_URL}/expenses`, body)
    .then((res) => res?.data)
    .catch((err) => err);
  return res;
};
export {
  GetMonths,
  GetExpenseTypes,
  GetExpenses,
  GetExpenseMetrics,
  PostExpense,
};

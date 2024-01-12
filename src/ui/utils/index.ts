import { ITableProps } from "../../data/@types";
import moment from "moment";
import "moment/locale/pt-br";

const handleFilterDate = (date?: string) =>
  moment(date ? date : moment().format("DD/MM/YYYY"), "YYYY-MM-DDTHH:mm:sssZ")
    .locale("pt-br")
    .format("MMMM")
    .toUpperCase();

const handleFilterRows = (
  selectedOptionType: string | null,
  selectedOptionPeriod: string | null,
  originalRows: ITableProps[],
  labelType: string,
  labelPeriod: string
) => {
  if (selectedOptionType && selectedOptionType !== labelType) {
    if (selectedOptionPeriod) {
      return originalRows.filter(
        ({ type, date }) =>
          type === selectedOptionType &&
          (selectedOptionPeriod == labelPeriod
            ? handleFilterDate(date) === handleFilterDate()
            : handleFilterDate(date) === selectedOptionPeriod.toUpperCase())
      );
    }
    return originalRows.filter(({ type }) => type === selectedOptionType);
  }
  if (selectedOptionPeriod) {
    return originalRows.filter(({ date }) =>
      selectedOptionPeriod === labelPeriod
        ? handleFilterDate(date) === handleFilterDate()
        : handleFilterDate(date) === selectedOptionPeriod.toUpperCase()
    );
  }

  return originalRows.filter(
    ({ date }) => handleFilterDate(date) === handleFilterDate()
  );
};

export { handleFilterRows, handleFilterDate };

interface ITableProps {
  type: string;
  id: number;
  name: string;
  price: number;
  date: string;
  fk_expense_type_id: number;
}
interface ISelectProps {
  name: string;
  id: number;
}

interface IMetrics {
  remains: string;
  expenses: number;
  entries: number;
}

interface IDataExpenseDto {
  price: number;
  name: string;
  observation?: string;
  date: string;
  fk_expense_type_id: number;
}

export type { ITableProps, ISelectProps, IMetrics, IDataExpenseDto };

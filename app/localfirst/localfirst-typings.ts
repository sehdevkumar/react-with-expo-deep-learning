export type ExpenseType = { 
    id: string;
    description: string;
    amount: number;
    date: string;
}



export type ExpensesState = {
    expenses: ExpenseType[];
    addExpense: (expense: ExpenseType) => void;
    removeExpense: (id: string) => void;
    updateExpense: (id: string, isSync:boolean) => void;
}
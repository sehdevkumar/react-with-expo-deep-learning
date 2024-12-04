import { create, createStore } from "zustand";
import { ExpensesState, ExpenseType } from "./localfirst-typings";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";



const InitialExpenses: ExpenseType[] = [
    {
        id: "e1",
        description: "A pair of shoes",
        amount: 59.99,
        date: "2021-12-19",
      },
      {
        id: "e2",
        description: "A pair of trousers",
        amount: 89.99,
        date: "2021-12-19",
      },
      {
        id: "e3",
        description: "Some bananas",
        amount: 99.99,
        date: "2021-12-19",
      },
];



export const expenseStore = create<ExpensesState>() (
    persist(
        (set,get) => (
             {
                 addExpense: (expense) => set((state) => ({ expenses: [...get().expenses,  {...expense ,isSync: false}]})),
                 removeExpense: (id) => set((state) => ({ expenses: get().expenses.filter((expense) => expense.id !== id) })),
                 updateExpense: (id,isSync) => set((state) => ({ expenses: get().expenses.map((expense) => (expense.id === id ? { ...expense, isSync: isSync } : expense)) })),
                 expenses: InitialExpenses
             }
        ),
        { name: 'expense-storage', storage: createJSONStorage(() => AsyncStorage),},
      
      ),
)


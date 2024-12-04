import { create, createStore } from "zustand";
import { ExpensesState, ExpenseType } from "./localfirst-typings";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";



/**
 *  Initial Expenses Data for testing purposes
 */
const InitialExpenses: ExpenseType[] = [
    
];


/** We are building a local first app so we need to use zustand and persist state */
export const expenseStore = createStore<ExpensesState>() (
    persist(
        (set,get) => (
             {
                 addExpense: async (expense) => {
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                    set((state) => ({ expenses: [...get().expenses,  {...expense ,isSync: false}]}));
                 },
                 removeExpense: (id) => set((state) => ({ expenses: get().expenses.filter((expense) => expense.id !== id) })),
                 updateExpense: (id,isSync) => set((state) => ({ expenses: get().expenses.map((expense) => (expense.id === id ? { ...expense, isSync: isSync } : expense)) })),
                 expenses: InitialExpenses
             }
        ),
        { name: 'expense-storage', storage: createJSONStorage(() => AsyncStorage),},
      
      ),
)


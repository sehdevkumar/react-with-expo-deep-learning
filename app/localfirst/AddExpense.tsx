import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { z } from "zod";
import { useStore } from "zustand";
import { expenseStore } from "./zustandStore";
import { ExpenseType } from "./localfirst-typings";

const addExpenseSchema = z.object({
    amount: z.number().min(1),
    description: z.string().optional(),
    date: z.string().optional(),
});

const AddExpense = () => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const addExpense = useStore(expenseStore, (state) => state.addExpense);

    const handleAddExpense = async () => {
        setIsAdding(true);
        const newExpense: ExpenseType = {
            amount: Number(amount),
            description,
            date: new Date().toISOString(),
            id: Math.random().toString(),
        } as unknown as ExpenseType;

        try {
            addExpenseSchema.parse(newExpense);
            addExpense(newExpense as ExpenseType);
        } catch (error) {
            console.error(error);
        } finally {
            setIsAdding(false);
        }
    };

    return (
        <View className="flex flex-col gap-2 bg-gray-800 rounded-lg p-4 border border-gray-600">
            <TextInput
                className="text-white bg-transparent px-2 py-1 border border-gray-600"
                placeholder="Amount"
                keyboardType="number-pad"
                placeholderTextColor="rgba(255,255,255,0.3)"
                value={amount}
                onChangeText={setAmount}
            />
            <TextInput
                className="text-white bg-transparent px-2 py-1 border border-gray-600"
                placeholder="Description"
                placeholderTextColor="rgba(255,255,255,0.3)"
                value={description}
                onChangeText={setDescription}
            />
            <Pressable
                className="bg-blue-500 p-2 rounded-lg min-h-[40px] min-w-[100px] flex items-center justify-center"
                onPress={handleAddExpense}
                disabled={isAdding}
            >
                <Text className="text-white select-none">
                    {isAdding ? "Adding..." : "Add"}
                </Text>
            </Pressable>
        </View>
    );
};

export default AddExpense;

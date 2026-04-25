import { twMerge } from "tailwind-merge";

export type TransactionProp = {
    title: string,
    date: string,
    amount: number,
    сurrentBalance: number,
    type: 'вводы' | 'выводы' | 'ставки',
}

export const Transaction = ({ title, date, amount, type, сurrentBalance }: TransactionProp) => {
    return (
        <div className="px-3 pt-3 grid-rows-3 w-full border-t border-stone-300 pb-2">
            <p className="text-xs text-zinc-400 font-sans row-start-1">{date}</p>
            <div className="inline-flex justify-between w-full row-start-2 text-sm">
                <p>{title}</p>
                <p className={twMerge(
                    "font-semibold",
                    type == 'вводы' ? "text-green-600" : "text-gray-800 font-normal"
                    )}>{type == 'выводы' ? "-" : ""}{amount.toFixed(2)} BYN
                </p> 
            </div>
            <p className="text-xs text-zinc-400 font-sans row-start-3">Баланс: {сurrentBalance.toFixed(2)}</p>
        </div>
    )
}
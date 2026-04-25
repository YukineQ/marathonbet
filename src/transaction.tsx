import { twMerge } from "tailwind-merge";

type TransactionProp = {
    title: string,
    date: string,
    amount: number,
    сurrentBalance: number,
    type: 'plus' | 'minus',
}

export const Transaction = ({ title, date, amount, type, сurrentBalance }: TransactionProp) => {
    return (
        <div className="px-3 pt-3 grid-rows-3 w-full border-b border-stone-300 pb-2">
            <p className="text-xs text-zinc-400 font-sans row-start-1">{date}</p>
            <div className="inline-flex justify-between w-full row-start-2 text-sm">
                <p>{title}</p>
                <p className={twMerge(
                    "font-semibold",
                    type == 'plus' ? "text-green-600" : "text-red-500"
                    )}>{amount.toFixed(2)} BYN
                </p> 
            </div>
            <p className="text-xs text-zinc-400 font-sans row-start-3">Баланс: {сurrentBalance}</p>
        </div>
    )
}
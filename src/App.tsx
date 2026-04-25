import './App.css'
import { Transaction, type TransactionProp } from './transaction'

type Day = {
  date: string;
  transactions: TransactionProp[];
}

const data: Day[] = [
  {
    date: "Суббота, 15 ноября 2025",
    transactions: [
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 14.21,
        сurrentBalance: 14.21,
        date: "21:27",
        type: "plus",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 40.40,
        сurrentBalance: 40.40,
        date: "21:11",
        type: "plus",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 12.97,
        сurrentBalance: 12.97,
        date: "20:13",
        type: "plus",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 170.00,
        сurrentBalance: 170.00,
        date: "17:58",
        type: "plus",
      },
    ]
  },
  {
    date: 'Четверг, 13 ноября 2025',
    transactions: [
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 7.48,
        сurrentBalance: 7.54,
        date: "20:07",
        type: "plus",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 10.00,
        сurrentBalance: 10.06,
        date: "19:16",
        type: "plus",
      },
      {
        title: "Снятие с игрового счета",
        amount: 24.00,
        сurrentBalance: 0.06,
        date: "18:49",
        type: "minus",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 2.67,
        сurrentBalance: 2.67,
        date: "15:18",
        type: "plus",
      },
      {
        title: "Снятие с игрового счета",
        amount: 23.96,
        сurrentBalance: 10.00,
        date: "08:48",
        type: "minus",
      },
    ]
  },
  {
    date: 'Среда, 12 ноября 2025',
    transactions: [
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 15.00,
        сurrentBalance: 15.00,
        date: "19:43",
        type: "plus",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 80.00,
        сurrentBalance: 80.00,
        date: "18:33",
        type: "plus",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 31.71,
        сurrentBalance: 31.71,
        date: "12:56",
        type: "plus",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 350.00,
        сurrentBalance: 350.00,
        date: "12:11",
        type: "plus",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 9.15,
        сurrentBalance: 82.65,
        date: "11:08",
        type: "plus",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 390.00,
        сurrentBalance: 390.10,
        date: "08:38",
        type: "plus",
      },
    ]
  },
  {
    date: 'Вторник, 11 ноября 2025',
    transactions: [
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 390.00,
        сurrentBalance: 390.00,
        date: "08:59",
        type: "plus",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 30.00,
        сurrentBalance: 30.00,
        date: "08:39",
        type: "plus",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 230.00,
        сurrentBalance: 230.00,
        date: "08:26",
        type: "plus",
      },
    ]
  }
];

function App() {

  return (
    <>
      <div className='sticky h-20 bg-[#062247] flex justify-center flex-col items-center'>
        <h2 className='text-white text-lg font-semibold'>История</h2>

        <div className='flex w-full px-3 pt-1'>
          <div className='border w-full h-8 text-center text-white rounded-l border-[#53678A] pt-0.5 align-middle'>
            <span className='text-xs'>История ставок</span>
          </div>
          <div className='border-r border-t border-b w-full h-8 text-center text-white rounded-r bg-[#53678A] border-[#53678A] align-middle pt-0.5'>
            <span className='text-xs'>История игрового счета</span>
          </div>
        </div>
      </div>
      <div>
        <div>
          {data.map(item => (
            <>
              <div className='pb-2 pt-3'>
                <h3 className='pl-3 font-semibold'>{item.date}</h3>
              </div>
              {item.transactions.map(transaction => (
                <Transaction
                  title={transaction.title}
                  amount={transaction.amount}
                  сurrentBalance={transaction.сurrentBalance}
                  date={transaction.date}
                  type={transaction.type}
                />
              ))}
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default App

import { useEffect, useState } from 'react';
import './App.css'
import { Transaction, type TransactionProp } from './transaction'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import type { SelectRootChangeEventDetails } from '@base-ui/react';
import { format, parse } from "date-fns"
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover';
import { Button } from './components/ui/button';
import { CalendarIcon, ChevronLeft } from 'lucide-react';
import { Calendar } from './components/ui/calendar';
import type { DateRange } from 'react-day-picker';
import { ru } from 'date-fns/locale';

type Day = {
  date: string;
  transactions: TransactionProp[];
}

export type TransactionWithFilterType = 'вводы' | 'выводы' | 'ставки' | 'все';

const data: Day[] = [
  {
    date: "Суббота, 15 ноября 2025",
    transactions: [
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 14.21,
        сurrentBalance: 14.21,
        date: "21:27",
        type: "вводы",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 40.40,
        сurrentBalance: 40.40,
        date: "21:11",
        type: "вводы",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 12.97,
        сurrentBalance: 12.97,
        date: "20:13",
        type: "вводы",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 170.00,
        сurrentBalance: 170.00,
        date: "17:58",
        type: "вводы",
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
        type: "вводы",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 10.00,
        сurrentBalance: 10.06,
        date: "19:16",
        type: "вводы",
      },
      {
        title: "Снятие с игрового счета",
        amount: 24.00,
        сurrentBalance: 0.06,
        date: "18:49",
        type: "выводы",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 2.67,
        сurrentBalance: 2.67,
        date: "15:18",
        type: "вводы",
      },
      {
        title: "Снятие с игрового счета",
        amount: 23.96,
        сurrentBalance: 10.00,
        date: "08:48",
        type: "выводы",
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
        type: "вводы",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 80.00,
        сurrentBalance: 80.00,
        date: "18:33",
        type: "вводы",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 31.71,
        сurrentBalance: 31.71,
        date: "12:56",
        type: "вводы",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 350.00,
        сurrentBalance: 350.00,
        date: "12:11",
        type: "вводы",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 9.15,
        сurrentBalance: 82.65,
        date: "11:08",
        type: "вводы",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 390.00,
        сurrentBalance: 390.10,
        date: "08:38",
        type: "вводы",
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
        type: "вводы",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 30.00,
        сurrentBalance: 30.00,
        date: "08:39",
        type: "вводы",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 230.00,
        сurrentBalance: 230.00,
        date: "08:26",
        type: "вводы",
      },
    ]
  },
  {
    date: 'Понедельник, 10 ноября 2025',
    transactions: [
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 200.00,
        сurrentBalance: 200.00,
        date: "21:52",
        type: "вводы",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 34.62,
        сurrentBalance: 34.62,
        date: "21:19",
        type: "вводы",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 230.00,
        сurrentBalance: 230.00,
        date: "08:26",
        type: "вводы",
      },
      {
        title: "Снятие с игрового счета",
        amount: 42.76,
        сurrentBalance: 160.00,
        date: "20:16",
        type: "выводы",
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 52.00,
        сurrentBalance: 52.00,
        date: "19:06",
        type: "вводы",
      },
    ],
  },
  {
    date: 'Воскресенье, 09 ноября 2025',
    transactions: [
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 6.31,
        сurrentBalance: 6.31,
        date: "23:07",
        type: "вводы"
      },
      {
        title: "Снятие с игрового счета",
        amount: 19.20,
        сurrentBalance: 13.60,
        date: "21:51",
        type: "выводы"
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 14.90,
        сurrentBalance: 14.90,
        date: "21:22",
        type: "вводы"
      },
      {
        title: "Снятие с игрового счета",
        amount: 38.40,
        сurrentBalance: 12.62,
        date: "18:59",
        type: "выводы"
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 67.45,
        сurrentBalance: 67.45,
        date: "13:59",
        type: "вводы"
      },
      {
        title: "Снятие с игрового счета",
        amount: 78.52,
        сurrentBalance: 200.00,
        date: "13:26",
        type: "выводы"
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 37.42,
        сurrentBalance: 37.42,
        date: "13:09",
        type: "вводы"
      },
    ]
  },
  {
    date: "Суббота, 8 ноября 2025",
    transactions: [
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 45.99,
        сurrentBalance: 45.99,
        date: "15:42",
        type: "вводы"
      },
      {
        title: "Снятие с игрового счета",
        amount: 57.60,
        сurrentBalance: 0.00,
        date: "11:57",
        type: "выводы"
      },
    ]
  },
  {
    date: "Пятница, 7 ноября 2025",
    transactions: [
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 37.77,
        сurrentBalance: 37.77,
        date: "22:47",
        type: "вводы"
      },
      {
        title: "Снятие с игрового счета",
        amount: 112.44,
        сurrentBalance: 200.00,
        date: "15:09",
        type: "выводы"
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 65.78,
        сurrentBalance: 65.78,
        date: "14:08",
        type: "вводы"
      },
    ]
  },
  {
    date: "Четверг, 7 ноября 2025",
    transactions: [
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 37.77,
        сurrentBalance: 37.77,
        date: "22:47",
        type: "вводы"
      },
      {
        title: "Снятие с игрового счета",
        amount: 112.44,
        сurrentBalance: 200.00,
        date: "15:09",
        type: "выводы"
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 65.78,
        сurrentBalance: 65.78,
        date: "14:08",
        type: "вводы"
      },
    ]
  },
  {
    date: "Среда, 6 ноября 2025",
    transactions: [
      {
        title: "Снятие с игрового счета",
        amount: 76.80,
        сurrentBalance: 400.00,
        date: "22:14",
        type: "выводы"
      },
      {
        title: "Снятие с игрового счета",
        amount: 57.59,
        сurrentBalance: 200.00,
        date: "08:57",
        type: "выводы"
      },
    ]
  },
  {
    date: "Вторник, 5 ноября 2025",
    transactions: [
      {
        title: "Снятие с игрового счета",
        amount: 17.70,
        сurrentBalance: 400.00,
        date: "20:46",
        type: "выводы"
      },
      {
        title: "Снятие с игрового счета",
        amount: 39.63,
        сurrentBalance: 200.00,
        date: "13:06",
        type: "выводы"
      },
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 21.98,
        сurrentBalance: 21.98,
        date: "10:58",
        type: "вводы"
      },
    ]
  },
  {
    date: "Понедельник, 4 ноября 2025",
    transactions: [
      {
        title: "Перевод на игровой счет (ЕРИП)",
        amount: 102.22,
        сurrentBalance: 102.22,
        date: "23:24",
        type: "вводы"
      },
      {
        title: "Снятие с игрового счета",
        amount: 112.40,
        сurrentBalance: 600,
        date: "18:48",
        type: "выводы"
      },
      {
        title: "Снятие с игрового счета",
        amount: 34.90,
        сurrentBalance: 600,
        date: "13:01",
        type: "выводы"
      },
    ]
  }
];

interface DatePickerWithRangeProps {
  value?: DateRange;
  onDateChange?: (range: DateRange | undefined) => void;
}

function DatePickerWithRange({ value, onDateChange }: DatePickerWithRangeProps) {
  const [localDate, setLocalDate] = useState<DateRange | undefined>();

  // Обновляем локальный стейт при изменениях value
  useEffect(() => {
    setLocalDate(value);
  }, [value]);

  const handleRangeChange = (range: DateRange | undefined) => {
    setLocalDate(range);
    onDateChange?.(range); // передаем изменение родителю
  };

  return (
    <Popover>
      <PopoverTrigger className='w-1/2 pb-1 mr-2'>
        <Button
          variant="outline"
          id="date-picker-range"
          className="justify-start px-2.5 font-normal w-full mx-2 overflow-clip"
          size='sm'
        >
          <CalendarIcon />
          {localDate?.from ? (
            localDate.to ? (
              <>
                {format(localDate.from, "LLL dd, y", { locale: ru })} -{" "}
                {format(localDate.to, "LLL dd, y", { locale: ru })}
              </>
            ) : (
              format(localDate.from, "LLL dd, y")
            )
          ) : (
            <span>Выберите дату</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          defaultMonth={localDate?.from}
          selected={localDate}
          onSelect={handleRangeChange}
          numberOfMonths={2}
          locale={ru}
          disabled={{ to: new Date(2025, 10, 3), from: new Date(2000, 0, 1) }}
        />
      </PopoverContent>
    </Popover>
  );
}

function App() {

  const [selectedCategory, setSelectedCategory] = useState<TransactionWithFilterType>('все');
  const [filteredData, setFilteredData] = useState<Day[]>(data);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({ from: new Date(), to: new Date() });

  const handleSelectChange: (
    value: 'вводы' | 'выводы' | 'ставки' | 'все' | null,
    eventDetails: SelectRootChangeEventDetails
  ) => void = (value) => {
    if (value === null || value === 'все') {
      // показать все
      setFilteredData(data);
    } else {
      const filteredDays = data
        .map(day => {
          const filteredTransactions = day.transactions.filter(t => t.type === value);
          return filteredTransactions.length > 0 ? { ...day, transactions: filteredTransactions } : null;
        })
        .filter(Boolean) as typeof data;
      setFilteredData(filteredDays);
    }

    setSelectedCategory(value!)
    // вызов колбэка, если нужно:
    // onValueChange?.(value, eventDetails);
  };

  const handleDateChange = (range?: DateRange) => {
    setDateRange(range);
    // Тут делайте фильтрацию данных по диапазону, которая будет у вас в родительском
    if (range?.from && range?.to) {
      const filtered = data.filter(day => {
        const formatString = "EEEE, d MMMM yyyy";
        const dayDate = parse(day.date, formatString, new Date(), { locale: ru });
        console.log(dayDate)
        return dayDate >= range.from! && dayDate <= range.to!;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <>
      <div className='fixed top-0 w-full'>
        <div className='h-20 w-full bg-[#062247] flex justify-center flex-col items-center'>

          <a href='https://www.marathonbet.by/' className='absolute top-0 left-0 pl-2 pt-2'><ChevronLeft className='text-white' /></a>

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

        <div className='px-2 pt-1 bg-white border-b border-stone-200 h-12 flex'>
          <Select id="category-select" value={selectedCategory} onValueChange={handleSelectChange}>
            <SelectTrigger className='w-1/2 mt-1' size='sm'>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="все">все</SelectItem>
              <SelectItem value="вводы">вводы</SelectItem>
              <SelectItem value="выводы">выводы</SelectItem>
              <SelectItem value="ставки">ставки</SelectItem>
            </SelectContent>
          </Select>

          <DatePickerWithRange value={dateRange} onDateChange={handleDateChange} />
        </div>
      </div>
      <div className='mt-36'>
        <div>
          {filteredData.map(item => (
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

import './App.css'
import { Transaction } from './transaction'

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
          <div className='border-b border-stone-300 py-2'>
            <h3 className='pl-3 font-semibold'>Суббота, 15 ноября 2025</h3>
          </div>
          <Transaction
            title="Перевод на игровой счет (ЕРИП)"
            amount={14.21}
            сurrentBalance={14.21}
            date="21:27"
            type="plus"
          />
          <Transaction
            title="Перевод на игровой счет (ЕРИП)"
            amount={40.00}
            сurrentBalance={40.00}
            date="21:11"
            type="plus"
          />
          <Transaction
            title="Перевод на игровой счет (ЕРИП)"
            amount={12.97}
            сurrentBalance={12.97}
            date="20:13"
            type="plus"
          />
          <Transaction
            title="Перевод на игровой счет (ЕРИП)"
            amount={170.00}
            сurrentBalance={170.00}
            date="17:58"
            type="plus"
          />
        </div>
      </div>
    </>
  )
}

export default App

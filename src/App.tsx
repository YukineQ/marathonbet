import './App.css'
import { Transaction } from './transaction'

function App() {

  return (
    <>
      <div className='sticky h-20 bg-[#062247] flex justify-center flex-col items-center'>
        <h2 className='text-white text-lg font-semibold'>История</h2>

        <div className='flex w-full px-3 pt-1'>
          <div className='border w-full h-8 text-center text-white rounded-l border-[#53678A] pt-1 align-middle'>
            <span className='text-xs'>История ставок</span>
          </div>
          <div className='border-r border-t border-b w-full h-8 text-center text-white rounded-r bg-[#53678A] border-[#53678A] align-middle pt-1'>
             <span className='text-xs'>История игрового счета</span>
          </div>
        </div>
      </div>
      <div>
         <Transaction 
            title="Перевод на игровой счет (ЕРИП)" 
            amount={14.21} 
            сurrentBalance={14.21}
            date="21:27" 
            type="plus" 
          />
      </div>
    </>
  )
}

export default App

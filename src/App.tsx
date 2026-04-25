import './App.css'

function App() {

  return (
    <>
      <div className='sticky h-18 bg-[#062247] flex justify-center flex-col items-center'>
        <h2 className='text-white text-lg font-semibold'>История</h2>

        <div className='flex w-full px-3 pt-1'>
          <div className='border w-full h-6 text-center text-white rounded-l border-[#53678A]'>
            <span className='text-xs'>История ставок</span>
          </div>
          <div className='border-r border-t border-b w-full h-6 text-center text-white rounded-r bg-[#53678A] border-[#53678A]'>
             <span className='text-xs'>История игрового счета</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

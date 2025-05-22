import React from 'react'
import Navbar from './Components/Navbar';
import Info from './Components/Info';
import Chart from './Components/Chart';
import Stats from './Components/Stats';
import Transactions from './Components/Transaction';
import DoughnutChart from './Components/DoughnutChart';
import Accounts from './Components/Accounts';



const App = () => {
  const theme = "light"
  return (
    <main className={theme}>
      <div className=" w-full px-6 md:bg-white dark:bg-slate-900">
        <Navbar/>

        <div className="px-0 md:px-5 2xl:px-20">
          <Info
          
          title='Dashboard'

          subTitle= 'Monitor your financial activities'
          

          />
          <Stats/>

          <div className=" flex w-full flex-col-reverse md:flex-row items-center gap-10">
            <Chart />
            <DoughnutChart/>
          </div>


          <div className="flex flex-col-reverse md:flex-row gap-0 md:gap-10 2xl:gap-20">
             <Transactions/>
             <Accounts/>
          </div>



        </div>

      </div>

    </main>
  )
}

export default App
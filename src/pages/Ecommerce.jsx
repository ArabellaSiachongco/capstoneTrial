import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

// information and metrix for the chart in homepage

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div classaName="flex justify-between items-center">
            <p className="font-bold text-gray-400">Earnings</p>
            <p className="text-2xl">P50.00</p>
          </div>
          <div className="mt-6">
            <Button color="white" bgColor={currentColor}text="Download" borderRadius="10px" size="md"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce
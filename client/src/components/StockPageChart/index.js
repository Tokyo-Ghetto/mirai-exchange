import React from 'react'
import { Line } from 'react-chartjs-2'


 
const StockPageChart = () => {
    return (
        <>
            <Line
                data={{
                    labels: ['A','B','C','D','E','F'],
                    datasets: [{
                      label: '# of votes',
                      data: [1, 6, 2, 9, 2, 6],
                      backgroundColor: ['aqua']
                    }]
                }}
                height={200}
                width={300}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </>
    )
}

export default StockPageChart

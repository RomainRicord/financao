import data from '../../assets/data.json';

import dayjs from 'dayjs'

export const chart = () => {

    let date = []

    {data.map((item, index) => {

        {item.incomes.map((item2, index2) => {              
  
            if (typeof(date[index]) == "undefined") {
                date[index] = []
            }
            
            console.log("Inscription",item2.date,Number(item2.amount.replace("€","").replace(",","")),index)
            
            const n = Math.ceil(Number(item2.amount.replace("€","").replace(",","")))

            date[index].push({date:item2.date,amount:n})
  
        })}

    })}



    let line = {
        labels: ['01','02',"03","04","05","06","07","08","09","10","11","12","13"],
        datasets: [
          {
            data: [0,0,0,0,0,0,0,0,0,0,0,0,0],
            strokeWidth: 1, // optional
          },
        ],
      };

      console.log("DATA = ",line.datasets[0].data)

    {date.map((item, index) => {              

        //console.log(item)

        {item.map((item2,index2) => {

            //console.log(dayjs(item2.date).locale('fr-FR').format('MM'),Math.ceil(item2.amount))

            let indexor = String(dayjs(item2.date).locale('fr-FR').format('MM'))

            if (indexor.charAt(0) == "0") {
                indexor.replace(indexor.charAt(0),"")
            }

            indexor = Number(indexor)-1
            
            console.log(indexor,line.labels[indexor])

            if (typeof(line.datasets[0].data[indexor]) == "undefined") {
                line.datasets[0].data[indexor] = 0
            }

            console.log("ALL DATA",line.datasets[0].data)
            console.log("WHAT I AM",line.datasets[0].data[indexor])

            line.datasets[0].data[indexor] = Math.ceil(line.datasets[0].data[indexor] + Math.ceil(item2.amount))

        })}

        //console.log(dayjs(item2.date).locale('fr-FR').format('MM'),Math.ceil(item2.amount))
        
        //line.labels[line.labels.length+1] = dayjs(date).locale('fr-FR').format('MM')
        //line.datasets[0].data[line.datasets[0].data.length+1] = Math.ceil(item2.amount)

    })}     

    console.log(date)

    return {line}
}


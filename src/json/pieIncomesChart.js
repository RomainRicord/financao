import data from '../../assets/data.json';

import dayjs from 'dayjs'

export const pieIncomesChart = () => {

    let category = []

    {
        data.map((item, index) => {

            {
                item.expenses.map((item2, index2) => {

                    if (typeof (category[item2.category]) == "undefined") {
                        category[item2.category] = 0
                    }

                    console.log("Inscription", item2.date, Number(item2.amount.replace("€", "").replace(",", "")), index)

                    const n = Math.ceil(Number(item2.amount.replace("€", "").replace(",", "")))

                    category[item2.category] = category[item2.category] + n

                })
            }

        })
    }



    let line = {

    };



    {
        category.map((item, index) => {
            line.push(item)

            //console.log(item)

            // {item.map((item2,index2) => {

            //     line.datasets[0].data[indexor] = Math.ceil(line.datasets[0].data[indexor] + Math.ceil(item2.amount))

            // })}

            //console.log(dayjs(item2.date).locale('fr-FR').format('MM'),Math.ceil(item2.amount))

            //line.labels[line.labels.length+1] = dayjs(date).locale('fr-FR').format('MM')
            //line.datasets[0].data[line.datasets[0].data.length+1] = Math.ceil(item2.amount)

        })
    }

    console.log(date)

    return { line }
}



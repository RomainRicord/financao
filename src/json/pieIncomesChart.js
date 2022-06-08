import data from '../../assets/data.json';

const colorcategory = {
    "Alimentation":"#ff0000",
    "Transport":"#00ff00",
    "Factures":"#0000ff",
    "Santé":"#db6a0d",
    "Divers":"#00ffff",
    "Impôts":"#ffff00",
    "Assurance":"#ff00ff",
    "Loyer":"#630ddb",
    "Salaire":"#85db0d",
    "Autres":"#7f4ff7",
    "Dépenses":"#e3445f",
    "Autres":"#11d94d",
}

const colorcategory2 = {
    "Prestations sociales":"#ff0000",
    "Revenu foncier":"#00ff00",
    "Salaire et assimilé":"#0000ff",
    "Revenu financier":"#db6a0d",
    "Pension alimentaire":"#00ffff",
    "Rente":"#ffff00",
    "Allocation chômage":"#ff00ff",
    "Revenu exceptionnel":"#630ddb",
    "Autre revenu":"#85db0d"
}

export const pieIncomesChart = () => {

    let category = []

    {
        data.map((item, index) => {

            {
                item.incomes.map((item2, index2) => {

                    if (typeof (category[item2.category]) == "undefined") {
                        category[item2.category] = {amount:0,category:item2.category,color:colorcategory2[item2.category]}
                        console.log("Category " + item2.category + " is undefined")
                    }

                    //console.log("Inscription", item2.date, Number(item2.amount.replace("€", "").replace(",", "")), index)

                    const n = Math.ceil(Number(item2.amount.replace("€", "").replace(",", "")))

                    category[item2.category] = {amount:category[item2.category].amount+n,category:item2.category,color:colorcategory2[item2.category]}
                    
                })
            }

        })
    }

    let line = []

    for (const [k,v] of Object.entries(category)) {

        let t = {}

        //console.log("Inscription", item, index)

        t.name = v.category
        t.amount = v.amount
        t.color = v.color
        t.legendFontColor = "#7F7F7F"
        t.legendFontSize = 15

        console.log('push', t)
        
        line.push(t)
    }
    

    //console.log(date)

    return { line }
}



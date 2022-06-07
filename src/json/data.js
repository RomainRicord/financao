const data = require('../../assets/data.json');

export const data_ = () => {

    const revenuuser = []

    {data.map((item, index) => {
        {item.incomes.map((item2, index2) => {              
  
          if (Number(item2.amount.replace("€","").replace(",","")) > 0) {
  
            if (typeof(revenuuser[index]) == "undefined") {
                revenuuser[index] = 0
            }

            revenuuser[index] = Math.ceil(Number(revenuuser[index]) + Number(item2.amount.replace("€","").replace(",","")))

          }
  
        })}

        {item.expenses.map((item2, index2) => {              
  
          if (Number(item2.amount.replace("€","").replace(",","")) > 0) {
  
            if (typeof(revenuuser[index]) == "undefined") {
                revenuuser[index] = 0
            }

            //console.log("MOINS")

            revenuuser[index] = Math.ceil(Number(revenuuser[index]) - Number(item2.amount.replace("€","").replace(",","")))

          }
  
        })}
    })}

    //console.log("Test",revenuuser)

    return revenuuser
}

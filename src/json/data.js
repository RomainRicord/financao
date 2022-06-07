const data = require('../../assets/data.json');

export const data_ = () => {

    const revenuuser = []

    console.log("data_ init")

    {data.map((item, index) => {

        console.log("Test 2")
     
        {item.incomes.map((item2, index2) => {              
  
          //console.log(item2.montant,item2.amount)
  
          if (Number(item2.amount.replace("€","").replace(",","")) > 0) {
  
            if (typeof(revenuuser[index]) == "undefined") {
                revenuuser[index] = 0
            }
            
            //console.log("yo",revenuuser.length)
            //console.log("aditionne",item2.amount,index)
            revenuuser[index] = Math.ceil(Number(revenuuser[index]) + Number(item2.amount.replace("€","").replace(",","")))
            
            //console.log("revenuuser",revenuuser,revenuuser)
          }
  
        })}
    })}

    //console.log("Test",revenuuser)

    return revenuuser
}

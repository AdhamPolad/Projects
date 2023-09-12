class Currency{
    constructor(){
        this.url = "https://api.fastforex.io/fetch-all?api_key=0ac9f5ffb8-b92da231d9-s0tehcbase_currency="
 
    }
 async  exchange(amount, firstCurrency, secondCurrency){
     const response =  await fetch(`${this.url}${firstCurrency}`) ;
      console.log(response);
   }

}

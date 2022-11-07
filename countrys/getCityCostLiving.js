function getCitysCostLiving(city,country){
    try{
        const encodedParams = new URLSearchParams();
        encodedParams.append("cities", "[{\"name\":\""+city+"\",\"country\":\""+country+"\"}]");
        encodedParams.append("currencies", "[\"USD\",\"Euro (example of wrong currency code)\",\"ILS\"]");
        
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'c11f91cf96msh01ebd70f0c3b0b8p15dc63jsn80f33823c486',
                'X-RapidAPI-Host': 'cities-cost-of-living1.p.rapidapi.com'
            },
            body: encodedParams
        };
        
        fetch('https://cities-cost-of-living1.p.rapidapi.com/get_cities_details_by_name', options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
              if(response.data){
                 return displayResult(response.data[0])
              }else{
                errorFunc(response.message)
              }
            
            })
            .catch(err => {console.error(err) });
  
  
      
  
    
       
  
     }catch(e){
         console.log(e)
  
     }
}
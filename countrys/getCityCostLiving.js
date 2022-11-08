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
                clearResult()
                console.log(response)
              
              if(response.data){
                let data = JSON.stringify(response.data);
                localStorage.setItem(response.data[0].name,data);
                 return displayResult(response.data[0]);

              }else{
                let name = city;
                let localstorage = localStorage.getItem(name);
                let flag = false
                if(localstorage){
                    console.log('have it on local storage the city details')
                    flag = true
                }
                
                if(flag){
                    console.log('even if you are not ready for the day it cannot always be night  ! !!')
                    let json = JSON.parse(localstorage);
                    return displayResult(json[0]);
                }
                return errorFunc(response.message)

                
              }



           

                if(response.message && !flag){
                    return errorFunc(response.message)
                }


             

            
            })
            .catch(err => {console.error(err) });
  
  
      
  
    
       
  
     }catch(e){
         console.log(e)
  
     }
}
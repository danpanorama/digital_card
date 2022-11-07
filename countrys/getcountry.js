

async function getcountrys(){
    

    try{
          let arr;

          const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'c11f91cf96msh01ebd70f0c3b0b8p15dc63jsn80f33823c486',
                'X-RapidAPI-Host': 'cities-cost-of-living1.p.rapidapi.com'
            }
        };
        
      await  fetch('https://cities-cost-of-living1.p.rapidapi.com/get_cities_list', options)
            .then(response => response.json())
            .then(response => {

                console.log(response)
                arr = response
                return response
            })
            .catch(err => console.error(err));


            return arr

     }catch(e){
         console.log(e)

     }
}





async function getcountrys(){
    

    try{
          let arr;

          const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3499a8a07dmsh84b0fd796485706p10a2aajsn8544a3bf69a9',
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



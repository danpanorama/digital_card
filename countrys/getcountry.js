

async function getcountrys(){
    

    try{
          let arr;

          const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '6380e2721emsh09029194b37c990p12e2dajsn13c1fd802b5f',
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



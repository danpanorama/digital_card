window.addEventListener('load',async(e)=>{
 


    try{
          

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '85e3ccb5b5msh1aaf4ec27183919p1064ecjsnedb5af54024e',
                'X-RapidAPI-Host': 'cities-cost-of-living1.p.rapidapi.com'
            }
        };
        
      await  fetch('https://cities-cost-of-living1.p.rapidapi.com/get_cities_list', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

     }catch(e){
         console.log(e)

     }


    // document.getElementById('country').addEventListener('click' , async (e)=>{
    //     try{
          

        
    //         const encodedParams = new URLSearchParams();
    //         encodedParams.append("cities", "[{\"name\":\"Lisbon\",\"country\":\"Portugal\"},{\"name\":\"Paris\",\"country\":\"Spain (example of wrong country)\"},{\"name\":\"Hamilton\",\"country\":\"Bermuda\"},{\"name\":\"Saint Francisc (example of wrong city name)\",\"country\":\"United States\"}]");
    //         encodedParams.append("currencies", "[\"USD\",\"Euro (example of wrong currency code)\",\"CHF\"]");
            
    //         const options = {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/x-www-form-urlencoded',
    //                 'X-RapidAPI-Key': '3499a8a07dmsh84b0fd796485706p10a2aajsn8544a3bf69a9',
    //                 'X-RapidAPI-Host': 'cities-cost-of-living1.p.rapidapi.com'
    //             },
    //             body: encodedParams
    //         };
            
    //         fetch('https://cities-cost-of-living1.p.rapidapi.com/get_cities_details_by_name', options)
    //             .then(response => response.json())
    //             .then(response => console.log(response))
    //             .catch(err => console.error(err));

    //      }catch(e){
    //          console.log(e)

    //      }
    // })



    // document.getElementById('country2').addEventListener('click' , async (e)=>{
    //     try{
          

    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 'X-RapidAPI-Key': '3499a8a07dmsh84b0fd796485706p10a2aajsn8544a3bf69a9',
    //                 'X-RapidAPI-Host': 'cities-cost-of-living1.p.rapidapi.com'
    //             }
    //         };
            
    //      await   fetch('https://cities-cost-of-living1.p.rapidapi.com/get_cities_list', options)
    //             .then(response => response.json())
    //             .then(response => {
    //                 console.log(response)
    //                 const currentPage = 1;
    //                 const arrayPerPage = 4;
    //                 const indexOfLastProduct = currentPage * arrayPerPage;
    //                 const indexOfFirstProduct = indexOfLastProduct - arrayPerPage;
    //                 const currentArray = response.cities.slice(indexOfFirstProduct,indexOfLastProduct)
    //                 const paginate = (pageNumber) => currentPage=pageNumber;
                    
                    
    //                 const pagenum = []

   
    //                 for(let i = 1 ; i <= Math.ceil(response.cities / arrayPerPage); i++){
    //                     let div = document.createElement('div');
    //                     div.addEventListener('click',paginate);
    //                     div.innerText = i;

    //                     document.getElementById('res').appendChild(div);
    //                     pagenum.push(div);
                       
    //                 }

    //                 console.log(response,":::::")
    //             })
    //             .catch(err => console.error(err));

    //      }catch(e){
    //          console.log(e)

    //      }
    // })
})
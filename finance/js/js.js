window.addEventListener('load',()=>{
    let flag = true
    let popup = document.getElementById('popup')

    document.getElementById('bitcoin').addEventListener('click',(e)=>{
        console.log(flag)
        if(flag){
            popup.classList.remove('disabledery');
            document.getElementById('plus').innerText = "-"
            flag = false;

        }else{
            popup.classList.add('disabledery');
            document.getElementById('plus').innerText = "+"
           
            flag = true;
        }
        
    })




    let flag2 = true
    let popup2 = document.getElementById('popup2')
    document.getElementById('nadlan').addEventListener('click',(e)=>{
        if(flag2){
            popup2.classList.remove('disabledery');
            document.getElementById('plus2').innerText = "-"
            flag2 = false;

        }else{
            popup2.classList.add('disabledery');
            document.getElementById('plus2').innerText = "+"
           
            flag2 = true;
        }
        
    })



    document.getElementById('country').addEventListener('click' , async (e)=>{
        try{
          let curency = document.getElementById('cur').value;
          let cityname = document.getElementById('cityname').value;
          let countryname = document.getElementById("countryname").value
         let results =  document.getElementById('ress')

          if(cityname != "" || curency != "" || countryname != ""){
            const encodedParams = new URLSearchParams();
            encodedParams.append("cities", "[{\"name\":\""+cityname+"\",\"country\":\""+countryname+"\"}}]");
            encodedParams.append("currencies", "[\""+curency+"\",]");
            
            console.log(encodedParams)
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': '3499a8a07dmsh84b0fd796485706p10a2aajsn8544a3bf69a9',
                    'X-RapidAPI-Host': 'cities-cost-of-living1.p.rapidapi.com'
                },
                body: encodedParams
            };
            
            fetch('https://cities-cost-of-living1.p.rapidapi.com/get_cities_details_by_name', options)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));

          }

        
           

         }catch(e){
             console.log(e)

         }
    })



    document.getElementById('country2').addEventListener('click' , async (e)=>{
        try{
          

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '3499a8a07dmsh84b0fd796485706p10a2aajsn8544a3bf69a9',
                    'X-RapidAPI-Host': 'cities-cost-of-living1.p.rapidapi.com'
                }
            };
            
         await   fetch('https://cities-cost-of-living1.p.rapidapi.com/get_cities_list', options)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    const currentPage = 1;
                    const arrayPerPage = 4;
                    const indexOfLastProduct = currentPage * arrayPerPage;
                    const indexOfFirstProduct = indexOfLastProduct - arrayPerPage;
                    const currentArray = response.cities.slice(indexOfFirstProduct,indexOfLastProduct)
                    const paginate = (pageNumber) => currentPage=pageNumber;
                    
                    
                    const pagenum = []

   
                    for(let i = 1 ; i <= Math.ceil(response.cities / arrayPerPage); i++){
                        let div = document.createElement('div');
                        div.addEventListener('click',paginate);
                        div.innerText = i;

                        document.getElementById('res').appendChild(div);
                        pagenum.push(div);
                       
                    }

                    console.log(response,":::::")
                })
                .catch(err => console.error(err));

         }catch(e){
             console.log(e)

         }
    })


})
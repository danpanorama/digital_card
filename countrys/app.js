window.addEventListener('load', async () => {

    try {
       
        var list;
        var listtext = localStorage.getItem('arraycitys')
     
        if(listtext && listtext != "You have exceeded the rate limit per minute for your plan, BASIC, by the API provider"){
            console.log('have it on local storage so i pass it away')
             list = JSON.parse(listtext);
        }else{
            console.log('not haveing this on my local storage')
             list = await getcountrys()
             if(list.message){
                return errorFunc(list.message)
             }else{
                  let textlist = JSON.stringify(list)
            localStorage.setItem('arraycitys',textlist);
             }

          
        }


        if (list.message) {
            errorFunc(list.message)
            return
        }


       




        document.getElementById('searchinput').addEventListener('input', (e) => {

            let userText = e.target.value;
            console.log(userText)
            if(userText == ""){
                return  displayarr([])
            }
            let auto = list.cities.filter(
                (value) => value.name.toLowerCase().includes(userText.toLowerCase())
            );

            displayarr(auto)

        })


        console.log(list)
    } catch (e) {
        console.log(e)
    }

})
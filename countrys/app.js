window.addEventListener('load', async () => {

    try {
        // let list = await getcountrys()
        var listtext = localStorage.getItem('arraycitys')
        var list = JSON.parse(listtext)


        if (list.message) {
            errorFunc(list.message)
            return
        }


        //   let textlist = JSON.stringify(list)
        //     localStorage.setItem('arraycitys',textlist);




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
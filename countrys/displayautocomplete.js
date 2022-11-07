function displayarr(arr){
    let auto=document.getElementById('autocomplete');
    while (auto.firstChild) {
        auto.removeChild(auto.firstChild)
    }
  

    let firstChild = document.createElement('div')

    for(let i = 0; i < arr.length; i++){
        let div = document.createElement('div');
        div.classList.add('divauto')
        let pcityandcountry = document.createElement('p');
        pcityandcountry.classList.add('cityname')
        pcityandcountry.innerText =arr[i].country + ": "+ arr[i].name
        pcityandcountry.setAttribute('id',arr[i].country)
        pcityandcountry.setAttribute('title',arr[i].name)

        
        div.appendChild(pcityandcountry);
       
        div.addEventListener('click',getInputChoise)
        firstChild.appendChild(div);
    }

    auto.appendChild(firstChild)


}




function displayResult(arr){
    if(arr.message){
        return console.log(arr)
    }
    let cityname = arr.name;
    let countryname = arr.country;
    let rent_index = arr.rent_index;
    let insideDetails= arr.cost_of_living_details;
    let wayofShekel = insideDetails[1];
    let costOfLivingLoop = wayofShekel.details

    let result = document.getElementById('result');
 
    while (result.firstChild) {
        result.removeChild(result.firstChild)
    }

    let firstChild = document.createElement('div');
    result.appendChild(firstChild)

    let headers = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerText = countryname
    let h2 = document.createElement('h2');
    let rant = document.createElement('p');
    rant.innerText = rent_index
    h2.innerText = cityname
    headers.appendChild(h1)
    headers.appendChild(h2)
    headers.appendChild(rant)

    firstChild.appendChild(headers)


    
    for(let i = 0; i < costOfLivingLoop.length; i++){
        let item = document.createElement('p');
        item.innerText = costOfLivingLoop[i].Item;
        let range = document.createElement('p');
        range.innerText = costOfLivingLoop[i].Range;
        let value = document.createElement('p');
        value.innerText = costOfLivingLoop[i].Value;
        let div = document.createElement('div');
        div.classList.add('flexrowpluspadding');
        div.appendChild(item)
        div.appendChild(range)
        div.appendChild(value)

        firstChild.appendChild(div);

    }

   

}
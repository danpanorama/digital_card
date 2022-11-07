function getInputChoise (e){
    displayarr([])
    console.log("city name:"+e.target.title+" country name:"+e.target.id);
    getCitysCostLiving(e.target.title,e.target.id)


}
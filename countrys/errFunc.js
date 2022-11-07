function errorFunc(msg){

    

    document.getElementById('error').classList.add('show');
    document.getElementById('error').innerText = msg;
    dissapper()


    function dissapper(){
        setTimeout(hidding,5000);
        function hidding(){
            document.getElementById('error').classList.remove('show')
            document.getElementById('error').innerText = ""


        }

    }


}
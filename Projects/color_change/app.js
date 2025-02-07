const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
buttons.forEach(function (button){
     button.addEventListener('click',function(e){
        console.log(e.target);
        let id= e.target.id;
        switch(id){
            case "grey" : body.style.backgroundColor=id;
            case "yellow" : body.style.backgroundColor=id;
            case "blue" : body.style.backgroundColor=id;
            case "white" : body.style.backgroundColor=id;
        }
     })
})
//counter
var button=document.getElementById('counter');
button.onclick= function (){
    //create a request to the counter variable
    var request= new XMLHttpRequest();
    
    //capture the response and store it in the variable
    request.onreadystatechange=function(){
        if (request.readystate===XMLHttpRequest.DONE){
            //take some actions
            if(request.status===200){
                var counter=request.responseText;
                var span=documnet.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        //not done yet
    }
   request.open('GET','http://bijaykumarjha0209.imad.hasura-app.io/counter',true);
   request.send(null);
    
    };
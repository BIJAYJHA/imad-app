//counter
var button=document.getElementById('counter');
button.onclick= function (){
    //create a request to the counter variable
    var request= new XMLHttpRequest();
    
    //capture the response and store it in the variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            //take some actions
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        //not done yet
    }
   request.open('GET','http://bijaykumarjha0209.imad.hasura-app.io/counter',true);
   request.send(null);
    
    };
    //input the submit button
   
   var submit=document.getElementById("submit_btn");
   submit.onclick= function() {
     //make a request to the server and send a name
     //capture a list of names and render it as a list
     //create a request to object
      var request= new XMLHttpRequest();
    
    //capture the response and store it in the variable
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            //take some actions
            if(request.status===200){
                //capture a list of names
                 var names=request.responseText;
                 names=JSON.parse(names);
                  var list='';
                     for(i=0;i< names.length;i++)
                         {
                              list +='<li>' + names[i] + '</li>';
         
                            }
                var ul=document.getElementById("namelist");
                  ul.innerHTML=list;
                
            };
            var nameInput=document.getElementById("name");
             var name=nameInput.value;
             request.open('GET','http://bijaykumarjha0209.imad.hasura-app.io/submit-name?name='+ name,true);
              request.send(null);
    
};
   
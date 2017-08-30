//counter
var button=document.getElementById('counter');
button.onclick= function (){
    //make a request to the counter variable
    //capture the response and store it in the variable
    //render  the  variable in corect span
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
    };
var address = 'http://echo.jsontest.com/name/Leonel/jobtitle/Front-end&nbsp;developer/country/Canada';
$.ajax({
    url: address,
    complete: function(res){
       var myJSON = JSON.parse(res.responseText);
       console.log(myJSON)
        $.each(myJSON, function(index) {
           $('.name').html(myJSON.name);
           $('.job').html(myJSON.jobtitle);
           $('.country').html(myJSON.country);
           //document.write(myJSON[index]+' - ')
        });
        
    }
});

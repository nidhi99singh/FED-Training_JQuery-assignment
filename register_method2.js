$(document).ready(
    function(){
        var y=''
        $('#submit').click(function(){
            y=$("form").serializeArray()
            console.log(y)
           
        })
        $('#submit').click(function(){
            $('p').append("<hr><h5>your have entered the following details</h5>")
            $.each(y,function(i,field){
                $('p').append(field.name+ " "+ " : " + field.value+ " "+ "<br/>")
            })
           
        })
    }
    )
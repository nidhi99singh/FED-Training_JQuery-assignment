var x={
    firstName:'',
    lastName:'',
    email:'',
    gender:'',
    state:'',
    language:[]
}
$(document).ready(
function(){
$('#submit').click(function(){
    x.firstName+=$('#fname').val()
    x.lastName=$('#lname').val()
    x.email=$('#email').val()
    x.gender=$('#gender:checked').val()
    x.state=$('#state').val()
    console.log(x)
})
$('#submit').click(function(){
        $.each($("input[name='Language']:checked"),function(){
            x.language.push($(this).val())
        })
    })
$('#submit').click(function(){
    $('p').append(`<hr>
    Hi! ${x.firstName}, please confirm your details
    <table>
        <tr>
            <td>First Name:</td>
            <td>${x.firstName}</td>
            </tr>
        <tr>
            <td>Last Name:</td>
            <td>${x.lastName}</td>
            </tr>
        <tr>
            <td>Email:</td>
            <td>${x.email}</td>
        </tr>
        <tr>
            <td>Gender: </td>
            <td>${x.gender}</td>
            </tr>
        <tr>
            <td>State: </td>
            <td>${x.state}</td>
            </tr>    
        <tr>
            <td>Language(s): </td>
            <td>${x.language}</td>
            </tr>        
        </table>
    `)
}
)
}
)

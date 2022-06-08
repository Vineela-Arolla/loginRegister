$(document).ready(function(){
    $("form #change").on("Submit",function(c){
        e.preventDefault();
        var data=$(input['name=name'],val());
        $.ajax({
            type:'post',
            url:'/ajax',
            data:data,
            datatype:'text'
        })
    })
})
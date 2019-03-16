(function(){
    
    var requestData = function() {
        var data = {};

        return data;
    }

    var enrollCourse = function(data) {
        $.ajax({
            url: "",
            method:"POST",
            data: requestData();
            success: function(response){
            },
        
            error: function(error){
            },
        
            complete: function(){
        
            }
        });
    }
})();

angular.module('formfield',[])
    .controller('formcontroller',function() {
    this.formstofill = [{Field:'Name', Value:''},{Field:'Email', Value:''}, {Field:'Phone', Value:''}, {Field:"Message", Value:''}];
    this.filled= function filled(progress)
    { return (progress.Value!=''); 
    };
    
    
});
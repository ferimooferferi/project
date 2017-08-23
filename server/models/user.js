var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/database',function(err){
    if(err)
        throw err;
});
var Schema=mongoose.Schema;
var userSchema=new Schema({
    username:String,
    password:String
});
var userModel=mongoose.model('user',userSchema);

module.exports=userModel;
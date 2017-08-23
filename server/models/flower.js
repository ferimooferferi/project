var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/database',function(err){
    if(err)
        throw err;
});
var Schema=mongoose.Schema;
var flowerSchema=new Schema({
    _id:number,
    flowername:String,
    flowercolor:String,
    numbers:number
});
var flowerModel=mongoose.model('flower',flowerSchema);

module.exports=flowerModel;
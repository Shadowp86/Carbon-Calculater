const mongoose=require('mongoose')
const Schema=mongoose.Schema
const MaterialSchema=new Schema({
    Item:{
        type:String,
        required:true
    },
    Totalquantity:{
        type:Number,
        required:true
    },
    cemissionrate:{
        type:Number,
        required:true,
    },
    
})
module.exports=mongoose.model('Material',MaterialSchema)

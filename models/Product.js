const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productType : {
        type : String ,
    },
    motherBoard: {
        productType:{
            default:"motherBoard"
        },
        productID:{
            type: Number,
            require:true
        },
        productName:{
            type: String,
            required:true
        },
        img:{
            type: Buffer,
            required:true
        },
        price:{
            type:Number,
            required: true
        },
        numberInStock:{
            type:Number
        },
        rate:{
            type:Number
        }
    },
    ram: {
        productType:{
            default:"ram"
        },
        productID:{
            type: Number,
            require:true
        },
        productName:{
            type: String,
            required:true
        },
        img:{
            type: Buffer,
            required:true
        },
        price:{
            type:Number,
            required: true
        },
        numberInStock:{
            type:Number
        },
        rate:{
            type:Number
        }
    },
    processor: {
        productType:{
            default:"processor"
        },
        productID:{
            type: Number,
            require:true
        },
        productName:{
            type: String,
            required:true
        },
        img:{
            type: Buffer,
            required:true
        },
        price:{
            type:Number,
            required: true
        },
        numberInStock:{
            type:Number
        },
        rate:{
            type:Number
        }
    },
    ssd: {
        productType:{
            default:"ssd"
        },
        productID:{
            type: Number,
            require:true
        },
        productName:{
            type: String,
            required:true
        },
        img:{
            type: Buffer,
            required:true
        },
        price:{
            type:Number,
            required: true
        },
        numberInStock:{
            type:Number
        },
        rate:{
            type:Number
        }
    },
    hdd: {
        productType:{
            default:"hdd"
        },
        productID:{
            type: Number,
            require:true
        },
        productName:{
            type: String,
            required:true
        },
        img:{
            type: Buffer,
            required:true
        },
        price:{
            type:Number,
            required: true
        },
        numberInStock:{
            type:Number
        },
        rate:{
            type:Number
        }
    },
    graphicCards: {
        productType:{
            default:"graphic card"
        },
        productID:{
            type: Number,
            require:true
        },
        productName:{
            type: String,
            required:true
        },
        img:{
            type: Buffer,
            required:true
        },
        price:{
            type:Number,
            required: true
        },
        numberInStock:{
            type:Number
        },
        rate:{
            type:Number
        }
    },
    cases: {
        productType:{
            default:"cases"
        },
        productID:{
            type: Number,
            require:true
        },
        productName:{
            type: String,
            required:true
        },
        img:{
            type: Buffer,
            required:true
        },
        price:{
            type:Number,
            required: true
        },
        numberInStock:{
            type:Number
        },
        rate:{
            type:Number
        }
    },
    powerSupply: {
        productType:{
            default:"power supply"
        },
        productID:{
            type: Number,
            require:true
        },
        productName:{
            type: String,
            required:true
        },
        img:{
            type: Buffer,
            required:true
        },
        price:{
            type:Number,
            required: true
        },
        numberInStock:{
            type:Number
        },
        rate:{
            type:Number
        }
    },
    fans_coolers: {
        productType:{
            default:"fans & coolers"
        },
        productID:{
            type: Number,
            require:true
        },
        productName:{
            type: String,
            required:true
        },
        img:{
            type: Buffer,
            required:true
        },
        price:{
            type:Number,
            required: true
        },
        numberInStock:{
            type:Number
        },
        rate:{
            type:Number
        }
    }
});

module.exports = Product = mongoose.model('Product',ProductSchema);
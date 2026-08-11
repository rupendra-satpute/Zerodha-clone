const {model} = require('mongoose');
const {OrderSchema} = require('../schemas/PositionSchema');//yaha se require karna hai kyuki order schema position schema me hi hai

const OrderModel = new model('Order', OrderSchema); //yaha se model create karna hai
module.exports = {OrderModel};  
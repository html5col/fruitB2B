'use strict';
const logger = require('../libs/logger');
const Suggestion = require('../models/Suggestion');
const coHandler = require('../common/coHandler');

module.exports = {

  contact (req, res) {
    let body = req.body;
    let shopname = body.name;
    let address = body.address;
    let phone = body.phone;
    let message = body.message;

    let suggestion = new Suggestion({
        shopname,
        address,
        phone,
        message
    });

    // coHandler(function*(){

    //     yield suggestion.save()
    //     console.log('suggestion stored successfully')
    // })
   suggestion.save((err)=>{
         if(err){
               console.log(err);
               req.flash('error',`Error when saving`);
               res.redirect('back');
          }else{
               //req.flash('success','成功提交！');
               //res.redirect('back‘);
               console.log('suggestion stored successfully')
               res.json('saved...')
         }
   });
  }

};


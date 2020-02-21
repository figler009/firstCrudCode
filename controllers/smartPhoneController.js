'use strict'

let validator = require('validator');
let Smartphone = require('../models/smartphoneModel');

let controller={

    getSmartphones:(req,res)=>{
        let query = Smartphone.find({});
        query.exec((err,smartphones)=>{
            if(err){
                return res.status(500).send({
                    status:'error',
                    message:'Error to return data',
                    err
                });
            }else{
                if(!smartphones){
                    return res.status(404).send({
                        status:'error',
                        message:'no smartphones to show'
                    });
                }

                return res.status(200).send({
                    status:'success',
                    smartphones
                })
            }
        })
    },
    getSmartphone:(req,res)=>{
        
        let smartphoneId = req.params._id;
        console.log(smartphoneId);

        Smartphone.findById(smartphoneId,(err,smartphone)=>{
            if(err){
                return res.status(404).send({
                    status:'error',
                    message:'no smartphones to show'
                });
            }
            return res.status(200).send({
                status:'success',
                smartphone
            })

        });
        

    },
    save:(req,res)=>{
        console.log(req.body);

        let params = req.body;
        let smart = new Smartphone();

        smart.phoneName=params.phoneName;
        smart.brand=params.brand;
        smart.price=params.price;
        console.log(smart.phoneName);
        smart.save((err,smartphoneStored)=>{
            if(err || !smartphoneStored){
                return res.status(404).send({
                    status:'error',
                    message:'smartphones not saved'
                });
            }
            return res.status(200).send({
                status:'success',
                smartphone:smartphoneStored
            });
        });
        
    },
    update:(req,res)=>{
        let smartphoneId = req.params._id;
        let params = req.body;
        

        Smartphone.findByIdAndUpdate({_id:smartphoneId},params,{new:true},(err,smartphoneUpdated)=>{
            if(err){
                return res.status(500).send({
                    status:'error',
                    message:err
                });
            }

            if(!smartphoneUpdated){
                return res.status(404).send({
                    status:'error',
                    message:'smartphones not updated'
                });
            }

            return res.status(200).send({
                status:'success',
                smartphone:smartphoneUpdated
            });
        
        });
    },
    delele:(req,res)=>{
        let smartphoneId=req.params._id;

        Smartphone.findByIdAndRemove({_id:smartphoneId},(err,smartphoneRevomed)=>{
            if(err){
                return res.status(500).send({
                    status:'error',
                    message:err
                });
            }

            if(!smartphoneRevomed){
                return res.status(404).send({
                    status:'error',
                    message:'smartphones not Deleted'
                });
            }

            return res.status(200).send({
                status:'success',
                smartphone:smartphoneRevomed
            });

        })
    }

}

module.exports = controller;
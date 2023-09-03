const {Router}=require("express");
const { getDogsHanderlsName } = require("../Handlers/GetDogsHanderls");

const nameRouter=Router();

nameRouter.get("/",getDogsHanderlsName)

module.exports=nameRouter;

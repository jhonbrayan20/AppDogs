const {Router}=require("express");
const getTemperamentsHanderls = require("../Handlers/GetTempHanderls");

const temperamentsRouter=Router();

temperamentsRouter.get("/",getTemperamentsHanderls)

module.exports=temperamentsRouter;
const {Router}=require("express");
const {getDogsHanderls, getIdHanderls}= require("../Handlers/GetDogsHanderls");
const postDogsHanderls = require("../Handlers/PostDogsHanderls");

const dogsRouter=Router();

dogsRouter.get("/",getDogsHanderls)
dogsRouter.get("/:id",getIdHanderls)
dogsRouter.post("/",postDogsHanderls)



module.exports=dogsRouter;
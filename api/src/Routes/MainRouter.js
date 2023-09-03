
const {Router}=require("express")
const dogsRouter = require("./DogsRouter")
const temperamentsRouter = require("./TemperamentsRouter")
const nameRouter = require("./NameDogsRouter")



const mainRouter=Router()

mainRouter.use("/dogs",dogsRouter)

mainRouter.use("/temperaments",temperamentsRouter)

mainRouter.use("/dogsname",nameRouter)


module.exports=mainRouter;
const { World } = require('../models')

const getAllWorlds = async(req, res) => {
    try {
        const worlds = await World.find()
        return res.status(200).json({ profiles })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const getWorlds = async(req, res) => {
    try{
        const { user_id } = req.params
        const worlds = await World.find({ user: user_id })
        if(worlds){
            return res.status(200).json({ worlds })
        } else {
            return res.status(400).send('World does not exist')
        }
    } catch (e){
        return res.status(500).send(e.message)
    }
}

const getWorldId = async(req, res) => {
    try{
        const { id } = req.params
        const world = await World.findById(id)
        if(world){
            return res.status(200).json( world )
        } else {
            return res.status(400).send('World does not exist')
        }
    } catch (e){
        return res.status(500).send(e.message)
    }
}

const createWorld = async(req, res) => {
    try{
        const world = new World(req.body)
        await world.save()
        return res.status(200).json({ world })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updateWorld = async(req, res) => {
    try{
        const { id } = req.params
        const world = await World.findByIdAndUpdate(id, req.body, {new: true})
        if (world) {
            return res.status(200).json({World})
        } else {
            return res.status(400).json({message: 'World does not exist.'})
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteWorld = async(req, res) => {
    try {
        const { id } = req.paramsconst 
        const world = await World.findByIdAndDelete(id)
        if (world) {
            return res.status(200).json({World})
        } else {
            return res.status(400).json({message: 'World does not exist.'})
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllWorlds,
    getWorlds,
    createWorld,
    getWorldId,
    updateWorld,
    deleteWorld
}
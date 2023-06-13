const { OC } = require('../models')

const getAllOCs = async(req, res) => {
    try {
        const ocs = await OC.find()
        return res.status(200).json({ ocs })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const getOC = async(req, res) => {
    try{
        const { id } = req.params
        const oc = await OC.findById(id)
        if(oc){
            return res.status(200).json({ OC })
        } else {
            return res.status(400).send('OC does not exist')
        }
    } catch (e){
        return res.status(500).send(e.message)
    }
}

const createOC = async(req, res) => {
    try{
        const oc = new OC(req.body)
        await OC.save()
        return res.status(200).json({ OC })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updateOC = async(req, res) => {
    try{
        const { id } = req.params
        const oc = await OC.findByIdAndUpdate(id, req.body, {new: true})
        if (oc) {
            return res.status(200).json({OC})
        } else {
            return res.status(400).json({message: 'OC does not exist.'})
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteOC = async(req, res) => {
    try {
        const { id } = req.paramsconst 
        const oc = await OC.findByIdAndDelete(id)
        if (oc) {
            return res.status(200).json({OC})
        } else {
            return res.status(400).json({message: 'OC does not exist.'})
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    getAllOCs,
    getOC,
    createOC,
    updateOC,
    deleteOC
}
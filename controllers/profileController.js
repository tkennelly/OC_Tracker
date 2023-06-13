const { Profile } = require('../models')

const getAllProfiles = async(req, res) => {
    try {
        const profiles = await Profile.find()
        return res.status(200).json({ profiles })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const getProfile = async(req, res) => {
    try{
        const { id } = req.params
        const profile = await Profile.findById(id)
        if(profile){
            return res.status(200).json({ profile })
        } else {
            return res.status(400).send('Profile does not exist')
        }
    } catch (e){
        return res.status(500).send(e.message)
    }
}

const createProfile = async(req, res) => {
    try{
        const profile = new Profile(req.body)
        await profile.save()
        return res.status(200).json({ profile })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


module.exports = {
    getAllProfiles,
    getProfile,
    createProfile
}
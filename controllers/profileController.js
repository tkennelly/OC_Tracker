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
        const { username } = req.params
        console.log(req.params)
        const profile = await Profile.find({ username: username })
        if(profile){
            console.log(profile)
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

const updateProfile = async(req, res) => {
    try{
        const { id } = req.params
        const profile = await Profile.findByIdAndUpdate(id, req.body, {new: true})
        if (profile) {
            return res.status(200).json({Profile})
        } else {
            return res.status(400).json({message: 'Profile does not exist.'})
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteProfile = async(req, res) => {
    try {
        const { id } = req.paramsconst 
        const profile = await Profile.findByIdAndDelete(id)
        if (profile) {
            return res.status(200).json({Profile})
        } else {
            return res.status(400).json({message: 'Profile does not exist.'})
        }
    } catch (e) {
        res.status(500).send(e.message)
    }
}



module.exports = {
    getAllProfiles,
    getProfile,
    createProfile,
    updateProfile,
    deleteProfile
}
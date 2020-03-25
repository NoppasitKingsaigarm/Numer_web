
const Bisection = require('../models/bisection')
const FalsePo = require('../models/falseposition')
const Onepoint = require('../models/onepoint')
const Newton = require('../models/newton')
const Secant = require('../models/secant')
const Forwardh = require('../models/forwardh')
const Backwardh = require('../models/backwardh')
const  Centralh = require('../models/centralh')
const Difftwo = require('../models/difftwo')
const Compotrapz = require ('../models/compotapz')
const Composimson = require ('../models/composimson')
createBisec = (req, res) => {

    const body = req.body
    const bisection =new Bisection(body)

    bisection
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'mission complet',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'not created!',
            })
        })
    
}

createFalse = (req, res) => {

    const body = req.body
    const falsepos =new FalsePo(body)

    
    falsepos
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'mission complet',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'not created!',
            })
        })    
}

createOne = (req, res) => {

    const body = req.body
    const onepointt =new Onepoint(body)

    
    onepointt
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'mission complet',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'not created!',
            })
        })    
}

createNew = (req, res) => {

    const body = req.body
    const newtonn =new Newton(body)

    
    newtonn
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'mission complet',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'not created!',
            })
        })    
}

createSe = (req, res) => {

    const body = req.body
    const secantt =new Secant(body)

    
    secantt
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'mission complet',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'not created!',
            })
        })    
}

createForh = (req, res) => {

    const body = req.body
    const forwaddhh =new Forwardh(body)

    
    forwaddhh
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'mission complet',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'not created!',
            })
        })    
}

createBackh = (req, res) => {

    const body = req.body
    const backwardd =new Backwardh(body)

    
    backwardd
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'mission complet',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'not created!',
            })
        })    
}

createCenh = (req, res) => {

    const body = req.body
    const centrall =new Centralh(body)

    
    centrall
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'mission complet',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'not created!',
            })
        })    
}

createDiff = (req, res) => {

    const body = req.body
    const difftwoo =new Difftwo(body)

    
    difftwoo
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'mission complet',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'not created!',
            })
        })    
}

createTrapz = (req, res) => {

    const body = req.body
    const compotrapzz = new Compotrapz(body)

    
    compotrapzz
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'mission complet',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'not created!',
            })
        })    
}
createSim = (req, res) => {

    const body = req.body
    const composimsonn =new Composimson(body)

    
    composimsonn
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'mission complet',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'not created!',
            })
        })    
}

getBisec = async (req, res) => {

    await Bisection.find({}, (err, bisection) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!bisection.length) {
            return res
                .status(404)
                .json({ success: false, error: `not found` })
        }
        return res.status(200).json({ success: true, data: bisection })
    }).catch(err => console.log(err))



}


getFalse = async (req, res) => {

    await FalsePo.find({}, (err, bisection) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!bisection.length) {
            return res
                .status(404)
                .json({ success: false, error: `not found` })
        }
        return res.status(200).json({ success: true, data: bisection })
    }).catch(err => console.log(err))


}

getOne = async (req, res) => {

    await Onepoint.find({}, (err, onepoint) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!onepoint.length) {
            return res
                .status(404)
                .json({ success: false, error: `not found` })
        }
        return res.status(200).json({ success: true, data: onepoint })
    }).catch(err => console.log(err))


}

getNew = async (req, res) => {

    await Newton.find({}, (err,newton) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!newton.length) {
            return res
                .status(404)
                .json({ success: false, error: `not found` })
        }
        return res.status(200).json({ success: true, data: newton })
    }).catch(err => console.log(err))


}

getSe = async (req, res) => {

    await Secant.find({}, (err,secant) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!secant.length) {
            return res
                .status(404)
                .json({ success: false, error: `not found` })
        }
        return res.status(200).json({ success: true, data: secant })
    }).catch(err => console.log(err))


}

getForh = async (req, res) => {

    await Forwardh.find({}, (err, forwardh) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!forwardh.length) {
            return res
                .status(404)
                .json({ success: false, error: `not found` })
        }
        return res.status(200).json({ success: true, data: forwardh })
    }).catch(err => console.log(err))


}

getBackh = async (req, res) => {

    await Backwardh.find({}, (err, backwardh) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!backwardh.length) {
            return res
                .status(404)
                .json({ success: false, error: `not found` })
        }
        return res.status(200).json({ success: true, data: backwardh })
    }).catch(err => console.log(err))


}

getCenh = async (req, res) => {

    await Centralh.find({}, (err,centralh) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!centralh.length) {
            return res
                .status(404)
                .json({ success: false, error: `not found` })
        }
        return res.status(200).json({ success: true, data: centralh })
    }).catch(err => console.log(err))


}
getDiff = async (req, res) => {

    await Difftwo.find({}, (err,difftwo) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!difftwo.length) {
            return res
                .status(404)
                .json({ success: false, error: `not found` })
        }
        return res.status(200).json({ success: true, data: difftwo })
    }).catch(err => console.log(err))


}

getTrapz = async (req, res) => {

    await Compotrapz.find({}, (err,compotrapz) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!compotrapz.length) {
            return res
                .status(404)
                .json({ success: false, error: `not found` })
        }
        return res.status(200).json({ success: true, data: compotrapz })
    }).catch(err => console.log(err))


}

getSim = async (req, res) => {

    await Composimson.find({}, (err,composimson) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!composimson.length) {
            return res
                .status(404)
                .json({ success: false, error: `not found` })
        }
        return res.status(200).json({ success: true, data: composimson })
    }).catch(err => console.log(err))


}

module.exports = {
    createBisec,
    createFalse,
    createOne,
    createNew,
    createSe,
    createForh,
    createBackh,
    createCenh,
    createDiff,
    createTrapz,
    createSim,
    getBisec,
    getFalse,
    getOne,
    getNew,
    getSe,
    getForh,
    getBackh,
    getCenh,
    getDiff,
    getTrapz,
    getSim,
}
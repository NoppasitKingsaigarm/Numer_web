const express = require('express')

const MovieCtrl = require('../controllers/movie-ctrl')

const router = express.Router()

router.post('/adbisection', MovieCtrl.createBisec)
router.get('/dobisection', MovieCtrl.getBisec)

router.post('/adfalseposition', MovieCtrl.createFalse)
router.get('/dofalseposition', MovieCtrl.getFalse)

router.post('/adonepoint', MovieCtrl.createOne)
router.get('/doonepoint', MovieCtrl.getOne)

router.post('/adnewton', MovieCtrl.createNew)
router.get('/donewton', MovieCtrl.getNew)

router.post('/adsecant', MovieCtrl.createSe)
router.get('/dosecant', MovieCtrl.getSe)

router.post('/adforwardh', MovieCtrl.createForh)
router.get('/doforwardh', MovieCtrl.getForh)

router.post('/adbackwardh', MovieCtrl.createBackh)
router.get('/dobackwardh', MovieCtrl.getBackh)

router.post('/adcentralh', MovieCtrl.createCenh)
router.get('/docentralh', MovieCtrl.getCenh)

router.post('/addifftwo', MovieCtrl.createDiff)
router.get('/dodifftwo', MovieCtrl.getDiff)

router.post('/adcompotrapz', MovieCtrl.createTrapz)
router.get('/docompotrapz', MovieCtrl.getTrapz)

router.post('/adcomposimson', MovieCtrl.createSim)
router.get('/docomposimson', MovieCtrl.getSim)

module.exports = router
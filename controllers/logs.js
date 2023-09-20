const express = require('express');
const router = express.Router()
const Logs = require('../models/logs')

// Seed Route

router.get('/logs/seed', async (req, res) => {
    try {
        await Logs.create([
            {
                title: "Benjamin",
                entry: "My day",
                shipIsBroken: false
            }
        ])
    }
    catch (err) {
        res.status(400).send(err)
    }
})



// Index Route

router.get('/logs', async (req, res) => {
    const foundLogs = await Logs.find({})
    res.status(200).render('Index', {
        logs: foundLogs
    })
})




// New route
router.get('/logs/new', async (req, res) => {
    try {
        res.render('New')
    } catch (err) {
        res.status(400).send(err)
    }
})

// Update route

router.put('/logs/:id', async (req, res) => {
    try {
        req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false
        const updatedLog = await Logs.findByIdAndUpdate(
            req.params.id, req.body, { new: true })
        res.status(201).redirect(`/logs`)
    } catch (err) {
        res.status(400).send(err)
    }
})




// Delete route

router.delete('/logs/:id', async (req, res) => {
    try {
        await Logs.findByIdAndDelete(req.params.id)
        res.status(200).redirect('/logs')
    } catch (err) {
        res.status(400).send(err)
    }
})




// Create route

router.post('/logs', async (req, res) => {
    try {
        req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false
        const createdLogs = await Logs.create(req.body)
        res.status(201).redirect('/logs')
    } catch (err) {
        res.status(400).send(err)
    }
})


// Edit route 

router.get('/logs/:id/edit', async (req, res) => {
    try {
        const foundLog = await Logs.findById(req.params.id)
        res.render('Edit', {
            logs: foundLog
        })
        console.log(foundLog)
    } catch (err) {
        res.status(400).send(err)
    }
})


// Show route

router.get('/logs/:id', async (req, res) => {
    try {
        const foundLog = await Logs.findById(req.params.id)
        res.render('Show', {
            logs: foundLog
        })
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router
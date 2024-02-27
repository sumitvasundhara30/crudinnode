const express = require('express');
const router = express.Router();
const emp = require('../models/user');

router.get('/', async (req, res) => {
    try 
    {
        const docs = await emp.find().exec();
        res.render('home', { emps: docs });
    }
    catch (err) 
    {
        console.log("something went wrong", err);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/add', async (req, res) => {
    const firstname = req.body.firstname;
    const lastname=req.body.lastname;
    const username=req.body.username;
    const password=req.body.password;
    console.log(firstname,lastname,username,password);
    const uclClub = new emp({
        firstname:firstname,
        lastname:lastname,
        username:username,
        password:password
    });
    try 
    {
        await uclClub.save();
        console.log('record is saved');
        res.redirect('/');
    } catch (err) {
        console.log('something went wrong', err);
        res.status(500).send('Internal Server Error');
    }
});
router.get('/edit/:id', async (req, res) => {
    try {
        const doc = await emp.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        ).exec();
        res.render('edit', { emp: doc });
    }
     catch (err) {
        console.log("data retrieve failed", err);
        res.status(500).send('Internal Server Error');
    }
});
router.post('/edit/:id', async (req, res) => {
    const { firstname,lastname,username,password } = req.body;
    try {
        const doc = await emp.findOneAndUpdate(
            { _id: req.params.id },
            { firstname,lastname,username,password },
            { new: true }
        ).exec();
        console.log(doc);
        console.log('record is updated');
        res.redirect('/');
    } catch (err) {
        console.log("data update failed", err);
        res.status(500).send('Internal Server Error');
    }
});
router.delete('/delete/:id', async (req, res) => {
    try {
        await emp.deleteOne({ _id: req.params.id });
        console.log('record is deleted');
        res.sendStatus(200);
    } catch (err) {
        console.log("data delete failed", err);
        res.sendStatus(500);
    }
});
module.exports = router;

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')


const F1Team = require('./models/f1teams');


mongoose.connect('mongodb://localhost:27017/f1team', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB CONNECTION OPEN via Mongoose...")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })





// Views folder, CSS/JS public path setup:
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))


// app settings template engine
app.set('view engine', 'ejs');


// body parsers
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))


// Set Port for Heroku deployment
const PORT = process.env.PORT || 3000;


// validation categories
const categories = ['top-team', 'mid-field', 'back-marker'];







// Routes...


app.get('/', async (req, res) => {
    res.render('f1teams/home'); 
    // console.log("home...");
}) 



app.get('/f1teams', async (req, res) => {
    const f1teams = await F1Team.find({});
    // console.log("f1teams...");
    res.render('f1teams/teams', { f1teams }); 
}) 



app.get('/manage', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const f1teams = await F1Team.find({ category })
        // console.log("manage(category)...");
        res.render('f1teams/index', { f1teams, category })
    } else {
        const f1teams = await F1Team.find({})
        // console.log("manage(all)...");
        res.render('f1teams/index', { f1teams, category: 'All' })
    }
})



app.get('/f1teams/new', (req, res) => {
    // console.log("/f1teams/new...");
    res.render('f1teams/new', { categories })
})



app.post('/f1teams', async (req, res) => {
    const newF1Team = new F1Team(req.body);
    await newF1Team.save();
    // console.log("/f1teams/new (save)...");
    // console.log(newF1Team);
    res.redirect(`/f1teams`);
    // res.redirect(`/products/${newProduct._id}`)
})




app.get('/f1teams/:id', async (req, res) => {
    const { id } = req.params;
    const f1team = await F1Team.findById(id)
    // console.log("/f1teams/:id...");
    res.render('f1teams/show', { f1team })
})




app.get('/f1teams/:id/edit', async (req, res) => {
    const { id } = req.params;
    const f1team = await F1Team.findById(id);
    // console.log("/f1teams/:id/edit...");
    res.render('f1teams/edit', { f1team, categories })
})

app.put('/f1teams/:id', async (req, res) => {
    const { id } = req.params;
    const f1team = await F1Team.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/f1teams/${f1team._id}`);
})




app.delete('/f1teams/:id', async (req, res) => {
    const { id } = req.params;
    const deletedf1team = await F1Team.findByIdAndDelete(id);
    // console.log("/f1teams/:id (deleted)...");
    res.redirect('/f1teams');
})



// app.listen(3000, () => {
//     console.log("APP IS LISTENING ON PORT 3000!")
// })

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
})


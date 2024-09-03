const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI || 'your-mongodb-uri-here';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Contact Schema and Route
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (err) {
        console.error('Error saving contact message:', err);
        res.status(500).json({ message: 'Failed to send message.' });
    }
});

// Recipe Schema and Routes
const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

app.post('/api/recipes', async (req, res) => {
    const newRecipe = new Recipe(req.body);
    try {
        await newRecipe.save();
        res.status(201).send(newRecipe);
    } catch (err) {
        console.log('Error saving recipe:', err);
        res.status(400).send(err);
    }
});

app.get('/api/recipes', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).send(recipes);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/api/recipes/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!recipe) {
            return res.status(404).send();
        }
        res.send(recipe);
    } catch (err) {
        res.status(500).send(err);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

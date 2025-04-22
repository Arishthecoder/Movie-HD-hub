const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/subscribers', { useNewUrlParser: true, useUnifiedTopology: true });

const subscriberSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    subscribed: { type: Boolean, required: true },
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

app.post('/subscribe', async (req, res) => {
    const { subscribed } = req.body;
    const userId = 'user123'; // For now, you can use a static ID or get it from user authentication.
    
    try {
        const existingSubscription = await Subscriber.findOne({ userId });
        if (existingSubscription) {
            existingSubscription.subscribed = subscribed;
            await existingSubscription.save();
        } else {
            const newSubscription = new Subscriber({ userId, subscribed });
            await newSubscription.save();
        }
        res.status(200).send({ message: 'Subscription status updated' });
    } catch (error) {
        res.status(500).send({ message: 'Error updating subscription' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

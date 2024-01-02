import Subscribe from '../models/subscribe.model.js';

 export const subscribeController = async(req, res)=>{
    try {
      const { email } = req.body;
      const newSubscription = new Subscribe({ email });
      await newSubscription.save();
      res.status(200).json({ message: 'Subscription successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

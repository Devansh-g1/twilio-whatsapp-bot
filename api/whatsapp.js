import { handleTwilioWebhook } from '../services/twilioWebhook';

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).send('Method Not Allowed');
    }

    const body = req.body;

    const twimlResponse = await handleTwilioWebhook(body);

    res.setHeader('Content-Type', 'text/xml');
    return res.status(200).send(twimlResponse);
  } catch (error) {
    console.error('Error processing webhook:', error);

    res.setHeader('Content-Type', 'text/xml');
    return res.status(500).send(`
      <?xml version="1.0" encoding="UTF-8"?>
      <Response>
        <Message>An error occurred processing your message.</Message>
      </Response>
    `);
  }
}
export function handleTwilioWebhook(body) {
    const message = (body.Body || '').toLowerCase();
  
    let reply = "Sorry, I didn't understand that.";
    if (message.includes("hello")) {
      reply = "Hi! How can I help you?";
    } else if (message.includes("help")) {
      reply = "Sure, ask me anything.";
    }
  
    return `
      <Response>
        <Message>${reply}</Message>
      </Response>
    `;
  }
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function sendMessage(method, chatId, params) {
  const url = `https://api.telegram.org/bot${API_KEY}/${method}`
  const urlParams = new URLSearchParams({ chat_id: chatId, ...params })
  return fetch(url + "?" + urlParams).then(response => response.json())
}

async function handleRequest(request) {
  if (request.method === "POST") {
    const payload = await request.json() 

    if ('message' in payload) {
      const message = payload.message;

      if(message.text !== '/start'){
        if(message.chat.id == CHAT_ID && message.reply_to_message != undefined ){
          //Sending reply message from admin chat to bot
          sendMessage('sendMessage', message.from.id, {text: message.text})
        }
        else{
          //Forwarding message to admin chat
          sendMessage('forwardMessage', CHAT_ID, {from_chat_id: message.chat.id, message_id: message.message_id})
        }
      }else {
        //Welcome message
        sendMessage('sendMessage', message.chat.id, {text: "Greetings, you can leave your wishes and suggestions here"})
      }
    }
  }
  return new Response("OK") 
}

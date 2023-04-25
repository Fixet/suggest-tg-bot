# suggest-tg-bot
I think this is the easiest way to get a Telegram bot for feedback or suggestions with free hosting

#### Setting our bot and admin chat

1. Open the Telegram app and search for the [@BotFather](https://t.me/BotFather) bot.
2. Start a chat with the BotFather and type "/newbot" to create a new bot.
3. Follow the BotFather's instructions to choose a name and username for your bot.
4. Once you've created the bot, the BotFather will provide you with an API key. Keep this key safe, as it's required to authenticate requests to the Telegram API.
5. Now you can start building your bot!
6. Make group and add our new bot
7. Need to get chat_id (add [Rose bot](https://t.me/MissRose_bot) and type /id)

#### Now we have API key, chat id and we go to setting host

1. Sign up for a Cloudflare account at https://dash.cloudflare.com/sign-up.

2. After signing up, go to the Cloudflare Workers dashboard by clicking on "Workers" in the menu.

3. Click on "Create a Service" button to start creating a new service.

4. Give your worker a name and copy code from bot.js to the editor.

5. Click on "Save and Deploy" to deploy your worker.

6. In service settings set up variables (fill in your details)

| Variable name  | Value |
| ------------- | ------------- |
| API_KEY  | 0000000000:AAAOA0AaAAaAAAaAe0aaAaAaAaa_AAa0AA  |
| CHAT_ID  | -100000000  |

7. Configure the webhook by following the link
`https://api.telegram.org/bot<API_KEY>/setWebhook?url=<ENDPOINT_URL>`
( ENDPOINT_URL you can find in service box and looks like nameservice.yourname.workers.dev)
8. This should be a URL that responds with a 200 OK status code.

![suggest-tg-bot](https://user-images.githubusercontent.com/4709818/230786178-c53208cc-1f78-4031-9e94-b9c02a7fe83c.gif)


##### I hope this guide was useful for you and helped you create your Telegram bot. If you have any questions, feel free to contact me)

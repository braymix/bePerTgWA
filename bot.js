const { Telegraf } = require("telegraf");
const TOKEN = '6090537311:AAEBppJXMfj1tZDFIjrLcs7jH8_GQLHobEk'
const bot = new Telegraf(TOKEN);

const web_link = "https://testdnd1.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "clicca qui per iniziare", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();

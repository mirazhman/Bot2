const { Telegraf } = require("telegraf");
const TOKEN = "7165957797:AAFUINr2fQldi4QAaf1___-R1LqJxUZbKOo";
const bot = new Telegraf(TOKEN);

const web_link = "https://mybotyik.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();

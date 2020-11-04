const venom = require('venom-bot');
const banco = require('./banco');
const stages = require('./stages');

venom
  .create()
  .then((client) => start(client));

function start(client) {
  function getStage(user){
      return banco.db[user].stage;
  }
  client.onMessage((message) => {
    client.sendText(message.from, stages.step[getStage(message.from)].obj.execute());
  });
}
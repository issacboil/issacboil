const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
  console.log('Ready!')

  command(client, ['ping', 'test'], (message) => {
    message.channel.send('Pong!')
  })
})

command(client, 'status', (message) => {
  const content = message.content.replace('!status ', '')
  // "!status hello world" -> "hello world"

  client.user.setPresence({
    activity: {
      name: content,
      type: 0,
    },
  })
})

command(client, 'servers', (message) => {
  client.guilds.cache.forEach((guild) => {
    message.channel.send(
      `${guild.name} has a total of ${guild.memberCount} members`
    )
  })
})



client.login(config.token)


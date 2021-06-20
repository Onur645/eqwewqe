const fs = require("fs")

module.exports = (client) => {
  
  fs.readdir("./commands", (err, files) => {
    
    files.forEach(a => {
      
      fs.readdir(`./commands/${a}/`, (errr, filesss) => {
        
        console.log(`${a} kategorisinden ${filesss.length} komutu yükleyeceğim.`)
        
        filesss.forEach(fs => {
          console.log(`${a} kategorisinden ${fs} komutu yüklendi.`)
          let props = require(`./commands/${a}/${fs}`);
          client.commands.set(props.help.name, props);
          props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
          });
        });
        
      })
      
    })
    
  })
  
}
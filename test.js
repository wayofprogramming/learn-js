const dns = require('dns'); 
dns.setServers(['8.8.8.8'])
console.log(dns.getServers())
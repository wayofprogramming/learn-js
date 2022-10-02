const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function dns(){
    const dns = require('dns'); 
    
    readline.question('enter the function you want to run (press h for help): ', fname => {
        switch(fname) {
            case 'rhn': //reverse lookup hostname
            readline.question('enter the domain you want to lookup reverse hostname: ', name => {
                console.log(`Details For domain: ${name}`);
                
                dns.resolve4(name, (err, addresses) => {  
                    if (err) throw err;  
                    console.log(`addresses: ${JSON.stringify(addresses)}`);  
                    addresses.forEach((a) => {  
                        dns.reverse(a, (err, hostnames) => {  
                            if (err) {  
                                throw err;  
                            }  
                            console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);  
                        });  
                    });  
                });   
                readline.close();
                
            })
            break;
            case 'ip': //lookup ip address
            readline.question('enter the website you want to lookup ip address: ', name => {
                console.log(`Details For Website: ${name}`);
                const dns = require('dns');  
                dns.lookup(name, (err, addresses, family) => {  
                    console.log('IP addresses:', addresses);  
                    console.log('Family: IPV'+family);  
                });  
                readline.close();
                
            })
            break;
            
            case 'h':
            console.log('helping1');
            readline.close();
            break;
            default:
            console.log('helping');
            readline.close();
        }
    })
    
}


dns();

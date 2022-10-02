const { emitKeypressEvents } = require("readline");
/*   //not using now 
function callback(fname){
    if (fname==='to'){
        console.log('set Timeout running')
        setTimeout(welcome,1000);
        quit();
        
    }
    else if (fname==='si'){
        console.log('set interval running')
        setInterval(welcome,1000);  
        quit();
        }

}
*/

function welcome () {  
    console.log("Welcome to JavaTpoint!");  
  }  
  

function quit(){
    var readline = require('readline');
    readline.emitKeypressEvents(process.stdin);
        if (process.stdin.isTTY)
        process.stdin.setRawMode(true);

        process.stdin.on('keypress', (chunk, key) => {
    
        if (key && key.name == 'q')
        process.exit();
        if (key && key.name == 'i')
        console.log('set interval running')
        setInterval(welcome,1000);
        if (key && key.name == 't')
        console.log('set interval running')
        setTimeout(welcome,1000);
        });
}
quit();
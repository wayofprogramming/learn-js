const http = require('http');
var url = require('url');
const dt = require('./date_time');
const hostname = '127.0.0.1';
const port = 3000;
const x='<pre><code class="language-js hljs language-javascript"><span class="hljs-keyword">import</span> fs <span class="hljs-keyword">from</span> <span class="hljs-string">"fs"</span><span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">loadSigningKey</span>(<span class="hljs-params">filename</span>) {  <span class="hljs-keyword">const</span> bytes = <span class="hljs-keyword">await</span> fs.<span class="hljs-property">promises</span>.<span class="hljs-title function_">readFile</span>(filename);  <span class="hljs-keyword">const</span> name = <span class="hljs-keyword">await</span> <span class="hljs-title class_">Name</span>.<span class="hljs-title function_">from</span>(bytes);  <span class="hljs-keyword">return</span> name;}</code><button class="code-copy-button"></button></pre>'

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  var x="The date and time are currently: " + dt.myDateTime();
  res.write("<br>");
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  var y =x+"<br>"+txt;
  res.write(y);
  res.end();

});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

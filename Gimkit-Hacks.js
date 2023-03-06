//Gimkit classic
javascript: class multiple_choice{constructor(e=[],n=[],t=[]){this.correctAnswers=e,this.unknownAnswers=t,this.incorrectAnswers=n}static answer(e,n=[]){MC.savedText.includes(e)||multiple_choice.addQuestion(e,[],[],n);var t=MC.savedAnswers[MC.savedText.indexOf(e)];0==n.length&&(n=n.concat(t.correctAnswers).concat(t.unknownAnswers).concat(t.incorrectAnswers));for(var s=[],r=[],l=[],c=0;c<n.length;c++)t.correctAnswers.includes(n[c])?s.push(n[c]):t.incorrectAnswers.includes(n[c])?r.push(n[c]):l.push(n[c]);return{correct:s,wrong:r,unknown:l}}static%20addQuestion(e,n=[],t=[],s=[]){MC.savedText.push(e);var%20r=new%20multiple_choice(n,t,s);MC.savedAnswers.push(r)}static%20modifyAnswers(e,n=[],t=[],s=[]){for(var%20r=0;r%3Cs.length;r++)e.correctAnswers.includes(s[r])||e.incorrectAnswers.includes(s[r])||e.unknownAnswers.includes(s[r])||e.unknownAnswers.push(s[r]);for(r=0;r%3Cn.length;r++)e.unknownAnswers.includes(n[r])&&e.unknownAnswers.splice(e.unknownAnswers.indexOf(n[r]),1),e.correctAnswers.includes(n[r])||e.correctAnswers.push(n[r]);for(r=0;r%3Ct.length;r++)e.unknownAnswers.includes(t[r])&&e.unknownAnswers.splice(e.unknownAnswers.indexOf(t[r]),1),e.incorrectAnswers.includes(t[r])||e.incorrectAnswers.push(t[r])}static%20setUp(){for(var%20e=1;e%3Cdocument.getElementsByClassName(%22notranslate%20lang-en%22).length;e++)document.getElementsByClassName(%22notranslate%20lang-en%22)[e].parentElement.parentElement.addEventListener(%22click%22,e=%3E{CURRENTANSWER=e.srcElement.textContent,questionObserver()})}static%20displayAnswers(e){for(var%20n=1;n%3Cdocument.getElementsByClassName(%22notranslate%20lang-en%22).length;n++){var%20t=document.getElementsByClassName(%22notranslate%20lang-en%22)[n];e.correct.includes(t.textContent)?t.parentElement.parentElement.style.backgroundColor=%22#00FF00%22:e.wrong.includes(t.textContent)?t.parentElement.parentElement.style.backgroundColor=%22#FF0000%22:t.parentElement.parentElement.style.backgroundColor=%22#777777%22}}}class%20text_response{constructor(e=%22%22){this.answer=e}static%20answer(e){return%20TR.savedText.includes(e)||text_response.addQuestion(e),TR.savedAnswers[TR.savedText.indexOf(e)].answer}static%20addQuestion(e,n=%22%22){TR.savedText.push(e);var%20t=new%20text_response(n);TR.savedAnswers.push(t)}static%20modifyAnswers(e,n){e.answer=n}static%20setUp(){document.forms[0].children[0].addEventListener(%22change%22,e=%3E{CURRENTANSWER=e.srcElement.value}),questionObserver()}static%20displayAnswers(e){if(document.getElementById(%22content%22).children[0].children[0].children[0].children[1].children[0].children[0].children[1].children[0].children[1].textContent=e,%22%22==e)document.getElementById(%22content%22).children[0].children[0].children[0].children[1].children[0].children[0].children[1].children[0].children[1].style.backgroundColor=%22#777777%22;else{document.getElementById(%22content%22).children[0].children[0].children[0].children[1].children[0].children[0].children[1].children[0].children[1].style.backgroundColor=%22#00aa00%22;var%20n=document.createElement(%22textarea%22);n.value=e,n.setAttribute(%22readonly%22,%22%22),n.style.position=%22absolute%22,n.style.left=%22-9999px%22,document.body.appendChild(n),n.select(),document.execCommand(%22copy%22),document.body.removeChild(n)}}}function%20get_question(){var%20e=document.getElementById(%22content%22).children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0];if(e.children.length%3E1)var%20n=e.children[1].textContent;else%20n=e.children[0].textContent;var%20t=%22%22,s=[];if(document.getElementsByClassName(%22notranslate%20lang-en%22).length%3E1){t=%22multiple_choice%22;for(var%20r=1;r%3Cdocument.getElementsByClassName(%22notranslate%20lang-en%22).length;r++)s.push(document.getElementsByClassName(%22notranslate%20lang-en%22)[r].textContent)}else%20t=%22text_response%22;return{text:n,type:t,answer_options:s}}function%20update(){var%20e=CURRENTQUESTION,n=CURRENTANSWER,t=RESULT;%22multiple_choice%22==e.type?(t?multiple_choice.modifyAnswers(MC.savedAnswers[MC.savedText.indexOf(e.text)],[n],[],[]):multiple_choice.modifyAnswers(MC.savedAnswers[MC.savedText.indexOf(e.text)],[],[n],[]),multiple_choice.modifyAnswers(MC.savedAnswers[MC.savedText.indexOf(e.text)],[],[],e.answer_options.splice(e.answer_options.indexOf(n),1))):t&&text_response.modifyAnswers(TR.savedAnswers[TR.savedText.indexOf(e.text)],n)}function%20questionObserver(){var%20e=new%20MutationObserver(()=%3E{e.disconnect(),(e=new%20MutationObserver(()=%3E{RESULT=wasAnswerRight(),update(),e.disconnect()})).observe(document.getElementById(%22content%22).children[0].children[0].children[0].children[1].children[0],{attributes:!0,childList:!0})});e.observe(document.getElementById(%22content%22).children[0].children[0].children[0].children[1].children[0],{attributes:!0,childList:!0})}function%20wasAnswerRight(){var%20e=document.getElementById(%22content%22).children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].textContent;return(e=parseInt(e.replace(%22$%22,%22%22)))%3E0}function%20join(e){if(console.log(e),null!=e.choice_data.savedText.length)for(var%20n=e.choice_data.savedText,t=e.choice_data.savedAnswers,s=0;s%3Cn.length;s++){var%20r=n[s],l=t[s];0!=MC.savedText.length&&MC.savedText.includes(r)?multiple_choice.modifyAnswers(MC.savedAnswers[MC.savedText.indexOf(r)],l.correctAnswers,l.incorrectAnswers,l.unknownAnswers):multiple_choice.addQuestion(r,l.correctAnswers,l.incorrectAnswers,l.unknownAnswers)}if(null!=e.text_data.savedText.length){var%20c=e.text_data.savedText,i=e.text_data.savedAnswers;for(s=0;s%3Cc.length;s++){r=c[s];var%20a=i[s].answer;if(0!=TR.savedText.length)if(TR.savedText.includes(r)){var%20d=TR.savedText.indexOf(r);%22%22==TR.savedAnswers[d]&&text_response.modifyAnswers(r,a)}else%20text_response.addQuestion(r,a);else%20text_response.addQuestion(r,a)}}}function%20save(e=%22Gimkit.data%22){var%20n=document.createElement(%22a%22),t=JSON.stringify({text_data:TR,choice_data:MC}),s=new%20Blob([t],{type:%22text/plain%22});n.setAttribute(%22download%22,e);var%20r=window.URL.createObjectURL(s);n.href=r,n.click()}function%20load(e){if(0!=e.files.length){var%20n=new%20FileReader;n.onload=(()=%3E{join(JSON.parse(n.result))}),n.readAsText(e.files[0])}}var%20MC={savedText:[],savedAnswers:[]},TR={savedText:[],savedAnswers:[]},TOGGLESAVE=!1,CURRENTQUESTION=null,CURRENTANSWER=null,RESULT=null;function%20start(){document.addEventListener(%22keydown%22,e=%3E{if(27==e.keyCode)if(TOGGLESAVE)if(CURRENTQUESTION=get_question(),%22multiple_choice%22==CURRENTQUESTION.type){multiple_choice.setUp();var%20eval=multiple_choice.answer(CURRENTQUESTION.text,CURRENTQUESTION.answer_options);multiple_choice.displayAnswers(eval)}else{text_response.setUp();var%20eval=text_response.answer(CURRENTQUESTION.text);text_response.displayAnswers(eval)}else{TOGGLESAVE=!0;var%20saveEl=document.createElement(%22input%22);saveEl.style.backgroundColor=%22#000000%22,saveEl.setAttribute(%22type%22,%22button%22),saveEl.setAttribute(%22value%22,%22Save%22),saveEl.addEventListener(%22click%22,()=%3E{save(prompt(%22Filename%22,%22Gimkit.data%22))});var%20bar=document.getElementById(%22content%22).children[0].children[0].children[0].children[0].children[0].children[0];bar.appendChild(saveEl),bar.insertBefore(saveEl,bar.children[bar.children.length-2]);var%20loadEl=document.createElement(%22input%22);loadEl.style.color=%22transparent%22,loadEl.setAttribute(%22type%22,%22file%22),loadEl.addEventListener(%22input%22,()=%3E{load(loadEl)}),bar.appendChild(loadEl),bar.insertBefore(loadEl,bar.children[bar.children.length-2])}17==e.keyCode&&2==e.location&&save()})}start();
//other hacks(I dont know if these work)
javascript:var answerDatabase = {};var lastQuestion = "";var mx = 0;var my = 0;var lastAnswer = null;var lastAnswerAlphabet = [];alert("Started.");setInterval(() => { var items = document.getElementsByClassName("notranslate lang-en"); if (items.length == 5) { var question = items[0].innerText; var answer1 = items[1]; var answer2 = items[2]; var answer3 = items[3]; var answer4 = items[4]; var answersAlphabet = [answer1.innerText,answer2.innerText,answer3.innerText,answer4.innerText]; answersAlphabet.sort(); lastAnswerAlphabet = answersAlphabet; lastQuestion = question; if (answerDatabase[`${question}_${lastAnswerAlphabet}`] != null) { answer1.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;"; answer2.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;"; answer3.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;"; answer4.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style = "height: 100%; width: 100%;";if(answer1.innerText!=answerDatabase[`${question}_${lastAnswerAlphabet}`]){answer1.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();}if(answer2.innerText!=answerDatabase[`${question}_${lastAnswerAlphabet}`]){answer2.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();}if(answer3.innerText!=answerDatabase[`${question}_${lastAnswerAlphabet}`]){answer3.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();}if(answer4.innerText!=answerDatabase[`${question}_${lastAnswerAlphabet}`]){answer4.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove(); } } } else if (items.length == 1) { answerDatabase[`${lastQuestion}_${lastAnswerAlphabet}`] = items[0].innerText; } else { var divs = document.getElementsByTagName("div"); for (let i = 0; i < divs.length; i++) { if (divs[i].innerHTML.slice(0,2) == "+$" && `${lastQuestion}_${lastAnswerAlphabet}` in answerDatabase == false) { answerDatabase[`${lastQuestion}_${lastAnswerAlphabet}`] = lastAnswer.innerText; } } }});addEventListener('mousemove', (event) => { mx = event.clientX; my = event.clientY; const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0); const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0); px = mx/vw; py = my/vh; var possibleQuadrants = [true,true,true,true]; if (py >= 0.74) { possibleQuadrants[0] = false; possibleQuadrants[1] = false; } else { possibleQuadrants[2] = false; possibleQuadrants[3] = false; } if (px >= 0.5) { possibleQuadrants[0] = false; possibleQuadrants[2] = false; } else { possibleQuadrants[1] = false; possibleQuadrants[3] = false; } var quadrant = 0; for (let i = 0; i<4; i++) { if (possibleQuadrants[i] == true) { quadrant = i; } } var items = document.getElementsByClassName("notranslate lang-en"); for (let i = 0; i < items.length; i++) { items[i].style.color = ""; } if (items.length == 5) { lastAnswer = items[quadrant+1]; lastAnswer.style.color = "red"; }});window.onerror = function(msg, url, linenumber) { alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber); return true;}
javascript:(function()%7B(function()%20%7Blet%20x%20%3D%20document.createElement(%22script%22)%3Bx.src%20%3D%20%22https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FSnowLord7%2FGimkit-Hack%40master%2Findex.js%22%3Bx.onload%20%3D%20function%20()%20%7B%20x.remove()%3B%20%7D%3Bdocument.body.appendChild(x)%3B%7D)()%7D)()

//I think this works well enough, but you might come across a few issues.
javascript:(function()%7B(function() %7Blet x %3D document.createElement("script")%3Bx.src %3D "https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FSnowLord7%2Fquizlet%40master%2Findex.js"%3Bx.onload %3D function () %7B x.remove()%3B %7D%3Bdocument.body.appendChild(x)%3B%7D)()%7D)()

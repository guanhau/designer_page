
function postData(url, data) {
  
  return fetch(url, {
    body: JSON.stringify(data), 

    method: 'POST',
  })
  .then(response => response.json()).then(data => console.log(data)) // JSON from `response.json()` call
  .catch(error => console.error(error)) 
}

postData('https://www.ragic.com/guanhou/test4/10?v=3&APIKey=V2p1TmhjZG0zUG1QdzMvVEJFL1YvbEVuaHIwWXViV3M4V1VpTmNUam9zVEJ6OXhRZWRSZzZYaWQwbTNzemd0WA==&api&1013121=Alex&1013120=001');






















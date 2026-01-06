fetch('http://localhost:8080/api/deploy/nodejs?appName=mijn-eerste-app', {
    method: 'POST'
})
    .then(r => r.text())
    .then(console.log);
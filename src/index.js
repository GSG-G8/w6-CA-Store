const app = require('./app')

const Port = app.get('port');

app.listen(Port,()=>{
    console.log(`app is running on http://localhost:${Port}`)
})
const express =  require('express')

const server = express()

server.use(express.json())

const cursos = ['FullStack Master', 'JavaScript', 'NodeJS']

server.get("/cursos/:index",(req,res) => {
    const { index } = req.params
    return res.json(cursos[index])
})


server.get("/cursos",(req,res) => {
    return res.json(cursos)
})

server.post("/cursos",(req,res) => {
    const { curso } = req.body
    cursos.push(curso)
    return res.json(cursos)
})

server.put('/cursos/:index',(req,res) => {
    const { index } = req.params
    const { curso } = req.body
    cursos[index] = curso
    return res.json(cursos)

})

server.delete('/cursos/:index',(req,res) => {
    const { index } = req.params
    cursos.splice(index,1)
    return res.json(cursos)

})
server.listen(3000)
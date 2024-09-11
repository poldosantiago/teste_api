const opa = (req, res) => res.status(200).send("o xala");

const dados = (req, res) => res.status(200).send({ nome:req.query.nome, idade: req.query.idade })

const teste = (req, res) => {
    

    res.status(200).send({
        fruta: process.env.FRUTA || "abacate",
        teste: process.env.TESTE || "SEI LÁ",
        port: process.env.PORT | 3009
    })
}

export {opa, dados, teste};
const opa = (req, res) => res.status(200).send("o xala");

const dados = (req, res) => res.status(200).send({ nome:req.query.nome, idade: req.query.idade })

const teste = (req, res) => res.status(200).send({ valor:req.params.valor })

export {opa, dados, teste};
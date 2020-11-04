var stages = {
    0:{
        descricao:"Boas vindas",
        obj: require("./stages/0"),
    },
    1:{
        descricao:"Suporte",
        obj: require("./stages/1"),
    },
    2:{
        descricao:"Encerramento",
        obj: require("./stages/2"),
    },
};

exports.step = stages;
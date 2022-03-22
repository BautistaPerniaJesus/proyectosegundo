

db.competi.aggregate([   
    {$unwind:'$equipo'},
    {$group:
        {_id:'$equipo',
         totalfaltas:{$sum: '$faltas'}, 
         media: {$avg: '$puntos'}} },
    {$project:
        {mediadepuntos:{'$round':["$media", 1]} ,
        totalfaltas:"$totalfaltas",
        multa:{'$multiply':["$totalfaltas",0.2]},
        }},
    {$out: 'actualizaciones_equipo'},
        ] )

db.competi.aggregate([
    {$unwind:'$equipo'},
    {$match: {puntos:{$gt:19}}},
    {$match: {equipo: {$eq: 'Cocodrilos'}}},
    {
        $lookup:
          {
            from: 'club',
            localField: 'equipo',
            foreignField: 'equpoactual',
            as: 'equipos'
          }
     },
    {$project:{jugadorn: '$jugadordepartido.nombre',
    posicion: '$equipos.posicion',
    comentario: '$equipos.comentario'}},
    {$match: {jugadorn:{$eq: '$equipos.nombre'}}}, 
    {$group:{
        _id: '$jugadorn',
        count: { $sum: 1 }
    }},
]).pretty()

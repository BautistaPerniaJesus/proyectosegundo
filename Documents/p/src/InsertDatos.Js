db.club.deleteMany({})
db.club.insertMany([
    {
        _id: 1,
        equpoactual:"Cocodrilos",
        nombre: "Jesús",
        posicion: ["base"],
        estadisticas: {
            rebotes2021: {ofensivos: 2, defensivos:  2},
            robos2021: 8,
            puntos2021: 25,
            juegos: 18,
        },
        fechas: {
            fechainicio: new Date("2018-12-31"),
            fechanacimiento: new Date("2003-02-13")
        },
        tienelesion: false,
        altura: 2.00,
        nacionalidad: ["española", "estadounidense", "china"],
        temporadas: [2021, 2020, 2019, 2018, 2017],
        asistencia: "fatal",
        clubes: ["Cocodrilos"],
        comentario: "Jugador estrella"
    },

    {
        _id: 2,
        equpoactual:"Cocodrilos", 
        nombre: "Manuel",
        posicion: ["alapivot", "pivot"],
        estadisticas: {
            rebotes2021: {ofensivos: 3, defensivos: 5},
            robos2021: 10,
            puntos2021: 5,
            juegos: 15,
        },
        fechas: {
            fechainicio: new Date("2019-06-01"),
            fechanacimiento: new Date("2003-07-02")
        },
        tienelesion: false,
        altura:1.90 ,
        nacionalidad: ["española"],
        temporadas: [2021, 2020, 2019],
        asistencia: "media",
        clubes: ["Cocodrilos","Los Angeles", "Chicago Bulls"],
        comentario: "proxima estrella",
    },

{_id: 3, equpoactual:"Cocodrilos", nombre: "James", posicion: ["base", "alero"], estadisticas: { rebotes2021: {ofensivos: 3, defensivos: 2}, robos2021: 1, puntos2021: 24, juegos: 17, }, fechas: { fechainicio: new Date("2018-06-01"), fechanacimiento: new Date("2004-02-13") }, tienelesion: false, altura: 1.85, nacionalidad: ["española", "estadounidense", "china"], temporadas: [2021, 2020, 2019, 2018], asistencia: "total", clubes: ["Cocodrilos","Los Angeles"], comentario: "Estrella"},

{_id: 4, equpoactual:"Cocodrilos", nombre: "Roberto", posicion: ["alero", "alapivot"], estadisticas: { rebotes2021: {ofensivos: 4, defensivos: 4}, robos2021: 3, puntos2021: 10, juegos: 15, }, fechas: { fechainicio: new Date("2016-06-03"), fechanacimiento: new Date("2003-05-04") }, tienelesion: false, altura:1.84 , nacionalidad: ["española"], temporadas: [2021, 2020, 2019, 2018, 2017], asistencia: "total", clubes: ["Cocodrilos"], comentario: "buen jugador",},

{_id: 5, equpoactual:"Cocodrilos", nombre: "Javier", posicion: ["base", "alero"], estadisticas: { rebotes2021: {ofensivos: 4, defensivos: 3}, robos2021: 6, puntos2021: 10, juegos: 16, }, fechas: { fechainicio: new Date("2015-06-01"), fechanacimiento: new Date("2003-02-09") }, tienelesion: false, altura: 1.78, nacionalidad: ["española", "china"], temporadas: [2021, 2020, 2019, 2018, 2017], asistencia: "total", clubes: ["Cocodrilos"], },

{_id: 6, equpoactual:"Cocodrilos", nombre: "Mateo", posicion: ["escolta"], estadisticas: { rebotes2021: {ofensivos: 5, defensivos: 4}, robos2021: 4, puntos2021: 8, juegos: 18, }, fechas: { fechainicio: new Date("2019-06-10"), fechanacimiento: new Date("2003-03-06") }, tienelesion: false, altura:1.71 , nacionalidad: ["española"], temporadas: [2021, 2020, 2019], asistencia: "total", clubes: ["Cocodrilos","Los Angeles", "Chicago Bulls"], comentario: "agil",},

{_id: 7, equpoactual:"Cocodrilos", nombre: "Marcos", posicion: ["alapivot", "pivot"], estadisticas: { rebotes2021: {ofensivos: 4, defensivos: 3}, robos2021: 3, puntos2021: 21, juegos: 17, }, fechas: { fechainicio: new Date("2018-06-17"), fechanacimiento: new Date("2005-07-06") }, tienelesion: false, altura: 2.01, nacionalidad: ["española"], temporadas: [2021, 2020, 2019, 2018], asistencia: "media", clubes: ["Cocodrilos","Los Angeles", "Chicago Bulls"]},

{_id: 8, equpoactual:"Cocodrilos", nombre: "Juan", posicion: ["pivot"], estadisticas: { rebotes2021: {ofensivos: 3, defensivos: 3}, robos2021: 0, puntos2021: 7, juegos: 8, }, fechas: { fechainicio: new Date("2020-06-06"), fechanacimiento: new Date("2004-06-09") }, tienelesion: true, altura: 1.82, nacionalidad: ["estadounidense", "china"], temporadas: [2021, 2020], asistencia: "fatal", clubes: ["Cocodrilos"]},

{_id: 9, equpoactual:"Cocodrilos", nombre: "Lucas", posicion: ["base"], estadisticas: { rebotes2021: {ofensivos: 1, defensivos: 2}, robos2021: 3, puntos2021: 10, juegos: 18, }, fechas: { fechainicio: new Date("2018-06-02"), fechanacimiento: new Date("2003-06-12") }, tienelesion: false, altura: 1.78, nacionalidad: ["española"], temporadas: [2021, 2020, 2019, 2018], asistencia: "media", clubes: ["Cocodrilos","Los Angeles", "Chicago Bulls"]},

{_id: 10, equpoactual:"Cocodrilos", nombre: "Emanuel", posicion: ["pivot"], estadisticas: { rebotes2021: {ofensivos: 2, defensivos: 5}, robos2021: 2, puntos2021: 26, juegos: 18, }, fechas: { fechainicio: new Date("2017-06-12"), fechanacimiento: new Date("2003-12-06") }, tienelesion: false, altura: 1.95, nacionalidad: ["española"], temporadas: [2021, 2020, 2019, 2018, 2017], asistencia: "total", clubes: ["Cocodrilos"], comentario: "espectacular"},

])

db.competi.deleteMany({})
db.competi.insertMany([
    {
        _id:"01",
        equipo:["Cocodrilos", "trampa"],
        arbitro:"a",
        puntos:45,
        faltas:5,
        jugadordepartido:{
            _idj: 8,
            nombre:"Juan",
        }
    },

    {
        _id:"02",
        equipo:[ "trampa","Cocodrilos"],
        arbitro:"b",
        puntos:30,
        faltas:15,
        jugadordepartido:{
            _id: 1,
            nombre:"Jesús",
        }
    },
    {
        _id:"03",
        equipo:["Cocodrilos", "trampa"],
        arbitro:"c",
        puntos:33,
        faltas:10,
        jugadordepartido:{
            _id: 8,
            nombre:"Juan",
        }
    },
    {
        _id:"04",
        equipo:["Cocodrilos", "trampa"],
        arbitro:"b",
        puntos:18,
        faltas:5,
        jugadordepartido:{
            _id: 3,
            nombre:"James",
        }
    },
    {
        _id:"05",
        equipo:["Cocodrilos", "trampa"],
        arbitro:"a",
        puntos:20,
        faltas:20,
        jugadordepartido:{
            _id: 1,
            nombre:"Jesús",
        }
    },
    {
        _id:"06",
        equipo:["trampa", "trampa2"],
        arbitro:"e",
        puntos:20,
        faltas:20,
        jugadordepartido:{
            _id: 20,
            nombre:"luis",
        }
    },
    
])
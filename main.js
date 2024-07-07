let nombreEdificioAntiguo   = "Pirámides";
let nombreEdificioEdadMedia = "Taj majal";
let nombreEdificioModerno   = "Torre Dubai";

let edadEdificioAntiguo = 500;
let edadEdificioMedio   = 1631;
let edadEdificioModerno = 2020;

let lugarAntiguo = "Egipto";
let lugarMedio   = "India";
let lugarModerno = "Dubai";

let rutaImagenEdificioAntiguo = "https://picsum.photos/700/400?random";
let rutaImagenEdificioMedio   = "https://picsum.photos/700/400?random";
let rutaImagenEdificioModerno = "https://source.unsplash.com/300x300?building";

antiguo.innerHTML = "<img src = 'https://picsum.photos/400/400?random'/>" +
                    "<h2>" + nombreEdificioAntiguo + "</h2>" + 
                    "<p>" + edadEdificioAntiguo + "</p>" + 
                    "<p>" + lugarAntiguo + "</p>";
medio2.innerHTML = "<img src = 'https://picsum.photos/400/400?random'>" +
                  "<h2>" + nombreEdificioEdadMedia + "</h2>" + 
                  "<p>" + edadEdificioMedio + "</p>" +
                  "<p>" + lugarMedio + "</p>";
moderno.innerHTML = "<img src = 'https://picsum.photos/400/400?random'>" +
                    "<h2>" + nombreEdificioModerno + "</h2>" + 
                    "<p>" + edadEdificioModerno + "</p>" +
                    "<p>" + lugarModerno + "</p>";
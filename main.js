let nombreEdificioAntiguo   = "Pirámides";
let nombreEdificioEdadMedia = "Taj majal";
let nombreEdificioModerno   = "Torre Dubai";

let edadEdificioAntiguo = 500;
let edadEdificioMedio   = 1631;
let edadEdificioModerno = 2020;

let lugarAntiguo = "Egipto";
let lugarMedio   = "India";
let lugarModerno = "Dubai";

let rutaImagenEdificioAntiguo = "https://source.unsplash.com/300x300?pyramid";
let rutaImagenEdificioMedio   = "https://source.unsplash.com/300x300?building";
let rutaImagenEdificioModerno = "https://source.unsplash.com/300x300?building";

antiguo.innerHTML = "<img src = 'https://source.unsplash.com/300x300?pyramid'>" +
                    "<h2>" + nombreEdificioAntiguo + "</h2>" + 
                    "<p>" + edadEdificioAntiguo + "</p>" + 
                    "<p>" + lugarAntiguo + "</p>";
medio.innerHTML = "<img src = 'https://source.unsplash.com/300x300?building'>"
                  "<h2>" + nombreEdificioEdadMedia + "</h2>" + 
                  "<p>" + edadEdificioMedio + "</p>" +
                  "<p>" + lugarMedioo + "</p>";
moderno.innerHTML = "<img src = 'https://source.unsplash.com/300x300?building'>"
                    "<h2>" + nombreEdificioModerno + "</h2>" + 
                    "<p>" + edadEdificioModerno + "</p>" +
                    "<p>" + lugarModerno + "</p>";
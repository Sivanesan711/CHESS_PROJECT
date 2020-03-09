console.log("PROJECT_CHESS")
queen = {
    direction: "S",
    position: {
        Xcoordinates: 4,
        Ycoordinates: 4
    }
}
console.log("Constant position of queen: " + queen.position.Xcoordinates, queen.position.Ycoordinates);

function updatePosition(x, y) {
    queen.position.Xcoordinates = x;
    queen.position.Ycoordinates = y;
}

function moveforward(direction) {

    switch (direction) {
        case "S":
            if (queen.position.Ycoordinates > 0 && queen.position.Ycoordinates < 8) {
                queen.position.Ycoordinates = queen.position.Ycoordinates - 1;

            } else {
                console.log("Out of move.");
            }
            break;

        case "N":
            if (queen.position.Ycoordinates >= 0 && queen.position.Ycoordinates < 7) {
                queen.position.Ycoordinates = queen.position.Ycoordinates + 1;

            } else {
                console.log("Out of move.");
            }
            break;

        case "E":
            if (queen.position.Xcoordinates >= 0 && queen.position.Xcoordinates < 7) {
                queen.position.Xcoordinates = queen.position.Xcoordinates + 1;

            } else {
                console.log("Out of move.");
            }
            break;

        case "W":
            if (queen.position.Xcoordinates > 0 && queen.position.Xcoordinates < 8) {
                queen.position.Xcoordinates = queen.position.Xcoordinates - 1;

            } else {
                console.log("Out of move.");
            }
            break;

        case "SW":
            if (queen.position.Ycoordinates > 0 && queen.position.Ycoordinates < 8) {
                if (queen.position.Xcoordinates > 0 && queen.position.Xcoordinates < 8) {
                    let x = queen.position.Xcoordinates - 1;
                    let y = queen.position.Ycoordinates - 1;
                    updatePosition(x, y);
                }
            } else {
                console.log("Out of move.");
            }
            break;

        case "SE":
            if (queen.position.Xcoordinates >= 0 && queen.position.Xcoordinates < 7) {
                if (queen.position.Ycoordinates > 0 && queen.position.Ycoordinates <= 7) {
                    let x = queen.position.Xcoordinates + 1;
                    let y = queen.position.Ycoordinates - 1;
                    updatePosition(x, y);
                }
            } else {
                console.log("Out of move.");
            }
            break;

        case "NE":
            if (queen.position.Xcoordinates >= 0 && queen.position.Xcoordinates < 7) {
                if (queen.position.Ycoordinates >= 0 && queen.position.Ycoordinates < 7) {
                    let x = queen.position.Xcoordinates + 1;
                    let y = queen.position.Ycoordinates + 1;
                    updatePosition(x, y);
                }

            } else {
                console.log("Out of move.");
            }
            break;

        case "NW":
            if (queen.position.Xcoordinates > 0 && queen.position.Ycoordinates < 7) {
                if (queen.position.Xcoordinates <= 7 && queen.position.Ycoordinates >= 0) {
                    let x = queen.position.Xcoordinates - 1;
                    let y = queen.position.Ycoordinates + 1;
                    updatePosition(x, y);
                }
            } else {
                console.log("Out of move.");
            }
            break;
    }
}

function changeDirection(direction) {
    let dir = direction
    queen.direction = dir;
    return dir;
}

function JumpFrwd(direction, Steps) {
    var temp = 0;
    var temp1 = 0;
    switch (direction) {
        case "N":
            temp = queen.position.Ycoordinates + Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.Ycoordinates = queen.position.Ycoordinates + Steps;
            } else {
                console.log("Out of move");
            }
            break;

        case "S":
            temp = queen.position.Ycoordinates - Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.Ycoordinates = queen.position.Ycoordinates - Steps;
            } else {
                console.log("Out of move");
            }
            break;

        case "E":
            temp = queen.position.Xcoordinates + Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.Xcoordinates = queen.position.Xcoordinates + Steps;
            } else {
                console.log("Out of move");
            }
            break;

        case "W":
            temp = queen.position.Xcoordinates - Steps;
            if (temp < 8 && temp >= 0) {
                queen.position.Xcoordinates = queen.position.Xcoordinates - Steps;
            } else {
                console.log("Out of move");
            }
            break;

        case "NE":
            temp = queen.position.Ycoordinates + Steps;
            temp1 = queen.position.Xcoordinates + Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.Ycoordinates = queen.position.Ycoordinates + Steps;
                    queen.position.Xcoordinates = queen.position.Xcoordinates + Steps;
                }
            }
            break;

        case "SE":
            temp = queen.position.Ycoordinates - Steps;
            temp1 = queen.position.Xcoordinates + Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.Ycoordinates = queen.position.Ycoordinates - Steps;
                    queen.position.Xcoordinates = queen.position.Xcoordinates + Steps;
                }
            }
            break;

        case "NW":
            temp = queen.position.Ycoordinates + Steps;
            temp1 = queen.position.Xcoordinates - Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.Ycoordinates = queen.position.Ycoordinates + Steps;
                    queen.position.Xcoordinates = queen.position.Xcoordinates - Steps;
                }
            }
            break;

        case "SW":
            temp = queen.position.Ycoordinates - Steps;
            temp1 = queen.position.Xcoordinates - Steps;
            if (temp < 8 && temp >= 0) {
                if (temp1 < 8 && temp1 >= 0) {
                    queen.position.Ycoordinates = queen.position.Ycoordinates - Steps;
                    queen.position.Xcoordinates = queen.position.Xcoordinates - Steps;
                }
            }
            break;

    }
}

let north = changeDirection("N");
JumpFrwd(north,3);
console.log("Updated position of queen : "+queen.position.Xcoordinates,queen.position.Ycoordinates);

let northeast = changeDirection("NE");
JumpFrwd(northeast,2)
console.log("Updated position of queen : "+queen.position.Xcoordinates,queen.position.Ycoordinates);

let northwest = changeDirection("NW");
JumpFrwd(northwest,2)
console.log("Updated position of queen : "+queen.position.Xcoordinates,queen.position.Ycoordinates);

let south = changeDirection("S");
JumpFrwd(south,3)
console.log("Updated position of queen : "+queen.position.Xcoordinates,queen.position.Ycoordinates);

let southeast = changeDirection("SE");
JumpFrwd(southeast,1)
console.log("Updated position of queen : "+queen.position.Xcoordinates,queen.position.Ycoordinates);

let southwest = changeDirection("SW");
JumpFrwd(southwest,3)
console.log("Updated position of queen : "+queen.position.Xcoordinates,queen.position.Ycoordinates);

let east = changeDirection("E");
JumpFrwd(east,2)
console.log("Updated position of queen : "+queen.position.Xcoordinates,queen.position.Ycoordinates);

let west = changeDirection("W");
JumpFrwd(west,3)
console.log("Updated position of queen : "+queen.position.Xcoordinates,queen.position.Ycoordinates);



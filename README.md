# Robot Challenge

This is a command application that controlls a robot moving or turning on a tabletop. The tabletop is default as a 5x5 square. 

## Requirement
 - Node: 16+
 - OS: MacOS is preferred 
 - CLI: any compatible cli tools.(iTerms or others)

## Install packages
Install the npm packages
```bash
npm install
```

## Run tests

```bash
npm run test
```

## Run build
This step build the artifact in `build` folder.

```
npm run build
```

## Run the application

Type the following command in console. You will see `starting robot challenge` at the end.
```bash
npm run start
...
starting robot challenge
```

Then you can type commands to control robot. 

```plain
PLACE 0,0,NORTH
MOVE
REPORT
```

This will output 
```plain
Output: 0,1,NORTH
```

## Support Command

If the user types an unsupported command, the application will give an error.

### PLACE
Place a robot on a table top. 
Notice: Any position that is not valid on the table will cause robot does nothing.
arguments: 
  - x position: number
  - y position: number
  - orientation: `NORTH`, `EAST`, `WEST`, `SOURTH`

example
```
PLACE 0,0,NORTH
```

### MOVE
Move the robot one step to the facing orientation on a table top. 
Notice: Moving robot to the invalid position will cause robot does nothing.


example
```
MOVE
```

### LEFT
Turn the robot to left accordingto the current facing orientation on a table top. 

example
```
LEFT
```

### RIGHT 
Turn the robot to right accordingto the current facing orientation on a table top. 

example
```
LEFT
```

### REPORT 
Report(output) the current position and orientation of the robot

example
```
REPORT
Output: 0,1,NORTH
```

### BOARD
This will show the board map where the robot is.

example
 ```
 BOARD

  Board Map

  Robot is facing NORTH

  o--o--o--o--o
  |  |  |  |  |
  o--o--o--o--o
  |  |  |  |  |
  o--o--o--o--o
  |  |  |  |  |
  o--o--o--o--o
  |  |  |  |  |
  R--o--o--o--o
```

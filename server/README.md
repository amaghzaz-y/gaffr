# SPACELINK

### CONNECTION

The connection is done via serial or websocket.

### PROTOCOL

The protocol is a simple text based protocol.

### CLIENT COMMANDS

The commands sent by the client to the server are:

- `REGISTER <robot_name> <type> <radius> <color>`: register a robot to the network
- `POSITION <robot_name> <x> <y>`: set the positiom of a robot
- `ROTATION <robot_name> <angle>`: set the rotation of a robot
- `MSG <robot_name | server | all> <robot_destination> <message>`: send a message to a robot
- `LIDAR <robot_name> <angle> <distance>`: send a lidar point to the server




### SERVER COMMANDS

The commands sent by the server to the client are:

- `MOVE <x> <y>`: move a robot
- `ROTATE <angle>`: rotate a robot
- `ACTION <action_id>`: perform an action by ID
- `MSG <robot_name | server> <message>`: message received from another robot


### SIMULATOR COMMANDS
The commands received by the simulator are:
- `ADD <robot_name> <type> <x> <y> <angle> <radius> <color>`: register a robot to the simulation
- `MOVE <robot_name> <x> <y>`: move a robot
- `ROTATE <robot_name> <angle>`: rotate a robot
- `ACTION <robot_name> <action_id>`: perform an action by ID
- `MSG <source> <message>`: message received from another robot

### RETURN VALUES

Both the client and the server can return one of the following values:

- `OK`: the command was successful
- `ERROR`: the command was not successful
- `CMD_ERR` : the command is not valid
- `TIMEOUT`: the command timed out
- `NOT_REGISTERED`: the robot is not registered (server only)

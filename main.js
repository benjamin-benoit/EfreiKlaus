const Figurine = require('./Figurine')
const Pony = require('./Pony')
const DragonBall = require('./DragonBall')
const Toy = require('./Toy')

console.log("--- STEP #1 ---")

var pony = new Pony()
var goku = new DragonBall.DragonBall(DragonBall.DBHeroes.SANGOKU)

pony.isMoved()
goku.isMoved()
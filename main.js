const Figurine = require('./Figurine')
const Pony = require('./Pony')
const DragonBall = require('./DragonBall')
const Toy = require('./Toy')
const Elf = require('./Elf')
const Box = require('./Box')
const GiftWrap = require('./GiftWrap')

console.log("--- STEP #1 ---")

var pony = new Pony()
var goku = new DragonBall.DragonBall(DragonBall.DBHeroes.SANGOKU)

pony.isMoved()
goku.isMoved()

console.log('--- STEP #2 ---')

var majdi = new Elf('makiboto')
var box = new Box()
majdi.pack(box, goku)
box.open()
majdi.pack(box, goku)

var paper = new GiftWrap()
majdi.pack(paper, pony)
majdi.pack(paper, pony)

var toy = majdi.unpack(paper)
console.log(toy === pony)
var r = majdi.unpack(paper)
console.log((r == null))
import Figurine from './protocol.Figurine'
import Pony from './class.Pony'
import DragonBall from './class.DragonBall'
import Toy from './protocol.Toy'
import Elf from './class.Elf'
import Box from './class.Box'
import GiftWrap from './class.GiftWrap'

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
import Pony from './class.Pony'
import DragonBall , {DBHeroes} from './class.DragonBall'
import Elf from './class.Elf'
import Box from './class.Box'
import GiftWrap from './class.GiftWrap'

// Step #1
console.log("--- STEP #1 ---")

var pony = new Pony()
var goku = new DragonBall(DBHeroes.SANGOKU)

pony.isMoved()
goku.isMoved()

// Step #2
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
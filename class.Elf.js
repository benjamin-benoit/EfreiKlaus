import GiftWrap from "./class.GiftWrap"

export default class Elf {
    constructor(nickname) {
        this.nickname = nickname
    }
    getNickname(){
        return this.nickname
    }
    setNickname(nickname){
        this.nickname = nickname
    }
    pack(packaging, toy){
        if(packaging.toy) {
            console.log("Sorry this package already filled")
        }
        else {
            if(packaging.isOpen || packaging instanceof GiftWrap) {
                packaging.insert(toy)
                console.log(`Yeaaaah! Just packing the toy ~~ ${packaging.toy.getType()} ~~`)
            } else {
                console.log("Sorry this package already filled")
            }
        }
    }

    unpack(packaging){
        if(packaging.isOpen || !packaging.toy) {
            console.log("Sorry this package is already empty")
        } else {
            let toys= packaging.toy
            console.log(`Ooooooh! Just unpacking the toy ~~ ${packaging.toy.getType()} ~~`)
            packaging.toy = null
            return toys
        }
    }
}
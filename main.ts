function hero () {
    hero2 = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 8 8 f f f . . . . 
. . . f f f 8 8 8 8 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 8 8 8 8 8 8 e e f . . 
. . f e 8 f f f f f f 8 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f f f f d d d d d e e f . . 
. f d d d d f 4 4 4 e e f . . . 
. f b b b b f 8 8 8 8 f 4 e . . 
. f b b b b f 8 8 8 8 f d 4 . . 
. . f c c f 4 5 5 4 4 f 4 4 . . 
. . . f f f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
    hero2.setPosition(147, 65)
    controller.moveSprite(hero2)
}
function cloud () {
    cloud2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . 
. . . . . . . b b b 1 1 1 1 1 1 1 1 1 1 1 1 b b b . . . . . . . 
. . . . . c b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b . . . . . 
. . . . c b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b . . . . 
. . . c b 3 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b . . . 
. . c b 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 c . . 
. c b 1 1 1 1 1 1 1 1 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b c . 
c b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b c 
c b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b c 
c c b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b c c 
. c c b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b b b b c c . 
. . c c c b b b b b b b b b b b b b b b b b b b b b b c c c . . 
. . . . . c c c c c c c c c c c c c c c c c c c c c c . . . . . 
. . . . . . . . . . b b b d d d d 1 1 d b b . . . . . . . . . . 
`, 100, 0)
    cloud2.setPosition(72, 17)
}
function score () {
    info.changeScoreBy(1)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . f f . . . . . . . . . . . . 
. . f 5 5 . . . . . . . . . . . 
. . . 5 5 5 . . . . . . . . . . 
. . . 5 5 5 5 . . . . . . f f . 
. . . . 5 5 5 5 . . . . 5 5 f . 
. . . . . 5 5 5 5 . . 5 5 5 . . 
. . . . . . 5 5 5 5 5 5 5 . . . 
. . . . . . . 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero2, 0, -50)
})
function snow2 () {
    snow = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . 1 . . . . 1 . . . . 1 . . . 
. . . 1 . . . 1 . . . 1 . . . . 
. . . . 1 . . 1 . . 1 . . . . . 
. . . . . 1 . 1 . 1 . . . . . . 
. . . . . . 1 1 1 . . . . . . . 
. 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
. . . . . . 1 1 1 . . . . . . . 
. . . . . 1 . 1 . 1 . . . . . . 
. . . . 1 . . 1 . . 1 . . . . . 
. . . 1 . . . 1 . . . 1 . . . . 
. . 1 . . . . 1 . . . . 1 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero2, 0, 100)
    snow.setPosition(72, 17)
    snow.y += 0
    snow.x += Math.randomRange(0, 10)
}
function ball () {
	
}
let snow: Sprite = null
let projectile: Sprite = null
let cloud2: Sprite = null
let hero2: Sprite = null
hero()
score()
cloud()
snow()
ball()
game.onUpdateInterval(100, function () {
    snow()
    cloud()
})

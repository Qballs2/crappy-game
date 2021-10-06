sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(mySprite2, assets.tile`Toilet tile`)
})
let mySprite2: Sprite = null
music.setVolume(20)
game.splash("Directions: make the poop get as many toilets as possible in 30 seconds!")
game.splash("Poop: the game of life.         Press A to begin")
info.startCountdown(30)
info.setScore(0)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . f d . . . . . . . . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . . . . . e e e . . . . 
    . . . . . . . . . e e 7 e . d f 
    . . . . . e e . . e e e e . . d 
    . . . . e 1 1 e e 1 1 e e . . . 
    . . . . e 1 f e 5 1 f e . . . . 
    . . . e e f f e e f f e . . . . 
    . . . e e e e 7 e e e e c . . . 
    . . . e 1 1 1 1 1 1 e e c . . . 
    . e e e f f f f f f e e c . . . 
    . e b e e 1 1 1 1 e e c c . . . 
    . . c c c c c c c c c c . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(assets.image`Turlet`, SpriteKind.Projectile)
tiles.placeOnRandomTile(mySprite2, assets.tile`Toilet tile`)

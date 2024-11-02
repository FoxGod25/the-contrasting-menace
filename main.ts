namespace SpriteKind {
    export const theMan = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (Battle == true) {
        if (controller.A.isPressed()) {
            game.showLongText("You are on guard.", DialogLayout.Bottom)
            if (Math.percentChance(75)) {
                game.showLongText("Contrast Attacks!", DialogLayout.Bottom)
                info.changeLifeBy(randint(-5, -10))
            } else {
                game.showLongText("Contrast regenerates it's particles.", DialogLayout.Bottom)
                statusbar.value += 30
            }
            tiles.setTileAt(location, assets.tile`transparency16`)
            pause(100)
            tiles.setTileAt(location, assets.tile`myTile1`)
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite3,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        b f f e f 2 f e e f 2 f e f f . 
        b b c c f f e e e e f e e e f . 
        . b c c c c e e e e e e e f . . 
        . . f f f c c c e e e e f . . . 
        . . e 4 f f c c c f f f 4 e . . 
        . . 4 d f 2 f f c c 2 f d 4 . . 
        . . 4 4 f 4 4 4 f c c f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        b . f e 2 f f e e 2 f e e f . . 
        b b c c e f e e e f e e e f f . 
        . b f c c c e e e e e e e f f . 
        . . . f f f c c e e e e f . . . 
        . . . e f f f c c c f f 4 e . . 
        . . . 4 f 2 2 f f c e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        b f f e f 2 f e e f 2 f e f f . 
        b b c c f f e e e e f e e e f . 
        . b c c c c e e e e e e e f . . 
        . . f f f c c c e e e e f . . . 
        . . e 4 f f c c c f f f 4 e . . 
        . . 4 d f 2 f f c c 2 f d 4 . . 
        . . 4 4 f 4 4 4 f f c f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        b . f f f 2 2 e e f 2 f f f . . 
        b b c c e f 2 e e f f 2 e f . . 
        . b c c c e f e e e f f e f f . 
        . f f c c c c c e e e e e f f . 
        . . . f c c c c c c e e f . . . 
        . . e 4 f f f f c c c f e . . . 
        . . 4 d d e 2 2 f f c f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    250,
    true
    )
})
sprites.onOverlap(SpriteKind.theMan, SpriteKind.Enemy, function (sprite, otherSprite) {
    inBattle()
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (Battle == true) {
        if (controller.A.isPressed()) {
            game.showLongText("You attacked!", DialogLayout.Bottom)
            statusbar.value += randint(-7, -15)
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . . 1 1 1 1 1 1 1 1 . . . . . 
                . . . . 1 1 1 1 1 1 1 1 1 1 . . . . 
                . . . 1 1 f 1 f f f f 1 f 1 1 . . . 
                . . . 1 f f 1 f f f f 1 f f 1 . . . 
                . . . 1 f f 1 f f f f 1 f f 1 . . . 
                . . . 1 f f 1 f 1 1 f 1 f f 1 . . . 
                . . . 1 f f f f 1 1 f f f f 1 . . . 
                . . 1 f 1 f f f 1 1 f f f 1 f 1 . . 
                . 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 . 
                . 1 f f f f f f f f f f f f f f 1 . 
                . 1 f f f f f f f f f f f f f f 1 . 
                . 1 1 1 1 f f f f f f f f 1 1 1 1 . 
                . . . . 1 f f f f f f f f 1 . . . . 
                . . . 1 f f f f f f f f f f 1 . . . 
                . . 1 f f 1 1 1 1 1 1 1 1 f f 1 . . 
                . . 1 1 1 1 . . . . . . 1 1 1 1 . . 
                `,img`
                . . . . . 1 1 1 1 2 1 1 1 . . . . . 
                . . . . 1 1 1 1 1 2 1 1 1 1 . . . . 
                . . . 1 1 f 1 f 2 2 f 1 f 1 1 . . . 
                . . . 1 f f 1 f 2 f f 1 f f 1 . . . 
                . . . 1 f f 1 f 2 f f 1 f f 1 . . . 
                . . . 1 f f 1 f 1 1 f 1 f f 1 . . . 
                . . . 1 f f f f 1 1 f f f f 1 . . . 
                . . 1 f 1 f f f 1 1 f f f 1 f 1 . . 
                . 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 . 
                . 1 f f f f f f f f f f f f f f 1 . 
                . 1 f f f f f f f f f f f f f f 1 . 
                . 1 1 1 1 f f f f f f f f 1 1 1 1 . 
                . . . . 1 f f f f f f f f 1 . . . . 
                . . . 1 f f f f f f f f f f 1 . . . 
                . . 1 f f 1 1 1 1 1 1 1 1 f f 1 . . 
                . . 1 1 1 1 . . . . . . 1 1 1 1 . . 
                `,img`
                . . . . 1 1 1 1 2 1 1 1 . . . . . . 
                . . . 1 1 1 1 1 2 1 1 1 1 . . . . . 
                . . 1 1 f 1 f 2 2 f 1 f 1 1 . . . . 
                . . 1 f f 1 f 2 f f 1 f f 1 . . . . 
                . . 1 f f 1 f 2 f f 1 f f 1 . . . . 
                . . 1 f f 1 f 2 1 f 1 f f 1 . . . . 
                . . 1 f f f f 2 1 f f f f 1 . . . . 
                . 1 f 1 f f f 2 1 f f f 1 f 1 . . . 
                1 f 1 1 1 1 1 2 1 1 1 1 1 1 f 1 . . 
                1 f f f f f f f f f f f f f f 1 . . 
                1 f f f f f f f f f f f f f f 1 . . 
                1 1 1 1 f f f f f f f f 1 1 1 1 . . 
                . . . 1 f f f f f f f f 1 . . . . . 
                . . 1 f f f f f f f f f f 1 . . . . 
                . 1 f f 1 1 1 1 1 1 1 1 f f 1 . . . 
                . 1 1 1 1 . . . . . . 1 1 1 1 . . . 
                `,img`
                . . . . . . 1 1 1 1 2 1 1 1 . . . . 
                . . . . . 1 1 1 1 1 2 1 1 1 1 . . . 
                . . . . 1 1 f 1 f 2 2 f 1 f 1 1 . . 
                . . . . 1 f f 1 f 2 f f 1 f f 1 . . 
                . . . . 1 f f 1 f 2 f f 1 f f 1 . . 
                . . . . 1 f f 1 f 2 1 f 1 f f 1 . . 
                . . . . 1 f f f f 2 1 f f f f 1 . . 
                . . . 1 f 1 f f f 2 1 f f f 1 f 1 . 
                . . 1 f 1 1 1 1 1 2 1 1 1 1 1 1 f 1 
                . . 1 f f f f f f 2 f f f f f f f 1 
                . . 1 f f f f f f 2 f f f f f f f 1 
                . . 1 1 1 1 f f f f f f f f 1 1 1 1 
                . . . . . 1 f f f f f f f f 1 . . . 
                . . . . 1 f f f f f f f f f f 1 . . 
                . . . 1 f f 1 1 1 1 1 1 1 1 f f 1 . 
                . . . 1 1 1 1 . . . . . . 1 1 1 1 . 
                `,img`
                . . . . 1 1 1 1 2 1 1 1 . . . . . . 
                . . . 1 1 1 1 1 2 1 1 1 1 . . . . . 
                . . 1 1 f 1 f 2 2 f 1 f 1 1 . . . . 
                . . 1 f f 1 f 2 f f 1 f f 1 . . . . 
                . . 1 f f 1 f 2 f f 1 f f 1 . . . . 
                . . 1 f f 1 f 2 1 f 1 f f 1 . . . . 
                . . 1 f f f f 2 1 f f f f 1 . . . . 
                . 1 f 1 f f f 2 1 f f f 1 f 1 . . . 
                1 f 1 1 1 1 1 2 1 1 1 1 1 1 f 1 . . 
                1 f f f f f f 2 f f f f f f f 1 . . 
                1 f f f f f f 2 f f f f f f f 1 . . 
                1 1 1 1 f f f 2 2 f f f 1 1 1 1 . . 
                . . . 1 f f f f 2 f f f 1 . . . . . 
                . . 1 f f f f f 2 f f f f 1 . . . . 
                . 1 f f 1 1 1 1 1 1 1 1 f f 1 . . . 
                . 1 1 1 1 . . . . . . 1 1 1 1 . . . 
                `,img`
                . . . . . 1 1 1 1 1 1 1 1 . . . . . 
                . . . . 1 1 1 1 1 1 1 1 1 1 . . . . 
                . . . 1 1 f 1 f f f f 1 f 1 1 . . . 
                . . . 1 f f 1 f f f f 1 f f 1 . . . 
                . . . 1 f f 1 f f f f 1 f f 1 . . . 
                . . . 1 f f 1 f 1 1 f 1 f f 1 . . . 
                . . . 1 f f f f 1 1 f f f f 1 . . . 
                . . 1 f 1 f f f 1 1 f f f 1 f 1 . . 
                . 1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 . 
                . 1 f f f f f f f f f f f f f f 1 . 
                . 1 f f f f f f f f f f f f f f 1 . 
                . 1 1 1 1 f f f f f f f f 1 1 1 1 . 
                . . . . 1 f f f f f f f f 1 . . . . 
                . . . 1 f f f f f f f f f f 1 . . . 
                . . 1 f f 1 1 1 1 1 1 1 1 f f 1 . . 
                . . 1 1 1 1 . . . . . . 1 1 1 1 . . 
                `],
            100,
            false
            )
            game.showLongText("Contrast Attacks!", DialogLayout.Bottom)
            if (Math.percentChance(75)) {
                game.showLongText("Contrast Attacks!", DialogLayout.Bottom)
                info.changeLifeBy(randint(-10, -15))
            } else {
                game.showLongText("Contrast regenerates it's particles.", DialogLayout.Bottom)
                statusbar.value += 30
            }
            tiles.setTileAt(location, assets.tile`transparency16`)
            pause(100)
            tiles.setTileAt(location, assets.tile`myTile`)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (Battle == true) {
        if (controller.A.isPressed()) {
            if (Math.percentChance(95)) {
                game.showLongText("You eat a sandwich. HP +20!", DialogLayout.Bottom)
                info.changeLifeBy(20)
            } else {
                game.showLongText("You eat a SOGGY sandwich. You retch out your last meal.", DialogLayout.Bottom)
                info.setLife(11)
            }
            if (Math.percentChance(75)) {
                game.showLongText("Contrast Attacks!", DialogLayout.Bottom)
                info.changeLifeBy(randint(-10, -15))
            } else {
                game.showLongText("Contrast regenerates it's particles.", DialogLayout.Bottom)
                statusbar.value += 30
            }
            tiles.setTileAt(location, assets.tile`transparency16`)
            pause(100)
            tiles.setTileAt(location, assets.tile`myTile4`)
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite3)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Battle == true) {
        if (mySprite.tileKindAt(TileDirection.Left, assets.tile`transparency16`)) {
        	
        } else {
            Button += -1
            if (Button == 0) {
                tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
            } else if (Button == 1) {
                tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
            }
        }
    } else {
        animation.runImageAnimation(
        mySprite3,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e b f . . 
            . f b b f e e e 4 e e f c . . . 
            . f b b e d d 4 2 2 2 f c . . . 
            . . f b e d d e 4 4 4 f f . . . 
            . . . f f e e f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . . f e d d f 1 4 d 4 e e f . 
            . . . . f d d d e e e e b f . . 
            . . . . f e 4 e d d 4 f c . . . 
            . . . . f 2 2 e d d e f c . . . 
            . . . f f 5 5 f e e f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e b f . . 
            . f b b f e e e 4 e e f c . . . 
            . f b b e d d 4 2 2 2 f c . . . 
            . . f b e d d e 2 2 2 e c . . . 
            . . . f f e e f 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e b f . . . 
            . . . f e 4 e d d 4 f c . . . . 
            . . . f 2 2 e d d e f c . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        250,
        true
        )
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite3)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite3)
})
function inBattle () {
    Battle = true
    info.setLife(HP)
    mySprite = sprites.create(img`
        1 1 f . f 1 f . . . . . . . . . 
        1 1 1 f 1 1 1 f . . . . . . . . 
        f 1 1 1 1 1 1 f . . . . . . . . 
        . f 1 1 1 1 1 1 f . . . . . . . 
        f 1 1 1 1 1 1 1 f . . . . . . . 
        1 1 1 1 1 1 1 1 f . . . . . . . 
        f 1 1 1 1 1 1 1 f . . . . . . . 
        . f f 1 1 1 1 1 f . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(mySprite, 0, 0)
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(4, 4))
    controller.moveSprite(mySprite3, 0, 0)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile`)
    scene.cameraFollowSprite(mySprite)
    Button = 0
    if (Math.percentChance(90)) {
        mySprite2 = sprites.create(img`
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 f 1 f f f f 1 f 1 1 . . 
            . . 1 f f 1 f f f f 1 f f 1 . . 
            . . 1 f f 1 f f f f 1 f f 1 . . 
            . . 1 f f 1 f 1 1 f 1 f f 1 . . 
            . . 1 f f f f 1 1 f f f f 1 . . 
            . 1 f 1 f f f 1 1 f f f 1 f 1 . 
            1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
            1 f f f f f f f f f f f f f f 1 
            1 f f f f f f f f f f f f f f 1 
            1 1 1 1 f f f f f f f f 1 1 1 1 
            . . . 1 f f f f f f f f 1 . . . 
            . . 1 f f f f f f f f f f 1 . . 
            . 1 f f 1 1 1 1 1 1 1 1 f f 1 . 
            . 1 1 1 1 . . . . . . 1 1 1 1 . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(mySprite2, tiles.getTileLocation(4, 2))
        statusbar = statusbars.create(30, 4, StatusBarKind.EnemyHealth)
        statusbar.attachToSprite(mySprite2)
        statusbar.setColor(15, 1)
        statusbar.setBarBorder(1, 1)
        statusbar.max = 100
        statusbar.value = 100
    } else {
        location = 2
        for (let index = 0; index < 2; index++) {
            mySprite2 = sprites.create(img`
                . . . . 1 1 1 1 1 1 1 1 . . . . 
                . . . 1 1 1 1 1 1 1 1 1 1 . . . 
                . . 1 1 f 1 f f f f 1 f 1 1 . . 
                . . 1 f f 1 f f f f 1 f f 1 . . 
                . . 1 f f 1 f f f f 1 f f 1 . . 
                . . 1 f f 1 f 1 1 f 1 f f 1 . . 
                . . 1 f f f f 1 1 f f f f 1 . . 
                . 1 f 1 f f f 1 1 f f f 1 f 1 . 
                1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
                1 f f f f f f f f f f f f f f 1 
                1 f f f f f f f f f f f f f f 1 
                1 1 1 1 f f f f f f f f 1 1 1 1 
                . . . 1 f f f f f f f f 1 . . . 
                . . 1 f f f f f f f f f f 1 . . 
                . 1 f f 1 1 1 1 1 1 1 1 f f 1 . 
                . 1 1 1 1 . . . . . . 1 1 1 1 . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(mySprite2, tiles.getTileLocation(location, 2))
            statusbar = statusbars.create(30, 4, StatusBarKind.EnemyHealth)
            statusbar.attachToSprite(mySprite2)
            statusbar.setColor(15, 1)
            statusbar.setBarBorder(1, 1)
            statusbar.max = 100
            statusbar.value = 100
            location += 2
        }
    }
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    tiles.setCurrentTilemap(tilemap`level3`)
    sprites.destroy(mySprite)
    sprites.destroy(mySprite2)
    info.changeScoreBy(1)
    Battle = false
    HP += 10
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Battle == true) {
        if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile5`)) {
        	
        } else {
            Button += 1
            if (Button == 1) {
                tiles.placeOnRandomTile(mySprite, assets.tile`myTile1`)
            } else if (Button == 2) {
                tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
            }
        }
    } else {
        animation.runImageAnimation(
        mySprite3,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f b e e 4 d d d d f d d f . 
            . . . c f e e 4 e e e f b b f . 
            . . . c f 2 2 2 4 d d e b b f . 
            . . . f f 4 4 4 e d d e b f . . 
            . . . f f f f f f e e f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f b e e e e d d d f . . . . 
            . . . c f 4 d d e 4 e f . . . . 
            . . . c f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f b e e 4 d d d d f d d f . 
            . . . c f e e 4 e e e f b b f . 
            . . . c f 2 2 2 4 d d e b b f . 
            . . . c e 2 2 2 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f b e e e e d d d f . . . 
            . . . . c f 4 d d e 4 e f . . . 
            . . . . c f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        250,
        true
        )
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite3)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite3,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f f c 
        . f f e 4 1 f d d f 1 4 e f c c 
        f d f f e 4 d d d d 4 e f e c . 
        f b f e f 2 2 2 2 e d d 4 e . . 
        f b f 4 f 2 2 2 2 e d d e . . . 
        f c f . f 4 4 5 5 f e e . . . . 
        . f f . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f c 
        . . f e f b f 4 4 f b f e f c c 
        . . f e 4 1 f d d f 1 4 e f c . 
        . . e f f f f d d d 4 e f . . . 
        . . f d d d d f 2 2 2 f e f . . 
        . . f b b b b f 2 2 2 f 4 e . . 
        . . f b b b b f 5 4 4 f . . . . 
        . . . f c c f f f f f f . . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f c 
        . . f e f b f 4 4 f b f e f c c 
        . . f e 4 1 f d d f 1 4 e f f . 
        . . e f e 4 d d d d 4 e f f d f 
        . . e 4 d d e 2 2 2 2 f e f b f 
        . . . e d d e 2 2 2 2 f 4 f b f 
        . . . . e e f 5 5 4 4 f . f c f 
        . . . . . f f f f f f f . f f . 
        . . . . . . . . . f f f . . . . 
        `],
    250,
    true
    )
})
info.onLifeZero(function () {
    game.showLongText("You passed out from major injuries!", DialogLayout.Bottom)
    game.gameOver(false)
})
let mySprite4: Sprite = null
let location = 0
let Button = 0
let mySprite: Sprite = null
let mySprite2: Sprite = null
let statusbar: StatusBarSprite = null
let HP = 0
let Battle = false
let mySprite3: Sprite = null
mySprite3 = sprites.create(img`
    ......ffff........
    ....fff22fff......
    ...fff2222fff.....
    ..fffeeeeeefff....
    ..ffe222222eef....
    ..fe2ffffff2ef....
    ..ffffeeeeffff....
    .ffefbf44fbfeff...
    .fee41fddf14eef...
    ..ffffdddddeef....
    .fddddf444eef.....
    .fbbbbf2222f4e....
    .fbbbbf2222fd4c...
    ..fccf45544f4cc...
    ...ffffffff.ccdb..
    .....ff..ff...bdb.
    ...............bdb
    ................bb
    `, SpriteKind.theMan)
controller.moveSprite(mySprite3)
tiles.setCurrentTilemap(tilemap`level3`)
scene.cameraFollowSprite(mySprite3)
Battle = false
HP = 80
game.onUpdateInterval(10000, function () {
    if (Battle == false) {
        mySprite4 = sprites.create(img`
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 1 f 1 f f f f 1 f 1 1 . . 
            . . 1 f f 1 f f f f 1 f f 1 . . 
            . . 1 f f 1 f f f f 1 f f 1 . . 
            . . 1 f f 1 f 1 1 f 1 f f 1 . . 
            . . 1 f f f f 1 1 f f f f 1 . . 
            . 1 f 1 f f f 1 1 f f f 1 f 1 . 
            1 f 1 1 1 1 1 1 1 1 1 1 1 1 f 1 
            1 f f f f f f f f f f f f f f 1 
            1 f f f f f f f f f f f f f f 1 
            1 1 1 1 f f f f f f f f 1 1 1 1 
            . . . 1 f f f f f f f f 1 . . . 
            . . 1 f f f f f f f f f f 1 . . 
            . 1 f f 1 1 1 1 1 1 1 1 f f 1 . 
            . 1 1 1 1 . . . . . . 1 1 1 1 . 
            `, SpriteKind.Enemy)
        mySprite4.follow(mySprite3, 90)
        tiles.placeOnRandomTile(mySprite4, sprites.castle.tileGrass1)
    }
})

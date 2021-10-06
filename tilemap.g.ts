// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003040404040404040404040404040405020101010101010101010101010101060201010101010101010101010101010602010101010101010101010101010106020101010101010101010101010101060201010101010101010101010101010602010101010101010101010101010106020101010101010101010101010101060201010101010101010101010101010602010101010101010101010101010106020101010101010101010101010101060201010101010101010101010101010602010101010101010101010101010106020101010101010101010101010101060708080808090a0b0b080808080808080909090909090a0b0b0b0b0b0b0b0b0b`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 . . . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tileGrass1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Toilet tile":
            case "tile1":return tile1;
            case "Toilet":
            case "tile2":return tile2;
            case "Toilet0":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

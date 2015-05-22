module Crimenuts {

    export function modelToPoint( model: PointModel ): Phaser.Point {
        return new Phaser.Point( model.X, model.Y );
    }
}
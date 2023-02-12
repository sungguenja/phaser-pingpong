export default class PingPongBall extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'ball')
    this.setScale(0.2)
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setCollideWorldBounds(true)
      .setBounce(1)
      .setInteractive()
      .on('pointerdown', () => {
        this.setVelocityY(-400)
        this.setVelocityX(-200)
      })
  }
}

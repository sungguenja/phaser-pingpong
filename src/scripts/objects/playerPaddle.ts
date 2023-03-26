export default class PlayerPaddle extends Phaser.Physics.Arcade.Sprite {
  public cursors: Phaser.Types.Input.Keyboard.CursorKeys
  public speed: number

  constructor(scene, x, y) {
    super(scene, x, y, 'ball')
    this.setScale(0.2)
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.setCollideWorldBounds(true)
    this.setImmovable()
    this.speed = 400

    this.cursors = this.scene.input.keyboard.createCursorKeys()

    // 코드가 이게 맞냐....
    this.cursors.up.on('down', this.moveUp, this)
    this.cursors.up.on('up', this.stopMovingY, this)
    this.cursors.down.on('down', this.moveDown, this)
    this.cursors.down.on('up', this.stopMovingY, this)
    this.cursors.left.on('down', this.moveLeft, this)
    this.cursors.left.on('up', this.stopMovingX, this)
    this.cursors.right.on('down', this.moveRight, this)
    this.cursors.right.on('up', this.stopMovingX, this)
  }

  moveUp() {
    this.setVelocityY(-this.speed)
  }

  moveDown() {
    this.setVelocityY(this.speed)
  }

  moveLeft() {
    this.setVelocityX(-this.speed)
  }

  moveRight() {
    this.setVelocityX(this.speed)
  }

  stopMovingY() {
    this.setVelocityY(0)
  }

  stopMovingX() {
    this.setVelocityX(0)
  }
}

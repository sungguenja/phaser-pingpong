import PhaserLogo from '../objects/phaserLogo'
import PingPongBall from '../objects/pingPongBall'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    const phaser = new PhaserLogo(this, this.cameras.main.width / 2, 0)
    const ball = new PingPongBall(this, this.cameras.main.width / 2, this.cameras.main.height / 2)
    this.fpsText = new FpsText(this)

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0)
    this.physics.add.collider(phaser, ball)
  }

  update() {
    this.fpsText.update()
  }
}

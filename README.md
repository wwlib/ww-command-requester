# remote-jibo-node

## How to run the examples

If you haven't globally install required module `yarn global add typescript`
To run an example, move to `examples`
compile it with `tsc --lib ES2015 Example.ts`
and then run `node Example.js <robot address>`,
for example, for `examples/MoveHead.ts`, do:

    cd examples &&
    tsc --lib ES2015 MoveHead.ts &&
    node MoveHead.js sim  # sim should map to 127.0.0.1 which is used to connect to the simulator


### Examples
 - [Blinking](examples/Blink.ts)
 - [Error catching](examples/CatchErrors.ts)
 - [Menu dialogs](examples/Menu.ts)
 - [Multiple concurrent actions](examples/Multiple.ts)
 - [Head moving](examples/MoveHead.ts)
 - [MIM usage](examples/RemoteMIM.ts)
 - [Looping LED colors](examples/LedColor.ts)
 - [Photo taking](examples/Photo.ts)
 - [Play sound](examples/PlaySound.ts)
 - [Screen touch event capturing](examples/ScreenEvent.ts)
 - [Asynchronous talk](examples/Talk.ts)
 - [Time measurement of the different functionalities](examples/Times.ts)

## Certificates

A sample certificate is provided to run the examples, these can be found on
`priv/certs`. For non-example applications a new certificate must be generated.


## Supported functionality
### Commands

 - [x] Text to speech `say` [Talk example](examples/Talk.ts)
 - [x] Move head  `moveHead`, `moveHeadAngle` [MoveHead example](examples/MoveHead.ts)
 - [x] Turn attention on/off `setAttention`
 - [x] Animations `animate`
 - [x] Remote mim `mim` [MIM example](examples/RemoteMIM.ts)
 - [x] Interruption `interrupt`
 - [x] Ident `ident`
 - [x] Show menu `menu` [Menu example](examples/Menu.ts)
 - [x] Take photo `photo` [Photo example](examples/Photo.ts)
 - [x] Blink `blink` [Blink example](examples/Blink.ts)
 - [x] Show remote picture
 - [x] Play sounds [Sound example](examples/PlaySound.ts)
 - [x] Asset upload [Sound example uploads the asset](examples/PlaySound.ts)
 - [x] Show picture [General example](examples/Times.ts#L51)
 - [ ] Midi command
 - [ ] Wait for robot is idle
 - [x] Look at 3D
 - [ ] Animate by category
 - [x] Set LED color `setLedColor` [LED example](examples/LedColor.ts)

### Events

 - [x] Screen touch [Screen touch example](examples/ScreenEvent.ts)
 - [x] Head touch
 - [x] LPS summary
 - [ ] Speaker recognized
 - [x] "Hey Jibo" [Speech example](examples/Speech.ts)
 - [x] End of speech
 - [x] Cloud received

### Nice to have

 - [ ] Use a single bounjour+https for multiple robots
 - [ ] Typed events
 - [x] Working from browser apps.
 - [ ] Robot detector (find robots in LAN)

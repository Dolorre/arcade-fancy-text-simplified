




// // function printLine(line: Line) {
// //     let l = `${line.width} ${line.height}`;
// //     for (const span of line.spans) {
// //         l += `[${testText.substr(span.offset, span.length)}]`
// //     }
// //     outLines.push(l)
// // }

// // const testText = `<rainbow>HELLO</rainbow> <red>richard</red> <blink>it's</blink> <veryslow><shake>NICE</shake></veryslow> <c6>to</c6> <wave>see you</wave> <green>today</green>`


// // const outlineFont = hex`db19f16821007e00120d01051a0000000d0019003400470064007d0085009400a300af00bb00c500d100da00e9000001130128013d01500165017a018d01a201b701c401d101ea01f6010f0220023b02500267027e029302a602bb02d202e702f6020d03220333034e03670380039503b003c503da03ed030204190438044d0464047b048a049904a804b404c204cc04da04ef04fa040f051b052c05410554055f057205850590059c05a805b505ca05df05ea05f6050706140620062e063a064f065c066d067806890604040c00f43e06410941093e0607070500f40e110e000e110e0b0b0b00f58800540176030104760354017603010476035401880008070d01f43806440abb1b0110bb1b4a04cc030c0c0b00f50006060589044902260190004800240392048904050303000b0a0a01f6e0001c014202ad02ad0242021c015002a002000103030500f40e110e05050c00f4f0000c03f2040d0b030405050c00f402040d0bf2040c03f00008070701f722552a142a552207070700f80814364136140805050400fe0c0a09050307070300fa0205050505050204040400fc0609090605050c00f4000ff0080f0ff1000f0009090c00f4f0000c0362049909050a990962040c03f00007070c00f4180e140af30b0108ff0b000a000e08080c00f41c0f9208590a250b950a490a220a1c0e08080c00f49c0392049909650a950a090962049c0307070c00f47e008100be00a000be0f0108fe0f08080c00f43f0341055d09550a550ad5092504c70308080c00f4fc0302049909550a550a99092a04c40307070c00f407000500050fe5081d0fe1001f0008080c00f4dc0322048909550a550a89092204dc0308080c00f43c0242059909a50aa50a99090204fc0304040900f6c60029012901c60004040a00f6860149022901c6000a0a0900f710002800280054005400aa00aa0045014501820007070500f80a15151515150a0a0a0900f7820045014501aa00aa005400540028002800100006060c00f4060039064509450931061e000b0b0b00f5f800040172028904250555052505090572058405780708080c00f4fc0f0208b90fa500a500b90f0208fc0f09090c00f4fe0f0108dd0b550a590a420a9c092004c00309090c00f4f0000c03f2040d0b050a050a9d0b92049c0308080c00f4ff0f0108fd0b050a050af9090204fc0307070c00f4ff0f0108bd0ba50ae50a050a070e08080c00f4ff0f0108bd0fa500a500e5000500070009090c00f4f0000c03f2040d0b050ac50b5d0b5204dc0308080c00f4ff0f0108bf0fa000a000bf0f0108ff0f05050c00f4070efd0b0108fd0b070e09090c00f4c0034004c709050afd090104fd030500070008080c00f4ff0f01088f0f88002401530e8908070f06060c00f4ff0f0108ff0b000a000a000e0b0b0c00f4fc0f0208f90f0500f9008200f9000500f90f0208fc0f0a0a0c00f4ff0f0108fd0f1900660098016006ff090108ff0f0a0a0c00f4f0000c0362049909050a050a990962040c03f00008080c00f4ff0f0108bd0fa500a500990042003c000b0b0c00f4f0000c0362049909050a050a990962040c09f00a000408080c00f4ff0f01083d0f2502a5049909420a3c0c08080c00f49c03a204c909550a550a99093204dc0307070c00f407000500fd0f0108fd0f0500070008080c00f4ff030104ff09000a000aff090104ff0309090c00f40f00f1000703780c8009780c0703f1000f000d0d0c00f41f00e1010f0ef008800c400220014002800cf0080f0ee1011f0008080c00f4070e9909630c0c030c03630c9909070e09090c00f41f0021004f00900f2008900f4f0021001f0009090c00f4070f850845082509950a490a210a110a0f0e05050c00f4ff0f0108fd0b050a070e05050c00f40f00f1000f0ff008000f05050c00f4070e050afd0b0108ff0f07070700f4304c320d324c3009090300fd07050505050505050705050400f40305090a0c09090800f83c4299a5a5b982bce008080c00f4ff0f0108df0b500a500a90092004c00306060800f83c4299a5a5e708080c00f4c00320049009500a500adf0b0108ff0f07070800f83c42adadade21c06060c00f4e000bc0f0208bd0fe500060008080d00f83c04420a9912a514a514b9130208fc0707070c00f4ff0f01089f0f5000900f2008c00f03030a00f6f7031502f70307070c00f4000380040009000af7091504f70307070c00f4ff0f01087f0e20049009500a300c03030c00f4ff0f0108ff0f07070800f8fe83f922f983fe07070800f8ff81fb0af284f808080800f83c4299a5a599423c08080d00f8ff1f0110bd1fa500a500990042003c0008080d00f83c0042009900a500a500bd1f0110fe1f06060800f8ff81fb0a121c07070800f87cb2a1ad89da7406060c00f47000df030104df09700a000e08080800f83f419fa09f81bfc007070800f80719679867190709090800f83fc19fc824c89fc13f07070800f8c3a5db24dba5c308080d00f83f04410a9f12a014a014bf130108ff0708080800f8e795adadb5b5a9e706060c00f44000a0001e074108bd0b020403030d00f3ff1f0110ff1f06060c00f40204bd0b41081e07a00040000a0a0500f90c120905091214120906`
// // const gothicFont = hex`db19f16821007e001d1501055c00ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00003e007f00bd0001013f018301c101080240027e02c50206035c03af03f30350049d04e1042b057205bf05f70547068506e606ffffffffffffffffffffffff180733075c0775079e07b707d70703082908460860088f08af08de0801091a09400966097f09a209c209e309060a3b0a560a7f0affffffffffffffff14131401ec00000600000bc0810338c6030c7807063007463806233c0e33360c333306f33103e3b00166f000367000fcff0ff0ff0ff8ff0f04000404000214141700ec0c0100868000c34038c3606cc36166fbff07ffff07ff7f03060003e3ff03f9ff03fc7f06060006c3ff0703890c838908c38804ffff037efe013cfc0013131500ec800f00f07f00fcff011cf00306800703c00701600ef03f0ef81f0cfc0f1c060018ffff1f0e00181c00181c000c18000c08000e000006000002131515feec00400000200800300c03700706f0130eff198eff0cce3f06ee00073e80038e7f037e00030e0007feff070e240e0e240e1c240c3c240cf8ff07f0ff03c0ff0113131500ec800f00f07f00fcff011cf00306800703c00701600ef03f0ef81f0cfc0f1c060018ffff1f0e03189c0318dc030cb8030c98030e800306800102131517feec000060000030000230000170000160800120800130f0ff1ff0ff17f8ff1308000804000cfcff0ffeff07ffff038e01008e01008c01008c000006000003000013131500ec003c0000ff0080c703c0800760c00ff07f0ef83f1cfc3f1c0606180703188eff1fce2109ec2109bc23091c27050c3f0704fe0300fc01007000151617ffec08040004020106833086c35886c70cfcff07fcff07feff03060003038007f1ff06f97f0efc3f0c0c250c861406421473629469f0140ce02306c0ff0380ff0100ff00101115ffec08001004000806080c060404060606060606f4070efc7f0efeff0f06fc0b02c019f90310fcff10feff1906fc0f02000701000013131700ec1c0000368860334430036630076e3007fe7086ff7fe6ff6ff4ff273c00201c001084ff0fe4ff07f2ff013a00000e000006000003000001000016161500ec0c02000e810087411087611883e30ee2ff07faff05feff04060006030007f1ff0e8c301c42381821780870f404f8e203f0c107e0800f40000700000200000100800014141800ec1808001c04812c86c00cc66006ce78f6ff7ffeff2ffeff3307003801002ef0ff37fcff33feff181e001807003803003801007001003000001800000c191b16feec00200000100000101800182c003806e0ff07f0ff0ff8ff0e0c0004feff03060200030300030302ffff07ffff0ffeff0f040304040302feff01030100070000ffff01feff07fcff0f040007020002000001191a16ffec00002000081080041940861860c638e0ce3ef0ff3ff0ff37f8ff310c001804000efeff0182100082100003090007090006091c0e092f9cf007bc7806f80f07f0070fc0010f00000600000200000115151400ec003e0000ff0080ff01c0e003208007f0ff07f87f06fc3f0606000effff0f07110e07110e86200e8e200e8e200f8e20071c91073cf103f8ff01f0ff00e03f0015161bffec0000080000010400040306000203060083060600830e0700473c0700ffffff07feffff07fcffff072000000410000004feffff0708410600044106000c220e001e220c003e220c007c220400f8ff0300f0ff0100e0ff000018181500ec003e0000ff0080ff01c0e003208007f0ff07f87f06fc3f0606000effff0f07110e07110e86200e8e200e8e200f8e20071c91073cf103f8ff07f0ff0fe03f1e00000c00000400000215151500ec00011080010c810306470f06ffff03feff03feff03100007080006f8ff0704180c061c1c0f1e181f3f08befd00fcf80378f00730c00f00000700000200000117171700ec000f18801c3c40184ce03846f03146d871268c732e86732e87f31f8e731e8e7b1c9c771c9c731ef8733bd8f139c6f138c0610c80010680030300070300ff0100fe00003c00151615ffec2000001800000c0000860f00e67f00feff011ef0030ec0070ec0070e600ffe3f0ffc1f1efc0f1e1c001cfcff1f1c001c1e001c1e000c0e000e0e000707800303000018181500ec807f00e0ff01f8ff0308e00704c00704600fe23f0ff21f1efe0f1e02001cffff1f80201c80201c08110c04110e0611070f9103feff03fcff07fcff0f02000f000006000002000001101114ffec040000021000030808070c0c3f0c0ffedd05fcff04f07f02102f0310210308220708120e181207fcd203fcff00e07f00003f00181914ffec040000021000030808070c0c1f0c0ffedc05fcff04f07f02102f0310220308220708120e181207fcd205fcff04f07f02103f0310210308120708120e181207fcd201fcff00e07f00003f0013131400ec08800306800303000703000707000e1f00067e8001f86100e01f00801f00807f0060f80118e00706800f07000e0e000c0e000c1c00061c000116171cffec0000c0010400e0030284f007034230070763180e1ee7180cfcff0f0cf8ff0f06e0ff0f064000080320008801f0ff8f0108218c0d0c210e0f06120606061206000e1207000e2203000ce103003cf10100f8ff0000f03f0000c00700000f0f1400ec04000002040807040e06050f0ec50f0cf5070c7d060c1f06c60707f605077e050f1e050f0605060201020001010b0b0d00f30807bc0f421c430847044602fe07fc0ffc1f021c00040c0c1400ec020002feff03fcff07feff0703040e01020c00020c00010480010680ff0300ff0300fe010a0a0d00f30004f807fc0ffe0f071c0e181c18380c100600020c0c1200ee0780000ffe001eff01bcff01f88003708003e00003c0810180ff0000ff00007f000001000a0a0d00f30004f007f80ffc0f821c431827181f080e04040209091400ec800100800102f8ff03fcff07feff0787010e8e01061c00030800010d0d1400f3fc0304fc070efe0f0d029c0c03780e033006061806fe0f06fc3f0efc7f0c0ee00f0fc00f0080070b0b1700ec020002feff07fcff0ffeff47030c4201066000032080073000ff1f00fe0f00fc0308081100ef400000e03f00f67f00e7ff0043e00100c00000400000200007071700ef000040800020400030e03f18f6ff1fe7ff0f43f0070f0e1401ec020004feff07fcff0ffeff0f038c0d01c60800630480730000ff0700ee0f00c40f00000600000200000109091400ec020002feff03fcff07ffff0701000e00000e00000600000300000115150d00f304000204ff0ffe1ffc0f0804040002000704fe0ffe1ffc0f080404000200ff07fe0ffc1f000c000400020f0f0d00f304000204ff0ffe1ffc0f0804040002000700fe07fe0ffc1f000c000400020a0a0d00f30004fc07fe07ff0f030c06180e18fc0ff80ff8070b0b1400f3040c00020c04ffff07feff07fcff0f020c08031800071800fe0f00fc0700f803000b0b1400f3f00700f80f00fc1f000e0c000704000f02001e0108fcff0ff8ff07f0ff071000040a0a0d00f304000204ff07fe0ffc0f041e020c07040e0204000f0f1000f0008000c000e0f070f879fc6f9ce71cc398c1d8e0f071f07b9b3f0f1f001e0a091301edc00001f0ff01fcff03ffff03c00007c00007c000030080010080000e0e0d00f308000400fe07ff0ffe1f040800040402fe07ff0ffe1f041c000800040a0a1100ef1c4000fe7f00f2ff00e1ff00808001400001208000f0ff00e07f00c07f0010101100ef1c4000fe7f00f2ff00e1ff00808001400001208000f0ff00e0ff00c0ff00808001400001208000f0ff00e0ff00c07f000b0b0d00f3060c03180f183e0efc07f003f80f0e1f031c0318060c0c0c1400f3040000020003ffff04fe7f08fc3f081010080808040404000e0200ff0100fe00007c000008081300f3880003c48004ee8004ffc000de71008c3f00841f00000f00`
// // const serifFont = hex`db19f16821007e000c080105100000000700110020002c00380045004c0055005e00680073007b0085008c009500a000a900b400bf00cb00d600e100ec00f7000201090111011d01270133013d014a015801640170017c01880193019f01ac01b501c601d301de01ee01fd010a0216022b023802430250025e026c027c028a029902a502ad02b602be02c802d402dc02e702f202fc02070311031b03250331033a03490356035f036d03790383038e039903a303ac03b503c103cd03db03e503f203fc0305040e04170402020800f8dfdf05050400f80e07000e070a0a0800f820e4fc3f27e4fc3f270407070800f82c5e52ff52762407070600fa0333180c06333008080800f860f69b91bb66d08002020400f80e0704040800f83c7ec38104040800f881c37e3c06050501fa150e1f0e1506060600f90c0c3f3f0c0c03030300fe06070305050200fb030303030302020200fe030304040800f8e0f81f0706060800f87effb18dff7e04040800f886ffff8006060800f8c6e7f3dbcfe606060800f866e7c3dbff6607070800f8383c26a3ffff8006060800f85fdf9b9bfb7306060800f87eff8989fb7206060800f803c3e3331f0f06060800f876ff8989ff7606060800f84edf9191ff7e02020500fa1b1b03030600fa303b1b07070500fa04040e0e1b1b1105050500fa1b1b1b1b1b07070500fa111b1b0e0e040405050800f803dbdb0f0e08080800f83e419d95bda19e4009090800f880c0f0bc27bef8e08007070800f881ffff9999fe7007070800f83c7ec38181c36607070800f881ffff8181c37e07070800f881ffff91b9c3e706060800f881ffff91390307070800f83c7ec381d1f37608080800f881ffff991899ff8104040800f881ffff8106060a00f8800100030103ff03ff01010008080800f881ffff9138e5c38106060800f881ffff8180c00b0b0800f880ffff8e38e0388effff800a0a0800f881ffff860c18317fff0108080800f83c7ec38181c37e3c07070800f881ffff91111f0e08080a00f83c007e00c30081018103c3027e023c0208080800f881ffff9131fbce8006060800f866cf9bd9f36608080800f8030181ffff81010309090800f8013f7fc18080413f0109090800f801071f79e0601907010b0b0800f801071f79e078e0791f070109090800f881c3e7bd18bde7c3810a0a0800f80103078df8f88d07030107070800f8c7e3f3dbcfc7e303030800f8ffff8104040800f8071ff8e003030800f881ffff05050400f80c0603060c07070200fe0303030303030303030300f803070606060600fa183d253f3e2006060800f881ffff88f87005050500fb0e1f1b110a06060800f870f889ffff8005050500fb0e1f15170605050800f888feff8b0205050800fb4edf91ff7e07070800f881ffff9818f08004040800f880f3fb8005050a00f8800100030003f303fb0108080800f881ffff9138ecc48004040800f880feff8009090500fb101e1f130e131f1e1007070500fb111f1f13031e1005050500fb0e1f111f0e06060800fb81ffff911f0e06060800fb0e1f91ffff8105050600fa203f3f220604040500fb16171d0d04040700f9043e7f4407070500fb010f1f101f1f1107070500fb01070f180f070109090500fb01070f190c190f070105050500fb1b1f041f1b08080700fb0143673d1805030105050500fb191d15171304040800f8087ef78102020900f8ff01ff0104040800f881f77e0808080500fa060303060c18180c`

// // defFont = new fancyText.Font(serifFont)

// // const spans = getSpans(testText);
// // let maxWidth = 60;
// // const testSprite = new fancyText.TextSprite(testText);
// // testSprite.setMaxWidth(60);
// // testSprite.setVelocity(60, 40);
// // testSprite.setBounceOnWall(true);
// // testSprite.animateForTime(10000);
// // testSprite.top = 10
// // testSprite.left = 10
// // pause(3000)
// // scene.setBackgroundColor(3);

// // const lines = getLines(testText, spans, maxWidth);

// // const defaultFont = image.font8;
// // const defaultColor = 1;
// // scene.createRenderable(1, () => {
// //     drawText(20, 20, lines, defaultColor, defaultFont)
// // })

// // for (const line of lines) {
// //     printLine(line);
// // }
// // console.log(outLines.join("\n"))

// let myTextSprite = fancyText.create(
//     "<green>How Are You Today</green> i am fine it's good to be fine",
//     140,
//     3,
//     fancyText.serif_small
// )
// myTextSprite.left = 5
// myTextSprite.top = 5
//     // myTextSprite.setVelocity(20, 20)
//     // myTextSprite.setBounceOnWall(true)
// // myTextSprite.setPosition(80, 60)
// // controller.moveSprite(myTextSprite, 30, 30)
// // scene.cameraFollowSprite(myTextSprite)

// const testFrame = img`
// ...cc......................cc....
// ..c55c..bbbb...bbbbb......c55c...
// .cb55bcbdddbbbbbdddbbbbbbcb55bc..
// b555555bbdddb111bdddb11db555555b.
// bb5555bbdbdb11111bdb1111bb5555bb.
// cb5555bcddd11111ddd11111cb5555bc.
// .c5bb5c1111d111d111d111ddc5bb5c..
// .cbbbbc111111111111111111cbbbbc..
// ..b11111111111111111111111d111bb.
// ..b111111111111111111111111d1bdb.
// ..bb11111111111111111111111dbddb.
// .bbdb1d11111111111111111111ddddb.
// .bdddd11111111111111111111d1bdbb.
// .bddbd11111111111111111111111bb..
// .bdb1d111111111111111111111111b..
// .bb111d11111111111111111111111b..
// ..b11111111111111111111111d111bb.
// ..b111111111111111111111111d1bdb.
// ..bb11111111111111111111111dbddb.
// .bbdb1d11111111111111111111ddddb.
// .bdddd11111111111111111111d1bdbb.
// .bddbd11111111111111111111111bb..
// .bdbb1111111111111111111111111b..
// .bbbd1111111111111111111111111b..
// ..bcc111111111111111111111dccdb..
// ..c55c111d111d111d111d1111c55cb..
// .cb55bcdd11111ddd11111dddcb55bc..
// b555555b11111bdb11111bdbb555555b.
// bb5555bbb111bdddb111bdddbb5555bb.
// cb5555bcdbbbbbdddbbbbbddcb5555bc.
// .c5bb5c.bb...bbbbb...bbbbc5bb5c..
// .cbbbbc..................cbbbbc..
// .................................
// `

// myTextSprite.setFrame(testFrame)
// // myTextSprite.setFrame(img`123
// // 456
// // 789`)

// myTextSprite.animateAtSpeed(8)
// pause(myTextSprite.remainingAnimationTime());
// myTextSprite.setColor(4)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fancyText.cancelAnimation(myTextSprite)
})
let myTextSprite: fancyText.TextSprite = null
myTextSprite = fancyText.create("This is some test text")
fancyText.setFont(myTextSprite, fancyText.outline_medium)
fancyText.setFrame(myTextSprite, img`
    ..bbbbbbbbbbbbbbbbbbbb..
    .b11bb11bb11bb11bb11bbb.
    bbb11bb11bb11bb11bb11b1b
    bb1bbbbbbbbbbbbbbbbbb11b
    b11bb11111111111111bb1bb
    b1bb1111111111111111bbbb
    bbbb1111111111111111bb1b
    bb1b1111111111111111b11b
    b11b1111111111111111b1bb
    b1bb1111111111111111bbbb
    bbbb1111111111111111bb1b
    bb1b1111111111111111b11b
    b11b1111111111111111b1bb
    b1bb1111111111111111bbbb
    bbbb1111111111111111bb1b
    bb1b1111111111111111b11b
    b11b1111111111111111b1bb
    b1bb1111111111111111bbbb
    bbbb1111111111111111bb1b
    bb1bb11111111111111bb11b
    b11bbbbbbbbbbbbbbbbbb1bb
    b1b11bb11bb11bb11bb11bbb
    .bbb11bb11bb11bb11bb11b.
    ..bbbbbbbbbbbbbbbbbbbb..
    `)
fancyText.setMaxWidth(myTextSprite, 160)
fancyText.setAnimationSound(myTextSprite, music.createSoundEffect(WaveShape.Square, 519, 519, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear))
fancyText.animateAtSpeed(myTextSprite, 10, fancyText.AnimationPlayMode.InBackground)
fancyText.setColor(myTextSprite, 15)
game.onUpdate(function () {
    myTextSprite.bottom = 120
    myTextSprite.left = 0
})

game.stats = true

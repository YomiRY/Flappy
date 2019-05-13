// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
    },

    ctor() {
        this.BIRD_STATE = {
            FLY: 0,
            DROP: 1,
            DIE: 2
        };
    },

    setInputControl() {
        cc.eventManager.addListener(
            {
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: (keyCode, event) => {
                    switch (keyCode) {
                        case cc.KEY.space:
                            this.fly();
                            break;
                    }
                }
            },
            this.node
        );
    },

    fly() {
        console.log("bird flying");
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.setInputControl();
    },

    start() {

    },

    // update (dt) {},
});

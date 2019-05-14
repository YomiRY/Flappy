// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
const BIRD_STATE = {
    FLY: 0,
    DROP: 1,
    DIE: 2
};

cc.Class({
    extends: cc.Component,

    properties: {
        jumpDuration: 0.2,
        jumpHeight: 50,
        dropSpeed: 2,
        state: BIRD_STATE.DROP,
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
        this.state = BIRD_STATE.FLY;
        let jumpAction = cc.sequence(
            cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)),
            cc.callFunc((target) => {
                this.state = BIRD_STATE.DROP
            }, this)
        );

        this.node.runAction(jumpAction);
    },

    drop() {
        let node = this.node;
        let dropAction = cc.moveBy(this.jumpDuration, cc.v2(0, -this.dropSpeed));
        
        node.runAction(dropAction);
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        this.setInputControl();
    },

    start() {

    },

    update (dt) {
        if(this.node.getBoundingBox().yMin <= -cc.winSize.height / 2) {
            this.state = BIRD_STATE.DIE;
        }

        if (this.state === BIRD_STATE.DROP) {
            this.drop();
        }
    },
});

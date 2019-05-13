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
        speed: -300,
        resetX: -300,
        isStop: false,
        bg1: {
            default:null,
            type:cc.Node
        },
        bg2: {
            default:null,
            type:cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.bg2.x = this.bg1.getBoundingBox().xMax;
    },

    start () {},

    update (dt) {
        if (this.isStop) {
            return
        }

        this.bg1.x += this.speed; 
        this.bg2.x += this.speed; 

        console.log(`${this.bg1.getBoundingBox().xMax}`);
        if (this.bg1.getBoundingBox().xMax <= this.resetX) {
            let tmp = this.bg2;
            this.bg2 = this.bg1;
            this.bg1 = tmp;
            this.bg2.x = this.bg1.getBoundingBox().xMax;
        }
    }
});

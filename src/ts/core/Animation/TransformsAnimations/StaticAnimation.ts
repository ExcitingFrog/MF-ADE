import { DanmakuStyle } from "../../Style/DanmakuStyle";
import { AnimationInterface } from "../Base/AnimationInterface";

/**
 * 静止动画 仅仅悬停在某一个位置一定时间
 */
export class StaticAnimation implements AnimationInterface {
    getDuration(): number {
        return this.duration;
    }

    duration: number = 1000;
    x: number = 0;
    y: number = 0;
    z: number = 0;
    setParams(param: { [idx: string]: any; }): boolean {
        let def = 0;
        this.duration = param?.duration || this.duration
        this.x = param?.x || def
        this.y = param?.y || def
        this.z = param?.z || def
        return true
    }
    getMatrix(time: number): false | number[] {
        // console.log(time);

        if (time > this.duration) return false;

        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            this.x, this.y, this.z, 1
        ]

    }
    getStyle(): false | DanmakuStyle {
        return false
    }

}
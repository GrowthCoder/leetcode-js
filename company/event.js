// 写一个自定义事件系统，实现 on off emit API，要求可以同时触发多个事件，也可同时取消多个事件

class EventEmitter {
    constructor(){
        this._events = null;
    }
    // 事件监听
    on(event, callback) {
        let cbs = this._events[event] || [];
        cbs.push(callback);
        this._events[event] = cbs;
        return this;
    }
    // 事件移除
    off(event, callback) {
        let cbs = this._events[event]

        if (!arguments.length) {
            // 无参数 移除所有事件
            this._events = null;
        } else if (arguments.length === 1){
            this._events[event] = null;
        } else if (callback) {
            this._events[event] = cbs && cbs.filter(fn => fn !== callback);
        }
        return this;
    }
    // 事件触发
    emit(...args) {
        const event = args[0];
        const cbs = this._events[event];
        const params = [].slice.call(args, 1)
        
        cbs && cbs.forEach(fn => {
            fn && fn.apply(this, params)
        })
        return this;
    }
    once(event, callback) {
        let wrapFanc = (...args) => {
            callback.apply(this, args)
            this.$off(event, wrapFanc);
        }
        this.on(event, wrapFanc);
        return this;
    }
}
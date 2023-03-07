function throttle(f, ms) {
    let isThrottled = false;
    let lastArgs;
    let lastContext;

    function wrapper(...args) {
        if (isThrottled) {
            lastArgs = args;
            lastContext = this;
            return;
        }

        f.apply(this, args);
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false;
            if (lastArgs) {
                wrapper.apply(lastContext, lastArgs);
                lastArgs = null;
                lastContext = null;
            }
        }, ms);
    }

    return wrapper;
}
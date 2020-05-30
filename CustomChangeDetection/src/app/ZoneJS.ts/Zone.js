let context = null;

class Context {
  constructor(parentContext) {
    let context;

    if (parentContext) {
      context = Object.create(parentContext)
      context.parent = parentContext;
    } else {
      context = this;
    }
    return context;
  }

  fork() {
    return new Context(this);
  }

  bind(fn) {
    const context = this.fork();
    return () => {
      return context.run(() => fn.apply(this, arguments), this, arguments);
    }
  }

  run(fn) {
    let oldContext = context;
    context = this;
    const result = fn.call();
    context = oldContext
    return result;
  }
}

context = new Context();

var nativeSetTimeout = window.setTimeout;

context.setTimeout = (callback, time) => {
  callback = context.bind(callback);
  return nativeSetTimeout.call(window, callback.bind(context), time);
};

window.setTimeout = function () {
  return context.setTimeout.apply(this, arguments);
};


context.fork({}).run(() => {
  context.message = "HELLO"
  setTimeout(() => {
    console.log(context.message);
  }, 0);
});

console.log(context.message);

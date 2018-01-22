'use strict';

exports.loop = (n, cb) => {
    if (n < 1 || !Number.isInteger(n) || typeof cb !== 'function') return null;
    if (!n) return;
    cb();
    exports.loop(n - 1, cb);
}

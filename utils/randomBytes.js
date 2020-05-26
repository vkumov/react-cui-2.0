const randomBytes = (typeof self !== "undefined" &&
  (self.crypto || self.msCrypto)
  ? function () {
      // Browsers
      var crypto = self.crypto || self.msCrypto,
        QUOTA = 65536;
      return function (n) {
        var a = new Uint8Array(n);
        for (var i = 0; i < n; i += QUOTA) {
          crypto.getRandomValues(a.subarray(i, i + Math.min(n - i, QUOTA)));
        }
        return a;
      };
    }
  : function () {
      // Node
      return require("crypto").randomBytes;
    })();

const crypto = {
  randomBytes,
};

export default crypto;

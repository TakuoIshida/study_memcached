// 参考
// https://www.npmjs.com/package/memcached
// 実行 
// docker-compose up
// node index.js
console.log('start');
const Memcached = require('memcached')
const endpoint = 'localhost' //process.envで環境変数で設定
const port = 11211
const memcached = new Memcached(`${endpoint}:${port}`)
const sampleKey = 'foo'
const sampleValue = 'bar'
const expire = 86400 //有効期間
// memcached.set(sampleKey, sampleValue, expire, function (err, data) {
//   if (err) {
//     console.log('set is ng')
//     console.log(err)
//   } else {
//     console.log('set ok')
//     console.log(data)
//   }
// });
memcached.get(sampleKey, function (err, data) {
  if (err) {
    console.log('gets is ng')
    console.log(err)
  } else {
    console.log('gets ok')
    console.log(data)
  }
});
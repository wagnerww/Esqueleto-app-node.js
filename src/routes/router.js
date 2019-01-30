const users = require('./routerUsuarios');
const auth = require('./routerAuth');

const router = [auth, users];
module.exports = router;

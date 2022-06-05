

const Login = (req, res) => {
  try {
    res.json(
      { "code": 20000, "data": { "token": "admin-token" } }
    )
  } catch (error) {
    res.json({
      status: 'fail',
      msg: 'error:' + error
    })
  }
}


const login = {
  method: 'post',
  path: '/user/login',
  func: Login
}


const UserLoginInfoFunc = (req, res) => {
  try {
    res.json(
      { "code": 20000, "data": { "roles": ["admin"], "introduction": "I am a super administrator", "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif", "name": "Super Admin" } }
    )
  } catch (error) {
    res.json({
      status: 'fail',
      msg: 'error:' + error
    })
  }
}


const info = {
  method: 'get',
  path: '/user/info',
  func: UserLoginInfoFunc
}



const LoginOutFunc = (req, res) => {
  try {
    res.json({ "code": 20000, "data": "success" })
  } catch (error) {
    res.json({
      status: 'fail',
      msg: 'error:' + error
    })
  }
}


const logout = {
  method: 'post',
  path: '/user/logout',
  func: LoginOutFunc
}


module.exports = [
  login,
  info,
  logout
]

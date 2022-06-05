// 用户模块




/**
 * @description注册
 */
const regis_func = (req, res) => {

}
const regis = {
    method: 'post',
    func: regis_func,
    path: '/usr/reg'
}
/**
 * @description登录
 */
const login_func = (req, res) => {}
const login = {
    method: 'post',
    func: login_func,
    path: '/usr/sigin'
}

/**
 * @description修改自己信息
 */
const fix_self_info_func = (req, res) => {}
const fix_self_info = {
    method: 'post',
    func: fix_self_info_func,
    path: '/usr/update'
}







module.exports = [
    regis,
    login,
    fix_self_info,
]


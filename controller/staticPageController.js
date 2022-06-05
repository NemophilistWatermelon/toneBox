const getPage = (req, res) => {
  console.log({ run: '2323' })
  res.render('houtai/dest/index.html')
}


// path
const getAdminPage = {
  method: "get",
  path: '/houtai',
  func: getPage,
}

// export routes path
module.exports = [
  getAdminPage,
]
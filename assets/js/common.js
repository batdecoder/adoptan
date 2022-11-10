class R {
  // 静态方法:static,直接用R.search触发
  // 案例:R.search('page')
  static search(name){
    // 考虑带URL中可能出现中文编码问题,需要转码
    const search=decodeURI(location.search)
    const params = new URLSearchParams(location.search)
    return params.get(name)
  }
}
var types = ['OLT', 'PON', 'UP_LINK', 'FTTB-IP(NGN)', 'FTTB-IP(IMS)',' FTTH-IP']
var pageObject = {
  data: {
    defaultSize: 'default',
    disabled: false,
    plain: false,
    loading: true
  }
}

for (var i = 0; i < types.length; ++i) {
  (function (type) {
    pageObject[type] = function (e) {
      var key = type + 'Size'
      var changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  })(types[i])
}


export default {

  storageKey: 'searches',

  getData: function () {
    let data = JSON.parse(localStorage.getItem(this.storageKey))
    return (!!data && Array.isArray(data)) ? data : []
  },

  addItem: function (item) {
    let arr = this.getData()

    const checkSameQuery = (i) => i.queryData.searchQuery === item.queryData.searchQuery && i.queryData.order === item.queryData.order
    const sameQueryIndex = arr.findIndex(checkSameQuery)
    
    !sameQueryIndex == -1 ? arr[sameQueryIndex] = item : arr.unshift(item)

    if (arr.length > 7) { arr = arr.splice(0,7) }
    // console.log(arr);
    this.saveData(arr)
  },

  saveData: function (data = []) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

};

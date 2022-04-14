
export default {

  storageKey: 'searches',

  getData: function (key) {
    let data = localStorage.getItem( this?.storageKey ?? key )
    !!data ? data = JSON.parse(data) : []

    const clearGarbageData = (arr) => { 
      if (arr.length === 0) { return arr }
      
      arr = arr.filter((item)=>{
        return !!item.queryData != false && !!item.users != false
      })

      return arr 
    }

    return Array.isArray(data) ? clearGarbageData(data) : []
  },

  addItem: function (item) {
    let arr = this.getData()
    // if !!item
    const checkSameQuery = (i) => {
      i.queryData.searchQuery === item.queryData.searchQuery &&
      i.queryData.order === item.queryData.order
    }

    const sameQueryIndex = arr.findIndex(checkSameQuery)
    
    const updateAndPushItem = (i) => { 
      arr.splice( sameQueryIndex , 1 )
      arr.unshift(item)
    }

    sameQueryIndex == -1 ? arr.unshift(item) : updateAndPushItem(item)

    if (arr.length > 7) { arr = arr.splice(0,7) }
    // console.log(arr);
    this.saveData(arr)
  },

  saveData: function (data = []) {
    
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

};

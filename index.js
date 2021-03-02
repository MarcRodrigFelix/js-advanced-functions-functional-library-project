const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          cb(collection[i])
        }
      } else {
        for (let el in collection){
          cb(collection[el], el, collection)
         }
      }
      return collection
    },

    map: function(collection, cb) {
      let newValues = []
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          newValues.push(cb(collection[i], i, collection))
        }
      } else {
        for (let el in collection){
          newValues.push(cb(collection[el], el, collection))
         }
      }
      return newValues
    },

    reduce: function(collection, cb, acc) {
      let a = (!!acc) ? acc : collection[0]
      let i = (!!acc) ? 0 : 1

      for (i; i < collection.length; i++){
        a = cb(a, collection[i], collection)
      }
      
      return a
    },

    find: function(collection, predicate) {
      let answer
      for (let el of collection){
        if (predicate(el)){
          answer = el
          break
        } else {
          answer = undefined
        }
      }

      return answer
    },

    filter: function(collection, predicate){
      let answers = [];
      for (let el of collection){
        if (predicate(el)){
          answers.push(el)
        }
      }

      return answers
    },

    size: function(collection){
      return Array.isArray(collection) ? collection.length : Object.keys(collection).length 
    },

    first: function(array, num){
      return (!!num) ? array.slice(0, num) : array[0] 
    },
    
    last: function(array, num){
      return (!!num) ? array.slice(array.length-num) : array[array.length -1]
    },

    compact: function(array){
      let falsey = new Set([false, null, 0, "", undefined, NaN])
      return array.filter( value => !falsey.has(value))
    },

    sortBy: function(array, cb){
      let sortedArray = [...array]
      return sortedArray.sort((a, b) => cb(a) - cb(b))
    },

    flatten: function(array, shallow = false){
      let newArr = []
      for (let i = 0; i < array.length; i++){
        let flatArr;
        if (typeof(array[i]) !== 'number' && !shallow){
          flatArr = this.flatten(array[i])
        } else {
          flatArr = array[i]
        }
        newArr = newArr.concat(flatArr)
      }

      return newArr
    },

    uniq: function(array, isSorted = false, cb = false){
      if (isSorted) {
        // grab first element of array 
        let newArr = [array[0]]
        for (let i = 1; i < array.length; i++){
          // if current newArr elemenet is NOT EQUAL to current array element then push to newArr
          if (newArr[i - 1] !== array[i]){
            newArr.push(array[i])
          }
        }
        
        return newArr

      } else if (!cb) {
        return Array.from(new Set(array))

      } else {
        let editedArr = []
        let newArr = []
        for (const element of array){
          // run each array element through callback
          let cbVal = cb(element)
          // if editedArr DOES NOT include that callback value then push those elements to new arr
          if (!(editedArr.includes(cbVal))){
            editedArr.push(cbVal)
            newArr.push(element)
          }
        }

        return newArr
      }
    },

    keys: function(object){
      let keys = []
      for (const key in object){
        keys.push(key)
      }

      return keys
    },

    values: function(object){
      let vals = []
      for (const key in object){
        vals.push(object[key])
      }

      return vals
    },

    functions: function(object) {
      let funksArray = []
      for (const key in object){
        if (typeof(object[key]) === 'function'){
          funksArray.push(key)
        }
      }
      return funksArray
    },


  }
})()

fi.libraryMethod()

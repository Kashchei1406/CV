const nav = document.getElementsByClassName('main-nav')[0]
console.log(nav)

nav.addEventListener('click', event => writeLog(event) )


function writeLog(callback){
    console.log(callback)
    console.log('click')
    return callback
}
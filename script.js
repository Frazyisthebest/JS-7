let file = []

for(let i = 0; i < Infinity; i++ ){
    let ask = prompt('Добавьте элемент')
}

if(`ask = add, ${ask}`){
    file.unshift(ask)
    file.shift('add')
}else if(`ask = del, ${ask}`){
    file.splice(ask)
    file.shift('del')
}else(ask = 'stop')=>{
    alert(stop)
}

console.log(file);
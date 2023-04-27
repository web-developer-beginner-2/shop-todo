let body = document.body



reload([1,2,3])
function reload(arr) {
    for (let item of arr) {
        
 
let block = document.createElement('div')
let milk = document.createElement('p')
let minute = document.createElement('p')
let imgg = document.createElement('img')

block.classList.add('to_do_block')
block.classList.add('active')
milk.classList.add('milk')
minute.classList.add('minute')
imgg.classList.add('img')

milk.innerHTML = 'Buy milk :)'
minute.innerHTML = '18:44'
imgg.src = './Vector (6).png'


body.append(block)
block.append(milk,minute,imgg)
}
}

 
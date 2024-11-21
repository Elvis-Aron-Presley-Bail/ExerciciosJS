var res = document.getElementById('res')

const users = [
    { name: 'Rodolfo' , age: 33, contact: '1234234'},
    { name: 'Paulo' , age: 21, contact: '1242341'},
    { name: 'Aline' , age: 40, contact: '2341234'},
    { name: 'Maria' , age: 12, contact: '12341243'}
]

users.forEach(function(item,index){
    if(item.age < 18){
        console.log(item.name)
    }
})

users.forEach(function(iten,index){
    if(iten.age >= 18){
        console.log(`Os usuarios ${iten.name} sao de maior`)
    }
})
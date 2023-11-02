let store={
    fruit :["grapes","banana","strawberry"],
    liquid:["ice","water"],
    holder:["cup","cone","stick"],
    topping:["chocolates","nuts","sprinkles"]
}

let isOpen=true;
let order=new Promise ((resolve,reject)=>{
        if(isOpen){
            resolve()
        }
        else{
            reject()
        }
    })

order.then(()=>{
    setTimeout(()=>{
    document.write(`:Shop is Open <br>`)
     document.write(`${store.fruit[2]} was selected <br>`);
     document.write(`Production was started <br>`)
    },1000) 

})
.then(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        
        document.write(`fruits has been chopped <br>`)
        resolve()

    },2000)
        
    })

})
.then(()=>{
    return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        document.write(`${store.liquid[0]} was added <br>`)
        resolve()

    },1000)
})
})
.then(()=>{
        setTimeout(()=>{
    
        document.write(`Start the machine <br>`)
     },1000)
})
.then(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        document.write(`Ice cream placed on ${store.holder[1]} <br>`)
            
            resolve()
        },3000)
    })
    
})
.then(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.write(`${store.topping[1]} as topping <br>`);
            
        resolve()
        },1000)
    })
})
.then(()=>{
    setTimeout(()=>{
        document.write(`serve Ice cream`);

    },2000)
})
.catch(()=>{
    console.log(`Shop closed`);
})
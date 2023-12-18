//dropdown menue click
document.getElementById('features').addEventListener('click' ,  ()=>{
console.log("clicked")
    document.getElementById('time').classList.toggle("see") 
    document.getElementById('features').classList.toggle("active")
    document.getElementById('featuresA').classList.toggle("boldblack")
    // document.getElementById('time').classList.toggle("featuressd")
    // document.getElementById('aboutus').classList.toggle("off")
    // document.getElementById('company').classList.toggle("active")
    


})

document.getElementById('company').addEventListener('click' ,  ()=>{
    console.log("clicked")
        document.getElementById('aboutus').classList.toggle("see2") 
        document.getElementById('company').classList.toggle("active") 
        document.getElementById('companyA').classList.toggle("boldblack")
        // document.getElementById('time').classList.toggle("off")
        // document.getElementById('features').classList.toggle("active")

    
    
    
    })

 //smaller screens >> humbrger menu
 
 document.getElementById('humbrger').addEventListener('click' , ()=>{console.log("clicked")
   document.getElementById('humbrger').classList.toggle("cross")
   document.getElementById('sdbar').classList.toggle("sidebaron")
   document.getElementById('sdbar').classList.toggle("animate__bounceIn")
})
 
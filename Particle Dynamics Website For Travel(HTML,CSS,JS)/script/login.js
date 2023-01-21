const arr=["../img/bg/1.jpg","../img/bg/2.jpg","../img/bg/3.jpg","../img/bg/4.jpg","../img/bg/5.jpg","../img/bg/6.jpg","../img/bg/7.jpg","../img/bg/8.jpg","../img/bg/9.jpg","../img/bg/10.jpg","../img/bg/11.jpg","../img/bg/12.jpg","../img/bg/13.jpg"];
 

let main = document.getElementById('bckgrnimg');


setInterval(()=>{

    let nm = Math.ceil(Math.random() * 13);
        
    main.src=arr[nm];

},3000);
           
        

        
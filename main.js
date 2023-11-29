let value=1;
let target=document.querySelectorAll('.t')
let restart_button=document.querySelector('.restart')
let reset_button=document.querySelector('.reset')
let main=document.querySelector('.main')

let column_1=document.querySelectorAll('.c1')
let column_2=document.querySelectorAll('.c2')
let column_3=document.querySelectorAll('.c3')
let row_1=document.querySelectorAll('.r1')
let row_2=document.querySelectorAll('.r2')
let row_3=document.querySelectorAll('.r3')
let diag_11=document.querySelectorAll('#d1')
let diag_22=document.querySelectorAll('#d2')
let diag_12=document.querySelectorAll('#d12')
let diag_1=[diag_11[0],diag_12[0],diag_11[1]]
let diag_2=[diag_22[0],diag_12[0],diag_22[1]]

let counter=0

let b_score=document.querySelector('.blue .score')
let r_score=document.querySelector('.red .score')

restart_button.addEventListener('click',function(){
    target.forEach(e=>{
        e.innerHTML=''
        e.classList.remove('l')
        e.classList.remove('o')
        e.classList.remove('x')
    })
    main.classList.add('hide')
    main.classList.remove('b')
    main.classList.remove('r')
    main.classList.remove('g')
    counter=0
})


reset_button.addEventListener('click',function(){
    target.forEach(e=>{
        e.innerHTML=''
        e.classList.remove('l')
        e.classList.remove('o')
        e.classList.remove('x')
    })
    main.classList.add('hide')
    main.classList.remove('b')
    main.classList.remove('r')
    main.classList.remove('g')
    counter=0
    b_score.innerHTML=0
    r_score.innerHTML=0
})




let check=(e)=>{
    let b=1
    for(let i=0;i<e.length;i++){
        if(e[i].classList.contains('o')!==true){
            b=0
        }
    }
    let r=1
    for(let i=0;i<e.length;i++){
        if(e[i].classList.contains('x')!==true){
            r=0
        }
    }

    if(b==1){
        main.classList.remove('hide')
        main.classList.add('b')
        b_score.innerHTML++
    }
    else if(r==1){
        main.classList.remove('hide')
        main.classList.add('r')
        r_score.innerHTML++
    }
}


target.forEach(e=>{
    e.addEventListener('click',function(){
        counter++;
        if(!(e.classList.contains('l'))){
            (value===1 && !(e.classList.contains('l'))) ? (e.classList.add('o'),e.classList.add('l'),e.innerHTML='O') : (e.classList.add('x'),e.classList.add('l'),e.innerHTML='X')
        }
        value=value*(-1)
        check(column_1)
        check(column_2)
        check(column_3)
        check(row_1)
        check(row_2)
        check(row_3)
        check(diag_1)
        check(diag_2)
        if(counter===9){
            if(main.classList.contains('o')!==true && main.classList.contains('o')!== true){
                main.classList.remove('hide')
                main.classList.add('g')
            }
            counter=0;
        }
    })
})


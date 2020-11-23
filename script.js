// hvata sva input polja
const inputs = document.querySelectorAll("input");


// objekat u koji se smestaju svi regeksi
const validacijeObjekat = {
    firstName: /^[a-z]{3,13}/i,
    lastName: /^[a-z]{3,13}/i,
    email: /^([a-z\d\.-]+)@([a-z]+)\.([a-z]{2,5})$/i,
    pass: /^[\w@-]{8,18}$/,
    telephone: /^\d{10}$/,
};


// funkcija za validaciju
function validiraj(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
}


// stavlja event listener koji se trigeruje u svakom polju u kojem se kuca u tom trenutku 
// te poziva funkciju koja izvrsava validaciju kroz objekat sa regeksima
inputs.forEach((input)=> {
    input.addEventListener("keyup", (e)=>{
        validiraj(e.target, validacijeObjekat[e.target.attributes.name.value]);
    });
});


// Hvata celu formu
const myForm = document.getElementById("forma");


// kaci event listener na dugme kojim submitujemo formu,
// a potom je uz pomoc funkcije sprecava da izvrsi svoju defoltnu operaciju slanja forme,
// umesto toga menja html da bi simulirala slanje i loguje poruku u konzolu
myForm.addEventListener("submit", (e) => 
  {e.preventDefault();

    console.log('Forma je prosledjena')

    document.getElementById("forma").innerHTML = `
    <h3>Uspešno ste se registrovali</h3> <br>
    <button class="dugme"><a href="./index.html">Povratak na početak</a></button>
    </div> `;
  });



//   *******animacije*******



const forma = document.querySelector('.forma');
const container = document.querySelector('.container');


// kretanje po x i y osi pomeranjem kursora
container.addEventListener("mousemove", (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) /10;
    let yAxis = (window.innerHeight / 2 - e.pageY) /10;

    forma.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

// ulazna animacija
container.addEventListener("mouseenter", (e) =>{
    forma.style.transition = "none";
    forma.style.transform = "none";
});


// izlazna animacija
container.addEventListener("mouseleave", (e) =>{
    forma.style.transition = "all 1s ease";
    forma.style.transform = `rotateY(0deg) rotateX(0deg)`;
});


//document.write("hello")
//alert("selamat pagi")
//console.log("hallo semuanya")
// var bisa di deklarasi ulang
// let tidak bisa di deklarasi ulang
// const data tetap tidak bisa di ganti


// let nama = "Gusti";
// let umur = 25;
// console.log(`nama saya ${nama} umur saya ${umur} tahun`);
// let bilanganSatu = 50
// let bilanganDua = "20"

// let result = bilanganSatu + bilanganDua

// console.log(result);

// let nilai = 80

// if(nilai > 75){
//     console.log("lulus");
// } else{
//     console.log("tidak lulus");
// }

// let nama = "Gusti"


// function Heloo (){
    
//     let bilanganSatu = 50
//     let bilanganDua =20

//     let result = bilanganSatu + bilanganDua
    
//     console.log(result);
// }

// Heloo()


// function Heloo (){
    
//     let bilanganSatu = 50
//     let bilanganDua =20

//     let result = bilanganSatu + bilanganDua
    
//     console.log(result);
// }

// Heloo()

function submitData() {
    
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value
    
    if(name == ""){
        return alert("name harus di isi")
    }else if(email == ""){
        return alert("email harus di isi")
    }else if(phone == ""){
        return alert("email harus di isi")
    }else if(subject == ""){
        return alert("subject harus di isi")
    }else if(message == ""){
        return alert("message harus di isi")
    }



    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);
    


    let a = document.createElement('a')

    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=rhomairama.dev@gmail.com&sunject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak ke nomor ${phone}`
    a.target = "_blank"
    a.click()

    let student = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(student);

}

var command = process.argv[2];
var number1 = process.argv[3];
var number2 = process.argv[4];
var hasil   = 0;

function HelpMenu(){
  console.log('argMath:\n Operasi matematika sederhana dengan menggunakan argumen sebagai input operator dan angka\n');
  console.log('\nArgument ke-1:');
  console.log("\\?  = Menampilkan help");
  console.log("+   = Operator Penjumlahan");
  console.log("-   = Operator Pengurangan");
  console.log("*   = Operator Perkalian");
  console.log("/   = Operator Pembagian");
  console.log("\\   = Operator Sisa Bagi");
  console.log("~   = Operator Pangkat\n");
  console.log('Argument ke-2 dan ke-3:');
  console.log('Harus berupa angka\n');
  console.log('Cara Pemakaian:');
  console.log('argMath [operator] [angka1] [angka2]');
}

//Operasi String
if (command == undefined || command == '\?' || number1==undefined || number2 == undefined ) {
    HelpMenu(); return(1);
} else {
    number1 = Math.floor(process.argv[3]);
    number2 = Math.floor(process.argv[4]);
}

//Operasi Matematika
if(command == "+") {
    hasil = number1 + number2;
} else if(command == "-") {
    hasil = number1 - number2;
} else if(command == "*") {
    hasil = number1 * number2;
} else if(command == "/") {
    hasil = number1 / number2;
} else if(command == "\\") {
    hasil = number1 % number2;
} else if(command == "~") {
    hasil = Math.pow(number1, number2);
} else {
    HelpMenu(); 
    return(1);
}

console.log(hasil);
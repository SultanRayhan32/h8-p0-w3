var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

// input.splice(3 , 0, 'anjir')



function dataHandling2(input){
    input.splice(4,1)
    input.splice(1,3 , "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
    console.log(input)

    var inputBaru1 = input[3]
    var bulan = inputBaru1[3] + inputBaru1[4];
    Number(bulan)
    
    console.log(bulan)
    console.log(typeof(bulan))
    switch(bulan) {
        case 01 : { console.log('Januari') ; break;}
        case 02 : { console.log('Februari')  ; break;}
        case 03 : { console.log('Februari') ; break;}
        case 04 : { console.log('Februari') ; break;}
        case 05 : { console.log('Februari') ; break;}
        case 06 : { console.log('Februari') ; break;}
        case 07 : { console.log('Februari') ; break;}
        case 08 : { console.log('Februari') ; break;}
        case 09 : { console.log('Februari') ; break;}
        case 10 : { console.log('Februari') ; break;}
        case 11 : { console.log('Februari') ; break;}
        case 12 : { console.log('Februari') ; break;}
        default : console.log('sdfdsfsd')
    }
    console.log(bulan)
    
}

dataHandling2(input);


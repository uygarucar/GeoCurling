//TÜRKİYE İKLİMİ && TÜRKİYE'DE SU VARLIĞI

//AŞağıdaki yorumları henüz kullanmadım.

//BÖLGE TANIMLAMALARI
//AKDENİZ
//Mutlak nemin en fazla olduğu bölge
//---------
//Mutlak nemin maksimum olduğu bölgemizdeki... (Hava içerisindeki nem en fazla Akdeniz'de fazladır.) 
//Sulu + Sıcak bölge olmalı
//Kışın en yağışlı bölgemiz. : Akdeniz ve Ege

//GDA
//Yazın Maksimum nemin en fazla olduğu bölgemiz -> Havanının alabileceği en yüksek nem miktarı: KURU + SICAK (GDA)
//Bu nedenle Güneydoğu anadolu
//---------

//KARADENİZ
//Bağıl Nemin en fazla olduğu bölgemiz:  Havanın neme doymasından dolayı yağmurun yağmasına neden olur
//Bu nedenle yağmurlu yerlerde en yüksektir. ----> Karadeniz
//İlkbaharda en az yağışlı bölgemiz: 

//İÇ ANADOLU
//İlkbaharda en yağışlı bölgemiz: İç anadolu


export const IklimlerVeBesiUretimi1 = [
    {
        //Şanlıurfa 
        id: 1,
        text: 'En sıcak yazın yaşandığı bölgemizde bulunan, aynı zamanda pamuğun ülke çapında en çok yetiştirildiği ilimiz',  //Sıcaktan EKS oldu. Enlem, Karasallık, SIcak rüzgarlar
        latitude: 37.159484824819934,  //GDA'da nere olabilir,
        longitude: 38.79038381880673,
        solution: 'En sıcak yazlar, Güneydoğu Anadolu Bölgesi\'nde yaşanır. Pamuk ise bu bölgede yer alan Şanlıurfa\'da en çok yetişir.'
    },
    {
        //Adana -> Turunçgil , 
        id: 2,
        text: 'Türkiye\'de en sıcak Kışın yaşandığı bölgemiz de olan ve turunçgilin en fazla yetiştirildiği ilimiz nerededir?',
        latitude: 37.02432014648891,  //Akdenizde Anamur olması lazım ??? 
        longitude: 35.342078876779524,
        solution: 'Adana \n\n Türkiye\'de kışın en sıcak olan bölgemiz Akdeniz bölgesi\'dir. Adana ise bu bölgemizde en çok turunçgilin yetiştirildiği şehrimizdir.'
    },
    {
        //Erzurum , 
        id: 3,
        text: 'Yazları en soğuk olan bölgemizde yer alan ve büyükbaş otlak mera hayvancılığının en çok yapıldığı illerimizden biri nerededir? ', //Kuzeydoğu anadolu
        latitude: 39.88375061547116,
        longitude: 41.2419139396218,
        solution: 'Yazları, Kuzeydoğu Anadolu bölgesi en soğuk olan bölgemizdir. Bu bölgemizde bulunan Erzurum\'da ise mera hayvancılığı yapılmaktadır.'
    },
    {
        //Van 
        id: 4,
        text: 'Kışları; Enlem, Karasallık, Sibirya basıncı, Yükselti sebepleriyle Türkiye\'nin en soğuk bölgesi olan bölgede bulunan ve koyun sayısının en yüksek olduğu ilimiz nerededir?',
        latitude: 38.502136873741165,
        longitude: 43.3603933527463,
        solution: 'Van \n\n Van, koyun sayısının en fazla olduğu ilimizdir.'
    },
]
export const IklimlerVeBesiUretimi2 = [
    {//Susam -> Antalya    
        id: 1,
        text: 'En çok yağışı kışın alan bölgede yer alan ve 2021 itibariyle susam yetiştiriciliğinde 1. sırada olan ilimiz nerededir? ',
        latitude: 36.90108450730461, //ANtalya veya mersin koordinatlarını koy
        longitude: 30.70235118318867,//Susam,
        solution: 'Antalya\n\n Susam, en çok yağışını yazın alan bölge olan Akdeniz\'in içinde bulunan Antalya\'da yer alır.'
    },
    {//Patates -> Konya 
        id: 2,
        text: 'En çok yağışı ilkbaharda alan bölgede yer alan ve 2022 itibariyle patates yetiştiriciliğinde 1. sırada olan ilimiz nerededir? ',
        latitude: 37.92866746052094, //Konya
        longitude: 32.49101673368779,//Patates,
        solution: 'Konya\n\n En çok yağışı ilkbahar\'da alan bölgemiz İç Anadolu bölgesidir. Konya ise bu bölgede yer alıp Patates\'in en çok yetiştirildiği ildir.'
    },
    {
        //Manda -> Samsun 
        id: 3,
        text: 'En çok yağışı sonbaharda alan bölgede yer alan ve 2022 itibariyle manda yetiştiriciliğinde 1. sırada olan ilimiz',
        latitude: 41.31371388779258,  //
        longitude: 36.33459691102588,//
        solution: 'Samsun \n\n En çok yağılı sonbaharda alan bölgemiz Karadeniz\'dir. Bu bölgemizde bulunan Samsun, manda yetiştiriciliğinde birincidir'
    },

]

export const IklimlerVeBesiUretimi3 = [
    {//->  Ordu 
        id: 1,
        text: 'En çok yağışı sonbahar alan bölgede yer alan ve 2022 itibariyle fındık yetiştiriciliğinde 1. sırada olan ilimiz nerededir? ',
        latitude: 41.00486429405695,
        longitude: 37.88437034777953,
        solution: 'Ordu \n\n En çok yağışı sonbaharda alan bölge Karadeniz\'dir. Ordu, bu bölgede yer alan ve fındık yetiştiriciliğinde  1. sırada olan ilimizdir.'
    },
    {// => Çay -> Rize , 
        id: 2,
        text: 'En az yağışı ilkbaharda alan bölgede yer alan, Yıl boyu yağış, yıkanmış ve asitli toprak isteyen bitkinin en çok yetiştirildiği ilimiz nerededir? ',
        latitude: 41.03834615812582, //
        longitude: 40.51367137283889,//
        solution: 'Rize \n\n En az yağışı ilkbaharda alan bölgemiz Karadeniz bölgesidir. Rize ise bu bölgede yer alan ve bahsedilen koşulları isteyen besin olan Çay\'ın üretildiği ilimizdir.'
    },
    {
        //Kenevir -> Sakarya, 
        id: 3,
        text: 'En çok yağışı sonbaharda alan bir bölgede yer alan ve 2022 itibariyle kenevir yetiştiriciliğinde 1. sırada olan ilimiz',
        latitude: 40.834956034702735,  //
        longitude: 30.462818010345927, //
        solution: 'Sakarya\n\n En çok yağışı sonbahar\'da alan bölgemiz Karadeniz bölgesidir, Karadeniz ikliminin görüldüğü Sakarya, Kenevir üretiminde 2022 itibariyle 1. sıradadır.'

    },
    {
        //Kivi - Yalova
        id: 4,
        text: 'Keşişlemeye ismini de veren dağın yer aldığı bölgemizde yetiştirilen ve Kivi üretiminde 1. sırada bulunan il nerededir? ',
        latitude: 40.67022929797574, //
        longitude: 29.291384713611276, //
        solution: 'Yalova \n\n Keşişleme dağının diğer ismi Uludağdır. Bu dağımızın yer aldığı Marmara bölgesinde bulunan ve kivi yetiştiriciliğinin 2022 itibariyle en çok yapıldığı ilimiz Yalova\'dır.'
    }
]

// * * ** * * ** * * ** TOprak ve besi üreticiliği olarak dğeiştir ismini * * ** * * ** * 
export const BesiUreticiligiVeToprak = [
    {
        //Adana  - Soya fasulyesi - Terra rosa
        id: 1,
        text: 'Terra rosa topraklarının yoğun bulunduğu bölgede de yer alan, soya fasulyesi üretiminin en çok yapıldığı ilimiz',
        latitude: 37.058705687289425, //
        longitude: 35.35213291358378,//
        solution: 'Soya fasulyesi en çok Adana\'da yetiştirilmektedir.'
    },
    {   //
        //  Kanola ve Konza
        id: 2,
        text: 'Vertisol topraklarında iyi yetişebilen Kanola ve Kolza üretiminin 1. olduğu ilimiz nerededir?',
        latitude: 41.06195905283413, //Tekirdağ
        longitude: 27.50249759284187, //
        solution: 'Tekirdağ\n\n Kanola ve Konza en çok Tekirdağ\'da yetiştirilmektedir.'
    },
    {
        //  Karasu deltası -  
        id: 3,
        text: 'Podzol ve Kahverengi Orman topraklarının yoğun bulunduğu bölgemizde de bulunan Ankara ve Porsuk kollarına sahip nehrimizin oluşturduğu deltamız nerededir?',
        latitude: 41.12647632418263, //
        longitude: 30.67795250939686, //
        solution: 'Karasu Deltası \n\n Ankara ve Porsuk isimli kollara sahip nehrimiz Sakarya Nehri\'dir ve Karasu Deltası\na dökülmektedir.'
    },
    {
        //  Edirne -  Çeltik 
        id: 4,
        text: 'Vertisol dışındaki bir diğer kalsimorfik toprak olan Rendzinada verimli bir şekilde yetişebilen çeltik\'te birinci olan ilimiz nerededir?',
        latitude: 41.70854581480627, //
        longitude: 26.53992730819423,//
        solution: 'Edirne \n\n Çeltik\'in en çok yetiştirildiği ilimiz Meriç Nehrinin bir kısmını içinde barındıran Edirne\'dir.'
    },
    {//Manisa  
        id: 5,
        text: 'Regosol topraklarda daha iyi yetişebilen Üzüm\'ün miktar olarak en fazla yetiştirdiği ilimiz?',
        latitude: 38.613905320650865,
        longitude: 27.438086695294267,
        solution: 'Manisa \n\n Regosol topraklar volkanik topraklardır. Üzüm ise volkanik topraklar olan Regosol toprakları barındıran Manisa\'da bolca yetiştirilmektedir.'
    }
]
// * * ** * * ** * * ** İklimlerOlarak değiştir, ünitenin ismini * * ** * * ** * 
export const Mikroklima = [

    {
        id: 1, //Pamuk
        text: 'Yaz kuraklığına sahip olması sebebiyle Pamuk\'un mikroklima olarak yetişebildiği ilimiz',
        latitude: 40.587580134, //Iğdır
        longitude: 37.178795716,
        solution: 'Iğdır \n\n Pamuk\'un mikroklima olarak yetiştirildiği ilimiz Iğdır\'dır.'
    },
    // //Artvin - Zeytini
    {
        id: 2,
        text: 'En çok yağışı kışın alan bölgemize özgü olan Zeytinin mikro klima olarak yetiştirildiği bir il',
        latitude: 41.17547019867335,// 
        longitude: 41.82941925173107,
        solution: 'Artvin \n\n Zeytin, Artvinin mikroklima ürünüdür.'
    }
    ,
    { //
        id: 3,
        text: 'Fön rüzgarı sayesinde Turunçgilin mikro klima olarak yetiştiği ilimiz',
        latitude: 41.02205678804378, //Rize
        longitude: 40.51551131243357,
        solution: 'Rize \n\n Turunçgil, Rize\'de mikroklima ürünü olarak yetişebilir.'
    },
]



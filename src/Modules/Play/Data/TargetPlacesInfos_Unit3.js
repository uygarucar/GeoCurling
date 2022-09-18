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
        text: 'Enlem, Karasallık ve sıcak rüzgarlar sebebiyle en sıcak yazın yaşandığı bölgemizde pamuğun ülke çapında en çok yetiştirildiği ilimiz',  //Sıcaktan EKS oldu. Enlem, Karasallık, SIcak rüzgarlar
        latitude: 37.166179993460005, //GDA'da nere olabilir,
        longitude: 38.79904592534445
    }, 
    {
        //Adana -> Turunçgil , 
        id: 2,
        text: 'Aynı zamanda Enlem ve Nemlilik sebepleriyle Türkiye\'de en sıcak Kışın yaşandığı bölgemiz de olan ve turunçgilin en fazla üretildiği ilimiz nerededir?',
        latitude: 37.01816900882365, //Akdenizde Anamur olması lazım ???
        longitude: 35.30959602089045
    },
    {
        //Erzurum , 
        id: 3,
        text: 'Yazları en soğuk olan bölgemiz olan bölgede, büyükbaş otlak mera hayvancılığının en çok yapıldığı illerimizden biri nerede olabilir? ', //Kuzeydoğu anadolu
        latitude: 39.982493208876306,
        longitude: 41.25242547290133
    },
    {
        //Van
        id: 4,
        text: 'Kışları; Enlem, Karasallık, Sibirya basıncı, Yükselti sebepleriyle Türkiye\'nin en soğuk bölgesi olan bölgede bulunan ve koyun sayısının en yüksek olduğu ilimiz nerededir?',
        latitude: 38.5608049375668,
        longitude: 43.36158641755599
    },
]
export const IklimlerVeBesiUretimi2 = [
    {//Susam -> Antalya  
        id: 1,
        text: 'En çok yağışı kışın alan bölgede yer alan ve 2021 itibariyle susam yetiştiriciliğinde 1. sırada olan ilimiz nerededir? ',
        latitude: 37.01733926378332,//ANtalya veya mersin koordinatlarını koy
        longitude: 30.7240734449946//Susam
    },
    {//Patates -> Konya
        id: 2,
        text: 'En çok yağışı ilkbaharda alan bölgede yer alan ve 2022 itibariyle patates yetiştiriciliğinde 1. sırada olan ilimiz nerededir? ',
        latitude: 37.92866746052094, //Konya
        longitude: 32.49101673368779//Patates
    },
    {
        //Manda -> Samsun 
        id:3,
        text:'En çok yağışı ilkbahar alan bölgede yer alan ve 2022 itibariyle manda yetiştiriciliğinde 1. sırada olan ilimiz',
        latitude: 41.31371388779258,  //
        longitude: 36.33459691102588//
        
    },
    {
        //Iğdır -- bunların dışında Malatya ve Muş da kurak yerlerdendir.   
        id:4,
        text:'En çok yağışı yazın alan bölgede yer alan ve en kurak illerimizden birisi nerededir?',
        latitude: 39.834809531773274,  //
        longitude: 44.02332939374624//
    }
]

export const IklimlerVeBesiUretimi3 = [
    {//->  Ordu ,  
        id: 1,
        text: 'En çok yağışı sonbahar alan bölgede yer alan ve 2022 itibariyle fındık yetiştiriciliğinde 1. sırada olan ilimiz nerededir? ',
        latitude: 41.00486429405695,//ANtalya veya mersin koordinatlarını koy
        longitude: 37.88437034777953//Susam
    },
    {// => Çay -> Rize , 
        id: 2,
        text: 'En az yağışı ilkbaharda alan bölgede yer alan, Yıl boyu yağış, yıkanmış ve asitli toprak isteyen bitkinin en çok yetiştirildiği ilimiz nerededir? ',
        latitude: 41.03834615812582, //
        longitude: 40.51367137283889//
    },
    {
        //Kenevir -> Sakarya, 
        id:3,
        text:'En çok yağışı sonbaharda alan bölgede yer alan ve 2022 itibariyle kenevir yetiştiriciliğinde 1. sırada olan ilimiz',
        latitude: 40.834956034702735,  //
        longitude: 30.462818010345927//
        
    },
    {
        //Kivi  
        id:4,
        text:'Keşişlemeye ismini de veren dağın yer aldığı bölgede yetiştirilen ve Kivi üretiminde 1. sırada bulunan il nerededir? ',
        latitude: 40.67022929797574, //
        longitude: 29.291384713611276//
    }
]

export const BesiUreticiligiVeToprak=[
    {
        //Adana  - SOya fasulyesi - Terra rosa
        id:1,
        text:'Terra rosa topraklarının yoğun bulunduğu bölgede de yer alan, soya fasulyesi üretiminin en çok yapıldığı ilimiz',
        latitude: 37.058705687289425, //
        longitude: 35.35213291358378//
    },
    {   //
        //  Kanola ve Konza
        id:2,
        text:'Vertisol topraklarında iyi yetişebilen Kanola ve Kolza üretiminin 1. olduğu ilimiz nerededir?',
        latitude: 41.06195905283413, //Tekirdağ
        longitude:  27.50249759284187//
    },
    {
        //  Karasu deltası -  
        id:3,
        text:'Podzol ve Kahverengi Orman topraklarının yoğun bulunduğu bölgemizde de bulunan Ankara ve Porsuk kollarına sahip nehrimizin oluşturduğu deltamız nerededir?',
        latitude: 41.12647632418263, //
        longitude: 30.67795250939686//
    },
    {
        //  Edirne -  Çeltik
        id:4,
        text:'Vertisol dışındaki bir diğer kalsimorfik toprak olan Rendzinada verimli bir şekilde yetişebilen çeltik\'te birinci olan ilimiz nerededir?',
        latitude: 41.70854581480627, //
        longitude: 26.53992730819423//
    },
    {//Manisa  
        id:5,
        text:'Regosol topraklarda daha iyi yetişebilen Üzüm\'ün miktar olarak en fazla yetiştirdiği ilimiz?',
        latitude: 38.613905320650865,
        longitude: 27.438086695294267,
    }
]

export const Mikroklima = [
    {
        id: 1,
        text: 'Tropikal ortama özgü ancak ülkemizde mikroklima olarak da yetişen bir ürününün en çok yetiştiği ilimiz',
        latitude: 39.71944,//ANtalya veya mersin koordinatlarını koy
        longitude: 43.05139//Muz
    },
    {
        id: 2,
        text: 'En çok yağışı kışın alan bölgemize özgü olan bir ürünün mikro klima olarak yetiştirildiği bir il',
        latitude: 36.7477,//Zeytini kastediyor
        longitude: 36.3327//Artvin
    }
    ,
    {
        id: 3,
        text: 'Fön rüzgarı sayesinde Turunçgilin mikro klima olarak yetiştiği ilimiz',
        latitude: 40.587580134,//Rize
        longitude: 37.178795716,
    },
    {
        id: 4, //Pamuk
        text: 'Yaz kuraklığına sahip olması sebebiyle Pamuk\'un mikroklima olarak yetişebildiği ilimiz',
        latitude: 40.587580134, //Iğdır
        longitude: 37.178795716,
    }
]




//Sadece başlık doğru, içerik yanlış
export const Madenler = [
    {//Divriği -> Demir
        id: 1,
        text: 'Nazik, Balık, Haçlı, Erdek, Çıldır volkanik set göllerinin yer aldığı bölgemizde bulunan ve Demir\'in çıkarıldığı bir ilimiz neresi olabilir?',
        latitude: 38.3462981007513,  
        longitude: 38.33031586547398, 
        solution: 'Malatya\n\n Bu göllerimiz Doğu Anadolu gölleridir. Doğu Anadolu\'da demir Malatya\'da çıkabilmektedir.'
    },
    {//Hazar Gölü -> Doğu ANadolu -> Elazığ -> Maden ilçesi 
        id: 2,
        text: 'Hazar isminde tek bir tektonik göle sahip olan bölgemizde bulunan ve Bakır madeninin en çok çıkarıldığı yer tam olarak hangi ilçemizdedir?',
        latitude: 38.880665005245376,
        longitude: 39.562035988069184,
        solution:'Elazığ -  Maden \n\n Hazar Gölü Doğu Anadolu bölgesindedir. Bakır madeni, bu bölgede Elazığ - Maden\'de çıkarılabilmektedir.'
    }
    ,
    { //Konya Seydişehir
        id: 3,
        text: 'Acıgöl\'ün tek volkanik göl olduğu bölgede çıkarılan Boksit (Alüminyum) madeni nerede çıkarılıyor olabilir? - (Boksit başka nerede olabilir :)) Voklüz(Sifonlu) kaynakların olduğu yerde',
        latitude: 37.46902758389506, 
        longitude: 31.852363322902164,
        solution:'Seydişehr - Konya \n\n Acıgöl, İç Anadolu\'da yer alır. Bu bölgede Boksit çıkarılan yer, Konya - Seydişehir\'dir'
    },
    { //Fethiye ve Köyceğizde çıkarılır
        id: 4,
        text: 'Zakkum, Lavanta, Keçiboynuzu, Kocayemiş, Defne, Yasemin, Funda gibi bitkilerin yetiştiği bölgemizde de çıkarılan Krom tam olarak nerede çıkarılmaktadır (Elazığ - GUleman dışında)?',
        latitude: 36.76645673765837, 
        longitude: 29.148401528667414,
        solution:'Fethiye \n\n Bahsedilen bitkiler Akdeniz Bölgesi\'ne özgü bir bölge olduğunu gösterir. Fethiye ve Köyceğiz ise bu bölgede yer alıp Krom çıkarılan yerlerdir.'
    }
]


export const NehirlerVeMadenler = [
    {//Bartın çayı -> Küre Dağlarından kaynağını alır -> Bu bölgemizde çıkarılan Bakır, kürededir  
        id: 1,
        text: 'Bartın çayının da kaynağını aldığı bölgemizde çıkarılan Bakır, tam olarak nerede çıkarılır?',
        latitude: 41.84152783647896, 
        longitude: 33.70499825566431,
        solution:'Küre dağları\n\n Bartın çayı, Küre dağları\'ndan kaynağını alır. Yine Bakır, Küre\'de çıkarılır.' 
    },
    {// Karabük demir-çelik sanayisinin su ihtiyacını karşılayan nehir -> Fİlyos(Yenice) 
        id: 2,
        text: 'Karabük demir-çelik sanayisinin su ihtiyacını karşılayan nehir nerededir?',
        latitude: 41.45105219773089, // Fİlyos(Yenice)
        longitude: 32.09809323039396,
        solution:'Filyos(Yenice) \n\n Filyos(Yenice) Nehri, Karabük demir - çelik sanayisinin su ihtiyacını karşılar.'
    }
    ,
    { //Bafra ovası
        id: 3,
        text: 'Üzerinde Altınkaya barajı da olan ve Gökırmak, Devrez ve Delice adlı 3 kola sahip nehrimizin döküldüğü delta ovası nerededir?',
        latitude: 41.63651551091865,//Kızılırmak'tan bahsediyor, Bafra ovasına dökülür. , 
        longitude: 35.92025821893708,
        solution:'Bafra Ovası \n\n Kızılırmak\'ın döküldüğü ovayı Kastediyor. Bafra Ovası\'dır'
    },
    {
        id: 4, //Çarşamba ovasından bahsediyor -> Samsunun çarşamba ilçesindedir.
        text: 'En önemli çayının Kelkit olduğu Akarsuyumuzun döküldüğü delta ovası nerededir?',
        latitude: 41.21996143147023, 
        longitude: 36.72441877411144,
        solution:'Çarşamba Ovası\n\nBahsedilen Akarsu Yeşilırmak\'tır. Döküldüğü yer Çarşamba Ovası\'dır.'
    },
    {
        id:5,//Artvin, Murgul -> Bakır 
        text:'Çoruh nehrinin de üzerinden geçtiği bölgemizde yer alan ve Bakır çıkarılan ilimiz neresidir?',
        latitude: 41.38502958778341,
        longitude: 41.61009267424927, //Not, çoruh nehri kaynağını türkiyeden alır ancak Gürcistanda karadenize dökülür.
        solution: 'Artvin Murgul \n\n Artvin, Çoruh Nehri\'nin Gürcistan\'da dökülmeden önce üzerinden geçtiği ve Bakır da çıkarılan ilimizdir.'
    }
]
export const Enerji =
[
    {   //Afşin Elbistan 
        id:1,
        text: 'En büyük linyit santrali nerededir?',
        latitude:38.654415721285595, 
        longitude:36.98026847112773,
        solution:'Elbistan - Afşin'
    },
    {//Hamitabat, kırklareli
        id:2,
        text: 'Doğal gazın hem çıkarılıp hem işlendiği ilçemiz nerededir?',
        latitude: 41.55452586004363, 
        longitude: 27.29860215663857,
        solution:'Kırklareli - Hamitabat'
    },
    {
        //Urfa Birecik
        id:3,
        text:'İlk güneş tarlası nerede kurulmuştur?',
        latitude: 37.11314705674835, 
        longitude: 37.96303949604946,
        solution: 'Urfa - Birecik'
    },
    {//Eskişehir sivrihisar
        id:4,
        text:'Toryum nerede bulunur?',
        latitude: 39.50161909243536, 
        longitude: 31.549570600946215,
        solution: 'Eskişehir - Sivrihisar'
    }
]

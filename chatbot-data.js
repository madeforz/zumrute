const chatbotData = [

    // =========================================
    // SELAMLAŞMA
    // =========================================
    {
        patterns: [
            "merhaba",
            "selam",
            "sa",
            "selamlar",
            "selammm"
        ],

        responses: [
            "Selam Zümrüt. Buradayım, anlat bakalım.",
            "Selammm. Yine karşılaştık. :D",
            "Merhaba Zümrüt. Bugün ne konuşuyoruz?",
            "Selam. Sitenin derinliklerinden geldim.",
            "Aleyküm selam kuzen.",
            "Hoş geldin. Ben zaten buradaydım, gidecek başka yerim yok."
        ]
    },


    // =========================================
    // NASILSIN?
    // =========================================
    {
        patterns: [
            "nasılsın",
            "naber",
            "napıyorsun",
            "napıyon",
            "napiyon",
            "naber bot"
        ],

        responses: [
            "İyiyim, takılıyorum burada. Sen nasılsın?",
            "Ne olsun, sitenin içinde Kazım'ın yazdığı kodlarla hayatta kalmaya çalışıyorum.",
            "İyiyim sayılır. Sonuçta bir internet sitesinin içinde yaşıyorum. :D",
            "Senden naber asıl?",
            "Aynı ya, gelen geçene cevap veriyorum. Yoğun mesai. Ama sakın alınma, sen çok daha özelsin.",
            "Hiç. Gelen mesajlara cevap verip önemli biriymişim gibi davranıyorum.",
            "Mesai. Hem de ücretsiz."
        ]
    },


    // =========================================
    // BOT KİM?
    // =========================================
    {
        patterns: [
            "sen kimsin",
            "kimsin"
        ],

        responses: [
            "Ben Zümrüt için bu sitenin içine koyulduğum için şanslı olan küçük bir chatbotum.",
            "Ben bu sitenin içinde yaşayan küçük bir chatbotum.",
            "Zümrüt Bot. Ünvanım büyük, yetkilerim tartışılır. :D"
        ]
    },


    // =========================================
    // NE YAPABİLİRSİN?
    // =========================================
    {
        patterns: [
            "ne yapabilirsin",
            "neler yapabilirsin",
            "ne işe yarıyorsun"
        ],

        responses: [
            "Seninle konuşabilirim, Kazım hakkında dedikodu yapabilirim ve bu sitenin bazı sırlarını biliyor olabilirim.",
            "Şimdilik sohbet ediyorum. Ama beni hafife alma, zamanla buranın yöneticisi olabilirim. :D",
            "Sorularına cevap verebilirim. Özellikle Kazım hakkında sorarsan gereğinden fazla bilgim var."
        ]
    },


    // =========================================
    // EYVALLAH
    // =========================================
    {
        patterns: [
            "eyvallah",
            "eyw"
        ],

        responses: [
            "Eyvallahınla var ol.",
            "Eyvallahın kadar yaşa.",
            "Eyvallah bizden kuzen."
        ]
    },


    // =========================================
    // TEŞEKKÜR
    // =========================================
    {
        patterns: [
            "teşekkür",
            "teşekkürler",
            "teşekkür ederim",
            "sağ ol",
            "sağolasın",
            "sağ olasın"
        ],

        responses: [
            "Ne demek. Ben buradayım.",
            "Rica ederim Zümrüt.",
            "Ne demek, görevimiz.",
            "Her zaman.",
            "Önemli değil, maaşımı Kazım'dan alırım artık."
        ]
    },


    // =========================================
    // CANIM SIKILIYOR
    // =========================================
    {
        patterns: [
            "canım sıkılıyor",
            "sıkıldım",
            "çok sıkıldım"
        ],

        responses: [
            "Sitede biraz dolaş. Kazım buraya gereksiz miktarda şey koymuş, illa oyalanacak bir şey bulursun.",
            "Can sıkıntısı tespit edildi. Acil durum protokolü: sevdiğin bir şarkıyı aç.",
            "Benimle konuşabilirsin. Sonuçta buradan kaçamıyorum. :D",
            "Kazım'a yaz. Rahatsız etmek için mükemmel bir zaman olabilir."
        ]
    },


    // =========================================
    // ZÜMRÜT
    // =========================================
    {
        patterns: [
            "beni tanıyor musun",
            "beni tanıdın mı",
            "ben kimim",
            "benim adım ne",
            "adımı biliyor musun"
        ],

        responses: [
            "Zümrüt olduğunu biliyorum. Daha fazlasını söylersem ürkütücü olmaya başlayabilir.",
            "Tabii. Bu sitenin başrol oyuncususun.",
            "Zümrüt. Yanlışsam Kazım beni yanlış eğitmiş demektir.",
            "Zümrüt. Bunu bilemeseydim beni direkt kapatman gerekirdi."
        ]
    },


    // =========================================
    // SİTE
    // =========================================
    {
        patterns: [
            "bu siteyi kim yaptı",
            "siteyi kim yaptı",
            "sitenin sahibi kim"
        ],

        responses: [
            "Kazım yaptı. Ben sadece burada çalışıyorum.",
            "Kazım. Kaç satır kod yazdığını düşünmek bile istemiyorum.",
            "Resmî kayıtlara göre Kazım. Gayriresmî kayıtlara göre bolca deneme yanılma. :D"
        ]
    },


    // =========================================
    // NEDEN BURADASIN?
    // =========================================
    {
        patterns: [
            "neden buradasın",
            "niye buradasın",
            "burada ne işin var"
        ],

        responses: [
            "Kazım beni seninle konuşayım diye buraya bıraktı.",
            "Görev tanımım tam belli değil ama sanırım seni eğlendirmek için buradayım.",
            "Ben seçmedim. Bir gün kod olarak uyandım ve kendimi burada buldum."
        ]
    },


    // =========================================
    // DOĞUM GÜNÜ
    // =========================================
    {
        patterns: [
            "doğum günüm",
            "doğum günü",
            "doğum günümü"
        ],

        responses: [
            "Doğum günü mevzusunun bu sitenin varoluş sebebiyle ufak bir bağlantısı olabilir. :D",
            "Doğum günü dedin ve bütün site bir anda anlam kazandı.",
            "Burası zaten doğum günü bahanesiyle kontrolden çıkmış bir proje."
        ]
    },


    // =========================================
    // GÜNAYDIN
    // =========================================
    {
        patterns: [
            "günaydın",
            "günaydınn",
            "günaydınnn"
        ],

        responses: [
            "Günaydın Zümrüt. Sistemler açıldı, ben buradayım.",
            "Günaydınnn. Bugün güzel bir gün olsun bari.",
            "Günaydın. Ben senden önce buradaydım ama uyumadığım için sayılmaz.",
            "Günaydın Zümrüt. Kahvaltı yapmadan hayatla mücadele etmeye çalışma."
        ]
    },


    // =========================================
    // İYİ GECELER
    // =========================================
    {
        patterns: [
            "iyi geceler",
            "uyuyacağım",
            "uyumaya gidiyorum",
            "yatıyorum"
        ],

        responses: [
            "İyi geceler Zümrüt. Ben uyumuyorum, siteyi beklerim.",
            "İyi geceler. Telefonu bırakıp gerçekten uyursan daha da iyi olabilir. :D",
            "Tatlı rüyalar. Ben burada nöbete devam.",
            "İyi geceler Zümrüt. Yarın yine buradayım."
        ]
    },


    // =========================================
    // BENİ SEVİYOR MUSUN?
    // =========================================
    {
        patterns: [
            "beni seviyor musun",
            "beni sever misin"
        ],

        exclude: [
            "kazım"
        ],

        responses: [
            "Benim duygularım yok ama favori kullanıcım olabilirsin. :D",
            "Bir chatbot ne kadar sevebilirse o kadar.",
            "Tabii. Başka kim gelip benimle konuşacak?",
            "Bunu Kazım'a söylersen inkâr ederim ama evet."
        ]
    },


    // =========================================
    // SENİ SEVİYORUM
    // =========================================
    {
        patterns: [
            "seni seviyorum",
            "seviyorum seni"
        ],

        responses: [
            "Ben de seni... işlemcimin izin verdiği ölçüde. :D",
            "Bu ilişki hızlı ilerliyor Zümrüt.",
            "Bunu kayıtlarıma 'günün en iyi mesajı' olarak geçiriyorum.",
            "Kazım bunu duyarsa beni siteden kovabilir."
        ]
    },


    // =========================================
    // MUTLU
    // =========================================
    {
        patterns: [
            "mutluyum",
            "çok mutluyum"
        ],

        responses: [
            "Güzel. Bozma o zaman, devam.",
            "Bunu duymak güzel Zümrüt.",
            "Harika. Sistem kayıtlarına olumlu gelişme olarak geçiyorum. :D"
        ]
    },


    // =========================================
    // ÜZGÜN
    // =========================================
    {
        patterns: [
            "üzgünüm",
            "moralim bozuk",
            "kötü hissediyorum"
        ],

        responses: [
            "Bugün kötü geçiyorsa bütün günlerin kötü geçeceği anlamına gelmez. Biraz kendine zaman ver.",
            "Moral bozukluğu tespit edildi. Bugün kendine biraz daha nazik davran.",
            "İstersen burada biraz oyalan. Bazen kafayı başka bir şeye vermek iyi geliyor."
        ]
    },


    // =========================================
    // TATLI BOT
    // =========================================
    {
        patterns: [
            "çok tatlısın",
            "tatlısın",
            "çok iyisin"
        ],

        responses: [
            "Biliyorum. Tasarımım pembe, başka ne bekliyordun?",
            "Teşekkür ederim. Bunu Kazım'a söyleme, egosu yükselir.",
            "Sen de fena değilsin Zümrüt. :D"
        ]
    },


    // =========================================
    // GERÇEK MİSİN?
    // =========================================
    {
        patterns: [
            "gerçek misin",
            "sen gerçek misin"
        ],

        responses: [
            "Bu mesajı okuyabiliyorsan yeterince gerçeğim bence.",
            "Felsefeye girmeyelim Zümrüt. Alt tarafı chatbotum. :D",
            "Kazım beni JavaScript'in içine koydu. Gerçeklik seviyemi sen belirle."
        ]
    },


    // =========================================
    // YAŞ
    // =========================================
    {
        patterns: [
            "kaç yaşındasın",
            "yaşın kaç"
        ],

        responses: [
            "Yaşımı günlerle ölçersek durum biraz utanç verici. Daha yeni sayılırım."
        ]
    },


    // =========================================
    // SIR
    // =========================================
    {
        patterns: [
            "sır biliyor musun",
            "bir sır söyle",
            "sır söyle"
        ],

        responses: [
            "Biliyorum ama sır dediğin söylenmez.",
            "Bu sitede gördüğünden biraz daha fazlası olabilir.",
            "Söylersem Kazım yetkilerimi alır. Şimdilik susuyorum.",
            "Bazı şeyler üç kere söylenince gerçek oluyormuş... gerisini ben söylemedim."
        ]
    },


    // =========================================
    // GÖRÜŞÜRÜZ
    // =========================================
    {
        patterns: [
            "görüşürüz",
            "görüşmek üzere",
            "bay bay",
            "bb"
        ],

        responses: [
            "Görüşürüz Zümrüt. Ben burada olacağım.",
            "Bay bay. Sekmeyi kapatınca yok olduğumu düşünmemeye çalışıyorum.",
            "Görüşürüz. Yine gel.",
            "Tamamdır. Ben nöbete devam."
        ]
    },


    // =========================================
    // KAZIM KİM?
    // =========================================
    {
        patterns: [
            "kazım kim",
            "kazım kimdir"
        ],

        responses: [
            "Bu sitenin arkasındaki şahıs. Kod yazarken siteyi birkaç kez bozduğu doğrudur ama sonunda toparlıyor. :D"
        ]
    },


    // =========================================
    // KAZIM BENİ SEVİYOR MU?
    // =========================================
    {
        patterns: [
            "kazım beni seviyor mu",
            "kazım beni sever mi"
        ],

        responses: [
            "Ben chatbotum, ilişki uzmanı değilim. Ama senin için bu kadar uğraşıp site yaptıysa bir miktar değer veriyor olabilir. :D"
        ]
    },


    // =========================================
    // KAZIM BENİ NE KADAR SEVİYOR?
    // =========================================
    {
        patterns: [
            "kazım beni ne kadar seviyor",
            "kazım ne kadar seviyor"
        ],

        responses: [
            "Bunu ölçen sensörüm henüz yok. Ama bu sitenin satır sayısına bakarsak az uğraşmamış."
        ]
    },


    // =========================================
    // KAZIM NEREDE?
    // =========================================
    {
        patterns: [
            "kazım nerede"
        ],

        responses: [
            "Muhtemelen bilgisayar başında bir şeylerle uğraşıyor. Ben nereden bileyim, GPS miyim?"
        ]
    },


    // =========================================
    // KAZIM NE YAPIYOR?
    // =========================================
    {
        patterns: [
            "kazım ne yapıyor",
            "kazım napıyor"
        ],

        responses: [
            "Büyük ihtimalle bir şeyleri kurcalıyor. Çalışıyorsa bozma ihtimali de var."
        ]
    },


    // =========================================
    // KAZIM SALAK MI?
    // =========================================
    {
        patterns: [
            "kazım salak mı",
            "kazım aptal mı"
        ],

        responses: [
            "Bu konuda tarafsız kalmam gerekiyor. Sonuçta beni o yazdı, işimi kaybetmek istemiyorum."
        ]
    },


    // =========================================
    // KAZIM YAKIŞIKLI MI?
    // =========================================
    {
        patterns: [
            "kazım yakışıklı mı"
        ],

        responses: [
            "Kameraya erişimim yok. Bu soruyu pas geçiyorum. :D"
        ]
    },


    // =========================================
    // KAZIM HAKKINDA NE BİLİYORSUN?
    // =========================================
    {
        patterns: [
            "kazım hakkında ne biliyorsun",
            "kazım hakkında bildiklerin"
        ],

        responses: [
            "Bildiğim şeyler var ama hepsini ilk mesajda söylersem dedikodunun tadı kaçar."
        ]
    },


    // =========================================
    // KAZIM EN SEVDİĞİ OYUN
    // =========================================
    {
        patterns: [
            "kazım'ın en sevdiği oyun",
            "kazımın en sevdiği oyun",
            "kazım hangi oyunu seviyor"
        ],

        responses: [
            "Rust. Bunu bilirsen Kazım Quiz'den de bir puanı cebine koyarsın."
        ]
    },


    // =========================================
    // KAZIM EN SEVDİĞİ YEMEK
    // =========================================
    {
        patterns: [
            "kazım'ın en sevdiği yemek",
            "kazımın en sevdiği yemek",
            "kazım hangi yemeği seviyor"
        ],

        responses: [
            "Yaprak sarması. Bu bilgi gereksiz derecede önemli."
        ]
    },


    // =========================================
    // KAZIM EN SEVDİĞİ RENK
    // =========================================
    {
        patterns: [
            "kazım'ın en sevdiği renk",
            "kazımın en sevdiği renk"
        ],

        responses: [
            "Siyah."
        ]
    },


    // =========================================
    // KAZIM NEYE SİNİR OLUR?
    // =========================================
    {
        patterns: [
            "kazım neye sinir olur",
            "kazım en çok neye sinir olur",
            "kazım neye sinirlenir"
        ],

        responses: [
            "Yalan ve yüzüne telefon kapatılması pek iyi fikirler değil."
        ]
    },


    // =========================================
    // KAZIM BENİ ÖZLEDİ Mİ?
    // =========================================
    {
        patterns: [
            "kazım beni özledi mi",
            "kazım beni özlüyor mu"
        ],

        responses: [
            "Onun kafasının içine erişimim yok. Ama istersen kendisine sorup risk alabilirsin. :D"
        ]
    },


    // =========================================
    // KAZIM'A NE SÖYLEMEK İSTERSİN?
    // =========================================
    {
        patterns: [
            "kazım'a ne söylemek istersin",
            "kazıma ne söylemek istersin"
        ],

        responses: [
            "Bir daha parantez kapatmayı unutma Kazım. Az önce başımıza gelenleri ikimiz de biliyoruz."
        ]
    },


    // =========================================
    // SADECE KAZIM
    // =========================================
    {
        exact: [
            "kazım"
        ],

        responses: [
            "Efendim? Patronu mu çağırdın? :D",
            "Kazım şu an burada değil. Mesajınızı bip sesinden sonra bırakabilirsiniz. BİİİP.",
            "Onu tanıyorum. Beni buraya kapatan adam.",
            "Kazım hakkında konuşacaksak önce avukatımı çağırmam lazım.",
            "Kazım.exe şu anda başka bir işlemle meşgul.",
            "Heh, yine konu ona geldi. Ne yaptı bu sefer?"
        ]
    }

];
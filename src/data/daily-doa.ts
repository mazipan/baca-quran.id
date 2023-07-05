export type DailyDoaItem = {
  title: string
  arabic: string
  latin: string
  translation: string
}

const dailyDoa: DailyDoaItem[] = [{
  "title": "Doa Sebelum Makan",
  "arabic": "اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
  "latin": "Alloohumma barik lanaa fiimaa razatanaa waqinaa 'adzaa bannar",
  "translation": "Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka"
},
{
  "title": "Doa Sesudah Makan",
  "arabic": "اَلْحَمْدُ ِللهِ الَّذِىْ اَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ",
  "latin": "Alhamdu lillaahil ladzii ath'amanaa wa saqoonaa wa ja'alnaa muslimiin",
  "translation": "Segala puji bagi Allah yang telah memberi makan kami dan minuman kami, serta menjadikan kami sebagai orang-orang islam"
},
{
  "title": "Doa Sesudah  Minum",
  "arabic": "اَلْحَمْدُ ِللهِ الَّذِىْ جَعَلَهُ عَذْبًا فُرَاتًا بِرَحْمَتِهِ وَلَمْ يَجْعَلْهُ مِلْحًا اُجَاجًا بِذُنُوْبِنَا",
  "latin": "Alhamdu lillaahil ladzi ja'alahuu 'adzbam furootam birohmatihii wa lamyaj'alhu milhan ujaajam bidzunuubinaa",
  "translation": "Segala puji bagi Allah yang telah menjadikan air ini (minuman) segar dan menggiatkan dengan rahmat-Nya dan tidak menjadikan air ini (minuman) asin lagi pahit karena dosa-dosa kami"
},
{
  "title": "Doa Ketika Makan Lupa Membaca Doa",
  "arabic": "بِسْمِ اللهِ فِىِ أَوَّلِهِ وَآخِرِهِ",
  "latin": "Bismillaahi fii awwalihi wa aakhirihi",
  "translation": "Dengan menyebut nama Allah pada awal dan akhirnya"
},
{
  "title": "Doa Sebelum Tidur",
  "arabic": "بِسْمِكَ اللّٰهُمَّ اَحْيَا وَاَمُوْتُ",
  "latin": "Bismikallohumma ahya wa amuutu",
  "translation": "Dengan menyebut nama-Mu ya Allah, aku hidup dan aku mati"
},
{
  "title": "Doa Ketika Mimpi Buruk",
  "arabic": "اَللّٰهُمَّ إِنّىِ أَعُوْذُ بِكَ مِنْ عَمَلِ الشَّيْطَانِ وَسَيِّئاَتِ اْلأَحْلاَمِ",
  "latin": "Allaahumma innii a'uudzubika min 'amalisy syaithaani wa sayyiaatil ahlami",
  "translation": "Ya Allah, sesungguhnya aku mohon perlindungan kepada Engkau dari perbuatan setan dan dari mimpi-mimpi yang buruk"
},
{
  "title": "Doa Ketika Mendapat Mimpi Baik",
  "arabic": "اَلْحَمْدُ ِللهِ الَّذِيْ قَطْلَ الْحَاجَتِ",
  "latin": "Alhamdulillahil ladzii qodzoo haajaati",
  "translation": "Segala puji bagi Allah yang telah memberi hajatku"
},
{
  "title": "Doa Bangun Tidur",
  "arabic": "اَلْحَمْدُ ِللهِ الَّذِىْ اَحْيَانَا بَعْدَمَآ اَمَاتَنَا وَاِلَيْهِ النُّشُوْرُ",
  "latin": "Alhamdu lillahil ladzii ahyaanaa ba'da maa amaa tanaa wa ilahin nusyuuru",
  "translation": "Segala puji bagi Allah yang telah menghidupkan kami sesudah kami mati (membangunkan dari tidur) dan hanya kepada-Nya kami dikembalikan"
},
{
  "title": "Doa Masuk Kamar Mandi Atau Toilet",
  "arabic": "اَللّٰهُمَّ اِنّىْ اَعُوْذُبِكَ مِنَ الْخُبُثِ وَالْخَبَآئِثِ",
  "latin": "Alloohumma Innii a'uudzubika minal khubutsi wal khoaaitsi",
  "translation": "Ya Allah, aku berlindung pada-Mu dari godaan syetan  laki-laki dan setan perempuan"
},
{
  "title": "Doa Istinja",
  "arabic": "اَللّٰهُمَّ حَسِّنْ فَرْجِىْ مِنَ الْفَوَاخِشِ وَظَهِّرْ قَلْبِيْ مِنَ النِّفَاقِ",
  "latin": "Alloohumma thahhir qolbii minan nifaaqi wa hashshin fajrii minal fawaahisyi",
  "translation": "Wahai Tuhanku, sucikanlah hatiku dari sifat kepura-puraan (munafiq) serta peliharalah kemaluanku dari perbuatan keji"
},
{
  "title": "Doa Keluar Kamar Mandi Atau Toilet",
  "arabic": "غُفْرَانَكَ الْحَمْدُ ِللهِ الَّذِىْ اَذْهَبَ عَنّى اْلاَذَى وَعَافَانِىْ",
  "latin": "Ghufraanaka. Alhamdulillaahil ladzii adzhaba ‘annjil adzaa wa’aafaanii",
  "translation": "Dengan mengharap ampunanMu, segala puji milik Allah yang telah menghilangkan kotoran dari badanku dan yang telah menyejahterakan"
},
{
  "title": "Doa Menjelang Sholat Shubuh",
  "arabic": "اَللّٰهُمَّ اِنِّى اَعُوْذُ بِكَ مِنْ ضِيْقِ الدُّنْيَا وَضِيْقِ يَوْمِ الْقِيَامَةِ",
  "latin": "Alloohumma inni a'udzubika min dzhiiqid-dunyaa wa dzhiiqi yaumal-qiyaamati",
  "translation": "Ya Allah, Sesungguhnya aku berlindung kepada-Mu dari kesempitan dunia dan kesempitan hari kiamat. (HR. Abu Daud)"
},
{
  "title": "Doa Menyambut Pagi hari",
  "arabic": "اَللّٰهُمَّ بِكَ اَصْبَحْنَا وَبِكَ اَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ النُّشُوْرُ",
  "latin": "Alloohumma bika ashbahnaa wa bika amsainaa wa bika nahyaa wa bika namuutu wa ilaikan nusyuuru",
  "translation": "Ya Allah, karena Engkau kami mengalami waktu pagi dan waktu petang, dan karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali"
},
{
  "title": "Doa Menyambut Sore Hari",
  "arabic": "اَللّٰهُمَّ بِكَ اَمْسَيْنَا وَبِكَ اَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ الْمَصِيْرُ",
  "latin": "Alloohumma bika amsainaa wa bika ashbahnaa wa bika nahyaa wa bika namuutu wa ilaikal mashiir",
  "translation": "Ya Allah, karena Engkau kami mengalami waktu petang dan waktu pagi, karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali"
},
{
  "title": "Doa Ketika Bercermin",
  "arabic": "اَلْحَمْدُ ِللهِ كَمَا حَسَّنْتَ خَلْقِىْ  فَحَسِّـنْ خُلُقِىْ",
  "latin": "Alhamdulillaahi kamaa hassanta kholqii fahassin khuluqii",
  "translation": "Segala puji bagi Allah, baguskanlah budi pekertiku sebagaimana Engkau telah membaguskan rupa wajahku"
},
{
  "title": "Doa Masuk Rumah",
  "arabic": "اَللّٰهُمَّ اِنّىْ اَسْأَلُكَ خَيْرَالْمَوْلِجِ وَخَيْرَالْمَخْرَجِ بِسْمِ اللهِ وَلَجْنَا وَبِسْمِ اللهِ خَرَجْنَا وَعَلَى اللهِ رَبّنَا تَوَكَّلْنَا",
  "latin": "Allahumma innii as-aluka khoirol mauliji wa khoirol makhroji bismillaahi wa lajnaa wa bismillaahi khorojnaa wa'alallohi robbina tawakkalnaa",
  "translation": "Ya Allah, sesungguhnya aku mohon kepada-Mu baiknya tempat masuk dan baiknya tempat keluar dengan menyebut nama Allah kami masuk, dan dengan menyebut nama Allah kami keluar dan kepada Allah Tuhan kami, kami bertawakkal"
},
{
  "title": "Doa Keluar Rumah / Doa Bepergian",
  "arabic": "بِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ لاَحَوْلَ وَلاَقُوَّةَ اِلاَّ بِالله",
  "latin": "Bismillaahi tawakkaltu 'alalloohi laa hawlaa walaa quwwata illaa bilaahi",
  "translation": "Dengan menyebut nama Allah aku bertawakal kepada Allah, tiada daya kekuatan melainkan dengan pertologan Allah"
},
{
  "title": "Doa Memakai Pakaian",
  "arabic": "بِسْمِ اللهِ اَللّٰهُمَّ اِنِّى اَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَاهُوَ لَهُ وَاَعُوْذُبِكَ مِنْ شَرِّهِ وَشَرِّمَا هُوَلَهُ",
  "latin": "Bismillaahi, Alloohumma innii as-aluka min khoirihi wa khoiri maa huwa lahuu wa'a'uu dzubika min syarrihi wa syarri maa huwa lahuu",
  "translation": "Dengan nama-Mu yaa Allah akku minta kepada Engkau kebaikan pakaian ini dan kebaikan apa yang ada padanya, dan aku berlindung kepada Engkau dari kejahatan pakaian ini dan kejahatan yang ada padanya"
},
{
  "title": "Doa Memakai Pakaian Baru",
  "arabic": "اَلْحَمْدُ لِلّٰهِ الَّذِىْ كَسَانِىْ هَذَا وَرَزَقَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِنِّىْ وَلاَقُوَّةٍ",
  "latin": "Alhamdu lillaahil ladzii kasaanii haadzaa wa rozaqoniihi min ghoiri hawlim minni wa laa quwwatin",
  "translation": "Segala puji bagi Allah yang memberi aku pakaian ini dan memberi rizeki dengan tiada upaya dan kekuatan dariku"
},
{
  "title": "Doa Melepas Pakaian",
  "arabic": "بِسْمِ اللهِ الَّذِيْ لاَ إِلَهَ إِلَّا هُوَ",
  "latin": "Bismillaahil ladzii laa ilaaha illaa huwa",
  "translation": "Dengan nama Allah yang tiada Tuhan selain-Nya"
},
{
  "title": "Doa Memohon Ilmu Yang Bermanfaat",
  "arabic": "اَللّٰهُمَّ اِنِّى اَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً",
  "latin": "Alloohumma innii as-aluka 'ilmaan naafi'aan wa rizqoon thoyyibaan wa 'amalaan mutaqobbalaan",
  "translation": "Ya Allah, sesungguhnya aku mohon kepada-Mu ilmu yang berguna, rezki yang baik dan amal yang baik Diterima. (H.R. Ibnu Majah)"
},
{
  "title": "Doa Sebelum Belajar",
  "arabic": "يَارَبِّ زِدْنِىْ عِلْمًا وَارْزُقْنِىْ فَهْمًا",
  "latin": "Yaa robbi zidnii 'ilman warzuqnii fahmaa",
  "translation": "Ya Allah, tambahkanlah aku ilmu dan berikanlah aku rizqi akan kepahaman"
},
{
  "title": "Doa Sesudah Belajar",
  "arabic": "اَللّٰهُمَّ اِنِّى اِسْتَوْدِعُكَ مَاعَلَّمْتَنِيْهِ فَارْدُدْهُ اِلَىَّ عِنْدَ حَاجَتِىْ وَلاَ تَنْسَنِيْهِ يَارَبَّ الْعَالَمِيْنَ",
  "latin": "Allaahumma innii astaudi'uka maa 'allamtaniihi fardud-hu ilayya 'inda haajatii wa laa tansaniihi yaa robbal 'alamiin",
  "translation": "Ya Allah, sesungguhnya aku menitipkan kepada Engkau ilmu-ilmu yang telah Engkau ajarkan kepadaku, dan kembalikanlah kepadaku sewaktu aku butuh kembali dan janganlah Engkau lupakan aku kepada ilmu itu wahai Tuhan seru sekalian alam"
},
{
  "title": "Doa Berpergian",
  "arabic": "اَللّٰهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِعَنَّابُعْدَهُ اَللّٰهُمَّ اَنْتَ الصَّاحِبُ فِى السَّفَرِوَالْخَلِيْفَةُفِى الْاَهْلِ",
  "latin": "Alloohumma hawwin 'alainaa safaranaa hadzaa waatwi 'annaa bu'dahu. Alloohumma antashookhibu fiissafari walkholiifatu fiil ahli",
  "translation": "Ya Allah, mudahkanlah kami berpergian ini, dan dekatkanlah kejauhannya. Ya Allah yang menemani dalam berpergian, dan Engkau pula yang melindungi keluarga"
},
{
  "title": "Doa Naik Kendaraan",
  "arabic": "سُبْحَانَ الَّذِىْ سَخَّرَلَنَا هَذَا وَمَاكُنَّالَهُ مُقْرِنِيْنَ وَاِنَّآ اِلَى رَبِّنَا لَمُنْقَلِبُوْنَ",
  "latin": "Subhaanalladzii sakkhara lanaa hadza wama kunna lahu muqriniin wa-inna ilaa rabbina lamunqalibuun.",
  "translation": "Maha suci Allah yang telah menundukkan untuk kami (kendaraan) ini. padahal sebelumnya kami tidak mampu untuk menguasainya, dan hanya kepada-Mu lah kami akan kembali "
},
{
  "title": "Doa Naik Kapal",
  "arabic": "بِسْمِ اللهِ مَجْرَهَا وَمُرْسَهَآاِنَّ رَبِّىْ لَغَفُوْرٌرَّحِيْمٌ",
  "latin": "Bismillaahi majrahaa wa mursaahaa inna robbii laghofuurur rohiim",
  "translation": "Dengan nama Allah yang menjalankan kendaraan ini berlayar dan berlabuh, sesungguhnya Tuhanku benar-benar Maha Pengampun lagi Maha Penyayang"
},
{
  "title": "Doa Ketika Sampai di Tempat Tujuan",
  "arabic": "اَلْحَمْدُ ِللهِ الَّذِى سَلَمَنِى وَالَّذِى اَوَنِى وَالَّذِى جَمَعَ الشَّمْلَ بِ",
  "latin": "Alhamdulillahil ladzi sallamani wal ladzi awani wal ladzi jama’asy syamla bi",
  "translation": "Segala puji bagi Allah, yang telah menyelamatkan akau dan yang telah melindungiku dan yang mengumpulkanku dengan keluargaku"
},
{
  "title": "Doa Ketika Menuju Masjid",
  "arabic": "اَللّٰهُمَّ اجْعَلْ فِىْ قَلْبِى نُوْرًا وَفِى لِسَانِىْ نُوْرًا وَفِىْ بَصَرِىْ نُوْرًا وَفِىْ سَمْعِىْ نُوْرًا وَعَنْ يَسَارِىْ نُوْرًا وَعَنْ يَمِيْنِىْ نُوْرًا وَفَوْقِىْ نُوْرًا وَتَحْتِىْ نُوْرًا وَاَمَامِىْ نُوْرًا وَخَلْفِىْ نُوْرًا وَاجْعَلْ لِّىْ نُوْرًا",
  "latin": "Alloohummaj-'al fii qolbhii nuuroon wa fii lisaanii nuuroon wa fii bashorii nuuroon wa fii sam'ii nuuroon wa'an yamiinii nuuroon wa'an yasaarii nuuroon wa fauqii nuuroo wa tahtii nuuroo wa amaamii nuuroon wa khofii nuuroon waj-'al lii nuuroon",
  "translation": "Ya Allah, jadikanlah dihatiku cahaya, pada lisanku cahaya dipandanganku cahaya, dalam pendengaranku cahaya, dari kananku cahaya, dari kiriku cahaya, dari atasku cahaya, dari bawahku cahaya, dari depanku cahaya, belakangku cahaya, dan jadikanlah untukku cahaya (H.R. Bukhari dan Muslim)"
},
{
  "title": "Doa Masuk Masjid",
  "arabic": "اَللّٰهُمَّ افْتَحْ لِيْ اَبْوَابَ رَحْمَتِكَ",
  "latin": "Allahummaf tahlii abwaaba rohmatik",
  "translation": "Ya Allah, bukalah untukku pintu-pintu rahmat-Mu"
},
{
  "title": "Doa Keluar Masjid",
  "arabic": "اَللّٰهُمَّ اِنِّى اَسْأَلُكَ مِنْ فَضْلِكَ",
  "latin": "Allahumma innii asaluka min fadlik",
  "translation": "Ya Allah, sesungguhnya aku memohon keutamaan dari-Mu"
},
{
  "title": "Doa Akan Membaca Al-Qur'an",
  "arabic": "اَللّٰهُمَّ افْتَحْ عَلَىَّ حِكْمَتَكَ وَانْشُرْ عَلَىَّ رَحْمَتَكَ وَذَكِّرْنِىْ مَانَسِيْتُ يَاذَاالْجَلاَلِ وَاْلاِكْرَامِ",
  "latin": "Alloohummaftah 'alayya hikmataka wansyur 'alayya rohmataka wa dzakkirnii maanasiitu yaa dzal jalaali wal ikhroomi",
  "translation": "Ya Allah bukakanlah hikmahMu padaku, bentangkanlah rahmatMu padaku dan ingatkanlah aku terhadap apa yang aku lupa, wahai Dzat yang memiliki keagungan dan kemuliaan"
},
{
  "title": "Doa Setelah Membaca Al-Qur'an",
  "arabic": "اَللّٰهُمَّ ارْحَمْنِىْ بِالْقُرْآنِ. وَاجْعَلْهُ لِىْ اِمَامًا وَنُوْرًا وَّهُدًى وَّرَحْمَةً. اَللّٰهُمَّ ذَكِّرْنِىْ مِنْهُ مَانَسِيْتُ وَعَلِّمْنِىْ مِنْهُ مَاجَهِلْتُ. وَارْزُقْنِىْ تِلاَ وَتَهُ آنَآءَ اللَّيْلِ وَاَطْرَافَ النَّهَارٍ. وَاجْعَلْهُ لِىْ حُجَّةً يَارَبَّ الْعَالَمِيْنَ",
  "latin": "Allahummarhamnii bil qur'aani. waj'alhu lii imaaman wa nuuran wa hudan wa rohman. Allahumma dzakkirnii minhu maa nasiitu wa'allimnii minhu maa jahiltu. wazuqnii tilaa watahu aanaa-al laili wa athroofan nahaari. waj'alhu lii hujjatan yaa robbal 'aalamiina.",
  "translation": "Ya Allah, rahmatilah aku dengan Al-Quran yang agung, jadikanlah ia bagiku ikutan cahaya petunjuk rahmat. Ya Allah, ingatkanlah apa yang telah aku lupa dan ajarkan kepadaku apa yang tidak aku ketahui darinya, anugerahkanlah padaku kesempatan membacanya pada sebagian malam dan siang, jadikanlah ia hujjah yang kuat bagiku, wahai Tuhan seru sekalian alam"
},
{
  "title": "Doa Niat Wudhu",
  "arabic": "نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ اْلاَصْغَرِ فَرْضًا لِلّٰهِ تَعَالَى",
  "latin": "Nawaitul whudu-a lirof'il hadatsii ashghori fardhon lillaahi ta'aalaa",
  "translation": "Saya niat berwudhu untuk menghilangkan hadast kecil fardu (wajib) karena Allah ta'ala"
},
{
  "title": "Doa Setelah Wudhu",
  "arabic": "اَشْهَدُ اَنْ لاَّاِلَهَ اِلاَّاللهُ وَحْدَهُ لاَشَرِيْكَ لَهُ وَاَشْهَدُ اَنَّ مُحَمَّدًاعَبْدُهُ وَرَسُوْلُهُ. اَللّٰهُمَّ اجْعَلْنِىْ مِنَ التَّوَّابِيْنَ وَاجْعَلْنِىْ مِنَ الْمُتَطَهِّرِيْنَ، وَجْعَلْنِيْ مِنْ عِبَادِكَ الصَّالِحِيْنَ",
  "latin": "Asyhadu allaa ilaaha illalloohu wahdahuu laa syariika lahu wa asyhadu anna muhammadan ‘abduhuuwa rosuuluhuu, alloohummaj’alnii minat tawwaabiina waj’alnii minal mutathohhiriina, waj'alnii min 'ibadikash shaalihiina",
  "translation": "Aku bersaksi, tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya, dan aku mengaku bahwa Nabi Muhammad itu adalah hamba dan Utusan Allah. Ya Allah, jadikanlah aku dari golongan orang-orang yang bertaubat dan jadikanlah aku dari golongan orang-orang yang suci dan jadikanlah aku dari golongan hamba-hamba Mu yang shaleh"
},
{
  "title": "Doa akan Mandi",
  "arabic": "اَللّٰهُمَّ اغْفِرْلِى ذَنْبِى وَوَسِّعْ لِى فِىْ دَارِىْ وَبَارِكْ لِىْ فِىْ رِزْقِىْ",
  "latin": "Alloohummaghfirlii dzambii wa wassi'lii fii daarii wa baarik lii fii rizqii",
  "translation": "Ya Allah ampunilah dosa kesalahanku dan berilah keluasaan di rumahku serta berkahilah pada rezekiku"
}]

export default dailyDoa

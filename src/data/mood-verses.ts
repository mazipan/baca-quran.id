export type MoodId =
	'cemas' | 'bersyukur' | 'sedih' | 'takut' | 'marah' | 'lemah-iman' | 'tobat' | 'bahagia';

export interface MoodVerse {
	s: number;
	v: number;
	reasonId: string;
	reasonEn: string;
}

export interface Mood {
	id: MoodId;
	emoji: string;
	labelKey: string;
	verses: MoodVerse[];
}

export const MOODS: readonly Mood[] = [
	{
		id: 'cemas',
		emoji: '😟',
		labelKey: 'mood.moods.cemas',
		verses: [
			{
				s: 13,
				v: 28,
				reasonId: 'Hanya dengan mengingat Allah hati menjadi tenang.',
				reasonEn: 'In the remembrance of Allah do hearts find rest.'
			},
			{
				s: 94,
				v: 5,
				reasonId: 'Bersama setiap kesulitan pasti ada kemudahan.',
				reasonEn: 'With every hardship comes ease.'
			},
			{
				s: 94,
				v: 6,
				reasonId: 'Allah menegaskan: setelah kesulitan ada kemudahan.',
				reasonEn: 'Allah affirms: after hardship will be ease.'
			},
			{
				s: 2,
				v: 286,
				reasonId: 'Allah tidak membebani seseorang melebihi kesanggupannya.',
				reasonEn: 'Allah does not burden a soul beyond what it can bear.'
			},
			{
				s: 65,
				v: 3,
				reasonId: 'Barang siapa bertawakkal kepada Allah, Dia mencukupinya.',
				reasonEn: 'Whoever relies upon Allah, He will be sufficient for him.'
			}
		]
	},
	{
		id: 'bersyukur',
		emoji: '🙏',
		labelKey: 'mood.moods.bersyukur',
		verses: [
			{
				s: 14,
				v: 7,
				reasonId: 'Jika bersyukur, Allah akan menambah nikmat bagimu.',
				reasonEn: 'If you are grateful, I will surely increase you in favor.'
			},
			{
				s: 55,
				v: 13,
				reasonId: 'Nikmat Tuhanmu yang manakah yang kamu dustakan?',
				reasonEn: 'Which of the favors of your Lord will you deny?'
			},
			{
				s: 1,
				v: 2,
				reasonId: 'Segala puji bagi Allah, Rabb semesta alam.',
				reasonEn: 'All praise is due to Allah, Lord of all the worlds.'
			},
			{
				s: 2,
				v: 152,
				reasonId: 'Ingatlah Allah, Dia akan mengingatmu. Bersyukurlah dan jangan kufur.',
				reasonEn: 'Remember Me and I will remember you. Be grateful and do not deny Me.'
			},
			{
				s: 31,
				v: 12,
				reasonId: 'Barang siapa bersyukur, sesungguhnya bersyukur untuk dirinya sendiri.',
				reasonEn: 'Whoever is grateful, his gratitude is only for the benefit of himself.'
			}
		]
	},
	{
		id: 'sedih',
		emoji: '😢',
		labelKey: 'mood.moods.sedih',
		verses: [
			{
				s: 94,
				v: 5,
				reasonId: 'Setelah setiap kesulitan, ada kemudahan yang menanti.',
				reasonEn: 'After every difficulty there is relief waiting.'
			},
			{
				s: 3,
				v: 139,
				reasonId: 'Janganlah bersedih hati; kamulah yang paling tinggi derajatnya jika beriman.',
				reasonEn: 'Do not weaken and do not grieve; you will be superior if you are true believers.'
			},
			{
				s: 39,
				v: 53,
				reasonId: 'Jangan berputus asa dari rahmat Allah; Dia mengampuni semua dosa.',
				reasonEn: 'Do not despair of the mercy of Allah; He forgives all sins.'
			},
			{
				s: 12,
				v: 87,
				reasonId: 'Hanya orang-orang kafir yang berputus asa dari rahmat Allah.',
				reasonEn: 'No one despairs of the mercy of Allah except the disbelieving people.'
			},
			{
				s: 2,
				v: 286,
				reasonId: 'Allah tidak membebani seseorang melebihi kemampuannya.',
				reasonEn: 'Allah does not burden a soul beyond what it can bear.'
			}
		]
	},
	{
		id: 'takut',
		emoji: '😨',
		labelKey: 'mood.moods.takut',
		verses: [
			{
				s: 2,
				v: 255,
				reasonId: 'Ayat Kursi — perlindungan dan keagungan Allah yang sempurna.',
				reasonEn: 'The Throne Verse — the perfect protection and majesty of Allah.'
			},
			{
				s: 9,
				v: 51,
				reasonId:
					'Tidak ada yang menimpa kami kecuali apa yang Allah tetapkan; Dia pelindung kami.',
				reasonEn: 'Nothing will befall us except what Allah has decreed; He is our protector.'
			},
			{
				s: 65,
				v: 3,
				reasonId: 'Barang siapa bertawakkal kepada Allah, Dia mencukupinya.',
				reasonEn: 'Whoever relies upon Allah, He will be sufficient for him.'
			},
			{
				s: 3,
				v: 173,
				reasonId: 'Cukuplah Allah sebagai pelindung dan sebaik-baik tempat bersandar.',
				reasonEn: 'Allah is sufficient for us, and He is the best disposer of affairs.'
			},
			{
				s: 67,
				v: 13,
				reasonId: 'Allah mengetahui segala sesuatu, termasuk apa yang kamu sembunyikan.',
				reasonEn: 'Whether you conceal your speech or reveal it, He knows what is in the breasts.'
			}
		]
	},
	{
		id: 'marah',
		emoji: '😡',
		labelKey: 'mood.moods.marah',
		verses: [
			{
				s: 3,
				v: 134,
				reasonId: 'Orang beriman menahan amarah dan memaafkan orang lain.',
				reasonEn: 'The believers restrain anger and pardon people.'
			},
			{
				s: 41,
				v: 34,
				reasonId: 'Tolaklah kejahatan dengan cara yang lebih baik.',
				reasonEn: 'Repel evil with what is better.'
			},
			{
				s: 7,
				v: 199,
				reasonId: 'Tunjukkanlah sikap pemaaf dan jauhi orang-orang yang bodoh.',
				reasonEn: 'Show forgiveness, enjoin what is good, and turn away from the ignorant.'
			},
			{
				s: 42,
				v: 37,
				reasonId: 'Mereka yang apabila ditimpa amarah, mereka memaafkan.',
				reasonEn: 'Those who, when anger strikes them, forgive.'
			},
			{
				s: 25,
				v: 63,
				reasonId:
					'Hamba Allah yang sejati berjalan dengan rendah hati dan menjawab kebodohan dengan salam.',
				reasonEn:
					'The servants of the Most Merciful walk humbly and respond to ignorance with peace.'
			}
		]
	},
	{
		id: 'lemah-iman',
		emoji: '🌑',
		labelKey: 'mood.moods.lemah_iman',
		verses: [
			{
				s: 8,
				v: 2,
				reasonId: 'Orang beriman sejati hatinya bergetar ketika disebut nama Allah.',
				reasonEn: 'True believers are those whose hearts tremble at the mention of Allah.'
			},
			{
				s: 57,
				v: 28,
				reasonId: 'Bertakwalah kepada Allah dan percayalah pada Rasul-Nya.',
				reasonEn: 'Fear Allah and believe in His Messenger.'
			},
			{
				s: 49,
				v: 15,
				reasonId: 'Orang beriman sejati tidak ragu dan berjihad dengan harta dan jiwa.',
				reasonEn: 'True believers do not doubt and strive with their wealth and lives.'
			},
			{
				s: 2,
				v: 2,
				reasonId: "Al-Qur'an adalah petunjuk bagi orang-orang yang bertakwa.",
				reasonEn: 'The Quran is guidance for those who fear Allah.'
			},
			{
				s: 9,
				v: 128,
				reasonId: 'Rasul sangat peduli dan penuh kasih sayang kepada orang-orang beriman.',
				reasonEn:
					'The Messenger is deeply concerned for you and compassionate toward the believers.'
			}
		]
	},
	{
		id: 'tobat',
		emoji: '💧',
		labelKey: 'mood.moods.tobat',
		verses: [
			{
				s: 39,
				v: 53,
				reasonId: 'Jangan berputus asa dari rahmat Allah; Dia mengampuni semua dosa.',
				reasonEn: "Do not despair of Allah's mercy; He forgives all sins."
			},
			{
				s: 2,
				v: 222,
				reasonId: 'Allah mencintai orang-orang yang bertaubat dan yang menyucikan diri.',
				reasonEn: 'Allah loves those who repent and loves those who purify themselves.'
			},
			{
				s: 4,
				v: 110,
				reasonId:
					'Barang siapa berbuat dosa lalu memohon ampunan Allah, niscaya Allah Maha Pengampun.',
				reasonEn:
					'Whoever does evil but then seeks forgiveness from Allah will find Allah forgiving and merciful.'
			},
			{
				s: 9,
				v: 104,
				reasonId: 'Allah-lah yang menerima taubat dari hamba-hamba-Nya.',
				reasonEn: 'It is Allah who accepts repentance from His servants.'
			},
			{
				s: 66,
				v: 8,
				reasonId: 'Bertaubatlah kepada Allah dengan taubat yang sungguh-sungguh.',
				reasonEn: 'Repent to Allah with sincere repentance.'
			}
		]
	},
	{
		id: 'bahagia',
		emoji: '🌟',
		labelKey: 'mood.moods.bahagia',
		verses: [
			{
				s: 13,
				v: 28,
				reasonId: 'Hanya dengan mengingat Allah hati menjadi tenteram.',
				reasonEn: 'In the remembrance of Allah do hearts find rest.'
			},
			{
				s: 16,
				v: 97,
				reasonId: 'Barang siapa beramal saleh, Allah akan memberikan kehidupan yang baik.',
				reasonEn: 'Whoever does righteousness, Allah will grant them a good life.'
			},
			{
				s: 55,
				v: 60,
				reasonId: 'Tidak ada balasan kebaikan kecuali kebaikan pula.',
				reasonEn: 'Is there any reward for good other than good?'
			},
			{
				s: 98,
				v: 8,
				reasonId: 'Balasan orang beriman di sisi Allah adalah surga yang penuh kenikmatan.',
				reasonEn: 'Their reward with Allah is gardens of Eden with rivers flowing beneath.'
			},
			{
				s: 3,
				v: 185,
				reasonId: 'Keberhasilan sejati adalah dijauhkan dari neraka dan dimasukkan ke surga.',
				reasonEn: 'True success is to be kept away from the Fire and admitted into Paradise.'
			}
		]
	}
];

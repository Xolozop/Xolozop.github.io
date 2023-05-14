const data1 = [
	{
		id: 1,
		author: "Сабунаев",
		title: "Занимательная зоология",
		section: "ДЛ Н",
		placed: "1-2-1",
		read: false
	},
	{
		id: 2,
		author: "Сборник",
		title: "Волшебный мир",
		section: "ДЛ Ск",
		placed: "1-2-1",
		read: false
	},
	{
		id: 3,
		author: "Булычев",
		title: "Все о девочке с Земли",
		section: "ДЛ Ф",
		placed: "1-2-1",
		read: false
	},
	{
		id: 4,
		author: "Сервантес",
		title: "Дон Кихот",
		section: "ЗЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 5,
		author: "Сборник",
		title: "Книга Принцесс",
		section: "ДЛ Ск",
		placed: "1-2-1",
		read: false
	},
	{
		id: 6,
		author: "Сборник",
		title: "Книга Кладов",
		section: "ДЛ Ск",
		placed: "1-2-1",
		read: false
	},
	{
		id: 7,
		author: "Паустовский",
		title: "Начало неведомого века",
		section: "РЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 8,
		author: "Паустовский",
		title: "Сборник",
		section: "РЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 9,
		author: "Лев",
		title: "Пять дней из жизни черепахи",
		section: "ДЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 10,
		author: "Бонзелс",
		title: "Пчела Майа",
		section: "ДЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 11,
		author: "Левашова",
		title: "Рассказы из музыкальной шкатулки",
		section: "ДЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 12,
		author: "Жуковский",
		title: "Стихи и сказки",
		section: "РЛ Ск",
		placed: "1-2-1",
		read: false
	},
	{
		id: 13,
		author: "Зинкевич-Евстигнеева",
		title: "Практикум по сказко терапии",
		section: "Спец Псих",
		placed: "1-2-1",
		read: false
	},
	{
		id: 14,
		author: "Козлов",
		title: "Мы уходим из дома",
		section: "ДЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 15,
		author: "Константиновский",
		title: "КОАПП",
		section: "ДЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 16,
		author: "Галанов",
		title: "Книжка про книжки",
		section: "ДЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 17,
		author: "Маршак",
		title: "Про все на свете",
		section: "ДЛ Ст ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 18,
		author: "Ушакова",
		title: "Пословицы. Поговорки. Крылатые выражения",
		section: "УЛ Фолк",
		placed: "1-2-1",
		read: false
	},
	{
		id: 19,
		author: "Ольгин",
		title: "Опыты без взрывов",
		section: "УЛ Н",
		placed: "1-2-1",
		read: false
	},
	{
		id: 20,
		author: "Вяли",
		title: "Одноглазый Сильвер, страшный разбойник с острова Фельсланда",
		section: "ДЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 21,
		author: "Тур Хейердал",
		title: "Фату-Хива",
		section: "ЗЛ Био",
		placed: "1-2-1",
		read: false
	},
	{
		id: 22,
		author: "Топелиус",
		title: "Звездоглазка",
		section: "ЗЛ Ск",
		placed: "1-2-1",
		read: false
	},
	{
		id: 23,
		author: "Гримм",
		title: "Сказки",
		section: "ЗЛ Ск",
		placed: "1-2-1",
		read: false
	},
	{
		id: 24,
		author: "Коровкин",
		title: "История древнего мира",
		section: "УЛ И",
		placed: "1-2-1",
		read: false
	},
	{
		id: 25,
		author: "Зарецкий, Труханов",
		title: "А я был в компьютерном городе",
		section: "УЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 26,
		author: "Осетская",
		title: "Здравствуй, Евгений!",
		section: "ДЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 27,
		author: "Кюль",
		title: "Энциклопедия танцев",
		section: "УЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 28,
		author: "Киплинг",
		title: "Маугли",
		section: "ЗЛ ДЛ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 29,
		author: "Уилл Гомперц",
		title: "Думай как художник",
		section: "Хобби ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 30,
		author: "Сборник",
		title: "В березовой роще",
		section: "ДЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 31,
		author: "Сборник",
		title: "Золотая бита",
		section: "ДЛ Ск",
		placed: "1-2-1",
		read: false
	},
	{
		id: 32,
		author: "Почивалов",
		title: "На край света - за тайной",
		section: "ДЛ Пр",
		placed: "1-2-1",
		read: false
	},
	{
		id: 33,
		author: "Суслов",
		title: "Твое дело",
		section: "ДЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 34,
		author: "Васечкин",
		title: "Справочник по массажу",
		section: "УЧ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 35,
		author: "Шим",
		title: "Цветной венок",
		section: "ДЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 36,
		author: "Голявкин",
		title: "Повести",
		section: "ДЛ ",
		placed: "1-2-1",
		read: false
	},
	{
		id: 37,
		author: "Белякова",
		title: "Фигура, грация, осанка",
		section: "Мед Псих",
		placed: "1-2-1",
		read: false
	},
	{
		id: 38,
		author: "Набеева",
		title: "Ангийская грамматика",
		section: "УЛ Спец",
		placed: "1-2-1",
		read: false
	},
	{
		id: 39,
		author: "Ларрингтон Кэролин",
		title: "Скандинавские мифы: от Тора и Локи до Толкиена и Игры престолов",
		section: "Рел Спец",
		placed: "1-2-1",
		read: false
	},
	{
		id: 40,
		author: "Миклухо-Маклай",
		title: "Путешествия",
		section: "Пр Био",
		placed: "1-2-1",
		read: false
	},
	{
		id: 41,
		author: "Сборник",
		title: "Китайские сказки",
		section: "ЗЛ Ск",
		placed: "1-2-1",
		read: false
	},
	{
		id: 42,
		author: "Сборник",
		title: "Болгарские сказки",
		section: "ЗЛ Ск",
		placed: "1-2-1",
		read: false
	},
	{
		id: 43,
		author: "Мартин Дж.Доэрти",
		title: "Скандинавский мифы",
		section: "Рел Спец",
		placed: "1-2-1",
		read: false
	},
	{
		id: 44,
		author: "Матвеев",
		title: "Все правила английского языка",
		section: "УЛ Спец",
		placed: "1-2-1",
		read: false
	},
	{
		id: 45,
		author: "Чигарева",
		title: "Осторожно, сказка",
		section: "ДЛ Ск",
		placed: "1-2-1",
		read: false
	},
	{
		id: 46,
		author: "разговорник",
		title: "Японский язык",
		section: "УЛ Спец",
		placed: "1-2-1",
		read: false
	},
	{
		id: 47,
		author: "Андерсен",
		title: "Сказки старой Дании",
		section: "ЗЛ Ск",
		placed: "1-2-1",
		read: false
	},
	{
		id: 48,
		author: "Андерсен",
		title: "Сборник",
		section: "ЗЛ Ск",
		placed: "1-2-1",
		read: false
	},
	{
		id: 49,
		author: "Андерсен",
		title: "Сказки",
		section: "ЗЛ Ск",
		placed: "1-2-1",
		read: false
	},
	{
		id: 50,
		author: "Готорн; Бичер-Стоун",
		title: "Алая буква; хижина дяти Тома",
		section: "ЗЛ ",
		placed: "1-2-2",
		read: false
	},
	{
		id: 51,
		author: "Сборник",
		title: "Соната дьявола",
		section: "ЗЛ Мист",
		placed: "1-2-2",
		read: false
	},
	{
		id: 52,
		author: "Линевский",
		title: "Листы каменной книги",
		section: "РЛ Пр",
		placed: "1-2-2",
		read: false
	},
	{
		id: 53,
		author: "Сборник",
		title: "Осетинские народные сказки",
		section: "ДЛ Ск",
		placed: "1-2-2",
		read: false
	},
	{
		id: 54,
		author: "Наумов",
		title: "Загадка острова Раутана",
		section: "ДЛ Пр",
		placed: "1-2-2",
		read: false
	},
	{
		id: 55,
		author: "Бианки",
		title: "Рассказы и сказки",
		section: "ДЛ ",
		placed: "1-2-2",
		read: false
	},
	{
		id: 56,
		author: "Греков",
		title: "Там, на неведомых тропинках…",
		section: "ДЛ Пр",
		placed: "1-2-2",
		read: false
	},
	{
		id: 57,
		author: "Они",
		title: "Спасибо, пожалуйста, здравствуйте",
		section: "ДЛ Спец",
		placed: "1-2-2",
		read: false
	},
	{
		id: 58,
		author: "Сборник",
		title: "Мифы древнего Рима",
		section: "ЗЛ Фолк",
		placed: "1-2-2",
		read: false
	},
	{
		id: 59,
		author: "Бээкман",
		title: "Сийм-силач",
		section: "ЗЛ Ск",
		placed: "1-2-2",
		read: false
	},
	{
		id: 60,
		author: "Шолохов",
		title: "Донские рассказы",
		section: "РЛ ",
		placed: "1-2-2",
		read: false
	},
	{
		id: 61,
		author: "Линдгрен",
		title: "Пэппи Длинныйчулок",
		section: "ДЛ Ск",
		placed: "1-2-2",
		read: false
	},
	{
		id: 62,
		author: "Успенский",
		title: "Школа клоунов",
		section: "ДЛ Спец",
		placed: "1-2-2",
		read: false
	},
	{
		id: 63,
		author: "Верн",
		title: "Робур-завоеватель",
		section: "ЗЛ Пр",
		placed: "1-2-2",
		read: false
	},
	{
		id: 64,
		author: "Сборник",
		title: "Остров сказок",
		section: "РЛ Ск",
		placed: "1-2-2",
		read: false
	},
	{
		id: 65,
		author: "Киплинг; Линдгрен; Милн",
		title: "Маугли; Малыш и Карлосон; Вмннм Пух и все-все-все",
		section: "ЗЛ Ск",
		placed: "1-2-2",
		read: false
	},
	{
		id: 66,
		author: "Линдгрен",
		title: "Суперсыщик Калле Блумквист",
		section: "ДЛ Дет",
		placed: "1-2-2",
		read: false
	},
	{
		id: 67,
		author: "Лагирлев",
		title: "Путишествие Нильса с дикими гусями",
		section: "ДЛ Пр",
		placed: "1-2-2",
		read: false
	},
	{
		id: 68,
		author: "Зощенко",
		title: "Хорошая игра",
		section: "РЛ ",
		placed: "1-2-2",
		read: false
	},
	{
		id: 69,
		author: "Мануйлов, Родионов",
		title: "Основа химии",
		section: "УЧ Спец",
		placed: "1-2-2",
		read: false
	},
	{
		id: 70,
		author: "Сборник",
		title: "Сказки скандинавских писателей",
		section: "ЗЛ Ск",
		placed: "1-2-2",
		read: false
	},
	{
		id: 71,
		author: "Сборник",
		title: "Польские сказки",
		section: "ЗЛ ск",
		placed: "1-2-2",
		read: false
	},
	{
		id: 72,
		author: "Барашков",
		title: "А как у вас говорят?",
		section: "ДЛ Спец",
		placed: "1-2-2",
		read: false
	},
	{
		id: 73,
		author: "Бунин",
		title: "Стихотворения",
		section: "РЛ Ст ",
		placed: "1-2-2",
		read: false
	},
	{
		id: 74,
		author: "Михалков",
		title: "Избранное",
		section: "РЛ Ст ",
		placed: "1-2-2",
		read: false
	},
	{
		id: 75,
		author: "Санин",
		title: "Колесница Гелиоса",
		section: "РЛ И",
		placed: "1-2-2",
		read: false
	},
	{
		id: 76,
		author: "Чандлер; Макдональд; Хэммет",
		title: "Прощай, красота; Человек из могилы; Худой мужчина",
		section: "ЗЛ Дет",
		placed: "1-2-2",
		read: false
	},
	{
		id: 77,
		author: "Эндрюс",
		title: "Магия танца",
		section: "УЧ Спец",
		placed: "1-2-2",
		read: false
	},
	{
		id: 78,
		author: "Довлатов",
		title: "Встретились, поговорили",
		section: "РЛ ",
		placed: "1-2-2",
		read: false
	},
	{
		id: 79,
		author: "Сетон-Томпсон",
		title: "Рассказы о животных",
		section: "ЗЛ Спец",
		placed: "1-2-2",
		read: false
	},
	{
		id: 80,
		author: "Киплинг",
		title: "Книги джунглей",
		section: "ЗЛ ",
		placed: "1-2-2",
		read: false
	},
	{
		id: 81,
		author: "Сборник",
		title: "Феи с алмазных гор",
		section: "ЗЛ Ск",
		placed: "1-2-2",
		read: false
	},
	{
		id: 82,
		author: "Сборник",
		title: "Сказки Китая",
		section: "ЗЛ Ск",
		placed: "1-2-2",
		read: false
	},
	{
		id: 83,
		author: "Сборник",
		title: "Народные русские сказки Афанасьева",
		section: "РЛ Ск",
		placed: "1-2-2",
		read: false
	},
	{
		id: 84,
		author: "Сборник",
		title: "Сказки старого замка",
		section: "РЛ Ск",
		placed: "1-2-2",
		read: false
	},
	{
		id: 85,
		author: "Сборник",
		title: "Молдавские народные сказки",
		section: "ЗЛ Ск",
		placed: "1-2-2",
		read: false
	},
	{
		id: 86,
		author: "Рид ",
		title: "Оцеола, вождь семинолов; Затерянные в океане",
		section: "ЗЛ Пр",
		placed: "1-2-2",
		read: false
	},
	{
		id: 87,
		author: "Свифт",
		title: "Путешествия Гулливера",
		section: "ЗЛ Пр",
		placed: "1-2-2",
		read: false
	},
	{
		id: 88,
		author: "Салтыков-Щедрин",
		title: "Сказки",
		section: "РЛ Ск",
		placed: "1-2-2",
		read: false
	},
	{
		id: 89,
		author: "Великович",
		title: "Здесь танцуют",
		section: "ДЛ Спец",
		placed: "1-2-2",
		read: false
	},
	{
		id: 90,
		author: "Сборник",
		title: "Забытый день рождения",
		section: "ЗЛ Ск",
		placed: "1-2-2",
		read: false
	},
	{
		id: 91,
		author: "Рэй Бредберри",
		title: "451?по Фаренгейту",
		section: "ЗЛ Ф",
		placed: "1-3-1",
		read: false
	},
	{
		id: 92,
		author: "Symbols",
		title: "Ancient Egypt",
		section: "И Спец",
		placed: "1-3-1",
		read: false
	},
	{
		id: 93,
		author: "Брадис",
		title: "Четырехзначные математические таблицы",
		section: "УЛ Спец",
		placed: "1-3-1",
		read: false
	},
	{
		id: 94,
		author: "Чехов",
		title: "Повести и рассказы",
		section: "РЛ ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 95,
		author: "Купер",
		title: "Шпион; Последний из магикан",
		section: "ЗЛ Пр",
		placed: "1-3-1",
		read: false
	},
	{
		id: 96,
		author: "Лесков",
		title: "Очарованный странник",
		section: "РЛ ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 97,
		author: "Маймин",
		title: "А. А. Фет",
		section: "РЛ Био",
		placed: "1-3-1",
		read: false
	},
	{
		id: 98,
		author: "Бухштаб",
		title: "А. А. Фет. Очерк жизни и творчества",
		section: "РЛ Био",
		placed: "1-3-1",
		read: false
	},
	{
		id: 99,
		author: "Гаршин",
		title: "Избранное",
		section: "РЛ ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 100,
		author: "Некрасов",
		title: "Избранное",
		section: "РЛ ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 101,
		author: "Арнольди",
		title: "Жизнь и сказки Уолта Диснея",
		section: "ДЛ Био",
		placed: "1-3-1",
		read: false
	},
	{
		id: 102,
		author: "Сборник",
		title: "Сказки народов севера",
		section: "ДЛ Ск",
		placed: "1-3-1",
		read: false
	},
	{
		id: 103,
		author: "Сборник",
		title: "Литература и фантазия",
		section: "РЛ Ст ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 104,
		author: "Рутницкий",
		title: "О чем говорят анализы?",
		section: "Н Мед",
		placed: "1-3-1",
		read: false
	},
	{
		id: 105,
		author: "Носов",
		title: "Витя Малеев в школе и дома",
		section: "ДЛ Пр",
		placed: "1-3-1",
		read: false
	},
	{
		id: 106,
		author: "б/f",
		title: "Опыты на кухне",
		section: "Н Спец",
		placed: "1-3-1",
		read: false
	},
	{
		id: 107,
		author: "Сборник",
		title: "Мордовские сказки",
		section: "ДЛ Ск",
		placed: "1-3-1",
		read: false
	},
	{
		id: 108,
		author: "Шим",
		title: "Сказки, найденные в траве",
		section: "РЛ Ск",
		placed: "1-3-1",
		read: false
	},
	{
		id: 109,
		author: "Прокофьева",
		title: "На старом чердаке",
		section: "ДЛ Пр",
		placed: "1-3-1",
		read: false
	},
	{
		id: 110,
		author: "Черненко",
		title: "Что умеют машины",
		section: "ДЛ Спец",
		placed: "1-3-1",
		read: false
	},
	{
		id: 111,
		author: "Граник и др",
		title: "Секреты орфографии",
		section: "УЛ Спец",
		placed: "1-3-1",
		read: false
	},
	{
		id: 112,
		author: "Пикуль",
		title: "Выстрел в отеле Кломзер",
		section: "РС Дет",
		placed: "1-3-1",
		read: false
	},
	{
		id: 113,
		author: "Потиха",
		title: "Школьный словарь строение русского языка",
		section: "УЛ Спец",
		placed: "1-3-1",
		read: false
	},
	{
		id: 114,
		author: "б/а",
		title: "Король Артур и рыцари круглого стола",
		section: "ЗЛ Фолк",
		placed: "1-3-1",
		read: false
	},
	{
		id: 115,
		author: "Найк",
		title: "Для девочек, или Как относиться к себе и мальчикам",
		section: "Н Псих",
		placed: "1-3-1",
		read: false
	},
	{
		id: 116,
		author: "Пресс",
		title: "По горячим следам",
		section: "ДЛ Дет",
		placed: "1-3-1",
		read: false
	},
	{
		id: 117,
		author: "Тит",
		title: "Увлекательные забавы для детей и взрослых",
		section: "Н Спец",
		placed: "1-3-1",
		read: false
	},
	{
		id: 118,
		author: "Хирацука",
		title: "Папа большой, я маленький",
		section: "ЗЛ ДЛ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 119,
		author: "Цед",
		title: "Азбука защиты",
		section: "Спорт Спец",
		placed: "1-3-1",
		read: false
	},
	{
		id: 120,
		author: "Зайкина и др",
		title: "Поиграем на листе бумаге",
		section: "ДЛ Спец",
		placed: "1-3-1",
		read: false
	},
	{
		id: 121,
		author: "Яновская",
		title: "Как устроен человек",
		section: "ДЛ Н",
		placed: "1-3-1",
		read: false
	},
	{
		id: 122,
		author: "Петров",
		title: "Сфинксы 20 века",
		section: "Н Мед",
		placed: "1-3-1",
		read: false
	},
	{
		id: 123,
		author: "Семенова, Шувалова",
		title: "Лечение маслами",
		section: "Н Мед",
		placed: "1-3-1",
		read: false
	},
	{
		id: 124,
		author: "Володина, Малышева",
		title: "К цветку цветок",
		section: "Хобби ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 125,
		author: "Лесков",
		title: "Повести и рассказы",
		section: "РЛ ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 126,
		author: "Лесков",
		title: "Очарованный странник (сборник)",
		section: "РЛ ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 127,
		author: "Сюорник",
		title: "Литературные сказки и легенды Америки",
		section: "ЗЛ Фолк",
		placed: "1-3-1",
		read: false
	},
	{
		id: 128,
		author: "Петров",
		title: "Пискаревское кладбище",
		section: "Н И",
		placed: "1-3-1",
		read: false
	},
	{
		id: 129,
		author: "Ларри",
		title: "Необыкновенные приключения Карика и Вали",
		section: "ДЛ Ф ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 130,
		author: "Андреев, Хромов",
		title: "Техника быстрого чтения. В 2 книгах",
		section: "УЛ Спец",
		placed: "1-3-1",
		read: false
	},
	{
		id: 131,
		author: "б/а",
		title: "Караван мудрости",
		section: "ЗЛ Фолк",
		placed: "1-3-1",
		read: false
	},
	{
		id: 132,
		author: "Гришковец",
		title: "Рубашка",
		section: "РЛ ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 133,
		author: "Сборник",
		title: "Чудо рождественнской ночи",
		section: "РЛ ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 134,
		author: "Велтистов",
		title: "Приключения Электроника",
		section: "ДЛ Ф",
		placed: "1-3-1",
		read: false
	},
	{
		id: 135,
		author: "Цветаева",
		title: "Избранная лирика",
		section: "РЛ Ст ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 136,
		author: "б/а",
		title: "Жизнь - как она возникла?",
		section: "Н Спец",
		placed: "1-3-1",
		read: false
	},
	{
		id: 137,
		author: "Сборник",
		title: "Волшебные сказки",
		section: "ДЛ Ск",
		placed: "1-3-1",
		read: false
	},
	{
		id: 138,
		author: "Преверь",
		title: "Сена встречает Париж",
		section: "ЗЛ Ст ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 139,
		author: "Гилби",
		title: "Секреты боевых искусств мира",
		section: "Спорт Спец",
		placed: "1-3-1",
		read: false
	},
	{
		id: 140,
		author: "б/а",
		title: "Гунь-шу. Техника владения палкой",
		section: "Спорт Спец",
		placed: "1-3-1",
		read: false
	},
	{
		id: 141,
		author: "Пучков",
		title: "Кинжалы",
		section: "Спорт Спец",
		placed: "1-3-1",
		read: false
	},
	{
		id: 142,
		author: "б/а",
		title: "Маленькая энциклопедия айкидо",
		section: "Спорт Спец",
		placed: "1-3-1",
		read: false
	},
	{
		id: 143,
		author: "Пушкин",
		title: "Евгений Онегин",
		section: "РЛ Ст ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 144,
		author: "Гумилев",
		title: "Сборник",
		section: "РЛ Ст ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 145,
		author: "б/а",
		title: "Калевала",
		section: "ЗЛ ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 146,
		author: "Сборник",
		title: "Английская поэзия",
		section: "ЗЛ Ст ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 147,
		author: "Носов",
		title: "Приключения Незнайки",
		section: "ДЛ ",
		placed: "1-3-1",
		read: false
	},
	{
		id: 148,
		author: "Сборник",
		title: "Мордовские народные сказки",
		section: "ДЛ Ск",
		placed: "1-3-1",
		read: false
	},
	{
		id: 149,
		author: "Сборник",
		title: "Сказочные повести скандинавских писателей",
		section: "ЗЛ Ск",
		placed: "1-3-1",
		read: false
	},
	{
		id: 150,
		author: "Паласио",
		title: "Пираты мексиканского залива",
		section: "ЗЛ Пр",
		placed: "1-3-2",
		read: false
	},
	{
		id: 151,
		author: "Хаггард",
		title: "Дочь Мантесумы; Копи царя Соломона",
		section: "ЗЛ Пр",
		placed: "1-3-2",
		read: false
	},
	{
		id: 152,
		author: "Хейли",
		title: "Перегрузка",
		section: "ЗЛ Дет",
		placed: "1-3-2",
		read: false
	},
	{
		id: 153,
		author: "Трумен; Стаут; Ли Бейли",
		title: "Убийство в Верховном суде; Не позднее полуночи; Защита никогда не успокаивается",
		section: "ЗЛ Дет",
		placed: "1-3-2",
		read: false
	},
	{
		id: 154,
		author: "Сборник",
		title: "Проделки праздного дракона",
		section: "ЗЛ Фолк",
		placed: "1-3-2",
		read: false
	},
	{
		id: 155,
		author: "Уэллс",
		title: "Машина времени, Остров доктора Моро, Человек-невидимка, Война миров",
		section: "ЗЛ Ф",
		placed: "1-3-2",
		read: false
	},
	{
		id: 156,
		author: "Сборник",
		title: "Сказки Балтийского моря",
		section: "ДЛ Ск",
		placed: "1-3-2",
		read: false
	},
	{
		id: 157,
		author: "Сборник",
		title: "19 век. Стихи",
		section: "РЛ Ст ",
		placed: "1-3-2",
		read: false
	},
	{
		id: 158,
		author: "Голон",
		title: "Анжелика",
		section: "ЗЛ Пр",
		placed: "1-3-2",
		read: false
	},
	{
		id: 159,
		author: "Марш ",
		title: "Сборник",
		section: "ЗЛ Дет",
		placed: "1-3-2",
		read: false
	},
	{
		id: 160,
		author: "Кервуд",
		title: "Долина безмолвных великанов",
		section: "ЗЛ Пр",
		placed: "1-3-2",
		read: false
	},
	{
		id: 161,
		author: "Алянский",
		title: "Азбука театра ",
		section: "ДЛ Спец",
		placed: "1-3-2",
		read: false
	},
	{
		id: 162,
		author: "Сборник",
		title: "Сказки",
		section: "ЗЛ Ск",
		placed: "1-3-2",
		read: false
	},
	{
		id: 163,
		author: "Горецкий, Кирюшкин, Шанько",
		title: "Читаем сами",
		section: "ДЛ Уч",
		placed: "1-3-2",
		read: false
	},
	{
		id: 164,
		author: "Пекелис",
		title: "Твои возможности, человек!",
		section: "Н Спец",
		placed: "1-3-2",
		read: false
	},
	{
		id: 165,
		author: "Полянская",
		title: "Праздники народов мира",
		section: "ДЛ Спец",
		placed: "1-3-2",
		read: false
	},
	{
		id: 166,
		author: "Даррелл",
		title: "Под пологом пьяного леса",
		section: "ДЛ ",
		placed: "1-3-2",
		read: false
	},
	{
		id: 167,
		author: "Федоров",
		title: "Полярные дневники",
		section: "Н Био",
		placed: "1-3-2",
		read: false
	},
	{
		id: 168,
		author: "Вэйсинь",
		title: "Целительная сила растений",
		section: "Н Спец",
		placed: "1-3-2",
		read: false
	},
	{
		id: 169,
		author: "Леви",
		title: "Вагон удачи",
		section: "Н Псих",
		placed: "1-3-2",
		read: false
	},
	{
		id: 170,
		author: "Леви",
		title: "Искусство быть собой",
		section: "Н Псих",
		placed: "1-3-2",
		read: false
	},
	{
		id: 171,
		author: "Серов",
		title: "Свето-цветовая терапия",
		section: "Н Псих",
		placed: "1-3-2",
		read: false
	},
	{
		id: 172,
		author: "Леви",
		title: "Травмотология любви",
		section: "Н Псих",
		placed: "1-3-2",
		read: false
	},
	{
		id: 173,
		author: "Стивенс",
		title: "Приручи своих драконов",
		section: "Н Псих",
		placed: "1-3-2",
		read: false
	},
	{
		id: 174,
		author: "Ханин",
		title: "Риторика",
		section: "УЛ Спец",
		placed: "1-3-2",
		read: false
	},
	{
		id: 175,
		author: "Касаткин",
		title: "Здоровая психика ваших детей",
		section: " ",
		placed: "1-3-2",
		read: false
	},
	{
		id: 176,
		author: "б/а",
		title: "Энциклопедия этикета",
		section: "УЛ Спец",
		placed: "1-3-2",
		read: false
	},
	{
		id: 177,
		author: "Вапняр, Пышкало, Янковская",
		title: "Тетрадь для математике для 1 класса, 1978",
		section: "УЛ Спец",
		placed: "1-3-2",
		read: false
	},
	{
		id: 178,
		author: "Хигир",
		title: "Тайна мужского имени. Тайна женского имени. В 2 книгах",
		section: "Псих ",
		placed: "1-3-2",
		read: false
	},
	{
		id: 179,
		author: "Стоппорт",
		title: "Полезные советы девушкам",
		section: "Н Псих",
		placed: "1-3-2",
		read: false
	},
	{
		id: 180,
		author: "б/а",
		title: "Лики судьбы",
		section: "Хобби ",
		placed: "1-3-2",
		read: false
	},
	{
		id: 181,
		author: "Бианки",
		title: "Лесные домишки",
		section: "РЛ ",
		placed: "1-3-2",
		read: false
	},
	{
		id: 182,
		author: "Гайдар",
		title: "Том 1",
		section: "РЛ ",
		placed: "1-3-2",
		read: false
	},
	{
		id: 183,
		author: "Гайдар",
		title: "Том 2",
		section: "РЛ ",
		placed: "1-3-2",
		read: false
	},
	{
		id: 184,
		author: "Гайдар",
		title: "Том 3",
		section: "РЛ ",
		placed: "1-3-2",
		read: false
	},
	{
		id: 185,
		author: "Сборник",
		title: "Индийские сказки",
		section: "ЗЛ Ск",
		placed: "1-3-2",
		read: false
	},
	{
		id: 186,
		author: "Сборник",
		title: "Сказки американских писателей",
		section: "ЗЛ Ск",
		placed: "1-3-2",
		read: false
	},
	{
		id: 187,
		author: "Сборник",
		title: "Святочные рассказы",
		section: "ЗЛ Пр",
		placed: "1-3-2",
		read: false
	},
	{
		id: 188,
		author: "Сборник",
		title: "Литературные сказки народов СССР",
		section: "РЛ Ск",
		placed: "1-3-2",
		read: false
	},
	{
		id: 189,
		author: "Сборник",
		title: "Латышские народные сказки",
		section: "ЗЛ Ск",
		placed: "1-3-2",
		read: false
	},
	{
		id: 190,
		author: "Семенова ",
		title: "Волкодав 1",
		section: "РЛ Фэн",
		placed: "1-4-1",
		read: false
	},
	{
		id: 191,
		author: "Семенова",
		title: "Волкодав 2",
		section: "РЛ Фэн",
		placed: "1-4-1",
		read: false
	},
	{
		id: 192,
		author: "Энде",
		title: "История, конца которой нет",
		section: "ЗЛ Фэн",
		placed: "1-4-1",
		read: false
	},
	{
		id: 193,
		author: "Сборник",
		title: "В руки хотелось бы бабочку взять",
		section: "Личное ",
		placed: "1-4-1",
		read: false
	},
	{
		id: 194,
		author: "Жвалевский, Мытько",
		title: "Порри Гаттер",
		section: "РЛ Фэн",
		placed: "1-4-1",
		read: false
	},
	{
		id: 195,
		author: "Функе",
		title: "Чернильная смерть",
		section: "ЗЛ Фэн",
		placed: "1-4-1",
		read: false
	},
	{
		id: 196,
		author: "Функе",
		title: "Повелитель драконов",
		section: "ЗЛ Фэн",
		placed: "1-4-1",
		read: false
	},
	{
		id: 197,
		author: "Функе",
		title: "Рыцарь-призрак",
		section: "ЗЛ Фэн",
		placed: "1-4-1",
		read: false
	},
	{
		id: 198,
		author: "Райан",
		title: "Спасители Ураканда",
		section: "ЗЛ Фэн",
		placed: "1-4-1",
		read: false
	},
	{
		id: 199,
		author: "Роулинг",
		title: "Фантастические твари и где они обитают",
		section: "ЗЛ Фэн",
		placed: "1-4-1",
		read: false
	},
	{
		id: 200,
		author: "Витчер",
		title: "Нина 2",
		section: "РЛ Фэн",
		placed: "1-4-1",
		read: false
	},
	{
		id: 201,
		author: "Витчер",
		title: "Нина 3",
		section: "РЛ Фэн",
		placed: "1-4-1",
		read: false
	},
	{
		id: 202,
		author: "Витчер",
		title: "Нина 4",
		section: "РЛ Фэн",
		placed: "1-4-1",
		read: false
	},
	{
		id: 203,
		author: "Бёрнетт",
		title: "Том 1",
		section: "ЗЛ ",
		placed: "1-4-1",
		read: false
	},
	{
		id: 204,
		author: "Бёрнетт",
		title: "Том 2",
		section: "ЗЛ ",
		placed: "1-4-1",
		read: false
	},
	{
		id: 205,
		author: "Бёрнетт",
		title: "Том 3",
		section: "ЗЛ ",
		placed: "1-4-1",
		read: false
	},
	{
		id: 206,
		author: "Бёрнетт",
		title: "Том 4",
		section: "ЗЛ ",
		placed: "1-4-1",
		read: false
	},
	{
		id: 207,
		author: "Распутин",
		title: "Нежданно-негаданно",
		section: "РЛ ",
		placed: "1-4-1",
		read: false
	},
	{
		id: 208,
		author: "Льюис",
		title: "Хроники Нарнии",
		section: "ЗЛ Фэн",
		placed: "1-4-1",
		read: false
	},
	{
		id: 209,
		author: "Льюис",
		title: "Лев, колдунья и платяной шкаф (дет. изложение)",
		section: "ЗЛ Фэн",
		placed: "1-4-1",
		read: false
	},
	{
		id: 210,
		author: "Толстой А.",
		title: "Князь серебрянный",
		section: "РЛ ",
		placed: "1-4-1",
		read: false
	},
	{
		id: 211,
		author: "Сборник",
		title: "Петербург-Петроград-Ленинград",
		section: "РЛ Ст ",
		placed: "1-4-1",
		read: false
	},
	{
		id: 212,
		author: "Рэй Бредберри",
		title: "О скитаниях вечных и о Земле",
		section: "ЗЛ Фан",
		placed: "1-4-1",
		read: false
	},
	{
		id: 213,
		author: "Рапатская",
		title: "Искусство серебрянного века",
		section: "ИИ ",
		placed: "1-4-1",
		read: false
	},
	{
		id: 214,
		author: "Рапатская",
		title: "Русское искусство 18 века",
		section: "ИИ ",
		placed: "1-4-1",
		read: false
	},
	{
		id: 215,
		author: "Вильчковский",
		title: "Царское село",
		section: "И ",
		placed: "1-4-1",
		read: false
	},
	{
		id: 216,
		author: "Пыляев",
		title: "Забытое прошлое окрестностей Петербурга",
		section: "И ",
		placed: "1-4-1",
		read: false
	},
	{
		id: 217,
		author: "Тургенев",
		title: "Накануне; Отцы  дети; Степной король лир",
		section: "РЛ ",
		placed: "1-4-1",
		read: false
	},
	{
		id: 218,
		author: "Лажечников",
		title: "Басурман",
		section: "РЛ И",
		placed: "1-4-1",
		read: false
	},
	{
		id: 219,
		author: "Шагинян",
		title: "Билет по истории; Четыре урока у Ленина; Очерки и статьи",
		section: "РЛ ",
		placed: "1-4-1",
		read: false
	},
	{
		id: 220,
		author: "Куприн",
		title: "Гранатовый браслет (сборник)",
		section: "РЛ ",
		placed: "1-4-1",
		read: false
	},
	{
		id: 221,
		author: "Алексеев и др",
		title: "История русской литературы",
		section: "ИИ Спец",
		placed: "1-4-2",
		read: false
	},
	{
		id: 222,
		author: "б/а",
		title: "Философский энциклопедический словарь",
		section: "Н Фил",
		placed: "1-4-2",
		read: false
	},
	{
		id: 223,
		author: "Тур Хейердал",
		title: "Древний человек и океан",
		section: "ЗЛ ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 224,
		author: "Чубарьян и др",
		title: "Отечественная история 20-начла 21 века",
		section: "УЛ ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 225,
		author: "Кирпичникова",
		title: "Хрустальные тайны",
		section: "ДЛ Спец",
		placed: "1-4-2",
		read: false
	},
	{
		id: 226,
		author: "Дрюон",
		title: "Тисту - мальчмк с зелеными пальцами",
		section: "ЗЛ ДЛ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 227,
		author: "Сборник",
		title: "Меценаты и коллекционеры",
		section: "ИИ Спец",
		placed: "1-4-2",
		read: false
	},
	{
		id: 228,
		author: "Афонькин",
		title: "Все о самых знаменитых орденах мира",
		section: "И Спец",
		placed: "1-4-2",
		read: false
	},
	{
		id: 229,
		author: "Гарибальди",
		title: "Мемуары",
		section: "И Био",
		placed: "1-4-2",
		read: false
	},
	{
		id: 230,
		author: "Долуцкий",
		title: "Отечественная история 20 век",
		section: "УЛ И",
		placed: "1-4-2",
		read: false
	},
	{
		id: 231,
		author: "Сборник",
		title: "Литература русского зарубежья. Том 1, 2",
		section: "РЛ ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 232,
		author: "Семенова",
		title: "Мы - славяне!",
		section: "И ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 233,
		author: "Сборник",
		title: "Волшебный короб",
		section: "ЗЛ Ск",
		placed: "1-4-2",
		read: false
	},
	{
		id: 234,
		author: "Гранин, Адамович",
		title: "Блокадная книга",
		section: "И ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 235,
		author: "Овидий",
		title: "Сборник. Том 1",
		section: "ЗЛ Ст ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 236,
		author: "Овидий",
		title: "Сборник. Том 2",
		section: "ЗЛ Ст ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 237,
		author: "Шекспир",
		title: "Сборник. Том 1",
		section: "ЗЛ ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 238,
		author: "Шекспир",
		title: "Сборник. Том 2",
		section: "ЗЛ ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 239,
		author: "Маслов, Воронцов",
		title: "Русское искусство в вопросах и ответах",
		section: "УЛ ИИ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 240,
		author: "Нестеров",
		title: "Львы стерегут город",
		section: "И Спец",
		placed: "1-4-2",
		read: false
	},
	{
		id: 241,
		author: "Басина",
		title: "Петербургская повесть",
		section: "РЛ Био",
		placed: "1-4-2",
		read: false
	},
	{
		id: 242,
		author: "Успенский Л.",
		title: "По закону буквы",
		section: "Н Спец",
		placed: "1-4-2",
		read: false
	},
	{
		id: 243,
		author: "Лосев и др",
		title: "Античная литература",
		section: "ЗЛ ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 244,
		author: "Wright, Katsuhico",
		title: "Zen gardens",
		section: "УЛ Спец",
		placed: "1-4-2",
		read: false
	},
	{
		id: 245,
		author: "Артамонов",
		title: "40 веков мировой литературы. Том 1",
		section: "ИИ ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 246,
		author: "Артамонов",
		title: "41 веков мировой литературы. Том 2",
		section: "ИИ ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 247,
		author: "Артамонов",
		title: "42 веков мировой литературы. Том 3",
		section: "ИИ ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 248,
		author: "Артамонов",
		title: "43 веков мировой литературы. Том 4",
		section: "ИИ ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 249,
		author: "Толстой Л.",
		title: "Учение Христа",
		section: "РЛ ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 250,
		author: "б/а",
		title: "Сказки британских осторвов",
		section: "ЗЛ Ск",
		placed: "1-4-2",
		read: false
	},
	{
		id: 251,
		author: "Даниил Андреев",
		title: "Роза мира",
		section: "РЛ Фил",
		placed: "1-4-2",
		read: false
	},
	{
		id: 252,
		author: "Ауэл",
		title: "Клан пещерного медведя",
		section: "ЗЛ Фэн",
		placed: "1-4-2",
		read: false
	},
	{
		id: 253,
		author: "Нестеров",
		title: "Знаешь ли ты свой город?",
		section: "И Спец",
		placed: "1-4-2",
		read: false
	},
	{
		id: 254,
		author: "Рабинович",
		title: "О древней Москве",
		section: "И Спец",
		placed: "1-4-2",
		read: false
	},
	{
		id: 255,
		author: "б/а",
		title: "Философский энциклопедический словарь",
		section: "Н Фил",
		placed: "1-4-2",
		read: false
	},
	{
		id: 256,
		author: "Анисимов, Штофф",
		title: "Древняя Русь 9-середина 13 века",
		section: "И ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 257,
		author: "Лосев А.Ф.",
		title: "История античной эстетики",
		section: "ИИ Спец",
		placed: "1-4-2",
		read: false
	},
	{
		id: 258,
		author: "Сборник",
		title: "Из-под глыб",
		section: "РЛ Фил",
		placed: "1-4-2",
		read: false
	},
	{
		id: 259,
		author: "Авадяева",
		title: "Тайные силы российской истории",
		section: "И ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 260,
		author: "Сахаров и др",
		title: "Подвижники России",
		section: "И ",
		placed: "1-4-2",
		read: false
	},
	{
		id: 261,
		author: "Бальзак",
		title: "Избранное",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 262,
		author: "Драйзер",
		title: "Сестра Керри",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 263,
		author: "Шабловская",
		title: "История зарубежной литературы 20 века",
		section: "УЛ ИИ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 264,
		author: "Берташ",
		title: "Храмы Петербурга",
		section: "ИИ Спец",
		placed: "1-5-1",
		read: false
	},
	{
		id: 265,
		author: "Кохтев",
		title: "Риторика",
		section: "УЛ Спец",
		placed: "1-5-1",
		read: false
	},
	{
		id: 266,
		author: "Дюма",
		title: "Тайный загопор",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 267,
		author: "Дюма",
		title: "Сильвандир Сальтеадор",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 268,
		author: "Дюма",
		title: "Граф Монте-Кристо. Том 1",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 269,
		author: "Дюма",
		title: "Граф Монте-Кристо. Том 2",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 270,
		author: "Дюма",
		title: "Две Дианы",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 271,
		author: "Дюма",
		title: "Три мушкетера",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 272,
		author: "Дюма",
		title: "Женская война",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 273,
		author: "Гумилев Н.",
		title: "Избранное",
		section: "РЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 274,
		author: "Сборник",
		title: "Тристо рецептов фрвнцузской кухни",
		section: "Хобби ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 275,
		author: "Сборник",
		title: "Приятного аппетита",
		section: "Хобби ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 276,
		author: "Сборник",
		title: "Азербайджанская кухня",
		section: "Хобби ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 277,
		author: "Дюма",
		title: "Луиза Сан-Феличе",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 278,
		author: "Бронте",
		title: "Джейн Эйр",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 279,
		author: "Дю Гар",
		title: "Семья Тибо. Том 1",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 280,
		author: "Дю Гар",
		title: "Семья Тибо. Том 2",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 281,
		author: "Толстой А.",
		title: "Повести и рассказы",
		section: "РЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 282,
		author: "Стивенсон",
		title: "Черная стрела",
		section: "ЗЛ Пр",
		placed: "1-5-1",
		read: false
	},
	{
		id: 283,
		author: "Стивенсон",
		title: "Сэнт Ив",
		section: "ЗЛ Пр",
		placed: "1-5-1",
		read: false
	},
	{
		id: 284,
		author: "Чарская",
		title: "Записки маленькой гимназистки",
		section: "РЛ ДЛ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 285,
		author: "Дюма",
		title: "Изабелла Баварская",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 286,
		author: "О Генри",
		title: "Собрание лучших рассказов",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 287,
		author: "Де Сегюр",
		title: "Новые волшебные сказки",
		section: "ЗЛ Ск",
		placed: "1-5-1",
		read: false
	},
	{
		id: 288,
		author: "О Генри",
		title: "Вождь краснокожих",
		section: "ЗЛ Пр",
		placed: "1-5-1",
		read: false
	},
	{
		id: 289,
		author: "Сборник",
		title: "Моё любимое убийство",
		section: "ЗЛ Дет",
		placed: "1-5-1",
		read: false
	},
	{
		id: 290,
		author: "Конан Дойл",
		title: "Полное собрание о Шерлоке Холмсе",
		section: "ЗЛ Дет",
		placed: "1-5-1",
		read: false
	},
	{
		id: 291,
		author: "Митчелл Маргарет",
		title: "Унесенные ветром. Том 1",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 292,
		author: "Митчелл Маргарет",
		title: "Унесенные ветром. Том 2",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 293,
		author: "Сент-Экзюпери",
		title: "Маленький Принц. Военный летчик. Планета людей. Письмо генералу",
		section: "ЗЛ ",
		placed: "1-5-1",
		read: false
	},
	{
		id: 294,
		author: "Сборник",
		title: "Церковное привидение",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 295,
		author: "Жан-Батист Мольер",
		title: "Тартюф, или Обманщик и др.",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 296,
		author: "Короткевич",
		title: "Дикая охота короля Стаха",
		section: "ЗЛ Мист",
		placed: "1-5-2",
		read: false
	},
	{
		id: 297,
		author: "Коллинз",
		title: "Лунный камень",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 298,
		author: "Коллинз",
		title: "Женщина в белом",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 299,
		author: "Грин",
		title: "Путешествие с тетушкой",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 300,
		author: "Сборник",
		title: "Комната с гобеленами",
		section: "ЗЛ Мист",
		placed: "1-5-2",
		read: false
	},
	{
		id: 301,
		author: "Корнель; Расин",
		title: "Театр французского классицизма",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 302,
		author: "Сборник",
		title: "Зарубежная литература. 19 век. Романтизм",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 303,
		author: "Герасимов",
		title: "Русская литература и изобразительное искусство",
		section: "УЛ Спец",
		placed: "1-5-2",
		read: false
	},
	{
		id: 304,
		author: "Мопассан",
		title: "Том 2",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 305,
		author: "Мопассан",
		title: "Том 3",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 306,
		author: "Мопассан",
		title: "Том 4",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 307,
		author: "Мопассан",
		title: "Том 5",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 308,
		author: "Мопассан",
		title: "Том 6",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 309,
		author: "Кафка",
		title: "Америка. Новеллы",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 310,
		author: "Пруст",
		title: "В сторону Свана",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 311,
		author: "Петрарка",
		title: "Сборник",
		section: "ЗЛ Ст ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 312,
		author: "Вольтер",
		title: "Избранное",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 313,
		author: "Лессинг",
		title: "Сборник",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 314,
		author: "Гофман",
		title: "Золотой горшок",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 315,
		author: "Гофман",
		title: "Новеллы",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 316,
		author: "Гофман",
		title: "Том 1",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 317,
		author: "Гофман",
		title: "Том2",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 318,
		author: "Гофман",
		title: "Житейские воззрения кота Мура",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 319,
		author: "Зуев и др",
		title: "Пророк Мухамад",
		section: " И Био",
		placed: "1-5-2",
		read: false
	},
	{
		id: 320,
		author: "Стейнбек",
		title: "Квартал Тортилья-Флэт; Гроздья гнева; Жемчужина",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 321,
		author: "Сборник",
		title: "Искусство и художник",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 322,
		author: "Уайльд",
		title: "Портрет Дориана Грея",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 323,
		author: "Уайльд",
		title: "Веер леди Уиндермир",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 324,
		author: "Уайльд",
		title: "Кисть, перо и отрава",
		section: "ЗЛ ",
		placed: "1-5-2",
		read: false
	},
	{
		id: 325,
		author: "Гонсеровский",
		title: "пани Валевская",
		section: "ЗЛ ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 326,
		author: "Третьякова",
		title: "Российские богини",
		section: "И Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 327,
		author: "Байрон",
		title: "Избранное",
		section: "ЗЛ Ст ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 328,
		author: "Abrahams",
		title: "A night of there",
		section: "ЗЛ ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 329,
		author: "Цвейг",
		title: "Новеллы",
		section: "ЗЛ ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 330,
		author: "Белый",
		title: "Стихотворения и поэмы",
		section: "РЛ Ст ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 331,
		author: "Белый",
		title: "Петербург",
		section: "РЛ ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 332,
		author: "Белый",
		title: "Серебряный голубь. Рассказы.",
		section: "РЛ ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 333,
		author: "Бальмонт",
		title: "Где мой дом",
		section: "РЛ ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 334,
		author: "Бальмонт",
		title: "Светлый час",
		section: "РЛ Ст ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 335,
		author: "Третьякова",
		title: "Красавицы не умирают",
		section: "И Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 336,
		author: "Мордовцев",
		title: "Русские женщины",
		section: "И Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 337,
		author: "Гамсун",
		title: "Избранное",
		section: "ЗЛ ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 338,
		author: "Блюмин",
		title: "Из книги жизни",
		section: "РЛ Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 339,
		author: "Шангина",
		title: "Русские традиционные праздники",
		section: "И Спец",
		placed: "1-6-1",
		read: false
	},
	{
		id: 340,
		author: "Харченкова",
		title: "По одежке встерчают",
		section: "ИИ Спец",
		placed: "1-6-1",
		read: false
	},
	{
		id: 341,
		author: "Соловьев",
		title: "Древняя русская летопись",
		section: "И ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 342,
		author: "Пин",
		title: "Мосты через века",
		section: "ИИ ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 343,
		author: "Бодлер",
		title: "Цветы зла",
		section: "ЗЛ Ст ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 344,
		author: "Агеева",
		title: "Между Мойкой и канавой",
		section: "И Пут",
		placed: "1-6-1",
		read: false
	},
	{
		id: 345,
		author: "Саутин",
		title: "Устодиев",
		section: "ИИ Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 346,
		author: "Зюскинд",
		title: "Контрабас",
		section: "ЗЛ ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 347,
		author: "б/а",
		title: "Новый Завет",
		section: "ЗЛ Рел",
		placed: "1-6-1",
		read: false
	},
	{
		id: 348,
		author: "Метрохина",
		title: "Протестантизм: словарь атеиста",
		section: "УЛ Спец",
		placed: "1-6-1",
		read: false
	},
	{
		id: 349,
		author: "Рабле",
		title: "Гаргантюа и Пантагрюэль",
		section: "ЗЛ ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 350,
		author: "Верхарн",
		title: "Избранное",
		section: "ЗЛ Ст ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 351,
		author: "Полинова",
		title: "Ярощенко в Петербурге",
		section: "ИИ Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 352,
		author: "Рижский",
		title: "Библейские пророки и порочества",
		section: "И Рел",
		placed: "1-6-1",
		read: false
	},
	{
		id: 353,
		author: "Бернс",
		title: "Песни и стихи",
		section: "ЗЛ Ст ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 354,
		author: "Цимбал",
		title: "Театральная новизна и театральная современность",
		section: "ИИ Спец",
		placed: "1-6-1",
		read: false
	},
	{
		id: 355,
		author: "Бах Р.",
		title: "Чайка по имени Джонатан Ливингстон; Иллюзии, или Приключения Мессии по неволи",
		section: "ЗЛ ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 356,
		author: "Сименон",
		title: "Тень на шторе",
		section: "ЗЛ Дет",
		placed: "1-6-1",
		read: false
	},
	{
		id: 357,
		author: "Соловьев В.",
		title: "Русская идея",
		section: "Н Фил",
		placed: "1-6-1",
		read: false
	},
	{
		id: 358,
		author: "Кучарянс",
		title: "Антонио Ринальди",
		section: "ИИ Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 359,
		author: "Шуйский",
		title: "Андреян Захаров",
		section: "ИИ Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 360,
		author: "Николаева",
		title: "Виктор Шретер",
		section: "ИИ Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 361,
		author: "Бебье",
		title: "Тристан и Изольда",
		section: "ЗЛ ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 362,
		author: "Рампо",
		title: "Психологический тест",
		section: "ЗЛ ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 363,
		author: "Григорьев",
		title: "Никколо Паганини, жизнь и творчество",
		section: "ИИ Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 364,
		author: "Руставели",
		title: "Витязь в тигровой шкуре",
		section: "ЗЛ Ст ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 365,
		author: "Омичев",
		title: "Грибоедов в Петербурге",
		section: "ИИ Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 366,
		author: "Салита",
		title: "Стасовы в Петербурге, Петрограде",
		section: "ИИ Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 367,
		author: "Дитц",
		title: "Есенин в Петрограде, Ленинграде",
		section: "ИИ Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 368,
		author: "Черненко",
		title: "Тимирязев в Петербурге, Петрограде",
		section: "Н Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 369,
		author: "Меерович",
		title: "Румянцев в Петербурге",
		section: "ИИ Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 370,
		author: "Чугунов",
		title: "Валентив Серов в Петербурге",
		section: "ИИ Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 371,
		author: "Макареня, Нутрихин",
		title: "Менделеев в Петербурге",
		section: "Н Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 372,
		author: "Петинова",
		title: "Венецианов в Петербурге",
		section: "ИИ Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 373,
		author: "Шабунин",
		title: "Лесгафт в Петербурге",
		section: "Спорт Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 374,
		author: "Сашонко",
		title: "Кони в Петербурге, Петрограде, Ленинграде",
		section: "И Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 375,
		author: "Куликова",
		title: "Российского театра первые актеры",
		section: "ИИ ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 376,
		author: "Полевая",
		title: "Римский-Корсаков в Петербурге",
		section: "ИИ Био",
		placed: "1-6-1",
		read: false
	},
	{
		id: 377,
		author: "Минц",
		title: "Театральные коллекции Франции",
		section: "ИИ ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 378,
		author: "Элиот",
		title: "Collected Poems",
		section: "ЗЛ Ст ",
		placed: "1-6-1",
		read: false
	},
	{
		id: 379,
		author: "Канки",
		title: "Философия",
		section: "УЛ Фил",
		placed: "1-6-2",
		read: false
	},
	{
		id: 380,
		author: "Гече",
		title: "Библейские истории",
		section: "ЗЛ Рел",
		placed: "1-6-2",
		read: false
	},
	{
		id: 381,
		author: "Гекерторн",
		title: "Тайные общества всех веков и всех стран",
		section: "И Рел",
		placed: "1-6-2",
		read: false
	},
	{
		id: 382,
		author: "Иванов",
		title: "Многоликое средневековье",
		section: "И ",
		placed: "1-6-2",
		read: false
	},
	{
		id: 383,
		author: "Хармс",
		title: "Малое собрание сочинений",
		section: "РЛ ",
		placed: "1-6-2",
		read: false
	},
	{
		id: 384,
		author: "Кауцкий",
		title: "Происхожнение христианства",
		section: "И Рел",
		placed: "1-6-2",
		read: false
	},
	{
		id: 385,
		author: "Шифман",
		title: "Ветхий завет и его мир",
		section: "И Рел",
		placed: "1-6-2",
		read: false
	},
	{
		id: 386,
		author: "б/а",
		title: "Философия",
		section: "УЛ Фил",
		placed: "1-6-2",
		read: false
	},
	{
		id: 387,
		author: "Ренан",
		title: "Жизнь Иисуса",
		section: "И Рел",
		placed: "1-6-2",
		read: false
	},
	{
		id: 388,
		author: "Камю",
		title: "Сборник",
		section: "ЗЛ ",
		placed: "1-6-2",
		read: false
	},
	{
		id: 389,
		author: "Готье, Щюре",
		title: "Роман Мумии, Жрица Изиды",
		section: "ЗЛ Мист",
		placed: "1-6-2",
		read: false
	},
	{
		id: 390,
		author: "Сборник",
		title: "Поэзия французского символизма",
		section: "ЗЛ Ст",
		placed: "1-6-2",
		read: false
	},
	{
		id: 391,
		author: "Фрезер",
		title: "Золотая ветвь",
		section: "Н Рел",
		placed: "1-6-2",
		read: false
	},
	{
		id: 392,
		author: "Буассье",
		title: "Том1",
		section: "И ",
		placed: "1-6-2",
		read: false
	},
	{
		id: 393,
		author: "Буассье",
		title: "Том2",
		section: "И ",
		placed: "1-6-2",
		read: false
	},
	{
		id: 394,
		author: "Хаксли",
		title: "Контрапункт. Романы",
		section: "ЗЛ ",
		placed: "1-6-2",
		read: false
	},
	{
		id: 395,
		author: "Пастернак",
		title: "Стихи",
		section: "РЛ Ст",
		placed: "1-6-2",
		read: false
	},
	{
		id: 396,
		author: "Барская",
		title: "Сюжеты и образы древнерусской живописи",
		section: "ИИ ",
		placed: "1-6-2",
		read: false
	},
	{
		id: 397,
		author: "Лихачёв",
		title: "Человек в литературе древней Руси",
		section: "ИИ Спец",
		placed: "1-6-2",
		read: false
	},
	{
		id: 398,
		author: "Драйзер",
		title: "Американская трагедия. Том 1",
		section: "ЗЛ ",
		placed: "1-6-2",
		read: false
	},
	{
		id: 399,
		author: "Драйзер",
		title: "Американская трагедия. Том 2",
		section: "ЗЛ ",
		placed: "1-6-2",
		read: false
	},
	{
		id: 400,
		author: "По",
		title: "Малое собрание сочинений",
		section: "ЗЛ ",
		placed: "1-6-2",
		read: false
	},
	{
		id: 401,
		author: "Сборник",
		title: "Об Анне Ахматовой",
		section: "РЛ ",
		placed: "1-6-2",
		read: false
	},
	{
		id: 402,
		author: "Ле Гофф",
		title: "Цивилизация средневекового Запада",
		section: "И ",
		placed: "1-6-2",
		read: false
	},
	{
		id: 403,
		author: "Тальберг",
		title: "История христианской церкви",
		section: "И Рел",
		placed: "1-6-2",
		read: false
	},
	{
		id: 404,
		author: "Сборник",
		title: "Цивилизации",
		section: "Н И",
		placed: "1-6-2",
		read: false
	},
	{
		id: 405,
		author: "Ренан",
		title: "Марк Аврелий и конец античного мира",
		section: "И ",
		placed: "1-6-2",
		read: false
	},
	{
		id: 406,
		author: "Шустер",
		title: "История тайных союзов. Том 1",
		section: "И Мист",
		placed: "1-6-2",
		read: false
	},
	{
		id: 407,
		author: "Шустер",
		title: "История тайных союзов. Том 2",
		section: "И Мист",
		placed: "1-6-2",
		read: false
	},
	{
		id: 408,
		author: "Фулканелли",
		title: "Тайны готических соборов",
		section: "ИИ ",
		placed: "1-6-2",
		read: false
	},
	{
		id: 409,
		author: "Ренан",
		title: "Евангелие. Второе поколение христианства",
		section: "И Рел",
		placed: "1-6-2",
		read: false
	},
	{
		id: 410,
		author: "Ренан",
		title: "Апостолы",
		section: "И Рел",
		placed: "1-6-2",
		read: false
	},
	{
		id: 411,
		author: "Ренан",
		title: "Христианская церковь",
		section: "И Рел",
		placed: "1-6-2",
		read: false
	},
	{
		id: 412,
		author: "Кернс",
		title: "Дорогами христианства",
		section: "И Рел",
		placed: "1-6-2",
		read: false
	},
	{
		id: 413,
		author: "Ренан",
		title: "Апостол Павел",
		section: "И Рел",
		placed: "1-6-2",
		read: false
	},
	{
		id: 414,
		author: "Б/а",
		title: "Энциклопедия мистицизма",
		section: "И Мист",
		placed: "1-6-2",
		read: false
	},
	{
		id: 415,
		author: "Соколов",
		title: "Искусство Древней Эллады",
		section: "ИИ ",
		placed: "1-6-2",
		read: false
	},
	{
		id: 416,
		author: "Чарушин",
		title: "Зверята",
		section: "ИИ ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 417,
		author: "Макдоналд",
		title: "Мумии. Чудовища",
		section: "ДЛ Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 418,
		author: "Булычев",
		title: "Тайна третьей планеты",
		section: "ДЛ Ф",
		placed: "1-1-1",
		read: false
	},
	{
		id: 419,
		author: "б/а",
		title: "Я супер археолог",
		section: "Хобби ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 420,
		author: "Неменская",
		title: "Моя мастерская",
		section: "Хобби ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 421,
		author: "б/а",
		title: "Атлас животных с пазлами",
		section: "ДЛ УЛ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 422,
		author: "б/а",
		title: "Рыцари",
		section: "ДЛ ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 423,
		author: "б/а",
		title: "Пираты",
		section: "ДЛ ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 424,
		author: "б/а",
		title: "Фараоны",
		section: "ДЛ ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 425,
		author: "Иванова",
		title: "Веселый пластелин",
		section: "ДЛ Хобби",
		placed: "1-1-1",
		read: false
	},
	{
		id: 426,
		author: "Паркер",
		title: "Млекопитающие",
		section: "ДЛ Н",
		placed: "1-1-1",
		read: false
	},
	{
		id: 427,
		author: "Даррелл",
		title: "Говорящий сверток",
		section: "ДЛ ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 428,
		author: "Житков",
		title: "Что я вижу",
		section: "ДЛ ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 429,
		author: "Археминкова",
		title: "К пятерке шаг за шагом (нач. шк.)",
		section: "УЛ Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 430,
		author: "Сборник",
		title: "Русские народные сказки",
		section: "РЛ Ск",
		placed: "1-1-1",
		read: false
	},
	{
		id: 431,
		author: "Мартел и др",
		title: "Большая книга цивилизаций",
		section: "ДЛ ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 432,
		author: "Сборник",
		title: "Самые красивые сказки о принцессах",
		section: "ДЛ Ск",
		placed: "1-1-1",
		read: false
	},
	{
		id: 433,
		author: "Сборник",
		title: "1000 и 1 ночь",
		section: "ДЛ Ск",
		placed: "1-1-1",
		read: false
	},
	{
		id: 434,
		author: "Барри",
		title: "Питер-Пен",
		section: "ДЛ Ск",
		placed: "1-1-1",
		read: false
	},
	{
		id: 435,
		author: "Сборник",
		title: "Сказки народов мира",
		section: "ДЛ Ск",
		placed: "1-1-1",
		read: false
	},
	{
		id: 436,
		author: "Михалков",
		title: "Дядя Степа",
		section: "ДЛ Ст",
		placed: "1-1-1",
		read: false
	},
	{
		id: 437,
		author: "Емец",
		title: "Дракончик Пыхалка",
		section: "ДЛ ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 438,
		author: "Сборник",
		title: "Японские народные сказки",
		section: "ДЛ Ск",
		placed: "1-1-1",
		read: false
	},
	{
		id: 439,
		author: "Анисимов",
		title: "Санкт-Петербург. Три века архитектуры",
		section: "ДЛ ИИ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 440,
		author: "Сборник",
		title: "Мы встречаем новый год",
		section: "ДЛ ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 441,
		author: "Сладович, Дитта",
		title: "Тело человека",
		section: "ДЛ Н",
		placed: "1-1-1",
		read: false
	},
	{
		id: 442,
		author: "б/а",
		title: "Стикермания (о животных тропиков)",
		section: "ДЛ Н",
		placed: "1-1-1",
		read: false
	},
	{
		id: 443,
		author: "Фокина",
		title: "Наш мир от А до Я. Том 1",
		section: "ДЛ Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 444,
		author: "Фокина",
		title: "Наш мир от А до Я. Том 2",
		section: "ДЛ Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 445,
		author: "Гренье, Ротур",
		title: "Дикие животные",
		section: "ДЛ Н",
		placed: "1-1-1",
		read: false
	},
	{
		id: 446,
		author: "Калашников",
		title: "Мифы звездного неба",
		section: "ДЛ ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 447,
		author: "Паркер",
		title: "Занимательная анатомия",
		section: "ДЛ Н",
		placed: "1-1-1",
		read: false
	},
	{
		id: 448,
		author: "б/а",
		title: "Галилео",
		section: "ДЛ Н",
		placed: "1-1-1",
		read: false
	},
	{
		id: 449,
		author: "Талларико",
		title: "Где они?",
		section: "ДЛ Хобби",
		placed: "1-1-1",
		read: false
	},
	{
		id: 450,
		author: "Волцит",
		title: "Большая энциклопедия юного эколога",
		section: "ДЛ Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 451,
		author: "Голицин",
		title: "Сказания о земле русской",
		section: "ДЛ И",
		placed: "1-1-1",
		read: false
	},
	{
		id: 452,
		author: "Аугуста, Буриан",
		title: "Книга о мамонтах",
		section: "ДЛ Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 453,
		author: "Левин",
		title: "Наша земля",
		section: "ДЛ Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 454,
		author: "Саплина, Саплин",
		title: "Введение в историю",
		section: "УЛ И",
		placed: "1-1-1",
		read: false
	},
	{
		id: 455,
		author: "Дмитриева, Виноградова",
		title: "Искусство древнего мира",
		section: "ИИ ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 456,
		author: "Варламова, Судаков",
		title: "Атлас новых проффесий",
		section: "ДЛ Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 457,
		author: "Касиль и др",
		title: "ВОВ",
		section: "И Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 458,
		author: "Стивенсон",
		title: "Остров сокровищ",
		section: "ДЛ Пр",
		placed: "1-1-1",
		read: false
	},
	{
		id: 459,
		author: "Елманов, Савичева",
		title: "Энциклопедия. Словарь юного историка",
		section: "ДЛ Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 460,
		author: "Беляева, Новичкова",
		title: "Ледовое побоище",
		section: "И Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 461,
		author: "Новичкова и др",
		title: "Петр 1",
		section: "И Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 462,
		author: "б/а",
		title: "Египтология",
		section: "И Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 463,
		author: "Дефо",
		title: "Робинзон Крузо",
		section: "ЗЛ Пр",
		placed: "1-1-1",
		read: false
	},
	{
		id: 464,
		author: "Мамин-Сибиряк",
		title: "Сказки",
		section: "ДЛ Ск",
		placed: "1-1-1",
		read: false
	},
	{
		id: 465,
		author: "Алексеева",
		title: "Санкт-Петербург. Детям о музеях",
		section: "ДЛ ИИ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 466,
		author: "Кравченко",
		title: "Путеводитель для детей Санкт-Петербург",
		section: "ДЛ Пут",
		placed: "1-1-1",
		read: false
	},
	{
		id: 467,
		author: "Сборник",
		title: "Первоклассные сказки",
		section: "ДЛ Ск",
		placed: "1-1-1",
		read: false
	},
	{
		id: 468,
		author: "Хармс",
		title: "Стихи",
		section: "ДЛ Ст",
		placed: "1-1-1",
		read: false
	},
	{
		id: 469,
		author: "Благинина",
		title: "Вот какая мама",
		section: "ДЛ Ст",
		placed: "1-1-1",
		read: false
	},
	{
		id: 470,
		author: "Pushkin",
		title: "Tail of Tsar Saltan",
		section: "ДЛ Ст",
		placed: "1-1-1",
		read: false
	},
	{
		id: 471,
		author: "Хармс",
		title: "Тигр на улице",
		section: "ДЛ Ст",
		placed: "1-1-1",
		read: false
	},
	{
		id: 472,
		author: "Паркер",
		title: "Динозавры",
		section: "ДЛ Н",
		placed: "1-1-1",
		read: false
	},
	{
		id: 473,
		author: "Лёвшин",
		title: "Магистр рассеяных наук",
		section: "ДЛ Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 474,
		author: "Симонов",
		title: "Большая книга ремонта и отделочных",
		section: " Хобби",
		placed: "1-1-1",
		read: false
	},
	{
		id: 475,
		author: "Жебровская. Костылева",
		title: "Город над вольной Невой",
		section: "ДЛ И",
		placed: "1-1-1",
		read: false
	},
	{
		id: 476,
		author: "Маяковский",
		title: "Что такое хорошо и что такое плохо",
		section: "ДЛ Ст",
		placed: "1-1-1",
		read: false
	},
	{
		id: 477,
		author: "Клочко",
		title: "Волшебный мир Толкиена",
		section: "ДЛ Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 478,
		author: "Акулова и др",
		title: "Страна чудес викторианская Англия",
		section: "ДЛ Хобби",
		placed: "1-1-1",
		read: false
	},
	{
		id: 479,
		author: "Прудовская",
		title: "История книги своими руками",
		section: "ДЛ Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 480,
		author: "б/а",
		title: "Дракон",
		section: "ДЛ ",
		placed: "1-1-1",
		read: false
	},
	{
		id: 481,
		author: "Баранов. Лазукова",
		title: "Теория и практика обучения истории",
		section: "УЛ Спец",
		placed: "1-1-1",
		read: false
	},
	{
		id: 482,
		author: "Эликзендер",
		title: "Атлас мира для детей",
		section: "ДЛ Спец",
		placed: "1-1-1",
		read: false
	}
];
export default data1;
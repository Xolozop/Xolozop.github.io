const data = [
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
	},
	{
		id: 483,
		author: "Деникин",
		title: "Очерки русской смуты",
		section: "И Био",
		placed: "2-7-1",
		read: false
	},
	{
		id: 484,
		author: "Джованьоли",
		title: "Спартак",
		section: "ЗЛ И",
		placed: "2-7-1",
		read: false
	},
	{
		id: 485,
		author: "Виппер",
		title: "История Средних веков",
		section: "УЛ И",
		placed: "2-7-1",
		read: false
	},
	{
		id: 486,
		author: "Элиасберг и др",
		title: "Обществознание: права человека",
		section: "УЛ ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 487,
		author: "Тревильян",
		title: "История Англии",
		section: "И ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 488,
		author: "Десятсков",
		title: "Персонных дел мастер",
		section: "РЛ И",
		placed: "2-7-1",
		read: false
	},
	{
		id: 489,
		author: "Никитин",
		title: "Школьникам о праве",
		section: "УЛ ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 490,
		author: "Бузырев",
		title: "Копилка вожатских премудростей",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 491,
		author: "Сборник",
		title: "Санкт-Петербург, как явление русской культуры и российской государственности",
		section: "ИИ ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 492,
		author: "Волкова",
		title: "КИМ. История России 6 класс",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 493,
		author: "Рябцев Ю.С.",
		title: "Поурочные разработки по истории России 6 класс",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 494,
		author: "Карниенков",
		title: "ЕГЭ шаг за шагом 6-7 класс",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 495,
		author: "Горбачев",
		title: "Архиитектурно-художественные компоненты озеленения городов",
		section: "ИИ Спец",
		placed: "2-7-1",
		read: false
	},
	{
		id: 496,
		author: "Бреннер",
		title: "Моя история современной французской литературы",
		section: "ИИ Спец",
		placed: "2-7-1",
		read: false
	},
	{
		id: 497,
		author: "Коротаева",
		title: "Хочу, могу, умею",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 498,
		author: "Ермолаева",
		title: "Знакомство с Петербургом",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 499,
		author: "Приображенский, Рыбаков",
		title: "История России 6-7 класс",
		section: "УЛ ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 500,
		author: "Эйдельман",
		title: "Твой 18 век. Прекрасен наш союз",
		section: "И ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 501,
		author: "Лесной",
		title: "Откуда ты, Русь?",
		section: "И ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 502,
		author: "Шабанов, Галеева",
		title: "История древнего мира",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 503,
		author: "Паршин",
		title: "Мир искусства",
		section: "ИИ ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 504,
		author: "Сборник",
		title: "Метафизика Петербурга. Том 1",
		section: "РЛ ИИ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 505,
		author: "Поломис",
		title: "Дети в пионерском лагере",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 506,
		author: "Поздеев",
		title: "КИМ. Обществознание 9 класс",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 507,
		author: "Рябцев Ю.С.",
		title: "Хрестоматия по истории русской культуры 18-19 вв",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 508,
		author: "Ануфриев, Костромина",
		title: "Как преодолеть трудности в обучении детей",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 509,
		author: "Годер",
		title: "Задания и задачи по истории древнего мира",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 510,
		author: "Зельцерман, Роголева",
		title: "Учись, твори развивайся. Часть 1",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 511,
		author: "Иванов",
		title: "300 вопросов и ответов по мифологии",
		section: "Хобби ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 512,
		author: "Павловский",
		title: "Ночь в Гефсиманском саду",
		section: "И Рел",
		placed: "2-7-1",
		read: false
	},
	{
		id: 513,
		author: "Анцыферов",
		title: "Душа Петербурга",
		section: "РЛ Спец",
		placed: "2-7-1",
		read: false
	},
	{
		id: 514,
		author: "Филиппов",
		title: "Ленинградский Петербург",
		section: "РЛ Спец",
		placed: "2-7-1",
		read: false
	},
	{
		id: 515,
		author: "Мурдыкина",
		title: "Мифы древнего мира",
		section: "И Фолк",
		placed: "2-7-1",
		read: false
	},
	{
		id: 516,
		author: "Васильев",
		title: "История Востока. Том 1",
		section: "И ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 517,
		author: "Васильев",
		title: "История Востока. Том 2",
		section: "И ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 518,
		author: "Ливрага",
		title: "Фивы",
		section: "И ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 519,
		author: "Черчилль",
		title: "Рождение Британии",
		section: "И ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 520,
		author: "Тарле",
		title: "Наполеон",
		section: "И Био",
		placed: "2-7-1",
		read: false
	},
	{
		id: 521,
		author: "Данилов, Косулина",
		title: "История России 6-7 класс. Часть 1",
		section: "УЛ И",
		placed: "2-7-1",
		read: false
	},
	{
		id: 522,
		author: "Зельцерман, Роголева",
		title: "Учись, твори развивайся. Часть 2",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 523,
		author: "Зельцерман, Роголева",
		title: "Учись, твори развивайся. Часть 3",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 524,
		author: "Назарова",
		title: "Игротренинг",
		section: "Пед ",
		placed: "2-7-1",
		read: false
	},
	{
		id: 525,
		author: "Лунинский",
		title: "Княжна Тараканова",
		section: "И Био",
		placed: "2-7-1",
		read: false
	},
	{
		id: 526,
		author: "Козлова",
		title: "Я иду на урок в начальную школу",
		section: "Пед И",
		placed: "2-7-1",
		read: false
	},
	{
		id: 527,
		author: "Хочетов",
		title: "Золотой топор Вритры",
		section: "ИИ Пут",
		placed: "2-7-1",
		read: false
	},
	{
		id: 528,
		author: "Екатерина 2",
		title: "Записки императрицы Екатерины 2",
		section: "И Био",
		placed: "2-7-1",
		read: false
	},
	{
		id: 529,
		author: "Габарев",
		title: "Предистория Руси. Том 1",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 530,
		author: "Габарев",
		title: "Предистория Руси. Том 2",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 531,
		author: "Сборник",
		title: "Сердце беседует с Лениным",
		section: "РЛ И",
		placed: "2-7-2",
		read: false
	},
	{
		id: 532,
		author: "Рыбаков",
		title: "Стригольники",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 533,
		author: "Кайсаров и др",
		title: "Мифы древних славян",
		section: "И Фолк",
		placed: "2-7-2",
		read: false
	},
	{
		id: 534,
		author: "Рейнгардт",
		title: "Современное западное искусство",
		section: "ИИ ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 535,
		author: "Афанасьев",
		title: "Поэтические воззрения славян на природу. Том 2",
		section: "И Спец",
		placed: "2-7-2",
		read: false
	},
	{
		id: 536,
		author: "Афанасьев",
		title: "Поэтические воззрения славян на природу. Том 3",
		section: "И Спец",
		placed: "2-7-2",
		read: false
	},
	{
		id: 537,
		author: "Каллаш",
		title: "Три века. Том 1",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 538,
		author: "Каллаш",
		title: "Три века. Том 2",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 539,
		author: "Каллаш",
		title: "Три века. Том 3, 4",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 540,
		author: "Каллаш",
		title: "Три века. Том 5",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 541,
		author: "Каллаш",
		title: "Три века. Том 6",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 542,
		author: "Поган",
		title: "Сквозь мглу веков",
		section: "РЛ И",
		placed: "2-7-2",
		read: false
	},
	{
		id: 543,
		author: "Забылин",
		title: "Русский народ",
		section: "И Фолк",
		placed: "2-7-2",
		read: false
	},
	{
		id: 544,
		author: "Соловьев С.",
		title: "Общедоступное чтение о русской истории",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 545,
		author: "Лурье",
		title: "История Греции",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 546,
		author: "Арриан",
		title: "Поход Александра",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 547,
		author: "Диль",
		title: "Византийские портреты",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 548,
		author: "Бахтиль",
		title: "Русская бытовая сказка",
		section: "РЛ Ск",
		placed: "2-7-2",
		read: false
	},
	{
		id: 549,
		author: "Монселе",
		title: "Женщины-массонки",
		section: "ЗЛ Био",
		placed: "2-7-2",
		read: false
	},
	{
		id: 550,
		author: "Зинкевич, Михайлов",
		title: "Теория и практика сказкотерапии",
		section: "Пед ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 551,
		author: "Дегтярев",
		title: "Трудный век российского царства",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 552,
		author: "Соколова",
		title: "Весенне-летние календарные обряды славян",
		section: "И Фолк",
		placed: "2-7-2",
		read: false
	},
	{
		id: 553,
		author: "Поликарпов",
		title: "История нравов России",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 554,
		author: "Костомаров",
		title: "Русская история в жизнеописание ее главнейших деятелей. Том 1",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 555,
		author: "Костомаров",
		title: "Русская история в жизнеописание ее главнейших деятелей. Том 2",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 556,
		author: "Пронштейн, Мининков",
		title: "Булавин",
		section: "И Био",
		placed: "2-7-2",
		read: false
	},
	{
		id: 557,
		author: "Камышанова, Камышанов",
		title: "300 вопросов и ответов по истории и культуре древнего мира",
		section: "И Пед",
		placed: "2-7-2",
		read: false
	},
	{
		id: 558,
		author: "Ивлева",
		title: "Ряженые в русской традиционной культуре",
		section: "И Фолк",
		placed: "2-7-2",
		read: false
	},
	{
		id: 559,
		author: "Четина",
		title: "Евангельские образы в художественной культуре",
		section: "ИИ Рел",
		placed: "2-7-2",
		read: false
	},
	{
		id: 560,
		author: "Бубнова",
		title: "Нил Сорский",
		section: "И Рел",
		placed: "2-7-2",
		read: false
	},
	{
		id: 561,
		author: "Раков",
		title: "Античные стражи Петербурга",
		section: "ИИ Пут",
		placed: "2-7-2",
		read: false
	},
	{
		id: 562,
		author: "Ермичева",
		title: "Юсуповский дворец",
		section: "ИИ Пут",
		placed: "2-7-2",
		read: false
	},
	{
		id: 563,
		author: "Боннар",
		title: "Греческая цивилизация. Часть 1",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 564,
		author: "Боннар",
		title: "Греческая цивилизация. Часть 2",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 565,
		author: "Боннар",
		title: "Греческая цивилизация. Часть 3",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 566,
		author: "Головня",
		title: "Исотрия античного театра",
		section: "ИИ ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 567,
		author: "Пушнир",
		title: "Архитектура Новгорода",
		section: "ИИ ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 568,
		author: "б/а",
		title: "Новгородский государственный музей",
		section: "ИИ Пут",
		placed: "2-7-2",
		read: false
	},
	{
		id: 569,
		author: "Учанева",
		title: "Рукотворное чудо древнерусского храма",
		section: "ИИ ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 570,
		author: "Сборник",
		title: "Из истории, собирания и изучения прозведений народного искуссива",
		section: "ИИ Спец",
		placed: "2-7-2",
		read: false
	},
	{
		id: 571,
		author: "Белинский",
		title: "Современные заметки",
		section: "ИИ Спец",
		placed: "2-7-2",
		read: false
	},
	{
		id: 572,
		author: "Милиадис",
		title: "Истории из Геродота",
		section: "И ",
		placed: "2-7-2",
		read: false
	},
	{
		id: 573,
		author: "Немировский",
		title: "Мифы и легенды Древнего Востока",
		section: "И Фолк",
		placed: "2-7-2",
		read: false
	},
	{
		id: 574,
		author: "Неверов",
		title: "Геммы античного мира",
		section: "ИИ ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 575,
		author: "Алексеев",
		title: "Хрестоматия по философии",
		section: "УЛ Фил",
		placed: "2-6-1",
		read: false
	},
	{
		id: 576,
		author: "Аверьянов",
		title: "Поурочные разработки по философии ",
		section: "Пед ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 577,
		author: "Аверьянов",
		title: "Введение в философию",
		section: "УЛ Фил",
		placed: "2-6-1",
		read: false
	},
	{
		id: 578,
		author: "Дубинский",
		title: "Женщина в жизни великих и знаменитых людей",
		section: "И Био",
		placed: "2-6-1",
		read: false
	},
	{
		id: 579,
		author: "Бойцов, Шукуров",
		title: "История Средних веков",
		section: "УЛ И",
		placed: "2-6-1",
		read: false
	},
	{
		id: 580,
		author: "Гузик",
		title: "В поисках золотого руна",
		section: "Пед И",
		placed: "2-6-1",
		read: false
	},
	{
		id: 581,
		author: "Загладин",
		title: "Всемирная история 20 век",
		section: "УЛ И",
		placed: "2-6-1",
		read: false
	},
	{
		id: 582,
		author: "Юдовская",
		title: "История. Мир в Новое время",
		section: "УЛ И",
		placed: "2-6-1",
		read: false
	},
	{
		id: 583,
		author: "Элиасберг",
		title: "Обществознание. Социальная практика",
		section: "УЛ ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 584,
		author: "Кузнецов",
		title: "Функциональные стили современного французского языка",
		section: "Н Спец",
		placed: "2-6-1",
		read: false
	},
	{
		id: 585,
		author: "Пожарский",
		title: "Град Москов",
		section: "И ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 586,
		author: "Перрюшо",
		title: "Жизнь Гогена",
		section: "ИИ Био",
		placed: "2-6-1",
		read: false
	},
	{
		id: 587,
		author: "Гусев",
		title: "Введение в философию",
		section: "УЛ Фил",
		placed: "2-6-1",
		read: false
	},
	{
		id: 588,
		author: "Непомнящий",
		title: "Загадки истории России",
		section: "И ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 589,
		author: "Данилов, Косулина",
		title: "История России 6 класс",
		section: "УЛ И",
		placed: "2-6-1",
		read: false
	},
	{
		id: 590,
		author: "Сборник",
		title: "Христианский мир",
		section: "И Рел",
		placed: "2-6-1",
		read: false
	},
	{
		id: 591,
		author: "Минина",
		title: "Закон и несовершеннолетние граждане России",
		section: "УЛ ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 592,
		author: "Левитская, Козлова",
		title: "Занимательная орфография",
		section: "УЛ Спец",
		placed: "2-6-1",
		read: false
	},
	{
		id: 593,
		author: "Транквилл",
		title: "Жизнь 12 Цезарей",
		section: "И Био",
		placed: "2-6-1",
		read: false
	},
	{
		id: 594,
		author: "Моммзен",
		title: "История Рима",
		section: "И ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 595,
		author: "Кусков",
		title: "Словарь-справочник. Литература и культура Древней Руси",
		section: "ИИ Спец",
		placed: "2-6-1",
		read: false
	},
	{
		id: 596,
		author: "Трухина",
		title: "История Древней Греции",
		section: "И ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 597,
		author: "Даринский, Старцев",
		title: "История Санкт-Петербурга 20 век",
		section: "И ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 598,
		author: "Давыдова и др",
		title: "Санкт-Петербург и античность",
		section: "ИИ ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 599,
		author: "б/а",
		title: "Шпаргалки по социологии",
		section: "Н Спец",
		placed: "2-6-1",
		read: false
	},
	{
		id: 600,
		author: "Тальберг",
		title: "Победоносцев",
		section: "И Био",
		placed: "2-6-1",
		read: false
	},
	{
		id: 601,
		author: "Эберс",
		title: "Император",
		section: "И Био",
		placed: "2-6-1",
		read: false
	},
	{
		id: 602,
		author: "Бобрищев",
		title: "Секреты народного ремесла",
		section: "ИИ Фолк",
		placed: "2-6-1",
		read: false
	},
	{
		id: 603,
		author: "Кравченко",
		title: "Введение в социологию",
		section: "Н Спец",
		placed: "2-6-1",
		read: false
	},
	{
		id: 604,
		author: "Гаджиев и др",
		title: "Введение в политологию",
		section: "Н Спец",
		placed: "2-6-1",
		read: false
	},
	{
		id: 605,
		author: "Данилов и др",
		title: "История России 9 класс",
		section: "УЛ И",
		placed: "2-6-1",
		read: false
	},
	{
		id: 606,
		author: "Манусевич и др",
		title: "Новейшая история 10 класс",
		section: "УЛ И",
		placed: "2-6-1",
		read: false
	},
	{
		id: 607,
		author: "Боголюбов и др",
		title: "Обществознание 7 класс",
		section: "УЛ ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 608,
		author: "Соколов",
		title: "Граждановеденье 5 класс",
		section: "УЛ ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 609,
		author: "Головатенко",
		title: "Я иду на урок истории",
		section: "Пед И",
		placed: "2-6-1",
		read: false
	},
	{
		id: 610,
		author: "Лависс",
		title: "Всеобщая история для детей",
		section: "ДЛ И",
		placed: "2-6-1",
		read: false
	},
	{
		id: 611,
		author: "Лансере и др",
		title: "Гатчина…",
		section: "ИИ Спец",
		placed: "2-6-1",
		read: false
	},
	{
		id: 612,
		author: "Пыляев",
		title: "Старый Петербург",
		section: "ИИ Спец",
		placed: "2-6-1",
		read: false
	},
	{
		id: 613,
		author: "Алексеев",
		title: "У кормила российского государства",
		section: "И ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 614,
		author: "Шестаков",
		title: "Россия в 1992-98",
		section: "УЛ И",
		placed: "2-6-1",
		read: false
	},
	{
		id: 615,
		author: "Сандулов и др",
		title: "История России. Народ и власть",
		section: "УЛ И",
		placed: "2-6-1",
		read: false
	},
	{
		id: 616,
		author: "Старцев",
		title: "Ленин и революция 1905 год",
		section: "И ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 617,
		author: "Лебон",
		title: "Психология масс",
		section: "Псих ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 618,
		author: "Беляев",
		title: "Разруха в головах. Иформационная война против России",
		section: "Псих ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 619,
		author: "Литвак",
		title: "Командовать или подчиняться",
		section: "Псих ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 620,
		author: "Пол",
		title: "Революция в школе",
		section: "Пед ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 621,
		author: "Зимин",
		title: "Санкт-Петербург. Архитектурные стили",
		section: "УЛ ИИ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 622,
		author: "Дмитриева",
		title: "Санкт-Петербург. 20 век",
		section: "УЛ ИИ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 623,
		author: "Дмитриева",
		title: " Санкт-Петербург пособие по истории города",
		section: "УЛ ИИ",
		placed: "2-6-1",
		read: false
	},
	{
		id: 624,
		author: "Сборник",
		title: "Боги и герои древней Земли",
		section: "ЗЛ Фолк",
		placed: "2-6-1",
		read: false
	},
	{
		id: 625,
		author: "Яворская",
		title: "Мифы Древней греции",
		section: "ЗЛ Фолк",
		placed: "2-6-1",
		read: false
	},
	{
		id: 626,
		author: "Чарнолуский",
		title: "Легенда об олене-человеке",
		section: "ЗЛ Фолк",
		placed: "2-6-1",
		read: false
	},
	{
		id: 627,
		author: "Може",
		title: "Курс французского языка",
		section: "Н Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 628,
		author: "Кулигина, Кирьянова",
		title: "Французский это супер",
		section: "УЛ ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 629,
		author: "Боше",
		title: "Книга для маленьких",
		section: "УЛ ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 630,
		author: "Гака",
		title: "Французско-русский и русско-французский словарь",
		section: " ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 631,
		author: "Верн",
		title: "80 дней вокруг света",
		section: "ЗЛ Пр",
		placed: "2-6-2",
		read: false
	},
	{
		id: 632,
		author: "Доде",
		title: "Письма моему…",
		section: "ЗЛ ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 633,
		author: "Варанцова",
		title: "Француский язык. Тексты для чтения",
		section: "УЛ Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 634,
		author: "Мериме",
		title: "Избранные рассказы",
		section: "ЗЛ ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 635,
		author: "Бериговская",
		title: "Синяя птица. 5 класс",
		section: "Пед Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 636,
		author: "Турчина",
		title: "Занимательный французский",
		section: "УЛ Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 637,
		author: "Стендаль",
		title: "Новеллы",
		section: "ЗЛ ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 638,
		author: "Беллемар",
		title: "Удивительные приключения",
		section: "ЗЛ ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 639,
		author: "Парчевский, Ройзенблит",
		title: "Самоучитель французского языка",
		section: "УЛ ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 640,
		author: "Михеева",
		title: "Музыкальный словарь в рассказах",
		section: "ИИ Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 641,
		author: "Сахаров",
		title: "Мир, прогресс, права человека",
		section: "И ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 642,
		author: "Бальзак",
		title: "Рассказы",
		section: "ЗЛ ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 643,
		author: "Петровский, Ярошеский",
		title: "Психология (словарь)",
		section: "Псих Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 644,
		author: "Ярошевский",
		title: "История психологии",
		section: "Псих И",
		placed: "2-6-2",
		read: false
	},
	{
		id: 645,
		author: "Скворцов",
		title: "Культура самосознания",
		section: "Псих Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 646,
		author: "Андреева",
		title: "Социальная психология",
		section: "УЛ Псих",
		placed: "2-6-2",
		read: false
	},
	{
		id: 647,
		author: "Ковалев",
		title: "Краткий очерк истории русской советской литературы",
		section: "РЛ И",
		placed: "2-6-2",
		read: false
	},
	{
		id: 648,
		author: "Виппер",
		title: "История Нового времени",
		section: "И ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 649,
		author: "Молокова, Фролов",
		title: "Исотрия Москвы в памятниках культуры",
		section: "ИИ ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 650,
		author: "Ефремов",
		title: "Московских улиц имена",
		section: "ИИ ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 651,
		author: "Молева",
		title: "Усадьбы Москвы",
		section: "ИИ ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 652,
		author: "Щевцов и др",
		title: "История государства росийского. Жизнеописание",
		section: "И Био",
		placed: "2-6-2",
		read: false
	},
	{
		id: 653,
		author: "Пресняков",
		title: "Княжое право в Древней Руси",
		section: "И Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 654,
		author: "Князева",
		title: "Иллюстрированная история России",
		section: "ДЛ И",
		placed: "2-6-2",
		read: false
	},
	{
		id: 655,
		author: "Довлатов",
		title: "Записные книжки",
		section: "РЛ ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 656,
		author: "Кегор",
		title: "Несчастнейший",
		section: "Псих ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 657,
		author: "Гуревич",
		title: "Культура и общество средневековой Европы глазами современников",
		section: "ИИ Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 658,
		author: "Ярхо",
		title: "Словарь-справочник. Античная культура",
		section: "ИИ Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 659,
		author: "Прокущев",
		title: "И неподкупный голос мой",
		section: "РЛ Био",
		placed: "2-6-2",
		read: false
	},
	{
		id: 660,
		author: "Яковлев",
		title: "Вашингтон",
		section: "И Био",
		placed: "2-6-2",
		read: false
	},
	{
		id: 661,
		author: "Палеолог",
		title: "Царская Россия на кануне революции",
		section: "И ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 662,
		author: "Скрынников",
		title: "Далекий век",
		section: "РЛ И",
		placed: "2-6-2",
		read: false
	},
	{
		id: 663,
		author: "Пикуль",
		title: "Пером и шпагой",
		section: "РЛ И",
		placed: "2-6-2",
		read: false
	},
	{
		id: 664,
		author: "Эйдельман",
		title: "Первый декабрист",
		section: "И Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 665,
		author: "Эйдельман",
		title: "Последний летописец",
		section: "И Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 666,
		author: "Эйдельман",
		title: "Апостол Сергей",
		section: "И Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 667,
		author: "Эйдельман",
		title: "Пушкин и декабристы",
		section: "И Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 668,
		author: "Эйдельман",
		title: "Быть может за хребтом Кавказа",
		section: "И Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 669,
		author: "Эйдельман",
		title: "Большой Жанно",
		section: "И Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 670,
		author: "Эйдельман",
		title: "Секретная династия",
		section: "И Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 671,
		author: "Федорова",
		title: "Хрестоматия по древнерусской литературе",
		section: "РЛ Спец",
		placed: "2-6-2",
		read: false
	},
	{
		id: 672,
		author: "Дианова",
		title: "Российский этнографический музей",
		section: "ИИ Пут",
		placed: "2-6-2",
		read: false
	},
	{
		id: 673,
		author: "Мериме",
		title: "Новеллы",
		section: "ЗЛ ",
		placed: "2-6-2",
		read: false
	},
	{
		id: 674,
		author: "Власов",
		title: "Архитектура петровского барокко",
		section: "ИИ ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 675,
		author: "Лихачёв",
		title: "Письма о добром",
		section: "РЛ ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 676,
		author: "Либшиц",
		title: "Немецко-русский русско-немецкий словарь",
		section: "Н Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 677,
		author: "Кандке и др",
		title: "Немецко-русский словарь-разговорник спорт",
		section: "Н Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 678,
		author: "Ингемарсон. Альмквист",
		title: "Русско-шведский разговорник",
		section: "Н Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 679,
		author: "Витошнев",
		title: "Буденный",
		section: "И Био",
		placed: "2-5-1",
		read: false
	},
	{
		id: 680,
		author: "Гордиенко ",
		title: "Жуков",
		section: "И Био",
		placed: "2-5-1",
		read: false
	},
	{
		id: 681,
		author: "Михальчук",
		title: "Троцкий",
		section: "И Био",
		placed: "2-5-1",
		read: false
	},
	{
		id: 682,
		author: "Воропаева",
		title: "Маргарет Тэтчер",
		section: "И Био",
		placed: "2-5-1",
		read: false
	},
	{
		id: 683,
		author: "Дегтярев",
		title: "Невская битва",
		section: "И ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 684,
		author: "Редис",
		title: "Кто есть кто в Античном мире",
		section: "И Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 685,
		author: "Загладин",
		title: "Меодич. рекомендации к учебникам 10-11кл. ",
		section: "Пед Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 686,
		author: "Дали",
		title: "Дневник одного гения",
		section: "ИИ Био",
		placed: "2-5-1",
		read: false
	},
	{
		id: 687,
		author: "Жукова и др",
		title: "Введение в практ. социальную психологию",
		section: "Псих Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 688,
		author: "Алебастрова",
		title: "Проверочные работы 6кл.",
		section: "Пед ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 689,
		author: "Лернер",
		title: "Задачки по истории отечества",
		section: "Пед ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 690,
		author: "Поздеев ",
		title: "КИМ: обществознание 6кл.",
		section: "Пед ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 691,
		author: "Орлова ",
		title: "История Отечества ХХ век",
		section: "Пед ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 692,
		author: "Волкова",
		title: "КИМ: история Средних веков",
		section: "Пед ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 693,
		author: "б/а",
		title: "XXVI съезд КПСС",
		section: "И ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 694,
		author: "Степанов",
		title: "Резьбы очарованье",
		section: "ИИ ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 695,
		author: "Пермяк",
		title: "Дедушкина копилка",
		section: "РЛ Ск",
		placed: "2-5-1",
		read: false
	},
	{
		id: 696,
		author: "Колосков",
		title: "История России XX век",
		section: "Пед ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 697,
		author: "Ленин",
		title: "Все на борьбу с Деникиным",
		section: "И ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 698,
		author: "Верт",
		title: "История советского гос-ва",
		section: "И ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 699,
		author: "Печников",
		title: "Рыцари церкви: кто они?",
		section: "И Рел",
		placed: "2-5-1",
		read: false
	},
	{
		id: 700,
		author: "Юдовская",
		title: "Эволюция права в государствах Европы и Америки",
		section: "УЛ ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 701,
		author: "Сванидзе",
		title: "Я иду на урок истории. Средние века.",
		section: "УЛ Пед",
		placed: "2-5-1",
		read: false
	},
	{
		id: 702,
		author: "Кадневский",
		title: "Тесты по истории России. 6-7кл.",
		section: "Пед ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 703,
		author: "Гузик. Кузьменко",
		title: "Культура Средневековья",
		section: "ИИ Хобби",
		placed: "2-5-1",
		read: false
	},
	{
		id: 704,
		author: "Кищенкова",
		title: "История Средних веков",
		section: "Пед ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 705,
		author: "Кищенкова",
		title: "История России",
		section: "Пед ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 706,
		author: "Алиева",
		title: "Всеобщая история",
		section: "И ",
		placed: "2-5-1",
		read: false
	},
	{
		id: 707,
		author: "Малик. Петлеванный",
		title: "400 немецких пословиц и поговорок",
		section: "ЗЛ Фолк",
		placed: "2-5-1",
		read: false
	},
	{
		id: 708,
		author: "Вяземский, Стрелова",
		title: "Как сегодня преподавать историю в школе",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 709,
		author: "Вяземский, Стрелова",
		title: "Методич. рекомендацииучителю истории",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 710,
		author: "Вяземский, Стрелова",
		title: "Методика преподавания истории в школе",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 711,
		author: "Борзова",
		title: "Игры на уроке истории",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 712,
		author: "Поташник, Левит",
		title: "Как подготовить и провести открытый урок",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 713,
		author: "Колеченко",
		title: "Энциклопедия педагогических технологий",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 714,
		author: "Тюляева",
		title: "Современные образовательные технологии",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 715,
		author: "Шоган",
		title: "Методика преподавания истории в школе",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 716,
		author: "Кучерук",
		title: "Технология игрового обучения в школе",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 717,
		author: "Короткова",
		title: "Наглядность на уроках истории",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 718,
		author: "Иванова, Осмоловская",
		title: "Теория обучения в информационном обществе",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 719,
		author: "Янушевский",
		title: "Методика и организация проектной деятельности в школе",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 720,
		author: "Короткова, Студеникин",
		title: "Методика обучения истории в схемах",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 721,
		author: "Короткова, Студеникин",
		title: "Практикум по методике преподавания истории в школе",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 722,
		author: "Волкова",
		title: "Всеобщая история",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 723,
		author: "Антонов",
		title: "Изучаем права человека",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 724,
		author: "Роготнева и др",
		title: "Организация проектной деятельности",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 725,
		author: "Уварова",
		title: "Механизмы и секреты технологии модерации",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 726,
		author: "Лемина, Сабирова",
		title: "Обществознание. История",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 727,
		author: "Короткова",
		title: "Методика проведения игр и дискуссий на уроках истории",
		section: "УЛ Спец",
		placed: "2-5-1",
		read: false
	},
	{
		id: 728,
		author: "Брандт",
		title: "История Средних веков",
		section: "Пед ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 729,
		author: "Волкова",
		title: "КИМ: исторя России. 7 кл.",
		section: "Пед ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 730,
		author: "Иванова",
		title: "обществознание. Поурочные разработки. 6 кл.",
		section: "Пед ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 731,
		author: "Андреевская, Викторов",
		title: "История зарубежных стран. Тесты.",
		section: "Пед ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 732,
		author: "Вигасин, Годер, Свеницкая",
		title: "История древнего мира",
		section: "УЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 733,
		author: "Бутромеева",
		title: "Обо всем на свете. Часть 1",
		section: "И Хобби",
		placed: "2-5-2",
		read: false
	},
	{
		id: 734,
		author: "Бутромеева",
		title: "Обо всем на свете. Часть 2",
		section: "И Хобби",
		placed: "2-5-2",
		read: false
	},
	{
		id: 735,
		author: "Минченков",
		title: "Воспоминания о передвижниках",
		section: "ИИ ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 736,
		author: "Воронов. Дубова",
		title: "Невский хрусталь",
		section: "ИИ ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 737,
		author: "Ирвинг",
		title: "История Нью-Йорка",
		section: "ЗЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 738,
		author: "Мордовцев",
		title: "Замечательные исторические женщины на Руси",
		section: "И Био",
		placed: "2-5-2",
		read: false
	},
	{
		id: 739,
		author: "Синдаловский",
		title: "Легенды и мифы Санкт-Петербурга",
		section: "ИИ ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 740,
		author: "Синдаловский",
		title: "История Санкт-Петербурга в преданиях и легендах",
		section: "ИИ ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 741,
		author: "Бутромеев",
		title: "Древний мир",
		section: "ДЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 742,
		author: "Бутромеев",
		title: "Древний мир 2",
		section: "ДЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 743,
		author: "Бутромеев",
		title: "Средние века. Эпоха Возрождения",
		section: "ДЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 744,
		author: "Бутромеев",
		title: "Позднее Средневековье",
		section: "ДЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 745,
		author: "Бутромеев",
		title: "Россия от Рюрика до 1917г.",
		section: "ДЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 746,
		author: "Бутромеев",
		title: "Новое время",
		section: "ДЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 747,
		author: "Бутромеев",
		title: "18-19вв.",
		section: "ДЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 748,
		author: "Бутромеев",
		title: "19-20вв.",
		section: "ДЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 749,
		author: "Сборник",
		title: "Пушкин и искусство",
		section: "ИИ ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 750,
		author: "Смирнова",
		title: "Государственная оружейная палата",
		section: "ИИ ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 751,
		author: "Ефимов",
		title: "Рыцарский зал",
		section: "ИИ ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 752,
		author: "Коган и др",
		title: "Выборгская сторона",
		section: "ИИ ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 753,
		author: "Поспелов",
		title: "Русский классицизм",
		section: "ИИ ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 754,
		author: "Шпаков",
		title: "Сексология. Венерические заболевания",
		section: "Н Мед",
		placed: "2-5-2",
		read: false
	},
	{
		id: 755,
		author: "Щерба",
		title: "Русско-французский словарь",
		section: "Н Спец",
		placed: "2-5-2",
		read: false
	},
	{
		id: 756,
		author: "Холл",
		title: "Словарь сюжетов и символов в искусстве",
		section: "ИИ ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 757,
		author: "Ковлягина",
		title: "Целительные ароматы природы",
		section: "Н Мед",
		placed: "2-5-2",
		read: false
	},
	{
		id: 758,
		author: "Сухов и др",
		title: "Дидактический материал. 6-7кл.",
		section: "Пед ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 759,
		author: "Кузищин",
		title: "История Др. Рима",
		section: "И ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 760,
		author: "Павленко",
		title: "Петр 1",
		section: "И Био",
		placed: "2-5-2",
		read: false
	},
	{
		id: 761,
		author: "Каган",
		title: "Град Петров в истории русской культуры",
		section: "ИИ ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 762,
		author: "Булыко",
		title: "Совр. Орфографический словарь рус. Языка",
		section: "Н Спец",
		placed: "2-5-2",
		read: false
	},
	{
		id: 763,
		author: "Долуцкий",
		title: "Отечественная история. 20век. Часть 2",
		section: "УЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 764,
		author: "Мюллер",
		title: "Юность знаменитых людей",
		section: "И Био",
		placed: "2-5-2",
		read: false
	},
	{
		id: 765,
		author: "Рыжов",
		title: "Все монархи России",
		section: "И Био",
		placed: "2-5-2",
		read: false
	},
	{
		id: 766,
		author: "Килошенко",
		title: "Психология моды",
		section: "ИИ Спец",
		placed: "2-5-2",
		read: false
	},
	{
		id: 767,
		author: "Якушин",
		title: "Достоевский в жизни и творчестве",
		section: "ИИ Био",
		placed: "2-5-2",
		read: false
	},
	{
		id: 768,
		author: "Корнилов",
		title: "Курс истории России 19века",
		section: "УЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 769,
		author: "Сорока-цюпа и др",
		title: "Мир в 20 веке",
		section: "УЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 770,
		author: "Анисимов",
		title: "Московская Русь",
		section: "ДЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 771,
		author: "Анисимов",
		title: "Московское царство",
		section: "ДЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 772,
		author: "Анисимов",
		title: "Императорская Россия",
		section: "ДЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 773,
		author: "Штофф",
		title: "Советская Россия",
		section: "ДЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 774,
		author: "Неменская",
		title: "Каждый народ - художник",
		section: "ИИ ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 775,
		author: "Алексеев",
		title: "100 рассказов из русской истории",
		section: "ДЛ И",
		placed: "2-5-2",
		read: false
	},
	{
		id: 776,
		author: "б/а",
		title: "Всё о японской гравюре хоккусай",
		section: "ИИ Спец",
		placed: "2-5-2",
		read: false
	},
	{
		id: 777,
		author: "Успенский В. И Л.",
		title: "Золотое руно. Подвиги Геракла",
		section: "ДЛ Фолк",
		placed: "2-5-2",
		read: false
	},
	{
		id: 778,
		author: "Боголюбов и др",
		title: "Обществознание. 6кл.",
		section: "УЛ ",
		placed: "2-5-2",
		read: false
	},
	{
		id: 779,
		author: "Щербакова",
		title: "Человек в истории. Методичка",
		section: "Пед ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 780,
		author: "Афанасьев, Коморин",
		title: "Триста творческих конкурсов",
		section: "Пед ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 781,
		author: "Никитин",
		title: "Основы обществознания. 9 кл.",
		section: "УЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 782,
		author: "Юрганова, Кацва",
		title: "История России 16-18 вв",
		section: "УЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 783,
		author: "Данилов, Косулина",
		title: "История России 8 кл.",
		section: "УЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 784,
		author: "Боголюбов и др",
		title: "Обществознание 9 класс",
		section: "УЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 785,
		author: "Мишина, Жарова",
		title: "История Отечества 1900-1940",
		section: "УЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 786,
		author: "Юдовская и др.",
		title: "Мир в Новое время 1870-1918",
		section: "УЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 787,
		author: "Зырянов",
		title: "История России 8 кл.",
		section: "УЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 788,
		author: "Ильин, Морозова",
		title: "Из истории права",
		section: "УЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 789,
		author: "Боголюбов и др",
		title: "Человек и общество 10-11 кл",
		section: "УЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 790,
		author: "Гарин",
		title: "Пророки и поэты. Т.3",
		section: "ИИ Мист",
		placed: "2-4-1",
		read: false
	},
	{
		id: 791,
		author: "Гарин",
		title: "Пророки и поэты. Т.4",
		section: "ИИ Мист",
		placed: "2-4-1",
		read: false
	},
	{
		id: 792,
		author: "Гарин",
		title: "Пророки и поэты. Т.5",
		section: "ИИ Мист",
		placed: "2-4-1",
		read: false
	},
	{
		id: 793,
		author: "Гарин",
		title: "Пророки и поэты Т.6",
		section: "ИИ Мист",
		placed: "2-4-1",
		read: false
	},
	{
		id: 794,
		author: "Гарин",
		title: "Пророки и поэтя. Т.7",
		section: "ИИ Мист",
		placed: "2-4-1",
		read: false
	},
	{
		id: 795,
		author: "Народ",
		title: "Конституция Российской Федерации",
		section: " Спец",
		placed: "2-4-1",
		read: false
	},
	{
		id: 796,
		author: "Жукова и др",
		title: "История. Ответы на билеты",
		section: "И ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 797,
		author: "Лисаевич, Бетхер-Остренко",
		title: "Скульптура Ленинграда",
		section: "ИИ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 798,
		author: "Витязева",
		title: "Каменный остров",
		section: "ИИ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 799,
		author: "Гумилев Н.",
		title: "Драматические произведения",
		section: "РЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 800,
		author: "Денисенко и др.",
		title: "История Отечества. 1939-1996",
		section: "УЛ И",
		placed: "2-4-1",
		read: false
	},
	{
		id: 801,
		author: "Сборник",
		title: "Сад Толстого",
		section: "ИИ РЛ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 802,
		author: "Пушкин",
		title: "Южные поэмы",
		section: "РЛ Ст",
		placed: "2-4-2",
		read: false
	},
	{
		id: 803,
		author: "Пушкин",
		title: "Маленькие трагедии",
		section: "РЛ Ст",
		placed: "2-4-1",
		read: false
	},
	{
		id: 804,
		author: "Бальзак",
		title: "Гобсек",
		section: "ЗЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 805,
		author: "Маяковский",
		title: "Сплошное сердце",
		section: "РЛ Ст",
		placed: "2-4-1",
		read: false
	},
	{
		id: 806,
		author: "Гарин-Михайловский",
		title: "Детство Темы. Гимназисты",
		section: "РЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 807,
		author: "Толстой Л.Н.",
		title: "Детство. Отрочество. Юность",
		section: "РЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 808,
		author: "Грин",
		title: "Алые паруса",
		section: "РЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 809,
		author: "Пришвин",
		title: "Охотничьи были",
		section: "РЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 810,
		author: "Сборник",
		title: "Новый Завет и Псалтырь",
		section: "ЗЛ Рел",
		placed: "2-4-1",
		read: false
	},
	{
		id: 811,
		author: "Витязева",
		title: "Ленинград. Спутник туриста.",
		section: "ИИ Спец",
		placed: "2-4-1",
		read: false
	},
	{
		id: 812,
		author: "Фаданелли",
		title: "Итальяно-русский. Русско-итальянский.",
		section: "Н Спец",
		placed: "2-4-1",
		read: false
	},
	{
		id: 813,
		author: "Бибин, Шелудько",
		title: "Немецкий в кармане",
		section: "Н Спец",
		placed: "2-4-1",
		read: false
	},
	{
		id: 814,
		author: "Сборник",
		title: "Русский Сонет",
		section: "РЛ Ст",
		placed: "2-4-1",
		read: false
	},
	{
		id: 815,
		author: "Баратынский",
		title: "Стихотворения",
		section: "РЛ Ст",
		placed: "2-4-1",
		read: false
	},
	{
		id: 816,
		author: "Сборник",
		title: "Встречи и расставания",
		section: "ЗЛ Ст",
		placed: "2-4-1",
		read: false
	},
	{
		id: 817,
		author: "",
		title: "Молодежный разговорник",
		section: "Н Спец",
		placed: "2-4-1",
		read: false
	},
	{
		id: 818,
		author: "Бродский",
		title: "Пейзаж с наводнением",
		section: "РЛ Ст",
		placed: "2-4-1",
		read: false
	},
	{
		id: 819,
		author: "Бродский",
		title: "Набережная неисцелимых",
		section: "РЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 820,
		author: "Тарковский Арс",
		title: "Собеседник",
		section: "РЛ Ст",
		placed: "2-4-1",
		read: false
	},
	{
		id: 821,
		author: "Рузавина",
		title: "Роза Люксембург",
		section: "И Био",
		placed: "2-4-1",
		read: false
	},
	{
		id: 822,
		author: "Козлов",
		title: "Колумбы российских древностей",
		section: "ИИ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 823,
		author: "Кричко",
		title: "Архитектурные современники из прошлого",
		section: "ИИ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 824,
		author: "Рак",
		title: "Мифы и легенды Древнего Египта",
		section: "ЗЛ Фолк",
		placed: "2-4-1",
		read: false
	},
	{
		id: 825,
		author: "Криш",
		title: "Сокровища Трои и их история",
		section: "ИИ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 826,
		author: "Соловьева",
		title: "Как составить текст?",
		section: "УЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 827,
		author: "Аверченко",
		title: "Юмористические рассказы",
		section: "РЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 828,
		author: "Тэффи. Аверченко. Зощенко",
		title: "Лучшие юмористические рассаказы",
		section: "РЛ ",
		placed: "2-4-1",
		read: false
	},
	{
		id: 829,
		author: "Пушкин",
		title: "Избранная лирика",
		section: "РЛ Ст",
		placed: "2-4-2",
		read: false
	},
	{
		id: 830,
		author: "Пушкин",
		title: "Стихотворения, сказки, Руслани Людмила. Том 1",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 831,
		author: "Пушкин",
		title: "Драматургия, проза",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 832,
		author: "Лермонтов",
		title: "Сочинения. Том 1",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 833,
		author: "Лермонтов",
		title: "Сочинения. Том 2",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 834,
		author: "Лермонтов",
		title: "Избранные сочинения",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 835,
		author: "Сборник",
		title: "Сказки, песни, частушки, присловия",
		section: "РЛ Фолк",
		placed: "2-4-2",
		read: false
	},
	{
		id: 836,
		author: "Ильф, Петров",
		title: "Золотой теленок",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 837,
		author: "Леонов",
		title: "Русский лес",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 838,
		author: "Толстой Л.Н.",
		title: "Избранное",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 839,
		author: "Сборник",
		title: "Сказки Ленинградской области",
		section: "РЛ Фолк",
		placed: "2-4-2",
		read: false
	},
	{
		id: 840,
		author: "Сборник",
		title: "Как слово наше отзовется…",
		section: "РЛ Ст",
		placed: "2-4-2",
		read: false
	},
	{
		id: 841,
		author: "Маяковский",
		title: "Избранные произведения",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 842,
		author: "Достоевский",
		title: "Записки из Мертвого дома",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 843,
		author: "Достоевский",
		title: "Идиот",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 844,
		author: "Тургенев",
		title: "Дым. Новь. Вешние воды. Стихотворения в прозе",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 845,
		author: "Сборник",
		title: "Русский фолклор",
		section: "РЛ Фолк",
		placed: "2-4-2",
		read: false
	},
	{
		id: 846,
		author: "Авраменко",
		title: "Воспоминания об Эрмитажном театре",
		section: "РЛ ИИ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 847,
		author: "Погодин",
		title: "Человек с ружьем, Кремлевские куранты, Третья, патетическая",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 848,
		author: "Пушкин",
		title: "Стихотворения, Евгений Онегин",
		section: "РЛ Ст",
		placed: "2-4-2",
		read: false
	},
	{
		id: 849,
		author: "Серафимович",
		title: "Железный поток, рассказы",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 850,
		author: "Куприн",
		title: "Купол, святого Исаакия Далматского",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 851,
		author: "Сборник",
		title: "Незримые поединки",
		section: " ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 852,
		author: "Одоевский",
		title: "Повести и рассказы",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 853,
		author: "Пешехонов",
		title: "Воспоминания о былом",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 854,
		author: "Сборник",
		title: "Поэзия 1917-1920 годов",
		section: "РЛ Ст",
		placed: "2-4-2",
		read: false
	},
	{
		id: 855,
		author: "Куприн",
		title: "Собрание сочинений. Том 1",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 856,
		author: "Мережковский",
		title: "Павел 1, Александр 1",
		section: "РЛ И",
		placed: "2-4-2",
		read: false
	},
	{
		id: 857,
		author: "Мережковский",
		title: "Воскресшие боги (Леонардо Да Винчи)",
		section: "РЛ И",
		placed: "2-4-2",
		read: false
	},
	{
		id: 858,
		author: "Тынянов",
		title: "Пушкин",
		section: "РЛ Био",
		placed: "2-4-2",
		read: false
	},
	{
		id: 859,
		author: "Булгаков",
		title: "Дьяволиада (повести и рассказы)",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 860,
		author: "Распутин",
		title: "Уроки французского (сборник)",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 861,
		author: "Тренев; Иванов",
		title: "Любовь Яровая; Бронепоизд 14-69",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 862,
		author: "Паустовский",
		title: "Судьба Шарля Лонсевиля",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 863,
		author: "Сборник",
		title: "Заветная лира",
		section: "РЛ Ст",
		placed: "2-4-2",
		read: false
	},
	{
		id: 864,
		author: "Булгаков",
		title: "Избранная проза",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 865,
		author: "Бунин",
		title: "Грамматика любви",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 866,
		author: "Бабель",
		title: "Избранное",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 867,
		author: "Астафьев",
		title: "Конь с розовой гривой",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 868,
		author: "Мережковский",
		title: "Смерть богов, Юлиан Отступник",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 869,
		author: "Гоголь",
		title: "Выбранные места из переписки с друзьями",
		section: "РЛ ",
		placed: "2-4-2",
		read: false
	},
	{
		id: 870,
		author: "Степанова. Шевеленко",
		title: "История Средних веков Хрестоматия. Том 1",
		section: "Пед Спец",
		placed: "2-3-1",
		read: false
	},
	{
		id: 871,
		author: "Степанова. Шевеленко",
		title: "История Средних веков Хрестоматия. Том 2",
		section: "Пед Спец",
		placed: "2-3-1",
		read: false
	},
	{
		id: 872,
		author: "Ведюшкин",
		title: "История Средних веков",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 873,
		author: "Огибалова. Донской",
		title: "История Средних веков.1989",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 874,
		author: "Огибалова. Донской",
		title: "История Средних веков.2000",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 875,
		author: "Огибалова. Донской",
		title: "История Средних веков.2016",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 876,
		author: "Преображенский. Рыбаков",
		title: "История отечества. 6 класс",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 877,
		author: "Данилов, Косулина",
		title: "История России. 6 класс",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 878,
		author: "Улунян. Сергеев",
		title: "Новейшая история зарубежных стран 11 класс",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 879,
		author: "Ворожейкина и др",
		title: "Рассказы по родной истории.  5 класс",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 880,
		author: "Аронов",
		title: "Мировая художественная культура. Россия 20век",
		section: "ИИ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 881,
		author: "Лебедева и др",
		title: "История отечества. 5 класс",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 882,
		author: " Орлов и др",
		title: "Хрестоматия по истории России",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 883,
		author: "Сахаров. Буганов",
		title: "История России с Древнейших времен до конца 17века",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 884,
		author: "Буганов. Зырянов",
		title: "История России  конец 17-19 век",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 885,
		author: "Данилов, Косулина",
		title: "История России. 6-7класс. Часть 2",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 886,
		author: "Кацва. Юрганов",
		title: "История России 8+15 века",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 887,
		author: "Двигалева",
		title: "Обществознание",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 888,
		author: "Боголюбов. Лазебникова",
		title: "Обществознание. 11 класс",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 889,
		author: "Козлова. Кутафин",
		title: "Конституционное право России",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 890,
		author: "Марченко",
		title: "Обществознание",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 891,
		author: "Чухман",
		title: "История России в схемах",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 892,
		author: "Шумилов",
		title: "История России 9-20 века",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 893,
		author: "Фроянова",
		title: "Культура русской речи",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 894,
		author: "Загладин",
		title: "Программа курса по истории России и мира",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 895,
		author: "Кравченко",
		title: "Задачник по обществознанию 10-11 кл.",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 896,
		author: "Зазнобина",
		title: "Становление Российского государства",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 897,
		author: "Волкова",
		title: "КИМ: История Нового времени 1800-1900",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 898,
		author: "",
		title: "Об основных гарантиях прав ребенка",
		section: "Н Спец",
		placed: "2-3-1",
		read: false
	},
	{
		id: 899,
		author: "",
		title: "Закон об образовании",
		section: "Н Спец",
		placed: "2-3-1",
		read: false
	},
	{
		id: 900,
		author: "",
		title: "Семейный кодекс",
		section: "Н Спец",
		placed: "2-3-1",
		read: false
	},
	{
		id: 901,
		author: "Данилов, Косулина",
		title: "Поурочные разработки История России 19 век",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 902,
		author: "Манаев",
		title: "Практикум для увеличения двигательной активности",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 903,
		author: "Баранов и др.",
		title: "Реформаторы и революционеры в истории России",
		section: "Пед Спец",
		placed: "2-3-1",
		read: false
	},
	{
		id: 904,
		author: "Флит",
		title: "Школа в России 19-20 вв",
		section: "Пед Спец",
		placed: "2-3-1",
		read: false
	},
	{
		id: 905,
		author: "Афанасьев",
		title: "Последний звонок",
		section: "Пед Хобби",
		placed: "2-3-1",
		read: false
	},
	{
		id: 906,
		author: "б/а",
		title: "Шпаргалка по наследственному праву",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 907,
		author: "Королева",
		title: "Экономика: проектирование курса.10-11 кл",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 908,
		author: "Кочергина",
		title: "Формирование политических и социальных компетенций",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 909,
		author: "Волкова",
		title: "КИМ: История Древнего мира",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 910,
		author: "Гринин",
		title: "История России. Ч.3",
		section: "И ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 911,
		author: "Морозова",
		title: "Защита прав человека в российском законодательстве",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 912,
		author: "Иванченко",
		title: "Французская грамматика",
		section: "Н Спец",
		placed: "2-3-1",
		read: false
	},
	{
		id: 913,
		author: "Исаченкова",
		title: "Сценарии литературных вечеров в школе",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 914,
		author: "Жукова",
		title: "Контрольные и проверочные работы по истории. 10-11 классы",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 915,
		author: "Жукова",
		title: "Контрольные и проверочные работы по истории. 5-9 классы",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 916,
		author: "Нянковский",
		title: "Неизвестное об известном",
		section: "Хобби ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 917,
		author: "Петрович. Петрович",
		title: "Уроки истории. 8 класс",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 918,
		author: "Данилов, Пыжиков",
		title: "История России. Доп. Материалы",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 919,
		author: "Спивак",
		title: "Как стать полиглотом",
		section: "Н Спец",
		placed: "2-3-1",
		read: false
	},
	{
		id: 920,
		author: "Кулаков, Тюляева",
		title: "На уроках истории: формирование ЗОЖ",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 921,
		author: "б/а",
		title: "Свет и тени российской короны",
		section: "И ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 922,
		author: "Пчелов",
		title: "История России 6кл.",
		section: "УЛ И",
		placed: "2-3-1",
		read: false
	},
	{
		id: 923,
		author: "Рыбаков, Сахаров",
		title: "История Отечества. 8-18 вв. 8 кл.",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 924,
		author: "Гринин",
		title: "История России. Ч.4",
		section: "И ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 925,
		author: "Лубченков, Михайлов",
		title: "История древнего мира - методичка",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 926,
		author: "Волкова",
		title: "КИМ: обществознание 5кл.",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 927,
		author: "Хорошенкова",
		title: "МХК. 11 кл. Поурочные планы. 11кл.",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 928,
		author: "Лупиков",
		title: "Игры на уроках истории",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 929,
		author: "Рябцева",
		title: "Диалог за партой",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 930,
		author: "Шоган и др.",
		title: "Уроки истори Древнего мира",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 931,
		author: "Яцук К.А.",
		title: "История Великобритании. 1-20 вв. Ч. 1",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 932,
		author: "Яцук К.А.",
		title: "История Великобритании. 19-20 вв. Ч. 2",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 933,
		author: "Кредер",
		title: "Новейшая история ХХ век",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 934,
		author: "б/а",
		title: "Государственный мемориальный музей обороны и блокады Ленинграда",
		section: "ИИ Пут",
		placed: "2-3-1",
		read: false
	},
	{
		id: 935,
		author: "Арутюнов, Джарылгасинова",
		title: "Япония: народ и культура",
		section: "И ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 936,
		author: "Ворожейкина и др",
		title: "Поурочные разработки. 5 кл.",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 937,
		author: "Данилов, Косулина",
		title: "Поурочные разработки 20 век",
		section: "Пед ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 938,
		author: "Хачатурян",
		title: "История мировых цивилизаций. 10-11 кл",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 939,
		author: "Левандовский. Щетинов",
		title: "Россия в 20 веке.10-11 кл",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 940,
		author: "Сорока-цюпа. Сорока-цюпа",
		title: "Всеобщая история. Новейшая история. 9кл",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 941,
		author: "Уткин",
		title: "История России 1945-2008. 11класс",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 942,
		author: "Боголюбов и др",
		title: "Человек и общество. 10кл",
		section: "УЛ ",
		placed: "--",
		read: false
	},
	{
		id: 943,
		author: "Боголюбов и др",
		title: "Человек и общество. 11кл",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 944,
		author: "Ким",
		title: "Япония: справочник",
		section: "Н Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 945,
		author: "Адамчик и др.",
		title: "Краткая история. Англия.",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 946,
		author: "Деревянко",
		title: "Ожившие древности",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 947,
		author: "Твардовский",
		title: "За далью-даль",
		section: "РЛ Ст",
		placed: "2-3-2",
		read: false
	},
	{
		id: 948,
		author: "Молева",
		title: "Никитин",
		section: "ИИ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 949,
		author: "Гузик. Кузьменко",
		title: "Культура Средневековья",
		section: "Пед Хобби",
		placed: "2-3-2",
		read: false
	},
	{
		id: 950,
		author: "Гузик",
		title: "Русская культура",
		section: "Пед Хобби",
		placed: "2-3-2",
		read: false
	},
	{
		id: 951,
		author: "Гузик",
		title: "Культура Древнего Востока",
		section: "Пед Хобби",
		placed: "2-3-2",
		read: false
	},
	{
		id: 952,
		author: "Борисова, Стрернин",
		title: "Русский модерн",
		section: "ИИ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 953,
		author: "Бабин",
		title: "Пабло Пикассо",
		section: "ИИ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 954,
		author: "Андроников",
		title: "Великая экстафета",
		section: "ИИ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 955,
		author: "Соболева",
		title: "Старинные гербы российских городов",
		section: "ИИ Спец",
		placed: "2-3-2",
		read: false
	},
	{
		id: 956,
		author: "Берджес",
		title: "Обучение как приключение",
		section: "Пед ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 957,
		author: "Сборник",
		title: "Прекрасен мир сегодня без войны",
		section: "РЛ Ст",
		placed: "2-3-2",
		read: false
	},
	{
		id: 958,
		author: "Кондратенко",
		title: "Русь",
		section: "ДЛ И",
		placed: "2-3-2",
		read: false
	},
	{
		id: 959,
		author: "Зеньковский",
		title: "История русской философии. Ч.1",
		section: "Н Фил",
		placed: "2-3-2",
		read: false
	},
	{
		id: 960,
		author: "Зеньковский",
		title: "История русской философии. Ч.2",
		section: "Н Фил",
		placed: "2-3-2",
		read: false
	},
	{
		id: 961,
		author: "Зеньковский",
		title: "История русской философии. Ч.3",
		section: "Н Фил",
		placed: "2-3-2",
		read: false
	},
	{
		id: 962,
		author: "Зеньковский",
		title: "История русской философии. Ч.4",
		section: "Н Фил",
		placed: "2-3-2",
		read: false
	},
	{
		id: 963,
		author: "Родригес и др.",
		title: "Новейшая история зарубежных стран 11 класс",
		section: "Пед Спец",
		placed: "2-3-2",
		read: false
	},
	{
		id: 964,
		author: "Барышникова",
		title: "Зарубежное искусство в кроссвордах",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 965,
		author: "Волкова",
		title: "КИМ: история России. 9 кл.",
		section: "Пед ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 966,
		author: "Глезеров",
		title: "Исторические районы",
		section: "ИИ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 967,
		author: "Нарочинский и др.",
		title: "Новая история 1640-1870",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 968,
		author: "Степанов",
		title: "Культурная жизнь Ленинграда 20-30 гг.",
		section: "ИИ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 969,
		author: "Петров ",
		title: "Идем по Русскому музею",
		section: "ИИ Пут",
		placed: "2-3-2",
		read: false
	},
	{
		id: 970,
		author: "Кравченко",
		title: "Обществознание 7 класс",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 971,
		author: "Кравченко",
		title: "Обществознание 8 класс",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 972,
		author: "Кравченко",
		title: "Обществознание 9 класс",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 973,
		author: "Кравченко",
		title: "Задачник по обществознанию 8-9 кл.",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 974,
		author: "Боханов",
		title: "История России. 19 век",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 975,
		author: "Федосов",
		title: "История СССР. 19 век.",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 976,
		author: "Кукушкин",
		title: "История СССР.20 век.",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 977,
		author: "Всемирный Следопыт",
		title: "Презренные гении. Япония.",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 978,
		author: "Всемирный Следопыт",
		title: "Путь Самурая",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 979,
		author: "Всемирный Следопыт",
		title: "Петр всея Руся",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 980,
		author: "Всемирный Следопыт",
		title: "Греция: венок Олимпионика",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 981,
		author: "Всемирный Следопыт",
		title: "Каменные гиганты планеты",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 982,
		author: "Всемирный Следопыт",
		title: "Африка. Великая миссия",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 983,
		author: "Всемирный Следопыт",
		title: "Италия: этрусская легенда",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 984,
		author: "Всемирный Следопыт",
		title: "Друиды: тайная власть",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 985,
		author: "Всемирный Следопыт",
		title: "Любовное зелье друидов",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 986,
		author: "Всемирный Следопыт",
		title: "Король среди рыцарей",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 987,
		author: "Всемирный Следопыт",
		title: "Волки Одина",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 988,
		author: "Всемирный Следопыт",
		title: "Тайны пирамид",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 989,
		author: "Всемирный Следопыт",
		title: "Победа в порту",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 990,
		author: "Всемирный Следопыт",
		title: "Древняя Русь. Трудный выбор",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 991,
		author: "Всемирный Следопыт",
		title: "Россия. Иоанн Грозный. Эпоха перемен",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 992,
		author: "Всемирный Следопыт",
		title: "Бразилия.",
		section: "И  Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 993,
		author: "Всемирный Следопыт",
		title: "Австрия. Прихоанализ для Фрейда",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 994,
		author: "Всемирный Следопыт",
		title: "Австрия. Неизвестный Моцарт",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 995,
		author: "Всемирный Следопыт",
		title: "Австрия, то что доктор прописал",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 996,
		author: "Всемирный Следопыт",
		title: "Англия. Лондон",
		section: "И  Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 997,
		author: "Всемирный Следопыт",
		title: "Англия. Дело Шерлока Холмса",
		section: "И  Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 998,
		author: "Всемирный Следопыт",
		title: "Болгария",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 999,
		author: "Всемирный Следопыт",
		title: "Великобритания",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1000,
		author: "Всемирный Следопыт",
		title: "Германия. Тень старого фрица",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1001,
		author: "Всемирный Следопыт",
		title: "Германия. Под редакцией Бисмарка",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1002,
		author: "Всемирный Следопыт",
		title: "Германия. Матч длинною в жизнь",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1003,
		author: "Всемирный Следопыт",
		title: "Голландия",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1004,
		author: "Всемирный Следопыт",
		title: "Греция ",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1005,
		author: "Всемирный Следопыт",
		title: "Египет. Преемник фараонов",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1006,
		author: "Всемирный Следопыт",
		title: "Египет. Наследство Рамсеса Великого",
		section: "И  Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1007,
		author: "Всемирный Следопыт",
		title: "Египет. Потомки фараонов",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1008,
		author: "Всемирный Следопыт",
		title: "Египет. Тайны Александра",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1009,
		author: "Всемирный Следопыт",
		title: "Испания. Трагедия Великого монарха",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1010,
		author: "Всемирный Следопыт",
		title: "Испания. Странности любви",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1011,
		author: "Всемирный Следопыт",
		title: "Испания. Треугольник Дали",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1012,
		author: "Всемирный Следопыт",
		title: "Индия",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1013,
		author: "Всемирный Следопыт",
		title: "Италия. Побег из Венеции",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1014,
		author: "Всемирный Следопыт",
		title: "Италия. Медичи",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1015,
		author: "Всемирный Следопыт",
		title: "Италия. Федерико Феллини",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1016,
		author: "Всемирный Следопыт",
		title: "Италия. Октавиан Август",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1017,
		author: "Всемирный Следопыт",
		title: "Испания. За легендами на Канарские острова",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1018,
		author: "Всемирный Следопыт",
		title: "Кипр. Остров в приданое",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1019,
		author: "Всемирный Следопыт",
		title: "Кипр. Великий аскет",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1020,
		author: "Всемирный Следопыт",
		title: "Китай. Утро первого дня",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1021,
		author: "Всемирный Следопыт",
		title: "Китай. Эпохи Конфуция",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1022,
		author: "Всемирный Следопыт",
		title: "Мальта",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1023,
		author: "Всемирный Следопыт",
		title: "Марокко",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1024,
		author: "Всемирный Следопыт",
		title: "Дания. Норвегия. Швеция",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1025,
		author: "Всемирный Следопыт",
		title: "Норвегия",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1026,
		author: "Всемирный Следопыт",
		title: "Португалия",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1027,
		author: "Всемирный Следопыт",
		title: "Россия ",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1028,
		author: "Всемирный Следопыт",
		title: "Таиланд. Сокровища Сима",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1029,
		author: "Всемирный Следопыт",
		title: "Таиланд. Секреты массажа",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1030,
		author: "Всемирный Следопыт",
		title: "Таиланд. Жертвы реки квай",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1031,
		author: "Всемирный Следопыт",
		title: "Тунис",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1032,
		author: "Всемирный Следопыт",
		title: "Турция. Османский султан",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1033,
		author: "Всемирный Следопыт",
		title: "Турция. Мечты и реальность",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1034,
		author: "Всемирный Следопыт",
		title: "Финляндия. Под музыку великого магистра",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1035,
		author: "Всемирный Следопыт",
		title: "Финляндия. Чужой среди своих",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1036,
		author: "Всемирный Следопыт",
		title: "Франция. Коко Шанель",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1037,
		author: "Всемирный Следопыт",
		title: "Франция. Дюма под прицелом",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1038,
		author: "Всемирный Следопыт",
		title: "Франция. Из Парижа с любовью",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1039,
		author: "Всемирный Следопыт",
		title: "Хорватия",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1040,
		author: "Всемирный Следопыт",
		title: "Чехия",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1041,
		author: "Всемирный Следопыт",
		title: "Шотландия",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1042,
		author: "Всемирный Следопыт",
		title: "Япония",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1043,
		author: "Чириков",
		title: "Русско-итальянский Итальянско-русский",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1044,
		author: "Бельфелдт",
		title: "Русско-немецкий словарь",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1045,
		author: "Ермакова",
		title: "Итальянский язык за 100 часов",
		section: "УЛ Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1046,
		author: "Китайгородская",
		title: "Французский язык",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1047,
		author: "Андреевская-Левенстерн, Полозова",
		title: "Учебник французского языка",
		section: "УЛ Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1048,
		author: "Арутюнова",
		title: "Педагогический фр.-рус. Словарь",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1049,
		author: "Утенко",
		title: "Цветы в букетах и композициях",
		section: "Хобби ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1050,
		author: "Гулемот",
		title: "Литература просвещения",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1051,
		author: "Строгонова",
		title: "Арт-терапия",
		section: "Н Псих",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1052,
		author: "Шахнович",
		title: "Приметы верные и суеверные",
		section: "Н Фолк",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1053,
		author: "Петушанская и др.",
		title: "Начальный курс фр. Языка",
		section: "УЛ Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1054,
		author: "Формановская, Красова",
		title: "Русско-итальянские соответствия",
		section: "УЛ Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1055,
		author: "Афанасьева, Бужинский",
		title: "Голубая роза",
		section: "ДЛ Фолк",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1056,
		author: "Маркс Х.",
		title: "Обзор дрезденской галереи",
		section: "ИИ Пут",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1057,
		author: "Стрейффер",
		title: "Санкт-Петербург",
		section: "ИИ Пут",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1058,
		author: "Алиева",
		title: "Французский язык",
		section: "УЛ ДЛ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1059,
		author: "Воронцова",
		title: "Устные темы на фр.языке",
		section: "УЛ Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1060,
		author: "Воронцова",
		title: "Грамматика фр.языка",
		section: "УЛ Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1061,
		author: "Воронихина",
		title: "Государственный Эрмитаж",
		section: "ИИ Пут",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1062,
		author: "Сборник",
		title: "Иллюстрированная история России в портретах",
		section: "И ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1063,
		author: "Поплавский",
		title: "Собинов в Петербурге-Петрограде-Ленинграде",
		section: "ИИ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1064,
		author: "Кучумов",
		title: "Павловск",
		section: "ИИ Пут",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1065,
		author: "Федин",
		title: "Города и года",
		section: "РЛ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1066,
		author: "Красова, Дзаппи",
		title: "Итальянско-русский словарь",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1067,
		author: "Маршак",
		title: "Сатирические стихи",
		section: "РЛ Ст",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1068,
		author: "Бастарева, Сидорова",
		title: "Петропавловская крепость",
		section: "ИИ Пут",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1069,
		author: "Прошин",
		title: "Казанский собор",
		section: "ИИ Пут",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1070,
		author: "Мурадова",
		title: "Грамматика фр.языка",
		section: "УЛ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1071,
		author: "Цетлин",
		title: "Словарь наиболее употребительный слов фл.языка",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1072,
		author: "Долгополова",
		title: "Русско-французский словарь",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1073,
		author: "Барихновская",
		title: "Международные документы по правам человека",
		section: "УЛ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1074,
		author: "Морозова, Элиасберг",
		title: "О самом главном",
		section: "УЛ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1075,
		author: "Лафонтен",
		title: "Басни",
		section: "ЗЛ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1076,
		author: "Лисл",
		title: "Варварская поэма",
		section: "ЗЛ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1077,
		author: "Потоцкие",
		title: "Русско-французский словарь",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1078,
		author: "Мелентьев",
		title: "Кутузов в Петербурге",
		section: "И ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1079,
		author: "Павловский",
		title: "Анна Ахматова",
		section: "РЛ Био",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1080,
		author: "Орлов",
		title: "Поэт и город. Блок",
		section: "РЛ Био",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1081,
		author: "Нестерова",
		title: "Русское искусство 11-19 вв",
		section: "ИИ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1082,
		author: "Жюллиан",
		title: "Эжен Делакруа",
		section: "ИИ Био",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1083,
		author: "Береговская",
		title: "Синяя птица. 5 класс. Тетрадь",
		section: "УЛ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1084,
		author: "Иезуитова, Левкович",
		title: "Пушкин в Петербурге",
		section: "РЛ Био",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1085,
		author: "Дубровина",
		title: "Образ Петербурга в поэзии",
		section: "РЛ Ст",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1086,
		author: "Маркс К.",
		title: "Капитал .Том 1",
		section: "Фил ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1087,
		author: "Маркс К.",
		title: "Капитал .Том 2",
		section: "Фил ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1088,
		author: "Маркс К.",
		title: "Капитал .Том 3 Часть 1",
		section: "Фил ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1089,
		author: "Маркс К.",
		title: "Капитал .Том 3 Часть 2",
		section: "Фил ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1090,
		author: "Розенберг",
		title: "Комментарии к Капиталу К.Маркса",
		section: "Фил ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1091,
		author: "Дени Дидро",
		title: "Монахиня. Плямянник Рамо. Жак-фаталист и его хозяин",
		section: "Фил ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1092,
		author: "Гулыга",
		title: "Гегель",
		section: "Фил Био",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1093,
		author: "Буткова",
		title: "Живописный Санкт-Петербург",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1094,
		author: "Чижова",
		title: "Души волшебное светило…",
		section: "И Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1095,
		author: "Яковлева",
		title: "Крамской",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1096,
		author: "Хазанович",
		title: "Геологические памятники Ленинградской области",
		section: "ИИ Спец",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1097,
		author: "Кудрявцева",
		title: "Куинджи",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1098,
		author: " Саркисьян, Ставницер",
		title: "Улицы рассказвают. Одесса.",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1099,
		author: "Потоцкие",
		title: "Французско-русский словарь",
		section: "Н Спец",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1100,
		author: "Пастернак",
		title: "Поэмы",
		section: "РЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1101,
		author: "Олеша",
		title: "Пьесы",
		section: "РЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1102,
		author: "Блок",
		title: "Стихотворения и поэмы",
		section: "РЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1103,
		author: "Лисаевич",
		title: "Доменико Трезини",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1104,
		author: "Раскин",
		title: "Петродворец",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1105,
		author: "Грицай",
		title: "Фламандская живопись 17 вера. Эрмитаж",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1106,
		author: "Перкаль",
		title: "Герцен в Петербурге",
		section: "И Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1107,
		author: "Платонов",
		title: "Иван Посошков",
		section: "Н Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1108,
		author: "Валерьевна и др.",
		title: "Итальянско-русский разговорник",
		section: "Н Спец",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1109,
		author: "Хармс",
		title: "Пейте уксус, господа…",
		section: "РЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1110,
		author: "Степанов",
		title: "У истоков культурной революции",
		section: "ИИ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1111,
		author: "Сборник",
		title: "Антология поэзии пушкинской поры. Кн.2",
		section: "РЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1112,
		author: "Сборник",
		title: "Русские поэты серебрянного века Т.1",
		section: "РЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1113,
		author: "Сборник",
		title: "Русские поэты серебрянного века Т.2",
		section: "РЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1114,
		author: "Хентова",
		title: "Шостакович в Петрограде-Ленинграде",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1115,
		author: "Селизарова",
		title: "Петров-Водкин в Петербурге-Петрограде-Ленинграде",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1116,
		author: "Лисовский",
		title: "Академия художеств",
		section: "ИИ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1117,
		author: "Хармс",
		title: "Полёт в небеса",
		section: "РЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1118,
		author: "Дудин",
		title: "Грешные рифмы",
		section: "РЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1119,
		author: "Колосков",
		title: "Ленинские места на Карельском перешейке",
		section: "И Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1120,
		author: "Ена, Твердохлебов, Шантырь",
		title: "Южный берег Крыма",
		section: "И Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1121,
		author: "Родникова",
		title: "Живопись древнего Пскова",
		section: "ИИ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1122,
		author: "Конисская",
		title: "Чайковский в Петербурге",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1123,
		author: "Орлова",
		title: "Мусоргский в Петербурге",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1124,
		author: "Саруханян",
		title: "Достоевский в Петербурге",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1125,
		author: "Золина, Леонтьев",
		title: "Добролюбов в Петербурге",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1126,
		author: "Лихоткин",
		title: "Ломоносов в Петербурге",
		section: "Н Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1127,
		author: "Валицкая",
		title: "Кипренский в Петербурге",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1128,
		author: "Северянин",
		title: "Лирика",
		section: "РЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1129,
		author: "Эразм Роттердамский",
		title: "Похвола Глупости",
		section: "ЗЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1130,
		author: "Джусти",
		title: "Шутки",
		section: "ЗЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1131,
		author: "Сборник",
		title: "Страницы европейской поэзии. ХХ век.",
		section: "ЗЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1132,
		author: "Блейк",
		title: "Избранное",
		section: "ЗЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1133,
		author: "Кшижановский",
		title: "Гданьск",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1134,
		author: "Славина",
		title: "Тон",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1135,
		author: "Калязина",
		title: "Меншиковский дворец-музей",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1136,
		author: "Сборник",
		title: "История цветов. Корейская проза",
		section: "ЗЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1137,
		author: "Абеляшева",
		title: "Фонтебло. ВО-ле-Виконт. Версаль",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1138,
		author: "Чуднова",
		title: "Лесков в Петербурге",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1139,
		author: "Прибульская",
		title: "Репин в Петербурге",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1140,
		author: "Чугунов",
		title: "Город Пушкин",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1141,
		author: "Славина",
		title: "Щуко",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1142,
		author: "Эсхил, Софокл. Еврепид",
		title: "Древнегреческая трагедия",
		section: "ЗЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1143,
		author: "Суздалева",
		title: "Троцкий",
		section: "И Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1144,
		author: "Гете",
		title: "Лирика",
		section: "ЗЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1145,
		author: "Джойс",
		title: "Стихотворения",
		section: "ЗЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1146,
		author: "Андреева и др.",
		title: "По Ленинградской области",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1147,
		author: "Голдовский, Знаменов",
		title: "Дворец Монплезир",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1148,
		author: "Чеснокова",
		title: "Невский проспект",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1149,
		author: "Васильев",
		title: "Аничков мост",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1150,
		author: "Сашонко",
		title: "Адмиралтейство",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1151,
		author: "Богданов",
		title: "Гостиный Двор",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1152,
		author: "Бутромеев",
		title: "Раннее Средневековье",
		section: "ДЛ И",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1153,
		author: "Литтелл",
		title: "Современная мировая история",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1154,
		author: "Литтелл",
		title: "Мировая история",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1155,
		author: "Паасилинна",
		title: "Иллюстрированная история",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1156,
		author: "Невский альманох",
		title: "№2, 2006 год",
		section: "РЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1157,
		author: "Погодина",
		title: "Твой Петербург. Рабочая тетрадь №1",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1158,
		author: "Погодина",
		title: "Твой Петербург. Рабочая тетрадь №4",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1159,
		author: "Погодина",
		title: "Твой Петербург. Рабочая тетрадь №3",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1160,
		author: "Векслер",
		title: "Тетрадь по истории города №1",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1161,
		author: "Векслер",
		title: "Тетрадь по истории города №2",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1162,
		author: "Векслер",
		title: "Тетрадь по истории города №3",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1163,
		author: "Аксельрод",
		title: "Контурные карты по СПб",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1164,
		author: "Ермолаева и др",
		title: "Тетрадь СПб. 18 век",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1165,
		author: "Ермолаева и др",
		title: "От берегов загадочного Нила…",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1166,
		author: "Ермолаева и др",
		title: "Страницы жизни края. Начало",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1167,
		author: "Ермолаева и др",
		title: "Страницы жизни края. 18 век",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1168,
		author: "Моррис",
		title: "Начало истории",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1169,
		author: "Моррис",
		title: "Месопотамия и Библейский мир",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1170,
		author: "Моррис",
		title: "Древняя Азия",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1171,
		author: "Моррис",
		title: "За пределами Европы",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1172,
		author: "Аллен",
		title: "Древний Рим",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1173,
		author: "Коннолли",
		title: "Древняя Америка",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1174,
		author: "Грант",
		title: "Древний Египет и Древняя Греция",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1175,
		author: "Коваль, Холин",
		title: "Дух воина. Дзен.",
		section: "И Рел",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1176,
		author: "Уилкинсон",
		title: "Здание",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1177,
		author: "Лэнгли",
		title: "Религия",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1178,
		author: "Сборник",
		title: "Богатыри и витязи русской земли.",
		section: "РЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1179,
		author: "Савельев",
		title: "Полная энциклопедия Фэн-шуй",
		section: "Хобби ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1180,
		author: "Сборник",
		title: "Древнее зеркало. Китай",
		section: "ЗЛ Ск",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1181,
		author: "Кадрон, Чайлдс",
		title: "Раскрашиваем лицо",
		section: "ДЛ Хобби",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1182,
		author: "Салариа, Сэниор",
		title: "Медицина",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1183,
		author: "Пушкин",
		title: "Сказки",
		section: "ДЛ Ск",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1184,
		author: "Берзилин",
		title: "Путешествие с домашними растениями",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1185,
		author: "Нортон",
		title: "Великанов больше  нет?",
		section: "ДЛ Фэн",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1186,
		author: "Нортон",
		title: "Метла и костер",
		section: "ДЛ Фэн",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1187,
		author: "Нортон",
		title: "Метла и металический шарик",
		section: "ДЛ Фэн",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1188,
		author: "Яковлев Л.",
		title: "Царство людей",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1189,
		author: "Крючкова",
		title: "Предания и мифы древней Японии",
		section: "ДЛ Фолк",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1190,
		author: "Яковлев Ю.",
		title: "Девочки с Васильевского острова",
		section: "ДЛ И",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1191,
		author: "Жданова",
		title: "Мир и человек. Географический атлас 1988",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1192,
		author: "Сборник",
		title: "Кобланды: казахский героический эпос",
		section: "ДЛ Фолк",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1193,
		author: "Костюков, Сурова",
		title: "Космос",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1194,
		author: "Майков",
		title: "История 5 кл",
		section: "УЛ И",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1195,
		author: "Запорожец",
		title: "Книга для чтения по истори  ср.веков",
		section: "Пед Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1196,
		author: "Преображенский ",
		title: "История Отечества.  7 кл.",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1197,
		author: "Береговская",
		title: "Синяя птица. 5 класс.  Учебник",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1198,
		author: "Чистякова",
		title: "Французский язык. Учебник 3 кл.",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1199,
		author: "Данилов и др.",
		title: "История России 6 кл.",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1200,
		author: "Сухов и др.",
		title: "Дидактические материалы. 5-6 кл.",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1201,
		author: "Гульянц, Базик",
		title: "Что можно сделать из природного материала",
		section: "ДЛ Хобби",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1202,
		author: "Полякова, Элиасберг",
		title: "Гуманистические ценности европейских цивилизаций. Проблемы современного мира",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1203,
		author: "Волобуев и др",
		title: "История. Россия и мир. 11 класс",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1204,
		author: "Немеров",
		title: "Вашингтон",
		section: "ИИ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1205,
		author: "Юдовская. Баранов. Ванюшкина",
		title: "История Нового времени. 7 класс",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1206,
		author: "Карелин",
		title: "Смертная казнь",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1207,
		author: "Черкашина",
		title: "Активация познавательной деятельности учащихся",
		section: "Пед Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1208,
		author: "Рифкин",
		title: "Самоанализ образовательного процесса",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1209,
		author: "Зверева",
		title: "Вопросы и задания олимпианого тура по истории",
		section: " ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1210,
		author: "Грибов",
		title: "Дидактические материалы по истории Нового времени",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1211,
		author: "Пчелов",
		title: "Государственные символы России",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1212,
		author: "Волобуев и др",
		title: "История. Россия и мир. 10 класс",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1213,
		author: "Селенский",
		title: "У реки, у моря. Астрахань",
		section: "ИИ Пут",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1214,
		author: "Данилов, Косулина",
		title: "История Росии 7 кл.",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1215,
		author: "Тютюнникова",
		title: "Как создать концерн умников",
		section: "Псих ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1216,
		author: "Чуракова",
		title: "Внутренняя система оценки качество образования",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1217,
		author: "Лизинский",
		title: "О методической работе в школе",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1218,
		author: "Лупоядов",
		title: "Исторические термины и понятия",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1219,
		author: "Эжен Сю",
		title: "Парижские тайны",
		section: "ЗЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1220,
		author: "Макарова, Макаров",
		title: "Организация деятельности методического объединения в школе",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1221,
		author: "Гринин, Перепелкина",
		title: "Справочник руководителя МО",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1222,
		author: "Усманов",
		title: "История Франции с древнейших времен до 1789",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1223,
		author: "Усманов",
		title: "История Франции с 1789 до конца 19 века",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1224,
		author: "Северина",
		title: "Проектная деятельность учащихся: обществознание",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1225,
		author: "Пономарев",
		title: "Всеобщая история.10 класс. Раб.тетрадь",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1226,
		author: "Медведевы",
		title: "Нобелевские Лауреаты России",
		section: "И Био",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1227,
		author: "Синельникова",
		title: "История Англии. Англо-саксонские королевства",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1228,
		author: "Катенин, Зимина",
		title: "История Англии. Становление империи",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1229,
		author: "Синельникова",
		title: "Короли и королевы",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1230,
		author: "Катенин, Зимина",
		title: "Рассказы об Англии для детей",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1231,
		author: "Голицинский",
		title: "США",
		section: "И Стр",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1232,
		author: "Голицинский",
		title: "Великобритания",
		section: "И Стр",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1233,
		author: "Эккерсли",
		title: "Английский для всех Ч.1",
		section: "Н Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1234,
		author: "Эккерсли",
		title: "Английский для всех Ч.2",
		section: "Н Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1235,
		author: "Эккерсли",
		title: "Английский для всех Ч.3",
		section: "Н Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1236,
		author: "Эккерсли",
		title: "Английский для всех Ч.4",
		section: "Н Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1237,
		author: "Кенель, Клод",
		title: "Иллюстрированный словарь для юных европейцев",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1238,
		author: "Мари-Элл Кол",
		title: "Дошкольное творчество",
		section: "ДЛ Хобби",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1239,
		author: "Мари-Элл Кол",
		title: "110 творческих заданий для детей по лепке",
		section: "ДЛ Хобби",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1240,
		author: "Мари-Элл Кол",
		title: "200 увлекательных проектов для детей",
		section: "ДЛ Хобби",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1241,
		author: "Мари-Элл Кол",
		title: "Наука через искусство",
		section: "ДЛ Хобби",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1242,
		author: "Мари-Элл Кол",
		title: "110 креативных заданий. Я - великий художник",
		section: "ДЛ Хобби",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1243,
		author: "Сборник",
		title: "Весна",
		section: "ДЛ Ст",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1244,
		author: "Лапатухин и др",
		title: "Школьный толковый словарь русского языка",
		section: "Н Спец",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1245,
		author: "Платонов",
		title: "Иван Бесталанный и Елене Примудрая",
		section: "РЛ Ск",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1246,
		author: "Зверев",
		title: "На новом месте",
		section: "ДЛ Спец",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1247,
		author: "Данилов и др",
		title: "Россия с древнейших времен до конца 16 века. Тетрадь-тренажер",
		section: "И ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1248,
		author: "Вильчинский",
		title: "Учитесь рисовать",
		section: "ИИ Хобби",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1249,
		author: "Сборник",
		title: "Волшебные сказки Англии",
		section: "ЗЛ Ск",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1250,
		author: "Сборник",
		title: "Волшебные сказки Туркмении",
		section: "ЗЛ Ск",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1251,
		author: "Сборник",
		title: "Волшебные сказки Италии",
		section: "ЗЛ Ск",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1252,
		author: "Братья Гримм",
		title: "Госпожа метелица",
		section: "ЗЛ Ск",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1253,
		author: "б/а",
		title: "Гадание по книге перемен",
		section: " Хобби",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1254,
		author: "Страуструп",
		title: "Програмирование. С++",
		section: "Н Спец",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1255,
		author: "Шанаева",
		title: "Краткая грамматика английского языка в таблицах и схемах",
		section: "Н Спец",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1256,
		author: "Кушнир",
		title: "Мехенди",
		section: " Хобби",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1257,
		author: "Пазин",
		title: "История. Подготовка к ЭГЕ",
		section: "Пед И",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1258,
		author: "Толкин",
		title: "Хоббит или Туда и обратно",
		section: "Фэн ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1259,
		author: "Толкин",
		title: "Властелин конец. Братство кольца",
		section: "Фэн ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1260,
		author: "Толкин",
		title: "Властелин конец. Две крепости",
		section: "Фэн ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1261,
		author: "Толкин",
		title: "Властелин конец. Возвращение короля",
		section: "Фэн ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1262,
		author: "Толкин",
		title: "Сильмариллион",
		section: "Фэн ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1263,
		author: "Толкин, Гордэр",
		title: "Сказки",
		section: "ЗЛ Ск",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1264,
		author: "Блэйз",
		title: "История в костюмах",
		section: "ИИ ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1265,
		author: "Головнин",
		title: "Учебник японского языка для продолжающих. Часть 1",
		section: "УЛ ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1266,
		author: "Головнин",
		title: "Учебник японского языка для продолжающих. Часть 2",
		section: "УЛ ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1267,
		author: "Головнин",
		title: "Учебник японского языка для начинающих",
		section: "УЛ ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1268,
		author: "Аракин и др",
		title: "Англо-руский словарь",
		section: "Н Спец",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1269,
		author: "Бункин и др",
		title: "Англо-руский словарь",
		section: "Н Спец",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1270,
		author: "Ледо",
		title: "Тайна характера.  Черты характера по лицу",
		section: "Псих Хобби",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1271,
		author: "Ледо",
		title: "Тайна характера. Психологические типы",
		section: "Псих Хобби",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1272,
		author: "Блуэр",
		title: "Волшебные сказки Швеции",
		section: "ЗЛ Ск",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1273,
		author: "Петрова",
		title: "Словарь иностранных слов",
		section: "Н Спец",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1274,
		author: "Былинский, Никольский",
		title: "Справочник по орфографии и пунктуации",
		section: "Н Спец",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1275,
		author: "Яковлев, Костров",
		title: "Шахматный задачник",
		section: " Хобби",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1276,
		author: "Белова",
		title: "История искусств",
		section: "УЛ ИИ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1277,
		author: "Хоруженко",
		title: "Схемы. МХК",
		section: "ИИ ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1278,
		author: "Лисичкина",
		title: "МХК. Часть 2. Книга 1",
		section: "ИИ ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1279,
		author: "Платонова, Синюков",
		title: "Энциклопедический словарь юного художника",
		section: "ИИ ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1280,
		author: "Вячьянц",
		title: "Вариации прекрасного. МХК (рабочая тетрадь)",
		section: "ИИ ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1281,
		author: "Балакина",
		title: "МХК. Россия 9-19 век",
		section: "ИИ ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1282,
		author: "Васильева и др",
		title: "МХК",
		section: "ИИ ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1283,
		author: "Гоголев",
		title: "МХК. Западная Европа и Ближний Восток",
		section: "ИИ ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1284,
		author: "Ридделл",
		title: "Рисуй каждый день",
		section: " Хобби",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1285,
		author: "Дивненко",
		title: "Эстетика",
		section: "ИИ ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1286,
		author: "Мурашева",
		title: "Ваш непонятный ребенок",
		section: "Псих ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1287,
		author: "Дэ Невраль",
		title: "Дочери огня",
		section: "ЗЛ Мист",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1288,
		author: "Муравьев, Сахаров",
		title: "Очерки истории русской культуры. 9-17 век",
		section: "ИИ ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1289,
		author: "Рябцев",
		title: "История русской культуры 11-17 веков",
		section: "ИИ ",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1290,
		author: "Де Невраль",
		title: "Мистические фрагменты",
		section: "ЗЛ Мист",
		placed: "3-1-1",
		read: false
	},
	{
		id: 1291,
		author: "Кэрролл",
		title: "Алиса в зазеркалье",
		section: "ЗЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1292,
		author: "Макквини",
		title: "Драконы",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1293,
		author: "Кэрролл",
		title: "Алиса в стране Чудес",
		section: "ЗЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1294,
		author: "Конан Дойл",
		title: "Приключения Шерлока Холмса",
		section: "ЗЛ Дет",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1295,
		author: "б/а",
		title: "Пиратология",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1296,
		author: "Брагин",
		title: "В грозную пору (1812 г)",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1297,
		author: "Уолкер",
		title: "Тело человека. Книга-панорама",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1298,
		author: "Голявкин",
		title: "Карусель в голове",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1299,
		author: "Наумовец",
		title: "Рыцари (интерактив)",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1300,
		author: "Жуковский",
		title: "Баллады",
		section: "РЛ Ст",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1301,
		author: "Мень",
		title: "Сказка о происхождение человека",
		section: "ДЛ Рел",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1302,
		author: "Мохов, Симахин",
		title: "Домашняя лаборатория",
		section: "ДЛ Хобби",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1303,
		author: "Шестакова и др",
		title: "Мой первый атлас мира ( с наклейками)",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1304,
		author: "Сборник",
		title: "Первоклассные истории",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1305,
		author: "Букатин, Лукашин",
		title: "Я люблю играть в хоккей",
		section: "ДЛ Спорт",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1306,
		author: "Быкова, Донскова",
		title: "Шахматы для малышей",
		section: "ДЛ Хобби",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1307,
		author: "Житков",
		title: "Черные паруса",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1308,
		author: "Сахарнов",
		title: "Как открывали землю",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1309,
		author: "Георгиев",
		title: "Укротитель сиреневых бегемотов",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1310,
		author: "Аниашвили",
		title: "Опыты и эксперименты",
		section: "ДЛ Хобби",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1311,
		author: "Лингрен",
		title: "Гордая юная девица улетает далеко-далеко; Красивый, умный и в меру упитаный",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1312,
		author: "Белых, Пантелеев",
		title: "Республика Шкид",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1313,
		author: "Иванова",
		title: "Знаменитые города мира",
		section: " Стр",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1314,
		author: "Твен",
		title: "Приключения Тома Сойера",
		section: "ДЛ Пр",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1315,
		author: "Сборник",
		title: "Турецкие народные сказки",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1316,
		author: "Гришин",
		title: "Малыши играют в шахматы",
		section: "Пед Спец",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1317,
		author: "Абрамова",
		title: "Астрономия",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1318,
		author: "Зубкова",
		title: "Тайны кипящей кастрюли",
		section: "ДЛ Хобби",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1319,
		author: "Макдональд",
		title: "Принцесса и гоблин",
		section: "ЗЛ ДЛ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1320,
		author: "Зубкова",
		title: "Вкусная наука",
		section: "ДЛ Хобби",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1321,
		author: "Шапиро",
		title: "секреты знакомых предметов. Свеча",
		section: "ДЛ Хобби",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1322,
		author: "Харрис",
		title: "Сказки дядюшки Римуса",
		section: "ЗЛ Ск",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1323,
		author: "Осеева",
		title: "Синие листья",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1324,
		author: "Левин и др",
		title: "Чудаки",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1325,
		author: "Топелиус",
		title: "Звездогласка",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1326,
		author: "Платонов",
		title: "Рассказы. Сказки",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1327,
		author: "Ганкнус",
		title: "Азбука вежливости",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1328,
		author: "б/а",
		title: "Баллада о Робин Гуде",
		section: "ЗЛ Фолк",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1329,
		author: "Шапиро",
		title: "секреты знакомых предметов. Гвоздь",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1330,
		author: "Сборник",
		title: "Сказки народов Латинской Америки",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1331,
		author: "Сборник",
		title: "Бразильские сказки и легенды. Часть 1",
		section: "ЗЛ Фолк",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1332,
		author: "Дуров",
		title: "Мои звери",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1333,
		author: "Сборник",
		title: "Любимые волшебные сказки",
		section: "ДЛ Ск",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1334,
		author: "Визаулин",
		title: "Космос",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1335,
		author: "Распе",
		title: "Приключения бароно Мюнхаузена",
		section: "ЗЛ Пр",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1336,
		author: "Шергин",
		title: "Илья Муромец",
		section: "ДЛ Ск",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1337,
		author: "б/а",
		title: "Мир и человек. Географический атлас 2013",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1338,
		author: "Третьяк",
		title: "Трус не играет в хоккей",
		section: "ДЛ Био",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1339,
		author: "Серова",
		title: "Подскажи словечко",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1340,
		author: "Блок",
		title: "Зайчик",
		section: "ДЛ Ст",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1341,
		author: "Де Прессенсэ",
		title: "Микроб Нафталин",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1342,
		author: "б/а",
		title: "Твой рыцарский замок",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1343,
		author: "Дикси",
		title: "Смотри - динозавры!",
		section: "ДЛ Спец",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1344,
		author: "б/а",
		title: "Играйте в мини-футбол!",
		section: " Спорт",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1345,
		author: "б/а",
		title: "Мой атлас мира",
		section: "ДЛ Спец",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1346,
		author: "Голдсмит, Майк",
		title: "Эта книга думает, что ты математик",
		section: "ДЛ Н",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1347,
		author: "Комиссаров, Кирдяева",
		title: "Звездный английский. Сборник упражнений 5 класс",
		section: "УЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1348,
		author: "Хармс",
		title: "Очень страшная история",
		section: "РЛ ДЛ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1349,
		author: "Захадер",
		title: "Шумелки",
		section: "ДЛ Ст",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1350,
		author: "Борисов",
		title: "Олимпийский калейдоскоп",
		section: "ДЛ Спорт",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1351,
		author: "Носов",
		title: "Федина задачи",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1352,
		author: "б/а",
		title: "Твой пиратский корабль",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1353,
		author: "Перро",
		title: "Волшебные сказки",
		section: "ЗЛ Ск",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1354,
		author: "Горький",
		title: "Рассказы и сказки",
		section: "РЛ ДЛ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1355,
		author: "Сборник",
		title: "Сказки для мальчиков",
		section: "ДЛ Ск",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1356,
		author: "Аким",
		title: "Учитель Так-Так и его волшебная школа",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1357,
		author: "Ефимовский",
		title: "Азбука природы 2",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1358,
		author: "Горецкий и др",
		title: "Азбука",
		section: "УЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1359,
		author: "Назаров",
		title: "Спутник букваря",
		section: "УЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1360,
		author: "Горбушина",
		title: "Азбука 1973 год",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1361,
		author: "Новицкас",
		title: "Декабристы",
		section: "ДЛ И",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1362,
		author: "Сборник",
		title: "Восточно-славянские волшебные сказки",
		section: "РЛ Ск",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1363,
		author: "Роддари",
		title: "Фантазии и сказки",
		section: "ЗЛ Ск",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1364,
		author: "Сборник",
		title: "Заморские сказки",
		section: "ЗЛ Ск",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1365,
		author: "Буссена",
		title: "Приключения в стране львов",
		section: "ЗЛ Пр",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1366,
		author: "Горев, Утемов",
		title: "Творческие прогулки под звездами",
		section: "ДЛ Н",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1367,
		author: "Сборник",
		title: "Школные прикольные истории",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1368,
		author: "Пивоварова",
		title: "Рассказы Люси Синициной",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1369,
		author: "Дойл",
		title: "Рассказы о Шерлоке Холмсе",
		section: "ДЛ ",
		placed: "3-1-2",
		read: false
	},
	{
		id: 1370,
		author: "б/а",
		title: "Чудеса со всего света",
		section: "ДЛ Хобби",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1371,
		author: "Ефишов",
		title: "Таинственные страницы",
		section: "Н Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1372,
		author: "Бабиченко",
		title: "Искусство мультипликации",
		section: "ИИ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1373,
		author: "Шклярова",
		title: "Сборник упражнений по русскому языку",
		section: "УЛ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1374,
		author: "Литвак",
		title: "Формула призванья",
		section: "Псих ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1375,
		author: "Кристи",
		title: "Загадка Ситтафорда",
		section: "ЗЛ Дет",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1376,
		author: "Ильинская",
		title: "Легенды и археология",
		section: "Н Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1377,
		author: "Уайт",
		title: "Изучаем науку с помощью бумаги",
		section: "ДЛ Н",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1378,
		author: "Даниельсон",
		title: "Позабытые острова",
		section: " Пр",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1379,
		author: "Игнатьев",
		title: "В царстве смекалки",
		section: "Н Хобби",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1380,
		author: "Смаллиан",
		title: "Принцесса или тигр",
		section: "Н Хобби",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1381,
		author: "Левшин",
		title: "В поиски похищеной марки",
		section: "Н Хобби",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1382,
		author: "Белютин",
		title: "Начальные сведения о рисунке",
		section: "ИИ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1383,
		author: "Перепелкина",
		title: "Рисунок",
		section: "ИИ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1384,
		author: "Анисимов",
		title: "Основа рисования",
		section: "ИИ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1385,
		author: "Павлинов",
		title: "Каждый может научиться рисовать",
		section: "УЛ ИИ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1386,
		author: "Шматова",
		title: "Самоучитель по рисованию фломастерами и цветными карандашами",
		section: "ИИ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1387,
		author: "Тимохович",
		title: "Как быстро нарисовать сказку",
		section: "УЛ ИИ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1388,
		author: "б/а",
		title: "Рисунок углем",
		section: "УЛ ИИ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1389,
		author: "Линицкий",
		title: "Рисуем человечков",
		section: "ДЛ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1390,
		author: "Палмер",
		title: "Рисуем пейзажи акварелью",
		section: "УЛ ИИ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1391,
		author: "Спикман",
		title: "Городской пейзаж",
		section: "УЛ ИИ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1392,
		author: "Шматова",
		title: "Самоучитель по рисованию гуашью",
		section: "УЛ ИИ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1393,
		author: "Вагнер-Вебер",
		title: "Моя первая школа рисования",
		section: "УЛ ИИ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1394,
		author: "Кирцер",
		title: "Рисунок и живопись",
		section: "ИИ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1395,
		author: "б/а",
		title: "Мир животных. Наклейки 1",
		section: "ДЛ Н",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1396,
		author: "б/а",
		title: "Мир животных. Наклейки 2",
		section: "ДЛ Н",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1397,
		author: "Гардиенко",
		title: "Шестиструнная гитара (ноты)",
		section: "УЛ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1398,
		author: "Иаддадэн",
		title: "В каком мире мы будем жить завтра",
		section: "ДЛ Н",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1399,
		author: "б/а",
		title: "Солнечная система",
		section: "ДЛ Н",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1400,
		author: "Ботякова",
		title: "Атлас народов России",
		section: "ДЛ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1401,
		author: "Патаки",
		title: "Мосты Петербурга",
		section: "ДЛ ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1402,
		author: "Арсеньева",
		title: "Васильевский чудо-остров",
		section: "ДЛ ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1403,
		author: "Арсеньева",
		title: "Пешком по Невскому",
		section: "ДЛ ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1404,
		author: "Крауз",
		title: "Где шлем красного рыцаря?",
		section: "ДЛ Хобби",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1405,
		author: "Хамм",
		title: "Как рисовать комические персонажи",
		section: "УЛ ИИ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1406,
		author: "б/а",
		title: "Рисовать - это просто",
		section: "УЛ ИИ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1407,
		author: "Стил",
		title: "Викинги и пираты",
		section: "ДЛ Хобби",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1408,
		author: "Тейлор, Доусвелл",
		title: "Рыцари, ведьмы и колдуны",
		section: "ДЛ Хобби",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1409,
		author: "Петрова и др",
		title: "Анатомия",
		section: "ДЛ Н",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1410,
		author: "Аверьянов",
		title: "Космос",
		section: "ДЛ Н",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1411,
		author: "Аверьянов",
		title: "Диназавры",
		section: "ДЛ Н",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1412,
		author: "б/а",
		title: "Как устроен человек",
		section: "ДЛ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1413,
		author: "Чупина",
		title: "Физика и химия вокруг нас",
		section: "ДЛ Н",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1414,
		author: "Сборник",
		title: "Лучшие стихи о войне",
		section: "РЛ Ст",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1415,
		author: "Перельман",
		title: "Веселые задачи",
		section: "ДЛ Н",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1416,
		author: "Менар",
		title: "Мифы в искусстве старом и новом",
		section: "ИИ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1417,
		author: "Айзенг",
		title: "Проверь свои способности",
		section: "Псих ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1418,
		author: "Астафьев",
		title: "Васюткино озеро",
		section: "РЛ ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1419,
		author: "Тургенев",
		title: "Бежин луг",
		section: "РЛ ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1420,
		author: "Сборник",
		title: "Волшебные сказки индейцев",
		section: "ЗЛ Ск",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1421,
		author: "Снайдер",
		title: "Спасите котика!",
		section: "УЛ ИИ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1422,
		author: "Кулман",
		title: "Янтарный телескоп",
		section: "Фэн ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1423,
		author: "Кулман",
		title: "Чудесный нож",
		section: "Фэн ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1424,
		author: "Кулман",
		title: "Северное сияние",
		section: "Фэн ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1425,
		author: "Сурженко",
		title: "Рисуем человека за 4 шага",
		section: "УЛ ИИ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1426,
		author: "Кон",
		title: "Психология ранней юности",
		section: "Псих ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1427,
		author: "Дьяконов",
		title: "Нескучная японская граматика",
		section: "УЛ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1428,
		author: "Сыщикова",
		title: "Японский язык без репетитора",
		section: "УЛ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1429,
		author: "Надежкина",
		title: "Разговорник японского языка",
		section: "УЛ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1430,
		author: "б/а",
		title: "Иллюстрированный словарь японского языка",
		section: "УЛ Спец",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1431,
		author: "Сборник",
		title: "Бабочки и хризантемы",
		section: "ЗЛ Ст",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1432,
		author: "Масси",
		title: "Кимоно",
		section: "ИИ Стр",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1433,
		author: "Кенни",
		title: "Япония",
		section: "И Стр",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1434,
		author: "б/а",
		title: "Пословицы народов мира",
		section: "ЗЛ Фолк",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1435,
		author: "Коукленд",
		title: "Не минутки без игры-минутки",
		section: "Хобби ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1436,
		author: "Сборник",
		title: "Японская поэзия ",
		section: "ЗЛ ",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1437,
		author: "Буш",
		title: "Плих и Плюх",
		section: "ЗЛ Ст",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1438,
		author: "Берестов",
		title: "Школьная лирика",
		section: "ДЛ Ст",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1439,
		author: "Кристи",
		title: "Убийство в Восточном экспрессе",
		section: "ЗЛ Дет",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1440,
		author: "Кристи",
		title: "Хикори-Дикори",
		section: "ЗЛ Дет",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1441,
		author: "Кристи",
		title: "Избранное",
		section: "ЗЛ Дет",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1442,
		author: "Кристи",
		title: "Неоконченный портрет",
		section: "ЗЛ Дет",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1443,
		author: "Кристи",
		title: "Эркюль Пуаро (Таинственное происшествие в Стайлз, Убийство на поле для гольфа)",
		section: "ЗЛ Дет",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1444,
		author: "Кристи",
		title: "Убить легко",
		section: "ЗЛ Дет",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1445,
		author: "Кристи",
		title: "Десять негритят",
		section: "ЗЛ Дет",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1446,
		author: "Кристи",
		title: "Двенадцать подвигов Геракла",
		section: "ЗЛ Дет",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1447,
		author: "Кристи",
		title: "Скрюченный домишко",
		section: "ЗЛ Дет",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1448,
		author: "Кристи",
		title: "Окровавленные ступени",
		section: "ЗЛ Дет",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1449,
		author: "Кристи",
		title: "Шесть загадочных случаев",
		section: "ЗЛ Дет",
		placed: "3-2-1",
		read: false
	},
	{
		id: 1450,
		author: "Голблатт, Актон",
		title: "Футбол. Самая полная энциклопедия",
		section: "Спорт ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1451,
		author: "Чендлер",
		title: "Поставь папе мат",
		section: "ДЛ Спец",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1452,
		author: "б/а",
		title: "Вот как это работает",
		section: "ДЛ Н",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1453,
		author: "Сотников",
		title: "Матрос Кошка",
		section: "ДЛ Био",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1454,
		author: "Линицкий",
		title: "Как нарисовать технку за 30 секунд",
		section: "ДЛ Хобби",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1455,
		author: "Калмыкова",
		title: "Николай Пирогов",
		section: "ДЛ Био",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1456,
		author: "Иванов",
		title: "Давайте рисовать. Животные",
		section: "УЛ ИИ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1457,
		author: "Бердюгина",
		title: "Поиграем в города",
		section: "ДЛ ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1458,
		author: "Конюхов",
		title: "Антарктида",
		section: "ДЛ Био",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1459,
		author: "Янчарский",
		title: "Знаешь который час?",
		section: "ДЛ ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1460,
		author: "Левин  ",
		title: "Глупая лошадь",
		section: "ДЛ ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1461,
		author: "Сборник",
		title: "Барбовер - зеленая борода (фр)",
		section: "ЗЛ Ск",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1462,
		author: "б/а",
		title: "Сто заданий для умников и умниц",
		section: "ДЛ Хобби",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1463,
		author: "Крапивин",
		title: "Мушкетер и фея",
		section: "ДЛ ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1464,
		author: "Тынянов",
		title: "Пушкин",
		section: "ИИ Био",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1465,
		author: "Сборник",
		title: "Песенки из мультиков",
		section: "ДЛ Ст",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1466,
		author: "Саломатов",
		title: "Фантастические рассказы",
		section: "ДЛ ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1467,
		author: "Чарушин",
		title: "Тюпа, Томка и сорока",
		section: "ДЛ ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1468,
		author: "Лагерлефф",
		title: "Путешествие Нильса с дикими гусями",
		section: "ЗЛ ДЛ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1469,
		author: "Сборник",
		title: "Счастливый принц",
		section: "ЗЛ Ск",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1470,
		author: "Родари",
		title: "Сказки",
		section: "ЗЛ Ск",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1471,
		author: "Тераскина",
		title: "В с тране невыученных уроков-2",
		section: "ДЛ ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1472,
		author: "Губарев",
		title: "Королевство кривых зеркал",
		section: "ДЛ ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1473,
		author: "Родари, Треверс, Сент-Экзюпери",
		title: "Приключение Чиполлино, Мэри Поппинс,  Маленький Принц",
		section: "ЗЛ ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1474,
		author: "Бажов",
		title: "Горный мастер",
		section: "РЛ Ск",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1475,
		author: "Колпакова",
		title: "Нестрашные сказки про страшную букву",
		section: "ДЛ ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1476,
		author: "Колпакова",
		title: "Бука плюс Бяка",
		section: "ДЛ ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1477,
		author: "б/а",
		title: "Как нарисовать самолет и пожарную машину",
		section: "ДЛ Хобби",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1478,
		author: "б/а",
		title: "Как нарисовать дракона и динозавра",
		section: "ДЛ Хобби",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1479,
		author: "Берджин",
		title: "Как нарисовать динозавра и других чудищ",
		section: "ДЛ Хобби",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1480,
		author: "Маяковский ",
		title: "Детям",
		section: "РЛ ДЛ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1481,
		author: "б/а",
		title: "Азбука",
		section: "Ул ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1482,
		author: "Афонькин. Афонькина",
		title: "Оригами",
		section: " Хобби",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1483,
		author: "Андерсен",
		title: "Снежная королева",
		section: "ЗЛ Ск",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1484,
		author: "Чернов",
		title: "Летим в космос",
		section: "ДЛ Н",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1485,
		author: "Барто, Берестов, Толмакова",
		title: "Песенки  ",
		section: "ДЛ Ст",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1486,
		author: "Верзинг",
		title: "Дневник наблюдений",
		section: "ДЛ Н",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1487,
		author: "Косилина, Колтановский",
		title: "Производственная гимнастика",
		section: "Спорт ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1488,
		author: "Жданов",
		title: "История моей страны в картинках",
		section: "ДЛ И ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1489,
		author: "Кнут Гамсун",
		title: "Пан. Виктория",
		section: "ЗЛ ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1490,
		author: "Гримм",
		title: "Бременские музыканты",
		section: "ЗЛ Ск",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1491,
		author: "Жуковский, Ершов, Пушкин",
		title: "Сказки",
		section: "РЛ Ст",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1492,
		author: "Волков",
		title: "Тайна заброшенного замка",
		section: "ДЛ Ск",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1493,
		author: "Волков",
		title: "Волшебник изумрудного города",
		section: "ДЛ Ск",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1494,
		author: "Зив, Мейлер, Баханский",
		title: "Задачи по геометрии 7-11 кл.",
		section: "УЛ ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1495,
		author: "Коструб",
		title: "Медицинский справочник туриста",
		section: "Н Мед",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1496,
		author: "Беннетт",
		title: "Любимые детские песенки",
		section: "ЗЛ Ст",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1497,
		author: "Перельман",
		title: "Занимательная физика",
		section: "ДЛ Н",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1498,
		author: "Перельман",
		title: "Калейдоскоп занимательных наук",
		section: "ДЛ Н",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1499,
		author: "Перельман",
		title: "Занимательная арифметика",
		section: "ДЛ Н",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1500,
		author: "Перельман",
		title: "Занимательная алкебра",
		section: "ДЛ Н",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1501,
		author: "Перельман",
		title: "Оптические иллюзии",
		section: "ДЛ Н",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1502,
		author: "Некрасов А.",
		title: "Приключения капитана Врунгеля",
		section: "РЛ ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1503,
		author: "Левкин, Карцова",
		title: "Школьная химия",
		section: "УЛ Спец",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1504,
		author: "Денисова",
		title: "Как помочь больному человеку",
		section: "ДЛ Мед",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1505,
		author: "Успенский",
		title: "Как львенок и черепаха пели песенку",
		section: "ДЛ ",
		placed: "3-2-2",
		read: false
	},
	{
		id: 1506,
		author: "Дурова Н.",
		title: "Я с жизнью в прятки не играю",
		section: "ДЛ ",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1507,
		author: "Брэдбери",
		title: "У нас всегда будет Париж",
		section: "ЗЛ Фан",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1508,
		author: "Брэдбери",
		title: "451? по Фаренгейту",
		section: "ЗЛ Фан",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1509,
		author: "Брэдбери",
		title: "Дзен в искусстве написания книг",
		section: "ЗЛ Фан",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1510,
		author: "Дэн Браун",
		title: "Код да Винчи",
		section: "ЗЛ Дет",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1511,
		author: "Дэн Браун",
		title: "Ангелы и демоны",
		section: "ЗЛ Дет",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1512,
		author: "Дэн Браун",
		title: "Точка обмана",
		section: "ЗЛ Дет",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1513,
		author: "Дэн Браун",
		title: "Утраченный символ",
		section: "ЗЛ Дет",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1514,
		author: "Мокиенко",
		title: "Так говорит молодежь: словарь сленга",
		section: "Н Спец",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1515,
		author: "Берроуз",
		title: "Тарзан. Приемыш обезьян",
		section: "ЗЛ Прик",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1516,
		author: "Сименон",
		title: "Золотая табакерка",
		section: "ЗЛ Дет",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1517,
		author: "Сименон",
		title: "Комисар Мэгре ошибается",
		section: "ЗЛ Дет",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1518,
		author: "Сборник",
		title: "Современный французский детективный роман",
		section: "ЗЛ Дет",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1519,
		author: "Чейз",
		title: "Каменные джунгли",
		section: "ЗЛ Дет",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1520,
		author: "Сборник",
		title: "Преступление в Орсивале",
		section: "ЗЛ Дет",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1521,
		author: "Шабан",
		title: "Лучшие задачи на логику",
		section: "Н  Хобби",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1522,
		author: "Кэрролл",
		title: "Лучшие логические задачи и головоломки",
		section: "Н Хобби",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1523,
		author: "Перельман",
		title: "Занимательная астрономия",
		section: "ДЛ Н",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1524,
		author: "Перельман",
		title: "Живая математика",
		section: "ДЛ Н",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1525,
		author: "Перельман",
		title: "Научные фокусы и головоломки",
		section: "ДЛ Н",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1526,
		author: "Перельман",
		title: "Занимательная механика",
		section: "ДЛ Н",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1527,
		author: "Перельман",
		title: "Занимательная геометрия",
		section: "ДЛ Н",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1528,
		author: "Прилуцкая",
		title: "Живопись итальянского Возрождения",
		section: "ИИ ",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1529,
		author: "Тяжелов",
		title: "Искусство Германии, Нидерландов, Фландрии, Голландии 15-17 вв",
		section: "ИИ ",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1530,
		author: "Шуллер",
		title: "Картины-фантазии",
		section: "ИИ Спец",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1531,
		author: "Росс",
		title: "Как устроено кино",
		section: "ИИ Спец",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1532,
		author: "Тиммеш",
		title: "Придумано девочками",
		section: "ДЛ Био",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1533,
		author: "Бабенко, Алексеев",
		title: "Птицы в мифах и легендах",
		section: "ДЛ Фолк",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1534,
		author: "Жуковский",
		title: "Баллады",
		section: "РЛ ",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1535,
		author: "Артемов",
		title: "Славянские боги и божки",
		section: "И  Фолк",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1536,
		author: "Артемов",
		title: "Духи и существа потустороннего мира",
		section: "И  Фолк",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1537,
		author: "Артемов",
		title: "Славянские мифические существа",
		section: "И  Фолк",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1538,
		author: "Смаллиан",
		title: "Загадки Шехерезады",
		section: "ДЛ Хобби",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1539,
		author: "Григорьев",
		title: "В гостях у физики",
		section: "ДЛ Н",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1540,
		author: "Альтхофф",
		title: "Сам себе программист",
		section: "Н Спец",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1541,
		author: "Душкин",
		title: "Шифры и квесты",
		section: "ДЛ Н",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1542,
		author: "Бёкль",
		title: "Нострадамус",
		section: "И Мист",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1543,
		author: "Сборник",
		title: "Сказки и повести Древнего Египта",
		section: "ДЛ Ск",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1544,
		author: "Сборник",
		title: "Мифы и сказки Древнего Египта",
		section: "ДЛ Фолк",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1545,
		author: "Сборник",
		title: "Детская Библия",
		section: "ДЛ Фолк",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1546,
		author: "Коллинз",
		title: "Сойка-пересмешница",
		section: "ЗЛ ",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1547,
		author: "Сборник",
		title: "Индийские сказки и легенды",
		section: "ЗЛ Фолк",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1548,
		author: "Сборник",
		title: "Вифлеемская звезда",
		section: "РЛ ",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1549,
		author: "Каренина",
		title: "Если вам нравится играть на гитаре",
		section: "ИИ Хобби",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1550,
		author: "Фрейлих",
		title: "Теория кино",
		section: "ИИ Спец",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1551,
		author: "Рехельс",
		title: "Режиссер-автор спектакля",
		section: "ИИ Спец",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1552,
		author: "Золотников",
		title: "Цветы в легендах  преданиях",
		section: "И Фолк",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1553,
		author: "Б/а",
		title: "Калевала",
		section: "ЗЛ Фолк",
		placed: "3-3-1",
		read: false
	},
	{
		id: 1554,
		author: "Сборник",
		title: "Космос",
		section: "ДЛ Спец",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1555,
		author: "Сборник",
		title: "Энциклопедя фантастики",
		section: "Н Фан",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1556,
		author: "Канетти",
		title: "Моря и океаны",
		section: "ДЛ Н",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1557,
		author: "Синицын",
		title: "Первый космонавт",
		section: "Н Био",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1558,
		author: "Даймер ",
		title: "Дельфины и киты",
		section: "ДЛ Н",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1559,
		author: "Шиф",
		title: "Путешествие по Петербургу с Аликом и Гусариком",
		section: "ДЛ И",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1560,
		author: "Нестеров",
		title: "Знаеш ли ты свой город",
		section: "ДЛ Пут",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1561,
		author: "Ермолаева и др",
		title: "Чудесный город ",
		section: "ДЛ Пут",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1562,
		author: "Исмаилова",
		title: "Энциклопедия для детей. Всемирная история",
		section: "ДЛ Спец",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1563,
		author: "Аксенова",
		title: "Энциклопедия для детей.История России",
		section: "ДЛ Спец",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1564,
		author: "Володин",
		title: "Российские столицы Москва и Санкт-Петербург",
		section: "ДЛ Спец",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1565,
		author: "Олеша",
		title: "Три толстяка",
		section: "ДЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1566,
		author: "Успенский",
		title: "Зима в Простоквашино",
		section: "ДЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1567,
		author: "Успенский",
		title: "Тетя дяди Федора",
		section: "ДЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1568,
		author: "Успенский",
		title: "Любимая девочка дяди Федора",
		section: "ДЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1569,
		author: "Бианки ",
		title: "Рассказы и сказки",
		section: "ДЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1570,
		author: "Сборник",
		title: "Черная курица",
		section: "РЛ ДЛ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1571,
		author: "Достоевский",
		title: "Повести и рассказы",
		section: "РЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1572,
		author: "Сборник",
		title: "Аленький цветочек",
		section: "РЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1573,
		author: "Бродский",
		title: "Слон и Маруська",
		section: "РЛ ДЛ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1574,
		author: "Бопер",
		title: "Рыцари",
		section: "ДЛ Хобби",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1575,
		author: "Панкеев",
		title: "Энциклопедия этикета",
		section: "УЛ Хобби",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1576,
		author: "Жукова",
		title: "Букварь",
		section: "УЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1577,
		author: "Чэллонер",
		title: "Нагляднный словарь.Химия",
		section: "УЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1578,
		author: "Линдсей",
		title: "Наглядный словарь. Растения",
		section: "УЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1579,
		author: "дисней",
		title: "Белоснежка и семь гномов",
		section: "ДЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1580,
		author: "дисней",
		title: "Король Лев",
		section: "ДЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1581,
		author: "дисней",
		title: "Золушка",
		section: "ДЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1582,
		author: "дисней",
		title: "Винни-Пух",
		section: "ДЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1583,
		author: "дисней",
		title: "101 долматинец",
		section: "ДЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1584,
		author: "дисней",
		title: "Бэмби",
		section: "ДЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1585,
		author: "дисней",
		title: "Красавица и чудовище",
		section: "ДЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1586,
		author: "дисней",
		title: "Русалочка",
		section: "ДЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1587,
		author: "дисней",
		title: "Пиноккио",
		section: "ДЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1588,
		author: "Якобсон",
		title: "Сказки",
		section: "ДЛ Ск",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1589,
		author: "Полякова",
		title: "Превращения слов",
		section: "ДЛ Хобби",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1590,
		author: "Рауд",
		title: "Сипсик",
		section: "ДЛ Ск",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1591,
		author: "Кайдла",
		title: "Зимний праздник в лесу",
		section: "ДЛ Ст",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1592,
		author: "Сяргава",
		title: "Старинные сказки о кумушке лисе",
		section: "ДЛ Ск",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1593,
		author: "Маран",
		title: "Хоботок по прозвищу Слоняйка",
		section: "ДЛ ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1594,
		author: "Сборник",
		title: "Азербайджанская сказки",
		section: "ЗЛ Ск",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1595,
		author: "Платонов",
		title: "Волшебное кольцо",
		section: "РЛ ДЛ",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1596,
		author: "Сборник",
		title: "Персицкие волшебные сказки",
		section: "ЗЛ Ск",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1597,
		author: "Сборник",
		title: "Японские народные сказки",
		section: "ЗЛ Ск",
		placed: "3-3-2",
		read: false
	},
	{
		id: 1598,
		author: "Янссон",
		title: "Все о мумитролях",
		section: "ЗЛ ",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1599,
		author: "Фрок",
		title: "Замок огненного герцога",
		section: "РЛ Фэн",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1600,
		author: "Скотт",
		title: "Айвенго",
		section: "ЗЛ И",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1601,
		author: "Сборник",
		title: "Рассказы о войне",
		section: "РЛ ДЛ",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1602,
		author: "Верн",
		title: "Плавучий остров",
		section: "ЗЛ Ф",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1603,
		author: "Верн",
		title: "Дети капитана Гранта,Вокруг света в восемьдесят дней",
		section: "ЗЛ Ф",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1604,
		author: "Верн",
		title: "Пятнадцатилетний капитан",
		section: "ЗЛ Ф",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1605,
		author: "Райан",
		title: "Эхо",
		section: "ДЛ Фэн",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1606,
		author: "Александрова,Левшин",
		title: "Великий треугольник, или Странствия, приключения и беседы двух филоматиков",
		section: "ДЛ Спец",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1607,
		author: "Александрова,Левшин",
		title: "Искатели необычайных автографов, или Странствия, приключения и беседы двух филоматиков",
		section: "ДЛ Спец",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1608,
		author: "Братья Гримм",
		title: "Сказки",
		section: "ДЛ Ск",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1609,
		author: "Гауф",
		title: "Сказки",
		section: "ДЛ Ск",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1610,
		author: "Коржиков",
		title: "Мореплавания Солнышкина",
		section: "ДЛ Пр",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1611,
		author: "Соловьев",
		title: "Повесть о Ходже Насреддине,Книга юности",
		section: "ЗЛ ",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1612,
		author: "Сабатини",
		title: "Вечера с историком,Псы господни",
		section: "ЗЛ И",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1613,
		author: "Сабатини",
		title: "Морской ястреб,Скарамуш",
		section: "ЗЛ Пр",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1614,
		author: "Скотт",
		title: "Роб Рой,Легенда о монтрозе",
		section: "ЗЛ И",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1615,
		author: "Рид М",
		title: "Квартеронка,Морской волченок",
		section: "ЗЛ Пр",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1616,
		author: "Керн",
		title: "Фердинанд великолепный",
		section: "ЗЛ ДЛ",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1617,
		author: "Купер",
		title: "Шпион или повесть онейтральной территории",
		section: "ЗЛ Пр",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1618,
		author: "Тараканов, федоров",
		title: "Колесо в заброшенном парке",
		section: "ЗЛ Ф",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1619,
		author: "Осокин",
		title: "Рассказы о русском пейзаже",
		section: "ИИ ДЛ",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1620,
		author: "Катаев ",
		title: "Сын полка",
		section: "РЛ ",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1621,
		author: "Кондратов",
		title: "По богровой тропе в Эльдорадо",
		section: "ЗЛ Пр",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1622,
		author: "Несбит",
		title: "Принцесса Мелисанда и другие сказки",
		section: "ЗЛ Фэн",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1623,
		author: "Гайдар",
		title: "Тимур и его команда",
		section: "ДЛ ",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1624,
		author: "Сборник",
		title: "Новейший справочник школьника",
		section: "УЛ ",
		placed: "3-4-1",
		read: false
	},
	{
		id: 1625,
		author: "Толстой А,Данько,Олеша",
		title: "Золотой ключик или приключение Буратино,Побежденный Карабас,три толстяка",
		section: "ДЛ ",
		placed: "3-4-2",
		read: false
	},
	{
		id: 1626,
		author: "Сборник",
		title: "Итальянская волшебная сказка",
		section: "ЗЛ Ск",
		placed: "3-4-2",
		read: false
	},
	{
		id: 1627,
		author: "Сильва ",
		title: "Сказки",
		section: "ЗЛ Ск",
		placed: "3-4-2",
		read: false
	},
	{
		id: 1628,
		author: "Асбьернсен",
		title: "На восток от солнца,на запад от луны",
		section: "ЗЛ Ск",
		placed: "3-4-2",
		read: false
	},
	{
		id: 1629,
		author: "Дьюдени",
		title: "Кентерберийские головоломки",
		section: "ДЛ Хобби",
		placed: "3-4-2",
		read: false
	},
	{
		id: 1630,
		author: "Смаллиан",
		title: "Чародей и магия бесконечности",
		section: "ДЛ Хобби",
		placed: "3-4-2",
		read: false
	},
	{
		id: 1631,
		author: "Сборник",
		title: "Минералы сокровища земли",
		section: "Н Спец",
		placed: "3-4-2",
		read: false
	},
	{
		id: 1632,
		author: "Сборник",
		title: "В мире дикой природы. Том 1",
		section: "Н ",
		placed: "3-4-2",
		read: false
	},
	{
		id: 1633,
		author: "Сборник",
		title: "В мире дикой природы. Том 2",
		section: "Н ",
		placed: "3-4-2",
		read: false
	},
	{
		id: 1634,
		author: "Сборник",
		title: "В мире дикой природы. Том 3",
		section: "Н ",
		placed: "3-4-2",
		read: false
	},
	{
		id: 1635,
		author: "Сборник",
		title: "Атлас России Том 1",
		section: "Н ",
		placed: "3-4-2",
		read: false
	},
	{
		id: 1636,
		author: "Сборник",
		title: "Атлас России Том 2",
		section: "Н ",
		placed: "3-4-2",
		read: false
	},
	{
		id: 1637,
		author: "Сборник",
		title: "История России Том 1",
		section: "И ",
		placed: "3-4-2",
		read: false
	},
	{
		id: 1638,
		author: "Сборник",
		title: "История России Том 2",
		section: "И ",
		placed: "3-4-2",
		read: false
	},
	{
		id: 1639,
		author: "Федосеенко В.Н. и О.В.",
		title: "математика для старших классов",
		section: "УЛ Спец",
		placed: "3-4-2",
		read: false
	},
	{
		id: 1640,
		author: "Севенова, Ященко",
		title: "Геометрия. Тематический контроль. Площади",
		section: "УЛ Спец",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1641,
		author: "Эстерль",
		title: "Золотые перья дракона",
		section: "ДЛ Ск",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1642,
		author: "Акимушкин",
		title: "Кто без крыльев летает",
		section: "ДЛ Н",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1643,
		author: "Юрмин",
		title: "Севка меняет квартиру",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1644,
		author: "Катаев ",
		title: "Цветик-семицветик",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1645,
		author: "Аксаков",
		title: "Аленький цветочек",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1646,
		author: "Куприн",
		title: "Юшка",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1647,
		author: "Б/а",
		title: "Сивка-Бурка",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1648,
		author: "Иванова",
		title: "ХелоуинБук",
		section: "ДЛ Спец",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1649,
		author: "Воронин",
		title: "Тайна боевого кузнечика",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1650,
		author: "Петров",
		title: "Компас",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1651,
		author: "Токмакова",
		title: "Далеко-Нигерия",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1652,
		author: "Сборник",
		title: "Волшебные сказки Норвегии",
		section: "ЗЛ Ск",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1653,
		author: "Петров",
		title: "Железное солнце",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1654,
		author: "Братья Гримм",
		title: "Белоснежка и Розочка",
		section: "ЗЛ Ск",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1655,
		author: "Хисматулина",
		title: "Веселые слова. Игры",
		section: "ДЛ УЛ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1656,
		author: "Иванченко",
		title: "Занимательная азбука",
		section: "ДЛ УЛ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1657,
		author: "Лаптев",
		title: "Раз, два, три",
		section: "ДЛ Ст",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1658,
		author: "Бианки ",
		title: "Оранжевое горлышко",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1659,
		author: "Андрианов",
		title: "Философия для детей",
		section: "ДЛ Спец",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1660,
		author: "Сладков",
		title: "Рыбы. Ихтилогия в картинках",
		section: "ДЛ Спец",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1661,
		author: "яковлева",
		title: "Палеонтология в картинках",
		section: "ДЛ Спец",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1662,
		author: "Кундер",
		title: "Волшебное зеркало",
		section: "ЗЛ Ск",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1663,
		author: "Голявкин",
		title: "Тетрадки под дождем",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1664,
		author: "Эйвельманс",
		title: "По следам неизвестных животных",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1665,
		author: "Сборник",
		title: "Как наши предки учили математику",
		section: "ДЛ Н",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1666,
		author: "Джарвиз",
		title: "Питер Пэн",
		section: "ЗЛ ДЛ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1667,
		author: "Чарская",
		title: "Три слезинки королевны",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1668,
		author: "Шолохов",
		title: "Нахаленок",
		section: "РЛ ДЛ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1669,
		author: "Сборник",
		title: "Русские народные сказки",
		section: "РЛ Ск",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1670,
		author: "Ремез",
		title: "Рассказы в косую линейку",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1671,
		author: "Боголюбов, Иванова",
		title: "Обществознание. 6 класс",
		section: "УЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1672,
		author: "Б/а",
		title: "Как нарисовать котика и собачку",
		section: "ДЛ Спец",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1673,
		author: "Сборник",
		title: "Японские народные сказки",
		section: "ЗЛ Ск",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1674,
		author: "Перро",
		title: "Золушка",
		section: "ЗЛ ДЛ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1675,
		author: "Фокин",
		title: "Король ребусов. Т.1",
		section: "ДЛ Н",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1676,
		author: "Фокин",
		title: "Король ребусов. Т.2",
		section: "ДЛ Н",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1677,
		author: "Фокин",
		title: "Король ребусов. Т.3",
		section: "ДЛ Н",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1678,
		author: "Фокин",
		title: "Король ребусов. Т.4",
		section: "ДЛ Н",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1679,
		author: "Сборник",
		title: "Большой толковый словарь пословиц и поговорок русского языка",
		section: "Н Спец",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1680,
		author: "Слэй",
		title: "Карбонель",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1681,
		author: "Моррис",
		title: "Муравьи. Кузнечики. Пауки",
		section: "ДЛ Н",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1682,
		author: "Моррис",
		title: "Пчёлы. Бабочки. Стрекозы",
		section: "ДЛ Н",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1683,
		author: "Соколов-Никитов",
		title: "Год в лесу",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1684,
		author: "Воронкова",
		title: "Солнечный денек",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1685,
		author: "Бианки ",
		title: "Лесные домишки",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1686,
		author: "Дебуш",
		title: "Космос",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1687,
		author: "Чарушин",
		title: "Кто как живет",
		section: "ДЛ ",
		placed: "4-1-2",
		read: false
	},
	{
		id: 1688,
		author: "Эн",
		title: "Сказки синего сумрака",
		section: "ДЛ Ск",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1689,
		author: "Прохватилова",
		title: "Построй свой город",
		section: "ДЛ Пут",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1690,
		author: "Никонова",
		title: "Первые прогулки по Петербургу",
		section: "ДЛ Пут",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1691,
		author: "Б/а",
		title: "Кутна Гора",
		section: "ИИ Пут",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1692,
		author: "Некрасов  В.П.",
		title: "Всегда в хорошем настроении",
		section: "Н Псих",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1693,
		author: "Албикова",
		title: "Юго-Восточный Крым",
		section: "ИИ Пут",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1694,
		author: "Сборник",
		title: "Советские военночальники",
		section: "И  Спец",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1695,
		author: "Ильин",
		title: "Солнечный факел",
		section: "ИИ Спец",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1696,
		author: "Гиппиус",
		title: "Дом Мурузи",
		section: "ИИ ",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1697,
		author: "Олтяну",
		title: "Сверчковая тишина",
		section: "ЗЛ Ст",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1698,
		author: "Шергин",
		title: "Рассказы и сказы",
		section: "РЛ ",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1699,
		author: "Б/а",
		title: "Музей. Как это делается",
		section: "ИИ Спец",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1700,
		author: "Житков",
		title: "Что бывало",
		section: "ДЛ ",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1701,
		author: "Беспалов",
		title: "Горюч камень",
		section: "ДЛ ",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1702,
		author: "Сборник",
		title: "Сказки лесов (марийские)",
		section: "РЛ Ск",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1703,
		author: "Чехов",
		title: "Мальчики",
		section: "РЛ ДЛ",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1704,
		author: "Катаев ",
		title: "Летающий на стрекозе",
		section: "РЛ ДЛ",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1705,
		author: "Русаков",
		title: "Мельница-метелица",
		section: "РЛ ",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1706,
		author: "Баруздин",
		title: "Странный ослик",
		section: "РЛ ",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1707,
		author: "Серафимович",
		title: "Три друга",
		section: "РЛ ",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1708,
		author: "Мальт",
		title: "Стеклянная история",
		section: "ДЛ ",
		placed: "4-1-1",
		read: false
	},
	{
		id: 1709,
		author: "Кросс",
		title: "Мартов хлеб",
		section: "ДЛ ",
		placed: "4-4-1",
		read: false
	},
	{
		id: 1710,
		author: "Крутецкая",
		title: "Правила здоровья и оказание первой помощи",
		section: "ДЛ ",
		placed: "4-4-1",
		read: false
	},
	{
		id: 1711,
		author: "Колас",
		title: "Рак-усач",
		section: "РЛ ДЛ",
		placed: "4-4-1",
		read: false
	},
	{
		id: 1712,
		author: "Сборник",
		title: "Почему у птицы Кальчунды клюв и лапки золотые (непальские народные сказки)",
		section: "ЗЛ Ск",
		placed: "4-4-1",
		read: false
	},
	{
		id: 1713,
		author: "Прус",
		title: "Рассказы",
		section: "ЗЛ ",
		placed: "6-1-2",
		read: false
	},
	{
		id: 1714,
		author: "Ги де Мопассан",
		title: "Новеллы",
		section: "ЗЛ ",
		placed: "6-1-2",
		read: false
	},
	{
		id: 1715,
		author: "Фолкнер",
		title: "Рассказы",
		section: "ЗЛ ",
		placed: "6-1-2",
		read: false
	},
	{
		id: 1716,
		author: "Бронте Э.",
		title: "Грозовой",
		section: "ЗЛ ",
		placed: "6-1-2",
		read: false
	},
	{
		id: 1717,
		author: "Бальзак",
		title: "Сцены частной жизни (сб)",
		section: "ЗЛ ",
		placed: "6-1-2",
		read: false
	},
	{
		id: 1718,
		author: "Бальзак",
		title: "Шагреневая кожа. Евгения Гранде",
		section: "ЗЛ ",
		placed: "6-1-2",
		read: false
	},
	{
		id: 1719,
		author: "Бальзак",
		title: "Кузина Бетта",
		section: "ЗЛ ",
		placed: "6-1-2",
		read: false
	},
	{
		id: 1720,
		author: "Бальзак",
		title: "Озорные рассказы",
		section: "ЗЛ ",
		placed: "6-1-2",
		read: false
	},
	{
		id: 1721,
		author: "Бальзак",
		title: "Утраченные иллюзии",
		section: "ЗЛ ",
		placed: "6-1-2",
		read: false
	},
	{
		id: 1722,
		author: "Франц",
		title: "Вадтпсар. Таис. Перламутровый ларец",
		section: "ЗЛ ",
		placed: "6-1-2",
		read: false
	},
	{
		id: 1723,
		author: "Уортен",
		title: "Век невинности",
		section: "ЗЛ ",
		placed: "6-1-2",
		read: false
	},
	{
		id: 1724,
		author: "Фейхтвангер",
		title: "Том 2",
		section: "ЗЛ ",
		placed: "6-1-2",
		read: false
	},
	{
		id: 1725,
		author: "Фейхтвангер",
		title: "Том 3",
		section: "ЗЛ ",
		placed: "6-1-2",
		read: false
	},
	{
		id: 1726,
		author: "Бернс",
		title: "Стихотворения",
		section: "ЗЛ Ст",
		placed: "6-1-2",
		read: false
	},
	{
		id: 1727,
		author: "Сборник",
		title: "Свиток столетий (тюркская поэзия)",
		section: "ЗЛ Ст",
		placed: "6-1-1",
		read: false
	},
	{
		id: 1728,
		author: "Сборник",
		title: "Золотой кубок дожа",
		section: "ЗЛ ",
		placed: "6-1-1",
		read: false
	},
	{
		id: 1729,
		author: "Данте",
		title: "Божественная комедия",
		section: "ЗЛ Ст",
		placed: "6-1-1",
		read: false
	},
	{
		id: 1730,
		author: "Мериме",
		title: "Избранное",
		section: "ЗЛ ",
		placed: "6-1-1",
		read: false
	},
	{
		id: 1731,
		author: "Теккерей",
		title: "Ярмарка тщеславия",
		section: "ЗЛ ",
		placed: "6-1-1",
		read: false
	},
	{
		id: 1732,
		author: "Санд",
		title: "Консуэло",
		section: "ЗЛ ",
		placed: "6-1-1",
		read: false
	},
	{
		id: 1733,
		author: "Моруа",
		title: "Сборник",
		section: "ЗЛ ",
		placed: "6-1-1",
		read: false
	},
	{
		id: 1734,
		author: "Проспер Мериме",
		title: "Новеллы",
		section: "ЗЛ ",
		placed: "6-1-1",
		read: false
	},
	{
		id: 1735,
		author: "Экзюпери",
		title: "Ночной полет. Письма заложнику.. Маленький принц.",
		section: "ЗЛ ",
		placed: "6-1-1",
		read: false
	},
	{
		id: 1736,
		author: "Моэм",
		title: "Рождественские каникулы",
		section: "ЗЛ ",
		placed: "6-1-1",
		read: false
	},
	{
		id: 1737,
		author: "Сэлинджер",
		title: "Над пропастью во ржи. Рассказы",
		section: "ЗЛ ",
		placed: "6-1-1",
		read: false
	},
	{
		id: 1738,
		author: "Сборник",
		title: "Фьяметта",
		section: "ЗЛ ",
		placed: "6-1-1",
		read: false
	},
	{
		id: 1739,
		author: "Амаду",
		title: "Дона Флор и два ее мужа",
		section: "ЗЛ ",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1740,
		author: "Гете",
		title: "Фауст",
		section: "ЗЛ Ст",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1741,
		author: "Мэкардл",
		title: "Тайна утеса",
		section: "ЗЛ ",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1742,
		author: "Остен",
		title: "Гордость и предубеждение",
		section: "ЗЛ ",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1743,
		author: "Стендаль",
		title: "Ванина Ванини",
		section: "ЗЛ ",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1744,
		author: "Метерлинк",
		title: "Избранное",
		section: "ЗЛ ",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1745,
		author: "Золя",
		title: "Чрево Парижа",
		section: "ЗЛ ",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1746,
		author: "Хемингуэй",
		title: "По ком звонит колокол",
		section: "ЗЛ ",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1747,
		author: "Флобер",
		title: "Госпожа Бовари",
		section: "ЗЛ ",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1748,
		author: "Лакло",
		title: "Опасные связи",
		section: "ЗЛ ",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1749,
		author: "Уинзор",
		title: "Твоя навеки Эмбер",
		section: "ЗЛ ",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1750,
		author: "Гай Светоний Транквилл",
		title: "Жизнь двенадцати цезарей",
		section: "ЗЛ ",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1751,
		author: "Стейнбек",
		title: "Жемчужина. Квартал Тартилья-Флэт",
		section: "ЗЛ ",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1752,
		author: "Мопассан",
		title: "Новеллы",
		section: "ЗЛ ",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1753,
		author: "Метерлинк",
		title: "Разум цветов",
		section: "ЗЛ ",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1754,
		author: "Хемингуэй",
		title: "Романы и рассказы",
		section: "ЗЛ ",
		placed: "6-2-2",
		read: false
	},
	{
		id: 1755,
		author: "Сборник",
		title: "Париж изменчивый и вечный",
		section: "ЗЛ ",
		placed: "6-2-1",
		read: false
	},
	{
		id: 1756,
		author: "Сборник",
		title: "Анлийская поэзия в русских переводах",
		section: "ЗЛ Ст",
		placed: "6-2-1",
		read: false
	},
	{
		id: 1757,
		author: "Хлодовский",
		title: "Франческо Петрарка",
		section: "ИИ Био",
		placed: "6-2-1",
		read: false
	},
	{
		id: 1758,
		author: "Коллинз",
		title: "Закон и женщина. Две судьбы",
		section: "ЗЛ ",
		placed: "6-2-1",
		read: false
	},
	{
		id: 1759,
		author: "Хемингуэй",
		title: "Прощай, оружие и др",
		section: "ЗЛ ",
		placed: "6-2-1",
		read: false
	},
	{
		id: 1760,
		author: "Моммзен",
		title: "История Рима",
		section: "И ",
		placed: "6-2-1",
		read: false
	},
	{
		id: 1761,
		author: "Гомер",
		title: "Одиссея",
		section: "ЗЛ Ст",
		placed: "6-2-1",
		read: false
	},
	{
		id: 1762,
		author: "Муруа",
		title: "Три Дюма. Литературные портреты",
		section: "ИИ Био",
		placed: "6-2-1",
		read: false
	},
	{
		id: 1763,
		author: "Драйзер",
		title: "Финансист",
		section: "ЗЛ ",
		placed: "6-2-1",
		read: false
	},
	{
		id: 1764,
		author: "Драйзер",
		title: "Стоик. Оплот",
		section: "ЗЛ ",
		placed: "6-2-1",
		read: false
	},
	{
		id: 1765,
		author: "Борхес",
		title: "Проза разных лет",
		section: "ЗЛ ",
		placed: "6-2-1",
		read: false
	},
	{
		id: 1766,
		author: "О'Генри",
		title: "Короли и капуста",
		section: "ЗЛ ",
		placed: "6-2-1",
		read: false
	},
	{
		id: 1767,
		author: "Сборник",
		title: "История и философия науки",
		section: "Н ",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1768,
		author: "Раскин",
		title: "Триумфальные арки Ленинграда",
		section: "ИИ ",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1769,
		author: "Кузнецов",
		title: "Эрмитаж",
		section: "ИИ Пут",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1770,
		author: "Воронихина",
		title: "Государственный Эрмитаж",
		section: "ИИ Пут",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1771,
		author: "Шапиро",
		title: "Картинная галерея. Эрмитаж",
		section: "ИИ Пут",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1772,
		author: "Рутенберг",
		title: "Титаны Возрождения",
		section: "ИИ Био",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1773,
		author: "Штиглиц",
		title: "Промышленная архитектура Петербурга",
		section: "ИИ ",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1774,
		author: "Дранков",
		title: "Психология художественного творчества",
		section: "ИИ Псих",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1775,
		author: "Раков",
		title: "Эмблемы и символы Петербурга",
		section: "ИИ ",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1776,
		author: "Тенихина",
		title: "Петродворец коттедж",
		section: "ИИ ",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1777,
		author: "Тихонов",
		title: "Музейи Ленинграда",
		section: "ИИ ",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1778,
		author: "Засолов, Пызин",
		title: "Из жизни Петербурга 1890-1910гг.",
		section: "ИИ ",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1779,
		author: "Анциферов",
		title: "Непостижимый город",
		section: "ИИ ",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1780,
		author: "Лисовский и др",
		title: "Пригороды Ленинграда",
		section: "ИИ Пут",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1781,
		author: "Куьменко",
		title: "Художники передвижники",
		section: "ИИ ",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1782,
		author: "Лейкина-Свирская",
		title: "Школа в финском переулке",
		section: "ИИ ",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1783,
		author: "Витязева",
		title: "Ленинград",
		section: "ИИ Пут",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1784,
		author: "Пунин",
		title: "Архитектура Петербурга середины XIX века",
		section: "ИИ ",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1785,
		author: "Барановский",
		title: "Санкт-Петербург",
		section: "ИИ ",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1786,
		author: "Фадеева",
		title: "Тайны горного Крыма",
		section: "И Стр",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1787,
		author: "Филатова",
		title: "Легенды Крыма",
		section: "И Стр",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1788,
		author: "Дюличев",
		title: "Рассказы по истории Крыма",
		section: "И Стр",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1789,
		author: "Комаров",
		title: "Общая теория государства и права",
		section: "УЛ Спец",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1790,
		author: "Балашов",
		title: "Правоведение",
		section: "УЛ Спец",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1791,
		author: "Лапицкий",
		title: "Наука всистеме культуры",
		section: "УЛ ",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1792,
		author: "Леннон",
		title: "Пишу как пишется",
		section: "ЗЛ Био",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1793,
		author: "Чжань Жолань",
		title: "Дао Любви",
		section: "ЗЛ ",
		placed: "6-3-2",
		read: false
	},
	{
		id: 1794,
		author: "Биржаков и др",
		title: "Туристический путеводитель по Лен. Обл.",
		section: "ИИ Пут",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1795,
		author: "Землянская",
		title: "Швеция в кармане",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1796,
		author: "Землянская",
		title: "Италия в кармане",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1797,
		author: "Землянская",
		title: "Турция в кармане",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1798,
		author: "Белякова",
		title: "Швеция",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1799,
		author: "Бурова",
		title: "Великобритания",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1800,
		author: "Бурова",
		title: "США",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1801,
		author: "Егерева и др",
		title: "Лондон",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1802,
		author: "Хворостухина",
		title: "Барселона",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1803,
		author: "Форстен",
		title: "Берлин",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1804,
		author: "Хропов и др",
		title: "Германия",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1805,
		author: "Шанин",
		title: "Западная Азия: Кипр, Турция, Иран",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1806,
		author: "Фатиева",
		title: "Венгрия",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1807,
		author: "Кочергин",
		title: "Русский север",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1808,
		author: "Хербинер",
		title: "Польша",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1809,
		author: "Белов",
		title: "Калининградская область",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1810,
		author: "Арсеньев",
		title: "Дерсу Узала",
		section: "РЛ ",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1811,
		author: "Афоньшин",
		title: "Сказы и сказки нежегородской земли",
		section: "РЛ Фолк",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1812,
		author: "Черны",
		title: "Пражский град",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1813,
		author: "Чеснокова",
		title: "Невский проспект",
		section: "ИИ Пут",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1814,
		author: "Иванов ",
		title: "Дома и люди",
		section: "ИИ ",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1815,
		author: "Курбатов",
		title: "Петербург",
		section: "ИИ ",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1816,
		author: "Б/а",
		title: "Город Пушкин. Дворцы и парки",
		section: "ИИ ",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1817,
		author: "Опочинская",
		title: "Рим",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1818,
		author: "Ганофер",
		title: "Болгария",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1819,
		author: "Клод",
		title: "Болгария",
		section: "И Стр",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1820,
		author: "Савицкая",
		title: "Краков",
		section: "ИИ Пут",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1821,
		author: "Иогансен",
		title: "Ленинград",
		section: "ИИ Пут",
		placed: "6-3-1",
		read: false
	},
	{
		id: 1822,
		author: "Скляренко",
		title: "Святослав",
		section: "И Био",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1823,
		author: "Скляренко",
		title: "Владимир",
		section: "И Био",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1824,
		author: "Иоанн Экономцев",
		title: "Православие. Византия. Русь",
		section: "И ",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1825,
		author: "Лозинская",
		title: "Во главе двух академий",
		section: "И Био",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1826,
		author: "Баггер",
		title: "Реформы Петра Великого",
		section: "И Био",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1827,
		author: "Беспятых",
		title: "Петербург Петра 1",
		section: "И ИИ",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1828,
		author: "Лапин",
		title: "Семеновская история",
		section: "И ",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1829,
		author: "Каменский",
		title: "Под сению Екатерины",
		section: "И ",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1830,
		author: "Анисимов",
		title: "Россия без Петра",
		section: "И ",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1831,
		author: "Гордин",
		title: "Меж рабством и свободой",
		section: "И ",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1832,
		author: "Кавторин ",
		title: "Первый шаг к катастрофе",
		section: "И ",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1833,
		author: "Ярославский",
		title: "Биография Ленина",
		section: "И Био",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1834,
		author: "Остроухова и др",
		title: "Ленин краткий биографический очерк",
		section: "И Био",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1835,
		author: "А страхан",
		title: "Вдни октября",
		section: "И ",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1836,
		author: "Александров и др",
		title: "Сталин. Биография",
		section: "И Био",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1837,
		author: "Жуков",
		title: "Воспоминания и размышления. Том 1",
		section: "И Био",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1838,
		author: "Жуков",
		title: "Воспоминания и размышления. Том 3",
		section: "И Био",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1839,
		author: "Троицкий",
		title: "Безумство храбрых",
		section: "И ",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1840,
		author: "Сборник",
		title: "В свои 18 лет",
		section: "РЛ ",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1841,
		author: "Симонов",
		title: "Третий адъютант",
		section: "РЛ ",
		placed: "6-4-2",
		read: false
	},
	{
		id: 1842,
		author: "Павленко",
		title: "Александр Меншиков",
		section: "И Био",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1843,
		author: "Ладинский",
		title: "Когда пал Херсонес",
		section: "И ",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1844,
		author: "Югов",
		title: "Ратоборцы",
		section: "РЛ ",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1845,
		author: "Козлова",
		title: "Все начиналось с десятины",
		section: "И ",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1846,
		author: "Руднев",
		title: "Обряды народные и обряды церковные",
		section: "И Спец",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1847,
		author: "Сборник",
		title: "Недаром помнит вся Россия",
		section: "И ",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1848,
		author: "Тарле",
		title: "Талейран",
		section: "И Био",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1849,
		author: "Тарле",
		title: "Адмирал Ушаков",
		section: "И Био",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1850,
		author: "Раковский",
		title: "Суворов. Ушаков",
		section: "И Био",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1851,
		author: "Раковский",
		title: "Куткзов",
		section: "И Био",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1852,
		author: "Радугина",
		title: "История России в мировой цивилизации",
		section: "И ",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1853,
		author: "Чечиль",
		title: "Вернадский",
		section: "Н Био",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1854,
		author: "Судзуки",
		title: "Наука Дзен - ум дзен",
		section: "Н Фил",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1855,
		author: "Васильев",
		title: "Не стреляйте в белых лебедей",
		section: "РЛ ",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1856,
		author: "Неверов",
		title: "Марья-большевичка",
		section: "РЛ ",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1857,
		author: "Казакевич",
		title: "Звезда",
		section: "РЛ ",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1858,
		author: "Горбатов",
		title: "Непокоренные",
		section: "РЛ ",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1859,
		author: "Фучек",
		title: "Избранное",
		section: "И Био",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1860,
		author: "Цой",
		title: "Песни",
		section: "РЛ Ст",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1861,
		author: "Фонвизин",
		title: "Комедии",
		section: "РЛ ",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1862,
		author: "Панфилов",
		title: "По старому русскому обычаю",
		section: "РЛ ",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1863,
		author: "Сборник",
		title: "Петербург в русской культуре",
		section: "ИИ ",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1864,
		author: "Соловьев",
		title: "Сепан разин и его время",
		section: "И ",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1865,
		author: "Белинский",
		title: "Сочинения А. Пушкина",
		section: "РЛ ",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1866,
		author: "Жириновский",
		title: "Последний вагон на Север",
		section: "И ",
		placed: "6-4-1",
		read: false
	},
	{
		id: 1867,
		author: "Б/а",
		title: "Библия. Том 1.",
		section: "ЗЛ ",
		placed: "6-5-2",
		read: false
	},
	{
		id: 1868,
		author: "Б/а",
		title: "Библия. Том 2.",
		section: "ЗЛ ",
		placed: "6-5-2",
		read: false
	},
	{
		id: 1869,
		author: "Брокгауз и Ефрон",
		title: "Россия  ",
		section: "И ",
		placed: "6-5-2",
		read: false
	},
	{
		id: 1870,
		author: "Немеровская",
		title: "Судьба Блока",
		section: "РЛ био",
		placed: "6-5-2",
		read: false
	},
	{
		id: 1871,
		author: "Алпатов",
		title: "Андрей Рублёв и его эпоха",
		section: "ИИ ",
		placed: "6-5-2",
		read: false
	},
	{
		id: 1872,
		author: "Немчинова",
		title: "Елагин остров",
		section: "ИИ ",
		placed: "6-5-2",
		read: false
	},
	{
		id: 1873,
		author: "Ромен Роллан",
		title: "Кола Брюньон",
		section: "ЗЛ ",
		placed: "6-5-2",
		read: false
	},
	{
		id: 1874,
		author: "Вергенова",
		title: "Архитектурная композиция садов и парков",
		section: "ИИ ",
		placed: "6-5-2",
		read: false
	},
	{
		id: 1875,
		author: "Матвеев",
		title: "Эрмитаж",
		section: "ИИ ",
		placed: "6-5-2",
		read: false
	},
	{
		id: 1876,
		author: "Валло",
		title: "Принцесса с золодой звездой",
		section: "ЗЛ ",
		placed: "6-5-2",
		read: false
	},
	{
		id: 1877,
		author: "Янин",
		title: "Я послал тебе бересту",
		section: "И ",
		placed: "6-5-2",
		read: false
	},
	{
		id: 1878,
		author: "Молин",
		title: "Прага",
		section: "И Пут",
		placed: "6-5-2",
		read: false
	},
	{
		id: 1879,
		author: "Бенуа",
		title: "Мои воспоминания. Т.1",
		section: "ИИ Био",
		placed: "6-5-2",
		read: false
	},
	{
		id: 1880,
		author: "Бенуа",
		title: "Мои воспоминания. Т.2",
		section: "ИИ Био",
		placed: "6-5-2",
		read: false
	},
	{
		id: 1881,
		author: "Б/а",
		title: "Золото и серебро",
		section: "ИИ Пут",
		placed: "6-5-2",
		read: false
	},
	{
		id: 1882,
		author: "Кошечкин",
		title: "Сергей Есенин",
		section: "РЛ Био",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1883,
		author: "Савватеев",
		title: "Каменная летопись Карелии",
		section: "ИИ ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1884,
		author: "Забозлаева",
		title: "Искусство хороших манер",
		section: "УЛ Хобби",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1885,
		author: "Муравьева",
		title: "Как воспитывали русского дворянина",
		section: "УЛ Хобби",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1886,
		author: "К. Р. ",
		title: "Времена года",
		section: "РЛ ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1887,
		author: "Бабий",
		title: "Кантемир",
		section: "РЛ Био",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1888,
		author: "Сюпервьель",
		title: "Дитя волн",
		section: "ЗЛ ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1889,
		author: "Пушкин",
		title: "Лицейская лирика",
		section: "РЛ ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1890,
		author: "Молли Кон",
		title: "Мишмаш ",
		section: "ЗЛ ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1891,
		author: "Исаченко",
		title: "По малым рекам и каналам СПБ",
		section: "ИИ Пут",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1892,
		author: "Белякаева-Казанская",
		title: "Силуэты музыкального Петербурга",
		section: "ИИ ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1893,
		author: "Бунатян",
		title: "Город муз",
		section: "ИИ ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1894,
		author: "Крюковских",
		title: "Скульптура СПб",
		section: "ИИ ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1895,
		author: "Борисова М.",
		title: "Поздние возвращения",
		section: "РЛ Ст",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1896,
		author: "Мамаенко",
		title: "Государственный Эрмитаж",
		section: "ИИ Пут",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1897,
		author: "Зиневич",
		title: "Мудрость Древнего Китая",
		section: "ЗЛ ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1898,
		author: "Мейзенбург",
		title: "Воспоминания идеалистки",
		section: "ЗЛ ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1899,
		author: "Маркин",
		title: "История ЕГЭ. Задание С4",
		section: "УЛ ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1900,
		author: "Маркин",
		title: "История ЕГЭ. Задание С5",
		section: "УЛ ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1901,
		author: "Русаков В.",
		title: "Разное",
		section: "РЛ Ст",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1902,
		author: "Сюзюки",
		title: "Дзен и японская культура",
		section: "Фил ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1903,
		author: "Сборник",
		title: "С того берега. Т.1",
		section: "РЛ ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1904,
		author: "Сборник",
		title: "С того берега. Т.2",
		section: "РЛ ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1905,
		author: "Косцова",
		title: "Сюжет древнерусских икон",
		section: "ИИ ",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1906,
		author: "Берн",
		title: "Игры в которые играют люди…",
		section: "ЗЛ Псих",
		placed: "6-5-1",
		read: false
	},
	{
		id: 1907,
		author: "Георгиев и др.",
		title: "СПб: занимательные вопросы и ответы",
		section: "УЛ ИИ",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1908,
		author: "Сборник",
		title: "СПБ. ХХ век. Что?Где?Когда?",
		section: "УЛ ИИ",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1909,
		author: "Сборник",
		title: "Пригороды СПб. Вопросы и ответы",
		section: "УЛ ИИ",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1910,
		author: "Тынянов",
		title: "Пушкин и его современники",
		section: "РЛ Био",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1911,
		author: "Пушкин",
		title: "Пиковая дама",
		section: "РЛ ",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1912,
		author: "Гордин",
		title: "Пушкин в Михайловском",
		section: "РЛ био",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1913,
		author: "Пушкин",
		title: "Евгений Онегин. Статьи",
		section: "РЛ ",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1914,
		author: "Керн А.П.",
		title: "Воспоминания. Дневники. Переписка",
		section: "РЛ ",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1915,
		author: "Сборник",
		title: "Дуэль Пушкина с Дантесом-Геккереном",
		section: "РЛ био",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1916,
		author: "Волошина-Сабашникова",
		title: "Зеленая змея",
		section: "РЛ био",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1917,
		author: "Сборник",
		title: "Новелла серебряного века",
		section: "РЛ ",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1918,
		author: "Сборник",
		title: "Сказки серебряного века",
		section: "РЛ ",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1919,
		author: "Сборник",
		title: "Серебряный век",
		section: "РЛ Ст",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1920,
		author: "Карамзин",
		title: "Наталья, боярская дочь",
		section: "РЛ ",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1921,
		author: "Лермонтов",
		title: "Поэмы",
		section: "РЛ Ст",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1922,
		author: "Сологуб",
		title: "Капли крови",
		section: "РЛ ",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1923,
		author: "Смольников",
		title: "Путешествие Пушкина в Оренбургский край",
		section: "РЛ Био",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1924,
		author: "Гоголь",
		title: "Петербургские повести",
		section: "РЛ ",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1925,
		author: "Бестужев-Мерлинский",
		title: "Роман и Ольга",
		section: "РЛ ",
		placed: "6-6-2",
		read: false
	},
	{
		id: 1926,
		author: "Квинси",
		title: "Исповедь англичанина употребляющего опиум",
		section: "ЗЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1927,
		author: "Лихачев",
		title: "Мысли о жизни",
		section: "РЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1928,
		author: "Ильф и Петров ",
		title: "Двенадцать стульев",
		section: "РЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1929,
		author: "Уайлд",
		title: "Счастливый принц",
		section: "ЗЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1930,
		author: "Джойс",
		title: "Портрет художника в юности",
		section: "ЗЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1931,
		author: "Манн Т",
		title: "Смерть в Венеции",
		section: "ЗЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1932,
		author: "Кафка",
		title: "Замок",
		section: "ЗЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1933,
		author: "Гончаров",
		title: "Обрыв",
		section: "РЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1934,
		author: "Макиавелли",
		title: "Государь",
		section: "ЗЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1935,
		author: "Достоевский",
		title: "Игрок",
		section: "РЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1936,
		author: "Борхес ",
		title: "Вавилонская библиотека",
		section: "ЗЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1937,
		author: "Блок",
		title: "Стихи о Прекрасной Даме",
		section: "РЛ Ст",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1938,
		author: "Сартр",
		title: "Тошнота",
		section: "ЗЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1939,
		author: "Маркес",
		title: "Другая сторона смерти",
		section: "ЗЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1940,
		author: "Еврипид",
		title: "Медея. Ипполит. Вакханки",
		section: "ЗЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1941,
		author: "Павич",
		title: "Хазарский словарь",
		section: "ЗЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1942,
		author: "Шопенгауэр",
		title: "Афоризмы житейской мудрости",
		section: "ЗЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1943,
		author: "Уильямс",
		title: "Трамвай желания",
		section: "ЗЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1944,
		author: "Виан",
		title: "Пена дней",
		section: "ЗЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1945,
		author: "Булгаков",
		title: "Дьяволиада. Собачье сердце. Роковые яйца",
		section: "РЛ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1946,
		author: "Данилевский",
		title: "Дмитрий Пожарский",
		section: "И Био",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1947,
		author: "Данилевский",
		title: "Александр Невский",
		section: "И Био",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1948,
		author: "Мандельштам",
		title: "Полон музыки, музы и муки",
		section: "РЛ Ст",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1949,
		author: "Серпокрыл",
		title: "Дворцовая площадь",
		section: "ИИ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1950,
		author: "Бастарева",
		title: "Петропавловская крепость",
		section: "ИИ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1951,
		author: "Февчук",
		title: "Портреты и судьбы",
		section: "РЛ Био",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1952,
		author: "Бутиков",
		title: "Музей Исакиевский собор",
		section: "ИИ ",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1953,
		author: "Бо Цзюй-И",
		title: "Четверостишия",
		section: "ЗЛ Ст",
		placed: "6-6-1",
		read: false
	},
	{
		id: 1954,
		author: "Фонвизин, Радищев, Крылов",
		title: "Недоросль. Путешествие из Петербурга в Москву. Подщипа",
		section: "РЛ ",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1955,
		author: "Сборник",
		title: "Русская басня",
		section: "РЛ Ст",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1956,
		author: "Сборник",
		title: "Народная проза",
		section: "РЛ ",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1957,
		author: "Сборник",
		title: "Русская романтическая повесть",
		section: "РЛ ",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1958,
		author: "Сборник",
		title: "Былые небылицы",
		section: "РЛ ",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1959,
		author: "Сборник",
		title: "Русская романтическая новелла",
		section: "РЛ ",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1960,
		author: "Карамзин",
		title: "Марфа-посадница",
		section: "РЛ ",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1961,
		author: "Одоевский",
		title: "Повести и рассказы",
		section: "РЛ ",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1962,
		author: "Брюсов",
		title: "Повести и рассказы",
		section: "РЛ ",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1963,
		author: "Цветаева",
		title: "Избранное",
		section: "РЛ Ст",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1964,
		author: "Чехов",
		title: "Чайка. Вишневый сад",
		section: "РЛ ",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1965,
		author: "Есенин",
		title: "Избранное",
		section: "РЛ ",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1966,
		author: "Есенин",
		title: "Я более всего весну люблю",
		section: "РЛ ",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1967,
		author: "Мандельштам",
		title: "Камень и Тристия",
		section: "РЛ ",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1968,
		author: "Гордин",
		title: "Отечественная война 1812года на фоне басен Крылова",
		section: "РЛ ",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1969,
		author: "Гончаров",
		title: "Обломов",
		section: "РЛ ",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1970,
		author: "Смирнов",
		title: "Россия в бронзе",
		section: "ИИ ",
		placed: "6-7-2",
		read: false
	},
	{
		id: 1971,
		author: "Роллан",
		title: "Хжизнь Рамакришны",
		section: "ЗЛ ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1972,
		author: "Мураками Х",
		title: "Послемрак",
		section: "ЗЛ ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1973,
		author: "Циолковский",
		title: "Вне Земли",
		section: "Н ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1974,
		author: "Аполлинер",
		title: "Мост Мирабо",
		section: "ЗЛ ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1975,
		author: "Рильке",
		title: "Часослов",
		section: "ЗЛ ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1976,
		author: "Овидий",
		title: "Сборник",
		section: "ЗЛ ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1977,
		author: "Нострадамус",
		title: "Центурии",
		section: "ЗЛ Ст",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1978,
		author: "Ницше",
		title: "Так говорил Заратустра",
		section: "ЗЛ Фил",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1979,
		author: "Брехт",
		title: "Трехгрошовая опера",
		section: "ЗЛ ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1980,
		author: "Фромм",
		title: "Искусство любить",
		section: "ЗЛ Псих",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1981,
		author: "Зюскинд",
		title: "Голубка",
		section: "ЗЛ ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1982,
		author: "Зюскинд",
		title: "Повесть о господине Зоммере",
		section: "ЗЛ ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1983,
		author: "Дегтярев",
		title: "Начало отечества",
		section: "И ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1984,
		author: "Дегтярев",
		title: "Невская битва",
		section: "И ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1985,
		author: "Лебедев",
		title: "Честь",
		section: "И ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1986,
		author: "Мур",
		title: "Ирландский бард любви и свободы",
		section: "ЗЛ ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1987,
		author: "Шубин",
		title: "Поэты Пушкинского Петербурга",
		section: "РЛ Био",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1988,
		author: "Книпович",
		title: "Об Александре Блоке",
		section: "РЛ Био",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1989,
		author: "Бакеридж",
		title: "Дженис и его друзья",
		section: "ЗЛ ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1990,
		author: "Сборник",
		title: "Великий друг молодежи",
		section: "И ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1991,
		author: "Буслович",
		title: "Люди. Герои. Боги",
		section: "ИИ ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1992,
		author: "Филатова",
		title: "Краткий иконописный словарь",
		section: "ИИ ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1993,
		author: "Кючярианц",
		title: "Иван Старов",
		section: "ИИ Био",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1994,
		author: "Шуйский",
		title: "Андриян Захаров",
		section: "ИИ Био",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1995,
		author: "Бартенева",
		title: "Николай Бенуа",
		section: "ИИ Био",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1996,
		author: "Смирнов",
		title: "Юбилейные и памятные монеты…",
		section: "И Спец",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1997,
		author: "Луценко",
		title: "Петербург в старых открытках",
		section: "ИИ ",
		placed: "6-7-1",
		read: false
	},
	{
		id: 1998,
		author: "Б/а",
		title: "История Чемпионата Мира по футболу",
		section: "И Спорт",
		placed: "5-1-2",
		read: false
	},
	{
		id: 1999,
		author: "Эко",
		title: "Цивилизация Средневековья",
		section: "И ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2000,
		author: "Аксенова",
		title: "Энциклопедия для детей. Математика",
		section: "УЛ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2001,
		author: "Алпатов",
		title: "Всеобщая история искусств. Том 3",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2002,
		author: "Хасиса",
		title: "История русского магазина",
		section: "И Спец",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2003,
		author: "Сапожников",
		title: "Пятьдесят четыре картины Ветхого Завета",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2004,
		author: "Каспари",
		title: "Новый Завет в картинках",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2005,
		author: "Габдрахманов и др",
		title: "Энциклопедия царей и императоров России",
		section: "И ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2006,
		author: "Ашер",
		title: "Письма на заметку",
		section: "ЗЛ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2007,
		author: "Гаков",
		title: "Фантастика века (сборник зар и отеч фантастики)",
		section: "ЗЛ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2008,
		author: "Кун",
		title: "Легенды и мифы Древней Греции",
		section: "ЗЛ Фолк",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2009,
		author: "Б/а",
		title: "Фитнес и здоровье",
		section: " Спорт",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2010,
		author: "Хейвуд",
		title: "Атлас всемирной истории",
		section: "И ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2011,
		author: "Гумилев Л",
		title: "Древняя Русь и Великая степь",
		section: "И ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2012,
		author: "Гумилев Л",
		title: "От Руси до России",
		section: "И ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2013,
		author: "Милетинский",
		title: "Мифологический словарь",
		section: "И Спец",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2014,
		author: "Орлова",
		title: "Федотов",
		section: "ИИ Био",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2015,
		author: "Орлова",
		title: "Венецианов",
		section: "ИИ Био",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2016,
		author: "Орлова",
		title: "Малевич",
		section: "ИИ Био",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2017,
		author: "Орлова",
		title: "Бенуа",
		section: "ИИ Био",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2018,
		author: "Орлова",
		title: "Кипренский",
		section: "ИИ Био",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2019,
		author: "Орлова",
		title: "Репин",
		section: "ИИ Био",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2020,
		author: "Орлова",
		title: "Васнецов",
		section: "ИИ Био",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2021,
		author: "Клиновский",
		title: "Искусство позирования",
		section: "ИИ Хобби",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2022,
		author: "Свинглхарст",
		title: "Сальвадор Дали",
		section: "ИИ Био",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2023,
		author: "Мухин",
		title: "Церковная культура Санкт-Петербурга",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2024,
		author: "Б/а",
		title: "Люксембургский дворец",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2025,
		author: "Мейер",
		title: "Версаль",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2026,
		author: "Шульц",
		title: "Храмы Санкт-Петербурга",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2027,
		author: "Б/а",
		title: "Революция сюрреализма",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2028,
		author: "Лурье Ф",
		title: "Блистательный Петербург",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2029,
		author: "Лесли",
		title: "Сюрреализм",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2030,
		author: "Сборник",
		title: "Малая графическая пластика 22-45гг.",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2031,
		author: "Гордин",
		title: "Пушкинский Петербург",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2032,
		author: "Пиотровский",
		title: "Эрмитаж",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2033,
		author: "Сборник",
		title: "Авто",
		section: " Спец",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2034,
		author: "Куглер",
		title: "Венский музей истории искусств",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2035,
		author: "Журнал",
		title: "Юный художник 5шт.",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2036,
		author: "Журнал",
		title: "Черная жемчужина",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2037,
		author: "Троицкий, Умбражко",
		title: "Советский Союз. Годы испытания",
		section: "УЛ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2038,
		author: "Захарова",
		title: "Мир в 15-18вв.",
		section: "УЛ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2039,
		author: "Гончаров",
		title: "Об искусстве графики",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2040,
		author: "Б/а",
		title: "Ленинград в период ВОВ",
		section: "ИИ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2041,
		author: "Яцук ",
		title: "Программа по МХК",
		section: "УЛ ",
		placed: "5-1-2",
		read: false
	},
	{
		id: 2042,
		author: "Сборник",
		title: "Венок Пушкину",
		section: "РЛ Ст",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2043,
		author: "Шуйский",
		title: "Строгий классицизм",
		section: "ИИ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2044,
		author: "Мучник",
		title: "Тень Сфинкса",
		section: "РЛ Ст",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2045,
		author: "Колотова",
		title: "Загадки Петербургских дворцов",
		section: "ИИ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2046,
		author: "Кулешов и др",
		title: "Памятник Чесменская победа",
		section: "ИИ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2047,
		author: "Лебедев",
		title: "Археологические памятники Ленобласти",
		section: "ИИ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2048,
		author: "Гессен",
		title: "Все волновало нежный ум",
		section: "РЛ Био",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2049,
		author: "Матвеев",
		title: "Атланты и кариатиды Петербурга",
		section: "ИИ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2050,
		author: "Бурковский и др",
		title: "Крейсер Аврора",
		section: "И ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2051,
		author: "Аксельрод и др",
		title: "Сады и парки Ленинграда",
		section: "ИИ Пут",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2052,
		author: "Михайлова",
		title: "Щедрин",
		section: "ИИ Био",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2053,
		author: "Петинова",
		title: "Тропинин",
		section: "ИИ Био",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2054,
		author: "Новерр",
		title: "Письма о танце",
		section: "ИИ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2055,
		author: "Андреева",
		title: "Первые художники Петербурга",
		section: "ИИ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2056,
		author: "Воронов, Ходасевич",
		title: "Архитектурный ансамбль Камерон",
		section: "ИИ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2057,
		author: "Вознесенски",
		title: "Стихи о любви",
		section: "РЛ Ст",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2058,
		author: "Шерих",
		title: "Голос родного города",
		section: "И Спец",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2059,
		author: "Мирошник",
		title: "Крым",
		section: " Пут",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2060,
		author: "Раскин",
		title: "Петродворец коттедж",
		section: " Пут",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2061,
		author: "Сборник",
		title: "Стихи поэтов Египта",
		section: "ЗЛ Ст",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2062,
		author: "Кючарианц",
		title: "Художественные памятники г. Ломоносова",
		section: "ИИ Пут",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2063,
		author: "Шуйский",
		title: "Зрелое русское барокко и ранний классицизм",
		section: "ИИ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2064,
		author: "Арсеньев",
		title: "Звери=Боги=Люди",
		section: "И Рел",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2065,
		author: "Костомаров ",
		title: "Очерк домашней жизни 16 17 столетия",
		section: "И ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2066,
		author: "Вайнштейн ",
		title: "Молодежи о театре",
		section: "ИИ Спец",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2067,
		author: "Сборник",
		title: "На Невском сквозняке",
		section: "РЛ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2068,
		author: "Филатов",
		title: "Любовь к 3 апельсинам",
		section: "РЛ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2069,
		author: "Рыжий",
		title: "Типа песня",
		section: "РЛ Ст",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2070,
		author: "Блауберг, Пантин",
		title: "Краткий словарь по философии",
		section: "Н Фил",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2071,
		author: "Бредбери",
		title: "Марсианские хроники",
		section: "ЗЛ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2072,
		author: "Тарковский А.",
		title: "Собрание сочинений. Т.1",
		section: "РЛ Ст",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2073,
		author: "Костылев, Костылев",
		title: "Ленинград. Петербург 20 век",
		section: "ИИ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2074,
		author: "Гришковец",
		title: "Весы",
		section: "РЛ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2075,
		author: "Гришковец",
		title: "Лето - лето и другие времена года",
		section: "РЛ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2076,
		author: "Валицкая",
		title: "Левицкий",
		section: "ИИ Био",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2077,
		author: "Сандулов",
		title: "Народ и власть",
		section: "И ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2078,
		author: "Тарасов",
		title: "Ге",
		section: "ИИ Био",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2079,
		author: "Кючарианц",
		title: "Ринальди",
		section: "ИИ Био",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2080,
		author: "Чеканова",
		title: "Монферран",
		section: "ИИ Био",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2081,
		author: "Ходасеевич",
		title: "Лирика",
		section: "РЛ Ст",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2082,
		author: "Сборник",
		title: "Былины",
		section: "РЛ Фолк",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2083,
		author: "Есенин",
		title: "Персидские мотивы",
		section: "РЛ Ст",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2084,
		author: "Есенин",
		title: "Избранные стихи",
		section: "РЛ Ст",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2085,
		author: "Есенин",
		title: "Песнь о великом походе",
		section: "РЛ Ст",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2086,
		author: "Смирнов",
		title: "Свидетельствую сам",
		section: "РЛ Ст",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2087,
		author: "Королькевич",
		title: "А музы не молчали",
		section: "РЛ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2088,
		author: "Дудин",
		title: "Рубежи",
		section: "РЛ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2089,
		author: "Форд Г.",
		title: "Моя жизнь. Достижения",
		section: "И Био",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2090,
		author: "Есенин",
		title: "Березовый ситец",
		section: "РЛ Ст",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2091,
		author: "Сахаров",
		title: "Русское народное чернокнижье",
		section: "РЛ Фолк",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2092,
		author: "Б/а",
		title: "Велесова книга. Славянские Веды",
		section: "РЛ Фолк",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2093,
		author: "Верещагин",
		title: "Очерки, наброски, воспоминания",
		section: "ИИ Био",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2094,
		author: "Мацумото",
		title: "Стена глаз",
		section: "ЗЛ Дет",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2095,
		author: "Акунин",
		title: "Шпионский роман",
		section: "РЛ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2096,
		author: "Мень",
		title: "Истоки религии",
		section: "Рел ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2097,
		author: "Мень",
		title: "Библия и литература",
		section: "Рел ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2098,
		author: "Сборник",
		title: "Мастера американской фантастики",
		section: "ЗЛ ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2099,
		author: "Богданов",
		title: "Опальные воеводы",
		section: "И ",
		placed: "5-1-1",
		read: false
	},
	{
		id: 2100,
		author: "б/а",
		title: "Ленинград. Блокада. Подвиг",
		section: "И ",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2101,
		author: "Лихачев",
		title: "Том 1",
		section: "ИИ ",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2102,
		author: "Лихачев",
		title: "Том 2",
		section: "ИИ ",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2103,
		author: "Лихачев",
		title: "Том 3",
		section: "ИИ ",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2104,
		author: "Кулугина",
		title: "Французский это супер",
		section: "УЛ ",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2105,
		author: "Мекки",
		title: "Картины из шерсти войлока",
		section: " Хобби",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2106,
		author: "Вольк-Герхе",
		title: "Цветы из шерсти",
		section: " Хобби",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2107,
		author: "Журнал",
		title: "Идеи для валяния",
		section: " Хобби",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2108,
		author: "Фрейд",
		title: "Толкование сновидений",
		section: "Н Фил",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2109,
		author: "Ганичкина",
		title: "Все о цветах в вашем доме",
		section: "Н Хобби",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2110,
		author: "Б/а",
		title: "Все о полевых цветах России",
		section: "Н Хобби",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2111,
		author: "Летчфорд",
		title: "Исполнительная документация в строительстве",
		section: "Н Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2112,
		author: "Симонов",
		title: "Строительство и ремонт. Нормы и калькуляция",
		section: "Н Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2113,
		author: "Неруш",
		title: "Коммерческая логистика",
		section: "Н Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2114,
		author: "Кузнецов",
		title: "Инструменты и материалы для строительства",
		section: "Н Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2115,
		author: "Наназашвили",
		title: "Расход материалов при строительстве",
		section: "Н Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2116,
		author: "Костюченко",
		title: "Организация... в строительстве",
		section: "Н Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2117,
		author: "Маилян и др",
		title: "Документация в стр-ве",
		section: "Н Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2118,
		author: "Данилкин и др",
		title: "Основы строительного производства",
		section: "Н Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2119,
		author: "Ермакова",
		title: "Справочник по математике для экономистов",
		section: "УЛ Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2120,
		author: "аль-Халили",
		title: "Квант",
		section: "Н Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2121,
		author: "Гольдин",
		title: "Квантовая физика. Вводный курс",
		section: "Н Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2122,
		author: "Льюис",
		title: "Как развить креативность за семь дней",
		section: "УЛ Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2123,
		author: "Затц",
		title: "Бог играет невидимыми кубиками",
		section: "Н Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2124,
		author: "Литвак",
		title: "Математика для безнадежных гуманитариев",
		section: "Н Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2125,
		author: "Кодуэл",
		title: "Иллюзия и действительность",
		section: "Н Ст",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2126,
		author: "Эйнасто, Чернин",
		title: "Темная материя и энергия",
		section: "Н Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2127,
		author: "Лукьяненко",
		title: "Порог",
		section: "РЛ Ф",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2128,
		author: "Мишанова",
		title: "Картины из шерсти",
		section: "УЛ Хобби",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2129,
		author: "Тасминская",
		title: "Необычный фелтинг",
		section: "УЛ Хобби",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2130,
		author: "Симмонс",
		title: "Гиперион",
		section: "ЗЛ Ф",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2131,
		author: "Симмонс",
		title: "Падение Гипериона",
		section: "ЗЛ Ф",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2132,
		author: "Симмонс",
		title: "Эндимион. Восход Эндимиона",
		section: "ЗЛ Ф",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2133,
		author: "Швецов",
		title: "Справочник по элементарной математике ",
		section: "УЛ Спец",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2134,
		author: "Аристотель",
		title: "Поэтика",
		section: "Н Ст",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2135,
		author: "Шопенгауэр",
		title: "Избранное",
		section: "Н Фил",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2136,
		author: "Сказкин",
		title: "Настольная книга атеиста",
		section: "Н Рел",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2137,
		author: "Ницше",
		title: "Избранное",
		section: "Н Фил",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2138,
		author: "Сборник",
		title: "Из истории мировой гуманистической мысли",
		section: "Н Фил",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2139,
		author: "Шопенгауэр",
		title: "Свобода воли и нравственность",
		section: "Н Фил",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2140,
		author: "Лукьянов",
		title: "Становление философии на востоке",
		section: "Н Фил",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2141,
		author: "Бердяев",
		title: "Философия свободного духа",
		section: "Н Фил",
		placed: "5-2-1",
		read: false
	},
	{
		id: 2142,
		author: "Грибовский",
		title: "Записки об императрице Екатерине В.",
		section: "И Био",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2143,
		author: "Даринский",
		title: "История г. Санкт-Петербурга",
		section: "ИИ Пут",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2144,
		author: "Раков",
		title: "Петербург город литературных героев",
		section: "ИИ Пут",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2145,
		author: "Осипов",
		title: "1760год",
		section: "И ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2146,
		author: "Сарабьянов",
		title: "История русского искосства конца 19-нач.20вв.",
		section: "ИИ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2147,
		author: "ЖЗЛ",
		title: "Иванов, Федотов, Перов, Крамской",
		section: "ИИ Био",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2148,
		author: "Рипарелли",
		title: "Христианские ереси",
		section: "Н Рел",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2149,
		author: "Черенотти",
		title: "Розенкрейцеры",
		section: "Н Рел",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2150,
		author: "Суворов",
		title: "Наука побеждать",
		section: "И Спец",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2151,
		author: "Павловский",
		title: " Ночь в Гефсиманском саду",
		section: "ЗЛ Рел",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2152,
		author: "Пресняков",
		title: "Российские самодержцы",
		section: "И ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2153,
		author: "Б/а",
		title: "Россия под скипетром Романовых",
		section: "И ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2154,
		author: "Забелин",
		title: "Домашний быт усских царей",
		section: "И ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2155,
		author: "Карамзин",
		title: "Предания веков",
		section: "И ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2156,
		author: "Ключевский",
		title: "Исторические портреты",
		section: "И ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2157,
		author: "Б/а",
		title: "Всеобщая история обработанная Сатириконом",
		section: "И ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2158,
		author: "Пушкарев",
		title: "Обзор руссой истории",
		section: "И ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2159,
		author: "Ишимова",
		title: "История России в рассказах для детей Том 1",
		section: "И ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2160,
		author: "Ишимова",
		title: "История России в рассказах для детей Том 2",
		section: "И ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2161,
		author: "Асиенко",
		title: "История г. Санкт-Петербурга в лицах и картинках",
		section: "И ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2162,
		author: "Сборник",
		title: "Физиология Петербурга",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2163,
		author: "Сборник",
		title: "Русская историческая повесть",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2164,
		author: "Обломиевский",
		title: "Французский классицизм",
		section: "ИИ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2165,
		author: "Кунин",
		title: "Последний год жизни Пушкина",
		section: "И Био",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2166,
		author: "Сборник",
		title: "Поэты Пушкинской поры",
		section: "РЛ Ст",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2167,
		author: "Стейнбек",
		title: "Заблудившийся автобус и др",
		section: "ЗЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2168,
		author: "Карко",
		title: "От Монмартра до латинского квартала",
		section: "ИИ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2169,
		author: "Прус",
		title: "Фараон",
		section: "ЗЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2170,
		author: "Блаватская",
		title: "Избранное. Том 1",
		section: " Фил",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2171,
		author: "Блаватская",
		title: "Избранное. Том 2",
		section: " Фил",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2172,
		author: "Чуковский",
		title: "Том 2",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2173,
		author: "Нерсесянц",
		title: "Сократ",
		section: "Н Био",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2174,
		author: "Пикуль",
		title: "Нечистая сила",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2175,
		author: "Бродский",
		title: "Малое собрание сочинений",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2176,
		author: "Распутин",
		title: "Избранное. Том 1",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2177,
		author: "Солженицын",
		title: "Рассказы",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2178,
		author: "Солженицын",
		title: "Пьесы",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2179,
		author: "Солженицын",
		title: "Архипелаг ГУЛАГ. Том 1",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2180,
		author: "Солженицын",
		title: "Архипелаг ГУЛАГ. Том 2",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2181,
		author: "Солженицын",
		title: "Архипелаг ГУЛАГ. Том 3",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2182,
		author: "Солженицын",
		title: "В круге первом",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2183,
		author: "Солженицын",
		title: "Раковый корпус",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2184,
		author: "Сборник",
		title: "Из истории русской гуманистической мысли",
		section: "РЛ Фил",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2185,
		author: "Гарин-Михайловский",
		title: "Детство Темы. Гимназисты",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2186,
		author: "Сборник",
		title: "Синий Апельсин",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2187,
		author: "Башилов",
		title: "История русского масонства. Том 1,2",
		section: "И Спец",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2188,
		author: "Тайлор",
		title: " первобытная культура",
		section: "РЛ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2189,
		author: "Провиденский",
		title: "Полет Удода",
		section: "РЛ Ст",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2190,
		author: "Шрамкова",
		title: "Художественное наследие Древнего мира",
		section: "ИИ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2191,
		author: "Русакова",
		title: "Живопись французских импрессионистов",
		section: "ИИ ",
		placed: "5-3-2",
		read: false
	},
	{
		id: 2192,
		author: "Таранов",
		title: "120 философов. Том 1",
		section: "Н Био",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2193,
		author: "Таранов",
		title: "120 философов. Том 1",
		section: "Н Био",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2194,
		author: "Бердяев, Франк",
		title: "Власть и право",
		section: "Н Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2195,
		author: "Гессен",
		title: "Том 1",
		section: "ЗЛ Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2196,
		author: "Гессен",
		title: "Том 2",
		section: "ЗЛ Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2197,
		author: "Гессен",
		title: "Том 3",
		section: "ЗЛ Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2198,
		author: "Гессен",
		title: "Том 4",
		section: "ЗЛ Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2199,
		author: "Сборник",
		title: "Русские философы. Том 1",
		section: "Н Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2200,
		author: "Сборник",
		title: "Русские философы. Том 2",
		section: "Н Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2201,
		author: "Сборник",
		title: "Русские философы. Том 3",
		section: "Н Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2202,
		author: "Пронин",
		title: "Катулл",
		section: "ЗЛ Био",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2203,
		author: "Мисима",
		title: "Золотой храм. Сборник",
		section: "ЗЛ ",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2204,
		author: "Баткин",
		title: "Конституционные идеи Сахарова",
		section: "И ",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2205,
		author: "Покровский",
		title: "Словарь церковных терминов",
		section: " Рел",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2206,
		author: "Сборник",
		title: "Русская душа",
		section: "РЛ ",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2207,
		author: "Паламарчук",
		title: "Москва или 3-й Рим",
		section: "И Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2208,
		author: "Соловьев В",
		title: "Сборник",
		section: "РЛ Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2209,
		author: "Розанов ",
		title: "О себе и жизни своей",
		section: "РЛ Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2210,
		author: "Блаватская",
		title: "Сборник",
		section: "РЛ Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2211,
		author: "Кронштадский",
		title: "О боге, мире и душе",
		section: "РЛ Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2212,
		author: "Мень",
		title: "Православное богослужение",
		section: "РЛ Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2213,
		author: "Ильин",
		title: "О грядущем России",
		section: "РЛ Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2214,
		author: "Сборник",
		title: "Россия между Европой и Азией",
		section: "РЛ Фил",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2215,
		author: "Всеволодов",
		title: "Беседы о фалеристике",
		section: "Н Спец",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2216,
		author: "Шварц",
		title: "Обыкновенное чудо",
		section: "РЛ ",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2217,
		author: "Бронштейн, Семендяев",
		title: "Справочник по математике для инженеров",
		section: "Н Спец",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2218,
		author: "Б/а",
		title: "фин-рус, рус-фин словарь",
		section: "Н Спец",
		placed: "5-3-1",
		read: false
	},
	{
		id: 2219,
		author: "Сборник",
		title: "Английская романтическая поэзия",
		section: "ЗЛ Ст",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2220,
		author: "Циолковский",
		title: "Вне Земли",
		section: "Н Фан",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2221,
		author: "Виленкин",
		title: "Мир многих миров",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2222,
		author: "Брукс",
		title: "Тринадцать вещей в которых нет ни малейшего смысла",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2223,
		author: "Дойч",
		title: "Начало бесконечности",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2224,
		author: "Стюарт",
		title: "Величайшие математические задачи",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2225,
		author: "Саскинд",
		title: "Космический ландшафт",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2226,
		author: "Каку",
		title: "Гиперпространство",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2227,
		author: "Барроу",
		title: "Новые теории всего",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2228,
		author: "Фейнман",
		title: "Радость познания",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2229,
		author: "Яу, Надис",
		title: "Теория струн",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2230,
		author: "Уотс",
		title: "По ту сторону рифта",
		section: "ЗЛ Фан",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2231,
		author: "Фейгин",
		title: "Парадоксы квантового мира",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2232,
		author: "Соколов",
		title: "Мифы об эволюции Человека",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2233,
		author: "Пелевин",
		title: "Смотритель. Том 1",
		section: "РЛ ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2234,
		author: "Пелевин",
		title: "Смотритель. Том 2",
		section: "РЛ ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2235,
		author: "Пелевин",
		title: "Т",
		section: "РЛ ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2236,
		author: "Миллер",
		title: "Sexus",
		section: "ЗЛ ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2237,
		author: "Эко",
		title: "Остров накануне",
		section: "ЗЛ ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2238,
		author: "Эко",
		title: "Баудолино",
		section: "ЗЛ ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2239,
		author: "Кизи",
		title: "Пролетая над гнездом кукушки",
		section: "ЗЛ ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2240,
		author: "Маркес",
		title: "Сто лет одиночества",
		section: "ЗЛ ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2241,
		author: "Тарковский Арс",
		title: "Судьба моя сгорела между строк",
		section: "РЛ Ст",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2242,
		author: "Голубинцев",
		title: "Философия науки",
		section: "Н Фил",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2243,
		author: "Смирнов",
		title: "Физика параллельного микромира",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2244,
		author: "Козаржевский",
		title: "Учебник латинского языка",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2245,
		author: "Лехин",
		title: "Словарь иностранных слов",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2246,
		author: "Дагаев",
		title: "Книга для чтения по астрономии",
		section: "УЛ ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2247,
		author: "Фейнман",
		title: "Характер физических законов",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2248,
		author: "Хокинг",
		title: "Будущее пространства-времени",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2249,
		author: "Хокинг",
		title: "Черные дыры и молодые вселенные",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2250,
		author: "Хокинг",
		title: "Теория всего",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2251,
		author: "Хокинг",
		title: "Высший замысел",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2252,
		author: "Хокинг",
		title: "Природа пространства и времени",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2253,
		author: "Хокинг Дж",
		title: "Быть Хокингом",
		section: "Н Био",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2254,
		author: "Фейгин",
		title: "Стивен Хокинг- гений черных дыр",
		section: "Н Био",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2255,
		author: "Б/а",
		title: "Эйнштейн. Теория относительности",
		section: "Н Био",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2256,
		author: "Б/а",
		title: "Гейзенберг. Принцип неопределенности",
		section: "Н Био",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2257,
		author: "Саскинд и Фридман",
		title: "Квантовая механика. Теоретический минимум",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2258,
		author: "Зеланд",
		title: "Транссерфинг реальности. Ступень 2",
		section: "Н Псих",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2259,
		author: "Зеланд",
		title: "Транссерфинг реальности. Ступень 3",
		section: "Н Псих",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2260,
		author: "Савельев",
		title: "Курс общей физики. Том 1",
		section: "УЛ ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2261,
		author: "Савельев",
		title: "Курс общей физики. Том 2",
		section: "УЛ ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2262,
		author: "Рымкевич и Яблонский",
		title: "Методические указания по физике",
		section: "УЛ ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2263,
		author: "Б/а",
		title: "Квантовая физикам",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2264,
		author: "Бехтерева",
		title: "Магия мозга и лабиринты жизни",
		section: "Н ",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2265,
		author: "Скворцов",
		title: "Основы культуры речи",
		section: "УЛ Спец",
		placed: "5-4-2",
		read: false
	},
	{
		id: 2266,
		author: "Квятковский",
		title: "Поэтический словарь",
		section: "Н Спец",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2267,
		author: "Пухначев",
		title: "Математика без формул",
		section: "Н ",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2268,
		author: "Демидович и Кудрявцев",
		title: "Краткий курс высшей математики",
		section: "УЛ ",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2269,
		author: "Выгодский",
		title: "Справочник по элементарной математике ",
		section: "Н Спец",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2270,
		author: "Богомолов",
		title: "Практические занятия по математике",
		section: "УЛ Спец",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2271,
		author: "Выгодский",
		title: "Справочник по высшей математике ",
		section: "Н Спец",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2272,
		author: "Перельман",
		title: "Живая математика",
		section: "Н ",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2273,
		author: "Киселев",
		title: "70 футбольных лет",
		section: "И Спорт",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2274,
		author: "Кропоткин",
		title: "Петропавловская крепость. Побег",
		section: "И Био",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2275,
		author: "Гомер",
		title: "Илиада",
		section: "ЗЛ ",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2276,
		author: "Бродский",
		title: "Холмы",
		section: "РЛ Ст",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2277,
		author: "Хармс",
		title: "Проза",
		section: "РЛ ",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2278,
		author: "Заболоцкий",
		title: "Стихотворения",
		section: "РЛ Ст",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2279,
		author: "Горбовский",
		title: "Тишина",
		section: "РЛ Ст",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2280,
		author: "Мучник",
		title: "Стихотворения",
		section: "РЛ Ст",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2281,
		author: "Белоградска",
		title: "Роден",
		section: "ИИ Био",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2282,
		author: "Эко",
		title: "Шесть прогулок в литературных лесах",
		section: "ЗЛ ",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2283,
		author: "Тисли",
		title: "Бродский среди нас",
		section: "РЛ Био",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2284,
		author: "Следопыт",
		title: "Чехия",
		section: " Стр",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2285,
		author: "Тарковский Арс",
		title: "Благословенный свет",
		section: "РЛ Ст",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2286,
		author: "Локшина",
		title: "Краткий словарь иностранных слов",
		section: "Н Спец",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2287,
		author: "Воднев и др",
		title: "Математический словарь высшей школы",
		section: "Н Спец",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2288,
		author: "Стоппард",
		title: "Травести",
		section: "ЗЛ ",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2289,
		author: "Сборник",
		title: "Русский космизм",
		section: "Н Фил",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2290,
		author: "Сборник",
		title: "Современная английская новелла",
		section: "ЗЛ ",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2291,
		author: "Фролов",
		title: "Введение в философию.  Т.1",
		section: "Н Фил",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2292,
		author: "Фролов",
		title: "Введение в философию.  Т.2",
		section: "Н Фил",
		placed: "5-4-1",
		read: false
	},
	{
		id: 2293,
		author: "Лебедев",
		title: "Искупление",
		section: "РЛ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2294,
		author: "Пожарская",
		title: "Александр Головин",
		section: "ИИ Био",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2295,
		author: "Саша Черный",
		title: "Избранная проза",
		section: "РЛ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2296,
		author: "Латоретте",
		title: "История Христианства",
		section: "И ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2297,
		author: "Ирмшер",
		title: "Словарь античности",
		section: "И ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2298,
		author: "Голомшток",
		title: "Тоталитарное искусство",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2299,
		author: "Волков",
		title: "История русской культуры 20века",
		section: "РЛ Био",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2300,
		author: "Шангина",
		title: "Русские девушки",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2301,
		author: "Серов",
		title: "Античный хроматизм",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2302,
		author: "Гринштейн, Зайонц",
		title: "Квантовый вызов",
		section: "Н ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2303,
		author: "Фрейд",
		title: "Художник и фантазирование",
		section: "Н Фил",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2304,
		author: "Волков и др",
		title: "Очерки истории и культуры славян",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2305,
		author: "Власов",
		title: "Стили в искусстве. Том 1",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2306,
		author: "Власов",
		title: "Стили в искусстве. Том 2",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2307,
		author: "Власов",
		title: "Стили в искусстве. Том 3",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2308,
		author: "Вагнер, Владышевская",
		title: "Искусство Древней Руси",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2309,
		author: "Анисимов",
		title: "История России от Рюрика до Путина",
		section: "И ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2310,
		author: "Анисимов",
		title: "Императорская Россия",
		section: "И ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2311,
		author: "Якушин",
		title: "Некрасов в жизни и творчестве",
		section: "РЛ Био",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2312,
		author: "Лесков",
		title: "Русские Демономаны",
		section: "РЛ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2313,
		author: "Брюсов",
		title: "Огненный ангел",
		section: "РЛ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2314,
		author: "Дмитриева и др",
		title: "От средневековья к новому времени",
		section: "И ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2315,
		author: "Гнедич",
		title: "Всемирная история искусств",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2316,
		author: "Горюнов, Тубли",
		title: "Архитектура эпохи модерна",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2317,
		author: "Лисичкина",
		title: "МХК. Книга 1",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2318,
		author: "Дмитриева и др",
		title: "Краткая история искусств. Том 1",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2319,
		author: "Дмитриева и др",
		title: "Краткая история искусств. Том 2",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2320,
		author: "Недошивин",
		title: "Прогулки по Серебряному веку",
		section: "РЛ Био",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2321,
		author: "Рыбаков",
		title: "Язычество древних славян",
		section: "И ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2322,
		author: "Рыбаков",
		title: "Киевская Русь и русские княжества",
		section: "И ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2323,
		author: "Любимов",
		title: "Искусство Древней Руси",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2324,
		author: "Любимов",
		title: "Искусство Древнего Мира",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2325,
		author: "Любимов",
		title: "Искусство Западной Европы",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2326,
		author: "Гомперц",
		title: "Непонятное искусство",
		section: "ИИ ",
		placed: "5-5-1",
		read: false
	},
	{
		id: 2327,
		author: "Герцен",
		title: "Былое и думы",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2328,
		author: "Новиков",
		title: "Избранные сочинения",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2329,
		author: "Сборник",
		title: "Русские народные сказки",
		section: "РЛ Фолк",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2330,
		author: "Сборник",
		title: "Былины",
		section: "РЛ Фолк",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2331,
		author: "Довлатов",
		title: "Заповедник",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2332,
		author: "Сборник",
		title: "Старые годы",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2333,
		author: "Никитин",
		title: "Стихотворения",
		section: "РЛ Ст",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2334,
		author: "Сборник",
		title: "Былины",
		section: "РЛ Фолк",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2335,
		author: "Лихачев",
		title: "Повести Древней Руси",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2336,
		author: "Сильвестр",
		title: "Домострой",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2337,
		author: "Никитин",
		title: "Сочинения",
		section: "РЛ Ст",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2338,
		author: "Сборник",
		title: "Душа полна тобой",
		section: "РЛ Ст",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2339,
		author: "Орлов",
		title: "История русской литературы 18 века",
		section: "ИИ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2340,
		author: "Белинский",
		title: "Сочинения А. Пушкина",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2341,
		author: "Жуковский",
		title: "Стихотворения и баллады",
		section: "РЛ Ст",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2342,
		author: "Вронский",
		title: "Белгородские колодцы. Злой город",
		section: "РЛ Ст",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2343,
		author: "Блок",
		title: "Избранное",
		section: "РЛ Ст",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2344,
		author: "Сборник",
		title: "Город и мир",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2345,
		author: "Достоевский",
		title: "Братья Карамазовы",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2346,
		author: "Трофимов",
		title: "Поиски и находки в московских архивах",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2347,
		author: "Андреев Л",
		title: "Рассказы",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2348,
		author: "Есенин",
		title: "Анна Снегина",
		section: "РЛ Ст",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2349,
		author: "Тынянов",
		title: "Кюхля. Смерть Вазир-Мухтара",
		section: "РЛ Био",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2350,
		author: "Б/а",
		title: "Лао-Цзы",
		section: "И Фил",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2351,
		author: "Б/а",
		title: "Махатма Ганди",
		section: "И Фил",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2352,
		author: "Б/а",
		title: "Блаженный Августин",
		section: "И Фил",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2353,
		author: "Б/а",
		title: "И сказал господь Моисею",
		section: "И Фил",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2354,
		author: "Каган",
		title: "Лекции по истории эстетики",
		section: "ИИ Спец",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2355,
		author: "Б/а",
		title: "Повесть о браслете",
		section: "ЗЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2356,
		author: "Содзи Симада",
		title: "Токийский зодиак",
		section: "ЗЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2357,
		author: "Борисовская",
		title: "Сто памятных дат",
		section: "ИИ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2358,
		author: "Егоров и др",
		title: "Спасение цесаревича Алексея",
		section: "И Био",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2359,
		author: "Мавродин",
		title: "Основание Петербурга",
		section: "ИИ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2360,
		author: "Жуковский",
		title: "Стихотворения. Баллады",
		section: "РЛ Ст",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2361,
		author: "Державин",
		title: "Стихотворения",
		section: "РЛ Ст",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2362,
		author: "Ковалевская",
		title: "Избранные произведения",
		section: "Н Био",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2363,
		author: "Гумилев Л",
		title: "Конец и вновь начало",
		section: "И ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2364,
		author: "Хренников",
		title: "Этюды об изобразительном искусстве",
		section: "ИИ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2365,
		author: "Андерсен",
		title: "Пьесы. Сказки",
		section: "ЗЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2366,
		author: "Миловский",
		title: "Скачи добрый Единорог",
		section: "ИИ Хобби",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2367,
		author: "Горький",
		title: "Пьесы",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2368,
		author: "Горький",
		title: "Избранное",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2369,
		author: "Горький",
		title: "Детство. В людях. Мои университеты",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2370,
		author: "Горький",
		title: "Мать. Дело Артамоновых",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2371,
		author: "Горький",
		title: "Рассказы. Очерки",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2372,
		author: "Горький",
		title: "Макар Чудра и др. рассказы",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2373,
		author: "Лермонтов",
		title: "Парус",
		section: "РЛ Ст",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2374,
		author: "Бондарев",
		title: "Горячий снег",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2375,
		author: "Берггольц",
		title: "Дневные звезды",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2376,
		author: "Флегон",
		title: "За пределами русских словарей",
		section: "Н Спец",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2377,
		author: "Фадеев",
		title: "Разгром. Молодая гвардия",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2378,
		author: "Гроссман",
		title: "Жизнь и судьба",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2379,
		author: "Майков",
		title: "Сенокос",
		section: "РЛ Ст",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2380,
		author: "Якушин",
		title: "Публицисты современника",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2381,
		author: "Фурманов",
		title: "Незабываемые дни",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2382,
		author: "Шерих",
		title: "Городской месяцеслов",
		section: "И ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2383,
		author: "Яцук",
		title: "Стихотворения",
		section: "РЛ ",
		placed: "5-6-2",
		read: false
	},
	{
		id: 2384,
		author: "Пелевин",
		title: "Священная книга оборотня",
		section: "РЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2385,
		author: "Маяковский",
		title: "Стихи",
		section: "РЛ Ст",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2386,
		author: "Короленко",
		title: "Дети подземелья",
		section: "РЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2387,
		author: "Короленко",
		title: "Без языка",
		section: "РЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2388,
		author: "Сартр",
		title: "Слова",
		section: "ЗЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2389,
		author: "Громыко",
		title: "Сибирские знакомые друзья Достоевского",
		section: "РЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2390,
		author: "Герцен",
		title: "Сорока-воровка",
		section: "РЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2391,
		author: "Комина",
		title: "Над страницами русской классики",
		section: "РЛ Спец",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2392,
		author: "Сборник",
		title: "Достоевский и мировая культура. Часть 1",
		section: "РЛ Спец",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2393,
		author: "Сборник",
		title: "Достоевский и мировая культура. Часть 2",
		section: "РЛ Спец",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2394,
		author: "Сборник",
		title: "Достоевский и мировая культура. Часть 3",
		section: "РЛ Спец",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2395,
		author: "Пастернак",
		title: "Охранная грамота",
		section: "РЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2396,
		author: "Мопассан",
		title: "Жизнь. Милый друг",
		section: "ЗЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2397,
		author: "Афанасьев",
		title: "Фронт без тыла",
		section: "РЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2398,
		author: "Довлатов",
		title: "Чемодан. Наши",
		section: "РЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2399,
		author: "Набоков",
		title: "Дар",
		section: "РЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2400,
		author: "Набоков",
		title: "Лолита",
		section: "РЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2401,
		author: "Набоков",
		title: "Истребление тиранов",
		section: "РЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2402,
		author: "Ковалевская Е",
		title: "История русского литературного языка",
		section: "УЛ Спец",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2403,
		author: "Белостоцкая",
		title: "Общение со слушателями",
		section: "И Спец",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2404,
		author: "Петрова",
		title: "Словарь синонимов",
		section: "Н Спец",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2405,
		author: "Ключевский",
		title: "Краткое пособие по русской истории",
		section: "И ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2406,
		author: "Давыдова0",
		title: "Евангелие и древнерусская литература",
		section: "РЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2407,
		author: "Коган",
		title: "Лекция по истории эстетики. Часть 2",
		section: "ИИ Спец",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2408,
		author: "Голомшток",
		title: "Пикассо",
		section: "ИИ Био",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2409,
		author: "Бердяев",
		title: "Душа России",
		section: "Н Фил",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2410,
		author: "Бердяев",
		title: "Духи русской революции",
		section: "Н Фил",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2411,
		author: "Сборник",
		title: "По одной истории из 50 блокнотов",
		section: "РЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2412,
		author: "Измайлова",
		title: "Собор",
		section: "РЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2413,
		author: "Ключевский",
		title: "Исторические портреты",
		section: "И ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2414,
		author: "Николай II",
		title: "Дневники",
		section: "И Био",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2415,
		author: "Кожин",
		title: "Права и ответственность ребенка",
		section: "УЛ Спец",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2416,
		author: "Вяземский",
		title: "Записные книжки",
		section: "РЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2417,
		author: "Кронин",
		title: "Звезды смотрят вниз",
		section: "ЗЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2418,
		author: "Тяжелов",
		title: "Малая история искусств. Ср. века",
		section: "ИИ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2419,
		author: "Тяжелов",
		title: "Малая история искусств. 20 век",
		section: "ИИ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2420,
		author: "Франц",
		title: "Боги жаждут",
		section: "ЗЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2421,
		author: "Лавис",
		title: "Всеобщая история для детей",
		section: "И ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2422,
		author: "Зубанова",
		title: "Интеллектуальные игры для школьников",
		section: "УЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2423,
		author: "Вяземский",
		title: "Как сегодня преподавать историю",
		section: "УЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2424,
		author: "Элиазберг",
		title: "Изучаем законы РФ",
		section: "УЛ ",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2425,
		author: "Сборник",
		title: "Французский сонет",
		section: "ЗЛ Ст",
		placed: "5-6-1",
		read: false
	},
	{
		id: 2426,
		author: "Золя",
		title: "Страница любви",
		section: "ЗЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2427,
		author: "Золя",
		title: "Дамское счастье",
		section: "ЗЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2428,
		author: "Золя",
		title: "Тереза ракен. Жерминаль",
		section: "ЗЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2429,
		author: "Честертон",
		title: "Рассказы",
		section: "ЗЛ Дет",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2430,
		author: "Сборник",
		title: "Поэзия латинской Америки",
		section: "ЗЛ Ст",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2431,
		author: "Бехер",
		title: "Избранное",
		section: "ЗЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2432,
		author: "Стендаль",
		title: "Красное и черное",
		section: "ЗЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2433,
		author: "Сборник",
		title: "Европейская поэзия 17 века",
		section: "ЗЛ Ст",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2434,
		author: "Осуэло, Гальегос, Асториаз",
		title: "Те, кто внизу. Донья Барбара. Сеньор президент",
		section: "ЗЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2435,
		author: "Драйзер",
		title: "Американская трагедия",
		section: "ЗЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2436,
		author: "Барбюс",
		title: "Огонь. Ясность и др",
		section: "ЗЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2437,
		author: "Льюис",
		title: "Бэббит. Эроусмит",
		section: "ЗЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2438,
		author: "Доде",
		title: "Необычайные приключения Тартарена из…",
		section: "ЗЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2439,
		author: "Сборник",
		title: "Испанский театр",
		section: "ЗЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2440,
		author: "Роллан",
		title: "Жан Кристов. Том 1",
		section: "ЗЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2441,
		author: "Роллан",
		title: "Жан Кристов. Том 2",
		section: "ЗЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2442,
		author: "Барт",
		title: "Заблудившись в комнате смеха",
		section: "ЗЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2443,
		author: "Маяковский",
		title: "Стихотворения, поэмы, пьесы",
		section: "РЛ Ст",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2444,
		author: "Шолохов",
		title: "Тихий Дон. Том 1",
		section: "РЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2445,
		author: "Шолохов",
		title: "Тихий Дон. Том 2",
		section: "РЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2446,
		author: "Толстой Л",
		title: "Воскресенье. Повести и рассказы",
		section: "РЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2447,
		author: "Пескова",
		title: "Растения России",
		section: "Н Спец",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2448,
		author: "Гензель",
		title: "Иллюстрированный травник",
		section: "Н Спец",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2449,
		author: "Симонов",
		title: "Живые и мертвые. Том 1",
		section: "РЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2450,
		author: "Симонов",
		title: "Живые и мертвые. Том 2",
		section: "РЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2451,
		author: "Симонов",
		title: "Живые и мертвые. Том 3",
		section: "РЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2452,
		author: "Симонов",
		title: "Живые и мертвые. Том 4",
		section: "РЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2453,
		author: "Келдыш и др",
		title: "История русской музыки. Том 1",
		section: "ИИ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2454,
		author: "Келдыш и др",
		title: "История русской музыки. Том 2",
		section: "ИИ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2455,
		author: "Келдыш и др",
		title: "История русской музыки. Том 3",
		section: "ИИ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2456,
		author: "Келдыш и др",
		title: "История русской музыки. Том 4",
		section: "ИИ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2457,
		author: "Келдыш и др",
		title: "История русской музыки. Том 5",
		section: "ИИ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2458,
		author: "Келдыш и др",
		title: "История русской музыки. Том 6",
		section: "ИИ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2459,
		author: "ЖЗЛ",
		title: "Волков, Щепкин,  Глинка, Даргомыжский, Серов",
		section: "ИИ Био",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2460,
		author: "ЖЗЛ",
		title: "Грозный, Хмельницкий, Потемкин, Суворов, Скобелев",
		section: "ИИ Био",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2461,
		author: "Климова",
		title: "Народный орнамент",
		section: "ИИ Хобби",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2462,
		author: "Лебедев, Ягъя",
		title: "Книга о Санкт-Петербурге",
		section: "ИИ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2463,
		author: "Сидоров",
		title: "Леонардо да Винчи",
		section: "ИИ Био",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2464,
		author: "Давыдов",
		title: "1812",
		section: "РЛ ",
		placed: "5-7-2",
		read: false
	},
	{
		id: 2465,
		author: "Мережковский",
		title: "Антихрист",
		section: "РЛ ",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2466,
		author: "Грин",
		title: "Избранное. Том 2",
		section: "ЗЛ ",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2467,
		author: "Матюшин",
		title: "Археологический словарь",
		section: "Н Спец",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2468,
		author: "Бристен",
		title: "До свидания, Эдит",
		section: "И Био",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2469,
		author: "Керам",
		title: "Боги. Гробницы. Ученые",
		section: "Н Спец",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2470,
		author: "Андреева и др",
		title: "Рассказы о 3 искусствах",
		section: "ИИ ",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2471,
		author: "Возняк",
		title: "Стив Джобс и я",
		section: "И Био",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2472,
		author: "Андреев Л",
		title: "Том 1",
		section: "РЛ ",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2473,
		author: "Андреев Л",
		title: "Том 2",
		section: "РЛ ",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2474,
		author: "Андреев Л",
		title: "Том 4",
		section: "РЛ ",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2475,
		author: "Богато и др",
		title: "Антология мировой философии. Том 1",
		section: "Н Фил",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2476,
		author: "Богато и др",
		title: "Антология мировой философии. Том 2",
		section: "Н Фил",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2477,
		author: "Богато и др",
		title: "Антология мировой философии. Том 3",
		section: "Н Фил",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2478,
		author: "Богато и др",
		title: "Антология мировой философии. Том 4",
		section: "Н Фил",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2479,
		author: "Милюков",
		title: "Очерки по истории русской культуры. Том 1",
		section: "ИИ ",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2480,
		author: "Милюков",
		title: "Очерки по истории русской культуры. Том 2",
		section: "ИИ ",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2481,
		author: "Милюков",
		title: "Очерки по истории русской культуры. Том 3",
		section: "ИИ ",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2482,
		author: "Милюков",
		title: "Очерки по истории русской культуры. Том 4",
		section: "ИИ ",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2483,
		author: "Гин",
		title: "Фактор успеха",
		section: "УЛ Спец",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2484,
		author: "Добринская",
		title: "Там у Невы наш первый сад",
		section: "ИИ ",
		placed: "5-7-1",
		read: false
	},
	{
		id: 2485,
		author: "Сборник",
		title: "Испанская реалистическая проза 19в.",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2486,
		author: "Ибсен",
		title: "Драмы. Стихотворения",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2487,
		author: "Рид Дж",
		title: "Восставшая Мексика. Десять дней… Америка 1918",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2488,
		author: "Стерн",
		title: "Сентиментальное путешествие… Жизнь и мнение Тристрама Шенди…",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2489,
		author: "Брехт",
		title: "Стихотворения. Рассказы. Пьесы",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2490,
		author: "Сборник",
		title: "Западно-европейская поэзия 20в.",
		section: "ЗЛ Ст",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2491,
		author: "Коцубинский, Леся Украинка",
		title: "Повести и рассказы. Стихотворения, поэмы, драмы",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2492,
		author: "Сборник",
		title: "Испанские поэты 20в.",
		section: "ЗЛ Ст",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2493,
		author: "Лоусон, Причард",
		title: "Рассказы. 90-е годы",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2494,
		author: "Верхарн, Метерлинк",
		title: "Стихотворения. Пьесы",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2495,
		author: "Твардовский",
		title: "Стихотворения. Поэмы",
		section: "РЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2496,
		author: "Сборник",
		title: "Испанский реализм конца 19 - нач. 20вв.",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2497,
		author: "Райнис",
		title: "Стихотворения. Пьесы",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2498,
		author: "Сборник",
		title: "Румынская литература 19в.",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2499,
		author: "Сборник",
		title: "Поэзия социалистических стран Европы",
		section: "ЗЛ Ст",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2500,
		author: "Мелвилл",
		title: "Моби Дик",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2501,
		author: "Купала, Колас",
		title: "Стихотворения и поэмы",
		section: "ЗЛ Ст",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2502,
		author: "Фурманов, Серафимович, Островский",
		title: "Чапаев. Железный поток. Как закалялась сталь.",
		section: "РЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2503,
		author: "Лакснесс",
		title: "Самостоятельные люди. Исландский колокол",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2504,
		author: "Сборник",
		title: "Поэзия народов СССР 19-нач.20вв.",
		section: "РЛ Ст",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2505,
		author: "Чернышевский",
		title: "Что делать",
		section: "РЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2506,
		author: "Шевченко",
		title: "Кобзарь",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2507,
		author: "Сборник",
		title: "Советский рассказ. Том 1",
		section: "РЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2508,
		author: "Сборник",
		title: "Советский рассказ. Том 2",
		section: "РЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2509,
		author: "Сборник",
		title: "Героический эпос народов СССР",
		section: "ЗЛ Фолк",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2510,
		author: "Радищев",
		title: "Путешествие из Петербурга в Москву. Вольность",
		section: "РЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2511,
		author: "Мандельштам",
		title: "Камень",
		section: "РЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2512,
		author: "Тимофеев",
		title: "Краткий словарь литературоведческих терминов",
		section: "Н Спец",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2513,
		author: "Апульская и др",
		title: "Чехов и Лев Толстой",
		section: "РЛ Био",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2514,
		author: "Лопе де Вега",
		title: "Доротея",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2515,
		author: "Тик",
		title: "Странствия Франца Штернбальда",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2516,
		author: "Монтень",
		title: "Опыты",
		section: "ЗЛ ",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2517,
		author: "Голосовкер",
		title: "Сказание о Титанах",
		section: "ЗЛ Фолк",
		placed: "5-8-2",
		read: false
	},
	{
		id: 2518,
		author: "Сборник",
		title: "Древний Восток",
		section: "ЗЛ ",
		placed: "5-8-1",
		read: false
	},
	{
		id: 2519,
		author: "Сборник",
		title: "Древняя Греция",
		section: "ЗЛ ",
		placed: "5-8-1",
		read: false
	},
	{
		id: 2520,
		author: "Сборник",
		title: "Древний Рим",
		section: "ЗЛ ",
		placed: "5-8-1",
		read: false
	},
	{
		id: 2521,
		author: "Сборник",
		title: "Русская историческая повесть 1-ой пол. 19в.",
		section: "РЛ ",
		placed: "5-8-1",
		read: false
	},
	{
		id: 2522,
		author: "Иванов Вяч",
		title: "Родное и вселенское",
		section: "Н Фил",
		placed: "5-8-1",
		read: false
	},
	{
		id: 2523,
		author: "Леви-Стросс",
		title: "Первобытное мышление",
		section: "Н Фил",
		placed: "5-8-1",
		read: false
	},
	{
		id: 2524,
		author: "Булгаков С",
		title: "Свет не вечерний",
		section: "Н Фил",
		placed: "5-8-1",
		read: false
	},
	{
		id: 2525,
		author: "Рерих",
		title: "О вечном",
		section: "Н Фил",
		placed: "5-8-1",
		read: false
	},
	{
		id: 2526,
		author: "Цветаева",
		title: "Стихотворения и поэмы",
		section: "РЛ Фил",
		placed: "5-8-1",
		read: false
	},
	{
		id: 2527,
		author: "Сахаров",
		title: "История России с нач. 18 до конца 19века",
		section: "И ",
		placed: "5-8-1",
		read: false
	},
	{
		id: 2528,
		author: "Каулин",
		title: "Музейное дело России",
		section: "УЛ Спец",
		placed: "5-8-1",
		read: false
	},
	{
		id: 2529,
		author: "Хогарт",
		title: "Братья",
		section: "ЗЛ ",
		placed: "5-8-1",
		read: false
	},
	{
		id: 2530,
		author: "Эдигей",
		title: "Внезапная смерть игрока",
		section: "ЗЛ Дет",
		placed: "5-8-1",
		read: false
	},
	{
		id: 2531,
		author: "Фрау",
		title: "Учитесь вкусно печь",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2532,
		author: "Кёнгис",
		title: "Домашние приготовление…",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2533,
		author: "Похлебкин",
		title: "Моя кухня",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2534,
		author: "Ляховская",
		title: "Основы кулинарного мастерства",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2535,
		author: "Смирнова",
		title: "Игрушки из шерсти",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2536,
		author: "Смирнова",
		title: "Чудеса из войлока",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2537,
		author: "Ракитянская",
		title: "Шелковые цветы",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2538,
		author: "Донская",
		title: "Шары в технике артишок",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2539,
		author: "Рошаль",
		title: "Коктейли",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2540,
		author: "б/а",
		title: "Рыба и морепродукты",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2541,
		author: "Самсонова",
		title: "Вкусная и пикантная пицца",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2542,
		author: "Жунал Бурда",
		title: "7 штук",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2543,
		author: "Журнал Шитье и крой",
		title: "2 штуки",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2544,
		author: "Журнал Бурда",
		title: "24 штука",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2545,
		author: "Журнал Золушка шьет",
		title: "1 штука",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2546,
		author: "Журнал Моден",
		title: "1 штука",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2547,
		author: "Журнал Бутик",
		title: "4 штуки",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2548,
		author: "Гак, Ганшина",
		title: "Новый франко-русский",
		section: "Н Спец",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2549,
		author: "Дайджест",
		title: "Еда наш друг, еда наш враг",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2550,
		author: "Журнал Изысканная выпечка",
		title: "36 штук",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2551,
		author: "б/а",
		title: "Испанская кухня",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2552,
		author: "Поскребышева",
		title: "Праздничный стол",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2553,
		author: "б/а",
		title: "Китайская кухня",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2554,
		author: "б/а",
		title: "Итальянская кухня",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2555,
		author: "б/а",
		title: "Кухня средиземноморья",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2556,
		author: "б/а",
		title: "Испанская кухня",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2557,
		author: "Журнал История моды",
		title: "5 штук",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2558,
		author: "Князева",
		title: "Твой герб и псевдним",
		section: "УЛ ",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2559,
		author: "Журнал Мой ребенок",
		title: "2 штуки",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2560,
		author: "б/а",
		title: "Исторический модный журнал",
		section: " Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2561,
		author: "Ермолаева",
		title: "Краеведение",
		section: "УЛ ",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2562,
		author: "Ермолаева",
		title: "Чудесный город",
		section: "УЛ ",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2563,
		author: "б/а",
		title: "Поговорим о налогах",
		section: "УЛ ",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2564,
		author: "Журнал Пешком в историю",
		title: "2 штуки",
		section: "УЛ И",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2565,
		author: "б/а",
		title: "Великие города россии",
		section: "ДЛ Хобби",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2566,
		author: "Атласы",
		title: "История России и мира. 14 штук",
		section: "УЛ И",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2567,
		author: "б/а",
		title: "Знакомимся с языком",
		section: "УЛ ",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2568,
		author: "Столярова",
		title: "Чудеса древнего искусства",
		section: "УЛ ",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2569,
		author: "Селивановы",
		title: "Я - архитектор",
		section: "УЛ Спец",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2570,
		author: "Самсонов",
		title: "Россия в первой половине 19 века",
		section: "УЛ И",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2571,
		author: "Журнал Морская слава России",
		title: "Флот до Петра Великого",
		section: "И Спец",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2572,
		author: "б/а",
		title: "Александр 1. Журнал",
		section: " И",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2573,
		author: "б/а",
		title: "Происхождение и эволюция человека",
		section: "Н Спец",
		placed: "7-1-1",
		read: false
	},
	{
		id: 2574,
		author: "Борис Акунин",
		title: "История Российского государства. Семнадцатый век",
		section: "И ",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2575,
		author: "Акунин Б.",
		title: "История Российского государства. Европа",
		section: "И ",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2576,
		author: "Акунин Б.",
		title: "История Российского государства. Азия",
		section: "И ",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2577,
		author: "Сборник",
		title: "Очерки истории русской философии",
		section: "Н Фил",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2578,
		author: "Сборник",
		title: "Смысл жизни",
		section: "Н Фил",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2579,
		author: "Сборник",
		title: "Философия русского религиозного искусства",
		section: "Н Фил",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2580,
		author: "Сборник",
		title: "Русская поэзия серебряного века",
		section: "РЛ Ст",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2581,
		author: "Ильин И.А.",
		title: "Одинокий художник",
		section: "Н Фил",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2582,
		author: "Сборник",
		title: "Христианство и русская литература",
		section: "РЛ Рел",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2583,
		author: "Аврелий А., Абеляр П.",
		title: "Исповедь. История моих бедствий",
		section: "ЗЛ Рел",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2584,
		author: "ЖЗЛ",
		title: "Будда. Конфуций. Саванаролла. Торквемада. Лойола",
		section: "Рел Био",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2585,
		author: "Короткова М.В.",
		title: "Путешествие в историю русского быта",
		section: "ИИ Спец",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2586,
		author: "ЖЗЛ",
		title: "Достоевский. Островский. Салтыков-Щедрин. Лев Толстой",
		section: "РЛ Био",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2587,
		author: "Сборник",
		title: "Русская философия конец 19-начало 20 вв.",
		section: "Н Фил",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2588,
		author: "Бердяев Н.А.",
		title: "Царство духа и царство кесаря",
		section: "Н Фил",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2589,
		author: "Емельянов Б.В.",
		title: "Экскурсоведение",
		section: "Н Спец",
		placed: "7-2-2",
		read: false
	},
	{
		id: 2590,
		author: "Рябов",
		title: "История России. Ответы на экзаменнационные вопросы",
		section: "И Спец",
		placed: "7-2-2",
		read: false
	},
	{
		id: 2591,
		author: "б/а",
		title: "Искусство Японии",
		section: "ИИ ",
		placed: "7-2-2",
		read: false
	},
	{
		id: 2592,
		author: "Котова О.А.",
		title: "Экспресс-диагностика. Обществознание 10 кл.",
		section: "УЛ Спец",
		placed: "7-2-2",
		read: false
	},
	{
		id: 2593,
		author: "Чернова М.Н.",
		title: "Экспресс-диагностика. История России 11 кл",
		section: "УЛ Спец",
		placed: "7-2-2",
		read: false
	},
	{
		id: 2594,
		author: "Рогожкин В.А.",
		title: "Экспресс-диагностика. История Нового времени 7 кл",
		section: "УЛ Спец",
		placed: "7-2-2",
		read: false
	},
	{
		id: 2595,
		author: "Иркова Л.Е.",
		title: "Тематический контроль. Обществознание 9 кл",
		section: "УЛ Спец",
		placed: "7-2-2",
		read: false
	},
	{
		id: 2596,
		author: "Боголюбов Л.Н., Иванова",
		title: "Обществознание. 5 кл. Учебник",
		section: "УЛ Спец",
		placed: "7-2-2",
		read: false
	},
	{
		id: 2597,
		author: "Липсиц И.",
		title: "Финансовая грамотность. 10-11 кл",
		section: "УЛ Спец",
		placed: "7-2-2",
		read: false
	},
	{
		id: 2598,
		author: "Липсиц И. Вигдорчик Е.",
		title: "Финансовая грамотность. 5-7 кл",
		section: "УЛ Спец",
		placed: "7-2-2",
		read: false
	},
	{
		id: 2599,
		author: "Кишенкова О.В.",
		title: "Путешествие юного гражданина",
		section: "УЛ Спец",
		placed: "7-2-2",
		read: false
	},
	{
		id: 2600,
		author: "Калачёва Е.Н.",
		title: "ОГЭ 2018. Тематический тренажёр",
		section: "УЛ Спец",
		placed: "7-2-2",
		read: false
	},
	{
		id: 2601,
		author: "Лазебникова А.Ю.",
		title: "ОГЭ 2020. 14 вариантов",
		section: "УЛ Спец",
		placed: "7-2-2",
		read: false
	},
	{
		id: 2602,
		author: "Сборник",
		title: "Программы партий РФ",
		section: "И Спец",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2603,
		author: "Сборник",
		title: "Шпаргалки по истории и обществу",
		section: "Пед Спец",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2604,
		author: "ГД",
		title: "ФЗ О защите прав потребителей",
		section: "И Спец",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2605,
		author: "Тесленко И.Б. и др.",
		title: "Менеджмент",
		section: "Н Спец",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2606,
		author: "Гудырин С.Н.",
		title: "Маркетинг",
		section: "Н Спец",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2607,
		author: "Жукова Л.Н.",
		title: "История. Ответы на вопросы экзамена",
		section: "УЛ ",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2608,
		author: "Петрова Л.В.",
		title: "История Отечества. Схемы ответов. До 18 в.",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2609,
		author: "Кишенкова О.В.",
		title: "ГИА 2014",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2610,
		author: "Попов В.П. Чулков П.В.",
		title: "История России 20 век.",
		section: "УЛ ",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2611,
		author: "Волкова К.В.",
		title: "КИМ: История России 10 кл.",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2612,
		author: "Волкова К.В.",
		title: "КИМ: История Нового времени 7 кл.",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2613,
		author: "Карпин Б.А.",
		title: "Пишем историческое сочинение ",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2614,
		author: "Вурста Н.И.",
		title: "Историческое сочинение",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2615,
		author: "Миронова Е.",
		title: "История: авторский курс подготовки к ЕГЭ",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2616,
		author: "Веряскин О.Г.",
		title: "ОГЭ-2018. История. Тематический тренинг",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2617,
		author: "Пазин Р.В.",
		title: "История 10 класс",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2618,
		author: "Князева В.Н. и др.",
		title: "Практикум по обществознанию",
		section: "УЛ Спец",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2619,
		author: "Чернышева О.А.",
		title: "Обществознание. Графики и диаграммы",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2620,
		author: "Пазин Р.В., Крутова И.В.",
		title: "ОГЭ: обществознание в таблицах и схемах",
		section: "УЛ Спец",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2621,
		author: "Пазин Р.В.",
		title: "История развития российской культуры ЕГЭ",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2622,
		author: "Артасов И.А., Мельникова О.Н.",
		title: "ЕГЭ-2016",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2623,
		author: "Майков А.Н.",
		title: "Методичка по истории 6-7 кл.",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2624,
		author: "Романова А.А.",
		title: "Практикум по истории России по 18 век",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2625,
		author: "Данилов А.А., Косулина Л.Г.",
		title: "Рабочая тетрадь по истории России. 20 век.Ч1",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2626,
		author: "Данилов А.А., Косулина Л.Г.",
		title: "Рабочая тетрадь по истории России. 20 век.Ч2",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2627,
		author: "Данилов А.А., Косулина Л.Г.",
		title: "Рабочая тетрадь по истории России. 20 век.Ч3",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2628,
		author: "Петрович В.Г. и Н.М.",
		title: "История мира и России 9 класс",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2629,
		author: "Драхлер А.Б.",
		title: "Отечественная история. Вопросы к олимпиаде",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2630,
		author: "Рождественский С.Е.",
		title: "Отечественная история в связи со всеобщей",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2631,
		author: "Кутафин О.Е.",
		title: "Государственное право РФ",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2632,
		author: "Петрова Л.В.",
		title: "История России в схемах 1900-1939",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2633,
		author: "Горецкий В.Г и др.",
		title: "Букварь. 1991 год.",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2634,
		author: "Чернышева О.А.",
		title: "ЕГЭ обществознание - работа с текстом",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2635,
		author: "Чернышева О.А.",
		title: "ЕГЭ-2018. Тематический тренинг",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2636,
		author: "Пазин Р.В.",
		title: "Задания высокого уровня сложности",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2637,
		author: "Касьянов В.В.",
		title: "Репетитор по истории",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2638,
		author: "Чернышева О.А.",
		title: "ОГЭ-2020. Обществознание. Тематический контроль",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2639,
		author: "Чернышева О.А.",
		title: "Тематические тесты для подготовки к ГИА. Обществознание",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2640,
		author: "Чернышева О.А.",
		title: "Эссе. Сложный план",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2641,
		author: "Швандерова А.Р.",
		title: "Обществознание",
		section: "УЛ Спец",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2642,
		author: "Лазукова Н.Н., Кузин Д.В.",
		title: "Учимся приобретать и осмыслять знания",
		section: "УЛ Спец",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2643,
		author: "Черникин П.А.",
		title: "Обществознание в вопросах и ответах",
		section: "УЛ Спец",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2644,
		author: "Баранов П.А.",
		title: "Обществознание. ОГЭ",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2645,
		author: "Крючкова Е.А.",
		title: "История древнего мира: К/р и С/Р",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2646,
		author: "Данилов А.А., Косулина Л.Г.",
		title: "История России 20 век. Рабочая тетрадь. Ч.1",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2647,
		author: "Данилов А.А., Косулина Л.Г.",
		title: "История России 20 век. Рабочая тетрадь. Ч.2",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2648,
		author: "Кадневский В.М.",
		title: "История России до конца 18 века. Тесты",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2649,
		author: "Курукин И.В. И др.",
		title: "История ЕГЭ-2016",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2650,
		author: "Пазин Р.В.",
		title: "История. Тематические задания",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2651,
		author: "Пазин Р.В.",
		title: "История тесты 5-9 кл.",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2652,
		author: "Пазин Р.В.",
		title: "История тесты 10-11 кл.",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2653,
		author: "Пазин Р.В.",
		title: "Тематические тесты С4-С5",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2654,
		author: "Пазин Р.В.",
		title: "Обществознание. Сборник олимпиадных заданий",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2655,
		author: "Пазин Р.В.",
		title: "Анализ исторического источника",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2656,
		author: "Пазин Р.В.",
		title: "Тематические тесты С4-С7",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2657,
		author: "Лебедева Р.Н.",
		title: "История. Даты",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2658,
		author: "Яковер Л.Б.",
		title: "Справочник по истории Отечества",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2659,
		author: "Баранов П.А.",
		title: "Обществознание в таблицах и схемах",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2660,
		author: "Махоткин А.В., Махоткина Н.В.",
		title: "Обществознание в таблицах и схемах",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2661,
		author: "Кириллов В.В.",
		title: "История России в схемах и таблицах",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2662,
		author: "Котова О.А.",
		title: "Экспресс-диагностика: обществознание. 11 кл.",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2663,
		author: "Гришкович С.М.",
		title: "Наглядный школьный курс: обществознание",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2664,
		author: "Курукин И.В. И др.",
		title: "История. Универсальный справочник.",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2665,
		author: "Кишенкова О.В.",
		title: "Обществознание. Универсальный справочник",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2666,
		author: "Степаненко",
		title: "Олимпиадные задания по истории 9-11 классы",
		section: "УЛ Пед",
		placed: "7-2-1",
		read: false
	},
	{
		id: 2667,
		author: "б/а",
		title: "Знакомимся с языком 1",
		section: "УЛ Спец",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2668,
		author: "Лукашов",
		title: "Н.Рерих",
		section: "ИИ Био",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2669,
		author: "Сборник",
		title: "Шедевры западноевропейской живописи. Эрмитаж",
		section: "ИИ ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2670,
		author: "Журнал Мир музея",
		title: "2 штуки",
		section: "ИИ ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2671,
		author: "Иовлева",
		title: "В.Васнецов",
		section: "ИИ Био",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2672,
		author: "Нэнси Нанхед",
		title: "Ренуар",
		section: "ИИ Био",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2673,
		author: "Журнал Художественная Галерея",
		title: "95 штук",
		section: "ИИ Био",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2674,
		author: "журнал Художник",
		title: "2 штуки",
		section: "ИИ ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2675,
		author: "журнал Великие имена",
		title: "5 штук",
		section: "ИИ Био",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2676,
		author: "История зарубежной живописи",
		title: "10 штук: Босх, Ван Гог, Гоген, Дега, Климт, Мане, Модильяни, Моне, Муха, Сезанн",
		section: "ИИ Био",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2677,
		author: "Тиссен-Берменис, Пюри",
		title: "Шедевры западноевропейской живописи.",
		section: "ИИ ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2678,
		author: "Айтуганов",
		title: "Обри Бердслей",
		section: "ИИ ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2679,
		author: "Колин-Буррелиер",
		title: "история и география",
		section: "УЛ ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2680,
		author: "Сборник",
		title: "путешествуем по городам СССР",
		section: "Пут ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2681,
		author: "А.Пушкин",
		title: "Сочинение в 2-х томах. Т.1",
		section: "РЛ ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2682,
		author: "А.Пушкин",
		title: "Сочинение в 2-х томах. Т.2",
		section: "РЛ ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2683,
		author: "Спилмэн",
		title: "Шедевры американского стекла",
		section: "ИИ ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2684,
		author: "Матита",
		title: "Портреты карандашом",
		section: "УЛ Спец",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2685,
		author: "Ф. М. Лурье",
		title: "Российская и мировая история в таблицах",
		section: "И ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2686,
		author: "Журнал 100битв",
		title: "5 штук",
		section: "И ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2687,
		author: "Королева",
		title: "К. Васильев",
		section: "ИИ Био",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2688,
		author: "б/а",
		title: "Калевалла",
		section: "ЗЛ Фолк",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2689,
		author: "б/а",
		title: "эпоха Фаберже",
		section: "ИИ ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2690,
		author: "б/а",
		title: "Атлас мира",
		section: "Н Спец",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2691,
		author: "Тиссен-Берменис, Пюри",
		title: "Шедевры западноевропейской живописи.",
		section: "ИИ ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2692,
		author: "Ильницкая",
		title: "Техника Кимекоми",
		section: "Хобби ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2693,
		author: "Болоболичева",
		title: "Герои русской истории",
		section: "И ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2694,
		author: "Кулибанов, Чистобаев",
		title: "Ленинград",
		section: "ИИ ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2695,
		author: "К. Яцук",
		title: "Мечтай. Путешествие в Болгарию",
		section: "Пут ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2696,
		author: "К. Яцук",
		title: "Пражские каникулы",
		section: "Пут ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2697,
		author: "К. Мучник",
		title: "Лав стори. Лондон",
		section: "Пут ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2698,
		author: "К. Мучник",
		title: "Кенигсберг и мы, тевтонцы",
		section: "Пут ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2699,
		author: "К. Мучник",
		title: "Гаумарджос Сакартвэлос",
		section: "Пут ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2700,
		author: "Ахмадуллин",
		title: "Скорочтение",
		section: "Н Спец",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2701,
		author: "Терешкович",
		title: "Мода в одежде и аксессуарах",
		section: "Н Спец",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2702,
		author: "б/а",
		title: "Птицы наглядный справочник",
		section: "Н Спец",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2703,
		author: "Алтмэн",
		title: "Кипр",
		section: "Пут ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2704,
		author: "Журнал Родина",
		title: "26 штук",
		section: "И Спец",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2705,
		author: "Журнал Историк",
		title: "8 штук",
		section: "И Спец",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2706,
		author: "Арсентьева, Горская",
		title: "Античные ювелирные изделия из частных собраний. Кольца и перстни",
		section: "ИИ Спец",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2707,
		author: "Котова, Лискова",
		title: "Обществознание 10 кл, 2021",
		section: "УЛ ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2708,
		author: "Котова, Лискова",
		title: "Обществознание 11 кл 2021",
		section: "УЛ ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2709,
		author: "Котова, Лискова",
		title: "Обществознание к ЕГЭ 10 вариантов 2021",
		section: "УЛ ",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2710,
		author: "Хазенбанк, Хёниш",
		title: "Сделай сам",
		section: "ДЛ Хобби",
		placed: "7-4-1",
		read: false
	},
	{
		id: 2711,
		author: "Трубецкой Е.Н.",
		title: "Смысл жизни",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2712,
		author: "Столович Л.Н. ",
		title: "Красота. Добро. Истина",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2713,
		author: "Розанов В.В.",
		title: "О писательстве и писателях",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2714,
		author: "Розанов В.В.",
		title: "Среди художников",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2715,
		author: "Розанов В.В.",
		title: "Мимолетное",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2716,
		author: "Розанов В.В.",
		title: "В мире неясного и нерешительного",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2717,
		author: "Розанов В.В.",
		title: "В темных религиозных лучах",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2718,
		author: "Исаев И.А.",
		title: "История государства и права России",
		section: "И Спец",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2719,
		author: "Розанов В.В.",
		title: "Сочинения",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2720,
		author: "Сборник",
		title: "О России и русской философской культуре",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2721,
		author: "Башилов",
		title: "История русского масонства. Том 3,4",
		section: "И  Спец",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2722,
		author: "Андрей Белый",
		title: "Символизм как миропонимание",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2723,
		author: "Орлов А.С., Георгиев В.А., Георгиева Н.Г., Сивохина Т.Н.",
		title: "История России",
		section: "УЛ И",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2724,
		author: "Орлов А.С., Георгиев В.А., Георгиева Н.Г., Сивохина Т.Н.",
		title: "История Россия в схемах",
		section: "УЛ И",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2725,
		author: "Баранов П.А., Шевченко С.В.",
		title: "История: новый полный справочник. Подготовка к ЕГЭ",
		section: "УЛ И",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2726,
		author: "Сборник",
		title: "Русская идея",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2727,
		author: "Толстой Л.Н.",
		title: "Путь жизни",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2728,
		author: "Бердяев Н.А.",
		title: "О русских классиках",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2729,
		author: "Морис Палеолог",
		title: "Распутин. Воспоминания",
		section: "И ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2730,
		author: "Бердяев Н.А.",
		title: "Смысл истории",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2731,
		author: "Бердяев Н.А.",
		title: "Самопознание",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	},
	{
		id: 2732,
		author: "Леонтьев",
		title: "Русь многоликая",
		section: "Фил ",
		placed: "4-5-1",
		read: false
	}
];
export default data;
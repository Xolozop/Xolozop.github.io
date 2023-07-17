const data2 = [
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
		title: "Человек и общество. 11кл",
		section: "УЛ ",
		placed: "2-3-1",
		read: false
	},
	{
		id: 943,
		author: "Ким",
		title: "Япония: справочник",
		section: "Н Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 944,
		author: "Адамчик и др.",
		title: "Краткая история. Англия.",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 945,
		author: "Деревянко",
		title: "Ожившие древности",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 946,
		author: "Твардовский",
		title: "За далью-даль",
		section: "РЛ Ст",
		placed: "2-3-2",
		read: false
	},
	{
		id: 947,
		author: "Молева",
		title: "Никитин",
		section: "ИИ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 948,
		author: "Гузик. Кузьменко",
		title: "Культура Средневековья",
		section: "Пед Хобби",
		placed: "2-3-2",
		read: false
	},
	{
		id: 949,
		author: "Гузик",
		title: "Русская культура",
		section: "Пед Хобби",
		placed: "2-3-2",
		read: false
	},
	{
		id: 950,
		author: "Гузик",
		title: "Культура Древнего Востока",
		section: "Пед Хобби",
		placed: "2-3-2",
		read: false
	},
	{
		id: 951,
		author: "Борисова, Стрернин",
		title: "Русский модерн",
		section: "ИИ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 952,
		author: "Бабин",
		title: "Пабло Пикассо",
		section: "ИИ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 953,
		author: "Андроников",
		title: "Великая экстафета",
		section: "ИИ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 954,
		author: "Соболева",
		title: "Старинные гербы российских городов",
		section: "ИИ Спец",
		placed: "2-3-2",
		read: false
	},
	{
		id: 955,
		author: "Берджес",
		title: "Обучение как приключение",
		section: "Пед ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 956,
		author: "Сборник",
		title: "Прекрасен мир сегодня без войны",
		section: "РЛ Ст",
		placed: "2-3-2",
		read: false
	},
	{
		id: 957,
		author: "Кондратенко",
		title: "Русь",
		section: "ДЛ И",
		placed: "2-3-2",
		read: false
	},
	{
		id: 958,
		author: "Зеньковский",
		title: "История русской философии. Ч.1",
		section: "Н Фил",
		placed: "2-3-2",
		read: false
	},
	{
		id: 959,
		author: "Зеньковский",
		title: "История русской философии. Ч.2",
		section: "Н Фил",
		placed: "2-3-2",
		read: false
	},
	{
		id: 960,
		author: "Зеньковский",
		title: "История русской философии. Ч.3",
		section: "Н Фил",
		placed: "2-3-2",
		read: false
	},
	{
		id: 961,
		author: "Зеньковский",
		title: "История русской философии. Ч.4",
		section: "Н Фил",
		placed: "2-3-2",
		read: false
	},
	{
		id: 962,
		author: "Родригес и др.",
		title: "Новейшая история зарубежных стран 11 класс",
		section: "Пед Спец",
		placed: "2-3-2",
		read: false
	},
	{
		id: 963,
		author: "Барышникова",
		title: "Зарубежное искусство в кроссвордах",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 964,
		author: "Волкова",
		title: "КИМ: история России. 9 кл.",
		section: "Пед ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 965,
		author: "Глезеров",
		title: "Исторические районы",
		section: "ИИ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 966,
		author: "Нарочинский и др.",
		title: "Новая история 1640-1870",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 967,
		author: "Степанов",
		title: "Культурная жизнь Ленинграда 20-30 гг.",
		section: "ИИ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 968,
		author: "Петров ",
		title: "Идем по Русскому музею",
		section: "ИИ Пут",
		placed: "2-3-2",
		read: false
	},
	{
		id: 969,
		author: "Кравченко",
		title: "Обществознание 7 класс",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 970,
		author: "Кравченко",
		title: "Обществознание 8 класс",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 971,
		author: "Кравченко",
		title: "Обществознание 9 класс",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 972,
		author: "Кравченко",
		title: "Задачник по обществознанию 8-9 кл.",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 973,
		author: "Боханов",
		title: "История России. 19 век",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 974,
		author: "Федосов",
		title: "История СССР. 19 век.",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 975,
		author: "Кукушкин",
		title: "История СССР.20 век.",
		section: "УЛ ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 976,
		author: "Всемирный Следопыт",
		title: "Презренные гении. Япония.",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 977,
		author: "Всемирный Следопыт",
		title: "Путь Самурая",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 978,
		author: "Всемирный Следопыт",
		title: "Петр всея Руся",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 979,
		author: "Всемирный Следопыт",
		title: "Греция: венок Олимпионика",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 980,
		author: "Всемирный Следопыт",
		title: "Каменные гиганты планеты",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 981,
		author: "Всемирный Следопыт",
		title: "Африка. Великая миссия",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 982,
		author: "Всемирный Следопыт",
		title: "Италия: этрусская легенда",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 983,
		author: "Всемирный Следопыт",
		title: "Друиды: тайная власть",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 984,
		author: "Всемирный Следопыт",
		title: "Любовное зелье друидов",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 985,
		author: "Всемирный Следопыт",
		title: "Король среди рыцарей",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 986,
		author: "Всемирный Следопыт",
		title: "Волки Одина",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 987,
		author: "Всемирный Следопыт",
		title: "Тайны пирамид",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 988,
		author: "Всемирный Следопыт",
		title: "Победа в порту",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 989,
		author: "Всемирный Следопыт",
		title: "Древняя Русь. Трудный выбор",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 990,
		author: "Всемирный Следопыт",
		title: "Россия. Иоанн Грозный. Эпоха перемен",
		section: "И ",
		placed: "2-3-2",
		read: false
	},
	{
		id: 991,
		author: "Всемирный Следопыт",
		title: "Бразилия.",
		section: "И  Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 992,
		author: "Всемирный Следопыт",
		title: "Австрия. Прихоанализ для Фрейда",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 993,
		author: "Всемирный Следопыт",
		title: "Австрия. Неизвестный Моцарт",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 994,
		author: "Всемирный Следопыт",
		title: "Австрия, то что доктор прописал",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 995,
		author: "Всемирный Следопыт",
		title: "Англия. Лондон",
		section: "И  Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 996,
		author: "Всемирный Следопыт",
		title: "Англия. Дело Шерлока Холмса",
		section: "И  Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 997,
		author: "Всемирный Следопыт",
		title: "Болгария",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 998,
		author: "Всемирный Следопыт",
		title: "Великобритания",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 999,
		author: "Всемирный Следопыт",
		title: "Германия. Тень старого фрица",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1000,
		author: "Всемирный Следопыт",
		title: "Германия. Под редакцией Бисмарка",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1001,
		author: "Всемирный Следопыт",
		title: "Германия. Матч длинною в жизнь",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1002,
		author: "Всемирный Следопыт",
		title: "Голландия",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1003,
		author: "Всемирный Следопыт",
		title: "Греция ",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1004,
		author: "Всемирный Следопыт",
		title: "Египет. Преемник фараонов",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1005,
		author: "Всемирный Следопыт",
		title: "Египет. Наследство Рамсеса Великого",
		section: "И  Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1006,
		author: "Всемирный Следопыт",
		title: "Египет. Потомки фараонов",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1007,
		author: "Всемирный Следопыт",
		title: "Египет. Тайны Александра",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1008,
		author: "Всемирный Следопыт",
		title: "Испания. Трагедия Великого монарха",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1009,
		author: "Всемирный Следопыт",
		title: "Испания. Странности любви",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1010,
		author: "Всемирный Следопыт",
		title: "Испания. Треугольник Дали",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1011,
		author: "Всемирный Следопыт",
		title: "Индия",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1012,
		author: "Всемирный Следопыт",
		title: "Италия. Побег из Венеции",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1013,
		author: "Всемирный Следопыт",
		title: "Италия. Медичи",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1014,
		author: "Всемирный Следопыт",
		title: "Италия. Федерико Феллини",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1015,
		author: "Всемирный Следопыт",
		title: "Италия. Октавиан Август",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1016,
		author: "Всемирный Следопыт",
		title: "Испания. За легендами на Канарские острова",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1017,
		author: "Всемирный Следопыт",
		title: "Кипр. Остров в приданое",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1018,
		author: "Всемирный Следопыт",
		title: "Кипр. Великий аскет",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1019,
		author: "Всемирный Следопыт",
		title: "Китай. Утро первого дня",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1020,
		author: "Всемирный Следопыт",
		title: "Китай. Эпохи Конфуция",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1021,
		author: "Всемирный Следопыт",
		title: "Мальта",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1022,
		author: "Всемирный Следопыт",
		title: "Марокко",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1023,
		author: "Всемирный Следопыт",
		title: "Дания. Норвегия. Швеция",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1024,
		author: "Всемирный Следопыт",
		title: "Норвегия",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1025,
		author: "Всемирный Следопыт",
		title: "Португалия",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1026,
		author: "Всемирный Следопыт",
		title: "Россия ",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1027,
		author: "Всемирный Следопыт",
		title: "Таиланд. Сокровища Сима",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1028,
		author: "Всемирный Следопыт",
		title: "Таиланд. Секреты массажа",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1029,
		author: "Всемирный Следопыт",
		title: "Таиланд. Жертвы реки квай",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1030,
		author: "Всемирный Следопыт",
		title: "Тунис",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1031,
		author: "Всемирный Следопыт",
		title: "Турция. Османский султан",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1032,
		author: "Всемирный Следопыт",
		title: "Турция. Мечты и реальность",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1033,
		author: "Всемирный Следопыт",
		title: "Финляндия. Под музыку великого магистра",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1034,
		author: "Всемирный Следопыт",
		title: "Финляндия. Чужой среди своих",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1035,
		author: "Всемирный Следопыт",
		title: "Франция. Коко Шанель",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1036,
		author: "Всемирный Следопыт",
		title: "Франция. Дюма под прицелом",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1037,
		author: "Всемирный Следопыт",
		title: "Франция. Из Парижа с любовью",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1038,
		author: "Всемирный Следопыт",
		title: "Хорватия",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1039,
		author: "Всемирный Следопыт",
		title: "Чехия",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1040,
		author: "Всемирный Следопыт",
		title: "Шотландия",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1041,
		author: "Всемирный Следопыт",
		title: "Япония",
		section: "И Стр",
		placed: "2-3-2",
		read: false
	},
	{
		id: 1042,
		author: "Чириков",
		title: "Русско-итальянский Итальянско-русский",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1043,
		author: "Бельфелдт",
		title: "Русско-немецкий словарь",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1044,
		author: "Ермакова",
		title: "Итальянский язык за 100 часов",
		section: "УЛ Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1045,
		author: "Китайгородская",
		title: "Французский язык",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1046,
		author: "Андреевская-Левенстерн, Полозова",
		title: "Учебник французского языка",
		section: "УЛ Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1047,
		author: "Арутюнова",
		title: "Педагогический фр.-рус. Словарь",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1048,
		author: "Утенко",
		title: "Цветы в букетах и композициях",
		section: "Хобби ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1049,
		author: "Гулемот",
		title: "Литература просвещения",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1050,
		author: "Строгонова",
		title: "Арт-терапия",
		section: "Н Псих",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1051,
		author: "Шахнович",
		title: "Приметы верные и суеверные",
		section: "Н Фолк",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1052,
		author: "Петушанская и др.",
		title: "Начальный курс фр. Языка",
		section: "УЛ Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1053,
		author: "Формановская, Красова",
		title: "Русско-итальянские соответствия",
		section: "УЛ Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1054,
		author: "Афанасьева, Бужинский",
		title: "Голубая роза",
		section: "ДЛ Фолк",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1055,
		author: "Маркс Х.",
		title: "Обзор дрезденской галереи",
		section: "ИИ Пут",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1056,
		author: "Стрейффер",
		title: "Санкт-Петербург",
		section: "ИИ Пут",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1057,
		author: "Алиева",
		title: "Французский язык",
		section: "УЛ ДЛ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1058,
		author: "Воронцова",
		title: "Устные темы на фр.языке",
		section: "УЛ Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1059,
		author: "Воронцова",
		title: "Грамматика фр.языка",
		section: "УЛ Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1060,
		author: "Воронихина",
		title: "Государственный Эрмитаж",
		section: "ИИ Пут",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1061,
		author: "Сборник",
		title: "Иллюстрированная история России в портретах",
		section: "И ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1062,
		author: "Поплавский",
		title: "Собинов в Петербурге-Петрограде-Ленинграде",
		section: "ИИ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1063,
		author: "Кучумов",
		title: "Павловск",
		section: "ИИ Пут",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1064,
		author: "Федин",
		title: "Города и года",
		section: "РЛ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1065,
		author: "Красова, Дзаппи",
		title: "Итальянско-русский словарь",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1066,
		author: "Маршак",
		title: "Сатирические стихи",
		section: "РЛ Ст",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1067,
		author: "Бастарева, Сидорова",
		title: "Петропавловская крепость",
		section: "ИИ Пут",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1068,
		author: "Прошин",
		title: "Казанский собор",
		section: "ИИ Пут",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1069,
		author: "Мурадова",
		title: "Грамматика фр.языка",
		section: "УЛ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1070,
		author: "Цетлин",
		title: "Словарь наиболее употребительный слов фл.языка",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1071,
		author: "Долгополова",
		title: "Русско-французский словарь",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1072,
		author: "Барихновская",
		title: "Международные документы по правам человека",
		section: "УЛ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1073,
		author: "Морозова, Элиасберг",
		title: "О самом главном",
		section: "УЛ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1074,
		author: "Лафонтен",
		title: "Басни",
		section: "ЗЛ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1075,
		author: "Лисл",
		title: "Варварская поэма",
		section: "ЗЛ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1076,
		author: "Потоцкие",
		title: "Русско-французский словарь",
		section: "Н Спец",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1077,
		author: "Мелентьев",
		title: "Кутузов в Петербурге",
		section: "И ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1078,
		author: "Павловский",
		title: "Анна Ахматова",
		section: "РЛ Био",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1079,
		author: "Орлов",
		title: "Поэт и город. Блок",
		section: "РЛ Био",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1080,
		author: "Нестерова",
		title: "Русское искусство 11-19 вв",
		section: "ИИ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1081,
		author: "Жюллиан",
		title: "Эжен Делакруа",
		section: "ИИ Био",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1082,
		author: "Береговская",
		title: "Синяя птица. 5 класс. Тетрадь",
		section: "УЛ ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1083,
		author: "Иезуитова, Левкович",
		title: "Пушкин в Петербурге",
		section: "РЛ Био",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1084,
		author: "Дубровина",
		title: "Образ Петербурга в поэзии",
		section: "РЛ Ст",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1085,
		author: "Маркс К.",
		title: "Капитал .Том 1",
		section: "Фил ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1086,
		author: "Маркс К.",
		title: "Капитал .Том 2",
		section: "Фил ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1087,
		author: "Маркс К.",
		title: "Капитал .Том 3 Часть 1",
		section: "Фил ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1088,
		author: "Маркс К.",
		title: "Капитал .Том 3 Часть 2",
		section: "Фил ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1089,
		author: "Розенберг",
		title: "Комментарии к Капиталу К.Маркса",
		section: "Фил ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1090,
		author: "Дени Дидро",
		title: "Монахиня. Плямянник Рамо. Жак-фаталист и его хозяин",
		section: "Фил ",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1091,
		author: "Гулыга",
		title: "Гегель",
		section: "Фил Био",
		placed: "2-2-1",
		read: false
	},
	{
		id: 1092,
		author: "Буткова",
		title: "Живописный Санкт-Петербург",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1093,
		author: "Чижова",
		title: "Души волшебное светило…",
		section: "И Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1094,
		author: "Яковлева",
		title: "Крамской",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1095,
		author: "Хазанович",
		title: "Геологические памятники Ленинградской области",
		section: "ИИ Спец",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1096,
		author: "Кудрявцева",
		title: "Куинджи",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1097,
		author: " Саркисьян, Ставницер",
		title: "Улицы рассказвают. Одесса.",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1098,
		author: "Потоцкие",
		title: "Французско-русский словарь",
		section: "Н Спец",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1099,
		author: "Пастернак",
		title: "Поэмы",
		section: "РЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1100,
		author: "Олеша",
		title: "Пьесы",
		section: "РЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1101,
		author: "Блок",
		title: "Стихотворения и поэмы",
		section: "РЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1102,
		author: "Лисаевич",
		title: "Доменико Трезини",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1103,
		author: "Раскин",
		title: "Петродворец",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1104,
		author: "Грицай",
		title: "Фламандская живопись 17 вера. Эрмитаж",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1105,
		author: "Перкаль",
		title: "Герцен в Петербурге",
		section: "И Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1106,
		author: "Платонов",
		title: "Иван Посошков",
		section: "Н Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1107,
		author: "Валерьевна и др.",
		title: "Итальянско-русский разговорник",
		section: "Н Спец",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1108,
		author: "Хармс",
		title: "Пейте уксус, господа…",
		section: "РЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1109,
		author: "Степанов",
		title: "У истоков культурной революции",
		section: "ИИ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1110,
		author: "Сборник",
		title: "Антология поэзии пушкинской поры. Кн.2",
		section: "РЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1111,
		author: "Сборник",
		title: "Русские поэты серебрянного века Т.1",
		section: "РЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1112,
		author: "Сборник",
		title: "Русские поэты серебрянного века Т.2",
		section: "РЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1113,
		author: "Хентова",
		title: "Шостакович в Петрограде-Ленинграде",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1114,
		author: "Селизарова",
		title: "Петров-Водкин в Петербурге-Петрограде-Ленинграде",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1115,
		author: "Лисовский",
		title: "Академия художеств",
		section: "ИИ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1116,
		author: "Хармс",
		title: "Полёт в небеса",
		section: "РЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1117,
		author: "Дудин",
		title: "Грешные рифмы",
		section: "РЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1118,
		author: "Колосков",
		title: "Ленинские места на Карельском перешейке",
		section: "И Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1119,
		author: "Ена, Твердохлебов, Шантырь",
		title: "Южный берег Крыма",
		section: "И Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1120,
		author: "Родникова",
		title: "Живопись древнего Пскова",
		section: "ИИ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1121,
		author: "Конисская",
		title: "Чайковский в Петербурге",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1122,
		author: "Орлова",
		title: "Мусоргский в Петербурге",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1123,
		author: "Саруханян",
		title: "Достоевский в Петербурге",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1124,
		author: "Золина, Леонтьев",
		title: "Добролюбов в Петербурге",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1125,
		author: "Лихоткин",
		title: "Ломоносов в Петербурге",
		section: "Н Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1126,
		author: "Валицкая",
		title: "Кипренский в Петербурге",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1127,
		author: "Северянин",
		title: "Лирика",
		section: "РЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1128,
		author: "Эразм Роттердамский",
		title: "Похвола Глупости",
		section: "ЗЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1129,
		author: "Джусти",
		title: "Шутки",
		section: "ЗЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1130,
		author: "Сборник",
		title: "Страницы европейской поэзии. ХХ век.",
		section: "ЗЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1131,
		author: "Блейк",
		title: "Избранное",
		section: "ЗЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1132,
		author: "Кшижановский",
		title: "Гданьск",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1133,
		author: "Славина",
		title: "Тон",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1134,
		author: "Калязина",
		title: "Меншиковский дворец-музей",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1135,
		author: "Сборник",
		title: "История цветов. Корейская проза",
		section: "ЗЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1136,
		author: "Абеляшева",
		title: "Фонтебло. ВО-ле-Виконт. Версаль",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1137,
		author: "Чуднова",
		title: "Лесков в Петербурге",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1138,
		author: "Прибульская",
		title: "Репин в Петербурге",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1139,
		author: "Чугунов",
		title: "Город Пушкин",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1140,
		author: "Славина",
		title: "Щуко",
		section: "ИИ Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1141,
		author: "Эсхил, Софокл. Еврепид",
		title: "Древнегреческая трагедия",
		section: "ЗЛ ",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1142,
		author: "Суздалева",
		title: "Троцкий",
		section: "И Био",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1143,
		author: "Гете",
		title: "Лирика",
		section: "ЗЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1144,
		author: "Джойс",
		title: "Стихотворения",
		section: "ЗЛ Ст",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1145,
		author: "Андреева и др.",
		title: "По Ленинградской области",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1146,
		author: "Голдовский, Знаменов",
		title: "Дворец Монплезир",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1147,
		author: "Чеснокова",
		title: "Невский проспект",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1148,
		author: "Васильев",
		title: "Аничков мост",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1149,
		author: "Сашонко",
		title: "Адмиралтейство",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1150,
		author: "Богданов",
		title: "Гостиный Двор",
		section: "ИИ Пут",
		placed: "2-2-2",
		read: false
	},
	{
		id: 1151,
		author: "Бутромеев",
		title: "Раннее Средневековье",
		section: "ДЛ И",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1152,
		author: "Литтелл",
		title: "Современная мировая история",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1153,
		author: "Литтелл",
		title: "Мировая история",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1154,
		author: "Паасилинна",
		title: "Иллюстрированная история",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1155,
		author: "Невский альманох",
		title: "№2, 2006 год",
		section: "РЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1156,
		author: "Погодина",
		title: "Твой Петербург. Рабочая тетрадь №1",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1157,
		author: "Погодина",
		title: "Твой Петербург. Рабочая тетрадь №4",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1158,
		author: "Погодина",
		title: "Твой Петербург. Рабочая тетрадь №3",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1159,
		author: "Векслер",
		title: "Тетрадь по истории города №1",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1160,
		author: "Векслер",
		title: "Тетрадь по истории города №2",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1161,
		author: "Векслер",
		title: "Тетрадь по истории города №3",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1162,
		author: "Аксельрод",
		title: "Контурные карты по СПб",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1163,
		author: "Ермолаева и др",
		title: "Тетрадь СПб. 18 век",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1164,
		author: "Ермолаева и др",
		title: "От берегов загадочного Нила…",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1165,
		author: "Ермолаева и др",
		title: "Страницы жизни края. Начало",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1166,
		author: "Ермолаева и др",
		title: "Страницы жизни края. 18 век",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1167,
		author: "Моррис",
		title: "Начало истории",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1168,
		author: "Моррис",
		title: "Месопотамия и Библейский мир",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1169,
		author: "Моррис",
		title: "Древняя Азия",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1170,
		author: "Моррис",
		title: "За пределами Европы",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1171,
		author: "Аллен",
		title: "Древний Рим",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1172,
		author: "Коннолли",
		title: "Древняя Америка",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1173,
		author: "Грант",
		title: "Древний Египет и Древняя Греция",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1174,
		author: "Коваль, Холин",
		title: "Дух воина. Дзен.",
		section: "И Рел",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1175,
		author: "Уилкинсон",
		title: "Здание",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1176,
		author: "Лэнгли",
		title: "Религия",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1177,
		author: "Сборник",
		title: "Богатыри и витязи русской земли.",
		section: "РЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1178,
		author: "Савельев",
		title: "Полная энциклопедия Фэн-шуй",
		section: "Хобби ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1179,
		author: "Сборник",
		title: "Древнее зеркало. Китай",
		section: "ЗЛ Ск",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1180,
		author: "Кадрон, Чайлдс",
		title: "Раскрашиваем лицо",
		section: "ДЛ Хобби",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1181,
		author: "Салариа, Сэниор",
		title: "Медицина",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1182,
		author: "Пушкин",
		title: "Сказки",
		section: "ДЛ Ск",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1183,
		author: "Берзилин",
		title: "Путешествие с домашними растениями",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1184,
		author: "Нортон",
		title: "Великанов больше  нет?",
		section: "ДЛ Фэн",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1185,
		author: "Нортон",
		title: "Метла и костер",
		section: "ДЛ Фэн",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1186,
		author: "Нортон",
		title: "Метла и металический шарик",
		section: "ДЛ Фэн",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1187,
		author: "Яковлев Л.",
		title: "Царство людей",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1188,
		author: "Крючкова",
		title: "Предания и мифы древней Японии",
		section: "ДЛ Фолк",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1189,
		author: "Яковлев Ю.",
		title: "Девочки с Васильевского острова",
		section: "ДЛ И",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1190,
		author: "Жданова",
		title: "Мир и человек. Географический атлас 1988",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1191,
		author: "Сборник",
		title: "Кобланды: казахский героический эпос",
		section: "ДЛ Фолк",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1192,
		author: "Костюков, Сурова",
		title: "Космос",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1193,
		author: "Майков",
		title: "История 5 кл",
		section: "УЛ И",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1194,
		author: "Запорожец",
		title: "Книга для чтения по истори  ср.веков",
		section: "Пед Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1195,
		author: "Преображенский ",
		title: "История Отечества.  7 кл.",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1196,
		author: "Береговская",
		title: "Синяя птица. 5 класс.  Учебник",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1197,
		author: "Чистякова",
		title: "Французский язык. Учебник 3 кл.",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1198,
		author: "Данилов и др.",
		title: "История России 6 кл.",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1199,
		author: "Сухов и др.",
		title: "Дидактические материалы. 5-6 кл.",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1200,
		author: "Гульянц, Базик",
		title: "Что можно сделать из природного материала",
		section: "ДЛ Хобби",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1201,
		author: "Полякова, Элиасберг",
		title: "Гуманистические ценности европейских цивилизаций. Проблемы современного мира",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1202,
		author: "Волобуев и др",
		title: "История. Россия и мир. 11 класс",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1203,
		author: "Немеров",
		title: "Вашингтон",
		section: "ИИ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1204,
		author: "Юдовская. Баранов. Ванюшкина",
		title: "История Нового времени. 7 класс",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1205,
		author: "Карелин",
		title: "Смертная казнь",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1206,
		author: "Черкашина",
		title: "Активация познавательной деятельности учащихся",
		section: "Пед Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1207,
		author: "Рифкин",
		title: "Самоанализ образовательного процесса",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1208,
		author: "Зверева",
		title: "Вопросы и задания олимпианого тура по истории",
		section: " ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1209,
		author: "Грибов",
		title: "Дидактические материалы по истории Нового времени",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1210,
		author: "Пчелов",
		title: "Государственные символы России",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1211,
		author: "Волобуев и др",
		title: "История. Россия и мир. 10 класс",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1212,
		author: "Селенский",
		title: "У реки, у моря. Астрахань",
		section: "ИИ Пут",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1213,
		author: "Данилов, Косулина",
		title: "История Росии 7 кл.",
		section: "УЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1214,
		author: "Тютюнникова",
		title: "Как создать концерн умников",
		section: "Псих ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1215,
		author: "Чуракова",
		title: "Внутренняя система оценки качество образования",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1216,
		author: "Лизинский",
		title: "О методической работе в школе",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1217,
		author: "Лупоядов",
		title: "Исторические термины и понятия",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1218,
		author: "Эжен Сю",
		title: "Парижские тайны",
		section: "ЗЛ ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1219,
		author: "Макарова, Макаров",
		title: "Организация деятельности методического объединения в школе",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1220,
		author: "Гринин, Перепелкина",
		title: "Справочник руководителя МО",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1221,
		author: "Усманов",
		title: "История Франции с древнейших времен до 1789",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1222,
		author: "Усманов",
		title: "История Франции с 1789 до конца 19 века",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1223,
		author: "Северина",
		title: "Проектная деятельность учащихся: обществознание",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1224,
		author: "Пономарев",
		title: "Всеобщая история.10 класс. Раб.тетрадь",
		section: "Пед ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1225,
		author: "Медведевы",
		title: "Нобелевские Лауреаты России",
		section: "И Био",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1226,
		author: "Синельникова",
		title: "История Англии. Англо-саксонские королевства",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1227,
		author: "Катенин, Зимина",
		title: "История Англии. Становление империи",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1228,
		author: "Синельникова",
		title: "Короли и королевы",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1229,
		author: "Катенин, Зимина",
		title: "Рассказы об Англии для детей",
		section: "И ",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1230,
		author: "Голицинский",
		title: "США",
		section: "И Стр",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1231,
		author: "Голицинский",
		title: "Великобритания",
		section: "И Стр",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1232,
		author: "Эккерсли",
		title: "Английский для всех Ч.1",
		section: "Н Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1233,
		author: "Эккерсли",
		title: "Английский для всех Ч.2",
		section: "Н Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1234,
		author: "Эккерсли",
		title: "Английский для всех Ч.3",
		section: "Н Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1235,
		author: "Эккерсли",
		title: "Английский для всех Ч.4",
		section: "Н Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1236,
		author: "Кенель, Клод",
		title: "Иллюстрированный словарь для юных европейцев",
		section: "ДЛ Спец",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1237,
		author: "Мари-Элл Кол",
		title: "Дошкольное творчество",
		section: "ДЛ Хобби",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1238,
		author: "Мари-Элл Кол",
		title: "110 творческих заданий для детей по лепке",
		section: "ДЛ Хобби",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1239,
		author: "Мари-Элл Кол",
		title: "200 увлекательных проектов для детей",
		section: "ДЛ Хобби",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1240,
		author: "Мари-Элл Кол",
		title: "Наука через искусство",
		section: "ДЛ Хобби",
		placed: "2-1-1",
		read: false
	},
	{
		id: 1241,
		author: "Мари-Элл Кол",
		title: "110 креативных заданий. Я - великий художник",
		section: "ДЛ Хобби",
		placed: "2-1-1",
		read: false
	}
];
export default data2;
const companyRepository = require('../repositories/companyRepository');

module.exports = function CompanyService() {
    mockCompanies.forEach(elem => {
        companyRepository.add(elem, (err, data) => {
            if (err) {
                console.log('\n\nError of adding mockups copmanies\n');
                console.log(err, '\n\n');
            }
        })
    })
}

// mookups
const mockCompanies = [
    {
        "name": {
            "en": "Hotel-Restaurant Aqarius",
            "ru": "Отель-ресторан Аквариус",
            "ua": "Готель-ресторан Акваріус"
        },
        "description": {
            "en": "Hotel-restaurant «Aquarius» is located in the village «Bryukhovichi», ten minutes from the center of the city of Lviv - in a picturesque forest lawn, designed for recreation and pleasant pastime. We welcome visitors here for ten years already. During this time, the number of apartments has been tripled, the menu of our restaurant has been expanded, the range of services has increased. After all, the hotel-restaurant «Aquarius» is a home coziness and a pleasant holiday.",
            "ru": "Отель-ресторан «Аквариус» находится в пгт. «Брюховичи», за десять минут от центра города Львова - на живописной лесной поляне, созданной для отдыха и приятного времяпрепровождения. Мы гостеприимно принимаем у нас посетителей уже десять лет. В течение этого времени втрое увеличено количество апартаментов, расширены меню нашего ресторана, увеличивается ассортимент услуг. Ведь отель-ресторан «Аквариус» - это домашний уют и приятный отдых.",
            "ua": "Готель-ресторан «Акваріус» знаходиться в смт. «Брюховичі», за десять хвилин від центру міста Львова – на мальовничій лісовій галявині, створеній для відпочинку та приємного проведення часу. Ми гостинно приймаємо у нас  відвідувачів уже десять років. Протягом цього часу втричі збільшено кількість апартаментів, розширено меню нашого ресторану, збільшується асортимент послуг. Адже готель-ресторан «Акваріус» – це домашній затишок та приємний відпочинок."
        },
        "logo": "./resources/companies_logo/akvarius.png",
        "address": {
            "en": "Lviv, Bryukhovychi district, Makarenko, 6",
            "ru": "г.Львов, пгт Брюховичи, ул.Макаренка, 6",
            "ua": "м.Львів, смт Брюховичі, вул.Макаренка, 6"
        },
        "email": "qvarius@gmail.com",
        "category": ["restaurants", "hotels"],
        "link": "http://www.aquarius.lviv.ua",
        "phones": {
            "main": ["+380(032)2347333"],
            "reception": [],
            "fax": ["+380(032)2347030"],
            "book": [],
            "restaurant": ["+380(032)2347333"]
        },
        "isMarkedCheckInLviv": true
    },
    
    {
        "name": {
            "en": "Opera Hotel",
            "ru": "Opera Hotel",
            "ua": "Opera Hotel"
        },
        "description": {
            "en": "Opera Hotel is a combination of comfort and advantages that make us one of the best hotels in Lviv. The hotel is located in the very center of Lviv, only a few steps from the Opera House. The decoration of the hotel and the city is an exquisite Panorama restaurant, located on the 7th floor of the Opera Hotel. Exclusive European and Ukrainian cuisine, a rich wine list, exquisite interior, and excellent service await you. We are always glad to you, every visitor is our guest. Nothing extraordinary. Opera - just a very good hotel.",
            "ru": "Отель Опера - это сочетание комфорта и преимуществ, которые делают нас одним из лучших отелей Львова.  Отель расположен в самом центре Львова, всего в нескольких шагах от Оперного театра. Украшением отеля и города является изысканный ресторан Панорама, находится на 7-м этаже отеля Опера. Вас ждут эксклюзивная европейская и украинская кухня, богатая винная карта, изысканный интерьер, превосходное обслуживание. Мы Вам всегда рады, каждый посетитель - это наш гость. Ничего удивительного. Опера - просто очень хороший отель.",
            "ua": "Готель Опера – це поєднання комфорту та переваг, які роблять нас одним із кращих готелів Львова. Готель розташований в самому центрі Львова, всього за декілька кроків від Оперного театру. Прикрасою готелю і міста є вишуканий ресторан Панорама, що знаходиться на 7-му поверсі готелю Опера. На Вас чекають ексклюзивна європейська та українська кухня, багата винна карта, вишуканий інтер’єр, чудове обслуговування. Ми Вам завжди раді, кожен відвідувач – це наш гість. Нічого надзвичайного. Опера – просто дуже хороший готель."
        },
        "logo": "./resources/companies_logo/opera.png",
        "address": {
            "en": "Lviv, Svobody avenue, 45",
            "ru": "Львов, проспект Свободы, 45",
            "ua": "м.Львів, проспект Свободи, 45"
        },
        "email": "info@georgehotel.com.ua",
        "category": ["hotels"],
        "link": "http://www.hotel-opera.com.ua",
        "phones": {
            "main": ["+38 (050) 431 9599"],
            "reception": [],
            "fax": ["+38 (032) 225 9001"],
            "book": [],
            "restaurant": ["+38 (032) 225 9009"]
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "George Hotel",
            "ru": "George Hotel",
            "ua": "George Hotel"
        },
        "description": {
            "en": "The oldest of the existing hotels in Ukraine, whose history dates back to 1793. The architectural monument is built by prominent Austrian architects Hermann Helmer and Ferdinand Fellner. The hotel is worth the fact that from all over the world connoisseurs of beauty come to him! After restoration, the restored elegant hotel, with luxurious rooms and a wonderful panorama of the Old Town, combines the flawlessness of the European service and Ukrainian hospitality.",
            "ru": "Самая старинная из действующих гостиниц Украины, история которой берет свое начало с 1793 года. Памятник искусства архитектуры сооружен выдающимися австрийскими архитекторами Германом Гельмером и Фельнером. Отель стоит того, чтобы со всех уголков мира к нему приезжали ценители прекрасного! После реставрации восстановлен изысканный отель, с роскошными номерами и удивительной панорамой Старого Львова, в котором сочетаются безупречность европейского сервиса и украинское гостеприимство.",
            "ua": "Найстаровинніший з діючих готелів України, історія якого бере свій початок з 1793 року. Пам'ятка мистецтва архітектури споруджена видатними австрійськими архітекторами Германом Гельмером та Фердинандом Фельнером. Готель вартий того, щоб з усіх куточків світу до нього зїжджались цінителі прекрасного! Після реставрації відновлений вишуканий готель, з розкішними номерами і дивовижною панорамою Старовинного Львова, в якому поєднуються бездоганність європейського сервісу та українська гостинність."
        },
        "logo": "./resources/companies_logo/george.png",
        "address": {
            "en": "79000, Ukraine, Lviv, Mickiewicz sq., 1",
            "ru": "79000, Украина, г. Львов, пл. Мицкевича, 1",
            "ua": "79000, Україна, м.Львів,пл. Міцкевича, 1"
        },
        "email": "info@georgehotel.com.ua",
        "category": ["hotels"],
        "link": "http://www.georgehotel.com.ua",
        "phones": {
            "main": ["+38 (032) 232 6236"],
            "reception": ["+38 (032) 232 6236"],
            "fax": ["+38 (032) 232 6242"],
            "book": ["+38 (032) 232 6232"],
            "restaurant": ["+38 (032) 232 6248"]
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Volter",
            "ru": "Волтер",
            "ua": "Волтер"
        },
        "description": {
            "en": "We offer 83 comfortable rooms with amenities, restaurant services, modern meeting rooms, hookah, guarded parking.",
            "ru": "Мы предлагаем 83 комфортных удобных номеров с удобствами, услуги ресторанного комплекса, современные конференц-залы, комнаты для переговоров, кальян, парковка с охраной.",
            "ua": "Ми пропонуємо 83 комфортних зручних номерів з вигодами, послуги ресторанного комплексу, сучасні конференц-зали, кімнати для переговорів, кальян, паркінг з охороною."
        },
        "logo": "./resources/companies_logo/volter.png",
        "address": {
            "en": "Lviv, st. Lipinsky, 60а",
            "ru": "Львов, ул. Липинского, 60а",
            "ua": "Львів, вул. Липинського, 60а"
        },
        "email": "booking@nton.info",
        "category": ["hotels", "restaurants"],
        "link": "http://www.hotelvolter.com.ua",
        "phones": {
            "main": ["294-88-88"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Hetman",
            "ru": "Гетьман",
            "ua": "Гетьман"
        },
        "description": {
            "en": "Lviv is an ancient, picturesque city, an open-air museum. Its architectural monuments, rich museum collections, theaters and cozy parks have long attracted tourists from all over the world. The old part of the city is included in the architectural heritage of UNESCO. To get acquainted with its uniqueness, plunge into the world of antiquity - visit Lviv. We will meet you at the cozy Hotel Hetman, which is located near the city center and offers convenient transport links.",
            "ru": "Львов - старинный, живописный город, «музей под открытым небом». Его достопримечательности архитектуры, богатые музейные коллекции, театры и уютные парки издавна привлекают туристов со всего мира. Старая часть города внесена в архитектурное наследие ЮНЕСКО. Чтобы ознакомиться с его уникальностью, погрузиться в мир древности - посетите Львов. Мы гостеприимно встретим Вас в уютной гостинице «Гетьман», которая расположена вблизи центра города и имеет удобное транспортное сообщение.",
            "ua": "Львів - старовинне, мальовниче місто, 'музей під відкритим небом'. Його пам'ятки архітектури, багаті музейні колекції, театри та затишні парки здавна приваблюють туристів з усього світу. Стара частина міста внесена до архітектурної спадщини ЮНЕСКО. Щоб ознайомитись з його унікальністю, поринути у світ старовини – завітайте у Львів. Ми гостинно зустрінемо Вас у затишному готелі 'Гетьман', який розташований поблизу центру міста і має зручне транспортне сполучення."
        },
        "logo": "./resources/companies_logo/getman.png",
        "address": {
            "en": "",
            "ru": "ул. В. Великого 50",
            "ua": "V. Velykyi st., 50"
        },
        "email": "hetman@mail.lviv.ua",
        "category": ["hotels"],
        "link": "http://www.hetman.lviv.ua",
        "phones": {
            "main": ["+380 (32) 264-99-81"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Eurohotel",
            "ru": "Евроотель",
            "ua": "Євроготель"
        },
        "description": {
            "en": "«Eurootel» is an ideal choice for business people and tourists. Conference room, meeting room, restaurant, bar - all this we offer our visitors for a successful work and a good rest. We offer you comfortable rooms for all tastes. Good location, cozy atmosphere of rest, as well as democratic prices - the main competitive advantages of «Eurohotel».",
            "ru": "«Евроотель» - это идеальный выбор для деловых людей и туристов. Конференц-зал, комната для переговоров, ресторан, бар - все это мы предлагаем нашим посетителям для успешной работы и хорошего отдыха. Предлагаем к Вашим услугам комфортабельные номера на любой вкус. Удачное расположение, уютная атмосфера отдыха, а также демократичные цены - основные конкурентные преимущества «Евроотеля».",
            "ua": "«Євроготель» – це ідеальний вибір для ділових людей та туристів. Конференц-зал, кімната для переговорів, ресторан, бар – все це ми пропонуємо нашим відвідувачам для успішної роботи і хорошого відпочинку.  Пропонуємо до Ваших послуг комфортабельні номери на будь-який смак. Вдале розташування, затишна атмосфера відпочинку, а також демократичні ціни – основні конкурентні переваги «Євроготелю»."
        },
        "logo": "./resources/companies_logo/eurohotel.png",
        "address": {
            "en": "Lviv, st. Terhakovtsiv, 6a",
            "ru": "г. Львов, ул. Тершаковцев, 6а",
            "ua": "м. Львів , вул. Тершаковців, 6а"
        },
        "email": "info@eurohotel.lviv.ua",
        "category": ["hotels", "restaurants"],
        "link": "http://www.eurohotel.lviv.ua",
        "phones": {
            "main": ["+38 (032) 275-72-14"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Aeneas",
            "ru": "Эней",
            "ua": "Еней"
        },
        "description": {
            "en": "Cozy little hotel «Eney» opened the door with the beginning of the third millennium. The hotel is named after Aeneas, the famous hero of the Trojan War, who is considered to be the founder of the Roman state, and his son Jul - the founder of the imperial family of Julius. For Ukrainians, Aeneas became close because of I.P. Kotlyarevsky who «turned» Virgiliev «Aeneid» into the Ukrainian way, making it an encyclopedia of folk life, and Aeneas - a Cossack and a hero.",
            "ru": "Уютный небольшой отель «Эней» открыл дверь с началом третьего тысячелетия. Отель назван в честь Энея - славного героя Троянской войны, который считается основателем Римского государства, а сын его Юл - родоначальником императорского рода Юлиев. Для украинцев Эней стал близким благодаря И.П.Котляревскому, который «перелицевал» «Энеиду» Вергилия на украинский лад, сделав ее энциклопедией народной жизни, а Энея - казаком и народным героем.",
            "ua": "Затишний невеликий готель «Еней» відчинив двері з початком третього тисячоліття. Готель названий в честь Енея – славетного героя Троянської війни, який вважається засновником Римської держави, а син його Юл - родоначальником імператорського роду Юліїв. Для українців Еней став близьким завдяки І.П.Котляревському, який «перелицював» Вергілієву «Енеїду» на український лад, зробивши її енциклопедією народного життя, а Енея – козаком і народним героєм."
        },
        "logo": "./resources/companies_logo/enej.png",
        "address": {
            "en": "Lviv, Shymseriv str., 2",
            "ru": "Львов, вул.Шимзеров, 2",
            "ua": "Львів, вул.Шімзерів, 2"
        },
        "email": "eney@mail.lviv.ua",
        "category": ["hotels"],
        "link": "http://www.eney.lviv.ua",
        "phones": {
            "main": ["+38(032) 2768799"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Hostel PANORAMI Center",
            "ru": "Hostel PANORAMI Center",
            "ua": "Hostel PANORAMI Center"
        },
        "description": {
            "en": "The PANORAMI Center Hostel is an integral part of your Lviv history. Experienced staff, attention to detail, excellent location and service - a guarantee that your vacation or business trip will be perfect in Lviv. The hostel is located in the city center, making it easy to get to the city's attractions. Have a nice rest!",
            "ru": "Хостел PANORAMI Center - это неотъемлемая часть твоей Львовской истории. Опытный персонал, внимание к деталям, отличная локация и сервис - залог того, что Ваш отдых или бизнес-поездка пройдут идеально во Львове. Хостел расположен в центре города, что позволяет с легкостью добраться до достопримечательностей города. Приятного отдыха!",
            "ua": "Хостел PANORAMI Center – це невід’ємна частина Твоєї Львівської історії. Досвідчений персонал, увага до деталей, відмінна локація й сервіс - запорука того, що Ваш відпочинок чи бізнес-поїздка пройдуть ідеально у Львові. Хостел розташований в центрі міста, що дозволяє з легкістю дістатися до визначних пам'яток міста. Приємного відпочинку!"
        },
        "logo": "./resources/companies_logo/panorami.png",
        "address": {
            "en": "avenue Svobody, 11, 2nd floor (entrance from the street of Petro Doroshenko)",
            "ru": "просп. Свободы, 11, 2-й этаж (вход с ул. Петра Дорошенко)",
            "ua": "просп. Свободи, 11, 2-й поверх (вхід із вул. Петра Дорошенка)"
        },
        "email": "hostpanorama@gmail.com",
        "category": ["hostels"],
        "link": "http://panoramihostel.com",
        "phones": {
            "main": ["+38 (093) 234 75 73"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Yellow House Hostel",
            "ru": "Yellow House Hostel",
            "ua": "Yellow House Hostel"
        },
        "description": {
            "en": "Not far from the center of Lviv (10 minutes by taxi), guests of the city can stay at the Yellow House Hostel. Affordable prices, good transport links to the city center, as well as to the train and bus station. Near the hostel there is a park, a stadium and a supermarket. Have a nice rest!",
            "ru": "Недалеко от центра Львова (10 минут маршрутными такси), гости города могут остановиться в «Yellow House Hostel» ( «Елоу Хаус Хостел»). Доступные цены, хорошее транспортное сообщение с центральной частью города, а также с железнодорожным и автобусным вокзалом. Рядом с хостелом есть парк, стадион и супермаркет. Приятного отдыха!",
            "ua": "Неподалік від центру Львова (10 хвилин маршрутними таксі), гості міста можуть зупинитися в «Yellow House Hostel» («Єлоу Хаус Хостелі»). Доступні ціни, добре транспортне сполучення з центральною частиною міста, а також з залізничним та автобусним вокзалом. Поряд з хостелом є парк, стадіон і супермаркет. Приємного відпочинку!"
        },
        "logo": "./resources/companies_logo/yhh.png",
        "address": {
            "en": "Lviv, Green st., 109 (5th floor)",
            "ru": "Львов, ул. Зеленая, 109 (5 этаж)",
            "ua": "Львів, вул. Зелена, 109 (5 поверх)"
        },
        "email": "",
        "category": ["hostels"],
        "link": "",
        "phones": {
            "main": ["+38 (096) 969 67 67"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "LeoCity",
            "ru": "LeoCity",
            "ua": "LeoCity"
        },
        "description": {
            "en": "All the other benefits of staying at LeoCity Hostel in Lviv can be added to the opportunity to communicate with other guests, who often come to Lviv from around the world. By booking this inexpensive hotel for your trip, you will be able to learn more about the country, as other travelers and tourists can share your invaluable personal experience. You can tell them about your trip, about how to rent a hotel cheaper to share the adventurous spirit of democratic travel and find out about Lviv interesting details.",
            "ru": "Ко всем прочим плюсам проживания в хостеле «LeoCity» («Лео-Сити») во Львове можно добавить и возможность общения с другими гостями, которые часто прибывают во Львов из разных стран мира. Заказывая для путешествия этот недорогой отель, Вы сможете больше узнать о стране, ведь другие путешественники и туристы смогут поделиться с Вами бесценным личным опытом. Вы можете рассказать и им о своем путешествии, о том, как лучше снять отель дешевле, поделиться авантюрным духом демократических поездок и узнать о Львове интересные подробности.",
            "ua": "До всіх інших плюсів проживання в хостелі  «LeoCity» («Лео-Сіті») у Львові можна додати і можливість спілкування з іншими гостями, що часто прибувають до Львова з різних країн світу. Замовляючи для подорожі цей недорогий готель, Ви зможете більше дізнатися про країну, адже інші мандрівники і туристи зможуть поділитися з Вами безцінним особистим досвідом. Ви можете розповісти і їм про свою подорож, про те, як краще зняти готель дешевше поділитися авантюрним духом демократичних поїздок та дізнатися про Львів цікаві подробиці."
        },
        "logo": "./resources/companies_logo/hostel-leocity-logo.png",
        "address": {
            "en": "Lviv, M. Konopnitskaya st., 15/7, 3 floor",
            "ru": "Львов, ул. М.Конопницкой 15/7, 3 этаж",
            "ua": "Львів, вул. М.Конопницької 15/7, 3 поверх"
        },
        "email": "",
        "category": ["hostels"],
        "link": "",
        "phones": {
            "main": ["+38 (093) 948 93 26"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Mister hostel",
            "ru": "Мистер хостел",
            "ua": "Містер хостел"
        },
        "description": {
            "en": "«Mister hostel» is located in the very center of Lviv, on the Bank st., 5, at a distance of 100 m from Svobody ave and 300 m from Rynok Square.",
            "ru": "Хостел «Мистер хостел» расположен в самом центре Львова, на ул. Банковской 5, на расстоянии 100 м от проспекта Свободы и 300 м от площади Рынок.",
            "ua": "Хостел  «Містер хостел» розташований в самому центрі Львова, на вул. Банківській 5, на відстані 100 м від проспекту Свободи і 300 м від площі Ринок."
        },
        "logo": "./resources/companies_logo/mister-hostel.png",
        "address": {
            "en": "Lviv, street. Rohatyntsiv Brothers, 30/1",
            "ru": "г. Львов, ул. Братьев Рогатинцев, 30/1",
            "ua": "м.Львів, вул. Братів Рогатинців, 30/1"
        },
        "email": "",
        "category": ["hostels"],
        "link": "",
        "phones": {
            "main": ["+380984492525"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Oscar",
            "ru": "Оскар",
            "ua": "Оскар"
        },
        "description": {
            "en": "The Oscar Hostel is located within 5 minutes (100 m) of the main train station. The hostel accommodates more than 100 people. It is possible to accommodate 2, 3 and 4 bedrooms.",
            "ru": "Хостел «Оскар» расположен в 5-ти минутах (100 м) ходьбы от главного железнодорожного вокзала. Хостел вмещает более 100 человек. Возможно размещение в 2-х, 3-х и 4-х местных номерах.",
            "ua": "Хостел «Оскар» розміщений в 5-ти хвилинах (100 м) ходу від головного залізничного вокзалу. Хостел вміщає понад 100 людей. Можливе розміщення в 2-ох, 3-ох та 4-ох місних номерах."
        },
        "logo": "./resources/companies_logo/oskar.png",
        "address": {
            "en": "Lviv, st. Railway, 7",
            "ru": "г. Львов, ул. Железнодорожная, 7",
            "ua": "м. Львів, вул. Залізнична, 7"
        },
        "email": "",
        "category": ["hostels"],
        "link": "",
        "phones": {
            "main": ["+38 (097) 315-02-71"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "StareMisto",
            "ru": "StareMisto",
            "ua": "StareMisto"
        },
        "description": {
            "en": "Hostel «StareMisto» is located between the central part of Lviv and the main railway station. The hostel was opened at the end of 2013. Our staff is always ready to help you and your friends with a choice of excursions, restaurants, bars, as well as suggest what something interesting is happening today in Lviv and what events you just do not have to miss.",
            "ru": "Хостел «StareMisto» расположен между центральной частю города Львов и главным железнодорожным вокзалом. Хостел открыт в конце 2013. Наш персонал всегда готов помочь Вам и Вашим друзьям с выбором экскурсий, ресторанов, баров, а также подскажут о том, что интересного происходит сегодня во Львове и о событиях, которые Вы просто не имеете права пропустить.",
            "ua": "Хостел «StareMisto» розташований між центральною частино міста Львів та головним залізничним вокзалом. Хостел відкритий наприкінці 2013р. Наш персонал завжди готовий допомогти Вам і Вашим друзям з вибором екскурсій, ресторанів, барів, а також підкажуть про те, що цікавого відбувається сьогодні у Львові і які події Ви просто не маєте права пропустити."
        },
        "logo": "./resources/companies_logo/stare-misto.png",
        "address": {
            "en": "Lviv, sq. Prince Svyatoslav, 2/3 a",
            "ru": "м. Львов, пл. князя Святослава, 2/3а",
            "ua": "м. Львів, пл. князя Святослава, 2/3а"
        },
        "email": "",
        "category": ["hostels"],
        "link": "",
        "phones": {
            "main": ["+38 (093) 423-01-00"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Central Square Hostel",
            "ru": "Central Square Hostel",
            "ua": "Central Square Hostel"
        },
        "description": {
            "en": "The hostel is located in the heart of the city - on the Rynok Square, between the Black stone house and the Italian courtyard. All historical and architectural monuments, museums, exhibitions and well-known Lviv Kneipp are within minutes.",
            "ru": "Хостел находится в сердце города - на площади Рынок, между Черным каменным  домом и Итальянским двориком. Все исторические и архитектурные памятники, музеи, выставки и известные львовские забегаловки находятся в считанных минутах ходьбы.",
            "ua": "Хостел знаходиться у серці міста – на площі Ринок, між Чорною кам’яницею та Італійським двориком. Всі історичні і архітектурні пам’ятки, музеї, виставки і відомі львівські кнайпи знаходяться в лічених хвилинах ходу."
        },
        "logo": "./resources/companies_logo/central-square.png",
        "address": {
            "en": "Lviv, sq. Market, 5",
            "ru": "м. Львов, пл. Рынок, 5",
            "ua": "м. Львів, пл. Ринок, 5"
        },
        "email": "",
        "category": ["hostels"],
        "link": "",
        "phones": {
            "main": ["+38 (095) 225-66-54"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Family House",
            "ru": "Family House",
            "ua": "Family House"
        },
        "description": {
            "en": "This small guest house in Lviv is located in an Austrian 19th-century building. It offers free Wi-Fi and a large shared kitchen. Park i.h. Ivan Franko is a 5-minute walk from here.",
            "ru": "Этот небольшой львовский гостевой дом расположен в здании в австрийском стиле 19 века. К услугам гостей бесплатный беспроводной доступ в Интернет (Wi-Fi) и большая общая кухня. Парк им. Ивана Франко расположен в 5 минутах ходьбы отсюда.",
            "ua": "Цей невеликий львівський гостьовий дім розміщений у будівлі в австрійському стилі 19 століття. До послуг гостей безкоштовний бездротовий доступ до Інтернету (Wi-Fi) і велика спільна кухня. Парк ім. Івана Франка розташований за 5 хвилин ходьби звідси."
        },
        "logo": "./resources/companies_logo/family-house.png",
        "address": {
            "en": "Lviv, st. Karpinskogo, 7",
            "ru": "г. Львов, ул. Карпинского, 7",
            "ua": "м. Львів, вул. Карпінського, 7"
        },
        "email": "",
        "category": ["hostels"],
        "link": "",
        "phones": {
            "main": ["+38 (095) 225-66-54"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Tour de Lviv",
            "ru": "Тур де Львов",
            "ua": "Тур де Львів"
        },
        "description": {
            "en": "Tour de Lviv offers you comfortable low-cost holidays in the sea in Egypt, Turkey, Bulgaria, Greece, Croatia, Montenegro or the Arab Emirates, interesting tours in Europe, excursions to holy places and famous cities around the world. We will open Paris and Prague, Vienna and Budapest, Venice and Dresden. We offer popular excursions in Ukraine, bus excursions around Lviv. Professional licensed guides in Lviv for groups and individuals will show the Olesky Castle, Pidhirtsi, Zolochiv, Svirzhsky, Zhovkva and Krekhiv, Univ and Pochaiv, Kamyanets-Podilsk and Khotin, the beer museum, the Arena-Lviv stadium. We have experience in organizing tours and conferences in Lviv and the castles of Lviv region, etc. We conduct the building, master classes, carriage rides, rafting, paine-bol, street bol or rope training. We organize quests, batariums, theatrical excursions in Lviv and the Carpathians.",
            "ru": "Тур де Львов предлагает вашему вниманию комфортный недорогой отдых на море в Египте, Турции, Болгарии, Греции, Хорватиии, Черногории или в Арабских Эмиратах, интересные туры по Европе, экскурсии по святым местам и известным городам по всему Миру. Откроем вам Париж и Прагу, Вену и Будапешт, Венецию и Дрезден. Мы предлагаем популярные экскурсии по Украине, автобусные экскурсии по Львову. Профессиональные лицензированные гиды и экскурсоводы по Львову для групп и индивидуалов покажут Олесский замок, Подгорецкий, Золочевский, Свиржский, Жовкву и Крехов, Унив и Почаев, Каменец-Подольск и Хотин, музей пива, стадион Арена-Львов. Имеем опыт организации туров и конференций во Львове и замках Львовщины, и тому подобное. Проводим тим-билдинги, мастер-классы, катание на каретах, рафтинг, пейн-бол, стрит бол или канатный тренинг. Организуем квесты, батярские, театрализованные экскурсии во Львове и Карпатах.",
            "ua": "Тур де Львів пропонує вашій увазі комфортний недорогий відпочинок на морі у Єгипті, Туреччині, Болгарії, Греції, Хорватіїї, Чорногорії чи в Арабських Еміратах, цікаві тури по Європі, екскурсії по святих місцях  та відомих містах по всьому Світу. Відкриємо для вас Париж і Прагу, Відень і Будапешт, Венеція і Дрезден. Ми пропонуємо популярні екскурсії по Україні, автобусні екскурсії по Львову. Професійні ліцензовані гіди та екскурсоводи по Львову для груп та індивідуалів покажуть Олеський Замок, Підгорецький, Золочівський, Свіржський, Жовква та Крехів, Унів і Почаїв, Кам’янець-Подільськ та Хотин, музей пива, стадіон Арена-Львів. Маємо досвід організації турів та конференцій у Львові та Замках Львівщини, тощо. Проводимо тим билдинг, майстер класи, катання на каретах, рафтінг, пейн-бол, стріт бол чи канатний тренінг. Організовуємо квести, батярські, театралізовані екскурсії у Львові та Карпатах."
        },
        "logo": "./resources/companies_logo/tourdelviv.png",
        "address": {
            "en": "Lviv, V. Chornovola Avenue, 63, office number 805",
            "ru": "г. Львов, проспект Черновола, 63, офис № 805",
            "ua": "м. Львів, проспект В.Чорновола, 63, офіс № 805"
        },
        "email": "tourdelviv@ua.fm",
        "category": ["tours"],
        "link": "http://www.tourdelviv.lviv.ua",
        "phones": {
            "main": ["+38 (032) 242-43-03"],
            "reception": [],
            "fax": ["+38 (032) 244-45-44"],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": true
    },

    {
        "name": {
            "en": "Travel company SAM",
            "ru": "Туристическая компания САМ",
            "ua": "Туристична компанія САМ"
        },
        "description": {
            "en": "Travel agency «SAM» (Lviv city) - organization of all kinds of rest abroad and in Ukraine. Beach, excursion, exotic holiday in any country of the world. Children's tours, medical tours, studying abroad. Promotions and discounts.",
            "ru": "Туристическая фирма «САМ» (г. Львов) - организация всех видов отдыха за рубежом и в Украине. Пляжный, экскурсионный, экзотический отдых в любой стране мира. Детские туры, лечебные туры, обучение за рубежом. Акции и скидки.",
            "ua": "Туристична фірма «САМ» (м.Львів) - організація всіх видів відпочинку закордоном та в Україні. Пляжний, екскурсійний, екзотичний відпочинок у будь-якій країні світу. Дитячі тури, лікувальні тури, навчання за кордоном. Акції та знижки."
        },
        "logo": "./resources/companies_logo/sam.png",
        "address": {
            "en": "Lviv, st. Bogun, 4",
            "ru": "г. Львов, ул. Богуна, 4",
            "ua": "м. Львів, вул. Богуна, 4"
        },
        "email": "info@sam.lviv.ua",
        "category": ["tours"],
        "link": "http://www.sam.lviv.ua",
        "phones": {
            "main": ["+38 (032) 235 22 44"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "IN.DI.GO Travel",
            "ru": "Туристическая компания IN.DI.GO travel",
            "ua": "Туристична компанія IN.DI.GO travel"
        },
        "description": {
            "en": "Rest with IN.DI.GO TRAVEL - wonderful, unforgettable, flawless and perfect! It can be the most diverse - from historical mysterious places to well-balanced modernity, cheerful or relax-quiet, on endless sandy beaches or conquering new mountain peaks.",
            "ru": "Отдых с IN.DI.GO TRAVEL - замечательный, незабываемый, безупречный и совершенный! Он может быть самым разнообразным - от исторических загадочных мест в взвешенной современности, веселым или релаксово-спокойным, на бесконечных песчаных пляжах или покоряя новые горные вершины.",
            "ua": "Відпочинок з IN.DI.GO TRAVEL – чудовий, незабутній, бездоганий та довершений! Він може бути найрізноманітнішим – від історичних загадкових місць до виваженої сучасності, веселим або релаксово-спокійним, на безкінечних піщаних пляжах або підкорюючи нові гірські вершини."
        },
        "logo": "./resources/companies_logo/indigo-travel.png",
        "address": {
            "en": "Lviv, st. Copernicus, 29, office 1",
            "ru": "г. Львов, ул. Коперника, 29, офис 1",
            "ua": "м. Львів, вул. Коперника, 29, офіс 1"
        },
        "email": "",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+380 (067) 372-97-09"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Tourservis",
            "ru": "Туристическая компания Турсервис",
            "ua": "Туристична компанія Турсервіс"
        },
        "description": {
            "en": "The world is a book and one who does not travel, reads only one page.",
            "ru": "Мир - это книга и тот, кто не путешествует, читает только одну страницу.",
            "ua": "Світ – це книжка і той, хто не подорожує, читає лише одну сторінку."
        },
        "logo": "./resources/companies_logo/turservice.png",
        "address": {
            "en": "Lviv, st. Shevchenko, 32",
            "ru": "г. Львов, ул. Шевченко, 32",
            "ua": "м. Львів, вул. Шевченка, 32"
        },
        "email": "",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": [],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Tourist company «Rose of winds»",
            "ru": "Туристическая компания «Роза ветров»",
            "ua": "Туристична компанія «Роза вітрів»"
        },
        "description": {
            "en": "Travel company «Rose of Winds» is an authorized ticket of Windrose airline in Lviv. The company specializes in sales of airline tickets to anywhere in the world, as well as the implementation of rail and bus tickets.",
            "ru": "Туристическая компания «Роза ветров» - это авторизованная касса авиакомпании «Windrose» во Львове. Компания специализируется на продаже авиабилетов в любую точку мира, а также реализации железнодорожных и автобусных билетов.",
            "ua": "Туристична компанія «Роза вітрів» – це авторизована каса авіакомпанії «Windrose» у Львові. Компанія спеціалізується на продажі авіаквитків у будь-яку точку світу, а також реалізації залізничних та автобусних квитків."
        },
        "logo": "./resources/companies_logo/roza-vitriv.png",
        "address": {
            "en": "Lviv, st. Michalchuka, 7",
            "ru": "г. Львов, ул. Михальчука, 7",
            "ua": "м. Львів, вул. Михальчука, 7"
        },
        "email": "",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+380 (066) 670-08-26"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Travel company «Miracle Tour»",
            "ru": "Туристическая компания «Чудо Тур»",
            "ua": "Туристична компанія «Чудо Тур»"
        },
        "description": {
            "en": "Travel Company for foreign and local tourism. The highlight of the activities is the «Miracle Train» and «Miracle Bus» - unique vehicles adapted for excursions.",
            "ru": "Туристическая компания с въездного и внутреннего туризма. Изюминкой деятельности является «Чудо Поезд» и «Чудо Бус» - уникальные транспортные средства, предназначенные для проведения экскурсий",
            "ua": "Туристична компанія з в’їздного та внутрішнього туризму. Родзинкою діяльності є «Чудо Поїзд» та «Чудо Бус» – унікальні транспортні засоби, адаптовані для проведення екскурсій."
        },
        "logo": "./resources/companies_logo/chudo-tour.png",
        "address": {
            "en": "Lviv, sq. Market, 7",
            "ru": "г. Львов, пл. Рынок, 7",
            "ua": "м. Львів, пл. Ринок, 7"
        },
        "email": "",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+380 (032) 236-70-96"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Travel Agency «Travelers Club»",
            "ru": "Туристическое агентство «Клуб Путешественников»",
            "ua": "Туристичне агенство «Клуб Мандрівників»"
        },
        "description": {
            "en": "The company offers holidays in the mountains and at sea. Various excursions to Europe, children's holiday. Thematic tours and excursions to Ukraine.",
            "ru": "Компания предлагает отдых в горах и на море. Разнообразные экскурсионные туры в Европу, детский отдых. Тематические путешествия и экскурсии по Украине.",
            "ua": "Компанія пропонує відпочинок у горах та на морі. Різноманітні екскурсійні тури до Європи, дитячий відпочинок. Тематичні подорожі та екскурсії Україною."
        },
        "logo": "./resources/companies_logo/club-mandrivnykiv.png",
        "address": {
            "en": "Lviv, st. Verbitskogo, 12",
            "ru": "г. Львов, ул. Вербицкого, 12",
            "ua": "м. Львів, вул. Вербицького, 12"
        },
        "email": "",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 242-25-52"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Valentino Restaurant",
            "ru": "Ресторан Валентино",
            "ua": "Ресторан Валентино"
        },
        "description": {
            "en": "Valentino Restaurant is located in an architectural monument, in the heart of the city, next to Market Square. Not so long ago, the restaurant Cactus, favorite in Lviv, was located on this site. Ancient brick ceilings combined with luxurious Venetian chandeliers, cozy sofas, soft rugs, antique frescoes all create an atmosphere of comfort, tranquility and warmth.",
            "ru": "Ресторан Валентино расположен в доме-памятнике архитектуры, в самом центре города, рядом с Площадью Рынок. Не так давно на этом месте находился любимый львовянами ресторан Кактус. Старинные кирпичные потолки в сочетании с роскошными венецианскими люстрами, уютные диваны, мягкие ковры, старинные фрески - все это создает атмосферу уюта, покоя и теплоты.",
            "ua": "Ресторан Валентино розташований в будинку-пам’ятці архітектури, в самому центрі міста, поряд з Площею Ринок. Не так давно на цьому місці був розташований улюблений львів'янами ресторан Кактус. Старовинні цегельні стелі у поєднанні з розкішними венеціанськими люстрами, затишні дивани, м'які килими, старовинні фрески - все це створює атмосферу затишку, спокою і теплоти."
        },
        "logo": "./resources/companies_logo/valentyno.png",
        "address": {
            "en": "Ostap Nizhankivsky st., 20, Lviv, Ukraine",
            "ru": "Ул. Остапа Нижанковского 20 79005, Украина",
            "ua": "Вул. Остапа Нижанківського 20, 79005, Львів, Україна"
        },
        "email": "info@valentino.lviv.ua",
        "category": ["restaurants"],
        "link": "http://www.valentino.lviv.ua",
        "phones": {
            "main": ["+ (38) 0 322 356 766"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },


    {
        "name": {
            "en": "«Zeppelin» restaurant",
            "ru": "Ресторан «Цеппелин»",
            "ua": "Ресторан «Цепелін»"
        },
        "description": {
            "en": "Restaurant «Zeppelin» in Lviv is an institution decorated in contrasting colors - refined and tasteful, which combines classical and modern elements in the interior, and the author's cuisine perfectly complements the atmosphere of comfort and gives you unforgettable impressions of your stay in the restaurant. This is a great place to visit a business lunch or chat with friends or business partners - a high level of service will create an appropriate atmosphere for the desired situation. The romantic evening here will also leave unforgettable impressions and become a wonderful beginning of lasting relationships.",
            "ru": "Ресторан «Цеппелин» во Львове - это заведение, оформленное в контрастных цветах - изысканно и со вкусом, где сочетаются классические и современные элементы в интерьере, а авторская кухня прекрасно дополняет атмосферу уюта и дарит незабываемые впечатления от пребывания в ресторане. Это прекрасное место, чтобы посетить бизнес-ланч или пообщаться с друзьями или деловыми партнерами - высокий уровень обслуживания создаст соответствующую атмосферу до нужной ситуации. Романтический вечер здесь также оставит незабываемые впечатления и станет прекрасным началом крепких отношений.",
            "ua": "Ресторан «Цепелін» у Львові — це заклад, оформлений в контрастних кольорах — вишукано та зі смаком, де поєднуються класичні та сучасні елементи в інтер’єрі, а авторська кухня чудово доповнює атмосферу затишку та дарує незабутні враження від перебування в ресторані. Це чудове місце, щоб завітати на бізнес-ланч або ж поспілкуватися з друзями чи діловими партнерами — високий рівень обслуговування створить відповідну атмосферу до потрібної ситуації. Романтичний вечір тут також залишить незабутні враження і стане чудовим початком міцних відносин."
        },
        "logo": "./resources/companies_logo/zepelin.png",
        "address": {
            "en": "Chornovol av., 59, entrance from Okunevsky st.",
            "ru": "пр.Чорновола 59, вход с Окуневского",
            "ua": "пр.Чорновола 59, вхід з Окуневського"
        },
        "email": "zeppelin.lviv@gmail.com",
        "category": ["restaurants"],
        "link": "http://www.zeppelin.lviv.ua",
        "phones": {
            "main": ["(097) 412-90-18"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": true
    },

    {
        "name": {
            "en": "Restaurant,  whiskey-pub «Moulin Rouge»",
            "ru": "Ресторан, виски-паб «Мулен Руж»",
            "ua": "Ресторан, віскі-паб «Мулен Руж»"
        },
        "description": {
            "en": "«Moulin Rouge» is a unique institution in Lviv, where it is necessary to plunge into a colorful world of whiskey and rest. The establishment works in a double format - in the afternoon it is an exquisite restaurant with really democratic prices and high service, and at the night of the show - the bar «Moulin Rouge» will invite you to plunge into the atmosphere of eroticism, charming temptation and pleasure ...",
            "ru": "«Мулен Руж» - yникальное заведение во Львове, где стоит окунуться в разноцветный мир виски и отдыха. Заведение работает в двойном формате - днем это изысканный ресторан с действительно демократичными ценами и высоким сервисом, а ночью шоу - бар «Мулен Руж» пригласит Вас окунуться в атмосферу эротики, волшебного соблазна и наслаждения ...",
            "ua": "“Мулен Руж” – yнікальний заклад у Львові, де варто поринути у різнобарвний світ віскі та відпочинку. Заклад працює у подвіному форматі – вдень це вишуканий ресторан з дійсно демократичними цінами та високим сервісом, а вночі шоу – бар “Мулен Руж”запросить Вас поринути у атмосферу еротики, чарівної спокуси та насолоди…"
        },
        "logo": "./resources/companies_logo/mulen-ruzh.png",
        "address": {
            "en": "Lviv, st. Lychakivska, 3",
            "ru": "г. Львов, ул.Лычаковская, 3",
            "ua": "м. Львів, вул.Личаківська, 3"
        },
        "email": "",
        "category": ["restaurants"],
        "link": "",
        "phones": {
            "main": ["+38 (096) 333-38-63"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Restaurant «Culinarium»",
            "ru": "Ресторан «Culinarium»",
            "ua": "Ресторан «Culinarium»"
        },
        "description": {
            "en": "Restaurant «Culinarium» opens it’s doors for you to invite into an entertaining world of culinary treasures.",
            "ru": "Ресторан «Culinarium» приоткрывает для Вас свои двери для того, чтобы пригласить в увлекательный мир кулинарного богатства.",
            "ua": "Ресторан «Culinarium» привідкриває для Вас свої двері для того, щоб запросити у захопливий світ кулінарного багатства."
        },
        "logo": "./resources/companies_logo/culinarium.png",
        "address": {
            "en": "Lviv, st. Mazepa, 11",
            "ru": "г. Львов, ул. Мазепы, 11",
            "ua": "м. Львів, вул. Мазепи, 11"
        },
        "email": "",
        "category": ["restaurants"],
        "link": "",
        "phones": {
            "main": ["+38 (093) 192-66-68"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Restaurant «Mon Chef»",
            "ru": "Ресторан «Mon Chef»",
            "ua": "Ресторан «Mon Chef»"
        },
        "description": {
            "en": "Always cozy and friendly, the restaurant Mon Chef will offer meals, with a special emphasis on the meat menu prepared in the hospice - a special grill-oven, which will preserve and emphasize the true taste of the dish.",
            "ru": "Всегда уютный и приветливый, ресторан Mon Chef предложит блюда, с особым акцентом на мясном меню, приготовленном в хоспере - специальной гриль-печи, которая сохранит и подчеркнет настоящий вкус блюда.",
            "ua": "Завжди затишний та привітний, ресторан Mon Chef запропонує страви, з особливим акцентом на м’ясному меню, приготованому у хоспері – спеціальній гриль-печі, яка збереже та підкреслить справжній смак страви."
        },
        "logo": "./resources/companies_logo/mon-chef.png",
        "address": {
            "en": "Lviv, st. Gorodotskia, 15",
            "ru": "г. Львов, ул. Городецкая, 15",
            "ua": "м. Львів, вул. Городоцька, 15"
        },
        "email": "",
        "category": ["restaurants"],
        "link": "",
        "phones": {
            "main": ["+38 (050) 372-82-91"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Bar-Restaurant «0.5»",
            "ru": "Бар-ресторан «0,5»",
            "ua": "Бар-ресторан «0,5»"
        },
        "description": {
            "en": "The restaurant bar «0,5» is a traditional culture of drinking beer drinks, an unsurpassed, time-tested kitchen, a service with the soul and a stylish interior, where are harmoniously combined nostalgic motives of 70-80s Lviv and modern architectural solutions.",
            "ru": "Бар-ресторан «0,5» - это традиционная культура питья хмельных напитков, непревзойденная, проверенная временем кухня, обслуживание с душой и стильный интерьер, где гармонично сочетаются ностальгические мотивы Львова 70-80-х годов и современные архитектурные решения.",
            "ua": "Бар ресторан «0,5» – це традиційна культура пиття хмільних напоїв, неперевершена, перевірена часом кухня, обслуговування з душею та стильний інтер’єр, де гармонійно поєднані ностальгічні мотиви Львова 70-80-х років та сучасні архітектурні рішення."
        },
        "logo": "./resources/companies_logo/05-logo.png",
        "address": {
            "en": "Lviv, st. Lychakivska, 3",
            "ru": "г. Львов, ул.Лычаковская, 3",
            "ua": "м. Львів, вул.Личаківська, 3"
        },
        "email": "",
        "category": ["restaurants"],
        "link": "",
        "phones": {
            "main": ["+38 (098) 055-05-05"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Veronika",
            "ru": "Вероника",
            "ua": "Вероніка"
        },
        "description": {
            "en": "The restaurant «Veronica» in the center of Lviv gained the glory of a delicious and significant institution of the city. Not only Lviv residents and Ukrainian tourists know about this restaurant, but also almost all foreign guests. The Veronica Confectionery Restaurant offers refined sweets of its own, author's dishes and professional service. In the confectionery restaurant you will taste surprisingly delicious cakes with original decoration on any occasion, and the exquisite menu, pleasant prices and interior of the restaurant will help you to feel like a real European!",
            "ru": "Ресторан «Вероника» в центре Львова уже давно снискал славу вкусного и значительного заведения города. Об этом ресторане знают не только львовяне и украинские туристы, но и почти все зарубежные гости. Ресторан-кондитерская «Вероника» предлагает изысканные сладости собственного производства, авторские блюда и профессиональное обслуживание. В кондитерской ресторана по Вашему заказу испекут удивительно вкусные торты с оригинальным оформлением к любому празднику, а изысканное меню, приятные цены и интерьер ресторана помогут почувствовать себя настоящим европейцем!",
            "ua": "Ресторан «Вероніка» в центрі Львова вже здавна здобув славу смачнющого та значного закладу міста. Про цей ресторан знають не лише львів’яни та українські туристи, а й майже всі закордонні гості. Ресторан-кондитерська «Вероніка» пропонує вишукані солодощі власного виробництва, авторські страви та професійне обслуговування. В кондитерській ресторану на Ваше замовлення спечуть напрочуд смачні торти з оригінальним оздобленням до будь-якого свята, а вишукане меню, приємні ціни та інтер’єр ресторану допоможуть відчути себе справжнім європейцем!"
        },
        "logo": "./resources/companies_logo/veronica.png",
        "address": {
            "en": "Lviv, Shevchenko avenue, 21",
            "ru": "Львов, проспект Шевченко, 21",
            "ua": "Львів, проспект Шевченка, 21"
        },
        "email": "",
        "category": ["cafes"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 298-60-28"],
            "reception": [],
            "fax": ["+38 (032) 261-44-56"],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Under the Golden Rose",
            "ru": "Под Золотой Розой",
            "ua": "Під Золотою Розою"
        },
        "description": {
            "en": "The establishment recreates the warmth of a genuine Jewish dwelling. This restaurant is located on the street of Staroevreyska near the old synagogue, in the central part of Lviv. Stereotype attributes are added to the design color: hand-made tablecloths, sewing machines, violins, minori and light candles. One of the conceptual traditions is to wash the hands of the guests before the start of the meal. The Kneipp menu is a literary almanac telling about the history of the Jews of Lviv.",
            "ru": "Заведение воспроизводит уют и тепло настоящего еврейского дома. Этот ресторан расположен на улице Староеврейской у старой синагоги, в центральной части Львова. Колорита дизайну добавляют стереотипные атрибуты: ручной работы скатерти, швейные машинки, скрипки, миноры и свет свечей. Одной из концептуальных традиций является омовения рук гостей перед началом трапезы. Меню Кнайпы представляет собой литературный альманах, рассказывающий об истории евреев Львова.",
            "ua": "Заклад відтворює затишок та тепло справжньої єврейської оселі. Цей ресторан розташований на вулиці Староєврейській біля старої синагоги, у центральній частині Львова. Колориту дизайну додають стереотипні атрибути: ручної роботи скатертини, швейні машинки, скрипки, мінори та світло свічок. Однією із концептуальних традицій є омивання рук гостей перед початком трапези. Меню Кнайпи являє собою літературний альманах, що розповідає про історію євреїв Львова."
        },
        "logo": "./resources/companies_logo/golden-rose.png",
        "address": {
            "en": "Lviv, st. Staroevreyska, 37",
            "ru": "Львов, ул. Древнееврейская, 37",
            "ua": "Львів, вул. Староєврейська, 37"
        },
        "email": "",
        "category": ["cafes"],
        "link": "",
        "phones": {
            "main": [],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Sport Cafe «Funclub»",
            "ru": "Спортивное кафе «Funclub»",
            "ua": "Спортивне кафе «Funclub»"
        },
        "description": {
            "en": "If you like sports, you must visit this institution. The best sporting events, all possible TV broadcasts are what guarantees Funclub. If you are a pioneer in sports, healthy lifestyles, delicious food and extreme sports, you are surely in Funclub.",
            "ru": "Если вы любите спорт, то вы обязательно должны посетить это заведение. Лучшие спортивные события, все возможные телетрансляции и куча фанового настроения - это то, что гарантирует «Funclub». Если вы ценитель спорта, здорового образа жизни, вкусной еды и клевого времяпрепровождения - вам точно в «Funclub».",
            "ua": "Якщо ви любите спорт, тоді ви обовязково маєте завітати в цей заклад. Найкращі спортивні події, всі можливі телетрансляції та купа фанового настрою – це те, що гарантує «Funclub». Якщо ви поціновувач спорту, здорового способу життя, смачної їжі та кльового проведення часу – вам точно у «Funclub»."
        },
        "logo": "./resources/companies_logo/funclub.png",
        "address": {
            "en": "Lviv, st. Dzherelna, 18",
            "ru": "г. Львов, ул. Джерэльна, 18",
            "ua": "м. Львів, вул. Джерельна, 18"
        },
        "email": "",
        "category": ["cafes"],
        "link": "",
        "phones": {
            "main": ["+38 (098) 065-65-95"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Cafe «Centaur»",
            "ru": "Кафе «Кентавр»",
            "ua": "Кафе «Кентавр»"
        },
        "description": {
            "en": "Cafe «Centaur» is located in the very heart of Lviv on Rynok Square. The terrace, spacious halls, decorated with rare menu, cozy beer, own coffee blend, Lviv and author's cuisine - visiting the «Centaur» once, you will remember it forever.",
            "ru": "Кафе «Кентавр» находится в самом сердце Львова на площади Рынок. Терраса, просторные залы, украшенные раритетными меню, уютная пивная, собственный купаж кофе, львовская и авторская кухня - посетив «Кентавр» однажды, Вы запомните его навсегда.",
            "ua": "Кафе “Кентавр” знаходиться в самому серці Львова на площі Ринок. Тераса, просторі зали, прикрашені раритетними меню, затишна пивниця, власний купаж кави, львівська та авторська кухня – відвідавши “Кентавр” одного разу, Ви запам’ятаєте його назавжди."
        },
        "logo": "./resources/companies_logo/centaur.png",
        "address": {
            "en": "Lviv, sq. Market, 34",
            "ru": "г. Львов, пл. Рынок, 34",
            "ua": "м. Львів, пл. Ринок, 34"
        },
        "email": "",
        "category": ["cafes"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 235-55-12"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "«DeLuxe cafe»",
            "ru": "Кафе «DeLuxe cafe»",
            "ua": "Кафе «DeLuxe cafe»"
        },
        "description": {
            "en": "Exquisite cafe, which will help you with pleasure to spend your free time, taste the refined dishes of our chefs and smoke one of the best hookahs in the city of Lviv.",
            "ru": "Изысканное кафе, которое поможет вам с удовольствием провести ваше свободное время, попробовать изысканные блюда наших поваров и покурить один из лучших кальянов Львова.",
            "ua": "Вишукане кафе, яке допоможе вам із задоволенням провести ваш вільний час, скуштувати вишукані страви наших поварів та покурити один з кращих кальянів міста Львова."
        },
        "logo": "./resources/companies_logo/deluxe.png",
        "address": {
            "en": "Lviv, st. Dzherelna, 18",
            "ru": "г. Львов, ул. Джерэльна, 18",
            "ua": "м. Львів, вул. Джерельна, 18"
        },
        "email": "",
        "category": ["cafes"],
        "link": "",
        "phones": {
            "main": ["+38 (093) 339-97-39"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Cafe «Pancake»",
            "ru": "Кафе «Блин»",
            "ua": "Кафе «Млинець»"
        },
        "description": {
            "en": "Cafe «Pancake» is a place where gourmets are overpacked with pancakes! Only in the Cafe «Pancake» you can enjoy not only the taste - pancakes of buckwheat, wheat, and other flour, but also the skill of their cooking.",
            "ru": "Кафе «Блин» - это место, где гурманы объедаются блинами! Только в Кафе «Блин» можно насладиться не только вкусом - блина с гречневой, пшеничной и др. муки, но и мастерством их приготовления.",
            "ua": "Кафе «Млинець» – це місце, де гурмани об’їдаються млинцями! Тільки в Кафе «Млинець» можна насолодитися не тільки смаком – млинця з гречаного, пшеничного і ін. борошна, а й майстерністю їх приготування."
        },
        "logo": "./resources/companies_logo/mlynec.png",
        "address": {
            "en": "Lviv, st. Theatrical, 23",
            "ru": "г. Львов, ул. Театральная, 23",
            "ua": "м. Львів, вул. Театральна, 23"
        },
        "email": "",
        "category": ["cafes"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 254-61-93"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Cafe «Under the klepsidra»",
            "ru": "Кафе «Під клепсидрой»",
            "ua": "Кафе «Під клепсидрою»"
        },
        "description": {
            "en": "A cult place for the artistic elite, advanced tourists, avant-garde parties and Lviv bohemia. If you want to present Lviv to friends or foreigners, «Dziga» can not be bypassed.",
            "ru": "Культовое место для художественной элиты, продвинутых туристов, авангардных тусовок и львовской богемы. Если хотите презентовать Львов для друзей или иностранцев, «Дзигу» обойти невозможно.",
            "ua": "Культове місце для мистецької еліти, просунутих туристів, авангардових тусовок та львівської богеми. Якщо бажаєте презентувати Львів для друзів чи іноземців, «Дзиґу» обминути неможливо."
        },
        "logo": "./resources/companies_logo/pid-klepsydroju.png",
        "address": {
            "en": "Lviv, st. Armenian, 35",
            "ru": "г. Львов, ул. Армянская, 35",
            "ua": "м. Львів, вул. Вірменська, 35"
        },
        "email": "",
        "category": ["cafes"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 297-56-12"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Diet Cafe «Smakolyk»",
            "ru": "Диетическое кафе «Смаколик»",
            "ua": "Дієтичне кафе «Смаколик»"
        },
        "description": {
            "en": "Delicious and nutritious dishes of fresh and stewed vegetables, dietetic second dishes are just what you need to be able to enjoy strength and health. The kitchen also accepts individual orders from guests depending on the diet group.",
            "ru": "Вкусные и питательные гарниры из свежих и тушеных овощей, диетические вторые блюда - это именно то, что нужно, чтобы исполнить силы и здоровье. Кухня принимает и индивидуальные заказы от гостей в зависимости от группы диеты.",
            "ua": "Смачні та поживні гарніри із свіжих та тушкованих овочів, дієтичні другі страви – це саме те, що потрібно щоб сповнитися сили та здоров’я. Кухня приймає і індивідуальні замовлення від гостей в залежності від групи дієти."
        },
        "logo": "./resources/companies_logo/smakolyk.png",
        "address": {
            "en": "Lviv, st. Mikhalchuk, 5",
            "ru": "г. Львов, ул. Михальчука, 5",
            "ua": "м. Львів, вул. Михальчука, 5"
        },
        "email": "",
        "category": ["cafes"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 245-22-84"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Pharmacy Museum",
            "ru": "Аптека Музей",
            "ua": "Аптека Музей"
        },
        "description": {
            "en": "Pharmacy-museum «Under the Black Eagle», the oldest of existing pharmacies in Lviv, has been in operation for more than two and a half centuries. This is the only pharmacy-museum in Ukraine and Europe. Here, next to the pharmacy, there is a unique museum complex that displays rare exhibits collected by scientists, pharmacists and enthusiasts.",
            "ru": "Аптека-музей «Под черным орлом», древнейшая из существующих во Львове аптек, действует уже более двух с половиной веков. Это единственная в Украине и Европе действующая аптека-музей. Здесь, рядом с аптекой, функционирует уникальный музейный комплекс, в котором демонстрируются редкие экспонаты, собранные учеными, фармацевтами и коллекционерами-энтузиастами.",
            "ua": "Аптека-музей «Під чорним орлом», найдавніша з існуючих у Львові аптек, діє уже понад два з половиною століття. Це єдина в Україні та Європі діюча аптека-музей. Тут, поряд з аптекою, функціонує унікальний музейний комплекс, у якому демонструються рідкісні експонати, зібрані науковцями, фармацевтами та колекціонерами-ентузіастами."
        },
        "logo": "./resources/companies_logo/apteka-museum.png",
        "address": {
            "en": "Lviv, st. Drukarska, 2",
            "ru": "Львов, ул. Печатная, 2",
            "ua": "Львів, вул. Друкарська, 2"
        },
        "email": "",
        "category": ["culture"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 272 00 41"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Lviv Historical Museum",
            "ru": "Львовский исторический музей",
            "ua": "Львівський історичний музей"
        },
        "description": {
            "en": "Lviv Historical Museum is one of the oldest museums, founded in 1893. Includes over 300 thousand exhibits. The exposition introduces the history of the city of Lviv and the Halychyna lands from ancient times to the present day. Museum exhibits are located in the monuments of architecture of the XVI-XVIII centuries. - houses number 2,4,6,24 on the square Market and in the former city Arsenal on the street. Basement, 5.",
            "ru": "Львовский исторический музей - один из старейших музеев, основанный в 1893 году. Вмещает более 300 000 экспонатов. Экспозиция знакомит с историей города Львова и галицких земель от древнейших времен до наших дней. Музейные экспозиции расположены в памятниках архитектуры XVI-XVIII вв. - домах № 2,4,6,24 на площади Рынок и в бывшем городском Арсенале на ул. Подвальной 5.",
            "ua": "Львівський історичний музей — один з найстаріших музеїв, заснований в 1893 році. Вміщає понад 300 тисяч експонатів. Експозиція знайомить з історією міста Львова та галицьких земель від найдавніших часів до наших днів. Музейні експозиції розташовані в пам'ятках архітектури XVI—XVIII ст. — будинках № 2,4,6,24 на площі Ринок та в колишньому міському Арсеналі на вул. Підвальній, 5."
        },
        "logo": "./resources/companies_logo/historical-museum.png",
        "address": {
            "en": "Lviv, sq. Market, 6",
            "ru": "Львов, 79008, ул. Рынок, 6",
            "ua": "Львів, 79008, пл. Ринок, 6"
        },
        "email": "lhm@mail.lviv.ua",
        "category": ["culture"],
        "link": "http://www.lhm.lviv.ua",
        "phones": {
            "main": [],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Museum «Ukrainian  Women in the struggle for statehood»",
            "ru": "Музей «Женщины-украинки в борьбе за государственность»",
            "ua": "Музей «Жінки-українки у боротьбі за державність»"
        },
        "description": {
            "en": "Exhibits of the museum devoted to Olga Besarab and ukrainian women in the struggle for independence, communicatives of OUN-UPA and the fallen for freedom of Ukraine, were prepared by the students of the law school under the direction of Professor Yaroslav Dalyka.",
            "ru": "Экспозиции музея, посвященные Ольге Бесараб и украинкам в освободительной борьбе за независимость, связным ОУН-УПА и павшим за свободу Украины героиням, подготовили ученики юридической гимназии под руководством профессора Ярослава Куклы.",
            "ua": "Експозиції музею, присвячені Ользі Бесараб та українкам у визвольній боротьбі за незалежність, зв’язковим ОУН-УПА та полеглим за волю України героїням, підготували учні правничої гімназії під керівництвом професора Ярослава Ляльки."
        },
        "logo": "./resources/companies_logo/lviv-pravnycha-gimnazia.png",
        "address": {
            "en": "Lviv, st. Leontovich, 2",
            "ru": "г. Львов, ул. Леонтовича, 2",
            "ua": "м. Львів, вул. Леонтовича, 2"
        },
        "email": "",
        "category": ["culture"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 233-35-63"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "National Museum in Lviv named after Andrey Sheptytsky",
            "ru": "Национальный музей во Львове имени Андрея Шептицкого",
            "ua": "Національний музей у Львові імені Андрея Шептицького"
        },
        "description": {
            "en": "The museum was founded in February 1905 by the Greek Catholic Metropolitan Andrei Sheptytsky as a private foundation called the Church Museum for the development of Ukrainian culture.",
            "ru": "Музей был основан в феврале 1905 греко-католическим митрополитом Андреем Шептицким как частная фундация под названием «Церковный музей» для развития украинской культуры.",
            "ua": "Музей був заснований в лютому 1905 року греко-католицьким митрополитом Андреєм Шептицьким як приватна фундація під назвою «Церковний музей» для розвитку української культури."
        },
        "logo": "./resources/companies_logo/nacionalnyj.png",
        "address": {
            "en": "Lviv, Freedom av., 20",
            "ru": "г. Львов, просп. Свободы, 20",
            "ua": "м. Львів, просп. Свободи, 20"
        },
        "email": "",
        "category": ["culture"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 235-88-56"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Art and Memorial Museum of Olena Kulchitskaya",
            "ru": "Художественно-мемориальный музей Елены Кульчицкой",
            "ua": "Художньо-меморіальний музей Олени Кульчицької"
        },
        "description": {
            "en": "The department of the National Museum in Lviv named after Andrey Sheptytsky opened in 1971 is located in the former residence and creative workshop of the artist, which, like all artistic works according to the will, was donated to the Ukrainian people in the person of the National Museum in Lviv.",
            "ru": "Отдел Национального музея во Львове имени Андрея Шептицкого открыт в 1971 расположен в бывшем доме и творческой мастерской художницы, как и все художественное наследие согласно завещанию были переданы в дар украинскому народу в лице Национального музея во Львове.",
            "ua": "Відділ Національного музею у Львові імені Андрея Шептицького відкритий у 1971 р. розташований у колишньому помешканні та творчій майстерні художниці, що як і увесь мистецький доробок згідно із заповітом було передано в дар українському народові в особі Національного музею у Львові."
        },
        "logo": "./resources/companies_logo/kulchytska.png",
        "address": {
            "en": "Lviv, st. November Act, 7",
            "ru": "г. Львов, ул. Ноябрьского Чина, 7",
            "ua": "м. Львів, вул. Листопадового Чину, 7"
        },
        "email": "",
        "category": ["culture"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 261-07-06"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },


    {
        "name": {
            "en": "Musical-memorial museum of Stanislav Lyudkevych",
            "ru": "Музыкально-мемориальный музей Станислава Людкевича",
            "ua": "Музично-меморіальний музей Станіслава Людкевича"
        },
        "description": {
            "en": "Ludkevych is one of the most prominent Ukrainian composers of the twentieth century, whose work combines the features of the national musical style with the peculiarities of the late Romantic style of European music.",
            "ru": "Людкевич - один из выдающихся украинских композиторов ХХ в., в творчестве которого сочетаются черты национального музыкального стиля с особенностями позднеромантического стиля европейской музыки.",
            "ua": "Людкевич – один з найвидатніших українських композиторів ХХ ст., у творчості якого поєднуються риси національного музичного стилю з особливостями пізньоромантичного стилю європейської музики."
        },
        "logo": "./resources/companies_logo/lyudkevych.png",
        "address": {
            "en": "Lviv, st. Ludkevicha, 7",
            "ru": "г. Львов, ул. Людкевича, 7",
            "ua": "м. Львів, вул. Людкевича, 7"
        },
        "email": "",
        "category": ["culture"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 276-96-12"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Lviv Museum of the History of Religion",
            "ru": "Львовский музей истории религии",
            "ua": "Львівський музей історії релігії"
        },
        "description": {
            "en": "Here collected unique materials highlight the history of world and national religions, activities of church organizations.",
            "ru": "Собраны уникальные материалы освещают историю мировых и национальных религий, деятельность церковных организаций.",
            "ua": "Зібрані унікальні матеріали висвітлюють історію світових і національних релігій, діяльність церковних організацій."
        },
        "logo": "./resources/companies_logo/istoriji_religiji.png",
        "address": {
            "en": "Lviv, sq. Museum , 1",
            "ru": "г. Львов, пл. Музейная, 1",
            "ua": "м. Львів, пл. Музейна, 1"
        },
        "email": "",
        "category": ["culture"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 235-60-32"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Lviv Region Puppet Theater",
            "ru": "Львовский областной театр кукол",
            "ua": "Львівський обласний театр ляльок"
        },
        "description": {
            "en": "Lviv puppet theater began its activity on April 15, 1946, with the premiere of the fairy tale «Ivasik-Telesyk». The building, which houses the theater, was erected in 1912 as the Chamber of Craftsmen - built in the spirit of the Renaissance architecture of the countries of Central Europe (arcade level ground floor, attic with volutes).",
            "ru": "Львовский театр кукол начал свою деятельность 15 апреля 1946 премьерой спектакля народной сказки «Ивасик-Телесик». Дом, в котором находится театр, было сооружен в 1912 году как Палата ремесленников - построенный в духе ренессансной архитектуры стран Центральной Европы (аркада на уровне первого этажа, аттик с волютами).",
            "ua": "Львівський театр ляльок розпочав свою діяльність 15 квітня 1946 року прем’єрою вистави народної казки «Івасик-Телесик». Будинок, в якому знаходиться театр, було зведено 1912 року як Палату ремісників —  збудований в дусі ренесансної архітектури країн Центральної Європи (аркада на рівні першого поверху, аттик з волютами)."
        },
        "logo": "./resources/companies_logo/doll-theatre.png",
        "address": {
            "en": "Lviv, sq. Danylo Galytskyy, 1",
            "ru": "Львов, пл. Данила Галицкого, 1",
            "ua": "Львів, пл. Данила Галицького, 1"
        },
        "email": "",
        "category": ["culture"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 235 58 32"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Lviv Academic Theater named after Les Kurbas",
            "ru": "Львовский академический театр им. Леся Курбаса",
            "ua": "Львівський академічний театр ім. Леся Курбаса"
        },
        "description": {
            "en": "The theater named after Les Kurbas was created in 1988 by Volodymyr Kuchinsky and a group of young actors. Since its foundation, the Les Kurbas Theater has become one of the most well-known and progressive theaters in Ukraine and abroad.",
            "ru": "Театр имени Леся Курбаса создан в 1988 году Владимиром Кучинским и группой молодых актеров. Со времени своего основания Театр имени Леся Курбаса стал одним из самых известных и прогресивнийх театров как в Украине, так и за рубежом.",
            "ua": "Театр  імені  Леся   Курбаса  створений у 1988 році Володимиром Кучинським та групою молодих акторів. З часу свого заснування  Театр  імені  Леся   Курбаса  став одним з найбільш відомих і прогресивнийх  театрів як в Україні, так і закордоном."
        },
        "logo": "./resources/companies_logo/curbas-theatre.png",
        "address": {
            "en": "Lviv, st. Les Kurbas, 3",
            "ru": "Львов, ул. Леся Курбаса, 3",
            "ua": "Львів, вул. Леся Курбаса, 3"
        },
        "email": "",
        "category": ["culture"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 272 49 14"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "The First Ukrainian Theater for Children and Youth",
            "ru": "Первый Украинский театр для детей и юношества",
            "ua": "Перший Український театр для дітей та юнацтва"
        },
        "description": {
            "en": "The first Ukrainian theater for children and youth was founded in March 1920, in Kharkiv as «Theater of fairy tales». In the 1930's it was called the Kharkiv Theater of Young Spectators.",
            "ru": "Первый украинский театр для детей и юношества основан в марте 1920г., в Харькове как «Театр сказки». В 30-х годах назывался Харьковским театром юного зрителя.",
            "ua": "Перший український театр для дітей та юнацтва заснований у березні 1920р., у Харкові як «Театр казки». У 30-х роках називався Харківським театром юного глядача."
        },
        "logo": "./resources/companies_logo/theatre-for-children.png",
        "address": {
            "en": "Lviv, st. Gnatyuk, 11",
            "ru": "г. Львов, ул. Гнатюка, 11",
            "ua": "м. Львів, вул. Гнатюка, 11"
        },
        "email": "",
        "category": ["culture"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 272-68-41"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Lviv Drama Theater named after Lesia Ukrainka",
            "ru": "Львовский драматический театр им. Леси Украинки",
            "ua": "Львівський драматичний театр ім. Лесі Українки"
        },
        "description": {
            "en": "The theater was founded in 1931 in Kyiv as the All-Ukrainian Theater of the Red Army. In January 1954, the army team first performed in Lviv as the Drama Theater of the Precarpathian Military District, becoming the first stationary military theater in Western Ukraine.",
            "ru": "Театр был основан в 1931 году в Киеве как Всеукраинский театр Красной Армии. В январе 1954 года армейский коллектив впервые выступил во Львове как Драматический театр Прикарпатского военного округа, затем стал первым стационарным военным театром в Западной Украине.",
            "ua": "Театр був заснований 1931 року в Києві як Всеукраїнський театр Червоної Армії. У січні 1954 року армійський колектив уперше виступив у Львові як Драматичний театр Прикарпатського військового округу, відтак ставши першим стаціонарним військовим театром у Західній Україні."
        },
        "logo": "./resources/companies_logo/ukrainka-theatre.png",
        "address": {
            "en": "Lviv, st. Gorodok, 36",
            "ru": "г. Львов, ул. Городецкая, 36",
            "ua": "м. Львів, вул. Городоцька, 36"
        },
        "email": "",
        "category": ["culture"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 233-31-88"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Lviv theater of pop miniatures «Both people and dolls»",
            "ru": "Львовский театр эстрадных миниатюр «И люди, и куклы»",
            "ua": "Львівський театр естрадних мініатюр «І люди, і ляльки»"
        },
        "description": {
            "en": "Theater-studio of pop miniatures «Both people and dolls» was created in September 1990 according to the idea of Oleg Novokhatsky. By creating this original band, Oleg Novohatsky sought to expand the framework of the puppet genre, to create performances that would interest both children and adults.",
            "ru": "Театр-студия эстрадных миниатюр «И люди, и куклы» был создан в сентябре 1990 года по идее Олега Новохацкого. Создавая этот оригинальный коллектив, Олег Новохацкий стремился расширить рамки кукольного жанра, создать спектакли, которые бы заинтересовали и детей, и взрослых.",
            "ua": "Театр-студія естрадних мініатюр «І люди, і ляльки» був створений у вересні 1990 року за ідеєю Олега Новохацького. Створюючи цей оригінальний колектив, Олег Новохацький прагнув розширити рамки лялькового жанру, створити вистави, які б зацікавили і дітей, і дорослих."
        },
        "logo": "./resources/companies_logo/teatr-lyudy-lyalky.png",
        "address": {
            "en": "Lviv, st. Fredra, 6",
            "ru": "г. Львов, ул. Фредра, 6",
            "ua": "м. Львів, вул. Фредра, 6"
        },
        "email": "",
        "category": ["culture"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 261-31-25"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Lviv Academic Spiritual Theater «Voskresinnia»",
            "ru": "Львовский академический духовный театр «Воскресение»",
            "ua": "Львівський академічний духовний театр «Воскресіння»"
        },
        "description": {
            "en": "Founded by a group of young actors from different cities of Ukraine and directed by Yaroslav Fedorishin. Characterized by the search for a distinct theatrical language and a specific stage form.",
            "ru": "Основан группой молодых актеров из разных городов Украины и режиссером Ярославом Федоришиным. Характеризуется поиском выразительного театрального языка и конкретной сценической формы.",
            "ua": "Заснований групою молодих акторів з різних міст України та режисером Ярославом Федоришиним. Характеризується пошуком виразної театральної мови і конкретної сценічної форми."
        },
        "logo": "./resources/companies_logo/voskresinnya.png",
        "address": {
            "en": "Lviv, sq. General Grigorenko, 5",
            "ru": "г. Львов, пл. генерала Григоренко, 5",
            "ua": "м. Львів, пл. генерала Григоренка, 5"
        },
        "email": "",
        "category": ["culture"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 274-13-00"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Ukrainian Drama Theater named after Maria Zankovetska",
            "ru": "Украинский драматический театр им. Марии Заньковецкой",
            "ua": "Український драматичний театр ім. Марії Заньковецької"
        },
        "description": {
            "en": "The construction of the building lasted from 1836 to 1842. The grand opening of the theater for 1460 seats for the audience took place on March 28, 1842. At the time of its opening, it was the largest theater in Europe. The total capacity of the hall - 800 people.",
            "ru": "Строительство сооружения продолжалось с 1836 по 1842гг. Торжественное открытие театра на 1460 мест для зрителей состоялось 28 марта 1842г. На момент открытия был крупнейшим театром Европы. Общая вместимость зала - 800 чел.",
            "ua": "Будівництво споруди тривало з 1836 по 1842 рр. Урочисте відкриття театру на 1460 місць для глядачів відбулося 28 березня 1842 р. На момент відкриття був найбільшим театром Європи. Загальна місткість залу – 800 чол."
        },
        "logo": "./resources/companies_logo/teatr-zankovetskoi.png",
        "address": {
            "en": "Lviv, st. Lesia Ukrainka, 1",
            "ru": "г. Львов, ул. Леси Украинки, 1",
            "ua": "м. Львів, вул. Лесі Українки, 1"
        },
        "email": "",
        "category": ["culture"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 235-55-83"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Restaurant-pizzeria «LaPiazza»",
            "ru": "Ресторан-пиццерия «LaPiazza»",
            "ua": "Ресторан-піцерія «LaPiazza»"
        },
        "description": {
            "en": "Dynamic and crowded center of La Piazza is an ideal place to relax. Delicious like italian and democratic, cozy and always interesting. That's why there like to be active and modern Lviv citizens and guests of the city, we are open to new acquaintances and are pleased to tourists.",
            "ru": "В динамичном и переполненном центре La Piazza - это идеальное место для отдыха. По-итальянски вкусно и демократично, уютно и всегда интересно. Поэтому здесь любят бывать активные и современные львовяне и гости города, мы открыты для новых знакомств и рады туристам.",
            "ua": "У динамічному і переповненому центрі La Piazza – це ідеальне місце для відпочинку. По-італійськи смачно і демократично, затишно і завжди цікаво. Тому тут полюбляють бувати активні та сучасні львів’яни і гості міста, ми відкриті до нових знайомств і раді туристам."
        },
        "logo": "./resources/companies_logo/lapiazza.png",
        "address": {
            "en": "Lviv, Freedom av., 27",
            "ru": "г. Львов, просп. Свободы, 27",
            "ua": "м. Львів, просп. Свободи, 27"
        },
        "email": "",
        "category": ["cafes"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 295-88-14"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Pizza Delivery «Street Pizza»",
            "ru": "Доставки пиццы «Street Pizza»",
            "ua": "Доставки піци «Street Pizza»"
        },
        "description": {
            "en": "«Street Pizza» is a professional service of delivery of Italian pizza in Lviv. Only in «Street Pizza» you can order delicious hot pizza from natural ingredients, on a thin cake, delivered home or office.",
            "ru": "«Street Pizza» - это профессиональная служба доставки итальянской пиццы во Львове. Только в «Street Pizza» Вы можете заказать вкусную горячую пиццу из натуральных ингредиентов, на тонкой лепешке с доставкой домой или в офис.",
            "ua": "«Street Pizza» – це професійна служба доставки італійської піци у Львові. Тільки у «Street Pizza» Ви можете замовити смачну гарячу піцу з натуральних інгредієнтів, на тонкому коржі з доставкою додому чи в офіс."
        },
        "logo": "./resources/companies_logo/street-pizza.png",
        "address": {
            "en": "Lviv, st. Bogun, 12",
            "ru": "г. Львов, ул. Богуна, 12",
            "ua": "м. Львів, вул. Богуна, 12"
        },
        "email": "",
        "category": ["cafes"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 243-70-94"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "«Crazy Pizza»",
            "ru": "Пиццерия «Crazy Pizza»",
            "ua": "Піцерія «Crazy Pizza»"
        },
        "description": {
            "en": "Cafe-pizzeria with an unusual, bright graffiti interior, where it will be interesting and tasty both with a child, and with a company of good friends. Firm pizza of the institution - fruit sweet pizza.",
            "ru": "Кафе-пиццерия с необычным, ярким граффити интерьером, где будет интересно и вкусно как с ребенком, так и с компанией хороших друзей. Фирменная пицца заведения - фруктовая сладкая пицца.",
            "ua": "Кафе-піцерія з незвичним, яскравим графіті інтер’єром, де буде цікаво і смачно як з дитиною, так і з компанією хороших друзів. Фірмова піца закладу - фруктова солодка піца."
        },
        "logo": "./resources/companies_logo/crazy_pizza.png",
        "address": {
            "en": "Lviv, st. Doroshenko, 40",
            "ru": "г. Львов, ул. Дорошенко, 40",
            "ua": "м. Львів, вул. Дорошенка, 40"
        },
        "email": "",
        "category": ["cafes"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 225-68-37"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "«Pizza Calcio»",
            "ru": "Пиццерия «Pizza Calcio»",
            "ua": "Піцерія «Pizza Calcio»"
        },
        "description": {
            "en": "Delicious pizza, seven varieties of fresh beer Obolon, a large collection of attributes of football fans will create an unforgettable aura when viewing football matches or having a pleasant holiday with friends.",
            "ru": "Вкусная пицца, семь сортов свежего пива 'Оболонь', большая коллекция атрибутики футбольных фанов создадут незабываемую ауру при просмотре футбольных матчей или приятном отдыхе с друзьями.",
            "ua": "Смачна піца, сім сортів свіжого пива “Оболонь”, велика колекція атрибутики футбольних фанів створять незабутню ауру при перегляді футбольних матчів чи приємному відпочинку з друзями."
        },
        "logo": "./resources/companies_logo/pizza-calcio.png",
        "address": {
            "en": "Lviv, st. Pidvalna, 9",
            "ru": "г. Львов, ул. Подвальная, 9",
            "ua": "м. Львів, вул. Підвальна, 9"
        },
        "email": "",
        "category": ["cafes"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 235-51-87"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "«Allegro» Bistro",
            "ru": "Бистро «Аллегро»",
            "ua": "Бістро «Алегро»"
        },
        "description": {
            "en": "In two cozy halls you will be offered to taste borshch, sour tomatoes, dumplings, deruny, fresh salad, pizza, ice cream with desserts, various drinks and cocktails of natural ingredients.",
            "ru": "В двух уютных залах Вам предложат отведать борща, сытные чанахи, вареников, дерунов, свежего салата, пиццы, мороженого с десертами, различных напитков и коктейлей из натуральных ингредиентов.",
            "ua": "У двох затишних залах Вам запропонують скуштувати борщу, ситних чанахів, вареників, дерунів, свіжого салату, піцци, морозива з десертами, різноманітних напоїв та коктейлів з натуральних інгредієнтів."
        },
        "logo": "./resources/companies_logo/alegro.png",
        "address": {
            "en": "Lviv, st. Liszt Ferenc, 8",
            "ru": "г. Львов, ул. Ференца Листа, 8",
            "ua": "м. Львів, вул. Ференца Ліста, 8"
        },
        "email": "",
        "category": ["cafes"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 261-57-30"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "«Pizza Blues»",
            "ru": "Пиццерия «Pizza Blues»",
            "ua": "Піцерія «Pizza Blues»"
        },
        "description": {
            "en": "A pizzeria that besides tasty pizza also creates a cozy atmosphere of blues music.",
            "ru": "Пиццерия, которая кроме вкусной пиццы также создает уютную атмосферу под блюзовую музыку.",
            "ua": "Піцерія, що окрім смачної піци також створює затишну атмосферу під блюзову музику."
        },
        "logo": "./resources/companies_logo/pizza-blues.png",
        "address": {
            "en": "Lviv, st. Rappoport, 1",
            "ru": "г. Львов, ул. Раппопорта, 1",
            "ua": "м. Львів, вул. Раппопорта, 1"
        },
        "email": "",
        "category": ["cafes"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 233-80-63"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Cafe-pizzeria «The Great Dish»",
            "ru": "Кафе-пиццерия «Большая тарелка»",
            "ua": "Кафе-піцерія «Велика тарілка»"
        },
        "description": {
            "en": "Delicious dishes and delicious «XXL» piquant pizzas have become a calling card of the Great Dish Network, where the menu is much more diverse than in traditional pizzerias.",
            "ru": "Вкусные блюда и аппетитные пиццы пикантного размера «XXL» стали визитной карточкой заведений сети «Большая тарелка», где меню значительно разнообразнее, чем в традиционных пиццериях.",
            "ua": "Смачні страви та апетитні піци пікантного розміру « XXL» стали візитною карткою закладів мережі «Велика тарілка», де меню значно різноманітніше, ніж у традиційних піцеріях."
        },
        "logo": "./resources/companies_logo/big-plate.png",
        "address": {
            "en": "Lviv, st. Valova, 13",
            "ru": "г. Львов, ул. Валовая, 13",
            "ua": "м. Львів, вул. Валова, 13"
        },
        "email": "",
        "category": ["cafes"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 235-63-17"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Natalie, bags and shoes",
            "ru": "Натали, сумки и обувь",
            "ua": "Наталі, сумки та взуття"
        },
        "description": {
            "en": "Individual sewing of shoes is a combination of high-quality filigree handicraft, great materials and an original, unique model. Handmade - it's guaranteed a high level of quality, extraordinary comfort and ease of use, this is a great way to emphasize its extraordinary and originality. Moreover, now you have a unique opportunity to complete your image by picking up a pair of shoes and a luxurious bag for it at the same time.",
            "ru": "Индивидуальный пошив обуви - это сочетание высококачественной филигранной ручной работы, замечательных материалов и оригинальной, неповторимой модели. Ручная работа - это гарантированно высокий уровень качества, чрезвычайная комфортность и удобство, это отличный способ подчеркнуть свою неординарность и оригинальность. Тем более, что теперь у Вас появилась уникальная возможность завершить Ваш образ подбирая одновременно пару обуви и роскошную сумку для нее.",
            "ua": "Індивідуальне пошиття взуття - це поєднання високоякісної філігранної ручної праці, чудових матеріалів і оригінальної, неповторної моделі. Ручна робота - це гарантовано високий рівень якості, надзвичайна комфортність і зручність використання, це чудовий спосіб підкреслити свою неординарність і оригінальність. Тим паче, що тепер у Вас з’явилася унікальна можливість завершити Ваш образ підбираючи одночасно пару взуття та розкішну сумку для неї."
        },
        "logo": "./resources/companies_logo/natali.png",
        "address": {
            "en": "Lviv, st. Stryiska, 30",
            "ru": "Львов, ул. Стрыйская, 30",
            "ua": "Львів, вул. Стрийська, 30"
        },
        "email": "",
        "category": ["shops"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 229-59-47"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "LOL",
            "ru": "ЛОЛ",
            "ua": "ЛОЛ"
        },
        "description": {
            "en": "LoL Store - a permanent clothing store in Lviv, located on the «Pivdenny» Trade Center in Lviv. Many of Lviv's residents and guests of the city have become our clients and have felt the benefits of buying things at the LOL fashion store.",
            "ru": "LoL Store (магазин лол) - постоянно действующий магазин одежды во Львове, который находится на ТВК «Южный» во Львове. Уже много львовян и гостей города стали нашими клиентами и ощутили преимущества покупки вещей в магазине модной одежды «ЛОЛ».",
            "ua": "LoL Store(магазин ЛоЛ) - постійно діючий магазин одягу у Львові, що знаходиться на ТВК «Південний» у Львові. Уже багато львівян та гостей міста стали нашими клієнтами та відчули переваги купівлі речей у магазині модного одягу «ЛОЛ»."
        },
        "logo": "./resources/companies_logo/lol.png",
        "address": {
            "en": "Lviv, st. Vygovsky 100, «Pivdennyi», TC «Volodymyr», shop №4 LOL",
            "ru": "г. Львов, ул. Выговского 100, ТПК «Южный», ТЦ «Владимир», магазин №4 LOL",
            "ua": "м. Львів, вул. Виговського 100, ТВК «Південний», ТЦ «Володимир», магазин №4  LOL"
        },
        "email": "smile@loljeans.com",
        "category": ["shops"],
        "link": "",
        "phones": {
            "main": ["+38 (09З) 9З9 37 93"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Shopping and entertainment complex «King Cross Leopolis»",
            "ru": "Торгово-развлекательный комплекс King Cross Leopolis",
            "ua": "Торгово-розважальний комплекс King Cross Leopolis"
        },
        "description": {
            "en": "King Cross Leopolis - a shopping center on Stryiska Street in Lviv, opened on March 26, 2010. This is the largest shopping center in the west of Ukraine. Total area is 116 546 m2: supermarket, construction products, skating rink, bowling, multi-suite. The official opening took place on March 26, 2010.",
            "ru": "King Cross Leopolis - торговый центр на улице Стрыйской во Львове, открыт 26 марта 2010 года. Это крупнейший торговый центр запада Украины. Общая площадь 116 546 м2: супермаркет, строительные товары, каток, боулинг, мультиплекс. Официальное открытие состоялось 26 марта 2010.",
            "ua": "King Cross Leopolis — торговий центр на вулиці Стрийській у Львові, відкритий 26 березня 2010 року. Це найбільший торговий центр заходу України. Загальна площа 116 546 м2: супермаркет, будівельні товари, ковзанка, боулінг, мультіплекс. Офіційне відкриття відбулося 26 березня 2010 р."
        },
        "logo": "./resources/companies_logo/king-cross.png",
        "address": {
            "en": "vil. Sokilnyky, st. Stryiska",
            "ru": "с. Сокольники, ул. Стрыйская",
            "ua": "с. Сокільники, вул. Стрийська"
        },
        "email": "",
        "category": ["shops"],
        "link": "http://www.kingcross.com.ua",
        "phones": {
            "main": ["032-242-05-80"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Water Park «Beach»",
            "ru": "Аквапарк Пляж",
            "ua": "Аквапарк Пляж"
        },
        "description": {
            "en": "The Aquapark «Beach» is the largest indoor water park in Western Ukraine, which combines entertaining, sporting and recreational relax. The total area of this complex reaches almost 14 thousand m2. The water park security system is specially designed with computer simulation, all attractions are certified, and the pools are equipped with state-of-the-art water treatment systems.",
            "ru": "Аквапарк «Пляж» - это крупнейший крытый аквапарк в Западной Украине, который сочетает в себе развлекательный, спортивный и оздоровительный отдых. Общая площадь данного комплекса достигает почти 14 тыс.м2. Система безопасности аквапарка специально разработана компьютерным моделированием, все аттракционы сертифицированы, а бассейны оборудованные самыми современными системами очистки воды.",
            "ua": "Аквапарк «Пляж» - це найбільший критий аквапарк в Західній Україні, який поєднує в собі розважальний, спортивний та оздоровчий відпочинок. Загальна площа даного комплексу сягає майже 14 тис.м2. Система безпеки аквапарку спеціально розроблена комп'ютерним моделюванням, усі атракціони сертифіковані,а басейни обладнані найсучаснішими системами очистки води."
        },
        "logo": "./resources/companies_logo/aquapark.png",
        "address": {
            "en": "st.Kn.Olgy, 114",
            "ru": "ул.Кн.Ольги, 114",
            "ua": "вул.Кн.Ольги, 114"
        },
        "email": "",
        "category": ["entertainment"],
        "link": "",
        "phones": {
            "main": ["(032) 243-43-03"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Entertainment Center «CITY BOWLING»",
            "ru": "Развлекательный центр «СИТИ Боулинг»",
            "ua": "Розважальний центр «СІТІ Боулінг»"
        },
        "description": {
            "en": "Bowling is a sports game with clubs and balls, which is a derivative of the usual game - skit. The goal of the game is to shoot down as many balls as possible with the maximum number of skeins that end up in a specially equipped, unbounded track. One of the largest bowling systems in western Ukraine. New equipment, 16 professional tracks, which can simultaneously play up to 96 people.",
            "ru": "Боулинг - спортивная игра с кеглями и шарами, которая является производной от обычной игры в кегли. Цель игры - сбить с помощью как можно меньшего количества шаров наибольшее количество кеглей, которые стоят в конце специально оборудованной без бортовой дорожки. Одна из крупнейших боулинг-систем на западной Украине. Новое оборудование, 16 профессиональных дорожек, на которых одновременно может играть до 96 человек.",
            "ua": "Боулінг – спортивна гра з кеглями та кулями, яка є похідною від звичайної гри в кеглі. Ціль гри —  збити за допомогою якнайменшої кількості куль якнайбільшу кількість кегель, які стоять вкінці спеціально обладнаної без бортової доріжки. Одна з найбільших боулінг-систем на західній Україні. Нове обладнання, 16 професійних доріжок, на яких одночасно може грати до 96 осіб."
        },
        "logo": "./resources/companies_logo/city-bowling.png",
        "address": {
            "en": "KING CROSS LEOPOLIS shopping mall, vil. Sokilnyky, st. Stryiska",
            "ru": "ТРЦ «KING CROSS LEOPOLIS», с. Сокольники, ул. Стрыйская",
            "ua": "ТРЦ «KING CROSS LEOPOLIS», с. Сокільники, вул. Стрийська"
        },
        "email": "info@citybowling.lviv.ua",
        "category": ["entertainment"],
        "link": "http://www.citybowling.lviv.ua",
        "phones": {
            "main": ["+38 (032) 229-59-47"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "«City Bowling» Night Club",
            "ru": "Ночной клуб «City Bowling»",
            "ua": "Нічний клуб «City Bowling»"
        },
        "description": {
            "en": "The City Bowling Night Club in Lviv is a great place to relax with the best friends and with good mood. Here are combined excellent recreation forms - BOULING, KARAOKE and DISCO! On Fridays, Sundays and holidays, City Bowling arranges theme parties with guest artists and gift races from the club and partners.",
            "ru": "Ночной клуб «City Bowling» («Сити Боулинг») во Львове - это прекрасное место, чтобы отдыхать с пользой и с хорошим настроением в кругу лучших друзей. Здесь объединены отличные формы отдыха - БОУЛИНГ, КАРАОКЕ и ДИСКО! Каждую пятницу, субботу и в праздничные дни, «City Bowling» устраивает тематические вечеринки с приглашенными артистами и розыгрышами подарков от клуба и партнеров.",
            "ua": "Нічний клуб «City Bowling» («Сіті Боулінг») у Львові — це чудове місце, щоб відпочивати з користю та з хорошим настроєм у колі найкращих друзів. Тут поєднані відмінні форми відпочинку — БОУЛІНГ, КАРАОКЕ і ДИСКО! Щоп’ятниці, щосуботи та у святкові дні, «City Bowling» влаштовує  тематичні вечірки з запрошеними артистами та розіграшами подарунків від клубу та партнерів."
        },
        "logo": "./resources/companies_logo/city-bowling.png",
        "address": {
            "en": "Lviv, st. Stryiska, 30",
            "ru": "Львов, ул. Стрыйская, 30",
            "ua": "Львів, вул. Стрийська, 30"
        },
        "email": "",
        "category": ["clubs"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 229-59-47"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Piccaso",
            "ru": "Piccaso",
            "ua": "Piccaso"
        },
        "description": {
            "en": "From 12:00 to 18:00, the club operates like a day cafe, where you can have a delicious snack and have a drink of fragrant coffee. Particular attention deserves the registration of the club - you enter as if you fall into the zurnality of a small theater, where the atmosphere of the Parisian Montmartre reigns. The hall of the former cinema is difficult to recognize - tables have been placed here, the conceptual solution to the expansion of the square has become the second tier around the perimeter of the hall, a bar, a dance floor and a unique mobile scene. Everything around is stylistically decorated in the spirit of Picasso - his paintings, his portraits, his spirit is flowing around.",
            "ru": "С 12:00 до 18:00 клуб работает в режиме дневного кафе, в котором можно вкусно перекусить и выпить ароматного кофе. Отдельного внимания заслуживает оформление клуба - войдя Вы словно попадаете в закулисье небольшого театра, где царит атмосфера парижского Монмартра. Зал бывшего кинотеатра трудно узнать - здесь разместились столики, концептуальным решением расширения площади стал второй ярус по периметру зала, бар, танцплощадка и уникальная мобильная сцена. Все вокруг стилистически оформлено в духе Пикассо - его картины, его портреты, его дух витает вокруг.",
            "ua": "З 12:00 до 18:00 клуб працює в режимі денного кафе, в якому можна смачно перекусити та випити запашної кави. Окремої уваги заслуговує оформлення клубу – увійшовши Ви ніби потрапляєте у закулісся невеличкого театру, де панує атмосфера паризького Монмартру. Зал колишнього кінотеатру важко впізнати – тут розмістились столики, концептуальним вирішенням розширення площі став другий ярус по периметру залу, бар, танцмайданчик та унікальна мобільна сцена. Усе навкруги стилістично оформлено у дусі Пікассо – його картини, його портрети, його дух витає навколо."
        },
        "logo": "./resources/companies_logo/picasso.png",
        "address": {
            "en": "Lviv, st. Green, 88",
            "ru": "Львов, ул. Зеленая, 88",
            "ua": "Львів, вул. Зелена, 88"
        },
        "email": "info@picasso.lviv.ua",
        "category": ["clubs"],
        "link": "http://www.picasso.lviv.ua",
        "phones": {
            "main": ["+38 (032) 275 32 72"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Metro",
            "ru": "Metro",
            "ua": "Metro"
        },
        "description": {
            "en": "METRO CLUB LVIV is a multinational team working with clients from all over the world. Even on Mondays and at 5:00 AM, we have a lot of customers. Three dance floors, music for all tastes - a drive for everyone and everyone. POP, R'n'B, TECHNO. We combine international standards with an individual approach to each visitor. We are safe with professional security. 800 meters from Rynok Square is a convenient transport interchange. 4 bars do not force you to wait on request, and the restaurant will pleasantly surprise even the most demanding gourmets.",
            "ru": "МЕТРО КЛУБ ЛЬВОВ - многонациональная команда, работающая с клиентами со всего мира. Даже по понедельникам и в 5:00 утра у нас много клиентов. Три танцпола, музыка на все вкусы - драйв для всех и каждого. ПОП, R'n'B, ТЕХНО. Объединяем международные стандарты с индивидуальным подходом к каждому посетителю. У нас безопасно благодаря профессиональной охране. 800 метров от площади Рынок - удобная транспортная развязка. 4 бара не заставят Вас ждать заказ, а ресторан приятно удивит даже самых взыскательных гурманов.",
            "ua": "МЕТРО КЛУБ ЛЬВІВ — багатонаціональна команда, що працює з клієнтами з усього світу. Навіть по понеділках та о 5:00 ранку у нас багато клієнтів. Три танцполи, музика на усі смаки — драйв для усіх та кожного. ПОП, R’n’B, ТЕХНО. Поєднуємо міжнародні стандарти з індивідуальним підходом до кожного відвідувача. У нас безпечно завдяки професійній охороні. 800 метрів від площі Ринок - зручна транспортна розв’язка. 4 бари не заставлять Вас чекати на замовлення, а ресторан приємно здивує навіть найвимогливіших гурманів."
        },
        "logo": "./resources/companies_logo/metro.png",
        "address": {
            "en": "Lviv, st. Green, 14",
            "ru": "Львов ул. Зеленая, 14",
            "ua": "Львів вул. Зелена, 14"
        },
        "email": "info@metroclub.com.ua",
        "category": ["clubs"],
        "link": "http://www.metroclub.com.ua",
        "phones": {
            "main": ["+38 (067) 670 42 43"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "«Mr. Twister» Club",
            "ru": "Клуб «Мистер Твистер»",
            "ua": "Клуб «Містер Твістер»"
        },
        "description": {
            "en": "The location in the quiet part of Lubinska Street gives the Club somewhat «suburban» chic, separating the moments of your vacation from the annoying hustle and bustle of the city.",
            "ru": "Расположение в тихой части улицы Любинской предоставляет Клубу несколько «загородного» шика, отделяя моменты Вашего отдыха от надоедливого шума города.",
            "ua": "Розташування в тихій частині вулиці Любінської надає Клубу дещо “заміського” шику, відділяючи моменти Вашого відпочинку від набридливого галасу міста."
        },
        "logo": "./resources/companies_logo/mister-twister.png",
        "address": {
            "en": "Lviv, st. Lyubinska, 168",
            "ru": "г. Львов, ул. Любинская, 168",
            "ua": "м. Львів, вул. Любінська, 168"
        },
        "email": "",
        "category": ["clubs"],
        "link": "",
        "phones": {
            "main": ["+38(032) 295-66-69"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Club «Lime»",
            "ru": "Клуб «Лайм»",
            "ua": "Клуб «Лайм»"
        },
        "description": {
            "en": "The club «Lime» has a 24-hour kitchen, a wide selection of cocktails. At your service: hookah rooms, show program, streiths, inflammatory contests, dancers Go-Go, POP music.",
            "ru": "В клубе «Лайм» Вас ждут круглосуточная кухня, широкий выбор коктейлей. К вашим услугам: кальян-комнаты, шоу-программа, стритиз, зажигательные конкурсы, танцовщицы Go-Go, POP музыка.",
            "ua": "В клубі «Лайм» на Вас чекають цілодобова кухня, широкий вибір коктейлів. До ваших послуг: кальян-кімнати, шоу-программа, стритиз, запальні конкурси, танцівниці Go-Go, POP музика."
        },
        "logo": "./resources/companies_logo/club-lime.png",
        "address": {
            "en": "Lviv, st. Lyubinska, 168",
            "ru": "г. Львов, ул. Любинская, 168",
            "ua": "м. Львів, вул. Любінська, 168"
        },
        "email": "",
        "category": ["clubs"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 244-88-52"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },


    {
        "name": {
            "en": "Cult Live Music Club",
            "ru": "Клуб «Культ Live Music Club»",
            "ua": "Клуб «Культ Live Music Club»"
        },
        "description": {
            "en": "The institution was opened in honor of those outstanding figures of Lviv culture from different epochs of history, both from ancient times and from the present, who tried to make Lviv better and make it a popular and refined place for both locals and guests of the city.",
            "ru": "Заведение было открыто в честь тех выдающихся деятелей львовской культуры разных эпох истории, как издревле, так и из настоящего, которые пытались изменить Львов в лучшую сторону и сделать его популярным и изысканным местом как для местных жителей, так и для гостей города.",
            "ua": "Заклад був відкритий в пошану та честь тих видатних діячів львівської культури з різних епох історії, як з давніх давен, так і з сьогодення, які намагалися змінити Львів у найкращу сторону та зробити його популярним та вишуканим місцем як для місцевих жителів, так і для гостей міста."
        },
        "logo": "./resources/companies_logo/kult.png",
        "address": {
            "en": "Lviv, st. Tchaikovsky, 7",
            "ru": "г. Львов, ул. Чайковского, 7",
            "ua": "м. Львів, вул. Чайковського, 7"
        },
        "email": "",
        "category": ["clubs"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 242-22-42"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },


    {
        "name": {
            "en": "Night Club «Gallery»",
            "ru": "Ночной клуб «Gallery»",
            "ua": "Нічний клуб «Gallery»"
        },
        "description": {
            "en": "A mix of classic and high-tech interior design, R'n'B glamor and Disco'80 drive on the dance floor, refined and sophisticated French dishes and service, the inflammatory taste of night Europe in a variety of cocktails.",
            "ru": "Смесь классики и хай-тека в дизайне интерьера, гламур R'n'B и драйв Disco'80 на танцплощадке, изысканность и утонченность Франции в блюдах и обслуживании, воспалительный вкус ночной Европы в различных коктейлях.",
            "ua": "Суміш класики та хай-теку в дизайні інтер’єру, гламур R’n’B та драйв Disco’80 на танцмайданчику, вишуканість та витонченість Франції в стравах та обслуговуванні, запальний смак нічної Європи у різноманітних коктейлях."
        },
        "logo": "./resources/companies_logo/gallery.png",
        "address": {
            "en": "Lviv, Freedom av., 16-18",
            "ru": "г. Львов, просп. Свободы, 16-18",
            "ua": "м. Львів, просп. Свободи, 16-18"
        },
        "email": "",
        "category": ["clubs"],
        "link": "",
        "phones": {
            "main": ["+38 (032) 272-39-39"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },


    {
        "name": {
            "en": "Boyko Maria",
            "ru": "Бойко Мария",
            "ua": "Бойко Марія"
        },
        "description": {
            "en": "I will spend interesting and accessible «classical routes» of Lviv: Medieval City, Lviv Austrian, Knyazhiy Lviv, Lychakivsky necropolis, Lviv suburbs, as well as thematic excursions. Excursions are designed for children of junior school age. Country trips: Zhovkva, Krekhiv, Stradch, Prilbichi, Olesko, Pidhirtsi, Zolochiv, Svirzh, Univ, Glynyany, Goshiv, Tustan, Pochayiv, Carpathian and Transcarpathian, excursions to Podillya. Master classes: for the production of dolls and cooking like in the east.",
            "ru": "Проведу интересно и доступно «классическими маршрутами» Львова: Город Средневековый, Львов Австрийский, Княжий Львов, Лычаковский некрополь, Львовские пригороды, а также тематические экскурсии. Экскурсии разработаны для детей младшего школьного возраста. Загородные поездки: Жовква, Крехов, Страдч, Прылбичи, Олесько, Подгорцы, Золочев, Свирж, Унив, Глиняны, Гошив, Тустань, Почаев, Карпаты и Закарпатье, экскурсии Подольем. Мастер-классы: по изготовлению куклы-мотанки и приготовлению кофе по-восточному.",
            "ua": "Проведу цікаво та доступно „класичними маршрутами” Львова: Місто Середньовічне, Львів Австрійський, Княжий Львів, Личаківський некрополь, Львівські передмістя, а також тематичні екскурсії. Екскурсії розроблені для дітей молодшого шкільного віку. Заміські поїздки: Жовква, Крехів, Страдч, Прилбичі, Олесько, Підгірці, Золочів, Свірж, Унів, Глиняни, Гошів, Тустань, Почаїв, Карпати та Закарпаття, екскурсії Поділлям. Майстер-класи: по виготовленню ляльки-мотанки та приготуванню кави по-східному."
        },
        "logo": "./resources/companies_logo/boyko-m.png",
        "address": {
            "en": "",
            "ru": "",
            "ua": ""
        },
        "email": "mariya.boyko@yahoo.co.uk",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+38(097)-95-34-502"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },


    {
        "name": {
            "en": "Hud Oksana",
            "ru": "Гудь Оксана",
            "ua": "Гудь Оксана"
        },
        "description": {
            "en": "Lviv mystical, romantic, Batiar, Austrian Lviv, Lviv underground, Lychakiv cemetery, Lviv Opera, excursions adapted for children of junior school age, theatrical excursions, restaurant tour of Lviv, Lviv with a master class for cooking, Lviv Observatory. Suburbs: Golden Horseshoe of Lviv Region, Zhovkva - Krekhiv Monastery, Pochayiv Lavra, Carpathians, Transcarpathians, Kamyanets-Podilskyi Hotyn, Stradch, Prilbichi, Svirzhsky Castle, Univska Lavra.",
            "ru": "Львов мистический, романтический, батярский, Львов Австрийский, Подземелья Львова, Лычаковское кладбище, Львовская Опера, экскурсии адаптированы для детей младшего школьного возраста, театрализованные экскурсии, ресторанный тур по Львову, Львов с мастер-классом по приготовлению кофе, Обсерватория Львовская. Загородные: Золотая Подкова Львовщины, Жовква - Креховский монастырь, Почаевская Лавра, Карпаты, Закарпатье, Каменец-Подольский, Хотин, Страдч, Прылбичи, Свиржский замок, Унивская Лавра.",
            "ua": "Львів містичний, романтичний, батярський, Львів Австрійський, Підземелля Львова, Личаківське кладовище, Львівська Опера, екскурсії адаптовані для дітей молодшого шкільного віку, театралізовані екскурсії, ресторанний тур по Львову, Львів з майстер-класом по приготуванню кави, Обсерваторія Львівська. Заміські: Золота Підкова Львівщини, Жовква - Крехівський монастир, Почаївська Лавра, Карпати, Закарпаття, Камянець-Подільський  Хотин, Страдч, Прилбичі, Свіржський замок, Унівська Лавра."
        },
        "logo": "./resources/companies_logo/gud-o.png",
        "address": {
            "en": "",
            "ru": "",
            "ua": ""
        },
        "email": "oksana.goodoks@gmail.com",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+38(067)-67-50-171"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Gaidai Oksana Romanivna",
            "ru": "Гайдай Оксана Романовна",
            "ua": "Гайдай Оксана Романівна"
        },
        "description": {
            "en": "Pedestrian, bus review tours. Lviv princely, greek, musical, courtyards of Lviv, Shevchenkivsky grove, palaces of Lviv, romantic breath of the Old Lion, seven wonders of Lviv, city with a taste of coffee, mysteries of the underground, unsurpassed Sofiyivka. Suburban: castles of Lviv, royal Zhovkva and Krekhiv monastery, pilgrimage to Stradch.",
            "ru": "Пешеходные, автобусные обзорные. Львов княжеский, греческий, музыкальный, дворики Львова, Шевченковский гай, дворцы Львова, романтический дух Старого Льва, семь чудес Львова, город с привкусом кофе, тайны подземелий, непревзойденная Софиевка. Загородные замки Львовщины, королевская Жовква и Креховский монастырь, паломничество в Страдч.",
            "ua": "Пішохідні, автобусні оглядові. Львів княжий, грецький, музичний, дворики Львова, Шевченківський гай, палаци Львова, романтичний подих Старого Лева, сім чудес Львова, місто з присмаком кави, таємниці підземель, неперевершена Софіївка. Заміські: замки Львівщини, королівська Жовква і Крехівський монастир, паломництво в Страдч."
        },
        "logo": "./resources/companies_logo/gayday-oksana.png",
        "address": {
            "en": "",
            "ru": "",
            "ua": ""
        },
        "email": "oxsana1122@mail.ru",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+38(098)-750-49-65"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Gerasymiv Vitaliy",
            "ru": "Герасимов Виталий",
            "ua": "Герасимів Віталій"
        },
        "description": {
            "en": "Excursions to Lviv and its surroundings: Medieval Lviv, Lychakiv Cemetery, Knyazhiy Lviv and Mount Higher Castle, Austrian Lviv. Gourmet tours: restaurant tour, coffee tour, beer tour. Guided tours of Lviv region and the Carpathians.",
            "ru": "Экскурсии по Львову и его окрестностям: Средневековый Львов, Лычаковское кладбище, Княжий Львов и гора Высокий Замок, Австрийский Львов. Гурмэ-туры: ресторанный тур, кофейный тур, пивной тур. Экскурсии по Львовщине и Карпатах.",
            "ua": "Екскурсії Львовом і його околицями: Середньовічний Львів, Личаківське кладовище, Княжий Львів і гора Високий Замок, Австрійський Львів. Гурме-тури: ресторанний тур, кавовий тур, пивний тур. Екскурсії по Львівщині і Карпатах."
        },
        "logo": "./resources/companies_logo/gerasumiv.png",
        "address": {
            "en": "",
            "ru": "",
            "ua": ""
        },
        "email": "vvherasymiv@yahoo.com",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+38(066)-10-84-059"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Kardash Julia Igorivna",
            "ru": "Кардаш Юлия Игоревна",
            "ua": "Кардаш Юлія Ігорівна"
        },
        "description": {
            "en": "Sociable, fun, with a great sense of humor, it's easy to find a common language with people.",
            "ru": "Коммуникабельная, веселая, с прекрасным чувством юмора, легко нахожу общий язык с людьми.",
            "ua": "Комунікабельна, весела, з чудовим почуттям гумору, легко знаходжу спільну мову з людьми."
        },
        "logo": "./resources/companies_logo/karsash-juliya.png",
        "address": {
            "en": "",
            "ru": "",
            "ua": ""
        },
        "email": "kardashulia@mail.ru",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+38(095)-478-04-41"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Kornienko Maria",
            "ru": "Корниенко Мария",
            "ua": "Корнієнко Марія"
        },
        "description": {
            "en": "Walking and bus tours to the mysterious city of Lion and its surroundings, for people of all ages and temperaments. The program necessarily includes a positive addition to interesting, meaningful and emotional stories about Lviv and everything connected with it :)",
            "ru": "Пешеходные и автобусные экскурсии загадочным городом Льва и его окрестностями, для людей любого возраста и темперамента, в программу обязательно входит позитив в дополнение к интересным, содержательным и эмоциональным рассказам о Львове и всем, что с ним связано :)",
            "ua": "Пішохідні та автобусні екскурсії загадковим містом Лева та яго околицями, для людей будь-якого віку і темпераменту, в програму обов'язково входить позитив в додаток до цікавих, змістовних та емоційних розповідей про Львів та все, що з ним пов'язано :)"
        },
        "logo": "./resources/companies_logo/kornienko.png",
        "address": {
            "en": "",
            "ru": "",
            "ua": ""
        },
        "email": "mashka_chik@mail.ru",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+38(063)-795-44-67"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Rap Yaroslav Volodymyrovych",
            "ru": "Рап Ярослав Владимирович",
            "ua": "Рап Ярослав Володимирович"
        },
        "description": {
            "en": "I offer serious meaningful excursions with a deepened historical and artistic accent, specializing in Polish excursions.",
            "ru": "Предлагаю серьезные содержательные экскурсии с углубленным историческим и художественным акцентом, специализируюсь на польских экскурсиях.",
            "ua": "Пропоную серйозні змістовні екскурсії з поглибленим історичним і мистецьким акцентом, спеціалізуюсь на польських екскурсіях."
        },
        "logo": "./resources/companies_logo/rap-yaroslav.png",
        "address": {
            "en": "",
            "ru": "",
            "ua": ""
        },
        "email": "yarigor@yahoo.com",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+38(050)-370-26-62"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Telishevska Iryna",
            "ru": "Телишевская Ирина",
            "ua": "Телішевська Ірина"
        },
        "description": {
            "en": "Sightseeing bus and pedestrian city tour, medieval Lviv, Lychakiv cemetery, Lviv austrian, Coffee and chocolate tours, Legends of the old city, Lviv city of museums, High castle, Romantic Lviv, Lviv Opera. Suburbs: Locks of Lviv, Pochayiv Lavra, Krekhiv Monastery, Zhovkva City Museum, Univska Lavra, Sambir and Monastery in Lavriv, Transcarpathian-Uzhhorod, Mukacheve.",
            "ru": "Обзорная автобусно-пешеходная городом, средневековый Львов, Лычаковское кладбище, Львов австрийский, кофейно-шоколадные туры, Легенды старого города, Львов-город музеев, Высокий замок, Романтический Львов, Львовская Опера. Загородные Замки Львовщины, Почаевская Лавра, Креховский монастырь, Жовква город-музей, Унивская Лавра, Самбор и монастырь в Лавру, города Закарпатья-Ужгород, Мукачево.",
            "ua": "Оглядова автобусно-пішохідна містом, середньовічний Львів, Личаківське кладовище, Львів австрійський, Кавово-шоколадні тури, Легенди старого міста, Львів-місто музеїв, Високий замок, Романтичний Львів, Львівська Опера. Заміські: Замки Львівщини, Почаївська Лавра, Крехівський монастир, Жовква-місто-музей, Унівська Лавра, Самбір та монастир у Лаврові, міста Закарпаття-Ужгород, Мукачеве."
        },
        "logo": "./resources/companies_logo/telishevska-ira.png",
        "address": {
            "en": "",
            "ru": "",
            "ua": ""
        },
        "email": "iralvivtur@ukr.net",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+38(050)-925-57-97"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Fedyshyn Luda",
            "ru": "Федишин Люда",
            "ua": "Федишин Люда"
        },
        "description": {
            "en": "7 miracles of Lviv, Lviv scansen, Lychakivsky cemetery, Lviv Temples, National district of Lviv, Legends of Lviv, Lviv medieval, Lviv austrian, Golden horseshoe of Lviv region ...",
            "ru": "7 чудес Львова, Львовский скансен, Лычаковское кладбище, Храмы Львова, Национальные участки Львова, Легенды Львова, Львов средневековый, Львов австрийский, Золотая подкова Львовщины ...",
            "ua": "7 чудес Львова,   Львівський скансен,   Личаківський цвинтар,  Храми Львова,  Національні дільниці Львова,  Легенди Львова, Львів середньовічний, Львів австрійський, Золота підкова Львівщини..."
        },
        "logo": "./resources/companies_logo/fedushun.png",
        "address": {
            "en": "",
            "ru": "",
            "ua": ""
        },
        "email": "ludafedyshyn@yahoo.com",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+38(097)-447-81-38"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Chebelyuk Olena Petrivna",
            "ru": "Чебелюк Елена Петровна",
            "ua": "Чебелюк Олена Петрівна"
        },
        "description": {
            "en": "Lviv medieval, Old-Russian city, poles in Lviv, Lviv Austrian, Lychakiv cemetery, Shevchenkivsky grove, Lviv Opera, High Castle, Coffee and coffee shops in Lviv, artistic and romantic Lviv. Interesting excursions for children. Suburbs: Golden Horseshoe of Lviv Region, Zhovkva - Krekhiv Monastery, Pochayiv Lavra, Svirzhsky Castle, Univska Lavra.",
            "ru": "Львов средневековый, Древнерусский город, поляки во Львове, Львов Австрийский, Лычаковское кладбище, Шевченковский гай, Львовская Опера, Высокий замок, Кофе и кофейни во Львове, художественный и романтический Львов. Интересные экскурсии для детей. Загородные: Золотая Подкова Львовщины, Жовква - Креховский монастырь, Почаевская Лавра, Свиржский замок, Унивская Лавра.",
            "ua": "Львів середньовічний, Давньоруське місто, поляки у Львові, Львів Австрійський, Личаківське кладовище, Шевченківський гай, Львівська Опера, Високий замок, Кава і кав'ярні у Львові, мистецький і романтичний Львів. Цікаві екскурсії для дітей. Заміські: Золота Підкова Львівщини, Жовква - Крехівський монастир, Почаївська Лавра, Свіржський замок, Унівська Лавра."
        },
        "logo": "./resources/companies_logo/chebeluk-oksana.png",
        "address": {
            "en": "",
            "ru": "",
            "ua": ""
        },
        "email": "yarisolia@gmail.com",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+38(050)-430-65-54"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Shershniova Vira",
            "ru": "Шершнева Вера",
            "ua": "Шершньова Віра"
        },
        "description": {
            "en": "The princely city, Lviv medieval, Lviv austrian, In the footsteps of Lviv Jews, «To, co tylko we Lwowie», Lviv Opera, Lychakivsky cemetery, Underground Lviv, Fortifications of Lviv, Excursions adapted for schoolchildren, Individual programs.",
            "ru": "Княжеский город, Львов средневековый, Львов австрийский, следами львовских евреев, To, co tylko we Lwowie, Львовская Опера, Лычаковское кладбище, Подземный Львов, Фортификации Львова, экскурсии адаптированы для школьников, индивидуальные программы.",
            "ua": "Княже місто, Львів середньовічний, Львів австрійський, Слідами львівських євреїв, To, co tylko we Lwowie, Львівська Опера, Личаківський цвинтар, Підземний Львів,  Фортифікації Львова, екскурсії адаптовані для школярів, індивідуальні програми."
        },
        "logo": "./resources/companies_logo/shershnova-vira.png",
        "address": {
            "en": "",
            "ru": "",
            "ua": ""
        },
        "email": "virashershniova@ukr.net",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+38(097)-510-75-39"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },

    {
        "name": {
            "en": "Shmigelsky Igor",
            "ru": "Шмигельский Игорь",
            "ua": "Шмігельський Ігор"
        },
        "description": {
            "en": "Walking sightseeing and thematic tours, Lviv Medieval, Lviv Austrian, Lychakiv cemetery, Shevchenkivskyi gaius, Lviv Opera, Coffee houses of Lviv, Lviv - the city of heroes. Kneipps of Lviv. Suburban: Golden Horseshoe of Lviv region, Zhovkva, Krekhiv monastery.",
            "ru": "Пешеходные обзорные и тематические экскурсии, Львов Средневековый Львов Австрийский, Лычаковское кладбище, Шевченковский гай, Львовская Опера, кофейни Львова, Львов Город героев. Забегаловки Львова. Загородные: Золотая Подкова Львовщины, Жовква, Креховский монастырь.",
            "ua": "Пішохідні оглядові та тематичні екскурсії, Львів Середньовічний, Львів Австрійський, Личаківське кладовище, Шевченківський гай, Львівська Опера, Кав'ярні львова, Львів–місто героїв. Кнайпи Львова. Заміські: Золота Підкова Львівщини, Жовква, Крехівський монастир."
        },
        "logo": "./resources/companies_logo/shmigelskuy.png",
        "address": {
            "en": "",
            "ru": "",
            "ua": ""
        },
        "email": "shmihelskyy@ukr.net",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+38(097)-949-91-13"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    },


    {
        "name": {
            "en": "Yavorska Evheniya Markivna",
            "ru": "Яворская Евгения Марковна",
            "ua": "Яворська Євгенія Марківна"
        },
        "description": {
            "en": "Many years ago I first discovered Lviv for myself, for whom the old motto Semper fidelis (always true) and now is the rule of life. I have found magic streets, which you can walk without a specific goal, and only the case will lead to the goal rather than the intention. I sensed the soul of an ancient cobblestone, which make you plunge into the vire of centuries. Since then, years have passed, but now, when I meet my old friend (the city) with visitors, I am sure: Lviv is becoming a faithful friend to everyone.",
            "ru": "Много лет назад я впервые открыла для себя Львов, для которого давний девиз Semper fidelis (всегда верный) и сейчас является правилом жизни. Нашла волшебные улицы, по которым можно гулять даже без определенной цели, и только случай приведет к цели быстрее, чем намерение. Почувствовала душу старинной брусчатки, коснувшись которой погружаешься в водоворот веков. С тех пор прошли годы, но и сейчас, когда я знакомлю с моим старым приятелем-городом гостей, я уверена: Львов становится верным другом каждому.",
            "ua": "Багато років назад я вперше відкрила для себе Львів, для якого давній девіз Semper fidelis (завжди вірний) й зараз є правилом життя. Знайшла чарівні вулиці, якими можна гуляти навіть без визначеної мети, й лише випадок приведе до мети скоріше, ніж намір. Відчула душу старовинної бруківки, торкнувшись якої поринаєш у вир століть. З того часу минули роки, проте й зараз, коли я знайомлю із моїм старим приятелем-містом гостей, я певна: Львів стає вірним другом кожному."
        },
        "logo": "./resources/companies_logo/yavorska-yevgenia.png",
        "address": {
            "en": "",
            "ru": "",
            "ua": ""
        },
        "email": "evgeniya_yav@bk.ru",
        "category": ["tours"],
        "link": "",
        "phones": {
            "main": ["+38(005)-151-06-98"],
            "reception": [],
            "fax": [],
            "book": [],
            "restaurant": []
        },
        "isMarkedCheckInLviv": false
    }
]
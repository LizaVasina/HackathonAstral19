ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [54.513845, 36.261215],
        zoom: 15
      },
      {
        searchControlProvider: "yandex#search"
      }
    ),
    myPlacemark = new ymaps.Placemark([54.5116, 36.2611], {
      balloonContentHeader: "Свалка в сквере Карпова",
      balloonContentBody:
        "Замечена Игорем Ивановом<br><img height=200px width=400px src='https://sun9-15.userapi.com/c858024/v858024307/11009f/MsjfKjpJh0w.jpg'>"
    }),
    myPlacemark2 = new ymaps.Placemark([54.516245, 36.241215], {
      balloonContentHeader: "Хакатон",
      balloonContentBody:
        "Замечена Елизоветой Васиной<br><img height=200px width=400px src='https://sun9-35.userapi.com/c854020/v854020307/18af26/B4Ho7bJ3H5E.jpg'>"
    }),
    myPlacemark1 = new ymaps.Placemark([54.515045, 36.258215], {
      balloonContentHeader: "Свалка у Театрального сквера",
      balloonContentBody:
        "Замечена Андреем Сомином<br><img height=200px width=400px src='https://sun9-44.userapi.com/c854016/v854016015/181070/c-KHjhqjYyc.jpg'>"
    }),
    myPlacemark4 = new ymaps.Placemark([54.508045, 36.263215], {
      balloonContentHeader: "Свалка у Луначерского 13",
      balloonContentBody:
        "Замечена Дмитрием Капустином<br><img height=200px width=400px src='https://sun9-34.userapi.com/c858024/v858024307/110070/ITuaGWi8BRU.jpg'>"
    }),
    myPlacemark3 = new ymaps.Placemark([54.515045, 36.273215], {
      balloonContentHeader: "Свалка у Гимназии 24",
      balloonContentBody:
        "Замечена Сегеем Коловановым<br><img height=200px width=400px src='https://sun9-2.userapi.com/c858024/v858024307/11008c/_OzNZYljbNA.jpg'>"
    });

  myMap.geoObjects.add(myPlacemark);
  myMap.geoObjects.add(myPlacemark1);
  myMap.geoObjects.add(myPlacemark2);
  myMap.geoObjects.add(myPlacemark3);
  myMap.geoObjects.add(myPlacemark4);
}

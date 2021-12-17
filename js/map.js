



let map,center = [46.003514, 43.169457];

function detail_place(e,data){
  new Structur("выздоровели Больнице").loop()
  let db = db_json
  for (let item in db) {
    for (let coords in db[item].hospitals_s) {
      if(db[item].hospitals_s[coords]['name'] == data){
        console.log(db[item].hospitals_s[coords])
      }
    }
  }

}




function zoom(e,object_cls){
  console.log(object_cls)
  new Structur("статистика по Району").loop()
    let coords = e.get('coords')
    map.zoomRange.get(coords).then(function(range){
      map.setCenter(
        coords,
        11,
      )
    })
}


function clasters(coords_arr){
  let myGeoObjects = [];
  var clusterer = new ymaps.Clusterer({
      gridSize: 250,

  });
  for(let obj in coords_arr) {
    myGeoObjects[obj] =  new ymaps.Placemark(coords_arr[obj]['address'],{
      hintContent:coords_arr[obj]['name']}
    ,{
      hintContent:coords_arr[obj]['name']
    },{
      preset: 'islands#violetCircleDotIcon'
    })
  }


  clusterer.add(myGeoObjects);
  map.geoObjects.add(clusterer)
  clusterer.events.add('click',function(e){
    detail_place(e,e.get('target').properties._data.hintContent)
  })




}

function claster_func(){
    let list_coords = []
    let db = db_json
    for (let item in db) {
      for (let coords in db[item].hospitals_s) {
        list_coords.push(db[item].hospitals_s[coords])
      }
    }
    clasters(list_coords)

}


function init() {
    console.log(db_coordinates)
    new Structur("Статистка летальности Чечне").loop()
    new Structur("Статистика Чечни").loop()
    map = new ymaps.Map("map", {
          center: center,
          zoom: 8.5,
          controls: ["zoomControl", "fullscreenControl"]
    },{ searchControlProvider: 'yandex#search' });



    let districtCollections = {};
    for(let item in db_coordinates){
      districtCollections[item] = new ymaps.GeoObjectCollection({},{
        fillColor: db_coordinates[item].color,
        strokeColor: "#000000",
        strokeOpacity: 0.7,
        fillOpacity: 0.7,
        hintCloseTimeout: 0,
        hintOpenTimeout: 0
      })
      districtCollections[item].add(new ymaps.GeoObject({
      geometry: {
          type: "Polygon",
          coordinates: db_coordinates[item].coordiantes,
      }
      }))
      districtCollections[item].properties.districts = {
        "id":db_coordinates[item].id,
        "name":db_coordinates[item].name
      };
    }

    let highlightedDistrict;
    for (let strucTura in districtCollections) {
      let object_cls = districtCollections[strucTura].properties.districts
      map.geoObjects.add(districtCollections[strucTura])

        // districtCollections[strucTura].events.add('mouseenter', function (event) {
        //     var district = event.get('target').getParent();
        //     district.options.set({fillOpacity: 0.7});
        // });
        // districtCollections[strucTura].events.add('mouseleave', function (event) {
        //     var district = event.get('target').getParent();
        //     if (district !== highlightedDistrict) {
        //         district.options.set({fillOpacity: 0.7});
        //     }
        // });


      districtCollections[strucTura].events.add('click', function (event) {

      let target = event.get('target');
      zoom(event,object_cls)
      let district = target.getParent();
      if (highlightedDistrict) {
            highlightedDistrict.options.set({fillOpacity: 0.7})
      }
      district.options.set({fillOpacity:0});
      highlightedDistrict = district;
    })

  }
  claster_func()


}
ymaps.ready(init);

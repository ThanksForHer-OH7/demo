var wms_layers = [];

var lyr_fond_imagerie_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://carto10.gouv.nc/arcgis/services/fond_imagerie/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "fond_imagerie",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_fond_imagerie_0, 0]);
var format_WRECKS_DIFF_1 = new ol.format.GeoJSON();
var features_WRECKS_DIFF_1 = format_WRECKS_DIFF_1.readFeatures(json_WRECKS_DIFF_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WRECKS_DIFF_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WRECKS_DIFF_1.addFeatures(features_WRECKS_DIFF_1);cluster_WRECKS_DIFF_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_WRECKS_DIFF_1
});
var lyr_WRECKS_DIFF_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_WRECKS_DIFF_1, 
                style: style_WRECKS_DIFF_1,
                interactive: true,
                title: '<img src="styles/legend/WRECKS_DIFF_1.png" /> WRECKS_DIFF'
            });

lyr_fond_imagerie_0.setVisible(true);lyr_WRECKS_DIFF_1.setVisible(true);
var layersList = [lyr_fond_imagerie_0,lyr_WRECKS_DIFF_1];
lyr_WRECKS_DIFF_1.set('fieldAliases', {'inspireid': 'inspireid', 'latitude': 'latitude', 'longitude': 'longitude', 'precis_loc': 'precis_loc', 'brassiage': 'brassiage', 'precis_bra': 'precis_bra', 'long_obj': 'long_obj', 'nom': 'nom', 'caract_obj': 'caract_obj', 'circ_nauf': 'circ_nauf', 'caract_bat': 'caract_bat', 'type_obj': 'type_obj', });
lyr_WRECKS_DIFF_1.set('fieldImages', {'inspireid': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precis_loc': 'TextEdit', 'brassiage': 'TextEdit', 'precis_bra': 'TextEdit', 'long_obj': 'TextEdit', 'nom': 'TextEdit', 'caract_obj': 'TextEdit', 'circ_nauf': 'TextEdit', 'caract_bat': 'TextEdit', 'type_obj': 'TextEdit', });
lyr_WRECKS_DIFF_1.set('fieldLabels', {'inspireid': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'precis_loc': 'no label', 'brassiage': 'no label', 'precis_bra': 'no label', 'long_obj': 'no label', 'nom': 'inline label', 'caract_obj': 'no label', 'circ_nauf': 'no label', 'caract_bat': 'no label', 'type_obj': 'no label', });
lyr_WRECKS_DIFF_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
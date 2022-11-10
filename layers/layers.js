var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_gebco_2021_ALL_3832copier_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "gebco_2021_ALL_3832 copier",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/gebco_2021_ALL_3832copier_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-16698419.856154, -242528680.943743, 18923900.243602, 242528680.943743]
                            })
                        });
var lyr_gebco_2021_ALL_3832_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "gebco_2021_ALL_3832",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/gebco_2021_ALL_3832_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-16698419.856154, -242528680.943743, 18923900.243602, 242528680.943743]
                            })
                        });
var format_ne_10m_land_3 = new ol.format.GeoJSON();
var features_ne_10m_land_3 = format_ne_10m_land_3.readFeatures(json_ne_10m_land_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_land_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_land_3.addFeatures(features_ne_10m_land_3);
var lyr_ne_10m_land_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_land_3, 
                style: style_ne_10m_land_3,
                interactive: true,
                title: '<img src="styles/legend/ne_10m_land_3.png" /> ne_10m_land'
            });
var format_featurespoint_4 = new ol.format.GeoJSON();
var features_featurespoint_4 = format_featurespoint_4.readFeatures(json_featurespoint_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_featurespoint_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_featurespoint_4.addFeatures(features_featurespoint_4);
var lyr_featurespoint_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_featurespoint_4, 
                style: style_featurespoint_4,
                interactive: true,
                title: 'features-point'
            });
var format_WCMC008_CoralReef2018_Py_v4_1_4326_5 = new ol.format.GeoJSON();
var features_WCMC008_CoralReef2018_Py_v4_1_4326_5 = format_WCMC008_CoralReef2018_Py_v4_1_4326_5.readFeatures(json_WCMC008_CoralReef2018_Py_v4_1_4326_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WCMC008_CoralReef2018_Py_v4_1_4326_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WCMC008_CoralReef2018_Py_v4_1_4326_5.addFeatures(features_WCMC008_CoralReef2018_Py_v4_1_4326_5);
var lyr_WCMC008_CoralReef2018_Py_v4_1_4326_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WCMC008_CoralReef2018_Py_v4_1_4326_5, 
                style: style_WCMC008_CoralReef2018_Py_v4_1_4326_5,
                interactive: true,
                title: '<img src="styles/legend/WCMC008_CoralReef2018_Py_v4_1_4326_5.png" /> WCMC008_CoralReef2018_Py_v4_1_4326'
            });
var format_ZEE_6 = new ol.format.GeoJSON();
var features_ZEE_6 = format_ZEE_6.readFeatures(json_ZEE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZEE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZEE_6.addFeatures(features_ZEE_6);
var lyr_ZEE_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZEE_6, 
                style: style_ZEE_6,
                interactive: true,
                title: 'ZEE'
            });
var format_WORLD_EEZv11NOHOLES_3832_7 = new ol.format.GeoJSON();
var features_WORLD_EEZv11NOHOLES_3832_7 = format_WORLD_EEZv11NOHOLES_3832_7.readFeatures(json_WORLD_EEZv11NOHOLES_3832_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WORLD_EEZv11NOHOLES_3832_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WORLD_EEZv11NOHOLES_3832_7.addFeatures(features_WORLD_EEZv11NOHOLES_3832_7);
var lyr_WORLD_EEZv11NOHOLES_3832_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WORLD_EEZv11NOHOLES_3832_7, 
                style: style_WORLD_EEZv11NOHOLES_3832_7,
                interactive: true,
                title: 'WORLD_EEZv11-NOHOLES_3832'
            });
var format_ENC_Wrecks_8 = new ol.format.GeoJSON();
var features_ENC_Wrecks_8 = format_ENC_Wrecks_8.readFeatures(json_ENC_Wrecks_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ENC_Wrecks_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ENC_Wrecks_8.addFeatures(features_ENC_Wrecks_8);
var lyr_ENC_Wrecks_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ENC_Wrecks_8, 
                style: style_ENC_Wrecks_8,
                interactive: true,
                title: '<img src="styles/legend/ENC_Wrecks_8.png" /> ENC_Wrecks'
            });
var format_AWOIS_Wrecks_9 = new ol.format.GeoJSON();
var features_AWOIS_Wrecks_9 = format_AWOIS_Wrecks_9.readFeatures(json_AWOIS_Wrecks_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AWOIS_Wrecks_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AWOIS_Wrecks_9.addFeatures(features_AWOIS_Wrecks_9);
var lyr_AWOIS_Wrecks_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AWOIS_Wrecks_9, 
                style: style_AWOIS_Wrecks_9,
                interactive: true,
                title: '<img src="styles/legend/AWOIS_Wrecks_9.png" /> AWOIS_Wrecks'
            });
var format_WRECKS_DIFF_10 = new ol.format.GeoJSON();
var features_WRECKS_DIFF_10 = format_WRECKS_DIFF_10.readFeatures(json_WRECKS_DIFF_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WRECKS_DIFF_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WRECKS_DIFF_10.addFeatures(features_WRECKS_DIFF_10);
var lyr_WRECKS_DIFF_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WRECKS_DIFF_10, 
                style: style_WRECKS_DIFF_10,
                interactive: true,
                title: '<img src="styles/legend/WRECKS_DIFF_10.png" /> WRECKS_DIFF'
            });
var group_Epaves = new ol.layer.Group({
                                layers: [lyr_ENC_Wrecks_8,lyr_AWOIS_Wrecks_9,lyr_WRECKS_DIFF_10,],
                                title: "Epaves"});
var group_ZEE = new ol.layer.Group({
                                layers: [lyr_ZEE_6,lyr_WORLD_EEZv11NOHOLES_3832_7,],
                                title: "ZEE"});
var group_FondCarto = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,lyr_gebco_2021_ALL_3832copier_1,lyr_gebco_2021_ALL_3832_2,lyr_ne_10m_land_3,lyr_featurespoint_4,lyr_WCMC008_CoralReef2018_Py_v4_1_4326_5,],
                                title: "Fond Carto"});

lyr_OSMStandard_0.setVisible(true);lyr_gebco_2021_ALL_3832copier_1.setVisible(true);lyr_gebco_2021_ALL_3832_2.setVisible(true);lyr_ne_10m_land_3.setVisible(true);lyr_featurespoint_4.setVisible(true);lyr_WCMC008_CoralReef2018_Py_v4_1_4326_5.setVisible(true);lyr_ZEE_6.setVisible(true);lyr_WORLD_EEZv11NOHOLES_3832_7.setVisible(true);lyr_ENC_Wrecks_8.setVisible(true);lyr_AWOIS_Wrecks_9.setVisible(true);lyr_WRECKS_DIFF_10.setVisible(true);
var layersList = [group_FondCarto,group_ZEE,group_Epaves];
lyr_ne_10m_land_3.set('fieldAliases', {'featurecla': 'featurecla', 'scalerank': 'scalerank', 'min_zoom': 'min_zoom', });
lyr_featurespoint_4.set('fieldAliases', {'name': 'name', 'type': 'type', 'meeting': 'meeting', 'proposer': 'proposer', 'prop_year': 'prop_year', 'discoverer': 'discoverer', 'disc_year': 'disc_year', 'history': 'history', 'comments': 'comments', 'status': 'status', 'primary': 'primary', });
lyr_WCMC008_CoralReef2018_Py_v4_1_4326_5.set('fieldAliases', {'fid': 'fid', 'LAYER_NAME': 'LAYER_NAME', 'METADATA_I': 'METADATA_I', 'ORIG_NAME': 'ORIG_NAME', 'FAMILY': 'FAMILY', 'GENUS': 'GENUS', 'SPECIES': 'SPECIES', 'DATA_TYPE': 'DATA_TYPE', 'START_DATE': 'START_DATE', 'END_DATE': 'END_DATE', 'DATE_TYPE': 'DATE_TYPE', 'VERIF': 'VERIF', 'NAME': 'NAME', 'LOC_DEF': 'LOC_DEF', 'SURVEY_MET': 'SURVEY_MET', 'GIS_AREA_K': 'GIS_AREA_K', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'REP_AREA_K': 'REP_AREA_K', });
lyr_ZEE_6.set('fieldAliases', {'fid': 'fid', 'MRGID': 'MRGID', 'GEONAME': 'GEONAME', 'MRGID_TER1': 'MRGID_TER1', 'POL_TYPE': 'POL_TYPE', 'MRGID_SOV1': 'MRGID_SOV1', 'TERRITORY1': 'TERRITORY1', 'ISO_TER1': 'ISO_TER1', 'SOVEREIGN1': 'SOVEREIGN1', 'MRGID_TER2': 'MRGID_TER2', 'MRGID_SOV2': 'MRGID_SOV2', 'TERRITORY2': 'TERRITORY2', 'ISO_TER2': 'ISO_TER2', 'SOVEREIGN2': 'SOVEREIGN2', 'MRGID_TER3': 'MRGID_TER3', 'MRGID_SOV3': 'MRGID_SOV3', 'TERRITORY3': 'TERRITORY3', 'ISO_TER3': 'ISO_TER3', 'SOVEREIGN3': 'SOVEREIGN3', 'X_1': 'X_1', 'Y_1': 'Y_1', 'MRGID_EEZ': 'MRGID_EEZ', 'AREA_KM2': 'AREA_KM2', 'ISO_SOV1': 'ISO_SOV1', 'ISO_SOV2': 'ISO_SOV2', 'ISO_SOV3': 'ISO_SOV3', 'UN_SOV1': 'UN_SOV1', 'UN_SOV2': 'UN_SOV2', 'UN_SOV3': 'UN_SOV3', 'UN_TER1': 'UN_TER1', 'UN_TER2': 'UN_TER2', 'UN_TER3': 'UN_TER3', });
lyr_WORLD_EEZv11NOHOLES_3832_7.set('fieldAliases', {'fid': 'fid', 'MRGID': 'MRGID', 'GEONAME': 'GEONAME', 'MRGID_TER1': 'MRGID_TER1', 'POL_TYPE': 'POL_TYPE', 'MRGID_SOV1': 'MRGID_SOV1', 'TERRITORY1': 'TERRITORY1', 'ISO_TER1': 'ISO_TER1', 'SOVEREIGN1': 'SOVEREIGN1', 'MRGID_TER2': 'MRGID_TER2', 'MRGID_SOV2': 'MRGID_SOV2', 'TERRITORY2': 'TERRITORY2', 'ISO_TER2': 'ISO_TER2', 'SOVEREIGN2': 'SOVEREIGN2', 'MRGID_TER3': 'MRGID_TER3', 'MRGID_SOV3': 'MRGID_SOV3', 'TERRITORY3': 'TERRITORY3', 'ISO_TER3': 'ISO_TER3', 'SOVEREIGN3': 'SOVEREIGN3', 'X_1': 'X_1', 'Y_1': 'Y_1', 'MRGID_EEZ': 'MRGID_EEZ', 'AREA_KM2': 'AREA_KM2', 'ISO_SOV1': 'ISO_SOV1', 'ISO_SOV2': 'ISO_SOV2', 'ISO_SOV3': 'ISO_SOV3', 'UN_SOV1': 'UN_SOV1', 'UN_SOV2': 'UN_SOV2', 'UN_SOV3': 'UN_SOV3', 'UN_TER1': 'UN_TER1', 'UN_TER2': 'UN_TER2', 'UN_TER3': 'UN_TER3', });
lyr_ENC_Wrecks_8.set('fieldAliases', {'OBJL': 'OBJL', 'CATWRK': 'CATWRK', 'CONRAD': 'CONRAD', 'CONVIS': 'CONVIS', 'EXPSOU': 'EXPSOU', 'HEIGHT': 'HEIGHT', 'OBJNAM': 'OBJNAM', 'QUASOU': 'QUASOU', 'SOUACC': 'SOUACC', 'TECSOU': 'TECSOU', 'VALSOU': 'VALSOU', 'VERACC': 'VERACC', 'VERDAT': 'VERDAT', 'VERLEN': 'VERLEN', 'WATLEV': 'WATLEV', 'INFORM': 'INFORM', 'SCAMIN': 'SCAMIN', 'SORDAT': 'SORDAT', 'SORIND': 'SORIND', 'DSNM': 'DSNM', });
lyr_AWOIS_Wrecks_9.set('fieldAliases', {'RECRD': 'RECRD', 'VESSLTERMS': 'VESSLTERMS', 'AREA_ID': 'AREA_ID', 'CHART': 'CHART', 'LATDEC': 'LATDEC', 'LONDEC': 'LONDEC', 'GP_QUALITY': 'GP_QUALITY', 'GP_SOURCE': 'GP_SOURCE', 'DEPTH': 'DEPTH', 'SOUNDING_T': 'SOUNDING_T', 'YEARSUNK': 'YEARSUNK', 'HISTORY': 'HISTORY', 'REFERENCE': 'REFERENCE', });
lyr_WRECKS_DIFF_10.set('fieldAliases', {'inspireid': 'inspireid', 'latitude': 'latitude', 'longitude': 'longitude', 'precis_loc': 'precis_loc', 'brassiage': 'brassiage', 'precis_bra': 'precis_bra', 'long_obj': 'long_obj', 'nom': 'nom', 'caract_obj': 'caract_obj', 'circ_nauf': 'circ_nauf', 'caract_bat': 'caract_bat', 'type_obj': 'type_obj', });
lyr_ne_10m_land_3.set('fieldImages', {'featurecla': 'TextEdit', 'scalerank': 'Range', 'min_zoom': 'TextEdit', });
lyr_featurespoint_4.set('fieldImages', {'name': 'TextEdit', 'type': 'TextEdit', 'meeting': 'TextEdit', 'proposer': 'TextEdit', 'prop_year': 'Range', 'discoverer': 'TextEdit', 'disc_year': 'Range', 'history': 'TextEdit', 'comments': 'TextEdit', 'status': 'TextEdit', 'primary': 'TextEdit', });
lyr_WCMC008_CoralReef2018_Py_v4_1_4326_5.set('fieldImages', {'fid': 'TextEdit', 'LAYER_NAME': 'TextEdit', 'METADATA_I': 'TextEdit', 'ORIG_NAME': 'TextEdit', 'FAMILY': 'TextEdit', 'GENUS': 'TextEdit', 'SPECIES': 'TextEdit', 'DATA_TYPE': 'TextEdit', 'START_DATE': 'TextEdit', 'END_DATE': 'TextEdit', 'DATE_TYPE': 'TextEdit', 'VERIF': 'TextEdit', 'NAME': 'TextEdit', 'LOC_DEF': 'TextEdit', 'SURVEY_MET': 'TextEdit', 'GIS_AREA_K': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'REP_AREA_K': 'TextEdit', });
lyr_ZEE_6.set('fieldImages', {'fid': 'TextEdit', 'MRGID': 'TextEdit', 'GEONAME': 'TextEdit', 'MRGID_TER1': 'TextEdit', 'POL_TYPE': 'TextEdit', 'MRGID_SOV1': 'TextEdit', 'TERRITORY1': 'TextEdit', 'ISO_TER1': 'TextEdit', 'SOVEREIGN1': 'TextEdit', 'MRGID_TER2': 'TextEdit', 'MRGID_SOV2': 'TextEdit', 'TERRITORY2': 'TextEdit', 'ISO_TER2': 'TextEdit', 'SOVEREIGN2': 'TextEdit', 'MRGID_TER3': 'TextEdit', 'MRGID_SOV3': 'TextEdit', 'TERRITORY3': 'TextEdit', 'ISO_TER3': 'TextEdit', 'SOVEREIGN3': 'TextEdit', 'X_1': 'TextEdit', 'Y_1': 'TextEdit', 'MRGID_EEZ': 'TextEdit', 'AREA_KM2': 'TextEdit', 'ISO_SOV1': 'TextEdit', 'ISO_SOV2': 'TextEdit', 'ISO_SOV3': 'TextEdit', 'UN_SOV1': 'TextEdit', 'UN_SOV2': 'TextEdit', 'UN_SOV3': 'TextEdit', 'UN_TER1': 'TextEdit', 'UN_TER2': 'TextEdit', 'UN_TER3': 'TextEdit', });
lyr_WORLD_EEZv11NOHOLES_3832_7.set('fieldImages', {'fid': 'TextEdit', 'MRGID': 'TextEdit', 'GEONAME': 'TextEdit', 'MRGID_TER1': 'TextEdit', 'POL_TYPE': 'TextEdit', 'MRGID_SOV1': 'TextEdit', 'TERRITORY1': 'TextEdit', 'ISO_TER1': 'TextEdit', 'SOVEREIGN1': 'TextEdit', 'MRGID_TER2': 'TextEdit', 'MRGID_SOV2': 'TextEdit', 'TERRITORY2': 'TextEdit', 'ISO_TER2': 'TextEdit', 'SOVEREIGN2': 'TextEdit', 'MRGID_TER3': 'TextEdit', 'MRGID_SOV3': 'TextEdit', 'TERRITORY3': 'TextEdit', 'ISO_TER3': 'TextEdit', 'SOVEREIGN3': 'TextEdit', 'X_1': 'TextEdit', 'Y_1': 'TextEdit', 'MRGID_EEZ': 'TextEdit', 'AREA_KM2': 'TextEdit', 'ISO_SOV1': 'TextEdit', 'ISO_SOV2': 'TextEdit', 'ISO_SOV3': 'TextEdit', 'UN_SOV1': 'TextEdit', 'UN_SOV2': 'TextEdit', 'UN_SOV3': 'TextEdit', 'UN_TER1': 'TextEdit', 'UN_TER2': 'TextEdit', 'UN_TER3': 'TextEdit', });
lyr_ENC_Wrecks_8.set('fieldImages', {'OBJL': 'TextEdit', 'CATWRK': 'TextEdit', 'CONRAD': 'TextEdit', 'CONVIS': 'TextEdit', 'EXPSOU': 'TextEdit', 'HEIGHT': 'TextEdit', 'OBJNAM': 'TextEdit', 'QUASOU': 'TextEdit', 'SOUACC': 'TextEdit', 'TECSOU': 'TextEdit', 'VALSOU': 'TextEdit', 'VERACC': 'TextEdit', 'VERDAT': 'TextEdit', 'VERLEN': 'TextEdit', 'WATLEV': 'TextEdit', 'INFORM': 'TextEdit', 'SCAMIN': 'TextEdit', 'SORDAT': 'TextEdit', 'SORIND': 'TextEdit', 'DSNM': 'TextEdit', });
lyr_AWOIS_Wrecks_9.set('fieldImages', {'RECRD': 'TextEdit', 'VESSLTERMS': 'TextEdit', 'AREA_ID': 'TextEdit', 'CHART': 'TextEdit', 'LATDEC': 'TextEdit', 'LONDEC': 'TextEdit', 'GP_QUALITY': 'TextEdit', 'GP_SOURCE': 'TextEdit', 'DEPTH': 'TextEdit', 'SOUNDING_T': 'TextEdit', 'YEARSUNK': 'TextEdit', 'HISTORY': 'TextEdit', 'REFERENCE': 'TextEdit', });
lyr_WRECKS_DIFF_10.set('fieldImages', {'inspireid': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'precis_loc': 'TextEdit', 'brassiage': 'TextEdit', 'precis_bra': 'TextEdit', 'long_obj': 'TextEdit', 'nom': 'TextEdit', 'caract_obj': 'TextEdit', 'circ_nauf': 'TextEdit', 'caract_bat': 'TextEdit', 'type_obj': 'TextEdit', });
lyr_ne_10m_land_3.set('fieldLabels', {});
lyr_featurespoint_4.set('fieldLabels', {});
lyr_WCMC008_CoralReef2018_Py_v4_1_4326_5.set('fieldLabels', {});
lyr_ZEE_6.set('fieldLabels', {});
lyr_WORLD_EEZv11NOHOLES_3832_7.set('fieldLabels', {});
lyr_ENC_Wrecks_8.set('fieldLabels', {});
lyr_AWOIS_Wrecks_9.set('fieldLabels', {});
lyr_WRECKS_DIFF_10.set('fieldLabels', {});
lyr_WRECKS_DIFF_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
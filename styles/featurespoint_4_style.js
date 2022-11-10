var size = 0;
var placement = 'point';

var style_featurespoint_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    ''
    var labelText = "";
    size = 0;
    var labelFont = "7.800000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#013257";
    var bufferColor = "#fafafa";
    var bufferWidth = 0.6000000000000001;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("name") !== null) {
        labelText = String(feature.get("name"));
    }
    
    var style = [ new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];;

    return style;
};

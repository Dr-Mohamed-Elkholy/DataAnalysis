window["viz_YxJ8lbd4"]= {"name":"YxJ8lbd4","displayName":"Revenue versus browser type","dependencies":["OTC8dBI2"],"transformName":"OTC8dBI2_Source1","options":{"marker":"bar","x":{"name":"Browser","displayName":"","validName":"Browser","type":"numeric","isNumeric":true,"isDate":false,"func":"none","label":"c1","validLabel":"c1"},"y":{"name":".dummy.column.name.for.count.column","validName":".dummy.column.name.for.count.column","isNumeric":true,"isDate":false,"type":"numrows","func":"count","label":"c2","validLabel":"c2"},"size":"","color":{"name":"Revenue","displayName":"","validName":"Revenue","type":"logical","isNumeric":false,"isDate":false,"func":"aslfactor","label":"c3","validLabel":"c3"},"text":"","shape":"","facetcolumn":"","facetrow":"","barstyle":"group","barsort":"off","label":"","colh":"","rowh":"","meas":"","scatterText":"","randomSeed":"1","treatNAAsZero":"on","mapmode":"USA-states","columns":[{"name":"Administrative","type":"numeric","escapedName":"Administrative","_row":"Administrative","isNumeric":true,"isDate":false},{"name":"Administrative_Duration","type":"numeric","escapedName":"Administrative_Duration","_row":"Administrative_Duration","isNumeric":true,"isDate":false},{"name":"Informational","type":"numeric","escapedName":"Informational","_row":"Informational","isNumeric":true,"isDate":false},{"name":"Informational_Duration","type":"numeric","escapedName":"Informational_Duration","_row":"Informational_Duration","isNumeric":true,"isDate":false},{"name":"ProductRelated","type":"numeric","escapedName":"ProductRelated","_row":"ProductRelated","isNumeric":true,"isDate":false},{"name":"ProductRelated_Duration","type":"numeric","escapedName":"ProductRelated_Duration","_row":"ProductRelated_Duration","isNumeric":true,"isDate":false},{"name":"BounceRates","type":"numeric","escapedName":"BounceRates","_row":"BounceRates","isNumeric":true,"isDate":false},{"name":"ExitRates","type":"numeric","escapedName":"ExitRates","_row":"ExitRates","isNumeric":true,"isDate":false},{"name":"PageValues","type":"numeric","escapedName":"PageValues","_row":"PageValues","isNumeric":true,"isDate":false},{"name":"SpecialDay","type":"numeric","escapedName":"SpecialDay","_row":"SpecialDay","isNumeric":true,"isDate":false},{"name":"Month","type":"character","escapedName":"Month","_row":"Month","isNumeric":false,"isDate":false},{"name":"OperatingSystems","type":"numeric","escapedName":"OperatingSystems","_row":"OperatingSystems","isNumeric":true,"isDate":false},{"name":"Browser","type":"numeric","escapedName":"Browser","_row":"Browser","isNumeric":true,"isDate":false},{"name":"Region","type":"numeric","escapedName":"Region","_row":"Region","isNumeric":true,"isDate":false},{"name":"TrafficType","type":"numeric","escapedName":"TrafficType","_row":"TrafficType","isNumeric":true,"isDate":false},{"name":"VisitorType","type":"character","escapedName":"VisitorType","_row":"VisitorType","isNumeric":false,"isDate":false},{"name":"Weekend","type":"logical","escapedName":"Weekend","_row":"Weekend","isNumeric":false,"isDate":false},{"name":"Revenue","type":"logical","escapedName":"Revenue","_row":"Revenue","isNumeric":false,"isDate":false}],"data":{"c3":["TRUE","FALSE","TRUE","TRUE","TRUE","TRUE","TRUE","TRUE","TRUE","TRUE","TRUE","TRUE","TRUE","TRUE","TRUE","FALSE","FALSE","FALSE","FALSE","FALSE","FALSE","FALSE","FALSE","FALSE","FALSE","FALSE","FALSE","FALSE"],"c1":[1,1,1,2,3,4,5,6,7,8,9,10,11,12,13,1,2,3,4,5,6,7,8,9,10,11,12,13],"c2":[null,null,365,1223,5,130,86,20,6,21,0,32,1,3,16,2097,6738,100,606,381,154,43,114,1,131,5,7,45],"..nrow":[null,null,365,1223,5,130,86,20,6,21,null,32,1,3,16,2097,6738,100,606,381,154,43,114,1,131,5,7,45],"..is.order.row":["TRUE","TRUE",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]},"query":"try(jsonlite::toJSON({.dqdf <- `OTC8dBI2_Source1` ;\n  if (nrow(.dqdf)>0) {\n.dqdf %>% \ndplyr::ungroup() %>% \n(function(x){ colnames(x)<-make.unique(colnames(x)); return (x)}) %>% \ndplyr::mutate(c3=`_tam_convert_na`(`_tam_create_logical_factor`(`_tam_normalize_column_for_chart`(Revenue, FALSE)), drop.unused.levels=FALSE, na.alt.text=\"(NA)\"),c1=`_tam_normalize_column_for_chart`(Browser, FALSE),c2=1,..nrow=1) %>% \ndplyr::filter(!is.na(c3) & !is.na(c1)) %>% \ndplyr::group_by (c3,c1) %>% \ndplyr::summarise(c2=dplyr::n(),..nrow=dplyr::n()) %>% \ndplyr::ungroup() %>% \ndplyr::mutate() %>% \ntidyr::complete(c3,c1) %>% \ndplyr::group_by(c3) %>% \ndplyr::mutate(c2= ifelse(is.na(c2), 0, c2)) %>% \ndplyr::ungroup() %>% \ndplyr::ungroup() %>% \ndplyr::arrange(c3,c1) %>% \n(function(df) {   `_tam_setCurrentVizDataCache`(df, type=\"groupby\", colnames=c(\"c3\"=\"Revenue\", \"c1\"=\"Browser\", \"c2\"=\"(Number of Rows)\", \"..nrow\"=\"[remove]\"), cache.id=\"YxJ8lbd4\")\n  return (df);}) %>% \n  `_tam_add_order_rows`( target=c(\"c3\"), \"c3\", \"c1\") %>% \n `_tam_convertLogicalToCharacter`()\n  } else {\n    empty.df <- data.frame(data=numeric(0)) \n  `_tam_setCurrentVizDataCache`(empty.df, type=\"groupby\", cache.id=\"YxJ8lbd4\")\n    empty.df \n  }\n}\n, na=\"null\" , dataframe=\"columns\", digits=10))","pieHole":"55","pivotShowTotals":"on","pivotShowRowTotals":"on","_desktopVersion":"6.11.1.2","displayName":"Revenue versus browser type","sampleDataSize":0,"_pivotValueSeparator":"|||","height":500,"width":800,"colorBucketGroup":"all","xBucketGroup":"all","xEnableOtherGroup":null,"xNumGroupsToPreserve":null,"xShowOtherGroup":null,"xOtherGroupLabel":null,"xOtherGroupValues":null,"xReflineType":"none","yReflineRangeType":"none","categColorEnableOtherGroup":null,"categColorNumGroupsToPreserve":null,"categColorShowOtherGroup":null,"categColorOtherGroupLabel":null,"categColorOtherGroupValues":null,"numDecimalDigits":"","useThousandSeparator":"on","yValueOnPlotThreshold":"","yValueOnPlotFontSize":"","showNumberOfRowsInBalloon":"off","legendFontSize":"","legendShowFuncName":"off","title":"","titleFontSize":"","xAxisShowTitle":"on","xAxisTitle":"","xAxisTitleFontSize":"","xAxisShowTickLabel":"on","xAxisNumDecimalDigits":"","xAxisUseSIPrefix":"on","xAxisAutomaticNumOfTicks":"on","xAxisRange":"1,13","xAxisTickStep":"1","xAxisTickFontSize":"","yAxisShowTitle":"on","yAxisTitle":"Count","yAxisTitleFontSize":"16","yAxisShowTickLabel":"on","yAxisCurrencySymbol":"","y1AxisNumDecimalDigits":"","y1AxisUseSIPrefix":"on","yAxisRange":"","yAxisTickStep":"","yAxisIncludeZero":"on","yAxisTickFontSize":"","y2AxisShowTitle":"on","y2AxisTitle":"","y2AxisTitleFontSize":"","y2AxisShowTickLabel":"on","y2AxisCurrencySymbol":"","y2AxisNumDecimalDigits":"","y2AxisUseSIPrefix":"on","y2AxisRange":"","y2AxisTickStep":"","y2AxisIncludeZero":"on","y2AxisTickFontSize":"","axisAutoMargin":"on","marginTop":"","marginBottom":"","marginLeft":"","marginRight":"","validateNUniqueValues":"on"},"timestamp":"2022-10-27T12:32:00.720Z","updatedBy":"","thumbnail":null,"snapshot":null,"publicTitle":"","publicDescription":"","publicDataSourceURL":"","withSteps":false,"privateShare":true,"sharedURL":"","previousSharedURL":"","sharedDate":null,"publishSizeOption":null,"insightMetaInfo":{"version":1,"url":null,"isPrivate":false,"thumbnail":null,"title":"","description":"","learnMoreUrl":null,"exampleUrl":null,"sharedFileTypes":[],"withSteps":false,"dataSourceURL":""},"preprocessor":"","_tags":null,"filterCommand":{"name":"filter","conditions":[]},"variables":[],"tabIndex":21,"_isDirty":false,"_createdVersion":"","annotation":"","_tempAnnotation":"","_tempDisplayName":"","_thumbnailFileName":"","_containsInvalidColumns":null,"filename":"YxJ8lbd4.json"}
window["viz_sNl1CTo4"]= {"name":"sNl1CTo4","displayName":"st_depr","dependencies":["mqF0sCm3"],"transformName":"mqF0sCm3_FCo6uSF5","options":{"marker":"boxplot","x":{"name":"st_deper","displayName":"","validName":"st_deper","type":"numeric","isNumeric":true,"isDate":false,"func":"ascategory","label":"c1","validLabel":"c1"},"size":"","text":"","shape":"","facetcolumn":"","facetrow":"","barstyle":"stack","barsort":"off","label":"","colh":"","rowh":"","meas":"","scatterText":"","randomSeed":"1","treatNAAsZero":"on","mapmode":"USA-states","columns":[{"name":"age","type":"numeric","escapedName":"age","_row":"age","isNumeric":true,"isDate":false},{"name":"sex","type":"numeric","escapedName":"sex","_row":"sex","isNumeric":true,"isDate":false},{"name":"chest_pain","type":"numeric","escapedName":"chest_pain","_row":"chest_pain","isNumeric":true,"isDate":false},{"name":"rest_bp","type":"numeric","escapedName":"rest_bp","_row":"rest_bp","isNumeric":true,"isDate":false},{"name":"cholestrol","type":"numeric","escapedName":"cholestrol","_row":"cholestrol","isNumeric":true,"isDate":false},{"name":"fast_bld_sugar","type":"numeric","escapedName":"fast_bld_sugar","_row":"fast_bld_sugar","isNumeric":true,"isDate":false},{"name":"rest_ecg","type":"numeric","escapedName":"rest_ecg","_row":"rest_ecg","isNumeric":true,"isDate":false},{"name":"max_hr","type":"numeric","escapedName":"max_hr","_row":"max_hr","isNumeric":true,"isDate":false},{"name":"ex_angina","type":"numeric","escapedName":"ex_angina","_row":"ex_angina","isNumeric":true,"isDate":false},{"name":"st_deper","type":"numeric","escapedName":"st_deper","_row":"st_deper","isNumeric":true,"isDate":false},{"name":"slope","type":"numeric","escapedName":"slope","_row":"slope","isNumeric":true,"isDate":false},{"name":"colored_vessels","type":"numeric","escapedName":"colored_vessels","_row":"colored_vessels","isNumeric":true,"isDate":false},{"name":"thalassemia","type":"numeric","escapedName":"thalassemia","_row":"thalassemia","isNumeric":true,"isDate":false},{"name":"target","type":"numeric","escapedName":"target","_row":"target","isNumeric":true,"isDate":false}],"data":{"1":[null,0],"2":[null,0],"3":[null,0.8],"4":[null,1.6],"5":[null,6.2],"c1":["0.00 - 6.20","0.00 - 6.20"],"..is.order.row":["TRUE",null]},"query":"try(jsonlite::toJSON({.dqdf <- `mqF0sCm3_FCo6uSF5`;\n.dqdf %>% \ndplyr::ungroup() %>% \n(function(x){ colnames(x)<-make.unique(colnames(x)); return (x)}) %>% \ndplyr::mutate(c1=`_tam_normalize_column_for_chart`(st_deper, FALSE),c2=`_tam_normalize_column_for_chart`(st_deper, FALSE) ) %>% \ndplyr::filter(is.finite(c2)) %>% \ndplyr::mutate(c1=exploratory::format_cut_output(`_tam_cut`(c1, breaks=1, zero.to.center=FALSE, lower.range=NA, upper.range=NA, include.outside.range=TRUE, dig.lab=20), new.labels=NULL, decimal.digits=2, prefix=\"\", suffix=\"\")) %>% \ndplyr::ungroup() %>% \ndplyr::group_by (c1) %>% \ndplyr::summarise(`.stats` = list(grDevices::boxplot.stats(c2, coef=0)$stats)) %>% \ndplyr::ungroup()  %>% \ntidyr::unnest(`.stats`) %>% \ndplyr::group_by (c1) %>% \ndplyr::mutate(`.idx` = row_number()) %>% tidyr::spread(`.idx`, `.stats`) %>% \ndplyr::ungroup() %>% \ndplyr::arrange(c1) %>% \n(function(df) {   `_tam_setCurrentVizDataCache`(df, type=\"boxplot\", colnames=c(\"c1\"=\"st_deper\", \"c2\"=\"st_deper (2)\"), cache.id=\"sNl1CTo4\")\n  return (df);}) %>% \n  `_tam_add_order_rows`(c(\"c1\") , \"c1\") %>% \n `_tam_convertLogicalToCharacter`()\n}\n, na=\"null\" , dataframe=\"columns\", digits=10))","pieHole":"55","pivotShowTotals":"on","pivotShowRowTotals":"on","_desktopVersion":"6.10.3.1","displayName":"st_depr","sampleDataSize":0,"_pivotValueSeparator":"|||","height":500,"width":800,"colorBucketGroup":"all","xBucketGroup":"all","xEnableOtherGroup":null,"xNumGroupsToPreserve":null,"xShowOtherGroup":null,"xOtherGroupLabel":null,"xOtherGroupValues":null,"xReflineType":"none","includeOutlierY":"on","yEnableOtherGroup":null,"yNumGroupsToPreserve":null,"yShowOtherGroup":null,"yOtherGroupLabel":null,"yOtherGroupValues":null,"yReflineRangeType":"none","xBucketNumOfBuckets":"1","xBucketStep":"","xBucketCuttingPoints":"","xBucketSdThreshold":"","xBucketPctThreshold":"","xBucketLabels":"","xBucketOutlierLabels":"","xSetZeroToCenter":"off","xBucketLowerRange":"","xBucketUpperRange":"","xBucketIncludeOutsideRange":"on","xBucketType":"bucket_equal_width","enableHighlight":"on","colorRecodeEnableCreateOthers":"off","colorRecodeOthersLabel":"Others","categColorPalette":"Logi3","highlightNumItemsHighlightedOnDialog":1,"highlightOnPalette":"off","highlightDefaultColor":"#DCDEE0","highlightValues":[{"value":"y","color":"#EC5D57"}],"fillOpacity":"1.0","sortAggregationFunction":"median","categColorEnableOtherGroup":null,"categColorNumGroupsToPreserve":null,"categColorShowOtherGroup":null,"categColorOtherGroupLabel":null,"categColorOtherGroupValues":null,"y":{"name":"st_deper","displayName":"","validName":"st_deper","type":"numeric","isNumeric":true,"isDate":false,"func":"none","label":"c2","validLabel":"c2"}},"timestamp":"2022-08-31T19:34:59.198Z","updatedBy":"","thumbnail":null,"snapshot":null,"publicTitle":"","publicDescription":"","publicDataSourceURL":"","withSteps":false,"privateShare":true,"sharedURL":"","previousSharedURL":"","sharedDate":null,"publishSizeOption":null,"insightMetaInfo":{"version":1,"url":null,"isPrivate":false,"thumbnail":null,"title":"","description":"","learnMoreUrl":null,"exampleUrl":null,"sharedFileTypes":[],"withSteps":false,"dataSourceURL":""},"preprocessor":"","_tags":null,"filterCommand":{"name":"filter","conditions":[],"logicalOperation":"and"},"variables":[],"tabIndex":1,"_isDirty":false,"_createdVersion":"","annotation":"","_tempAnnotation":"","_tempDisplayName":"","_thumbnailFileName":"","_containsInvalidColumns":null,"filename":"sNl1CTo4.json"}
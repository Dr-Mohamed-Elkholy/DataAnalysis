window["viz_ClQ7hEH1"]= {"name":"ClQ7hEH1","displayName":"Browser wise seesion Distribution Count","dependencies":["OTC8dBI2"],"transformName":"OTC8dBI2_Source1","options":{"marker":"summarytable","x":{"name":"Browser","displayName":"","validName":"Browser","type":"numeric","isNumeric":true,"isDate":false,"func":"none","label":"c1","validLabel":"c1"},"y":{"name":".dummy.column.name.for.count.column","validName":".dummy.column.name.for.count.column","isNumeric":true,"isDate":false,"type":"numrows","func":"count","label":"c2","validLabel":"c2"},"size":"","color":{"name":"Browser","displayName":"","validName":"Browser","type":"numeric","isNumeric":true,"isDate":false,"func":"asnum","label":"c3","validLabel":"c3"},"text":"","shape":"","facetcolumn":"","facetrow":"","barstyle":"stack","barsort":"off","label":"","colh":"","rowh":"","meas":"","scatterText":"","randomSeed":"1","treatNAAsZero":"on","mapmode":"USA-states","columns":[{"name":"Administrative","type":"numeric","escapedName":"Administrative","_row":"Administrative","isNumeric":true,"isDate":false},{"name":"Administrative_Duration","type":"numeric","escapedName":"Administrative_Duration","_row":"Administrative_Duration","isNumeric":true,"isDate":false},{"name":"Informational","type":"numeric","escapedName":"Informational","_row":"Informational","isNumeric":true,"isDate":false},{"name":"Informational_Duration","type":"numeric","escapedName":"Informational_Duration","_row":"Informational_Duration","isNumeric":true,"isDate":false},{"name":"ProductRelated","type":"numeric","escapedName":"ProductRelated","_row":"ProductRelated","isNumeric":true,"isDate":false},{"name":"ProductRelated_Duration","type":"numeric","escapedName":"ProductRelated_Duration","_row":"ProductRelated_Duration","isNumeric":true,"isDate":false},{"name":"BounceRates","type":"numeric","escapedName":"BounceRates","_row":"BounceRates","isNumeric":true,"isDate":false},{"name":"ExitRates","type":"numeric","escapedName":"ExitRates","_row":"ExitRates","isNumeric":true,"isDate":false},{"name":"PageValues","type":"numeric","escapedName":"PageValues","_row":"PageValues","isNumeric":true,"isDate":false},{"name":"SpecialDay","type":"numeric","escapedName":"SpecialDay","_row":"SpecialDay","isNumeric":true,"isDate":false},{"name":"Month","type":"character","escapedName":"Month","_row":"Month","isNumeric":false,"isDate":false},{"name":"OperatingSystems","type":"numeric","escapedName":"OperatingSystems","_row":"OperatingSystems","isNumeric":true,"isDate":false},{"name":"Browser","type":"numeric","escapedName":"Browser","_row":"Browser","isNumeric":true,"isDate":false},{"name":"Region","type":"numeric","escapedName":"Region","_row":"Region","isNumeric":true,"isDate":false},{"name":"TrafficType","type":"numeric","escapedName":"TrafficType","_row":"TrafficType","isNumeric":true,"isDate":false},{"name":"VisitorType","type":"character","escapedName":"VisitorType","_row":"VisitorType","isNumeric":false,"isDate":false},{"name":"Weekend","type":"logical","escapedName":"Weekend","_row":"Weekend","isNumeric":false,"isDate":false},{"name":"Revenue","type":"logical","escapedName":"Revenue","_row":"Revenue","isNumeric":false,"isDate":false}],"data":[[["1","2462|||19.9675587996756"],["2","7961|||64.566098945661"],["3","105|||0.851581508515815"],["4","736|||5.96918085969181"],["5","467|||3.7875101378751"],["6","174|||1.41119221411192"],["7","49|||0.397404703974047"],["8","135|||1.09489051094891"],["9","1|||0.008110300081103"],["10","163|||1.32197891321979"],["11","6|||0.048661800486618"],["12","10|||0.08110300081103"],["13","61|||0.494728304947283"]],["r0",".pivot.measure.cell"],[13],[2],["12330|||100"],[null],[null],[null],[null],[null]],"query":"try(jsonlite::toJSON({.dqdf <- `OTC8dBI2_Source1` ;\n  if (nrow(.dqdf)>0) {\n.dqdf %>% \ndplyr::ungroup() %>% \n(function(x){ colnames(x)<-make.unique(colnames(x)); return (x)}) %>% \ndplyr::mutate(`r0`=`Browser`,`m0`=1,`m1`=1) %>% \ndplyr::mutate(`r0`=`_tam_convert_na`(`_tam_normalize_column_for_chart`(`r0`, FALSE), drop.unused.levels=FALSE, na.alt.text=\"(NA)\"),`m0`=1,`m1`=1) %>% \ndplyr::group_by(r0, .drop=TRUE) %>% \ndplyr::summarize(`m0`=dplyr::n(),`m1`=dplyr::n(),m0.nrow = dplyr::n(),m1.nrow = dplyr::n()) %>% \nungroup() %>% \ndplyr::mutate(m0 = (function(x, y){x[y==0]<-NA; return(x)})(m0,m0.nrow),m1 = (function(x, y){x[y==0]<-NA; return(x)})(m1,m1.nrow)) %>% \ndplyr::select(-m0.nrow,-m1.nrow) %>% \ndplyr::ungroup() %>% \ndplyr::mutate(`m1`=(`m1` / sum(`m1`, na.rm =!all(is.na(`m1`)))) * 100) %>% \n(function(x) { .dqdf_ctotal <<- x %>% dplyr::ungroup() %>% dplyr::group_by() %>% dplyr::summarize(`m0`=sum(as.numeric(`m0`), na.rm =!all(is.na(`m0`))),`m1`=sum(as.numeric(`m1`), na.rm =!all(is.na(`m1`)))) %>% dplyr::arrange()  %>% tidyr::unite(.pivot.col.total.cell, m0,m1, sep=\"|||\"); \n  .dqdf_ctotal<<-  .dqdf_ctotal$.pivot.col.total.cell; return (x) })  %>% \n(function(x) { .dqdf_rtotal <<- NA; return (x) })  %>% \n(function(x) { .dqdf_subtotal<<- NA; x })  %>% \n(function(x) { .dqdf_gtotal <<- NA; return (x) })  %>% \n(function(x) { \n  .dqdf_catlist <<- NA\n  return (x)}) %>% \ndplyr::mutate(m0= exploratory::impute_na(as.character(m0), type = \"value\", val = \"\"), m1= exploratory::impute_na(as.character(m1), type = \"value\", val = \"\")) %>% \ntidyr::unite(.pivot.measure.cell, m0,m1, sep=\"|||\") %>% \ndplyr::ungroup() %>% \ndplyr::mutate(r0= na_if(r0, '(NA)')) %>% dplyr::arrange(r0) %>% dplyr::mutate(r0=  forcats::fct_explicit_na(r0, na_level=\"(NA)\")) %>% \n(function(df) { \n  .nrow <- nrow(df)\n  .ncol.org <- ncol(df)\n  .ncol <- min(.ncol.org, 301)\n  `_tam_setCurrentVizDataCache`(df, type=\"pivot\", colnames=c(\"Browser\",\"Count\",\"Percentage\"), measnames=c(\"Count\",\"Percentage\"), nrowh=1, nmeas=2, ncolh=0, colorbucket=FALSE, strip.html=FALSE, cache.id=\"ClQ7hEH1\")\n  .maxcell <- 10000\n  df <- df %>% dplyr::select(1:.ncol)\n  if (.nrow * .ncol > .maxcell) {\n    .maxrows <- as.integer(.maxcell/.ncol)\n    df <- dplyr::slice(df, 1:.maxrows)\n  }\n  df <- df %>% `_tam_convertLogicalToCharacter`()\n  return (list(df, colnames(df), .nrow, .ncol.org, .dqdf_ctotal, .dqdf_rtotal, NA, NA, .dqdf_subtotal, .dqdf_catlist))\n})\n  } else {\n    empty.df <- data.frame(data=numeric(0)) \n  `_tam_setCurrentVizDataCache`(empty.df, type=\"pivot\", cache.id=\"ClQ7hEH1\")\n    empty.df \n  }\n}\n, na=\"null\" , dataframe=\"values\", digits=10))","pieHole":"55","pivotShowTotals":"on","pivotShowRowTotals":"on","_desktopVersion":"6.11.1.2","displayName":"Browser wise seesion Distribution Count","sampleDataSize":0,"_pivotValueSeparator":"|||","height":500,"width":800,"xEnableOtherGroup":null,"xNumGroupsToPreserve":null,"xShowOtherGroup":null,"xOtherGroupLabel":null,"xOtherGroupValues":null,"xReflineType":"none","yReflineRangeType":"none","numDecimalDigits":"","useThousandSeparator":"on","yValueOnPlotThreshold":"","yValueOnPlotFontSize":"","showNumberOfRowsInBalloon":"off","legendFontSize":"","legendShowFuncName":"off","title":"","titleFontSize":"","xAxisShowTitle":"on","xAxisTitle":"","xAxisTitleFontSize":"","xAxisShowTickLabel":"on","xAxisNumDecimalDigits":"","xAxisUseSIPrefix":"on","xAxisAutomaticNumOfTicks":"on","xAxisRange":"1,14","xAxisTickStep":"1","xAxisTickFontSize":"","yAxisShowTitle":"on","yAxisTitle":"Count","yAxisTitleFontSize":"16","yAxisShowTickLabel":"on","yAxisCurrencySymbol":"","y1AxisNumDecimalDigits":"","y1AxisUseSIPrefix":"on","yAxisRange":"","yAxisTickStep":"","yAxisIncludeZero":"on","yAxisTickFontSize":"","y2AxisShowTitle":"on","y2AxisTitle":"","y2AxisTitleFontSize":"","y2AxisShowTickLabel":"on","y2AxisCurrencySymbol":"","y2AxisNumDecimalDigits":"","y2AxisUseSIPrefix":"on","y2AxisRange":"","y2AxisTickStep":"","y2AxisIncludeZero":"on","y2AxisTickFontSize":"","axisAutoMargin":"on","marginTop":"","marginBottom":"","marginLeft":"","marginRight":"","validateNUniqueValues":"on","categColorEnableOtherGroup":null,"categColorNumGroupsToPreserve":null,"categColorShowOtherGroup":null,"categColorOtherGroupLabel":null,"categColorOtherGroupValues":null,"colorRecodeEnableCreateOthers":"off","colorRecodeOthersLabel":"Others","enableHighlight":"off","highlightOnPalette":"off","highlightDefaultColor":"#DCDEE0","quantColorPalette":"default","colorBucketStep":"1","rowh0EnableOtherGroup":null,"rowh0NumGroupsToPreserve":null,"rowh0ShowOtherGroup":null,"rowh0OtherGroupLabel":null,"rowh0OtherGroupValues":null,"rowh0":{"name":"Browser","displayName":"","validName":"Browser","type":"numeric","isNumeric":true,"isDate":false,"func":"none","label":"c1","validLabel":"c1","textWrap":"off","applyHeaderStyleToAllColumns":"off","applyCellWidthToAllColumns":"off"},"meas0":{"name":".dummy.column.name.for.count.column","validName":".dummy.column.name.for.count.column","isNumeric":true,"isDate":false,"type":"numrows","func":"count","label":"c2","validLabel":"c2","formattingDirection":"table_down","displayName":"Count","headerFontStyle":"bold","fontStyle":"","numberFormatting":"number","numDecimalDigits":"","currencySymbol":"","sortOrder":"","formattingType":"","enableUrl":"on","url":"","urlEncodeParameters":"off","cellWidth":"","textWrap":"off","applyHeaderStyleToAllColumns":"off","applyCellWidthToAllColumns":"off"},"meas0CompleteDirection":"table_down","meas1":{"name":".dummy.column.name.for.count.column","validName":".dummy.column.name.for.count.column","isNumeric":true,"isDate":false,"type":"numrows","func":"count","label":"c3","validLabel":"c3","displayName":"Percentage","formattingDirection":"table_down","headerFontStyle":"bold","fontStyle":"","numberFormatting":"number","numDecimalDigits":"","currencySymbol":"","sortOrder":"","formattingType":"","enableUrl":"on","url":"","urlEncodeParameters":"off","cellWidth":"","textWrap":"off","applyHeaderStyleToAllColumns":"off","applyCellWidthToAllColumns":"off"},"meas0WindowFuncDirection":"table_down","meas1WindowFuncDirection":"table_down","meas1CompleteDirection":"table_down","meas1WindowFuncGroup":"total","meas1WindowFunc":"ptotal","errHighLowEnabled":"off","pivotApplyHeaderStyleToAllColumns":"off","pivotTextWrap":"none","pivotApplyCellWidthToAllColumns":"off","rowh0BucketType":"bucket_equal_step","rowh0BucketNumOfBuckets":"","rowh0BucketStep":"1","rowh0BucketCuttingPoints":"","rowh0BucketSdThreshold":"","rowh0BucketPctThreshold":"","rowh0BucketLabels":"","rowh0BucketOutlierLabels":"","rowh0SetZeroToCenter":"off","rowh0BucketLowerRange":"","rowh0BucketUpperRange":"","pivotClientSortIndex":1,"pivotClientSortDirection":1},"timestamp":"2022-10-27T11:15:54.004Z","updatedBy":"","thumbnail":null,"snapshot":null,"publicTitle":"","publicDescription":"","publicDataSourceURL":"","withSteps":false,"privateShare":true,"sharedURL":"","previousSharedURL":"","sharedDate":null,"publishSizeOption":null,"insightMetaInfo":{"version":1,"url":null,"isPrivate":false,"thumbnail":null,"title":"","description":"","learnMoreUrl":null,"exampleUrl":null,"sharedFileTypes":[],"withSteps":false,"dataSourceURL":""},"preprocessor":"","_tags":null,"filterCommand":{"name":"filter","conditions":[]},"variables":[],"tabIndex":10,"_isDirty":false,"_createdVersion":"","annotation":"","_tempAnnotation":"","_tempDisplayName":"","_thumbnailFileName":"","_containsInvalidColumns":null,"filename":"ClQ7hEH1.json"}
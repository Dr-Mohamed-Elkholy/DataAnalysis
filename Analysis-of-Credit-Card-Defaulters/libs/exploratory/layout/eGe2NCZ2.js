window["viz_eGe2NCZ2"]= {"name":"eGe2NCZ2","displayName":" Relationship between the AGE and DEFAULT columns","dependencies":["mvF6CWj8"],"transformName":"mvF6CWj8_SkC4hMr5","options":{"marker":"summarytable","x":"","y":"","size":"","color":"","text":"","shape":"","facetcolumn":"","facetrow":"","barstyle":"stack","barsort":"off","label":"","colh":"","rowh":"","meas":"","scatterText":"","randomSeed":"1","treatNAAsZero":"on","mapmode":"USA-states","columns":[{"name":"ID","type":"numeric","escapedName":"ID","_row":"ID","isNumeric":true,"isDate":false},{"name":"LIMIT_BAL","type":"numeric","escapedName":"LIMIT_BAL","_row":"LIMIT_BAL","isNumeric":true,"isDate":false},{"name":"SEX","type":"numeric","escapedName":"SEX","_row":"SEX","isNumeric":true,"isDate":false},{"name":"EDUCATION","type":"numeric","escapedName":"EDUCATION","_row":"EDUCATION","isNumeric":true,"isDate":false},{"name":"MARRIAGE","type":"numeric","escapedName":"MARRIAGE","_row":"MARRIAGE","isNumeric":true,"isDate":false},{"name":"AGE","type":"numeric","escapedName":"AGE","_row":"AGE","isNumeric":true,"isDate":false},{"name":"PAY_1","type":"numeric","escapedName":"PAY_1","_row":"PAY_1","isNumeric":true,"isDate":false},{"name":"PAY_2","type":"numeric","escapedName":"PAY_2","_row":"PAY_2","isNumeric":true,"isDate":false},{"name":"PAY_3","type":"numeric","escapedName":"PAY_3","_row":"PAY_3","isNumeric":true,"isDate":false},{"name":"PAY_4","type":"numeric","escapedName":"PAY_4","_row":"PAY_4","isNumeric":true,"isDate":false},{"name":"PAY_5","type":"numeric","escapedName":"PAY_5","_row":"PAY_5","isNumeric":true,"isDate":false},{"name":"PAY_6","type":"numeric","escapedName":"PAY_6","_row":"PAY_6","isNumeric":true,"isDate":false},{"name":"BILL_AMT1","type":"numeric","escapedName":"BILL_AMT1","_row":"BILL_AMT1","isNumeric":true,"isDate":false},{"name":"BILL_AMT2","type":"numeric","escapedName":"BILL_AMT2","_row":"BILL_AMT2","isNumeric":true,"isDate":false},{"name":"BILL_AMT3","type":"numeric","escapedName":"BILL_AMT3","_row":"BILL_AMT3","isNumeric":true,"isDate":false},{"name":"BILL_AMT4","type":"numeric","escapedName":"BILL_AMT4","_row":"BILL_AMT4","isNumeric":true,"isDate":false},{"name":"BILL_AMT5","type":"numeric","escapedName":"BILL_AMT5","_row":"BILL_AMT5","isNumeric":true,"isDate":false},{"name":"BILL_AMT6","type":"numeric","escapedName":"BILL_AMT6","_row":"BILL_AMT6","isNumeric":true,"isDate":false},{"name":"PAY_AMT1","type":"numeric","escapedName":"PAY_AMT1","_row":"PAY_AMT1","isNumeric":true,"isDate":false},{"name":"PAY_AMT2","type":"numeric","escapedName":"PAY_AMT2","_row":"PAY_AMT2","isNumeric":true,"isDate":false},{"name":"PAY_AMT3","type":"numeric","escapedName":"PAY_AMT3","_row":"PAY_AMT3","isNumeric":true,"isDate":false},{"name":"PAY_AMT4","type":"numeric","escapedName":"PAY_AMT4","_row":"PAY_AMT4","isNumeric":true,"isDate":false},{"name":"PAY_AMT5","type":"numeric","escapedName":"PAY_AMT5","_row":"PAY_AMT5","isNumeric":true,"isDate":false},{"name":"PAY_AMT6","type":"numeric","escapedName":"PAY_AMT6","_row":"PAY_AMT6","isNumeric":true,"isDate":false},{"name":"DEFAULT","type":"numeric","escapedName":"DEFAULT","_row":"DEFAULT","isNumeric":true,"isDate":false}],"data":[[["21","0","53|||79.1044776119403"],["21","1","14|||20.8955223880597"],["22","0","391|||69.8214285714286"],["22","1","169|||30.1785714285714"],["23","0","684|||73.469387755102"],["23","1","247|||26.530612244898"],["24","0","827|||73.3806566104703"],["24","1","300|||26.6193433895297"],["25","0","884|||74.5362563237774"],["25","1","302|||25.4637436762226"],["26","0","1003|||79.8566878980892"],["26","1","253|||20.1433121019108"],["27","0","1164|||78.8083953960731"],["27","1","313|||21.1916046039269"],["28","0","1123|||79.7019162526615"],["28","1","286|||20.2980837473385"],["29","0","1292|||80.4984423676012"],["29","1","313|||19.5015576323988"],["30","0","1121|||80.3584229390681"],["30","1","274|||19.6415770609319"]],["r0","r1",".pivot.measure.cell"],[20],[3],[null],[null],[null],[null],[["21",67,100],["22",560,100],["23",931,100],["24",1127,100],["25",1186,100],["26",1256,100],["27",1477,100],["28",1409,100],["29",1605,100],["30",1395,100]],[null]],"query":"try(jsonlite::toJSON({.dqdf <- `mvF6CWj8_SkC4hMr5` %>% filter(between(AGE, 21, 30));\n  if (nrow(.dqdf)>0) {\n.dqdf %>% \ndplyr::ungroup() %>% \n(function(x){ colnames(x)<-make.unique(colnames(x)); return (x)}) %>% \ndplyr::mutate(`r0`=`AGE`,`r1`=`DEFAULT`,`m0`=1,`m1`=1) %>% \ndplyr::mutate(`r0`=`_tam_convert_na`(`_tam_normalize_column_for_chart`(`r0`, FALSE), drop.unused.levels=FALSE, na.alt.text=\"(NA)\"),`r1`=`_tam_convert_na`(`_tam_normalize_column_for_chart`(`r1`, FALSE), drop.unused.levels=FALSE, na.alt.text=\"(NA)\"),`m0`=1,`m1`=1) %>% \ndplyr::group_by(r0,r1, .drop=TRUE) %>% \ndplyr::summarize(`m0`=dplyr::n(),`m1`=dplyr::n(),m0.nrow = dplyr::n(),m1.nrow = dplyr::n()) %>% \nungroup() %>% \ndplyr::mutate(m0 = (function(x, y){x[y==0]<-NA; return(x)})(m0,m0.nrow),m1 = (function(x, y){x[y==0]<-NA; return(x)})(m1,m1.nrow)) %>% \ndplyr::select(-m0.nrow,-m1.nrow) %>% \ndplyr::group_by(r0) %>% \ndplyr::mutate(`m1`=(`m1` / sum(`m1`, na.rm =!all(is.na(`m1`)))) * 100) %>% \n(function(x) { .dqdf_ctotal <<- NA; return (x) })  %>% \n(function(x) { .dqdf_rtotal <<- NA; return (x) })  %>% \n(function(x) {.dqdf_subtotal<<- data.frame() ; x}) %>% \n(function(x) { st <- x %>%  dplyr::ungroup() %>% dplyr::group_by(`r0`) %>% dplyr::summarize(`m0`=sum(as.numeric(`m0`), na.rm =!all(is.na(`m0`))),`m1`=sum(as.numeric(`m1`), na.rm =!all(is.na(`m1`))));\n .dqdf_subtotal<<- bind_rows(.dqdf_subtotal,st); x})  %>% \n(function(x) { .dqdf_gtotal <<- NA; return (x) })  %>% \n(function(x) { \n  .dqdf_catlist <<- NA\n  return (x)}) %>% \ndplyr::mutate(m0= exploratory::impute_na(as.character(m0), type = \"value\", val = \"\"), m1= exploratory::impute_na(as.character(m1), type = \"value\", val = \"\")) %>% \ntidyr::unite(.pivot.measure.cell, m0,m1, sep=\"|||\") %>% \ndplyr::ungroup() %>% \ndplyr::mutate(r0= na_if(r0, '(NA)'),r1= na_if(r1, '(NA)')) %>% dplyr::arrange(r0,r1) %>% dplyr::mutate(r0=  forcats::fct_explicit_na(r0, na_level=\"(NA)\"),r1=  forcats::fct_explicit_na(r1, na_level=\"(NA)\")) %>% \n(function(df) { \n  .nrow <- nrow(df)\n  .ncol.org <- ncol(df)\n  .ncol <- min(.ncol.org, 302)\n  `_tam_setCurrentVizDataCache`(df, type=\"pivot\", colnames=c(\"AGE\",\"DEFAULT\",\"Count\",\"Percentage (within groups)\"), measnames=c(\"Count\",\"Percentage (within groups)\"), nrowh=2, nmeas=2, ncolh=0, colorbucket=FALSE, strip.html=FALSE, cache.id=\"eGe2NCZ2\")\n  .maxcell <- 10000\n  df <- df %>% dplyr::select(1:.ncol)\n  if (.nrow * .ncol > .maxcell) {\n    .maxrows <- as.integer(.maxcell/.ncol)\n    df <- dplyr::slice(df, 1:.maxrows)\n  }\n  df <- df %>% `_tam_convertLogicalToCharacter`()\n  return (list(df, colnames(df), .nrow, .ncol.org, .dqdf_ctotal, .dqdf_rtotal, NA, NA, .dqdf_subtotal, .dqdf_catlist))\n})\n  } else {\n    empty.df <- data.frame(data=numeric(0)) \n  `_tam_setCurrentVizDataCache`(empty.df, type=\"pivot\", cache.id=\"eGe2NCZ2\")\n    empty.df \n  }\n}\n, na=\"null\" , dataframe=\"values\", digits=10))","pieHole":"55","pivotShowTotals":"off","pivotShowRowTotals":"on","_desktopVersion":"6.11.1.2","displayName":" Relationship between the AGE and DEFAULT columns","sampleDataSize":0,"_pivotValueSeparator":"|||","height":500,"width":800,"rowh0EnableOtherGroup":null,"rowh0NumGroupsToPreserve":null,"rowh0ShowOtherGroup":null,"rowh0OtherGroupLabel":null,"rowh0OtherGroupValues":null,"rowh0":{"name":"AGE","displayName":"","validName":"AGE","type":"numeric","isNumeric":true,"isDate":false,"func":"none","label":"c1","validLabel":"c1","textWrap":"off","applyHeaderStyleToAllColumns":"off","applyCellWidthToAllColumns":"off"},"meas0":{"name":".dummy.column.name.for.count.column","validName":".dummy.column.name.for.count.column","isNumeric":true,"isDate":false,"type":"numrows","func":"count","label":"c3","validLabel":"c3","formattingDirection":"table_down","displayName":"Count","headerFontStyle":"bold","fontStyle":"","numberFormatting":"number","numDecimalDigits":"","currencySymbol":"","sortOrder":"","formattingType":null,"enableUrl":"on","url":"","urlEncodeParameters":"off","cellWidth":"","formattingTarget":"bgcolor","colorPalette":"Paired","formattingTarget-bgcolor":"on","formattingTarget-text":"on","reverseColorPalette":"off","colorSetZeroToCenter":"off","textWrap":"off","applyHeaderStyleToAllColumns":"off","applyCellWidthToAllColumns":"off"},"meas0CompleteDirection":"table_down","rowh1EnableOtherGroup":null,"rowh1NumGroupsToPreserve":null,"rowh1ShowOtherGroup":null,"rowh1OtherGroupLabel":null,"rowh1OtherGroupValues":null,"rowh1":{"name":"DEFAULT","displayName":"DEFAULT","validName":"DEFAULT","type":"numeric","isNumeric":true,"isDate":false,"func":"none","label":"c2","validLabel":"c2","formattingType":null,"formattingTarget":"bgcolor","conditionalFormattings":[{"operator":"","value":"","color":""}],"colorPalette":"Paired","headerFontStyle":"bold","fontStyle":"","numberFormatting":"number","numDecimalDigits":"","currencySymbol":"","sortOrder":"","enableUrl":"on","url":"","urlEncodeParameters":"off","cellWidth":"","formattingTarget-bgcolor":"on","formattingTarget-text":"on","reverseColorPalette":"off","textWrap":"off","applyHeaderStyleToAllColumns":"off","applyCellWidthToAllColumns":"off"},"rowh0PostFilterType":"none","pivotTotalCalcTiming":"after_aggregation","rowh0PostFilterTargetColumn":{"name":"AGE","type":"numeric","escapedName":"AGE","_row":"AGE","isNumeric":true,"isDate":false,"func":"sum","validLabel":".postfilterrowh0PostFilterTargetColumn","label":".postfilterrowh0PostFilterTargetColumn"},"rowh0PostFilterValue":"","rowh0PostFilterLowerValue":"21","rowh0PostFilterUpperValue":"30","rowh0PostFilterOperator":"between","pivotApplyHeaderStyleToAllColumns":"off","pivotTextWrap":"none","pivotApplyCellWidthToAllColumns":"off","meas1EnableOtherGroup":null,"meas1OtherGroupValues":null,"meas1":{"name":".dummy.column.name.for.count.column","validName":".dummy.column.name.for.count.column","isNumeric":true,"isDate":false,"type":"numrows","func":"count","label":"c4","validLabel":"c4","displayName":"Percentage (within groups)","formattingDirection":"table_down","formattingType":"bar","headerFontStyle":"bold","fontStyle":"","numberFormatting":"number","numDecimalDigits":"","currencySymbol":"","sortOrder":"","negativeColor":"#f7a099","positiveColor":"#99e4f5","opacity":"0.6","enableUrl":"on","url":"","urlEncodeParameters":"off","cellWidth":"","textWrap":"off","applyHeaderStyleToAllColumns":"off","applyCellWidthToAllColumns":"off"},"meas1CompleteDirection":"table_down","meas0WindowFuncDirection":"table_down","meas1WindowFuncDirection":"pane_down","meas1WindowFuncGroup":"total","meas1WindowFunc":"ptotal","errHighLowEnabled":"off","pivotShowSubtotals":"on"},"timestamp":"2022-11-06T00:21:49.526Z","updatedBy":"","thumbnail":null,"snapshot":null,"publicTitle":"","publicDescription":"","publicDataSourceURL":"","withSteps":false,"privateShare":true,"sharedURL":"","previousSharedURL":"","sharedDate":null,"publishSizeOption":null,"insightMetaInfo":{"version":1,"url":null,"isPrivate":false,"thumbnail":null,"title":"","description":"","learnMoreUrl":null,"exampleUrl":null,"sharedFileTypes":[],"withSteps":false,"dataSourceURL":""},"preprocessor":"filter(between(AGE, 21, 30))","_tags":null,"filterCommand":{"name":"filter","conditions":[{"_selected":true,"formType":"column","column":{"name":"AGE","type":"numeric","rawType":"numeric"},"operator":"between","valueBindType":"value","keepNA":"FALSE","val1":"21","val2":"30"}],"logicalOperation":"and"},"variables":[],"tabIndex":18,"_isDirty":false,"_createdVersion":"","annotation":"","_tempAnnotation":"","_tempDisplayName":"","_thumbnailFileName":"","_containsInvalidColumns":null,"filename":"eGe2NCZ2.json"}
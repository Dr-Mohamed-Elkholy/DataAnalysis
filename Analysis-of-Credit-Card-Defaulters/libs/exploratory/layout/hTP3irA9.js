window["viz_hTP3irA9"]= {"name":"hTP3irA9","displayName":"Cross-tabulation between the DEFAULT and MARRIAGE columns","dependencies":["mvF6CWj8"],"transformName":"mvF6CWj8_SkC4hMr5","options":{"marker":"summarytable","x":"","y":"","size":"","color":"","text":"","shape":"","facetcolumn":"","facetrow":"","barstyle":"stack","barsort":"off","label":"","colh":"","rowh":"","meas":"","scatterText":"","randomSeed":"1","treatNAAsZero":"on","mapmode":"USA-states","columns":[{"name":"ID","type":"numeric","escapedName":"ID","_row":"ID","isNumeric":true,"isDate":false},{"name":"LIMIT_BAL","type":"numeric","escapedName":"LIMIT_BAL","_row":"LIMIT_BAL","isNumeric":true,"isDate":false},{"name":"SEX","type":"numeric","escapedName":"SEX","_row":"SEX","isNumeric":true,"isDate":false},{"name":"EDUCATION","type":"numeric","escapedName":"EDUCATION","_row":"EDUCATION","isNumeric":true,"isDate":false},{"name":"MARRIAGE","type":"numeric","escapedName":"MARRIAGE","_row":"MARRIAGE","isNumeric":true,"isDate":false},{"name":"AGE","type":"numeric","escapedName":"AGE","_row":"AGE","isNumeric":true,"isDate":false},{"name":"PAY_1","type":"numeric","escapedName":"PAY_1","_row":"PAY_1","isNumeric":true,"isDate":false},{"name":"PAY_2","type":"numeric","escapedName":"PAY_2","_row":"PAY_2","isNumeric":true,"isDate":false},{"name":"PAY_3","type":"numeric","escapedName":"PAY_3","_row":"PAY_3","isNumeric":true,"isDate":false},{"name":"PAY_4","type":"numeric","escapedName":"PAY_4","_row":"PAY_4","isNumeric":true,"isDate":false},{"name":"PAY_5","type":"numeric","escapedName":"PAY_5","_row":"PAY_5","isNumeric":true,"isDate":false},{"name":"PAY_6","type":"numeric","escapedName":"PAY_6","_row":"PAY_6","isNumeric":true,"isDate":false},{"name":"BILL_AMT1","type":"numeric","escapedName":"BILL_AMT1","_row":"BILL_AMT1","isNumeric":true,"isDate":false},{"name":"BILL_AMT2","type":"numeric","escapedName":"BILL_AMT2","_row":"BILL_AMT2","isNumeric":true,"isDate":false},{"name":"BILL_AMT3","type":"numeric","escapedName":"BILL_AMT3","_row":"BILL_AMT3","isNumeric":true,"isDate":false},{"name":"BILL_AMT4","type":"numeric","escapedName":"BILL_AMT4","_row":"BILL_AMT4","isNumeric":true,"isDate":false},{"name":"BILL_AMT5","type":"numeric","escapedName":"BILL_AMT5","_row":"BILL_AMT5","isNumeric":true,"isDate":false},{"name":"BILL_AMT6","type":"numeric","escapedName":"BILL_AMT6","_row":"BILL_AMT6","isNumeric":true,"isDate":false},{"name":"PAY_AMT1","type":"numeric","escapedName":"PAY_AMT1","_row":"PAY_AMT1","isNumeric":true,"isDate":false},{"name":"PAY_AMT2","type":"numeric","escapedName":"PAY_AMT2","_row":"PAY_AMT2","isNumeric":true,"isDate":false},{"name":"PAY_AMT3","type":"numeric","escapedName":"PAY_AMT3","_row":"PAY_AMT3","isNumeric":true,"isDate":false},{"name":"PAY_AMT4","type":"numeric","escapedName":"PAY_AMT4","_row":"PAY_AMT4","isNumeric":true,"isDate":false},{"name":"PAY_AMT5","type":"numeric","escapedName":"PAY_AMT5","_row":"PAY_AMT5","isNumeric":true,"isDate":false},{"name":"PAY_AMT6","type":"numeric","escapedName":"PAY_AMT6","_row":"PAY_AMT6","isNumeric":true,"isDate":false},{"name":"DEFAULT","type":"numeric","escapedName":"DEFAULT","_row":"DEFAULT","isNumeric":true,"isDate":false}],"data":[[["0","0","90.7407407407407"],["0","1","9.25925925925926"],["1","0","76.5282963613734"],["1","1","23.4717036386265"],["2","0","79.071661237785"],["2","1","20.928338762215"],["3","0","73.9938080495356"],["3","1","26.0061919504644"]],["r0","r1",".pivot.measure.cell"],[8],[3],[null],[null],[null],[null],[["0",100],["1",100],["2",100],["3",100]],[null]],"query":"try(jsonlite::toJSON({.dqdf <- `mvF6CWj8_SkC4hMr5` ;\n  if (nrow(.dqdf)>0) {\n.dqdf %>% \ndplyr::ungroup() %>% \n(function(x){ colnames(x)<-make.unique(colnames(x)); return (x)}) %>% \ndplyr::mutate(`r0`=`MARRIAGE`,`r1`=`DEFAULT`,`m0`=1) %>% \ndplyr::mutate(`r0`=`_tam_convert_na`(`_tam_normalize_column_for_chart`(`r0`, FALSE), drop.unused.levels=FALSE, na.alt.text=\"(NA)\"),`r1`=`_tam_convert_na`(`_tam_normalize_column_for_chart`(`r1`, FALSE), drop.unused.levels=FALSE, na.alt.text=\"(NA)\"),`m0`=1) %>% \ndplyr::group_by(r0,r1, .drop=TRUE) %>% \ndplyr::summarize(`m0`=dplyr::n(),m0.nrow = dplyr::n()) %>% \nungroup() %>% \ndplyr::mutate(m0 = (function(x, y){x[y==0]<-NA; return(x)})(m0,m0.nrow)) %>% \ndplyr::select(-m0.nrow) %>% \ndplyr::group_by(r0) %>% \ndplyr::mutate(`m0`=(`m0` / sum(`m0`, na.rm =!all(is.na(`m0`)))) * 100) %>% \n(function(x) { .dqdf_ctotal <<- NA; return (x) })  %>% \n(function(x) { .dqdf_rtotal <<- NA; return (x) })  %>% \n(function(x) {.dqdf_subtotal<<- data.frame() ; x}) %>% \n(function(x) { st <- x %>%  dplyr::ungroup() %>% dplyr::group_by(`r0`) %>% dplyr::summarize(`m0`=sum(as.numeric(`m0`), na.rm =!all(is.na(`m0`))));\n .dqdf_subtotal<<- bind_rows(.dqdf_subtotal,st); x})  %>% \n(function(x) { .dqdf_gtotal <<- NA; return (x) })  %>% \n(function(x) { \n  .dqdf_catlist <<- NA\n  return (x)}) %>% \ndplyr::mutate(m0= exploratory::impute_na(as.character(m0), type = \"value\", val = \"\")) %>% \ntidyr::unite(.pivot.measure.cell, m0, sep=\"|||\") %>% \ndplyr::ungroup() %>% \ndplyr::mutate(r0= na_if(r0, '(NA)'),r1= na_if(r1, '(NA)')) %>% dplyr::arrange(r0,r1) %>% dplyr::mutate(r0=  forcats::fct_explicit_na(r0, na_level=\"(NA)\"),r1=  forcats::fct_explicit_na(r1, na_level=\"(NA)\")) %>% \n(function(df) { \n  .nrow <- nrow(df)\n  .ncol.org <- ncol(df)\n  .ncol <- min(.ncol.org, 302)\n  `_tam_setCurrentVizDataCache`(df, type=\"pivot\", colnames=c(\"MARRIAGE\",\"DEFAULT\",\"Percentage\"), measnames=c(\"Percentage\"), nrowh=2, nmeas=1, ncolh=0, colorbucket=FALSE, strip.html=FALSE, cache.id=\"hTP3irA9\")\n  .maxcell <- 10000\n  df <- df %>% dplyr::select(1:.ncol)\n  if (.nrow * .ncol > .maxcell) {\n    .maxrows <- as.integer(.maxcell/.ncol)\n    df <- dplyr::slice(df, 1:.maxrows)\n  }\n  df <- df %>% `_tam_convertLogicalToCharacter`()\n  return (list(df, colnames(df), .nrow, .ncol.org, .dqdf_ctotal, .dqdf_rtotal, NA, NA, .dqdf_subtotal, .dqdf_catlist))\n})\n  } else {\n    empty.df <- data.frame(data=numeric(0)) \n  `_tam_setCurrentVizDataCache`(empty.df, type=\"pivot\", cache.id=\"hTP3irA9\")\n    empty.df \n  }\n}\n, na=\"null\" , dataframe=\"values\", digits=10))","pieHole":"55","pivotShowTotals":"off","pivotShowRowTotals":"on","_desktopVersion":"6.11.1.2","displayName":"Cross-tabulation between the DEFAULT and MARRIAGE columns","sampleDataSize":0,"_pivotValueSeparator":"|||","height":500,"width":800,"rowh0EnableOtherGroup":null,"rowh0NumGroupsToPreserve":null,"rowh0ShowOtherGroup":null,"rowh0OtherGroupLabel":null,"rowh0OtherGroupValues":null,"rowh0":{"name":"MARRIAGE","displayName":"","validName":"MARRIAGE","type":"numeric","isNumeric":true,"isDate":false,"func":"none","label":"c1","validLabel":"c1","textWrap":"off","applyHeaderStyleToAllColumns":"off","applyCellWidthToAllColumns":"off"},"meas0":{"name":".dummy.column.name.for.count.column","validName":".dummy.column.name.for.count.column","isNumeric":true,"isDate":false,"type":"numrows","func":"count","label":"c3","validLabel":"c3","formattingDirection":"table_down_across","displayName":"Percentage","formattingType":"bar","headerFontStyle":"bold","fontStyle":"","numberFormatting":"number","numDecimalDigits":"","currencySymbol":"","sortOrder":"","enableUrl":"on","url":"","urlEncodeParameters":"off","cellWidth":"","negativeColor":"#f7a099","positiveColor":"#99e4f5","opacity":"0.6","textWrap":"off","applyHeaderStyleToAllColumns":"off","applyCellWidthToAllColumns":"off"},"meas0CompleteDirection":"table_down_across","rowh1EnableOtherGroup":null,"rowh1NumGroupsToPreserve":null,"rowh1ShowOtherGroup":null,"rowh1OtherGroupLabel":null,"rowh1OtherGroupValues":null,"rowh1":{"name":"DEFAULT","displayName":"","validName":"DEFAULT","type":"numeric","isNumeric":true,"isDate":false,"func":"none","label":"c2","validLabel":"c2","textWrap":"off","applyHeaderStyleToAllColumns":"off","applyCellWidthToAllColumns":"off"},"meas0WindowFuncGroup":"total","meas0WindowFunc":"ptotal","errHighLowEnabled":"off","meas0WindowFuncDirection":"pane_down","pivotShowSubtotals":"on","pivotApplyHeaderStyleToAllColumns":"off","pivotTextWrap":"none","pivotApplyCellWidthToAllColumns":"off","rowh1ValidateNUniqueValues":"on"},"timestamp":"2022-11-06T00:21:49.405Z","updatedBy":"","thumbnail":null,"snapshot":null,"publicTitle":"","publicDescription":"","publicDataSourceURL":"","withSteps":false,"privateShare":true,"sharedURL":"","previousSharedURL":"","sharedDate":null,"publishSizeOption":null,"insightMetaInfo":{"version":1,"url":null,"isPrivate":false,"thumbnail":null,"title":"","description":"","learnMoreUrl":null,"exampleUrl":null,"sharedFileTypes":[],"withSteps":false,"dataSourceURL":""},"preprocessor":"","_tags":null,"filterCommand":{"name":"filter","conditions":[]},"variables":[],"tabIndex":15,"_isDirty":false,"_createdVersion":"","annotation":"","_tempAnnotation":"","_tempDisplayName":"","_thumbnailFileName":"","_containsInvalidColumns":null,"filename":"hTP3irA9.json"}
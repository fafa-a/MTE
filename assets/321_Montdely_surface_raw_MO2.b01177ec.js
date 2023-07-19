const r=`date,value\r
2017-01-26,313300\r
2017-02-05,313300\r
2017-02-15,324300\r
2017-02-22,329500\r
2017-02-25,330500\r
2017-03-04,332700\r
2017-03-07,330700\r
2017-03-17,348900\r
2017-04-06,377400\r
2017-04-23,377300\r
2017-05-16,374700\r
2017-05-23,372100\r
2017-05-26,375300\r
2017-06-02,382500\r
2017-06-05,383400\r
2017-06-12,387800\r
2017-07-05,373000\r
2017-07-07,374000\r
2017-07-12,374000\r
2017-07-17,369300\r
2017-07-22,366900\r
2017-07-25,366900\r
2017-07-27,367200\r
2017-08-14,333000\r
2017-08-16,333000\r
2017-08-19,333000\r
2017-08-21,335200\r
2017-08-24,335200\r
2017-08-26,325300\r
2017-08-29,325300\r
2017-09-05,302900\r
2017-09-13,313200\r
2017-09-20,319200\r
2017-09-23,304600\r
2017-09-28,316600\r
2017-10-03,300000\r
2017-10-08,283000\r
2017-10-10,297100\r
2017-10-13,286500\r
2017-10-15,286500\r
2017-10-18,286500\r
2017-10-20,294500\r
2017-10-23,285200\r
2017-11-07,276200\r
2017-11-12,276200\r
2017-11-14,276600\r
2017-11-17,278300\r
2017-11-19,280600\r
2017-11-22,273000\r
2017-11-24,281200\r
2017-11-27,282900\r
2017-11-29,266000\r
2017-12-02,291600\r
2018-01-01,331700\r
2018-01-03,331700\r
2018-01-08,331700\r
2018-01-11,331700\r
2018-01-31,366300\r
2018-02-02,366300\r
2018-02-07,366300\r
2018-02-10,357200\r
2018-02-15,409300\r
2018-02-22,409300\r
2018-02-25,438700\r
2018-02-27,451400\r
2018-03-02,445300\r
2018-03-07,445300\r
2018-03-09,450100\r
2018-04-18,452700\r
2018-04-21,454200\r
2018-04-26,454200\r
2018-05-11,439700\r
2018-05-13,439700\r
2018-05-21,455700\r
2018-05-23,455700\r
2018-05-26,460900\r
2018-06-02,439100\r
2018-06-25,451700\r
2018-06-27,451700\r
2018-07-02,459100\r
2018-07-07,456000\r
2018-07-10,456000\r
2018-07-25,454500\r
2018-07-27,453900\r
2018-08-06,444900\r
2018-08-11,452900\r
2018-08-14,454100\r
2018-08-16,454100\r
2018-08-26,434500\r
2018-08-29,434500\r
2018-08-31,429000\r
2018-09-03,433200\r
2018-09-05,413700\r
2018-09-08,425300\r
2018-09-10,413200\r
2018-09-13,413200\r
2018-09-23,396100\r
2018-09-25,400400\r
2018-09-28,398200\r
2018-09-30,398200\r
2018-10-03,404100\r
2018-10-05,397700\r
2018-10-10,414600\r
2018-10-13,393200\r
2018-10-23,396800\r
2018-10-25,397600\r
2018-11-04,380600\r
2018-11-12,387900\r
2018-11-14,387900\r
2018-11-17,398700\r
2018-11-22,398700\r
2018-11-24,388100\r
2018-11-27,385500\r
2018-11-29,390800\r
2018-12-02,390800\r
2018-12-04,390800\r
2018-12-07,380600\r
2018-12-09,395200\r
2018-12-12,361600\r
2018-12-17,361600\r
2018-12-27,393200\r
2018-12-29,390800\r
2019-01-11,400100\r
2019-01-16,403000\r
2019-01-18,403000\r
2019-01-23,410300\r
2019-01-26,410300\r
2019-01-31,403300\r
2019-02-12,368300\r
2019-02-15,417700\r
2019-02-17,428900\r
2019-02-20,423300\r
2019-02-22,426100\r
2019-02-25,427800\r
2019-02-27,430500\r
2019-03-02,436600\r
2019-03-04,427500\r
2019-03-07,440800\r
2019-03-12,435300\r
2019-03-14,440800\r
2019-03-17,434300\r
2019-03-22,435800\r
2019-03-24,431300\r
2019-03-27,431100\r
2019-03-29,432800\r
2019-04-01,434300\r
2019-04-13,444900\r
2019-05-01,427500\r
2019-05-06,441100\r
2019-05-13,438500\r
2019-05-16,445400\r
2019-05-23,460000\r
2019-05-28,460000\r
2019-05-31,467600\r
2019-06-02,455200\r
2019-06-12,455200\r
2019-06-15,455200\r
2019-06-17,436700\r
2019-06-22,436700\r
2019-06-25,436700\r
2019-06-27,445000\r
2019-06-30,445000\r
2019-07-05,454900\r
2019-07-07,454900\r
2019-07-10,445500\r
2019-07-12,448800\r
2019-07-15,448500\r
2019-07-20,448500\r
2019-07-22,438000\r
2019-07-25,430900\r
2019-08-01,427700\r
2019-08-04,416400\r
2019-08-06,416400\r
2019-08-09,409100\r
2019-08-14,398100\r
2019-08-16,399600\r
2019-08-21,386900\r
2019-08-24,391500\r
2019-08-26,390800\r
2019-08-29,389300\r
2019-08-31,386500\r
2019-09-03,382700\r
2019-09-05,382700\r
2019-09-08,382700\r
2019-09-13,380700\r
2019-09-15,381700\r
2019-09-18,375200\r
2019-09-20,376500\r
2019-09-28,376500\r
2019-09-30,384100\r
2019-10-03,370700\r
2019-10-05,381500\r
2019-10-08,367400\r
2019-10-10,367400\r
2019-10-13,343500\r
2019-10-15,343500\r
2019-10-25,342100\r
2019-10-30,343400\r
2019-11-04,338900\r
2019-11-09,338900\r
2019-11-12,345600\r
2019-11-17,341900\r
2019-11-19,342900\r
2019-11-24,288900\r
2019-11-27,364500\r
2019-11-29,364500\r
2019-12-02,364500\r
2019-12-07,364500\r
2019-12-09,364500\r
2019-12-14,315600\r
2019-12-17,315600\r
2019-12-19,315600\r
2019-12-22,315600\r
2019-12-27,396700\r
2019-12-29,397600\r
2020-01-06,379300\r
2020-01-08,390700\r
2020-01-11,393700\r
2020-01-16,388700\r
2020-01-18,388700\r
2020-01-23,394000\r
2020-01-26,394300\r
2020-01-28,387300\r
2020-01-31,387300\r
2020-02-15,403000\r
2020-02-17,403000\r
2020-02-20,410700\r
2020-02-22,408500\r
2020-02-27,408500\r
2020-03-01,411900\r
2020-03-08,424700\r
2020-03-11,434200\r
2020-03-18,431000\r
2020-03-21,438500\r
2020-03-26,443300\r
2020-03-28,458400\r
2020-04-05,447800\r
2020-04-10,440900\r
2020-04-15,428600\r
2020-04-25,436300\r
2020-05-07,436200\r
2020-05-17,440600\r
2020-05-20,451600\r
2020-05-22,445100\r
2020-05-25,453300\r
2020-05-27,453900\r
2020-05-30,453300\r
2020-06-24,453500\r
2020-06-26,453500\r
2020-07-01,453500\r
2020-07-04,453600\r
2020-07-06,453600\r
2020-07-09,459900\r
2020-07-11,440400\r
2020-07-14,448700\r
2020-07-16,448700\r
2020-07-19,426800\r
2020-07-21,425900\r
2020-07-24,427300\r
2020-07-26,423100\r
2020-07-31,422800\r
2020-08-03,422800\r
2020-08-05,414000\r
2020-08-08,403600\r
2020-08-10,388900\r
2020-08-13,388900\r
2020-08-15,382800\r
2020-08-20,376300\r
2020-08-23,381700\r
2020-08-25,370100\r
2020-08-30,357500\r
2020-09-02,363400\r
2020-09-04,339100\r
2020-09-07,346200\r
2020-09-12,325400\r
2020-09-14,310900\r
2020-09-17,315600\r
2020-09-19,315600\r
2020-09-27,311300\r
2020-09-29,315100\r
2020-10-17,275500\r
2020-10-19,275500\r
2020-10-24,287900\r
2020-10-27,287900\r
2020-10-29,287900\r
2020-11-01,276200\r
2020-11-08,283200\r
2020-11-11,269100\r
2020-11-13,269100\r
2020-11-16,269100\r
2020-11-18,283700\r
2020-11-21,279500\r
2020-11-23,284300\r
2020-11-26,281200\r
2020-12-03,287000\r
2020-12-11,284600\r
2021-02-11,434400\r
2021-02-14,437900\r
2021-02-16,437900\r
2021-02-19,425400\r
2021-02-24,426900\r
2021-03-01,429900\r
2021-03-23,438300\r
2021-03-26,438300\r
2021-03-28,439900\r
2021-03-31,436400\r
2021-04-02,436400\r
2021-04-05,429000\r
2021-04-07,437400\r
2021-04-12,443100\r
2021-04-15,434700\r
2021-04-20,437300\r
2021-04-22,439800\r
2021-05-27,453300\r
2021-05-30,452100\r
2021-06-09,443400\r
2021-06-14,453600\r
2021-06-16,444700\r
2021-06-19,444700\r
2021-06-21,460300\r
2021-06-24,460300\r
2021-06-26,442400\r
2021-06-29,438300\r
2021-07-01,438100\r
2021-07-16,440900\r
2021-07-19,438900\r
2021-07-21,426400\r
2021-07-24,427400\r
2021-07-29,427600\r
2021-08-05,405200\r
2021-08-10,413300\r
2021-08-13,413300\r
2021-08-15,413300\r
2021-08-30,369400\r
2021-10-04,325400\r
2021-10-07,339600\r
2021-10-09,339600\r
2021-10-12,335900\r
2021-10-14,339500\r
2021-10-17,339400\r
2021-10-19,345900\r
2021-10-22,345900\r
2021-10-24,343900\r
2021-10-27,341200\r
2021-11-06,327300\r
2021-12-16,370600\r
2021-12-18,383000\r
2021-12-21,386300\r
2021-12-23,386900\r
2021-12-26,386000\r
2022-01-12,444200\r
2022-01-15,452600\r
2022-01-17,452600\r
2022-01-20,452600\r
2022-01-22,429200\r
2022-01-25,428900\r
2022-01-27,426400\r
2022-01-30,441400\r
2022-02-01,441400\r
2022-02-06,440200\r
2022-02-09,444100\r
2022-02-11,451700\r
2022-02-14,451700\r
2022-02-24,441500\r
2022-02-26,443700\r
2022-03-01,435100\r
2022-03-03,438200\r
2022-04-05,460200\r
2022-04-10,460200\r
2022-04-12,460200\r
2022-04-15,460200\r
2022-04-25,450300\r
2022-04-27,450300\r
2022-05-15,442900\r
2022-05-17,449700\r
2022-05-20,446300\r
2022-05-22,447600\r
2022-05-27,445700\r
2022-05-30,433100\r
2022-06-29,440000\r
2022-07-01,442900\r
2022-07-04,442900\r
2022-07-09,442900\r
2022-07-11,424300\r
2022-07-14,430100\r
2022-07-16,419400\r
2022-07-19,420000\r
2022-07-21,418000\r
2022-07-24,417700\r
2022-07-26,417100\r
2022-07-31,410100\r
2022-08-03,375000\r
2022-08-05,375000\r
2022-08-08,377400\r
2022-08-10,368500\r
2022-08-13,368500\r
2022-08-15,363800\r
2022-08-20,355400\r
2022-08-23,335500\r
2022-08-25,325500\r
2022-08-28,317300\r
2022-08-30,318800\r
2022-09-04,314100\r
2022-09-09,317300\r
2022-09-22,262900\r
2022-10-02,267700\r
2022-10-04,269700\r
2022-10-07,267300\r
2022-10-09,269200\r
2022-10-12,269200\r
2022-10-14,272000\r
2022-10-22,258400\r
2022-11-01,258400\r
2022-11-06,251100\r
2022-11-08,251100\r
2022-11-11,245700\r
2022-11-13,245000\r
2022-11-16,248900\r
2022-11-18,244200\r
2022-11-26,242800\r
2022-12-21,253400\r
2022-12-23,253400\r
2022-12-26,270400\r
2022-12-28,252300\r
2023-02-04,262700\r
2023-02-06,262700\r
2023-02-09,266100\r
2023-02-11,266000\r
2023-02-14,265500\r
2023-02-16,268700\r
2023-02-19,268700\r
2023-02-21,267600\r
2023-02-24,266500\r
2023-03-16,267000\r
2023-03-23,267000\r
2023-03-28,283500\r
2023-04-02,283500\r
2023-04-05,294000\r
2023-04-07,285800\r
2023-04-10,293900\r
2023-04-12,293900\r
2023-04-15,293900\r
2023-04-17,292000\r
2023-04-20,287000\r
2023-04-27,287000\r
2023-05-02,325500\r
2023-05-05,325500\r
2023-05-10,325500\r
2023-06-24,380000\r
2023-07-06,380100\r
2023-07-09,380100\r
`;export{r as default};

const r=`date,value\r
2017-01-04,17500\r
2017-01-07,44100\r
2017-01-14,31400\r
2017-02-16,191500\r
2017-02-23,195900\r
2017-02-26,216600\r
2017-03-05,241700\r
2017-03-08,243400\r
2017-03-15,256500\r
2017-03-18,273500\r
2017-03-25,276400\r
2017-03-28,321500\r
2017-04-04,335400\r
2017-04-07,334900\r
2017-04-14,356300\r
2017-04-17,364800\r
2017-05-07,421700\r
2017-05-14,419000\r
2017-05-17,420700\r
2017-05-24,416900\r
2017-05-27,424000\r
2017-06-03,419100\r
2017-06-06,431000\r
2017-06-13,427000\r
2017-06-16,437000\r
2017-06-23,437000\r
2017-06-26,435000\r
2017-07-01,426900\r
2017-07-03,405300\r
2017-07-06,409500\r
2017-07-08,401900\r
2017-07-11,391300\r
2017-07-13,382000\r
2017-07-18,379100\r
2017-07-21,371700\r
2017-07-23,349000\r
2017-07-26,337700\r
2017-07-28,337800\r
2017-07-31,323700\r
2017-08-02,310800\r
2017-08-05,300900\r
2017-08-07,288700\r
2017-08-12,262000\r
2017-08-15,261200\r
2017-08-17,252200\r
2017-08-20,247900\r
2017-08-22,240900\r
2017-08-25,232000\r
2017-08-27,231600\r
2017-08-30,224700\r
2017-09-01,230400\r
2017-09-04,221200\r
2017-09-09,209800\r
2017-09-14,197800\r
2017-09-16,197800\r
2017-09-19,197800\r
2017-09-21,193200\r
2017-09-24,193200\r
2017-10-11,154400\r
2017-10-14,154400\r
2017-10-16,145800\r
2017-10-19,144400\r
2017-10-21,130200\r
2017-10-24,119700\r
2017-10-26,120000\r
2017-10-31,111200\r
2017-11-03,107600\r
2017-11-05,109400\r
2017-11-08,104500\r
2017-11-18,106300\r
2017-11-20,107700\r
2017-11-23,101400\r
2017-11-28,108100\r
2017-11-30,107900\r
2017-12-03,106700\r
2017-12-05,106200\r
2017-12-13,128400\r
2017-12-18,127100\r
2017-12-20,127100\r
2017-12-23,173400\r
2017-12-25,172700\r
2017-12-28,188200\r
2017-12-30,188200\r
2018-01-02,202600\r
2018-01-04,202600\r
2018-01-14,245600\r
2018-01-17,256200\r
2018-01-19,256200\r
2018-01-22,253000\r
2018-01-24,253000\r
2018-01-27,257100\r
2018-02-03,271500\r
2018-02-08,314100\r
2018-02-11,303800\r
2018-02-13,311100\r
2018-02-16,310900\r
2018-02-18,310900\r
2018-03-13,390700\r
2018-03-18,390700\r
2018-03-23,390700\r
2018-04-02,419900\r
2018-04-07,419900\r
2018-04-12,407100\r
2018-04-17,408400\r
2018-04-19,424100\r
2018-04-22,414500\r
2018-04-24,414500\r
2018-04-27,422700\r
2018-04-29,420200\r
2018-05-07,434900\r
2018-05-09,427200\r
2018-05-19,431100\r
2018-05-22,430300\r
2018-05-29,416800\r
2018-06-03,409200\r
2018-06-08,409200\r
2018-06-13,409200\r
2018-06-16,428900\r
2018-06-18,432700\r
2018-06-21,421800\r
2018-06-26,426800\r
2018-06-28,419000\r
2018-07-01,417600\r
2018-07-03,425000\r
2018-07-06,418200\r
2018-07-08,424500\r
2018-07-11,429800\r
2018-07-13,431700\r
2018-07-18,430300\r
2018-07-21,417600\r
2018-07-23,412200\r
2018-07-26,403100\r
2018-07-28,401300\r
2018-07-31,399600\r
2018-08-02,391000\r
2018-08-05,385300\r
2018-08-07,379600\r
2018-08-10,379900\r
2018-08-12,368100\r
2018-08-17,328700\r
2018-08-20,328100\r
2018-08-22,324200\r
2018-08-25,323100\r
2018-08-27,318000\r
2018-08-30,298600\r
2018-09-01,283300\r
2018-09-06,273100\r
2018-09-09,261300\r
2018-09-11,255200\r
2018-09-14,245700\r
2018-09-16,245700\r
2018-09-19,245700\r
2018-09-21,242900\r
2018-09-24,227700\r
2018-09-26,230300\r
2018-09-29,236000\r
2018-10-01,236000\r
2018-10-06,237300\r
2018-10-09,237300\r
2018-10-14,249400\r
2018-10-19,277400\r
2018-10-21,248800\r
2018-10-24,253400\r
2018-10-26,247900\r
2018-11-28,275800\r
2018-12-03,287400\r
2018-12-05,276800\r
2018-12-08,279100\r
2018-12-10,279400\r
2018-12-15,274900\r
2018-12-18,276600\r
2018-12-23,284000\r
2018-12-25,280600\r
2018-12-28,288000\r
2019-01-02,291700\r
2019-01-04,291700\r
2019-01-07,310500\r
2019-01-09,301800\r
2019-01-12,302700\r
2019-01-14,299500\r
2019-01-17,299500\r
2019-01-22,304700\r
2019-01-24,300600\r
2019-01-29,325600\r
2019-02-03,323400\r
2019-02-06,362900\r
2019-02-08,362900\r
2019-02-11,362900\r
2019-02-13,350800\r
2019-02-16,356700\r
2019-02-18,359600\r
2019-02-21,359600\r
2019-02-23,361200\r
2019-02-26,361100\r
2019-02-28,368500\r
2019-03-03,370100\r
2019-03-08,387800\r
2019-03-10,387800\r
2019-03-18,362400\r
2019-03-23,398500\r
2019-03-25,408700\r
2019-03-28,400700\r
2019-03-30,403700\r
2019-04-02,400000\r
2019-04-07,400000\r
2019-04-09,395900\r
2019-04-12,401000\r
2019-04-14,401800\r
2019-04-17,401800\r
2019-04-19,400800\r
2019-04-27,420700\r
2019-04-29,417600\r
2019-05-02,415300\r
2019-05-07,423200\r
2019-05-09,427200\r
2019-05-14,429700\r
2019-05-19,424500\r
2019-05-24,448000\r
2019-05-29,446900\r
2019-06-01,434100\r
2019-06-03,434900\r
2019-06-06,434900\r
2019-06-11,427400\r
2019-06-13,427800\r
2019-06-18,442200\r
2019-06-21,440200\r
2019-06-23,440200\r
2019-06-26,437500\r
2019-06-28,435500\r
2019-07-01,426600\r
2019-07-03,425500\r
2019-07-06,422400\r
2019-07-08,417000\r
2019-07-11,408200\r
2019-07-13,390600\r
2019-07-16,377600\r
2019-07-18,368800\r
2019-07-21,356300\r
2019-07-23,328700\r
2019-07-26,319900\r
2019-07-28,322200\r
2019-07-31,320800\r
2019-08-02,312000\r
2019-08-05,301200\r
2019-08-07,297900\r
2019-08-10,296000\r
2019-08-12,284300\r
2019-08-15,283000\r
2019-08-17,275500\r
2019-08-20,273200\r
2019-08-22,256300\r
2019-08-25,259300\r
2019-08-27,253000\r
2019-08-30,238700\r
2019-09-04,227300\r
2019-09-06,229000\r
2019-09-09,220300\r
2019-09-11,211800\r
2019-09-14,211500\r
2019-09-16,215000\r
2019-09-19,215000\r
2019-09-24,212900\r
2019-09-26,225100\r
2019-09-29,227500\r
2019-10-01,227500\r
2019-10-09,226300\r
2019-10-11,224700\r
2019-10-14,224700\r
2019-10-16,224700\r
2019-10-19,227800\r
2019-10-26,240000\r
2019-10-29,240000\r
2019-11-05,235100\r
2019-11-30,245900\r
2019-12-08,271200\r
2019-12-10,311700\r
2019-12-13,311700\r
2019-12-15,311700\r
2019-12-23,335900\r
2019-12-25,325200\r
2019-12-28,339300\r
2019-12-30,324500\r
2020-01-04,369400\r
2020-01-09,372200\r
2020-01-12,368700\r
2020-01-14,379000\r
2020-01-17,379000\r
2020-01-22,388300\r
2020-01-27,391100\r
2020-02-01,400300\r
2020-02-06,405300\r
2020-02-08,407000\r
2020-02-11,407000\r
2020-02-13,403200\r
2020-02-16,403200\r
2020-02-18,419000\r
2020-02-21,416000\r
2020-02-26,416800\r
2020-02-28,416800\r
2020-03-04,414700\r
2020-03-07,416700\r
2020-03-14,407500\r
2020-03-19,414900\r
2020-03-22,417000\r
2020-03-24,421600\r
2020-03-29,413200\r
2020-04-01,420200\r
2020-04-03,420200\r
2020-04-06,423100\r
2020-04-08,418300\r
2020-04-11,419600\r
2020-04-23,424000\r
2020-04-26,428800\r
2020-04-28,436000\r
2020-05-03,425000\r
2020-05-06,433900\r
2020-05-11,435700\r
2020-05-21,436000\r
2020-05-23,445500\r
2020-05-26,435700\r
2020-05-28,436600\r
2020-05-31,436500\r
2020-06-05,439600\r
2020-06-10,441200\r
2020-06-12,449100\r
2020-06-15,450000\r
2020-06-17,420600\r
2020-06-20,433800\r
2020-06-22,417600\r
2020-06-25,427300\r
2020-06-27,424400\r
2020-06-30,434400\r
2020-07-02,430100\r
2020-07-05,437700\r
2020-07-07,433900\r
2020-07-10,441800\r
2020-07-12,440800\r
2020-07-15,446400\r
2020-07-17,440500\r
2020-07-20,437300\r
2020-07-22,431600\r
2020-07-25,431600\r
2020-07-27,417800\r
2020-07-30,407300\r
2020-08-01,395800\r
2020-08-04,396000\r
2020-08-06,368700\r
2020-08-09,352500\r
2020-08-11,321700\r
2020-08-14,316200\r
2020-08-16,315300\r
2020-08-19,312500\r
2020-08-21,303000\r
2020-08-24,311900\r
2020-08-26,307500\r
2020-09-03,270700\r
2020-09-05,254200\r
2020-09-08,250200\r
2020-09-10,250200\r
2020-09-13,231400\r
2020-09-15,231400\r
2020-09-18,229300\r
2020-09-20,228700\r
2020-09-25,245100\r
2020-09-28,245100\r
2020-09-30,230600\r
2020-10-03,260700\r
2020-10-08,256700\r
2020-10-10,248700\r
2020-10-15,248700\r
2020-10-18,248700\r
2020-10-20,259900\r
2020-10-25,271400\r
2020-10-28,247700\r
2020-10-30,285700\r
2020-11-02,290500\r
2020-11-07,293300\r
2020-11-09,293300\r
2020-11-17,326900\r
2020-11-19,356800\r
2020-11-22,367100\r
2020-11-24,377500\r
2020-12-02,377500\r
2020-12-07,385800\r
2020-12-09,402500\r
2020-12-12,402200\r
2020-12-19,402200\r
2020-12-22,402200\r
2020-12-27,368600\r
2021-01-03,403500\r
2021-01-06,403500\r
2021-01-13,405500\r
2021-01-16,393700\r
2021-01-18,393700\r
2021-01-23,393700\r
2021-01-26,412800\r
2021-01-31,411100\r
2021-02-02,411100\r
2021-02-15,413100\r
2021-02-17,425300\r
2021-02-20,425300\r
2021-02-25,415700\r
2021-02-27,428200\r
2021-03-02,427400\r
2021-03-04,413800\r
2021-03-14,412800\r
2021-03-22,418500\r
2021-03-24,421700\r
2021-03-29,417800\r
2021-04-01,417800\r
2021-04-03,425900\r
2021-04-06,434000\r
2021-04-08,434000\r
2021-04-11,423500\r
2021-04-13,423500\r
2021-04-18,423400\r
2021-04-23,407500\r
2021-04-28,407500\r
2021-05-03,407500\r
2021-05-06,414500\r
2021-05-08,419900\r
2021-05-13,419200\r
2021-05-18,426900\r
2021-05-21,430600\r
2021-05-23,430600\r
2021-05-26,426100\r
2021-05-28,426100\r
2021-05-31,437700\r
2021-06-05,420400\r
2021-06-10,436800\r
2021-06-12,436800\r
2021-06-15,437700\r
2021-06-17,437700\r
2021-06-22,423900\r
2021-06-25,432700\r
2021-06-27,437100\r
2021-06-30,442300\r
2021-07-02,403600\r
2021-07-05,422300\r
2021-07-07,422300\r
2021-07-10,419200\r
2021-07-12,420000\r
2021-07-15,425000\r
2021-07-17,429800\r
2021-07-20,424800\r
2021-07-22,412200\r
2021-07-27,387400\r
2021-07-30,382000\r
2021-08-01,367700\r
2021-08-04,363100\r
2021-08-06,332000\r
2021-08-11,328700\r
2021-08-14,308100\r
2021-08-16,267700\r
2021-08-19,255500\r
2021-08-21,255500\r
2021-08-24,255500\r
2021-08-26,241800\r
2021-08-29,230300\r
2021-08-31,214100\r
2021-09-03,215200\r
2021-09-05,197200\r
2021-09-08,197200\r
2021-09-23,170900\r
2021-09-30,170900\r
2021-10-03,172300\r
2021-10-05,229300\r
2021-10-08,229300\r
2021-10-10,201100\r
2021-10-13,214900\r
2021-10-15,222700\r
2021-10-18,221000\r
2021-10-20,220100\r
2021-10-23,220900\r
2021-11-04,236000\r
2021-11-19,248800\r
2021-11-22,248800\r
2021-11-24,248800\r
2021-11-27,248800\r
2021-12-07,307100\r
2021-12-09,307100\r
2021-12-12,321000\r
2021-12-14,307300\r
2021-12-17,316800\r
2021-12-19,319700\r
2021-12-24,313500\r
2021-12-29,318900\r
2022-01-08,358900\r
2022-01-11,367500\r
2022-01-13,421100\r
2022-01-16,395700\r
2022-01-18,393300\r
2022-01-21,394900\r
2022-01-23,389000\r
2022-01-26,385700\r
2022-01-28,387500\r
2022-01-31,386800\r
2022-02-02,391800\r
2022-02-05,397300\r
2022-02-07,406700\r
2022-02-10,417100\r
2022-02-12,426000\r
2022-02-15,425100\r
2022-02-17,427500\r
2022-02-20,427100\r
2022-02-22,429400\r
2022-02-25,421600\r
2022-02-27,421600\r
2022-03-02,426600\r
2022-03-07,428400\r
2022-03-09,427200\r
2022-03-14,421300\r
2022-03-22,433700\r
2022-03-24,435600\r
2022-03-29,435600\r
2022-04-03,428700\r
2022-04-11,434400\r
2022-04-13,434400\r
2022-04-16,440200\r
2022-04-18,434400\r
2022-04-23,433400\r
2022-04-26,434900\r
2022-04-28,435300\r
2022-05-01,435900\r
2022-05-08,437200\r
2022-05-11,442000\r
2022-05-13,445100\r
2022-05-16,434900\r
2022-05-18,437100\r
2022-05-21,435300\r
2022-05-23,434200\r
2022-05-26,437600\r
2022-05-28,434800\r
2022-05-31,446100\r
2022-06-02,439600\r
2022-06-07,435700\r
2022-06-10,431400\r
2022-06-12,435100\r
2022-06-15,436500\r
2022-06-17,431300\r
2022-06-20,431300\r
2022-06-25,435100\r
2022-06-27,430700\r
2022-07-02,417000\r
2022-07-05,419800\r
2022-07-07,404000\r
2022-07-10,406100\r
2022-07-12,397200\r
2022-07-15,384000\r
2022-07-17,372600\r
2022-07-20,365300\r
2022-07-22,350200\r
2022-07-25,340400\r
2022-07-27,340700\r
2022-07-30,321800\r
2022-08-01,305100\r
2022-08-04,282900\r
2022-08-06,260300\r
2022-08-09,244300\r
2022-08-11,237400\r
2022-08-14,231300\r
2022-08-16,221200\r
2022-08-19,221400\r
2022-08-21,215300\r
2022-08-24,210800\r
2022-08-26,206600\r
2022-08-29,213500\r
2022-09-05,215300\r
2022-09-10,207000\r
2022-09-13,194200\r
2022-09-18,183200\r
2022-09-20,187200\r
2022-09-23,182700\r
2022-10-05,170300\r
2022-10-08,171700\r
2022-10-10,171700\r
2022-10-13,171500\r
2022-10-15,184900\r
2022-10-18,194800\r
2022-10-20,195700\r
2022-10-23,195000\r
2022-10-25,205000\r
2022-10-28,205400\r
2022-10-30,190700\r
2022-11-02,193100\r
2022-11-04,190800\r
2022-11-14,216400\r
2022-11-17,216200\r
2022-11-24,205200\r
2022-11-27,199400\r
2022-12-02,206100\r
2022-12-04,201600\r
2022-12-07,219300\r
2022-12-09,214500\r
2022-12-22,253500\r
2022-12-27,268200\r
2022-12-29,266600\r
2023-01-18,317400\r
2023-01-21,327400\r
2023-01-26,327400\r
2023-01-31,336700\r
2023-02-02,343100\r
2023-02-05,343100\r
2023-02-10,343100\r
2023-02-12,372100\r
2023-02-15,385600\r
2023-02-17,385600\r
2023-02-20,387600\r
2023-02-22,390000\r
2023-03-07,398300\r
2023-03-09,404900\r
2023-03-12,400200\r
2023-03-14,403500\r
2023-03-17,403500\r
2023-03-22,406800\r
2023-03-24,403900\r
2023-03-27,412400\r
2023-04-01,412400\r
2023-04-03,412400\r
2023-04-06,415000\r
2023-04-08,405400\r
2023-04-16,409900\r
2023-04-21,404700\r
2023-04-23,404700\r
2023-04-26,413500\r
2023-04-28,420600\r
2023-05-03,419900\r
2023-05-06,415200\r
2023-05-11,417000\r
2023-05-23,421000\r
2023-05-26,427100\r
2023-05-28,419800\r
2023-06-02,415400\r
2023-06-05,409900\r
2023-06-07,407300\r
2023-06-10,409600\r
2023-06-12,409600\r
2023-06-15,422700\r
2023-06-17,425000\r
2023-06-20,424500\r
2023-06-22,424600\r
2023-06-25,422400\r
2023-06-27,422400\r
2023-07-02,406000\r
2023-07-05,423200\r
2023-07-07,411100\r
2023-07-10,423300\r
2023-07-12,423300\r
2023-07-15,426400\r
2023-07-17,423600\r
2023-07-20,415800\r
2023-07-22,394100\r
2023-07-25,392700\r
2023-07-27,378200\r
2023-07-30,368100\r
2023-08-01,348900\r
2023-08-06,339000\r
2023-08-09,334200\r
2023-08-11,277200\r
2023-08-14,255100\r
2023-08-16,251700\r
2023-08-19,241800\r
2023-08-21,229800\r
2023-08-24,216500\r
2023-08-26,204300\r
2023-08-29,204300\r
2023-08-31,185100\r
2023-09-03,171800\r
2023-09-05,159000\r
2023-09-08,151300\r
2023-09-10,143100\r
2023-09-15,129200\r
2023-09-23,112400\r
2023-09-25,113700\r
2023-09-28,113700\r
2023-09-30,110700\r
2023-10-03,111400\r
2023-10-05,110000\r
2023-10-08,108900\r
2023-10-10,116200\r
2023-10-13,117000\r
2023-10-15,117000\r
2023-11-07,123000\r
`;export{r as default};

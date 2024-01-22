const r=`date,value\r
2017-01-26,259700\r
2017-02-15,284100\r
2017-02-18,279700\r
2017-02-25,281600\r
2017-03-10,291000\r
2017-03-30,305900\r
2017-04-06,327400\r
2017-04-09,321500\r
2017-04-19,324000\r
2017-04-29,332600\r
2017-05-06,297200\r
2017-05-09,323500\r
2017-05-16,334800\r
2017-05-26,335900\r
2017-06-18,339400\r
2017-07-05,341100\r
2017-07-18,348900\r
2017-08-02,332600\r
2017-08-04,347600\r
2017-08-07,339200\r
2017-08-14,335000\r
2017-08-22,301700\r
2017-09-01,265200\r
2017-09-21,247500\r
2017-10-08,247400\r
2017-10-11,241100\r
2017-10-13,243500\r
2017-10-16,237100\r
2017-10-23,238700\r
2017-10-26,230000\r
2017-10-28,237500\r
2017-10-31,230500\r
2017-11-17,222100\r
2017-11-22,224700\r
2017-11-30,217900\r
2017-12-05,216200\r
2017-12-12,238700\r
2017-12-20,260200\r
2017-12-25,259300\r
2018-02-15,360800\r
2018-03-02,349600\r
2018-03-15,355800\r
2018-03-22,356700\r
2018-04-06,343100\r
2018-04-19,349700\r
2018-04-21,360600\r
2018-05-06,337200\r
2018-05-11,366500\r
2018-05-21,363600\r
2018-05-24,354400\r
2018-06-03,339300\r
2018-06-20,358500\r
2018-06-23,354600\r
2018-06-25,354100\r
2018-07-08,344000\r
2018-07-10,350000\r
2018-07-13,355200\r
2018-07-23,347900\r
2018-07-25,356000\r
2018-08-02,345200\r
2018-08-04,350300\r
2018-08-12,347600\r
2018-08-19,344000\r
2018-08-22,345800\r
2018-08-27,335700\r
2018-09-01,341900\r
2018-09-03,336800\r
2018-09-08,345300\r
2018-09-11,346900\r
2018-09-16,338100\r
2018-09-23,342400\r
2018-09-26,335400\r
2018-09-28,338900\r
2018-10-03,329700\r
2018-12-07,314200\r
2019-01-16,319400\r
2019-02-03,360100\r
2019-02-13,334500\r
2019-02-15,353700\r
2019-02-20,351800\r
2019-02-23,352200\r
2019-02-25,353900\r
2019-03-12,332100\r
2019-03-20,339700\r
2019-03-22,336300\r
2019-03-27,357200\r
2019-03-30,345400\r
2019-05-01,335800\r
2019-05-06,338200\r
2019-05-14,366100\r
2019-06-08,362800\r
2019-06-23,361600\r
2019-06-28,371200\r
2019-07-05,355400\r
2019-07-15,362900\r
2019-07-25,350400\r
2019-08-04,355500\r
2019-08-09,355900\r
2019-08-14,350700\r
2019-08-17,343500\r
2019-08-22,345400\r
2019-08-24,350800\r
2019-08-29,353400\r
2019-09-13,355400\r
2019-09-16,346900\r
2019-10-08,331800\r
2019-10-11,328300\r
2019-10-13,338900\r
2019-12-05,349700\r
2019-12-10,339800\r
2019-12-15,314600\r
2019-12-25,343400\r
2019-12-30,338700\r
2020-01-09,341700\r
2020-01-11,334600\r
2020-01-14,346900\r
2020-01-19,341800\r
2020-01-29,339700\r
2020-02-05,339800\r
2020-02-15,335700\r
2020-02-20,342600\r
2020-03-21,348300\r
2020-03-24,332800\r
2020-03-26,333800\r
2020-04-03,339700\r
2020-04-05,360600\r
2020-04-08,371200\r
2020-04-10,359600\r
2020-04-15,366700\r
2020-05-05,357000\r
2020-05-18,351700\r
2020-05-20,351600\r
2020-05-25,364600\r
2020-05-28,358800\r
2020-05-30,361100\r
2020-06-24,343300\r
2020-07-07,371300\r
2020-07-09,357000\r
2020-07-19,349000\r
2020-07-22,356100\r
2020-07-27,335800\r
2020-08-06,303600\r
2020-08-08,318400\r
2020-09-02,259300\r
2020-09-05,266800\r
2020-09-12,264000\r
2020-10-17,298200\r
2020-10-30,310700\r
2020-11-14,302300\r
2020-11-21,304400\r
2020-11-26,307400\r
2020-11-29,293900\r
2020-12-26,335800\r
2021-01-03,351600\r
2021-01-18,348800\r
2021-02-19,341200\r
2021-02-24,354100\r
2021-02-27,347800\r
2021-03-01,347600\r
2021-03-04,353300\r
2021-03-24,340300\r
2021-03-29,339000\r
2021-03-31,344400\r
2021-04-03,334900\r
2021-04-05,345700\r
2021-04-08,346000\r
2021-04-15,355600\r
2021-04-23,344300\r
2021-05-03,342500\r
2021-05-28,357800\r
2021-06-14,362500\r
2021-07-02,358100\r
2021-07-22,349100\r
2021-08-11,351600\r
2021-08-23,340400\r
2021-08-26,334000\r
2021-08-31,328200\r
2021-09-05,313700\r
2021-09-12,308700\r
2021-09-27,232300\r
2021-09-30,288700\r
2021-10-07,295500\r
2021-10-12,296300\r
2021-10-15,289700\r
2021-10-17,283900\r
2021-10-27,286400\r
2021-11-09,294600\r
2021-11-11,294900\r
2021-11-19,289200\r
2021-12-14,316700\r
2021-12-19,320000\r
2022-01-13,328200\r
2022-01-15,332400\r
2022-01-23,347400\r
2022-01-25,336000\r
2022-02-09,337300\r
2022-03-09,338100\r
2022-03-21,350900\r
2022-04-05,347500\r
2022-05-08,348000\r
2022-05-10,376700\r
2022-05-28,350200\r
2022-06-17,355200\r
2022-07-02,356100\r
2022-07-12,362300\r
2022-07-14,359500\r
2022-07-17,357600\r
2022-07-24,341200\r
2022-08-01,314100\r
2022-09-05,171100\r
2022-09-10,158600\r
2022-09-20,156900\r
2022-09-22,156100\r
2022-10-05,136100\r
2022-10-07,136200\r
2022-10-15,140700\r
2022-11-06,123800\r
2022-11-16,119400\r
2022-12-04,150600\r
2022-12-11,142300\r
2023-01-10,190700\r
2023-01-18,237400\r
2023-02-02,314600\r
2023-02-04,317900\r
2023-02-09,309900\r
2023-02-12,310900\r
2023-02-24,305700\r
2023-04-05,341800\r
2023-04-18,301600\r
2023-05-05,330300\r
2023-05-28,327500\r
2023-06-02,346600\r
2023-06-24,364400\r
2023-06-27,357900\r
2023-07-07,357400\r
2023-07-09,348300\r
2023-07-14,359300\r
2023-07-17,365400\r
2023-07-22,352500\r
2023-07-27,348900\r
2023-07-29,349900\r
2023-08-08,351200\r
2023-08-11,345300\r
2023-08-16,339400\r
2023-08-21,344500\r
2023-08-23,343200\r
2023-08-31,333700\r
2023-09-10,331900\r
2023-09-20,318900\r
2023-09-25,311700\r
2023-09-30,320500\r
2023-10-05,311700\r
2023-10-07,314900\r
2023-10-10,306300\r
2023-10-12,312800\r
2023-11-19,331300\r
2023-11-26,311200\r
2023-12-06,320600\r
`;export{r as default};

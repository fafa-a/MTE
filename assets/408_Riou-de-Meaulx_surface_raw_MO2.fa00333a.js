const r=`date,value\r
2017-02-19,9300\r
2017-02-26,10000\r
2017-03-01,10400\r
2017-03-11,11700\r
2017-03-21,8600\r
2017-04-10,18500\r
2017-04-17,16700\r
2017-04-20,16300\r
2017-04-30,17000\r
2017-05-07,19500\r
2017-05-10,19500\r
2017-05-17,21600\r
2017-05-27,25400\r
2017-05-30,25400\r
2017-06-06,24600\r
2017-06-09,26100\r
2017-06-16,25900\r
2017-06-19,25100\r
2017-06-26,25100\r
2017-06-29,25100\r
2017-07-01,23400\r
2017-07-04,21500\r
2017-07-06,21700\r
2017-07-11,20500\r
2017-07-14,23300\r
2017-07-19,23900\r
2017-07-21,23900\r
2017-07-24,24400\r
2017-07-26,21200\r
2017-07-29,21200\r
2017-07-31,15200\r
2017-08-03,15200\r
2017-08-05,14900\r
2017-08-08,16600\r
2017-08-13,20100\r
2017-08-15,20100\r
2017-08-18,20300\r
2017-08-20,20300\r
2017-08-23,14800\r
2017-08-25,13900\r
2017-08-30,16600\r
2017-09-02,16600\r
2017-09-04,11800\r
2017-09-07,9300\r
2017-09-12,9300\r
2017-09-14,12600\r
2017-09-17,12300\r
2017-09-19,12300\r
2017-09-22,12300\r
2017-09-24,12300\r
2017-09-27,12700\r
2017-10-04,12700\r
2017-10-07,12700\r
2017-10-09,6300\r
2017-10-12,9800\r
2017-10-14,7400\r
2017-10-17,8100\r
2017-10-19,7900\r
2017-10-22,8600\r
2017-10-24,8100\r
2017-10-27,6500\r
2017-10-29,8600\r
2017-11-01,8400\r
2017-11-03,14400\r
2017-11-06,14200\r
2017-11-13,15200\r
2017-11-16,15700\r
2017-11-18,12500\r
2017-11-21,11800\r
2017-11-23,11800\r
2017-11-26,9300\r
2017-11-28,10200\r
2017-12-01,11700\r
2017-12-03,11500\r
2017-12-06,11500\r
2017-12-08,13800\r
2017-12-16,21900\r
2017-12-21,17200\r
2017-12-23,18000\r
2017-12-26,15500\r
2017-12-28,16700\r
2018-01-02,28700\r
2018-01-05,28700\r
2018-01-07,28700\r
2018-01-17,34400\r
2018-01-20,34400\r
2018-01-27,28000\r
2018-02-04,41800\r
2018-02-09,41800\r
2018-02-11,42000\r
2018-02-14,42000\r
2018-03-03,65100\r
2018-03-06,65100\r
2018-03-08,65200\r
2018-03-13,81600\r
2018-03-16,91500\r
2018-03-21,93400\r
2018-03-23,91500\r
2018-03-26,94300\r
2018-03-28,99000\r
2018-03-31,99000\r
2018-04-02,99000\r
2018-04-05,98700\r
2018-04-07,85000\r
2018-04-17,102900\r
2018-04-20,106000\r
2018-04-22,101200\r
2018-04-25,103300\r
2018-04-27,103300\r
2018-04-30,94400\r
2018-05-05,91400\r
2018-05-10,500\r
2018-10-19,27200\r
2018-10-22,27200\r
2018-10-24,29100\r
2018-11-01,19400\r
2018-11-03,19400\r
2018-11-18,72100\r
2018-11-26,85100\r
2018-11-28,77000\r
2018-12-01,77000\r
2018-12-03,84000\r
2018-12-06,84000\r
2018-12-08,82100\r
2018-12-11,81000\r
2018-12-18,79400\r
2019-01-02,72200\r
2019-01-05,78200\r
2019-01-07,68300\r
2019-01-10,69200\r
2019-01-12,68800\r
2019-01-15,63100\r
2019-01-22,62900\r
2019-01-25,60400\r
2019-01-27,67300\r
2019-01-30,67300\r
2019-02-04,79900\r
2019-02-06,68300\r
2019-02-09,79700\r
2019-02-11,81700\r
2019-02-14,73300\r
2019-02-16,69000\r
2019-02-19,69000\r
2019-02-21,68300\r
2019-03-01,70600\r
2019-03-03,71900\r
2019-03-08,70500\r
2019-03-11,64600\r
2019-03-13,66300\r
2019-03-16,62200\r
2019-03-18,64600\r
2019-03-21,64700\r
2019-03-23,57500\r
2019-03-26,57500\r
2019-03-28,57400\r
2019-03-31,61300\r
2019-04-02,70600\r
2019-04-05,64400\r
2019-04-07,64700\r
2019-04-10,63200\r
2019-04-15,73200\r
2019-04-17,68200\r
2019-04-20,68200\r
2019-04-22,59400\r
2019-04-27,68700\r
2019-04-30,76700\r
2019-05-02,71500\r
2019-05-05,83500\r
2019-05-07,83500\r
2019-05-10,93300\r
2019-05-12,95100\r
2019-05-15,95000\r
2019-05-30,121200\r
2019-06-01,121200\r
2019-06-04,109100\r
2019-06-06,109100\r
2019-06-11,110900\r
2019-06-19,118400\r
2019-06-21,118400\r
2019-06-24,106300\r
2019-06-26,106300\r
2019-06-29,106000\r
2019-07-01,106400\r
2019-07-04,101700\r
2019-07-06,95600\r
2019-07-11,93900\r
2019-07-14,101300\r
2019-07-16,77800\r
2019-07-19,77800\r
2019-07-21,77600\r
2019-07-24,92200\r
2019-07-26,92200\r
2019-07-29,91000\r
2019-07-31,91900\r
2019-08-03,97200\r
2019-08-05,93900\r
2019-08-08,98900\r
2019-08-10,89400\r
2019-08-15,89300\r
2019-08-18,91400\r
2019-08-20,91900\r
2019-08-23,90000\r
2019-08-25,84900\r
2019-08-28,101500\r
2019-08-30,85800\r
2019-09-02,98500\r
2019-09-04,93500\r
2019-09-07,86900\r
2019-09-12,80500\r
2019-09-14,80500\r
2019-09-17,85000\r
2019-09-19,85000\r
2019-09-24,70700\r
2019-09-27,86900\r
2019-09-29,82300\r
2019-10-02,67800\r
2019-10-04,67800\r
2019-10-07,80700\r
2019-10-14,69600\r
2019-10-17,83900\r
2019-10-19,81700\r
2019-10-27,61100\r
2019-10-29,61100\r
2019-11-06,73400\r
2019-11-08,73400\r
2019-11-13,72000\r
2019-11-16,81200\r
2019-12-03,58000\r
2019-12-06,58000\r
2019-12-08,88600\r
2019-12-13,85500\r
2019-12-21,91000\r
2019-12-23,91500\r
2019-12-28,86300\r
2020-01-05,83900\r
2020-01-12,85400\r
2020-01-20,85400\r
2020-01-30,96700\r
2020-02-01,96700\r
2020-02-04,96700\r
2020-02-09,95300\r
2020-02-11,95300\r
2020-02-14,95300\r
2020-02-16,75100\r
2020-02-19,75100\r
2020-02-21,97500\r
2020-02-24,83000\r
2020-02-26,86000\r
2020-03-07,87000\r
2020-03-10,87000\r
2020-04-04,60800\r
2020-04-06,76200\r
2020-04-09,75600\r
2020-04-11,77000\r
2020-04-14,74600\r
2020-04-24,90500\r
2020-04-26,89600\r
2020-04-29,97300\r
2020-05-04,99900\r
2020-05-06,99900\r
2020-05-09,99900\r
2020-05-11,104600\r
2020-05-14,98400\r
2020-05-21,82600\r
2020-05-24,117000\r
2020-05-26,85400\r
2020-05-31,85400\r
2020-06-03,115900\r
2020-06-05,115900\r
2020-06-08,115900\r
2020-06-10,120000\r
2020-06-15,120000\r
2020-06-20,82800\r
2020-06-23,118100\r
2020-06-25,118100\r
2020-06-28,115300\r
2020-06-30,112400\r
2020-07-03,114600\r
2020-07-05,112900\r
2020-07-08,114100\r
2020-07-10,111600\r
2020-07-15,108700\r
2020-07-20,108100\r
2020-07-23,107800\r
2020-07-30,91700\r
2020-08-02,104300\r
2020-08-04,91900\r
2020-08-07,97000\r
2020-08-09,84300\r
2020-08-12,86100\r
2020-08-14,85100\r
2020-08-17,87900\r
2020-08-19,84100\r
2020-08-22,81900\r
2020-08-24,83100\r
2020-08-27,86800\r
2020-09-01,89700\r
2020-09-03,78200\r
2020-09-06,83000\r
2020-09-08,84100\r
2020-09-13,83100\r
2020-09-16,84800\r
2020-09-18,71100\r
2020-09-21,71100\r
2020-09-23,70000\r
2020-09-26,67900\r
2020-09-28,67900\r
2020-10-01,67200\r
2020-10-03,68300\r
2020-10-08,75600\r
2020-10-13,76700\r
2020-10-16,84600\r
2020-10-18,84900\r
2020-10-21,88200\r
2020-10-28,87600\r
2020-11-02,82500\r
2020-11-05,67400\r
2020-11-07,68600\r
2020-11-10,68500\r
2020-11-12,68800\r
2020-11-15,78000\r
2020-11-17,67400\r
2020-11-20,77700\r
2020-11-22,79500\r
2020-11-25,76200\r
2020-11-27,77200\r
2020-11-30,77700\r
2020-12-07,73000\r
2020-12-10,77000\r
2020-12-12,60000\r
2020-12-17,57900\r
2020-12-22,74800\r
2020-12-25,78200\r
2020-12-30,77800\r
2021-01-06,78600\r
2021-01-11,91000\r
2021-01-14,89000\r
2021-01-16,89000\r
2021-01-19,91000\r
2021-01-24,90300\r
2021-01-26,91900\r
2021-01-29,92200\r
2021-01-31,89900\r
2021-02-03,89900\r
2021-02-08,91900\r
2021-02-10,92000\r
2021-02-20,87100\r
2021-02-23,89900\r
2021-02-25,87300\r
2021-02-28,92000\r
2021-03-02,86500\r
2021-03-05,91000\r
2021-03-07,91100\r
2021-03-10,93000\r
2021-03-12,36400\r
2021-03-15,89600\r
2021-03-17,95300\r
2021-03-20,92500\r
2021-03-22,92500\r
2021-03-25,92500\r
2021-03-27,93200\r
2021-03-30,94800\r
2021-04-01,86900\r
2021-04-04,86800\r
2021-04-06,88200\r
2021-04-09,83000\r
2021-04-16,79700\r
2021-05-04,92500\r
2021-05-06,90300\r
2021-05-09,90300\r
2021-05-14,90300\r
2021-05-26,100700\r
2021-05-29,100700\r
2021-05-31,106600\r
2021-06-03,106600\r
2021-06-05,101600\r
2021-06-08,106500\r
2021-06-10,106500\r
2021-06-13,102800\r
2021-06-15,99400\r
2021-06-18,99600\r
2021-06-25,99600\r
2021-06-28,102000\r
2021-06-30,106000\r
2021-07-03,106000\r
2021-07-05,99500\r
2021-07-08,106600\r
2021-07-10,101200\r
2021-07-13,98100\r
2021-07-15,98100\r
2021-07-18,97900\r
2021-07-20,100400\r
2021-07-23,99800\r
2021-07-25,99700\r
2021-07-28,96400\r
2021-07-30,97200\r
2021-08-02,96800\r
2021-08-07,97800\r
2021-08-09,96400\r
2021-08-12,96400\r
2021-08-14,86700\r
2021-08-17,83500\r
2021-08-19,84400\r
2021-08-22,85000\r
2021-08-24,85000\r
2021-08-27,84800\r
2021-08-29,91900\r
2021-09-01,91600\r
2021-09-08,75400\r
2021-09-11,83400\r
2021-09-13,79400\r
2021-09-18,79400\r
2021-09-21,82100\r
2021-09-23,85700\r
2021-09-28,83000\r
2021-10-01,83700\r
2021-10-06,84500\r
2021-10-11,79900\r
2021-10-13,76600\r
2021-10-16,78500\r
2021-10-18,73600\r
2021-10-23,72400\r
2021-10-26,71500\r
2021-10-28,74600\r
2021-11-02,76800\r
2021-11-05,80800\r
2021-11-20,77700\r
2021-11-27,77700\r
2021-11-30,84300\r
2021-12-02,82400\r
2021-12-05,77300\r
2021-12-07,77600\r
2021-12-10,77600\r
2021-12-12,82400\r
2021-12-15,78100\r
2021-12-17,77700\r
2021-12-20,76100\r
2021-12-22,76100\r
2022-01-06,78500\r
2022-01-09,81200\r
2022-01-11,74000\r
2022-01-14,76000\r
2022-01-16,71500\r
2022-01-19,70500\r
2022-01-21,68200\r
2022-01-24,69600\r
2022-01-26,71600\r
2022-01-29,72800\r
2022-02-03,75900\r
2022-02-05,76000\r
2022-02-08,68900\r
2022-02-10,71600\r
2022-02-13,73800\r
2022-02-15,72500\r
2022-02-18,71700\r
2022-02-20,72000\r
2022-02-23,70600\r
2022-02-25,74300\r
2022-02-28,72200\r
2022-03-02,68500\r
2022-03-07,65300\r
2022-03-10,65300\r
2022-03-25,53100\r
2022-04-01,79100\r
2022-04-04,81800\r
2022-04-09,86800\r
2022-04-11,86800\r
2022-04-14,85400\r
2022-04-16,92000\r
2022-04-19,92000\r
2022-04-24,90700\r
2022-04-26,92200\r
2022-05-04,97900\r
2022-05-09,101600\r
2022-05-11,101900\r
2022-05-14,101900\r
2022-05-16,106000\r
2022-05-19,106000\r
2022-05-21,104100\r
2022-05-24,99400\r
2022-05-26,99400\r
2022-05-29,91500\r
2022-05-31,91500\r
2022-06-05,99000\r
2022-06-10,101900\r
2022-06-13,101900\r
2022-06-18,99200\r
2022-06-20,99500\r
2022-06-25,93500\r
2022-07-03,102300\r
2022-07-05,95700\r
2022-07-08,97400\r
2022-07-10,94700\r
2022-07-13,95700\r
2022-07-15,92300\r
2022-07-18,94200\r
2022-07-20,93800\r
2022-07-23,98000\r
2022-07-25,93700\r
2022-07-28,93400\r
2022-07-30,88800\r
2022-08-02,88900\r
2022-08-04,88800\r
2022-08-07,89000\r
2022-08-09,89400\r
2022-08-12,88700\r
2022-08-14,88200\r
2022-08-19,85900\r
2022-08-22,85200\r
2022-08-24,87300\r
2022-08-27,87300\r
2022-08-29,81900\r
2022-09-01,86900\r
2022-09-03,76100\r
2022-09-06,74800\r
2022-09-08,74800\r
2022-09-26,64700\r
2022-09-28,65200\r
2022-10-01,73000\r
2022-10-03,73000\r
2022-10-06,67500\r
2022-10-11,74500\r
2022-10-13,62100\r
2022-10-16,62100\r
2022-10-28,72600\r
2022-10-31,70000\r
2022-11-02,70000\r
2022-11-05,64000\r
2022-11-10,66800\r
2022-11-17,53300\r
2022-11-20,59300\r
2022-11-22,59300\r
2022-11-25,59300\r
2022-11-27,59300\r
2022-11-30,62000\r
2022-12-02,68100\r
2022-12-05,60500\r
2022-12-07,65600\r
2022-12-10,65600\r
2022-12-17,64100\r
2022-12-27,71100\r
2022-12-30,81300\r
2023-01-09,70300\r
2023-01-14,80900\r
2023-01-19,70500\r
2023-01-21,79700\r
2023-01-24,74500\r
2023-01-26,83800\r
2023-01-29,69000\r
2023-01-31,81900\r
2023-02-03,70300\r
2023-02-05,71500\r
2023-02-08,62100\r
2023-02-10,64400\r
2023-02-13,68300\r
2023-02-15,64700\r
2023-02-18,64700\r
2023-02-20,61300\r
2023-03-05,77900\r
2023-03-07,75200\r
2023-03-10,78200\r
2023-03-12,74800\r
2023-03-15,77400\r
2023-03-17,78700\r
2023-03-20,77200\r
2023-03-22,76200\r
2023-03-25,77200\r
2023-03-27,77800\r
2023-03-30,78500\r
2023-04-01,78500\r
2023-04-04,75900\r
2023-04-06,84300\r
2023-04-09,84000\r
2023-04-14,84700\r
2023-04-16,86100\r
2023-04-19,85200\r
2023-04-24,89200\r
2023-04-26,88900\r
2023-05-04,88400\r
2023-05-06,88700\r
2023-05-11,89200\r
2023-05-16,91000\r
2023-05-24,92100\r
2023-05-26,95400\r
2023-06-03,99900\r
2023-06-08,99600\r
2023-06-10,99600\r
2023-06-23,107600\r
2023-06-25,104000\r
2023-06-28,107700\r
2023-07-03,104900\r
2023-07-05,97100\r
2023-07-08,96300\r
2023-07-10,95500\r
`;export{r as default};

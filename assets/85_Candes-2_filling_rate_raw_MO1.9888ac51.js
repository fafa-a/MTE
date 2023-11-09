const n=`date,value\r
2017-01-26,77.18550785410523\r
2017-02-15,88.9162323054089\r
2017-02-25,66.04575592415327\r
2017-03-17,88.9162323054089\r
2017-05-16,89.04985153853376\r
2017-05-26,79.79319092898703\r
2017-06-15,85.85388011208728\r
2017-06-25,93.88594792526199\r
2017-07-05,74.20782127045584\r
2017-08-14,96.18683715609477\r
2017-08-19,82.15443370153845\r
2017-08-24,76.14719996072212\r
2017-08-29,84.13232523917846\r
2017-10-13,86.51782282749811\r
2017-11-07,69.33916079319708\r
2017-11-17,70.35876088323172\r
2017-11-22,75.62907838307332\r
2018-02-25,78.48723499299764\r
2018-03-22,93.75094113324545\r
2018-04-06,74.20782127045584\r
2018-04-21,99.18046276822515\r
2018-04-26,100.0\r
2018-05-06,83.34006679445122\r
2018-05-11,94.6967836859446\r
2018-06-25,61.78707408197247\r
2018-07-10,80.05488582994623\r
2018-07-15,79.27030382984606\r
2018-07-25,79.66240625349855\r
2018-08-19,87.71542711452793\r
2018-09-03,80.18579597194837\r
2018-09-08,80.44774143104874\r
2018-09-23,74.98239997255526\r
2018-09-28,73.82112201994502\r
2018-10-13,83.34006679445122\r
2018-10-23,77.83584013973397\r
2018-11-22,77.57557941371832\r
2019-01-06,81.23457623356805\r
2019-01-11,100.0\r
2019-01-16,76.53624358424693\r
2019-02-15,45.93079738068837\r
2019-02-25,72.40661448380999\r
2019-03-22,87.5822014140622\r
2019-03-27,75.49965601156488\r
2019-05-06,54.16864289035546\r
2019-05-31,64.03477075805971\r
2019-06-30,55.26228994430073\r
2019-07-05,73.43481784159029\r
2019-07-10,67.18223473216393\r
2019-07-15,62.784113864831525\r
2019-07-25,73.94997793543247\r
2019-08-04,69.9760704586304\r
2019-08-24,69.21191547209105\r
2019-09-03,62.409858939518756\r
2019-09-13,63.158804849648774\r
2019-09-18,63.40884031467403\r
2019-10-08,34.27521613521291\r
2019-11-22,70.74185811900968\r
2019-12-02,77.44551291300857\r
2020-01-06,61.9115334408416\r
2020-01-16,65.79372044304452\r
2020-02-15,73.69231000128697\r
2020-02-20,65.29021497461116\r
2020-03-21,78.61764099685341\r
2020-04-05,77.44551291300857\r
2020-04-10,92.26837822799304\r
2020-04-15,95.3735176094665\r
2020-05-20,96.45824287433037\r
2020-05-25,72.79185892386548\r
2020-06-24,100.0\r
2020-07-04,97.68141094552885\r
2020-07-09,100.0\r
2020-07-14,94.02099263005394\r
2020-07-19,79.92401746839712\r
2020-07-24,97.27335404717586\r
2020-07-29,95.50897717820497\r
2020-08-08,91.3273402203724\r
2020-09-02,83.60399028592637\r
2020-09-07,84.39673607717837\r
2020-09-17,81.89141104580014\r
2020-11-06,65.66777330661569\r
2020-11-11,60.66914877648175\r
2020-11-21,59.431711616405494\r
2021-01-10,60.91723187847905\r
2021-02-14,68.57637473633575\r
2021-02-19,73.04891000088264\r
2021-02-24,73.82112201994502\r
2021-03-01,79.00911230408126\r
2021-03-21,88.24872471935386\r
2021-03-31,94.6967836859446\r
2021-04-15,100.0\r
2021-05-30,80.70985351412978\r
2021-06-14,56.727076050134094\r
2021-07-19,77.70568850378702\r
2021-08-23,83.07630637792003\r
2021-08-28,65.16445674079424\r
2021-09-22,73.94997793543247\r
2021-10-07,68.83045365113071\r
2021-10-12,69.84859762008331\r
2021-10-27,60.29739533002972\r
2021-11-06,60.79316562146483\r
2021-11-11,79.40096266190227\r
2021-12-16,82.15443370153845\r
2021-12-21,75.11164887445449\r
2022-01-05,75.62907838307332\r
2022-01-15,72.6633997727586\r
2022-01-25,72.02176980252499\r
2022-02-09,77.83584013973397\r
2022-03-06,78.35687127628283\r
2022-03-26,91.59601595547639\r
2022-04-10,85.85388011208728\r
2022-04-15,89.04985153853376\r
2022-05-30,80.70985351412978\r
2022-06-19,82.0229017904068\r
2022-06-29,82.4176208627222\r
2022-07-04,78.74808924508154\r
2022-07-14,71.3812538903586\r
2022-07-19,68.06876828687082\r
2022-07-24,71.63732618068322\r
2022-08-03,71.89357730190366\r
2022-08-08,72.92036234909796\r
2022-08-13,70.86964736744645\r
2022-08-28,41.5114571156934\r
2022-09-12,44.059404330385284\r
2022-09-22,54.04739065345653\r
2022-10-12,82.94448742126292\r
2022-10-22,74.98239997255526\r
2022-11-06,74.46583963462325\r
2022-11-11,76.92567367699432\r
2022-12-06,77.70568850378702\r
2023-01-20,57.58496976539074\r
2023-02-04,82.8127093517242\r
2023-02-14,70.61411392236707\r
2023-03-16,88.9162323054089\r
2023-04-05,63.53393031530449\r
2023-06-14,82.4176208627222\r
2023-06-24,73.17750183176462\r
2023-07-14,96.86563107143593\r
2023-07-19,92.8069579500238\r
2023-08-08,80.70985351412978\r
2023-08-23,69.9760704586304\r
2023-09-07,64.91308242198559\r
2023-09-27,80.44774143104874\r
2023-10-02,75.49965601156488\r
2023-10-07,86.65073106820617\r
2023-10-12,77.96603427818137\r
`;export{n as default};

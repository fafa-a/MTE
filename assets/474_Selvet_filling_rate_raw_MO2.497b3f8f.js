const r=`date,value\r
2017-01-03,89.13324964562122\r
2017-01-13,89.13324964562122\r
2017-02-22,89.8892320556424\r
2017-02-25,93.02272738675266\r
2017-03-07,92.73686912411175\r
2017-03-14,96.2761888505469\r
2017-03-17,96.75675150920097\r
2017-03-27,94.83773938072237\r
2017-04-03,95.50840983457827\r
2017-04-06,96.18014092268106\r
2017-04-23,96.9491270949464\r
2017-05-03,97.33413578795343\r
2017-05-23,6.445951369701006\r
2017-05-26,40.35485622944911\r
2017-06-02,97.43044154329102\r
2017-06-05,99.84501347885849\r
2017-06-12,90.74142401308933\r
2017-06-15,89.51106139476705\r
2017-06-22,89.51106139476705\r
2017-06-25,97.04534709557656\r
2017-07-02,93.78598150693307\r
2017-07-05,93.40417914643044\r
2017-07-07,98.7809648406596\r
2017-07-17,98.7809648406596\r
2017-07-27,91.4054872513167\r
2017-08-04,96.37225832878464\r
2017-08-06,97.62311727083468\r
2017-08-11,97.62311727083468\r
2017-08-14,96.66059594756352\r
2017-08-19,99.26430550484432\r
2017-08-21,95.70022495388208\r
2017-08-24,95.70022495388208\r
2017-08-26,92.54640692413184\r
2017-08-29,92.64162701832075\r
2017-09-03,90.64664679035165\r
2017-09-20,93.78598150693307\r
2017-09-23,97.62311727083468\r
2017-09-28,96.9491270949464\r
2017-10-03,97.62311727083468\r
2017-10-05,91.69041866003334\r
2017-10-08,91.69041866003334\r
2017-10-10,92.92741932074524\r
2017-10-13,91.4054872513167\r
2017-10-15,91.500442229521\r
2017-10-18,91.59541936997618\r
2017-10-25,88.19029601193543\r
2017-10-28,82.30224680070428\r
2017-10-30,81.46862559859868\r
2017-11-07,82.2095280568686\r
2017-11-14,84.16153592323423\r
2017-11-17,84.16153592323423\r
2017-11-19,79.43896296109952\r
2017-11-22,76.87254673314382\r
2017-11-27,76.87254673314382\r
2017-12-02,76.05167186899509\r
2017-12-07,46.701434322994864\r
2017-12-09,61.888801873012255\r
2017-12-12,55.020770194354455\r
2017-12-14,55.020770194354455\r
2017-12-19,70.27236771363707\r
2018-01-28,77.69539734987418\r
2018-02-02,79.71505601643663\r
2018-02-10,8.946557382918023\r
2018-02-12,11.082072783353453\r
2018-02-22,6.973658568587866\r
2018-03-22,90.55189184449348\r
2018-03-29,90.55189184449348\r
2018-04-01,90.55189184449348\r
2018-04-06,93.6904980910454\r
2018-04-21,97.71948721977765\r
2018-04-23,97.71948721977765\r
2018-04-26,100.0\r
2018-05-06,99.94187213766455\r
2018-05-11,99.36103725600185\r
2018-05-18,99.36103725600185\r
2018-05-21,99.36103725600185\r
2018-05-23,100.0\r
2018-05-28,100.0\r
2018-06-10,96.75675150920097\r
2018-06-20,96.75675150920097\r
2018-06-22,94.74201613808273\r
2018-06-25,91.21564383234372\r
2018-06-27,92.07063706391021\r
2018-07-02,93.30878330688108\r
2018-07-07,95.70022495388208\r
2018-07-10,96.2761888505469\r
2018-07-12,93.6904980910454\r
2018-07-15,94.4549769088376\r
2018-07-17,94.4549769088376\r
2018-07-20,98.10518064599667\r
2018-07-22,94.74201613808273\r
2018-07-25,94.74201613808273\r
2018-07-27,94.07256288602233\r
2018-07-30,94.74201613808273\r
2018-08-01,93.78598150693307\r
2018-08-04,93.78598150693307\r
2018-08-06,93.97701391665547\r
2018-08-11,90.93104523799282\r
2018-08-16,93.6904980910454\r
2018-08-19,92.26087883586146\r
2018-08-21,89.79465578801268\r
2018-08-26,87.90785033558876\r
2018-08-31,87.06173818660942\r
2018-09-03,86.96783943128614\r
2018-09-08,82.30224680070428\r
2018-09-10,81.1911765800791\r
2018-09-13,82.2095280568686\r
2018-09-18,81.56115587391857\r
2018-09-20,78.88742404889949\r
2018-09-23,77.87852019027653\r
2018-09-25,79.89923762523642\r
2018-09-28,77.05523209064002\r
2018-09-30,77.05523209064002\r
2018-10-03,78.15338604641384\r
2018-10-05,72.6979750755897\r
2018-10-13,70.09343198743174\r
2018-10-20,64.51027261094485\r
2018-10-23,61.19389704858832\r
2018-10-25,58.86172528453171\r
2018-10-30,58.86172528453171\r
2018-11-04,56.720662356675874\r
2018-11-22,43.70307414632919\r
2018-11-29,44.58979451539609\r
2018-12-27,74.50656263101195\r
2018-12-29,74.50656263101195\r
2019-01-03,78.61197902020908\r
2019-01-06,78.61197902020908\r
2019-01-11,78.61197902020908\r
2019-01-16,87.90785033558876\r
2019-01-23,81.09874089237667\r
2019-01-28,75.1419201721703\r
2019-03-12,1.6387628295009833\r
2019-03-22,88.00197625597886\r
2019-03-24,90.17309508661894\r
2019-03-27,86.49868778497797\r
2019-03-29,89.13324964562122\r
2019-04-01,88.09612481920088\r
2019-04-13,89.32211060406394\r
2019-05-01,93.30878330688108\r
2019-05-06,96.75675150920097\r
2019-05-11,96.75675150920097\r
2019-05-13,94.35934070568437\r
2019-05-16,94.35934070568437\r
2019-05-23,95.50840983457827\r
2019-05-31,99.65135954159092\r
2019-06-02,93.88148678621717\r
2019-06-17,94.74201613808273\r
2019-06-27,94.74201613808273\r
2019-06-30,94.55063489003727\r
2019-07-02,95.3166812974233\r
2019-07-05,97.71948721977765\r
2019-07-07,97.33413578795343\r
2019-07-10,97.43044154329102\r
2019-07-12,97.43044154329102\r
2019-07-15,97.91229122996218\r
2019-07-17,96.85292856224412\r
2019-07-20,95.98810976544108\r
2019-07-22,92.54640692413184\r
2019-07-25,91.21564383234372\r
2019-08-04,86.87396346656523\r
2019-08-09,77.51237150687223\r
2019-08-14,74.32525499218528\r
2019-08-16,75.3236734400663\r
2019-08-21,74.96026570189798\r
2019-08-24,66.71332414216455\r
2019-08-26,66.00653988751677\r
2019-08-29,66.00653988751677\r
2019-08-31,66.71332414216455\r
2019-09-03,69.6465420911334\r
2019-09-05,69.6465420911334\r
2019-09-08,69.55724129988269\r
2019-09-13,70.72015518905094\r
2019-09-15,70.72015518905094\r
2019-09-18,60.587306795681094\r
2019-09-20,60.587306795681094\r
2019-10-03,60.587306795681094\r
2019-10-08,50.90602002161424\r
2019-10-13,54.0908161615293\r
2019-10-25,62.67267170454057\r
2019-12-29,82.2095280568686\r
2020-01-06,60.414245222454554\r
2020-01-11,60.414245222454554\r
2020-01-16,82.85905210256965\r
2020-01-18,75.41458708208853\r
2020-02-05,85.0946684886728\r
2020-02-07,88.4729452343023\r
2020-02-12,88.4729452343023\r
2020-02-15,88.4729452343023\r
2020-02-20,85.37505866877564\r
2020-02-22,80.72923512985561\r
2020-03-08,76.14278225663656\r
2020-03-18,90.55189184449348\r
2020-03-21,90.74142401308933\r
2020-03-28,89.51106139476705\r
2020-03-31,89.7001019133296\r
2020-04-02,89.7001019133296\r
2020-04-05,91.12075541696011\r
2020-04-07,91.02588921459767\r
2020-04-10,91.02588921459767\r
2020-04-12,91.02588921459767\r
2020-04-15,92.26087883586146\r
2020-04-25,98.8775905233099\r
2020-05-07,98.97423744246012\r
2020-05-17,92.26087883586146\r
2020-05-20,90.83622349989948\r
2020-05-22,98.00872526803172\r
2020-05-25,99.74817594307324\r
2020-05-30,99.74817594307324\r
2020-06-21,93.30878330688108\r
2020-06-24,93.30878330688108\r
2020-06-26,95.41253473725098\r
2020-06-29,95.41253473725098\r
2020-07-01,95.41253473725098\r
2020-07-04,98.39467470385638\r
2020-07-06,97.71948721977765\r
2020-07-09,97.04534709557656\r
2020-07-11,98.49121532607053\r
2020-07-14,98.49121532607053\r
2020-07-19,96.9491270949464\r
2020-07-21,95.3166812974233\r
2020-07-24,93.59503655081276\r
2020-07-26,98.00872526803172\r
2020-07-29,95.70022495388208\r
2020-07-31,93.30878330688108\r
2020-08-05,88.19029601193543\r
2020-08-08,92.3560328204168\r
2020-08-10,91.500442229521\r
2020-08-15,88.28448982088189\r
2020-08-20,87.15565971900538\r
2020-08-25,88.00197625597886\r
2020-09-02,74.23463843700641\r
2020-09-04,74.32525499218528\r
2020-09-07,72.5176674366841\r
2020-09-12,69.82522091602694\r
2020-09-14,67.24452044272265\r
2020-09-17,62.062803333046624\r
2020-11-06,93.40417914643044\r
2020-11-08,94.55063489003727\r
2020-11-11,88.4729452343023\r
2020-11-18,88.567206812269\r
2020-11-21,83.97518742779175\r
2020-11-23,82.2095280568686\r
2020-11-28,81.28363593689288\r
2021-01-07,41.146588122053565\r
2021-01-10,41.146588122053565\r
2021-01-17,41.146588122053565\r
2021-02-14,85.84283592336072\r
2021-02-19,91.59541936997618\r
2021-02-24,86.12377784045839\r
2021-02-26,89.13324964562122\r
2021-03-01,89.13324964562122\r
2021-03-06,82.95193499068014\r
2021-03-23,92.73686912411175\r
2021-03-28,94.74201613808273\r
2021-03-31,95.50840983457827\r
2021-04-02,98.39467470385638\r
2021-04-05,97.33413578795343\r
2021-04-15,99.36103725600185\r
2021-04-17,99.55456428570832\r
2021-05-27,95.02925104284171\r
2021-05-30,95.02925104284171\r
2021-06-01,95.02925104284171\r
2021-06-14,97.52676870813116\r
2021-06-16,100.0\r
2021-06-19,100.0\r
2021-06-26,96.2761888505469\r
2021-07-01,98.20165735230873\r
2021-07-09,95.3166812974233\r
2021-07-11,99.26430550484432\r
2021-07-19,100.0\r
2021-07-21,100.0\r
2021-07-26,91.500442229521\r
2021-07-29,91.500442229521\r
2021-08-20,88.66149095343306\r
2021-08-23,87.71966647667661\r
2021-08-25,87.71966647667661\r
2021-08-28,93.11805741469192\r
2021-08-30,89.7001019133296\r
2021-09-04,94.35934070568437\r
2021-09-07,94.35934070568437\r
2021-09-22,87.06173818660942\r
2021-09-24,89.13324964562122\r
2021-10-07,89.8892320556424\r
2021-10-09,89.8892320556424\r
2021-10-12,90.74142401308933\r
2021-10-14,88.75579764458753\r
2021-10-17,90.07845171788671\r
2021-10-19,87.81374707136891\r
2021-10-24,87.62560856488808\r
2021-10-27,84.62781301472721\r
2021-11-06,85.56210059672303\r
2021-11-11,87.71966647667661\r
2021-11-18,87.71966647667661\r
2021-12-11,75.59648830044165\r
2021-12-16,89.03885288620292\r
2021-12-18,85.0946684886728\r
2021-12-21,84.72113789505096\r
2021-12-23,88.567206812269\r
2022-01-15,92.3560328204168\r
2022-01-17,83.13777092641953\r
2022-01-22,78.52021217672221\r
2022-01-25,80.91394058369595\r
2022-01-27,82.30224680070428\r
2022-01-30,84.34797724151116\r
2022-02-09,89.7001019133296\r
2022-03-01,1.264985299401595\r
2022-03-06,1.264985299401595\r
2022-03-08,92.07063706391021\r
2022-03-23,94.26372629272136\r
2022-03-26,95.12503943821231\r
2022-03-28,91.97554930158766\r
2022-04-05,92.3560328204168\r
2022-04-15,90.83622349989948\r
2022-04-17,94.83773938072237\r
2022-04-22,94.83773938072237\r
2022-05-17,93.11805741469192\r
2022-05-20,93.02272738675266\r
2022-05-22,93.02272738675266\r
2022-05-27,98.20165735230873\r
2022-05-30,98.20165735230873\r
2022-06-01,100.0\r
2022-06-04,97.43044154329102\r
2022-06-06,99.74817594307324\r
2022-06-11,98.97423744246012\r
2022-06-14,96.08411455702722\r
2022-06-16,100.0\r
2022-06-19,94.55063489003727\r
2022-07-01,94.16813368210855\r
2022-07-04,94.16813368210855\r
2022-07-06,96.46834934556993\r
2022-07-11,93.11805741469192\r
2022-07-14,93.40417914643044\r
2022-07-16,94.55063489003727\r
2022-07-19,92.73686912411175\r
2022-07-21,92.73686912411175\r
2022-07-24,92.73686912411175\r
2022-07-26,91.59541936997618\r
2022-07-31,90.45715918833962\r
2022-08-03,89.7001019133296\r
2022-08-05,85.56210059672303\r
2022-08-08,80.91394058369595\r
2022-08-10,81.00632888862751\r
2022-08-13,80.26788726941014\r
2022-08-20,86.78011030599578\r
2022-08-28,65.56566118078412\r
2022-08-30,69.20029603430112\r
2022-09-02,69.20029603430112\r
2022-09-04,66.2713855755474\r
2022-09-12,67.06734978254069\r
2022-09-19,68.75469609839271\r
2022-09-22,65.56566118078412\r
2022-10-04,67.24452044272265\r
2022-10-07,71.43794218661493\r
2022-10-09,67.51047330366389\r
2022-10-12,67.51047330366389\r
2022-10-19,66.35972043190799\r
2022-10-22,62.236914554278314\r
2022-10-24,62.49828681867715\r
2022-11-11,61.54112891601227\r
2022-11-13,61.54112891601227\r
2022-11-16,61.54112891601227\r
2022-12-06,69.82522091602694\r
2022-12-11,69.82522091602694\r
2022-12-16,69.82522091602694\r
2022-12-28,90.26776079653298\r
2023-01-20,77.51237150687223\r
2023-01-30,77.51237150687223\r
2023-02-06,64.42249769233567\r
2023-02-09,64.42249769233567\r
2023-02-11,78.15338604641384\r
2023-02-14,86.03010760320547\r
2023-02-16,88.4729452343023\r
2023-02-19,86.87396346656523\r
2023-02-26,88.28448982088189\r
2023-03-16,95.41253473725098\r
2023-03-28,91.88048363844466\r
2023-04-05,92.83213322906192\r
2023-04-07,91.12075541696011\r
2023-04-17,89.98383070325048\r
2023-05-27,90.17309508661894\r
2023-05-30,90.17309508661894\r
2023-06-04,90.74142401308933\r
2023-06-24,91.21564383234372\r
2023-06-26,91.4054872513167\r
2023-06-29,91.4054872513167\r
2023-07-09,97.33413578795343\r
2023-07-11,97.33413578795343\r
2023-07-14,99.1675949446192\r
2023-07-16,99.1675949446192\r
2023-07-19,99.65135954159092\r
2023-07-31,87.71966647667661\r
2023-08-08,88.00197625597886\r
2023-08-10,88.00197625597886\r
2023-08-13,90.45715918833962\r
2023-08-15,86.40492597689374\r
2023-08-18,86.40492597689374\r
2023-08-20,86.59247245160446\r
2023-08-23,87.06173818660942\r
`;export{r as default};

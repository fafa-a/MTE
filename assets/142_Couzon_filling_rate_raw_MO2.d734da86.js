const n=`date,value\r
2017-03-14,86.76778679068747\r
2017-04-23,88.56850136603653\r
2017-04-30,88.56850136603653\r
2017-06-02,80.27015867112202\r
2017-06-09,80.03702643925865\r
2017-06-12,80.73709081533356\r
2017-06-22,91.47479387341122\r
2017-07-02,92.2061699408762\r
2017-07-07,74.16807804682463\r
2017-07-09,74.16807804682463\r
2017-07-12,74.16807804682463\r
2017-07-14,74.16807804682463\r
2017-07-17,95.15072916671102\r
2017-07-22,95.15072916671102\r
2017-07-24,95.15072916671102\r
2017-07-27,95.15072916671102\r
2017-08-21,82.61368951440863\r
2017-08-23,82.61368951440863\r
2017-08-26,92.81710974910716\r
2017-09-05,77.02666914201998\r
2017-10-05,14.978522223218969\r
2017-10-07,14.978522223218969\r
2017-10-10,14.978522223218969\r
2017-10-12,14.978522223218969\r
2017-10-15,17.530941343403025\r
2017-10-17,10.229723665457511\r
2017-10-22,10.229723665457511\r
2017-10-25,10.229723665457511\r
2017-10-30,5.097991132972338\r
2017-11-14,11.131436299948572\r
2017-11-16,11.131436299948572\r
2017-11-21,11.131436299948572\r
2018-03-14,57.05336587234028\r
2018-03-16,57.05336587234028\r
2018-03-19,81.67361964432652\r
2018-03-21,81.67361964432652\r
2018-03-24,81.67361964432652\r
2018-04-18,85.21702745386264\r
2018-04-20,85.21702745386264\r
2018-04-25,85.21702745386264\r
2018-06-22,73.48731720541825\r
2018-06-24,73.48731720541825\r
2018-06-27,88.327704679184\r
2018-06-29,88.327704679184\r
2018-07-02,87.72665598676478\r
2018-07-04,78.75878871111956\r
2018-07-07,86.40910430948982\r
2018-07-09,84.86046651750884\r
2018-07-12,84.86046651750884\r
2018-07-17,84.38581655463982\r
2018-08-01,92.2061699408762\r
2018-08-03,92.2061699408762\r
2018-08-06,92.2061699408762\r
2018-08-11,92.45038681121841\r
2018-08-16,80.73709081533356\r
2018-08-18,80.73709081533356\r
2018-08-21,84.62303221731766\r
2018-08-23,79.80411706364373\r
2018-08-26,87.2467886693991\r
2018-08-28,87.2467886693991\r
2018-08-31,87.2467886693991\r
2018-09-02,74.39545615761915\r
2018-09-05,74.39545615761915\r
2018-09-10,72.13199805784703\r
2018-09-12,72.13199805784703\r
2018-09-17,72.13199805784703\r
2018-09-20,76.91164504277928\r
2018-09-22,68.78019331233044\r
2018-09-25,80.15356471206394\r
2018-09-27,80.15356471206394\r
2018-10-02,70.22620776845717\r
2018-10-05,70.44954733767676\r
2018-10-10,60.31496859554532\r
2018-10-12,60.31496859554532\r
2018-10-15,60.31496859554532\r
2018-10-20,58.83461388056098\r
2018-10-22,58.83461388056098\r
2018-10-25,58.83461388056098\r
2018-10-30,58.83461388056098\r
2019-02-17,56.6368697067026\r
2019-02-19,56.6368697067026\r
2019-02-22,75.99348798728235\r
2019-02-24,75.99348798728235\r
2019-02-27,67.0141064276361\r
2019-03-04,78.41135331921491\r
2019-03-16,81.20491172627969\r
2019-03-19,81.20491172627969\r
2019-03-24,72.13199805784703\r
2019-03-26,72.13199805784703\r
2019-03-29,87.9669136762301\r
2019-03-31,87.9669136762301\r
2019-04-05,87.9669136762301\r
2019-04-13,85.81238590178997\r
2019-05-13,89.41298352180426\r
2019-05-15,89.41298352180426\r
2019-05-23,94.2887608971822\r
2019-05-25,94.2887608971822\r
2019-05-30,91.84024274906159\r
2019-06-02,100.0\r
2019-06-04,100.0\r
2019-06-07,100.0\r
2019-06-12,100.0\r
2019-06-27,85.21702745386264\r
2019-06-29,85.21702745386264\r
2019-07-02,85.21702745386264\r
2019-07-04,85.21702745386264\r
2019-07-07,90.86677711796344\r
2019-07-09,90.86677711796344\r
2019-07-12,84.97926559101529\r
2019-07-14,100.0\r
2019-07-17,85.69320531170166\r
2019-07-19,85.69320531170166\r
2019-07-22,96.51044562783272\r
2019-07-24,94.2887608971822\r
2019-07-29,100.0\r
2019-08-01,91.47479387341122\r
2019-08-03,94.6578603274634\r
2019-08-06,93.06185651611733\r
2019-08-08,93.7973657959604\r
2019-08-11,88.93009992088795\r
2019-08-13,88.93009992088795\r
2019-08-16,88.93009992088795\r
2019-08-18,95.64443807972721\r
2019-08-21,82.96712580360996\r
2019-08-23,85.09811924518664\r
2019-08-26,79.68774601655555\r
2019-08-28,83.91204198492599\r
2019-08-31,77.14174969281045\r
2019-09-02,77.14174969281045\r
2019-09-07,85.69320531170166\r
2019-09-12,79.5714307671633\r
2019-09-15,84.50439704313953\r
2019-09-17,67.2340410808896\r
2019-09-20,81.20491172627969\r
2019-09-22,81.20491172627969\r
2019-09-27,81.20491172627969\r
2019-09-30,81.20491172627969\r
2020-02-07,62.23594879006418\r
2020-02-09,62.23594879006418\r
2020-02-12,73.94092869052913\r
2020-02-14,73.94092869052913\r
2020-02-22,65.04538517422917\r
2020-02-24,71.00891432311305\r
2020-03-08,53.74964359167965\r
2020-03-18,69.7802281248554\r
2020-03-20,69.7802281248554\r
2020-03-23,69.7802281248554\r
2020-03-25,69.7802281248554\r
2020-03-28,89.05074027881913\r
2020-04-02,84.62303221731766\r
2020-04-04,94.2887608971822\r
2020-04-07,87.60660811166717\r
2020-04-09,87.60660811166717\r
2020-04-12,87.84675785006235\r
2020-04-14,88.56850136603653\r
2020-04-17,88.56850136603653\r
2020-04-22,84.74172205086475\r
2020-05-17,80.15356471206394\r
2020-05-19,80.15356471206394\r
2020-05-22,93.67464886953981\r
2020-05-24,93.67464886953981\r
2020-05-27,82.26074923153428\r
2020-05-29,82.26074923153428\r
2020-06-01,92.69481578417384\r
2020-07-01,78.87471259131782\r
2020-07-08,78.87471259131782\r
2020-07-11,78.87471259131782\r
2020-07-13,72.69570701658728\r
2020-07-31,79.80411706364373\r
2020-08-05,82.73144653490138\r
2020-08-07,83.43914450060085\r
2020-08-10,83.43914450060085\r
2020-08-15,76.6817663147705\r
2020-08-20,75.53576965290425\r
2020-08-25,77.94889176954563\r
2020-08-27,77.94889176954563\r
2020-09-01,84.03040346686741\r
2020-09-04,73.71400832954058\r
2020-09-09,76.45211374087083\r
2020-09-14,74.50923092090552\r
2020-09-16,74.50923092090552\r
2020-09-19,74.50923092090552\r
2021-02-21,69.11301122705214\r
2021-02-23,69.11301122705214\r
2021-02-26,69.11301122705214\r
2021-02-28,69.11301122705214\r
2021-03-23,85.33599019091999\r
2021-03-25,85.33599019091999\r
2021-03-28,94.1658330598192\r
2021-03-30,94.1658330598192\r
2021-04-02,86.76778679068747\r
2021-04-04,97.0064570844058\r
2021-04-07,86.76778679068747\r
2021-04-09,86.17025395838725\r
2021-05-27,85.33599019091999\r
2021-05-29,85.33599019091999\r
2021-06-01,87.84675785006235\r
2021-06-03,87.84675785006235\r
2021-06-11,86.52861090167126\r
2021-06-16,100.0\r
2021-06-18,100.0\r
2021-06-21,100.0\r
2021-06-26,90.38132370286554\r
2021-07-21,79.92054388050519\r
2021-07-23,77.02666914201998\r
2021-08-15,81.08787327306796\r
2021-08-17,81.08787327306796\r
2021-08-20,84.38581655463982\r
2021-08-25,84.38581655463982\r
2021-08-27,81.55635960374227\r
2021-09-24,64.71914399542729\r
2021-09-26,64.71914399542729\r
2021-09-29,64.71914399542729\r
2021-10-01,64.71914399542729\r
2021-10-14,72.80862168119275\r
2021-10-16,72.80862168119275\r
2021-10-21,72.80862168119275\r
2021-10-24,74.62306278285216\r
2022-02-26,66.24620211607508\r
2022-02-28,66.24620211607508\r
2022-03-03,66.24620211607508\r
2022-03-05,66.24620211607508\r
2022-03-08,77.37208003348024\r
2022-03-10,76.56691174402404\r
2022-04-17,83.91204198492599\r
2022-04-19,83.91204198492599\r
2022-04-27,84.38581655463982\r
2022-05-02,76.22268755387363\r
2022-05-04,76.22268755387363\r
2022-05-07,93.55198473002501\r
2022-05-09,93.30681490666822\r
2022-05-12,95.02743314160894\r
2022-05-14,95.02743314160894\r
2022-05-17,95.02743314160894\r
2022-05-27,85.69320531170166\r
2022-05-29,85.69320531170166\r
2022-06-06,85.69320531170166\r
2022-06-11,80.85396279010078\r
2022-06-13,80.85396279010078\r
2022-06-16,81.3220056173851\r
2022-06-18,81.3220056173851\r
2022-06-21,81.3220056173851\r
2022-07-06,76.22268755387363\r
2022-07-08,76.22268755387363\r
2022-07-11,80.85396279010078\r
2022-07-13,80.85396279010078\r
2022-07-16,77.94889176954563\r
2022-07-18,90.50260695963289\r
2022-07-21,73.48731720541825\r
2022-07-26,87.9669136762301\r
2022-07-28,68.33725786779226\r
2022-07-31,74.16807804682463\r
2022-08-02,70.44954733767676\r
2022-08-05,77.83341686469495\r
2022-08-07,77.83341686469495\r
2022-08-10,74.62306278285216\r
2022-08-12,80.62027438843664\r
2022-08-15,80.62027438843664\r
2022-08-17,76.45211374087083\r
2022-08-25,70.44954733767676\r
2022-08-30,71.56973253343052\r
2022-09-01,71.56973253343052\r
2022-09-04,71.23306767995744\r
2022-09-06,74.05447475933158\r
2022-09-09,76.33737233443213\r
2022-09-11,80.15356471206394\r
2022-09-19,79.80411706364373\r
2022-09-21,67.5643865792298\r
2023-02-11,59.67905148746557\r
2023-02-13,59.67905148746557\r
2023-02-16,61.37973785509644\r
2023-02-21,57.4708632170163\r
2023-02-26,60.95309581075217\r
2023-03-03,59.256338557765574\r
2023-05-27,76.33737233443213\r
2023-05-29,68.78019331233044\r
2023-06-01,82.49598760570403\r
2023-06-03,82.49598760570403\r
2023-06-06,71.7944652834628\r
2023-06-08,76.45211374087083\r
2023-06-16,69.7802281248554\r
2023-07-11,92.69481578417384\r
2023-07-13,92.69481578417384\r
2023-07-16,83.2030251969351\r
2023-07-18,90.86677711796344\r
2023-07-21,90.86677711796344\r
2023-07-23,78.87471259131782\r
2023-07-26,78.87471259131782\r
2023-07-31,58.939952268920635\r
2023-08-02,58.939952268920635\r
2023-08-05,58.939952268920635\r
2023-08-07,58.939952268920635\r
2023-08-25,62.23594879006418\r
2023-09-01,57.8893592399736\r
2023-09-04,59.256338557765574\r
2023-09-06,53.239310544210895\r
2023-09-11,53.239310544210895\r
2023-09-14,55.290202138563004\r
2023-09-19,54.26157332049558\r
2023-09-29,51.1134665436861\r
2023-10-01,51.1134665436861\r
2023-10-06,51.1134665436861\r
2023-10-09,51.1134665436861\r
`;export{n as default};

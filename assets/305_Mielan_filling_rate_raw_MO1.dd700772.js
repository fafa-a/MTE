const n=`date,value\r
2017-01-26,26.398009006626012\r
2017-02-15,36.51636604896782\r
2017-02-25,37.385796638494455\r
2017-04-06,56.4528729186984\r
2017-05-16,54.704255264382184\r
2017-05-26,53.42762876299465\r
2017-06-05,56.06443659347152\r
2017-07-05,51.31175448107938\r
2017-08-14,40.55821010908865\r
2017-08-24,35.729932929000846\r
2017-10-08,28.419577841882155\r
2017-10-13,26.963441587702775\r
2017-10-23,26.664268546108584\r
2017-11-07,24.121766272015552\r
2017-11-17,24.166579586651977\r
2017-11-22,23.898326560944206\r
2017-12-12,23.029599498101913\r
2018-02-15,96.15622467990138\r
2018-02-25,95.43970180120654\r
2018-03-02,93.3652230654953\r
2018-03-22,99.80970719095336\r
2018-04-21,98.95818578182593\r
2018-05-11,98.08011727951381\r
2018-05-21,93.57164022036736\r
2018-06-20,95.43970180120654\r
2018-06-25,92.10225672565969\r
2018-07-15,92.98248457483521\r
2018-07-25,91.40110318552499\r
2018-07-30,90.76074404792756\r
2018-08-04,88.79575313456517\r
2018-08-19,82.25427725464849\r
2018-09-03,74.77328829772433\r
2018-09-08,75.35434691113623\r
2018-09-23,72.78338250199099\r
2018-10-03,68.4298923527612\r
2018-10-23,57.53379810820891\r
2018-11-12,56.26991149570196\r
2018-11-17,53.40536699690486\r
2018-11-27,52.100173398797054\r
2018-12-07,53.3386096678413\r
2019-01-11,56.68199435038861\r
2019-01-16,54.54666074097882\r
2019-02-15,88.10738618596231\r
2019-02-20,89.65999706852715\r
2019-02-25,88.8819882628593\r
2019-03-22,84.53761672205871\r
2019-03-27,89.89117245893111\r
2019-05-01,80.54870314033332\r
2019-05-06,85.49358019620392\r
2019-05-16,97.50696301320312\r
2019-07-05,85.86052300343076\r
2019-07-15,87.19375053646108\r
2019-07-25,78.48249343026212\r
2019-08-04,75.77835448215765\r
2019-08-09,76.5765906683104\r
2019-08-14,72.86142018045561\r
2019-08-24,66.42786548218564\r
2019-08-29,65.14256375466721\r
2019-09-13,51.72711174506325\r
2019-10-08,46.189270313799796\r
2019-10-13,44.1229635711215\r
2019-12-17,84.565656205213\r
2020-01-11,92.65924592167742\r
2020-01-16,92.48317230893699\r
2020-02-05,91.75134343632907\r
2020-02-15,83.08600144971143\r
2020-02-20,86.71032779924056\r
2020-03-21,95.73792576051756\r
2020-03-26,85.83226859967027\r
2020-04-05,87.36469274156384\r
2020-04-10,87.53580316604072\r
2020-05-05,94.63683214272402\r
2020-05-20,92.2486692390414\r
2020-05-25,98.62466243977185\r
2020-05-30,94.34033781578654\r
2020-06-24,89.31379478402242\r
2020-07-09,91.1388646713927\r
2020-07-19,88.62340905232084\r
2020-07-24,81.15185156409224\r
2020-08-08,79.59380802576807\r
2020-08-18,69.77268439128093\r
2020-09-02,60.60096122965815\r
2020-09-12,57.04955852741362\r
2020-11-11,53.44989519063458\r
2020-11-21,53.3386096678413\r
2020-11-26,52.695451723624664\r
2020-12-26,91.28450599720162\r
2021-02-14,100.0\r
2021-02-19,93.80782599999505\r
2021-02-24,100.0\r
2021-03-01,93.98516165867287\r
2021-03-31,99.47474374418607\r
2021-04-05,94.93379392822186\r
2021-04-15,98.14054749014383\r
2021-05-20,86.9092206777496\r
2021-06-09,86.88079339152765\r
2021-06-14,92.0144653052785\r
2021-06-29,48.408975147830716\r
2021-09-12,81.01457385905701\r
2021-10-07,77.5937231858182\r
2021-10-12,77.72805843328268\r
2021-10-17,74.22074958884092\r
2021-10-27,73.46110498199438\r
2021-12-16,93.54213803246172\r
2022-01-15,87.507273079992\r
2022-01-25,90.23849635504307\r
2022-02-09,90.7898022077429\r
2022-03-01,100.0\r
2022-03-21,100.0\r
2022-03-26,92.42451849724772\r
2022-04-05,96.3058392101883\r
2022-07-14,89.11215422426739\r
2022-08-28,42.46047232418593\r
2022-09-22,28.98987678502502\r
2022-10-02,23.838919084146088\r
2022-11-06,17.16091160116184\r
2022-11-11,15.600236855406402\r
2022-11-16,14.643881555311852\r
2022-12-21,26.17974452649921\r
2023-01-10,34.16508589229207\r
2023-02-04,73.12184923681012\r
2023-02-09,71.66945957642083\r
2023-02-14,71.46317044295425\r
2023-02-24,69.54373894483054\r
2023-03-16,75.7252881632521\r
2023-04-05,77.67431032407112\r
2023-06-24,87.90711951264016\r
`;export{n as default};

const n=`date,value\r
2017-01-19,304805.09550213534\r
2017-01-26,355877.3998761031\r
2017-02-15,387068.25944447715\r
2017-02-18,342795.7752108722\r
2017-02-25,410923.93321736297\r
2017-03-27,452985.4299910274\r
2017-04-09,406215.71367437864\r
2017-04-19,383361.77141351084\r
2017-05-16,440922.64440303796\r
2017-05-26,368633.9052991672\r
2017-06-15,407156.1710497036\r
2017-06-18,376438.4607980814\r
2017-08-02,347742.00330844085\r
2017-08-14,323206.3878362295\r
2017-08-22,336082.2458601856\r
2017-08-24,328074.1455379932\r
2017-08-27,324531.9854380353\r
2017-08-29,304805.09550213534\r
2017-09-18,264716.2742936926\r
2017-09-21,249368.40393261853\r
2017-10-13,270167.77150080947\r
2017-10-16,273959.6058419633\r
2017-10-28,285848.0714266619\r
2017-10-31,274804.19360884203\r
2017-11-07,314407.1236299346\r
2018-02-08,386604.415856732\r
2018-02-10,382436.6735682808\r
2018-02-25,445254.9939262996\r
2018-03-20,429903.90572479286\r
2018-04-19,403867.1725872353\r
2018-04-21,421333.9531446444\r
2018-04-24,370466.24884569866\r
2018-05-04,430381.3942807109\r
2018-05-06,451533.20624353556\r
2018-05-16,402459.83553648787\r
2018-05-19,385677.18476702156\r
2018-05-21,384750.56234400737\r
2018-06-20,405745.70788915444\r
2018-06-23,413755.9668341636\r
2018-06-25,401991.0215914271\r
2018-06-28,421333.9531446444\r
2018-07-03,402459.83553648787\r
2018-07-15,411395.56963616016\r
2018-07-25,424185.36273946206\r
2018-07-28,404806.1425138987\r
2018-08-04,414228.4887584188\r
2018-08-07,376438.4607980814\r
2018-08-12,359055.0038799157\r
2018-08-19,352707.529032012\r
2018-08-22,339658.2805084273\r
2018-09-01,301767.0343781296\r
2018-09-08,318358.5789540753\r
2018-09-11,311343.1143311882\r
2018-09-16,307415.7523032773\r
2018-09-26,285848.0714266619\r
2018-09-28,304370.57797157235\r
2018-10-06,299602.09084993525\r
2018-10-08,301333.7050730509\r
2018-10-18,317039.9294329183\r
2018-10-21,309595.93860208505\r
2018-10-23,310032.48063267284\r
2018-12-10,354517.9350565859\r
2019-02-13,385677.18476702156\r
2019-02-15,371842.133988579\r
2019-02-20,403867.1725872353\r
2019-02-23,376898.9410632938\r
2019-02-25,376438.4607980814\r
2019-03-22,364063.9310080083\r
2019-03-30,344142.82555147604\r
2019-04-11,420859.2294232857\r
2019-04-19,394510.36190359615\r
2019-05-06,389854.508372224\r
2019-05-14,391249.67818176537\r
2019-06-30,360419.1937384769\r
2019-07-05,355877.3998761031\r
2019-07-23,286275.2025864626\r
2019-07-25,247724.2582833285\r
2019-08-22,140275.17209962755\r
2019-09-03,86086.22963339472\r
2019-09-06,88247.17683589383\r
2019-09-13,82112.22513403925\r
2019-09-16,67034.13451072888\r
2019-09-18,76397.69852079169\r
2019-09-21,72847.27754728959\r
2019-10-11,101191.40028097882\r
2019-11-22,185640.18401063356\r
2019-12-02,192122.78584753486\r
2019-12-05,204488.25752361648\r
2020-01-06,234274.45039039283\r
2020-01-16,260543.55658954562\r
2020-01-19,258048.64374024482\r
2020-01-21,282437.30726783426\r
2020-01-24,263880.282682399\r
2020-02-15,305239.7823393797\r
2020-03-19,382899.1461577003\r
2020-03-24,322764.8515621565\r
2020-03-26,401991.0215914271\r
2020-03-31,362240.30992706545\r
2020-04-05,396843.9416840196\r
2020-04-10,387532.2549505856\r
2020-04-15,429426.56202446605\r
2020-05-15,399649.19345907785\r
2020-05-18,353612.4154907693\r
2020-05-20,404806.1425138987\r
2020-05-25,384750.56234400737\r
2020-05-28,386604.415856732\r
2020-05-30,421333.9531446444\r
2020-06-02,389389.7545098691\r
2020-06-24,394510.36190359615\r
2020-07-07,362240.30992706545\r
2020-07-09,401991.0215914271\r
2020-07-14,411867.3538308545\r
2020-07-19,406685.86808721395\r
2020-07-22,405275.8508096045\r
2020-07-24,402459.83553648787\r
2020-07-29,373678.81303497497\r
2020-08-06,348192.61918897607\r
2020-08-08,333852.48505435674\r
2020-09-07,247313.68652839636\r
2020-09-10,233870.0969379195\r
2020-09-12,278613.6082617437\r
2020-09-15,232658.18270978876\r
2020-09-17,255974.56970686093\r
2020-11-14,246903.30091599096\r
2020-11-19,263462.55793415906\r
2020-11-21,276495.4975933735\r
2020-11-29,256389.0185323064\r
2021-02-24,433727.86401591176\r
2021-02-27,419435.93611495715\r
2021-03-01,422759.00111773604\r
2021-03-06,409509.9113859159\r
2021-03-09,415173.9744806998\r
2021-03-24,424185.36273946206\r
2021-03-29,403397.9111131535\r
2021-03-31,416120.04886064975\r
2021-04-03,421333.9531446444\r
2021-04-08,411395.56963616016\r
2021-04-23,406215.71367437864\r
2021-04-25,410452.44465136714\r
2021-05-03,401053.8417824708\r
2021-05-28,403867.1725872353\r
2021-06-14,412339.28572464647\r
2021-07-19,435164.2309033997\r
2021-07-22,430381.3942807109\r
2021-08-26,396843.9416840196\r
2021-09-02,393112.0207327383\r
2021-09-07,383361.77141351084\r
2021-09-22,354970.9320251909\r
2021-10-15,359509.5767689395\r
2021-10-22,358600.5881749106\r
2021-10-27,361329.43836373446\r
2021-11-06,362240.30992706545\r
2021-11-09,341898.54410560185\r
2021-11-29,364520.2269991136\r
2021-12-09,357238.28506778163\r
2022-01-05,409509.9113859159\r
2022-01-20,397311.1085897316\r
2022-02-09,395443.34254460037\r
2022-02-12,399649.19345907785\r
2022-03-24,415173.9744806998\r
2022-03-26,416593.30660737434\r
2022-04-15,407156.1710497036\r
2022-05-03,451049.4149016445\r
2022-05-08,396843.9416840196\r
2022-05-10,425136.9993014566\r
2022-05-13,377820.36280051444\r
2022-05-18,386140.7242699933\r
2022-05-28,363151.80771295476\r
2022-06-02,376898.9410632938\r
2022-06-12,319678.7224634905\r
2022-06-17,327630.80134092097\r
2022-06-19,332961.7172582965\r
2022-06-29,323648.0889749324\r
2022-07-02,302634.2031105743\r
2022-07-04,312217.70873245015\r
2022-07-12,303068.04231672874\r
2022-07-14,306980.2205699436\r
2022-07-17,285848.0714266619\r
2022-07-19,287985.46796944726\r
2022-08-03,238734.89664410724\r
2022-08-06,215083.4972291822\r
2022-08-08,203709.26755202588\r
2022-08-11,181478.1490255081\r
2022-08-13,168778.75206391045\r
2022-08-18,167670.37924510488\r
2022-08-31,149496.4413391006\r
2022-09-20,139221.56202290658\r
2022-09-22,134681.13746728175\r
2022-10-20,174723.57758526545\r
2022-10-27,167301.36539482907\r
2022-12-16,254318.6083438572\r
2023-01-15,306980.2205699436\r
2023-02-07,355424.0869954967\r
2023-02-09,346841.2500903975\r
2023-02-14,352707.529032012\r
2023-02-27,371383.35078311776\r
2023-03-01,383361.77141351084\r
2023-03-04,372760.1644397339\r
2023-04-05,421808.8230506006\r
2023-04-20,431336.80566776014\r
2023-05-03,368176.20748956106\r
2023-05-28,364063.9310080083\r
2023-06-02,395443.34254460037\r
2023-06-07,383824.5492521249\r
2023-06-14,365433.2872249152\r
2023-06-24,341450.169575676\r
2023-06-27,347291.54691098485\r
2023-07-07,285848.0714266619\r
2023-07-22,317479.31310111616\r
2023-08-08,279886.59182361065\r
2023-08-21,211142.30175418055\r
2023-08-23,260960.0124490554\r
2023-09-05,251840.18300853614\r
2023-09-07,228229.26396882036\r
2023-09-10,229837.08792611884\r
2023-09-15,246903.30091599096\r
2023-09-25,255974.56970686093\r
2023-10-02,223823.70437129238\r
2023-10-07,235893.77043028854\r
2023-10-10,224223.2391148806\r
2023-11-04,272694.05726122553\r
2023-12-24,329849.15883021243\r
`;export{n as default};

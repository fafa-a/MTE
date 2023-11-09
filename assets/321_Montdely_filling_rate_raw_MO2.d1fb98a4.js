const n=`date,value\r
2017-01-26,50.82896431814762\r
2017-02-05,50.82896431814762\r
2017-02-15,54.04086113582755\r
2017-02-22,55.58906177100579\r
2017-02-25,55.88898085726226\r
2017-03-04,56.55128277029713\r
2017-03-07,55.949049255571396\r
2017-03-17,61.53278255605483\r
2017-04-06,70.73887538775816\r
2017-04-23,70.70559632833383\r
2017-05-16,69.84274311411544\r
2017-05-23,68.98452149939891\r
2017-05-26,70.04145226032395\r
2017-06-02,72.44516889751384\r
2017-06-05,72.7481224018008\r
2017-06-12,74.23717080087553\r
2017-07-05,69.28107362364814\r
2017-07-07,69.61122752504619\r
2017-07-12,69.61122752504619\r
2017-07-17,68.06547086185684\r
2017-07-22,67.28200209378984\r
2017-07-25,67.28200209378984\r
2017-07-27,67.37971896660969\r
2017-08-14,56.64186065533322\r
2017-08-16,56.64186065533322\r
2017-08-19,56.64186065533322\r
2017-08-21,57.30803234636256\r
2017-08-24,57.30803234636256\r
2017-08-26,54.33710794019151\r
2017-08-29,54.33710794019151\r
2017-09-05,47.87161917838725\r
2017-09-13,50.80016007148747\r
2017-09-20,52.541021398015666\r
2017-09-23,48.34973275228675\r
2017-09-28,51.78350254714553\r
2017-10-03,47.06080840556115\r
2017-10-08,42.43003583889585\r
2017-10-10,46.25605443953019\r
2017-10-13,43.36628322992557\r
2017-10-15,43.36628322992557\r
2017-10-18,43.36628322992557\r
2017-10-20,45.53971109298399\r
2017-10-23,43.01749232561845\r
2017-11-07,40.6366167221013\r
2017-11-12,40.6366167221013\r
2017-11-14,40.741174685028\r
2017-11-17,41.18685474216333\r
2017-11-19,41.79320225112258\r
2017-11-22,39.804382166891045\r
2017-11-24,41.95201618387147\r
2017-11-27,42.40341713767914\r
2017-11-29,38.01015725689761\r
2017-12-02,44.746480598716175\r
2018-01-01,56.24981394200718\r
2018-01-03,56.24981394200718\r
2018-01-08,56.24981394200718\r
2018-01-11,56.24981394200718\r
2018-01-31,67.08675422433201\r
2018-02-02,67.08675422433201\r
2018-02-07,67.08675422433201\r
2018-02-10,64.15594118886663\r
2018-02-15,81.7018865377478\r
2018-02-22,81.7018865377478\r
2018-02-25,92.41136261343141\r
2018-02-27,97.2148796322268\r
2018-03-02,94.89440926225362\r
2018-03-07,94.89440926225362\r
2018-03-09,96.71830044555574\r
2018-04-18,97.71256933879025\r
2018-04-21,98.28820569297105\r
2018-04-26,98.28820569297105\r
2018-05-11,92.78573245866963\r
2018-05-13,92.78573245866963\r
2018-05-21,98.86531850038632\r
2018-05-23,98.86531850038632\r
2018-05-26,100.0\r
2018-06-02,92.56103121052122\r
2018-06-25,97.32963256223886\r
2018-06-27,97.32963256223886\r
2018-07-02,100.0\r
2018-07-07,98.98091814011167\r
2018-07-10,98.98091814011167\r
2018-07-25,98.40351017319279\r
2018-07-27,98.17296027086454\r
2018-08-06,94.74310331133378\r
2018-08-11,97.78923550713357\r
2018-08-14,98.2497839898239\r
2018-08-16,98.2497839898239\r
2018-08-26,90.84623496871812\r
2018-08-29,90.84623496871812\r
2018-08-31,88.81434622569951\r
2018-09-03,90.36415889160338\r
2018-09-05,83.26794468644168\r
2018-09-08,87.45874822174919\r
2018-09-10,83.08932960943532\r
2018-09-13,83.08932960943532\r
2018-09-23,77.08186424609687\r
2018-09-25,78.5739658747303\r
2018-09-28,77.80900383127646\r
2018-09-30,77.80900383127646\r
2018-10-03,79.86785880267949\r
2018-10-05,77.63560488206527\r
2018-10-10,83.58987395475168\r
2018-10-13,76.08262565736653\r
2018-10-23,77.32391271790418\r
2018-10-25,77.60094537223856\r
2018-11-04,71.80741483088728\r
2018-11-12,74.2711659114501\r
2018-11-14,74.2711659114501\r
2018-11-17,77.98257174569675\r
2018-11-22,77.98257174569675\r
2018-11-24,74.33917652758888\r
2018-11-27,73.45716053892272\r
2018-11-29,75.25997985590631\r
2018-12-02,75.25997985590631\r
2018-12-04,75.25997985590631\r
2018-12-07,71.80741483088728\r
2018-12-09,76.77114628388135\r
2018-12-12,65.56589681170688\r
2018-12-17,65.56589681170688\r
2018-12-27,76.08262565736653\r
2018-12-29,75.25997985590631\r
2019-01-11,78.4694603964342\r
2019-01-16,79.48222377677133\r
2019-01-18,79.48222377677133\r
2019-01-23,82.05666806868761\r
2019-01-26,82.05666806868761\r
2019-01-31,79.58731610107307\r
2019-02-12,67.73854404241025\r
2019-02-15,84.70289235827694\r
2019-02-17,88.77758872384943\r
2019-02-20,86.72978733613085\r
2019-02-22,87.75107859901608\r
2019-02-25,88.37369497749796\r
2019-02-27,89.36650614902891\r
2019-03-02,91.6273389809983\r
2019-03-04,88.2636817840615\r
2019-03-07,93.1983027248024\r
2019-03-12,91.14345393770168\r
2019-03-14,93.1983027248024\r
2019-03-17,90.7719964957857\r
2019-03-22,91.32943111305234\r
2019-03-24,89.66160252293778\r
2019-03-27,89.58778859085848\r
2019-03-29,90.21605324640693\r
2019-04-01,90.7719964957857\r
2019-04-13,94.74310331133378\r
2019-05-01,88.2636817840615\r
2019-05-06,93.31096063830715\r
2019-05-13,92.33656799349905\r
2019-05-16,94.93225222883936\r
2019-05-23,100.0\r
2019-05-28,100.0\r
2019-05-31,100.0\r
2019-06-02,98.67278358170054\r
2019-06-12,98.67278358170054\r
2019-06-15,98.67278358170054\r
2019-06-17,91.66460726009214\r
2019-06-22,91.66460726009214\r
2019-06-25,91.66460726009214\r
2019-06-27,94.78091991108587\r
2019-06-30,94.78091991108587\r
2019-07-05,98.55734133321612\r
2019-07-07,98.55734133321612\r
2019-07-10,94.97010178630325\r
2019-07-12,96.22283249753937\r
2019-07-15,96.10865162546177\r
2019-07-20,96.10865162546177\r
2019-07-22,92.14969719466293\r
2019-07-25,89.51400121600375\r
2019-08-01,88.33701726179251\r
2019-08-04,84.2353597661961\r
2019-08-06,84.2353597661961\r
2019-08-09,81.63101082437588\r
2019-08-14,77.7743105226943\r
2019-08-16,78.29541963221513\r
2019-08-21,73.93152080137271\r
2019-08-24,75.49951462067254\r
2019-08-26,75.25997985590631\r
2019-08-29,74.74781111918671\r
2019-08-31,73.79585320244772\r
2019-09-03,72.512444169594\r
2019-09-05,72.512444169594\r
2019-09-08,72.512444169594\r
2019-09-13,71.84091941101242\r
2019-09-15,72.17634063625111\r
2019-09-18,70.00831694436947\r
2019-09-20,70.4396101577481\r
2019-09-28,70.4396101577481\r
2019-09-30,72.98413463180813\r
2019-10-03,68.52432311762054\r
2019-10-05,72.10920179372026\r
2019-10-08,67.44489796228925\r
2019-10-10,67.44489796228925\r
2019-10-13,59.851885946674784\r
2019-10-15,59.851885946674784\r
2019-10-25,59.41942058880348\r
2019-10-30,59.82095013743481\r
2019-11-04,58.4360770886872\r
2019-11-09,58.4360770886872\r
2019-11-12,60.50315110083879\r
2019-11-17,59.35775167916013\r
2019-11-19,59.66637590341436\r
2019-11-24,44.013434818583676\r
2019-11-27,66.50249844552296\r
2019-11-29,66.50249844552296\r
2019-12-02,66.50249844552296\r
2019-12-07,66.50249844552296\r
2019-12-09,66.50249844552296\r
2019-12-14,51.493429433041825\r
2019-12-17,51.493429433041825\r
2019-12-19,51.493429433041825\r
2019-12-22,51.493429433041825\r
2019-12-27,77.2893140698765\r
2019-12-29,77.60094537223856\r
2020-01-06,71.3724767383134\r
2020-01-08,75.225787749123\r
2020-01-11,76.25450176735194\r
2020-01-16,74.54337150763264\r
2020-01-18,74.54337150763264\r
2020-01-23,76.35770874678352\r
2020-01-26,76.46097669855776\r
2020-01-28,74.06729723868443\r
2020-01-31,74.06729723868443\r
2020-02-15,79.48222377677133\r
2020-02-17,79.48222377677133\r
2020-02-20,82.19876867607805\r
2020-02-22,81.41854492290844\r
2020-02-27,81.41854492290844\r
2020-03-01,82.6257147474098\r
2020-03-08,87.23978012849051\r
2020-03-11,90.7348872015982\r
2020-03-18,89.55089158360528\r
2020-03-21,92.33656799349905\r
2020-03-26,94.13893452692487\r
2020-03-28,99.90783873402614\r
2020-04-05,95.8424599280552\r
2020-04-10,93.23584875683935\r
2020-04-15,88.6673561012766\r
2020-04-25,91.51557386778008\r
2020-05-07,91.47833207252947\r
2020-05-17,93.12323047980342\r
2020-05-20,97.29137501498995\r
2020-05-22,94.81874310304472\r
2020-05-25,97.94264663602289\r
2020-05-27,98.17296027086454\r
2020-05-30,97.94264663602289\r
2020-06-24,98.0193915913676\r
2020-06-26,98.0193915913676\r
2020-07-01,98.0193915913676\r
2020-07-04,98.05777391562789\r
2020-07-06,98.05777391562789\r
2020-07-09,100.0\r
2020-07-11,93.04818466247977\r
2020-07-14,96.18476562676473\r
2020-07-16,96.18476562676473\r
2020-07-19,88.00721716230025\r
2020-07-21,87.67795605745509\r
2020-07-24,88.19037291356373\r
2020-07-26,86.65703786527692\r
2020-07-31,86.54796366436709\r
2020-08-03,86.54796366436709\r
2020-08-05,83.37519414701896\r
2020-08-08,79.6924690794314\r
2020-08-10,74.61149086772119\r
2020-08-13,74.61149086772119\r
2020-08-15,72.54609203444828\r
2020-08-20,70.37318204803911\r
2020-08-23,72.17634063625111\r
2020-08-25,68.32750725257236\r
2020-08-30,64.25164903312833\r
2020-09-02,66.14655268681172\r
2020-09-04,58.497325987418016\r
2020-09-07,60.68979216920707\r
2020-09-12,54.36677152612187\r
2020-09-14,50.139632048750435\r
2020-09-17,51.493429433041825\r
2020-09-19,51.493429433041825\r
2020-09-27,50.254235173780216\r
2020-09-29,51.348659861466025\r
2020-10-17,40.45392277248447\r
2020-10-19,40.45392277248447\r
2020-10-24,43.743279459835236\r
2020-10-27,43.743279459835236\r
2020-10-29,43.743279459835236\r
2020-11-01,40.6366167221013\r
2020-11-08,42.48329513105055\r
2020-11-11,38.800282532646634\r
2020-11-13,38.800282532646634\r
2020-11-16,38.800282532646634\r
2020-11-18,42.61657102450786\r
2020-11-21,41.50272701813758\r
2020-11-23,42.776742750212875\r
2020-11-26,41.95201618387147\r
2020-12-03,43.50076109652358\r
2020-12-11,42.85692702595531\r
2021-02-11,90.80911241827312\r
2021-02-14,92.1123428806321\r
2021-02-16,92.1123428806321\r
2021-02-19,87.49526621430145\r
2021-02-24,88.04383500544306\r
2021-03-01,89.14546279692279\r
2021-03-23,92.26179982958294\r
2021-03-26,92.26179982958294\r
2021-03-28,92.86068575792021\r
2021-03-31,91.552822284502\r
2021-04-02,91.552822284502\r
2021-04-05,88.81434622569951\r
2021-04-07,91.9256705577996\r
2021-04-12,94.06353216251321\r
2021-04-15,90.92049995211197\r
2021-04-20,91.88835594507172\r
2021-04-22,92.82320580348838\r
2021-05-27,97.94264663602289\r
2021-05-30,97.48272844940269\r
2021-06-09,94.17664560610231\r
2021-06-14,98.05777391562789\r
2021-06-16,94.66748988977946\r
2021-06-19,94.66748988977946\r
2021-06-21,100.0\r
2021-06-24,100.0\r
2021-06-26,93.79983175856009\r
2021-06-29,92.26179982958294\r
2021-07-01,92.18705812439084\r
2021-07-16,93.23584875683935\r
2021-07-19,92.48618368667374\r
2021-07-21,87.86081233577\r
2021-07-24,88.22702402273393\r
2021-07-29,88.30034619719737\r
2021-08-05,80.25430892636061\r
2021-08-10,83.12503922074448\r
2021-08-13,83.12503922074448\r
2021-08-15,83.12503922074448\r
2021-08-30,68.09820135670756\r
2021-10-04,54.36677152612187\r
2021-10-07,58.65057084249368\r
2021-10-09,58.65057084249368\r
2021-10-12,57.52070932823238\r
2021-10-14,58.619907860960296\r
2021-10-17,58.58925188422298\r
2021-10-19,60.596440245231406\r
2021-10-22,60.596440245231406\r
2021-10-24,59.97569904320742\r
2021-10-27,59.142130822165306\r
2021-11-06,54.93172274102995\r
2021-12-16,68.491503301051\r
2021-12-18,72.61340821978678\r
2021-12-21,73.72806022527264\r
2021-12-23,73.93152080137271\r
2021-12-26,73.62642179625742\r
2022-01-12,94.47857172279005\r
2022-01-15,97.67424610478238\r
2022-01-17,97.67424610478238\r
2022-01-20,97.67424610478238\r
2022-01-22,88.88788116880251\r
2022-01-25,88.77758872384943\r
2022-01-27,87.86081233577\r
2022-01-30,93.42367799895399\r
2022-02-01,93.42367799895399\r
2022-02-06,92.97316527552346\r
2022-02-09,94.44080787266553\r
2022-02-11,97.32963256223886\r
2022-02-14,97.32963256223886\r
2022-02-24,93.46126366141169\r
2022-02-26,94.28981842751509\r
2022-03-01,91.06910943933826\r
2022-03-03,92.2244256694771\r
2022-04-05,100.0\r
2022-04-10,100.0\r
2022-04-12,100.0\r
2022-04-15,100.0\r
2022-04-25,96.79462493238488\r
2022-04-27,96.79462493238488\r
2022-05-15,93.98815619225267\r
2022-05-17,96.56573037902521\r
2022-05-20,95.27313547781482\r
2022-05-22,95.76646439885585\r
2022-05-27,95.04582067253776\r
2022-05-30,90.3271225313373\r
2022-06-29,92.89817232162801\r
2022-07-01,93.98815619225267\r
2022-07-04,93.98815619225267\r
2022-07-09,93.98815619225267\r
2022-07-11,87.09393462739705\r
2022-07-14,89.21911734415073\r
2022-07-16,85.31598606988908\r
2022-07-19,85.53283312497331\r
2022-07-21,84.81094499980432\r
2022-07-24,84.70289235827694\r
2022-07-26,84.48696762057578\r
2022-07-31,81.98565804376172\r
2022-08-03,69.9420668611349\r
2022-08-05,69.9420668611349\r
2022-08-08,70.73887538775816\r
2022-08-10,67.80387439567312\r
2022-08-13,67.80387439567312\r
2022-08-15,66.27589095613585\r
2022-08-20,63.58300343268881\r
2022-08-23,57.39913748456974\r
2022-08-25,54.39644218382615\r
2022-08-28,51.98697712359254\r
2022-08-30,52.42416731231715\r
2022-09-04,51.05965500591897\r
2022-09-09,51.98697712359254\r
2022-09-22,37.22714233235936\r
2022-10-02,38.442572478651776\r
2022-10-04,38.95402972082701\r
2022-10-07,38.34063551138775\r
2022-10-09,38.82588861840125\r
2022-10-12,38.82588861840125\r
2022-10-14,39.54585267921038\r
2022-10-22,36.10319829474229\r
2022-11-01,36.10319829474229\r
2022-11-06,34.3120126529507\r
2022-11-08,34.3120126529507\r
2022-11-11,33.01271287913302\r
2022-11-13,32.8458908928903\r
2022-11-16,33.78002397766095\r
2022-11-18,32.65568940769843\r
2022-11-26,32.32399851991773\r
2022-12-21,34.872061284498\r
2022-12-23,34.872061284498\r
2022-12-26,39.13373703873381\r
2022-12-28,34.603717770317175\r
2023-02-04,37.176869845430694\r
2023-02-06,37.176869845430694\r
2023-02-09,38.03553428522146\r
2023-02-11,38.01015725689761\r
2023-02-14,37.88338311105086\r
2023-02-16,38.69793199256377\r
2023-02-19,38.69793199256377\r
2023-02-21,38.417077152809036\r
2023-02-24,38.13711637490043\r
2023-03-16,38.264260387147175\r
2023-03-23,38.264260387147175\r
2023-03-28,42.56323878491492\r
2023-04-02,42.56323878491492\r
2023-04-05,45.40251292770091\r
2023-04-07,43.17831985295048\r
2023-04-10,45.37509499626867\r
2023-04-12,45.37509499626867\r
2023-04-15,45.37509499626867\r
2023-04-17,44.85552961080575\r
2023-04-20,43.50076109652358\r
2023-04-27,43.50076109652358\r
2023-05-02,54.39644218382615\r
2023-05-05,54.39644218382615\r
2023-05-10,54.39644218382615\r
2023-06-24,71.60653074170813\r
2023-07-06,70.872060025829\r
2023-07-09,70.872060025829\r
2023-07-11,70.872060025829\r
2023-07-14,73.5248446208287\r
2023-07-16,73.5248446208287\r
2023-07-19,71.07204213937449\r
2023-07-24,71.07204213937449\r
2023-07-26,63.23398049300194\r
2023-07-29,64.57112518006308\r
2023-07-31,63.3290853353023\r
2023-08-03,63.3290853353023\r
2023-08-05,63.3290853353023\r
2023-08-08,62.633100370450165\r
2023-08-10,60.62755057831721\r
2023-08-13,58.03864265166769\r
2023-08-15,58.03864265166769\r
2023-08-18,58.03864265166769\r
2023-08-20,53.715807080681785\r
2023-08-23,53.98169668508126\r
2023-08-25,53.98169668508126\r
2023-09-07,49.39749955513919\r
2023-09-14,49.56833175608995\r
2023-09-17,49.56833175608995\r
2023-09-24,42.53658360564614\r
2023-09-27,43.66237456650755\r
2023-09-29,41.45000843969958\r
2023-10-02,41.925528923629415\r
2023-10-04,41.925528923629415\r
2023-10-07,41.265723973812676\r
2023-10-12,38.18795179684694\r
2023-10-17,38.595699566745644\r
2023-10-27,37.88338311105086\r
2023-11-06,37.88338311105086\r
`;export{n as default};

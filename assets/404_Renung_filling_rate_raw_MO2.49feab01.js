const n=`date,value\r
2017-01-19,62.42511521651887\r
2017-01-26,72.58914675910619\r
2017-01-29,66.3896878390496\r
2017-02-15,80.85808269843892\r
2017-02-18,84.188556041411\r
2017-02-25,80.85808269843892\r
2017-03-10,85.53640032616542\r
2017-03-17,85.53640032616542\r
2017-03-30,87.43834612260824\r
2017-04-06,93.9503513465683\r
2017-04-09,90.87791524233563\r
2017-04-19,89.84023985976158\r
2017-04-29,82.58293751711315\r
2017-05-09,95.21950731180736\r
2017-05-16,82.64958090764134\r
2017-05-19,91.57245588930192\r
2017-05-26,88.05338417862072\r
2017-06-05,90.80858241625529\r
2017-06-18,93.88005087057981\r
2017-06-25,93.88005087057981\r
2017-06-28,93.88005087057981\r
2017-07-05,94.02067375260584\r
2017-07-18,92.12967425810973\r
2017-08-02,82.31658804485745\r
2017-08-04,93.03815669892307\r
2017-08-07,93.03815669892307\r
2017-08-12,92.19942559060979\r
2017-08-14,91.36386231792847\r
2017-08-17,85.46879630121516\r
2017-08-22,86.75707901573767\r
2017-08-24,86.68907448264969\r
2017-08-27,72.84190915389954\r
2017-08-29,72.52601338292625\r
2017-09-01,73.79302667967092\r
2017-09-03,70.83007769284664\r
2017-09-06,70.83007769284664\r
2017-09-08,70.83007769284664\r
2017-09-21,71.01768870577622\r
2017-09-23,71.01768870577622\r
2017-09-26,71.01768870577622\r
2017-09-28,71.01768870577622\r
2017-10-08,68.2252870627545\r
2017-10-11,67.42729935341728\r
2017-10-13,66.81612740011256\r
2017-10-16,67.06031785453843\r
2017-10-18,67.06031785453843\r
2017-10-23,67.24370426830085\r
2017-10-26,65.72186927283147\r
2017-10-28,67.36607781185536\r
2017-10-31,65.84308150124869\r
2017-11-05,65.60075014135207\r
2017-11-07,68.90356087965563\r
2017-11-17,65.05686689189372\r
2017-11-20,65.05686689189372\r
2017-11-22,68.65659232871502\r
2017-11-25,68.65659232871502\r
2017-11-27,64.33462720525006\r
2017-11-30,63.67552867553085\r
2017-12-05,62.60311269802643\r
2017-12-07,62.60311269802643\r
2017-12-12,68.04078882692397\r
2017-12-15,68.04078882692397\r
2017-12-20,74.36616351523014\r
2017-12-25,73.66591398141115\r
2017-12-27,73.66591398141115\r
2018-03-02,90.53147168576542\r
2018-03-07,90.53147168576542\r
2018-03-15,96.42466452352357\r
2018-03-17,96.42466452352357\r
2018-03-22,99.6452122392678\r
2018-03-30,98.20841437781263\r
2018-04-06,86.89315474740658\r
2018-04-09,86.89315474740658\r
2018-04-19,90.04737754916925\r
2018-04-21,99.71728032722584\r
2018-04-24,91.99023760071823\r
2018-04-26,91.99023760071823\r
2018-05-06,87.64315916670297\r
2018-05-11,100.0\r
2018-05-21,100.0\r
2018-05-24,97.06524450442495\r
2018-06-03,91.15546703642634\r
2018-06-20,94.72510336549797\r
2018-06-23,96.56686285165244\r
2018-06-25,92.47865088131286\r
2018-07-08,98.20841437781263\r
2018-07-10,91.7812476752784\r
2018-07-13,92.19942559060979\r
2018-07-15,92.19942559060979\r
2018-07-18,92.19942559060979\r
2018-07-23,98.92572618503476\r
2018-07-25,95.57330947541777\r
2018-07-30,89.97830956342986\r
2018-08-02,91.36386231792847\r
2018-08-04,93.03815669892307\r
2018-08-12,89.84023985976158\r
2018-08-19,92.68830073059665\r
2018-08-22,87.64315916670297\r
2018-08-27,86.6210921752605\r
2018-09-01,83.98714935254074\r
2018-09-03,80.99022488420886\r
2018-09-08,84.6592865430202\r
2018-09-11,88.94494196071518\r
2018-09-16,89.7022585320025\r
2018-09-18,89.7022585320025\r
2018-09-23,92.96814156284225\r
2018-09-26,86.34938526077744\r
2018-09-28,90.39304870411029\r
2018-10-03,90.7392716447536\r
2018-10-06,85.46879630121516\r
2018-10-13,85.33365508889591\r
2018-11-22,69.15089889899811\r
2018-11-27,69.15089889899811\r
2019-02-03,94.2317725237051\r
2019-02-13,95.00748856540167\r
2019-02-15,91.71162839408234\r
2019-02-18,91.71162839408234\r
2019-02-20,89.77123814748045\r
2019-02-23,91.57245588930192\r
2019-02-25,90.9472701201926\r
2019-02-28,90.9472701201926\r
2019-03-12,92.12967425810973\r
2019-03-20,84.188556041411\r
2019-03-22,88.80753562882376\r
2019-03-25,88.80753562882376\r
2019-03-27,88.67021784310731\r
2019-03-30,90.7392716447536\r
2019-04-01,90.7392716447536\r
2019-04-09,94.0910180859609\r
2019-04-16,84.6592865430202\r
2019-04-19,84.6592865430202\r
2019-05-01,91.29437518816587\r
2019-05-06,91.01664704702569\r
2019-05-09,91.01664704702569\r
2019-05-11,91.01664704702569\r
2019-05-14,90.60071627670257\r
2019-05-16,90.60071627670257\r
2019-05-29,100.0\r
2019-06-13,100.0\r
2019-06-18,100.0\r
2019-06-23,100.0\r
2019-06-25,100.0\r
2019-06-28,97.20783560400818\r
2019-07-05,90.39304870411029\r
2019-07-08,91.71162839408234\r
2019-07-10,90.53147168576542\r
2019-07-13,93.38856180980603\r
2019-07-15,92.7582279763339\r
2019-07-20,92.7582279763339\r
2019-07-23,91.99023760071823\r
2019-07-25,95.64413552176244\r
2019-07-28,97.56469491070504\r
2019-08-02,88.39584800148178\r
2019-08-04,92.89814839521372\r
2019-08-09,92.89814839521372\r
2019-08-14,94.02067375260584\r
2019-08-17,91.50290267128503\r
2019-08-22,87.02931934707723\r
2019-08-24,90.32387031901415\r
2019-08-29,88.60159216219304\r
2019-09-03,86.48519424919222\r
2019-09-06,86.48519424919222\r
2019-09-08,86.34938526077744\r
2019-09-11,80.13290900027438\r
2019-09-13,86.01025204476417\r
2019-09-16,83.51798256164862\r
2019-09-18,81.32097367310689\r
2019-09-21,81.32097367310689\r
2019-09-26,82.78293489458709\r
2019-10-08,78.69073997219432\r
2019-10-11,79.73850789778056\r
2019-10-13,76.225488849648\r
2019-10-26,80.19872135041382\r
2019-12-05,90.39304870411029\r
2019-12-07,90.39304870411029\r
2019-12-10,90.46224916063127\r
2019-12-15,82.18354780483675\r
2019-12-17,82.18354780483675\r
2019-12-20,82.18354780483675\r
2019-12-25,82.25005671432442\r
2019-12-27,85.80703914950409\r
2019-12-30,81.71861348158154\r
2020-01-09,83.92005847196215\r
2020-01-11,86.5531320964731\r
2020-01-14,85.46879630121516\r
2020-01-16,85.46879630121516\r
2020-01-19,85.94249215431074\r
2020-01-29,87.9165538053782\r
2020-01-31,89.90926366601961\r
2020-02-03,80.39629348163825\r
2020-02-05,82.1170613194142\r
2020-02-10,82.1170613194142\r
2020-02-15,86.28151412546153\r
2020-02-18,80.00135185886042\r
2020-02-20,86.96122594018999\r
2020-02-23,88.12183261866868\r
2020-03-21,93.17825286543062\r
2020-03-24,93.73951571968388\r
2020-03-26,89.35769200569588\r
2020-03-31,89.35769200569588\r
2020-04-03,90.32387031901415\r
2020-04-05,89.84023985976158\r
2020-04-08,89.56436560276966\r
2020-04-10,90.25471400815623\r
2020-04-15,93.38856180980603\r
2020-04-25,99.06944954021363\r
2020-04-30,98.56679833614635\r
2020-05-05,14.038869324839972\r
2020-05-08,14.038869324839972\r
2020-05-18,94.30218262263882\r
2020-05-20,89.84023985976158\r
2020-05-25,96.70914849974423\r
2020-05-28,100.0\r
2020-05-30,97.4932794534102\r
2020-06-12,98.49507802269063\r
2020-06-14,100.0\r
2020-06-24,89.28884503048103\r
2020-07-04,89.90926366601961\r
2020-07-07,96.35359811113953\r
2020-07-09,95.85674483948759\r
2020-07-19,96.35359811113953\r
2020-07-22,96.06955086869728\r
2020-07-24,93.45870869883893\r
2020-07-27,88.39584800148178\r
2020-07-29,88.39584800148178\r
2020-08-03,88.39584800148178\r
2020-08-06,84.32293884358238\r
2020-08-08,81.78496535909659\r
2020-08-18,78.88675640039813\r
2020-08-21,78.88675640039813\r
2020-08-23,80.46219587540284\r
2020-08-31,74.68537103222323\r
2020-09-02,74.11120788813281\r
2020-09-05,71.64455167116135\r
2020-09-07,71.64455167116135\r
2020-09-10,74.17491258300542\r
2020-09-12,72.3998153207954\r
2020-09-17,72.33675064148365\r
2020-09-30,70.01948835461168\r
2020-10-12,68.90356087965563\r
2020-10-30,86.41727863632428\r
2020-11-09,84.79398183826902\r
2020-11-11,85.26611790739672\r
2020-11-14,83.2503791953872\r
2020-11-21,82.1170613194142\r
2020-11-26,82.18354780483675\r
2020-11-29,81.58597706534955\r
2020-12-26,87.77981212707655\r
2021-01-03,94.72510336549797\r
2021-01-08,94.72510336549797\r
2021-01-10,94.7956668221298\r
2021-01-18,93.66928105024719\r
2021-02-24,97.4932794534102\r
2021-02-27,96.92274065000399\r
2021-03-01,95.71498343301886\r
2021-03-04,97.13652914990425\r
2021-03-09,93.2483338903557\r
2021-03-14,91.15546703642634\r
2021-03-21,94.16138434390349\r
2021-03-24,95.85674483948759\r
2021-03-29,92.96814156284225\r
2021-03-31,95.50250529668153\r
2021-04-03,94.93685942479415\r
2021-04-05,95.57330947541777\r
2021-04-08,94.86625217613296\r
2021-04-15,97.06524450442495\r
2021-04-20,99.35715707602807\r
2021-04-23,100.0\r
2021-05-03,99.14134382492217\r
2021-05-08,91.36386231792847\r
2021-05-28,95.9985936732803\r
2021-05-30,95.9985936732803\r
2021-06-07,95.9985936732803\r
2021-06-09,86.28151412546153\r
2021-06-14,95.9985936732803\r
2021-06-22,95.9985936732803\r
2021-07-17,81.4534304544205\r
2021-07-19,81.4534304544205\r
2021-07-22,92.40881157006918\r
2021-08-11,89.77123814748045\r
2021-08-23,79.80418509012055\r
2021-08-26,82.383141793418\r
2021-08-28,82.383141793418\r
2021-08-31,80.19872135041382\r
2021-09-05,78.88675640039813\r
2021-09-12,77.64875427347458\r
2021-09-17,75.96789307742776\r
2021-09-22,76.41892411128647\r
2021-09-25,75.96789307742776\r
2021-09-27,75.26137968785645\r
2021-09-30,73.92023069680437\r
2021-10-07,68.10226510324182\r
2021-10-12,65.11720515727724\r
2021-10-15,65.11720515727724\r
2021-10-17,62.30656759515705\r
2021-10-20,65.72186927283147\r
2021-10-27,60.13041031186884\r
2021-11-09,70.51785243648241\r
2021-11-11,71.5189954324154\r
2021-11-19,70.20620225314774\r
2021-12-14,94.7956668221298\r
2021-12-16,94.7956668221298\r
2021-12-19,95.43172298825193\r
2021-12-21,95.43172298825193\r
2022-01-15,84.9961920810319\r
2022-01-23,95.00748856540167\r
2022-01-25,88.53298862637983\r
2022-02-09,90.04737754916925\r
2022-03-09,86.96122594018999\r
2022-03-19,86.96122594018999\r
2022-03-21,89.90926366601961\r
2022-03-24,89.90926366601961\r
2022-03-26,89.90926366601961\r
2022-04-05,88.25879599128018\r
2022-04-10,88.25879599128018\r
2022-05-08,89.35769200569588\r
2022-05-10,89.35769200569588\r
2022-05-15,89.35769200569588\r
2022-05-28,89.97830956342986\r
2022-05-30,89.97830956342986\r
2022-06-17,89.0136783243544\r
2022-06-19,89.08243681599406\r
2022-06-22,89.08243681599406\r
2022-06-24,89.08243681599406\r
2022-07-02,91.64203113116253\r
2022-07-04,91.64203113116253\r
2022-07-07,93.3184368727298\r
2022-07-12,90.39304870411029\r
2022-07-14,87.64315916670297\r
2022-07-17,89.77123814748045\r
2022-07-24,87.23373282342547\r
2022-07-27,89.15121743278989\r
2022-08-01,83.85298993752579\r
2022-08-03,83.85298993752579\r
2022-08-06,81.32097367310689\r
2022-08-08,81.32097367310689\r
2022-08-11,77.45402672013007\r
2022-08-13,72.58914675910619\r
2022-08-18,68.16376451634416\r
2022-08-28,66.02507433818172\r
2022-09-05,66.3896878390496\r
2022-09-10,58.909667143047216\r
2022-09-12,58.909667143047216\r
2022-09-15,57.24107060227189\r
2022-09-20,55.64901596098492\r
2022-09-22,55.25393001457719\r
2022-10-02,54.13158599765533\r
2022-10-05,48.7182344654015\r
2022-10-07,51.53198502909391\r
2022-10-12,51.91577729912312\r
2022-10-15,55.42310890667945\r
2022-10-17,57.24107060227189\r
2022-10-22,57.12673216823341\r
2022-11-06,55.084966728885156\r
2022-11-11,55.084966728885156\r
2022-11-16,58.620553306498145\r
2022-12-11,61.833316684674436\r
2022-12-14,61.833316684674436\r
2022-12-21,69.33664474457683\r
2022-12-24,69.0271837195614\r
2023-01-03,70.767586656046\r
2023-01-10,76.225488849648\r
2023-01-18,75.77493479273683\r
2023-01-20,82.25005671432442\r
2023-02-02,95.85674483948759\r
2023-02-04,97.70759120062532\r
2023-02-09,93.88005087057981\r
2023-02-12,96.6379947620411\r
2023-02-14,93.17825286543062\r
2023-02-17,95.14881251161624\r
2023-02-19,95.14881251161624\r
2023-02-24,96.92274065000399\r
2023-03-01,98.7103042272807\r
2023-03-09,99.28519759545229\r
2023-04-05,98.35170267318459\r
2023-04-08,98.35170267318459\r
2023-04-10,98.35170267318459\r
2023-04-18,85.87475452158343\r
2023-04-20,85.80703914950409\r
2023-05-05,85.46879630121516\r
2023-05-10,85.46879630121516\r
2023-05-28,89.35769200569588\r
2023-05-30,90.25471400815623\r
2023-06-02,93.38856180980603\r
2023-06-04,93.38856180980603\r
2023-06-09,91.43337147989796\r
2023-06-24,98.35170267318459\r
2023-06-27,98.35170267318459\r
2023-07-07,92.82817719879219\r
2023-07-09,93.88005087057981\r
2023-07-14,92.82817719879219\r
2023-07-17,95.9985936732803\r
2023-07-22,94.58404215520899\r
2023-07-27,90.87791524233563\r
2023-07-29,91.08604602003602\r
2023-08-08,89.0136783243544\r
2023-08-11,89.0136783243544\r
2023-08-16,85.33365508889591\r
2023-08-18,85.33365508889591\r
2023-08-21,83.51798256164862\r
2023-08-23,84.5246805019309\r
2023-08-28,88.87622772792244\r
2023-08-31,83.58493932072008\r
2023-09-05,79.4104600544216\r
2023-09-07,79.4104600544216\r
2023-09-10,75.96789307742776\r
2023-09-15,76.28994456766618\r
2023-09-20,80.00135185886042\r
2023-09-25,82.18354780483675\r
2023-09-27,81.58597706534955\r
2023-09-30,82.98313384465219\r
2023-10-02,83.31724648047476\r
2023-10-05,83.31724648047476\r
2023-10-07,81.78496535909659\r
2023-10-10,80.00135185886042\r
2023-10-12,79.21390195451889\r
2023-10-15,78.23415898960317\r
`;export{n as default};

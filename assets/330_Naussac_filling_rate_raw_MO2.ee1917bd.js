const r=`date,value\r
2017-02-22,95.67788260288378\r
2017-02-25,95.67788260288378\r
2017-04-23,99.9395544462687\r
2017-05-03,99.9395544462687\r
2017-06-12,98.5964099921072\r
2017-06-15,98.5964099921072\r
2017-06-22,98.69700155301308\r
2017-07-07,99.85943741881303\r
2017-07-10,99.85943741881303\r
2017-07-12,100.0\r
2017-07-17,99.93322830068392\r
2017-07-22,100.0\r
2017-07-27,99.99438906303214\r
2017-08-06,99.95642510405244\r
2017-08-14,93.61511297071438\r
2017-08-21,90.25174965620441\r
2017-08-24,90.25174965620441\r
2017-08-26,91.49095217686903\r
2017-08-29,91.49095217686903\r
2017-09-03,87.96813919604512\r
2017-10-05,78.61882094916261\r
2017-10-08,78.61882094916261\r
2017-10-10,79.02920225544796\r
2017-10-13,79.02920225544796\r
2017-10-15,81.82886064018061\r
2017-10-25,73.43151984686719\r
2018-01-23,63.4998975429669\r
2018-01-28,64.48302310603584\r
2018-01-31,64.48302310603584\r
2018-02-02,64.48302310603584\r
2018-04-18,99.65085578238575\r
2018-04-21,99.65085578238575\r
2018-04-23,99.65085578238575\r
2018-04-26,99.65085578238575\r
2018-06-22,99.86997737749061\r
2018-06-25,99.86997737749061\r
2018-06-27,100.0\r
2018-07-02,99.96064298127574\r
2018-07-07,100.0\r
2018-07-12,99.96486094360971\r
2018-07-20,99.7856726032266\r
2018-07-22,99.7856726032266\r
2018-07-27,99.52664874198989\r
2018-07-30,99.52664874198989\r
2018-08-01,99.52664874198989\r
2018-08-04,99.52664874198989\r
2018-08-06,99.532962566585\r
2018-08-11,97.4702191688159\r
2018-08-16,98.60269552758389\r
2018-08-19,98.61526717337622\r
2018-08-21,96.69864440227053\r
2018-08-26,96.7401639457566\r
2018-08-31,97.37855838965697\r
2018-09-03,94.59039921400304\r
2018-09-05,94.60272358429481\r
2018-09-10,87.93243194471006\r
2018-09-13,87.93243194471006\r
2018-09-18,87.0617442725974\r
2018-09-20,87.19405882279452\r
2018-09-23,81.67178251895444\r
2018-09-25,84.26452687837201\r
2018-09-28,84.26452687837201\r
2018-10-03,81.74264136256629\r
2018-10-05,83.6708082131567\r
2018-10-13,77.2054454026484\r
2018-10-25,71.20236297433338\r
2018-10-30,65.63711648900514\r
2018-11-04,67.64532529729826\r
2018-12-29,85.56367579013595\r
2019-01-03,84.60302684433782\r
2019-01-06,84.60302684433782\r
2019-01-11,84.60302684433782\r
2019-01-16,84.60302684433782\r
2019-02-17,89.98682803005295\r
2019-02-20,89.98682803005295\r
2019-02-22,90.23166679814058\r
2019-02-25,90.6921001409057\r
2019-02-27,90.70417896220087\r
2019-03-24,93.97925502726982\r
2019-03-27,93.97925502726982\r
2019-03-29,94.62326590775045\r
2019-04-01,94.62326590775045\r
2019-04-08,94.53905593613185\r
2019-04-13,97.80805290873003\r
2019-04-18,98.678136898977\r
2019-04-28,98.63622161957971\r
2019-05-01,97.81222718866472\r
2019-05-23,100.0\r
2019-05-26,100.0\r
2019-05-31,100.0\r
2019-06-02,100.0\r
2019-06-17,99.04315913919261\r
2019-06-22,99.51612612663216\r
2019-06-27,99.5540100318722\r
2019-06-30,99.5540100318722\r
2019-07-02,99.5708495363666\r
2019-07-05,99.74774656251947\r
2019-07-07,99.92057658401849\r
2019-07-10,98.40165343535094\r
2019-07-12,99.88473421333578\r
2019-07-22,99.02216339384057\r
2019-07-25,98.71796430221808\r
2019-08-01,95.10250580410933\r
2019-08-04,95.10250580410933\r
2019-08-06,92.7626510806759\r
2019-08-09,93.59058839271474\r
2019-08-11,93.59058839271474\r
2019-08-14,93.59058839271474\r
2019-08-16,93.59058839271474\r
2019-08-21,90.12325629737794\r
2019-09-30,71.24181706336125\r
2020-02-12,96.64883220096311\r
2020-02-15,96.64883220096311\r
2020-02-20,96.64883220096311\r
2020-02-22,96.07066612894516\r
2020-03-08,97.41813412154468\r
2020-03-18,98.6634655825013\r
2020-03-21,98.6634655825013\r
2020-03-28,99.1712792804105\r
2020-03-31,99.1712792804105\r
2020-04-02,99.14396834694423\r
2020-04-05,99.14606906026903\r
2020-04-07,99.14816979487911\r
2020-04-10,99.14816979487911\r
2020-04-12,99.14816979487911\r
2020-04-15,98.14853616896994\r
2020-05-07,98.47073952215189\r
2020-05-17,99.7393194897735\r
2020-05-20,99.7393194897735\r
2020-05-22,99.7393194897735\r
2020-05-25,99.71404031439324\r
2020-05-27,99.95431619735731\r
2020-05-30,99.95431619735731\r
2020-06-01,99.86576133018394\r
2020-06-14,99.00746763863438\r
2020-06-21,99.77935111765507\r
2020-06-24,99.77935111765507\r
2020-06-26,99.77935111765507\r
2020-06-29,99.77935111765507\r
2020-07-01,99.77935111765507\r
2020-07-04,99.77935111765507\r
2020-07-06,100.0\r
2020-07-31,99.99438906303214\r
2020-08-05,99.90792563336223\r
2020-08-08,99.83203601585355\r
2020-08-10,99.83203601585355\r
2020-08-15,98.37235119151184\r
2020-08-20,98.8899391470215\r
2020-08-23,94.48362016930561\r
2020-08-25,94.596561303169\r
2020-09-02,92.21400042589318\r
2020-09-04,91.5799203016818\r
2020-09-12,83.83165112963165\r
2020-09-14,84.1654343589012\r
2020-09-17,84.1654343589012\r
2020-09-29,79.46517064352747\r
2020-11-18,69.06262742488724\r
2020-11-21,69.06262742488724\r
2020-11-23,69.78720262188017\r
2020-12-06,68.70434028946681\r
2021-03-23,93.74800783375275\r
2021-03-26,93.74800783375275\r
2021-03-28,95.51892104453816\r
2021-03-31,95.51892104453816\r
2021-04-05,95.18077490408533\r
2021-04-07,95.3703960248231\r
2021-05-27,99.92479373779504\r
2021-05-30,99.92479373779504\r
2021-06-01,99.92479373779504\r
2021-06-26,99.5540100318722\r
2021-07-01,99.70350822904746\r
2021-07-11,99.74985338390512\r
2021-07-19,99.7119338547641\r
2021-07-21,99.96275195180391\r
2021-07-26,99.40461911443984\r
2021-07-29,99.40461911443984\r
2021-08-10,99.61716519651971\r
2021-08-13,99.61716519651971\r
2021-08-15,99.19859381104412\r
2021-08-18,99.4635210305653\r
2021-08-20,98.97598024691011\r
2021-08-23,98.66136976530659\r
2021-08-25,97.40771870969805\r
2021-08-28,97.77257496890547\r
2021-08-30,97.77257496890547\r
2021-09-04,93.6232885128836\r
2021-09-24,83.11191754676285\r
2021-09-29,83.11191754676285\r
2021-10-14,79.91933951025598\r
2021-10-17,79.91933951025598\r
2021-10-19,79.91933951025598\r
2021-10-24,80.05393503207011\r
2021-10-27,77.74501088703325\r
2021-12-03,76.13170673826721\r
2021-12-11,76.13170673826721\r
2022-01-27,76.63052788224253\r
2022-01-30,76.63052788224253\r
2022-02-01,76.63052788224253\r
2022-02-06,76.63052788224253\r
2022-03-23,79.858712148622\r
2022-03-26,79.858712148622\r
2022-03-28,79.858712148622\r
2022-04-17,85.90073584708753\r
2022-04-22,87.23950238979353\r
2022-04-27,87.09728202532915\r
2022-04-30,85.8144508619623\r
2022-05-02,87.4926125629125\r
2022-05-07,87.32844646482876\r
2022-05-12,87.32251551139592\r
2022-05-17,87.61929914347678\r
2022-05-20,87.61929914347678\r
2022-05-22,87.61929914347678\r
2022-05-27,87.80354681167182\r
2022-06-01,86.66537720137167\r
2022-06-04,86.66537720137167\r
2022-06-06,86.8703546678099\r
2022-06-11,85.03194419550718\r
2022-06-14,85.03194419550718\r
2022-06-16,84.75302993002242\r
2022-06-19,83.70955203363447\r
2022-06-21,83.75993182304742\r
2022-07-11,80.20572172471034\r
2022-07-14,81.94964064921545\r
2022-07-16,78.93122034816487\r
2022-07-19,82.42015042220552\r
2022-07-21,78.90296713897527\r
2022-07-24,82.91123257735823\r
2022-07-26,79.16496547219595\r
2022-07-31,80.93430508262045\r
2022-08-03,81.09452006318641\r
2022-08-05,81.09452006318641\r
2022-08-25,70.04672869373103\r
2022-08-28,69.80851615564045\r
2022-09-04,69.80851615564045\r
2022-09-19,56.79163567737697\r
2022-09-22,56.79163567737697\r
2022-10-04,62.07989564801834\r
2022-10-07,62.07989564801834\r
2022-10-09,62.081574995293956\r
2022-10-12,62.081574995293956\r
2023-02-16,31.603367165618867\r
2023-02-19,31.603367165618867\r
2023-02-26,31.410312537802803\r
2023-03-28,47.73184971150938\r
2023-04-05,47.73184971150938\r
2023-04-07,47.73184971150938\r
2023-07-11,61.264635443632145\r
2023-07-14,61.264635443632145\r
2023-07-16,58.379254375219645\r
2023-07-19,59.863951734691554\r
2023-07-21,57.13976121721372\r
2023-07-26,60.219290340673304\r
2023-07-31,57.09296301613068\r
2023-08-05,49.882714181500866\r
2023-08-08,49.699857107528686\r
2023-08-10,51.778198580018085\r
2023-08-15,46.68148706312366\r
2023-08-23,43.30302593076177\r
2023-08-25,43.305853200170006\r
2023-08-30,41.685030934630284\r
2023-09-04,38.7517515521137\r
2023-09-07,35.119912884007505\r
2023-09-12,34.75633618302671\r
2023-09-14,34.75633618302671\r
2023-09-24,28.941648447015904\r
2023-09-27,28.941648447015904\r
2023-09-29,28.945146129097687\r
2023-10-02,28.945146129097687\r
2023-10-04,26.986533573695937\r
2023-10-07,26.840147637367195\r
2023-10-09,25.751089797367914\r
2023-10-12,25.5222531025943\r
`;export{r as default};

const n=`date,value\r
2017-02-22,44.70904019912168\r
2017-02-25,44.70904019912168\r
2017-04-03,40.69386527319859\r
2017-04-06,40.69386527319859\r
2017-04-23,39.29014182336415\r
2017-05-03,39.29014182336415\r
2017-05-13,99.52475108810617\r
2017-05-16,99.52475108810617\r
2017-05-23,100.0\r
2017-06-02,79.8736461154173\r
2017-06-12,72.09638844143785\r
2017-06-15,68.22801341687236\r
2017-06-22,68.22801341687236\r
2017-07-07,83.16591987820382\r
2017-07-10,83.16591987820382\r
2017-07-12,83.16591987820382\r
2017-07-17,84.61817370525068\r
2017-07-22,80.42676062289192\r
2017-07-27,83.21262707444957\r
2017-07-30,78.26816887831527\r
2017-08-04,78.26816887831527\r
2017-08-06,78.8173114421199\r
2017-08-14,49.20512040594277\r
2017-08-21,45.384947197040596\r
2017-08-24,45.384947197040596\r
2017-08-26,53.812365849292036\r
2017-08-29,53.812365849292036\r
2017-09-03,41.420499727419724\r
2017-09-10,49.24387449777636\r
2017-09-13,49.24387449777636\r
2017-09-15,49.24387449777636\r
2017-09-20,51.78605746085658\r
2017-09-23,45.34730222119756\r
2017-09-28,45.34730222119756\r
2017-10-05,28.583018038093993\r
2017-10-08,28.583018038093993\r
2017-10-10,32.205701714052964\r
2017-10-13,32.205701714052964\r
2017-10-15,32.205701714052964\r
2017-10-30,32.005970618780296\r
2017-11-07,32.005970618780296\r
2017-11-09,32.740474822927254\r
2018-02-22,33.853298883772545\r
2018-02-25,33.853298883772545\r
2018-02-27,39.61252080699432\r
2018-03-14,53.45277409154387\r
2018-03-17,53.45277409154387\r
2018-03-19,53.45277409154387\r
2018-03-22,53.45277409154387\r
2018-04-18,55.86618887861091\r
2018-04-21,55.86618887861091\r
2018-04-23,58.15270868467023\r
2018-04-26,58.15270868467023\r
2018-06-22,84.1956306374101\r
2018-06-25,84.10183440019883\r
2018-06-27,85.79584636641108\r
2018-07-02,86.8844095971523\r
2018-07-07,81.86191169860712\r
2018-07-12,80.24223826585414\r
2018-07-27,64.64951448942384\r
2018-07-30,64.64951448942384\r
2018-08-01,64.64951448942384\r
2018-08-04,64.64951448942384\r
2018-08-06,64.64951448942384\r
2018-08-16,50.13820891177295\r
2018-08-19,50.13820891177295\r
2018-08-21,54.53411820758747\r
2018-08-26,54.53411820758747\r
2018-08-31,46.25384291481924\r
2018-09-03,42.445448979940096\r
2018-09-05,42.445448979940096\r
2018-09-08,42.445448979940096\r
2018-09-10,42.482218934264296\r
2018-09-13,34.910676596074644\r
2018-09-18,34.910676596074644\r
2018-09-20,36.3616070887959\r
2018-09-23,29.546922099382723\r
2018-09-25,29.546922099382723\r
2018-09-28,29.546922099382723\r
2018-10-05,25.883549309434944\r
2018-10-13,25.883549309434944\r
2018-10-20,30.751313824104077\r
2018-10-23,30.751313824104077\r
2018-10-25,33.480888180572876\r
2018-10-30,33.480888180572876\r
2018-11-04,28.29607011107357\r
2019-02-22,35.08230269393585\r
2019-02-25,35.32308178848133\r
2019-02-27,35.73720696597805\r
2019-03-24,33.37957616488858\r
2019-03-27,33.37957616488858\r
2019-03-29,41.056610649052466\r
2019-04-01,41.056610649052466\r
2019-04-08,40.54908801559397\r
2019-04-13,44.07400319935058\r
2019-04-18,54.97687067268542\r
2019-04-28,40.043815102717915\r
2019-05-13,82.74597512047593\r
2019-05-16,82.74597512047593\r
2019-05-23,98.23338703117895\r
2019-05-26,98.23338703117895\r
2019-05-31,96.60300724436414\r
2019-06-02,100.0\r
2019-06-12,100.0\r
2019-06-17,72.67426415527265\r
2019-06-22,79.3678184334008\r
2019-06-27,80.6576255092484\r
2019-06-30,80.6576255092484\r
2019-07-02,83.77384057999738\r
2019-07-05,96.6522699714748\r
2019-07-07,96.6522699714748\r
2019-07-10,97.14538837331604\r
2019-07-12,97.14538837331604\r
2019-07-15,95.27629532536753\r
2019-07-17,95.47243322148928\r
2019-08-01,71.21055848443198\r
2019-08-04,71.29896608849121\r
2019-08-06,66.23627527562273\r
2019-08-09,74.28307892858308\r
2019-08-11,74.28307892858308\r
2019-08-14,74.28307892858308\r
2019-08-16,74.28307892858308\r
2019-08-26,32.807541525089896\r
2019-08-29,32.807541525089896\r
2019-08-31,45.87534201720948\r
2019-09-03,45.87534201720948\r
2019-09-05,37.55148516111462\r
2019-09-13,53.01443907235617\r
2019-09-15,52.339541800597445\r
2019-09-18,44.297764817509936\r
2019-09-20,44.297764817509936\r
2019-09-30,25.453173064256575\r
2019-10-03,24.539619499213316\r
2019-10-08,24.539619499213316\r
2019-10-10,24.751718569609128\r
2019-10-13,24.751718569609128\r
2019-10-25,44.3350975978965\r
2019-10-30,44.185833621190596\r
2019-11-09,44.185833621190596\r
2020-02-22,29.22435782852068\r
2020-03-08,41.311213088649986\r
2020-03-11,31.17852882768797\r
2020-03-13,44.74649587941185\r
2020-03-18,39.5408000647466\r
2020-03-21,39.5408000647466\r
2020-03-28,46.21594305525936\r
2020-03-31,39.39749734635794\r
2020-04-02,41.056610649052466\r
2020-04-07,35.94491274204656\r
2020-04-10,35.94491274204656\r
2020-04-12,35.94491274204656\r
2020-04-15,35.94491274204656\r
2020-05-17,72.00763022085542\r
2020-05-20,72.00763022085542\r
2020-05-22,72.00763022085542\r
2020-05-25,71.8745658353307\r
2020-05-27,91.81881182117951\r
2020-05-30,91.81881182117951\r
2020-06-01,91.81881182117951\r
2020-06-21,82.55957586141946\r
2020-06-24,82.55957586141946\r
2020-06-26,100.0\r
2020-06-29,100.0\r
2020-07-01,100.0\r
2020-07-04,100.0\r
2020-07-06,88.6457949396659\r
2020-07-09,100.0\r
2020-07-11,86.7895582081297\r
2020-07-14,88.2161930212219\r
2020-07-16,85.22984087895719\r
2020-07-19,85.22984087895719\r
2020-07-21,85.13563625442245\r
2020-07-24,83.02585427243162\r
2020-07-26,84.7591885421786\r
2020-07-29,92.01238924902039\r
2020-07-31,82.18722620269531\r
2020-08-05,71.34318452128807\r
2020-08-08,70.81320742761791\r
2020-08-10,70.81320742761791\r
2020-08-15,48.23980239198003\r
2020-08-20,54.052569806764275\r
2020-08-23,37.48111557527687\r
2020-08-25,39.36170059403558\r
2020-09-02,33.98908395347065\r
2020-09-04,34.15908701329142\r
2020-09-12,24.842816791190895\r
2020-09-14,32.2390331858562\r
2020-09-17,32.2390331858562\r
2020-09-29,35.11666383075104\r
2020-10-24,48.93414583834539\r
2020-11-01,48.93414583834539\r
2020-11-06,48.93414583834539\r
2021-03-23,41.12929706193429\r
2021-03-26,41.12929706193429\r
2021-03-28,45.83755280530902\r
2021-03-31,45.83755280530902\r
2021-04-05,43.73911731870044\r
2021-04-07,52.22076185267333\r
2021-04-12,50.95976374537948\r
2021-04-15,50.95976374537948\r
2021-04-17,50.95976374537948\r
2021-04-22,47.970734386239386\r
2021-05-07,56.47544751383593\r
2021-05-27,88.78916049761524\r
2021-05-30,88.78916049761524\r
2021-06-01,88.78916049761524\r
2021-07-11,87.21667957571998\r
2021-07-19,80.19613123849406\r
2021-07-21,84.66516936987425\r
2021-07-26,70.54874640770231\r
2021-07-29,70.54874640770231\r
2021-08-10,64.94866196953252\r
2021-08-13,64.94866196953252\r
2021-08-15,67.22952047730585\r
2021-08-18,67.22952047730585\r
2021-08-20,59.47387997268064\r
2021-08-23,61.769193990857914\r
2021-08-25,48.39379577024768\r
2021-08-28,49.05021261219763\r
2021-08-30,41.895260584852984\r
2021-09-04,38.82614025294157\r
2021-09-07,44.671595678027664\r
2021-09-12,37.44594839327539\r
2021-09-14,37.44594839327539\r
2021-09-24,26.44065134479555\r
2021-09-29,27.535926450275056\r
2021-10-14,28.48725431073801\r
2021-10-17,28.48725431073801\r
2021-10-19,28.48725431073801\r
2021-10-24,28.48725431073801\r
2022-02-26,35.21981901481342\r
2022-03-01,35.21981901481342\r
2022-03-06,35.21981901481342\r
2022-03-08,35.21981901481342\r
2022-03-23,41.2020291994969\r
2022-03-26,41.2020291994969\r
2022-03-28,41.2020291994969\r
2022-04-17,40.80256862318451\r
2022-04-22,46.44350791575155\r
2022-04-27,46.44350791575155\r
2022-04-30,36.98984497033139\r
2022-05-02,36.98984497033139\r
2022-05-12,54.29315408854273\r
2022-05-15,54.29315408854273\r
2022-05-17,59.84735847874714\r
2022-05-20,60.59680684900562\r
2022-05-22,53.29323099815837\r
2022-05-27,52.57738953970578\r
2022-06-01,61.01459887833829\r
2022-06-04,52.29993781833026\r
2022-06-06,53.133857629185854\r
2022-06-11,51.98349011475203\r
2022-06-14,51.98349011475203\r
2022-06-16,52.6567573381332\r
2022-06-19,58.605670054820266\r
2022-06-21,58.605670054820266\r
2022-07-01,47.395965438832086\r
2022-07-06,54.13272233319372\r
2022-07-11,44.85892984850962\r
2022-07-14,51.27398472217624\r
2022-07-16,46.86174174481687\r
2022-07-19,54.694971734717804\r
2022-07-21,46.29175382473525\r
2022-07-24,57.9472307451106\r
2022-07-26,47.24311033322568\r
2022-07-31,46.10230980486605\r
2022-08-03,48.62511300035236\r
2022-08-05,40.83882599211076\r
2022-08-08,43.40514107251076\r
2022-08-10,35.841006329904864\r
2022-08-13,36.535733465087965\r
2022-08-15,32.573021785711674\r
2022-08-20,32.205701714052964\r
2022-08-25,29.741064555875262\r
2022-08-28,34.49999722699312\r
2022-09-04,28.105344326906444\r
2022-09-19,18.815994857004874\r
2022-09-22,18.815994857004874\r
2022-10-04,17.377382751514496\r
2022-10-07,17.377382751514496\r
2022-10-09,17.377382751514496\r
2022-10-12,17.377382751514496\r
2023-02-16,43.294018145789266\r
2023-02-19,48.66370400892448\r
2023-02-26,44.89643013864524\r
2023-03-03,44.40979671477048\r
2023-03-06,44.40979671477048\r
2023-03-13,37.762875464847575\r
2023-03-28,45.72425165547413\r
2023-04-05,45.72425165547413\r
2023-04-07,45.72425165547413\r
2023-05-02,43.14601194174628\r
`;export{n as default};
const n=`date,value\r
2017-03-21,42.701066944324616\r
2017-03-28,34.53108930750846\r
2017-03-31,34.53108930750846\r
2017-04-20,33.10404245388535\r
2017-04-30,32.27944019363644\r
2017-05-07,32.17202598084345\r
2017-05-10,34.8874870434771\r
2017-05-17,34.208287254410116\r
2017-06-19,66.41447242219651\r
2017-06-26,66.41447242219651\r
2017-07-04,75.9844371559501\r
2017-07-06,75.9844371559501\r
2017-07-14,76.1937340785272\r
2017-08-18,91.7977603492954\r
2017-08-20,91.7977603492954\r
2017-08-23,91.67337012748477\r
2017-08-25,91.3716502167678\r
2017-09-07,93.71922532406731\r
2017-09-12,93.71922532406731\r
2017-09-17,93.71922532406731\r
2017-09-22,93.02865778630988\r
2017-09-24,93.02865778630988\r
2017-09-27,93.4498524807864\r
2017-09-29,93.4498524807864\r
2017-10-02,82.06865204813218\r
2018-04-25,29.543106500474046\r
2018-04-27,29.543106500474046\r
2018-04-30,29.543106500474046\r
2018-05-05,29.543106500474046\r
2018-05-25,44.52519924029335\r
2018-06-01,44.52519924029335\r
2018-06-14,71.75294137769096\r
2018-06-16,71.75294137769096\r
2018-06-19,71.0756549917913\r
2018-06-21,76.8477228862573\r
2018-06-24,76.8477228862573\r
2018-06-26,76.29849650134962\r
2018-06-29,90.32857670031413\r
2018-07-01,89.4232628361387\r
2018-07-04,90.2052416457647\r
2018-07-06,90.2052416457647\r
2018-07-09,94.86410502953315\r
2018-07-24,100.0\r
2018-07-26,100.0\r
2018-07-29,100.0\r
2018-07-31,100.0\r
2018-08-03,100.0\r
2018-08-05,100.0\r
2018-08-08,100.0\r
2018-08-18,100.0\r
2018-08-20,99.98140308327098\r
2018-08-23,100.0\r
2018-08-28,100.0\r
2018-08-30,100.0\r
2018-09-02,100.0\r
2018-09-04,96.99279340457598\r
2018-09-07,96.99279340457598\r
2018-09-12,97.5609845996394\r
2018-09-14,97.5609845996394\r
2018-09-17,100.0\r
2018-09-19,100.0\r
2018-09-22,100.0\r
2018-09-24,97.67115944394821\r
2018-09-27,98.49033851001113\r
2019-03-31,33.67209371799878\r
2019-04-05,34.568234534131854\r
2019-04-10,34.78622280055257\r
2019-04-15,35.00493450308352\r
2019-04-17,35.380017398525105\r
2019-04-20,35.33167423582122\r
2019-05-10,35.28873182560477\r
2019-05-12,35.28873182560477\r
2019-05-15,34.924834090268355\r
2019-05-30,38.96954680661279\r
2019-06-01,38.35576836852926\r
2019-06-04,41.956809795677\r
2019-06-14,41.956809795677\r
2019-06-24,49.281341639811444\r
2019-06-26,49.281341639811444\r
2019-06-29,50.408161931455595\r
2019-07-01,50.408161931455595\r
2019-07-04,50.27870180831815\r
2019-07-06,51.791248445604445\r
2019-07-09,51.791248445604445\r
2019-07-14,55.84027034729391\r
2019-07-16,56.05927845659089\r
2019-07-19,56.42988089537035\r
2019-07-21,56.53305478906123\r
2019-07-24,56.38863919139965\r
2019-07-26,56.38863919139965\r
2019-07-29,57.05733169995568\r
2019-07-31,57.002024351442685\r
2019-08-03,57.86943738535587\r
2019-08-05,57.82067946170778\r
2019-08-08,58.526288696267535\r
2019-08-10,58.5052648988856\r
2019-08-15,58.89836661499314\r
2019-08-18,58.59639681690463\r
2019-08-23,59.03909686377513\r
2019-08-25,59.01093663159804\r
2019-08-30,59.01093663159804\r
2019-09-02,59.158856968322816\r
2019-09-12,58.56834825235321\r
2019-09-14,58.56834825235321\r
2019-09-17,58.77186095429444\r
2019-09-19,58.77888527994261\r
2019-09-22,58.77888527994261\r
2019-09-27,58.77888527994261\r
2019-09-29,58.59639681690463\r
2019-10-02,58.59639681690463\r
2020-03-15,44.029196101860286\r
2020-03-17,44.029196101860286\r
2020-03-20,44.029196101860286\r
2020-03-22,44.029196101860286\r
2020-03-25,44.071423345806345\r
2020-03-30,44.071423345806345\r
2020-04-01,43.17122878305187\r
2020-04-04,43.20107731300407\r
2020-04-06,43.20107731300407\r
2020-04-09,40.685428939888155\r
2020-04-11,40.67964448204146\r
2020-04-14,40.189551947474115\r
2020-04-16,40.189551947474115\r
2020-04-24,40.241295689916356\r
2020-04-29,38.76626213421244\r
2020-05-04,39.07139961446806\r
2020-05-06,39.07139961446806\r
2020-05-09,40.94037492311619\r
2020-05-14,39.06007570573909\r
2020-05-19,39.15071549029546\r
2020-05-24,42.18054088038931\r
2020-05-26,45.74111694521012\r
2020-05-29,45.81499156203741\r
2020-05-31,46.874545237729166\r
2020-06-03,47.19302880469121\r
2020-06-05,47.19302880469121\r
2020-06-23,48.49104422915583\r
2020-06-25,48.49104422915583\r
2020-06-28,48.49104422915583\r
2020-06-30,48.49104422915583\r
2020-07-03,48.49104422915583\r
2020-07-05,48.49104422915583\r
2020-07-08,52.981089326146325\r
2020-07-10,52.90796750952651\r
2020-07-13,52.90796750952651\r
2020-07-18,52.921258420415754\r
2020-07-20,52.921258420415754\r
2020-07-23,52.41744235941257\r
2020-07-25,52.45050998515786\r
2020-07-28,52.45050998515786\r
2020-07-30,52.45050998515786\r
2020-08-02,52.45050998515786\r
2020-08-04,52.07419150178572\r
2020-08-07,53.420939833414295\r
2020-08-09,53.387550619959036\r
2020-08-12,54.01039394084537\r
2020-08-14,54.01039394084537\r
2020-08-19,54.01039394084537\r
2020-08-22,54.15156380938409\r
2020-08-27,55.58078587218689\r
2020-09-01,56.51929252210684\r
2020-09-03,56.51929252210684\r
2020-09-06,56.829371353251354\r
2020-09-08,56.368024307698725\r
2020-09-11,56.368024307698725\r
2020-09-13,57.410581675408224\r
2020-09-16,57.25805818768994\r
2020-09-18,58.449220930988275\r
2020-09-23,58.449220930988275\r
2020-09-26,58.449220930988275\r
2020-09-28,58.449220930988275\r
2021-03-20,44.987529066651945\r
2021-03-22,44.987529066651945\r
2021-03-25,45.14016234132184\r
2021-03-27,45.14016234132184\r
2021-03-30,42.08626176847848\r
2021-04-01,42.38125376363327\r
2021-04-04,41.84517974973388\r
2021-04-06,40.95198335164222\r
2021-04-09,40.95198335164222\r
2021-04-24,34.77024791210966\r
2021-06-13,51.93590835283107\r
2021-06-15,51.93590835283107\r
2021-06-18,51.93590835283107\r
2021-07-18,77.09879563706329\r
2021-07-20,77.09879563706329\r
2021-07-23,77.09879563706329\r
2021-08-17,83.84642787459555\r
2021-08-19,83.84642787459555\r
2021-08-24,83.84642787459555\r
2021-08-27,84.9176322355144\r
2021-08-29,84.46617162035399\r
2021-09-01,86.11628107545238\r
2021-09-06,86.01319221789095\r
2021-09-11,86.83109710228155\r
2021-09-13,87.28917786041724\r
2021-09-18,86.7103070383593\r
2021-09-21,91.26528618243964\r
2021-09-23,91.23870539137374\r
2021-09-28,91.23870539137374\r
2021-10-01,91.86888044975173\r
2022-03-20,52.56302225366382\r
2022-03-22,51.47636599076706\r
2022-03-25,51.47636599076706\r
2022-04-04,49.006523050712595\r
2022-04-06,48.847117671482145\r
2022-04-09,48.847117671482145\r
2022-04-11,48.847117671482145\r
2022-04-14,51.79781927564391\r
2022-04-16,51.778108105533505\r
2022-04-19,52.596138316804705\r
2022-05-14,59.972364031277515\r
2022-05-19,62.73129673135413\r
2022-05-21,62.73129673135413\r
2022-05-29,74.7430091927066\r
2022-06-18,83.88879923092641\r
2022-06-20,83.88879923092641\r
2022-06-23,83.88879923092641\r
2022-06-25,83.88879923092641\r
2022-07-08,84.19420657610256\r
2022-07-10,84.19420657610256\r
2022-07-13,85.28484510228583\r
2022-07-15,85.28484510228583\r
2022-07-18,84.48318480789989\r
2022-07-20,85.61862200543685\r
2022-07-25,84.84940583487929\r
2022-07-28,84.99442153613145\r
2022-08-02,83.05194902149917\r
2022-08-04,83.05194902149917\r
2022-08-07,83.05194902149917\r
2022-08-09,82.04352057959984\r
2022-08-12,83.8210104844081\r
2022-08-22,86.19364049273115\r
2022-08-24,86.10768784787005\r
2022-08-27,86.62408275909547\r
2022-08-29,86.62408275909547\r
2022-09-01,85.77290500342802\r
2022-09-06,86.00460442177528\r
2022-09-08,85.3447031047321\r
2022-09-11,86.86562485130588\r
2022-09-13,86.68443500016981\r
2022-09-16,86.68443500016981\r
2022-09-18,86.68443500016981\r
2022-09-21,88.40944741000195\r
2022-09-23,88.08735850291075\r
2022-09-26,88.08735850291075\r
2022-10-01,88.08735850291075\r
2023-03-20,55.1044577992415\r
2023-03-22,55.1044577992415\r
2023-03-25,55.1044577992415\r
2023-03-27,54.98232316732945\r
2023-04-04,50.693592829975245\r
2023-04-06,50.693592829975245\r
2023-04-09,51.97539801946218\r
2023-04-14,51.69273879371607\r
2023-04-16,53.44765913790053\r
2023-04-19,52.424055003952795\r
2023-04-24,53.588051194617684\r
2023-04-26,52.569644585547195\r
2023-06-23,86.29684341806461\r
2023-06-25,86.29684341806461\r
2023-06-28,87.67911315851758\r
2023-07-03,87.8092954714077\r
2023-07-08,92.90338965764579\r
2023-07-10,92.83184787106003\r
`;export{n as default};

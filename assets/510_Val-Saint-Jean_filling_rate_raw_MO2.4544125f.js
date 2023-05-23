const n=`date,value\r
2017-01-03,12.923041335327753\r
2017-01-13,12.923041335327753\r
2017-02-25,89.86100615147873\r
2017-03-07,81.58029372868029\r
2017-03-14,90.9157898337992\r
2017-03-17,90.9157898337992\r
2017-03-27,79.5544604647892\r
2017-04-03,93.0383195289375\r
2017-04-06,93.0383195289375\r
2017-04-23,80.05923652332787\r
2017-05-03,80.05923652332787\r
2017-05-16,98.69142805421092\r
2017-05-23,98.69142805421092\r
2017-05-26,98.96354226404108\r
2017-06-02,90.12429572116443\r
2017-06-05,90.12429572116443\r
2017-06-15,95.9848345217814\r
2017-06-22,95.9848345217814\r
2017-06-25,75.30950161141888\r
2017-07-02,80.05923652332787\r
2017-07-05,74.0766458928188\r
2017-07-07,75.06235764994929\r
2017-07-12,75.06235764994929\r
2017-07-17,77.04749770372497\r
2017-07-22,77.04749770372497\r
2017-07-27,77.04749770372497\r
2017-08-04,100.0\r
2017-08-06,100.0\r
2017-08-14,94.10603610023519\r
2017-08-19,98.41957771393372\r
2017-08-21,88.8105631438745\r
2017-08-24,94.37363483441902\r
2017-08-26,94.64150095468005\r
2017-08-29,85.94435061151638\r
2017-09-03,88.02558855162378\r
2017-09-20,77.29692075691278\r
2017-09-23,77.29692075691278\r
2017-09-28,77.29692075691278\r
2017-10-05,84.39496091144633\r
2017-10-10,100.0\r
2017-10-13,85.94435061151638\r
2017-10-15,84.91032128674433\r
2017-10-18,82.0895488773227\r
2017-10-25,79.80670800073595\r
2017-10-28,72.11902864336133\r
2017-10-30,81.32608477309317\r
2017-11-04,81.32608477309317\r
2017-11-07,79.30249417884765\r
2017-11-17,80.81850538912563\r
2017-11-19,43.22647929817909\r
2017-11-22,22.524479072666274\r
2017-11-27,24.493852235566376\r
2017-11-29,16.249593292700975\r
2017-12-07,18.31093486455432\r
2017-12-19,63.07601481510014\r
2017-12-24,65.88553363735723\r
2017-12-27,65.88553363735723\r
2018-02-25,79.05080940706027\r
2018-02-27,79.05080940706027\r
2018-03-14,85.42678517960512\r
2018-03-17,85.42678517960512\r
2018-03-22,100.0\r
2018-03-29,96.79402903911179\r
2018-04-01,96.79402903911179\r
2018-04-06,81.07215524033872\r
2018-04-16,81.07215524033872\r
2018-04-18,100.0\r
2018-04-21,100.0\r
2018-04-23,100.0\r
2018-04-26,100.0\r
2018-05-06,91.18016222756997\r
2018-05-08,91.18016222756997\r
2018-05-11,95.44670139312994\r
2018-05-13,95.44670139312994\r
2018-05-18,92.24035072902547\r
2018-05-21,92.24035072902547\r
2018-05-23,88.8105631438745\r
2018-05-26,100.0\r
2018-06-02,91.44480474523763\r
2018-06-20,82.34459455675434\r
2018-06-22,87.24307054205798\r
2018-06-25,78.04689077226872\r
2018-06-27,81.07215524033872\r
2018-07-02,75.55693142407021\r
2018-07-07,76.54950365260872\r
2018-07-10,77.04749770372497\r
2018-07-12,77.5466274663335\r
2018-07-15,86.98277823468442\r
2018-07-17,86.98277823468442\r
2018-07-25,90.9157898337992\r
2018-07-27,88.28697411482517\r
2018-07-30,88.28697411482517\r
2018-08-01,88.28697411482517\r
2018-08-04,90.65168779613572\r
2018-08-06,92.24035072902547\r
2018-08-11,86.20354578941551\r
2018-08-16,95.17803445731778\r
2018-08-19,86.98277823468442\r
2018-08-21,79.30249417884765\r
2018-08-26,81.07215524033872\r
2018-09-03,74.32264365892355\r
2018-09-05,74.32264365892355\r
2018-09-08,91.70971715522681\r
2018-09-10,82.59991863176383\r
2018-09-13,82.59991863176383\r
2018-09-18,94.37363483441902\r
2018-09-20,89.86100615147873\r
2018-09-23,83.8807060436032\r
2018-09-25,85.42678517960512\r
2018-09-28,82.85552084741371\r
2018-09-30,82.85552084741371\r
2018-10-05,77.04749770372497\r
2018-10-08,79.05080940706027\r
2018-10-13,72.60670148540581\r
2018-10-18,22.84866194035926\r
2018-10-20,24.493852235566376\r
2018-10-23,18.76382948727724\r
2018-10-25,15.392980348718707\r
2018-10-30,15.392980348718707\r
2018-11-04,12.923041335327753\r
2018-11-14,18.31093486455432\r
2018-11-19,19.52726558358224\r
2018-11-22,16.82968516291612\r
2018-11-29,17.416903166650986\r
2018-12-19,45.07055869074834\r
2018-12-27,45.07055869074834\r
2018-12-29,64.70966491930135\r
2019-01-01,59.39757147966266\r
2019-01-03,67.30638648011113\r
2019-01-06,66.83158349443187\r
2019-01-11,66.83158349443187\r
2019-01-16,66.83158349443187\r
2019-02-12,77.04749770372497\r
2019-02-15,77.04749770372497\r
2019-02-17,64.70966491930135\r
2019-02-20,64.70966491930135\r
2019-02-22,65.41429177412196\r
2019-02-25,60.76786345865226\r
2019-02-27,65.41429177412196\r
2019-03-12,75.06235764994929\r
2019-03-22,75.80464681056809\r
2019-03-24,79.5544604647892\r
2019-03-27,76.05264749443373\r
2019-03-29,78.29744683003076\r
2019-04-01,74.56892839420514\r
2019-04-13,69.9388665872047\r
2019-04-18,92.77206110895145\r
2019-05-01,82.59991863176383\r
2019-05-06,96.25430027160643\r
2019-05-13,79.5544604647892\r
2019-05-16,80.05923652332787\r
2019-05-23,83.62399379995729\r
2019-05-31,94.90963423683966\r
2019-06-02,89.07276613293777\r
2019-06-17,74.32264365892355\r
2019-06-25,74.32264365892355\r
2019-06-27,74.32264365892355\r
2019-06-30,74.32264365892355\r
2019-07-02,74.32264365892355\r
2019-07-05,77.5466274663335\r
2019-07-07,78.5482854665125\r
2019-07-10,78.04689077226872\r
2019-07-15,78.5482854665125\r
2019-07-17,77.79661756138047\r
2019-07-20,77.79661756138047\r
2019-07-22,78.04689077226872\r
2019-07-25,81.8347818491531\r
2019-08-04,77.29692075691278\r
2019-08-09,84.65250303529972\r
2019-08-14,73.09553016715759\r
2019-08-16,73.09553016715759\r
2019-08-21,73.09553016715759\r
2019-08-24,80.05923652332787\r
2019-08-26,81.32608477309317\r
2019-08-29,71.63251394847634\r
2019-08-31,71.87562638273354\r
2019-09-03,72.11902864336133\r
2019-09-13,69.45759250871942\r
2019-09-15,71.14715972296038\r
2019-09-18,68.7378779666162\r
2019-09-20,74.56892839420514\r
2019-09-30,81.07215524033872\r
2019-10-03,80.31204576998996\r
2019-10-13,76.30093320004036\r
2019-10-15,76.30093320004036\r
2019-10-25,76.30093320004036\r
2019-11-22,15.251804877575276\r
2019-11-24,15.251804877575276\r
2019-12-02,15.251804877575276\r
2019-12-04,15.251804877575276\r
2019-12-17,76.54950365260872\r
2019-12-22,76.54950365260872\r
2019-12-29,79.30249417884765\r
2020-01-06,50.54817536258348\r
2020-01-11,71.14715972296038\r
2020-01-16,61.45712601837246\r
2020-01-18,61.45712601837246\r
2020-01-21,61.45712601837246\r
2020-02-07,72.8509714899619\r
2020-02-12,72.8509714899619\r
2020-02-15,69.45759250871942\r
2020-02-20,69.9388665872047\r
2020-02-22,69.45759250871942\r
2020-03-13,78.29744683003076\r
2020-03-18,78.29744683003076\r
2020-03-21,93.0383195289375\r
2020-03-23,93.0383195289375\r
2020-03-26,93.0383195289375\r
2020-03-28,79.80670800073595\r
2020-03-31,74.56892839420514\r
2020-04-02,74.56892839420514\r
2020-04-05,77.5466274663335\r
2020-04-07,69.9388665872047\r
2020-04-10,77.29692075691278\r
2020-04-12,77.29692075691278\r
2020-04-15,85.94435061151638\r
2020-05-07,78.29744683003076\r
2020-05-17,78.29744683003076\r
2020-05-20,90.65168779613572\r
2020-05-22,90.65168779613572\r
2020-05-25,99.78146596445796\r
2020-05-27,78.29744683003076\r
2020-05-30,89.07276613293777\r
2020-06-01,89.07276613293777\r
2020-06-26,88.8105631438745\r
2020-06-29,96.52403185073177\r
2020-07-01,96.52403185073177\r
2020-07-04,97.0642916172808\r
2020-07-09,93.30484646496457\r
2020-07-11,93.30484646496457\r
2020-07-14,99.78146596445796\r
2020-07-19,97.6056120680073\r
2020-07-21,89.59798787315046\r
2020-07-24,88.8105631438745\r
2020-07-29,82.0895488773227\r
2020-07-31,77.79661756138047\r
2020-08-05,68.49856007688496\r
2020-08-08,72.60670148540581\r
2020-08-10,71.14715972296038\r
2020-08-15,76.05264749443373\r
2020-08-20,82.0895488773227\r
2020-08-25,77.79661756138047\r
2020-09-04,60.0813422015537\r
2020-09-07,58.71656062548358\r
2020-09-09,58.71656062548358\r
2020-09-12,73.58551239576444\r
2020-09-14,61.918152822591374\r
2020-09-17,66.35796504829534\r
2020-11-06,22.84866194035926\r
2020-11-08,22.84866194035926\r
2020-11-11,26.349569580197624\r
2020-11-18,17.416903166650986\r
2020-11-21,17.416903166650986\r
2020-11-23,17.71316188832581\r
2020-11-28,14.276486951559681\r
2020-12-18,78.04689077226872\r
2020-12-28,78.04689077226872\r
2021-01-10,44.04272133945488\r
2021-02-11,84.39496091144633\r
2021-02-14,84.39496091144633\r
2021-02-19,70.6629683039402\r
2021-02-21,76.54950365260872\r
2021-02-24,67.30638648011113\r
2021-02-26,74.81549981785754\r
2021-03-01,70.90491851598077\r
2021-03-06,68.49856007688496\r
2021-03-21,89.07276613293777\r
2021-03-23,92.50607143283275\r
2021-03-26,92.50607143283275\r
2021-03-28,88.54863239181705\r
2021-03-31,89.33524112160927\r
2021-04-02,86.98277823468442\r
2021-04-05,84.65250303529972\r
2021-04-07,84.65250303529972\r
2021-04-15,80.56513547892817\r
2021-04-17,80.56513547892817\r
2021-04-22,85.68543032639495\r
2021-04-27,84.39496091144633\r
2021-05-27,72.11902864336133\r
2021-05-30,72.11902864336133\r
2021-06-01,72.60670148540581\r
2021-06-09,65.88553363735723\r
2021-06-11,65.88553363735723\r
2021-06-14,75.80464681056809\r
2021-06-16,74.81549981785754\r
2021-06-26,74.32264365892355\r
2021-07-01,82.0895488773227\r
2021-07-11,68.97748953651298\r
2021-07-19,91.97489922659416\r
2021-07-21,65.64976385458182\r
2021-07-29,75.30950161141888\r
2021-08-25,77.04749770372497\r
2021-08-28,77.04749770372497\r
2021-08-30,72.11902864336133\r
2021-09-02,72.11902864336133\r
2021-09-07,56.243286614229845\r
2021-09-22,57.58770124531934\r
2021-09-24,63.308492272580985\r
2021-09-27,63.308492272580985\r
2021-10-02,63.308492272580985\r
2021-10-07,68.02080655197653\r
2021-10-09,68.02080655197653\r
2021-10-12,68.7378779666162\r
2021-10-14,66.83158349443187\r
2021-10-17,66.83158349443187\r
2021-10-19,67.30638648011113\r
2021-10-22,67.30638648011113\r
2021-10-24,63.308492272580985\r
2021-10-27,39.620537211708\r
2021-11-06,23.33798545078766\r
2021-11-11,12.004201625114952\r
2021-11-18,13.189923602766795\r
2021-11-23,8.691236056504456\r
2021-12-16,37.27862499798692\r
2021-12-18,52.71324875753835\r
2021-12-21,46.523494149714914\r
2021-12-23,53.80772307259678\r
2022-01-12,52.71324875753835\r
2022-01-15,61.687487801718014\r
2022-01-17,52.71324875753835\r
2022-01-22,55.79763767014602\r
2022-01-25,54.247725753200385\r
2022-01-27,51.62671648631903\r
2022-01-30,53.36898340407762\r
2022-02-09,73.34037723084136\r
2022-02-11,68.49856007688496\r
2022-02-19,68.49856007688496\r
2022-03-08,67.30638648011113\r
2022-03-23,67.78237152633639\r
2022-03-26,71.14715972296038\r
2022-04-10,72.36272044054842\r
2022-04-15,84.39496091144633\r
2022-04-17,73.8309353775761\r
2022-04-22,86.20354578941551\r
2022-04-27,75.06235764994929\r
2022-04-30,82.34459455675434\r
2022-05-02,82.34459455675434\r
2022-05-07,83.1114009495098\r
2022-05-10,86.46301561523603\r
2022-05-15,90.12429572116443\r
2022-05-17,86.98277823468442\r
2022-05-27,81.32608477309317\r
2022-05-30,81.58029372868029\r
2022-06-01,79.05080940706027\r
2022-06-04,81.07215524033872\r
2022-06-06,89.07276613293777\r
2022-06-11,87.76447594160636\r
2022-06-14,84.13769516427715\r
2022-06-19,77.29692075691278\r
2022-06-21,77.29692075691278\r
2022-06-29,82.0895488773227\r
2022-07-01,78.5482854665125\r
2022-07-04,79.80670800073595\r
2022-07-06,73.8309353775761\r
2022-07-11,65.64976385458182\r
2022-07-14,72.36272044054842\r
2022-07-16,68.25953617058335\r
2022-07-19,73.34037723084136\r
2022-07-21,67.78237152633639\r
2022-07-24,72.11902864336133\r
2022-07-26,67.30638648011113\r
2022-07-31,66.59462604833493\r
2022-08-03,70.6629683039402\r
2022-08-08,68.97748953651298\r
2022-08-10,70.6629683039402\r
2022-08-13,72.60670148540581\r
2022-08-25,70.17994204362216\r
2022-08-28,79.30249417884765\r
2022-08-30,70.6629683039402\r
2022-09-02,70.6629683039402\r
2022-09-04,75.30950161141888\r
2022-09-12,82.0895488773227\r
2022-09-19,82.85552084741371\r
2022-09-22,78.29744683003076\r
2022-10-04,68.7378779666162\r
2022-10-09,72.60670148540581\r
2022-10-12,72.60670148540581\r
2022-10-19,68.7378779666162\r
2022-10-22,71.63251394847634\r
2022-10-24,71.87562638273354\r
2022-11-11,63.308492272580985\r
2022-11-13,80.81850538912563\r
2022-11-23,75.80464681056809\r
2022-12-06,57.58770124531934\r
2022-12-08,57.58770124531934\r
2022-12-11,69.9388665872047\r
2022-12-13,69.9388665872047\r
2023-02-04,64.70966491930135\r
2023-02-06,67.30638648011113\r
2023-02-09,65.64976385458182\r
2023-02-11,65.17911771270497\r
2023-02-14,62.61196396888417\r
2023-02-16,63.77434961735564\r
2023-02-26,63.54127064888292\r
2023-03-06,73.34037723084136\r
2023-03-13,82.0895488773227\r
2023-03-16,80.31204576998996\r
2023-03-28,93.0383195289375\r
2023-04-05,93.0383195289375\r
2023-04-07,93.0383195289375\r
2023-05-02,67.06883707515419\r
`;export{n as default};
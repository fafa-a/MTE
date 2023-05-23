const n=`date,value\r
2017-02-12,58.04602268913225\r
2017-02-19,58.04602268913225\r
2017-02-22,58.04602268913225\r
2017-03-14,23.070340738852963\r
2017-04-23,83.49346250498137\r
2017-04-30,83.49346250498137\r
2017-06-12,89.66733068873573\r
2017-06-19,89.66733068873573\r
2017-06-22,92.11804776892737\r
2017-07-02,92.11804776892737\r
2017-07-07,81.14262044108406\r
2017-07-09,81.14262044108406\r
2017-07-12,81.14262044108406\r
2017-07-14,81.14262044108406\r
2017-07-17,81.14262044108406\r
2017-08-21,74.26015293784461\r
2017-08-23,74.26015293784461\r
2017-08-26,79.81195953947157\r
2017-09-05,58.627281697398246\r
2017-10-05,58.33634822507944\r
2017-10-07,58.33634822507944\r
2017-10-10,60.680797748898875\r
2017-10-12,60.680797748898875\r
2017-10-15,63.66570229841406\r
2017-10-17,63.36450661553633\r
2017-10-22,62.464521005302046\r
2017-10-25,63.96749746010917\r
2017-10-27,55.46053083616718\r
2017-10-30,55.745362844095325\r
2018-01-23,45.61881357835728\r
2018-01-28,45.61881357835728\r
2018-02-02,45.61881357835728\r
2018-03-14,57.46719737321079\r
2018-03-16,57.46719737321079\r
2018-03-19,57.46719737321079\r
2018-03-21,57.46719737321079\r
2018-03-24,57.46719737321079\r
2018-04-18,79.48073873757471\r
2018-04-20,79.48073873757471\r
2018-04-25,79.48073873757471\r
2018-05-08,86.21457141662825\r
2018-05-18,86.21457141662825\r
2018-06-02,77.83332055609269\r
2018-06-09,77.83332055609269\r
2018-06-22,68.56605723405895\r
2018-06-24,68.56605723405895\r
2018-06-27,79.81195953947157\r
2018-06-29,79.81195953947157\r
2018-07-02,78.49054911058636\r
2018-07-04,73.93882070123117\r
2018-07-07,77.50557680860736\r
2018-07-09,75.2276572591889\r
2018-07-12,77.50557680860736\r
2018-07-17,76.85183233653984\r
2018-07-19,82.48250733540709\r
2018-07-22,82.48250733540709\r
2018-07-24,80.80908932772981\r
2018-07-27,83.83159603888872\r
2018-07-29,83.83159603888872\r
2018-08-01,83.83159603888872\r
2018-08-03,83.83159603888872\r
2018-08-06,83.83159603888872\r
2018-08-11,76.52583240100448\r
2018-08-16,82.8189177799162\r
2018-08-18,82.8189177799162\r
2018-08-21,80.47613521821202\r
2018-08-23,85.53086058934555\r
2018-08-26,77.50557680860736\r
2018-08-28,85.53086058934555\r
2018-08-31,85.53086058934555\r
2018-09-02,76.85183233653984\r
2018-09-05,76.85183233653984\r
2018-09-10,67.01832127581453\r
2018-09-12,67.01832127581453\r
2018-09-17,67.01832127581453\r
2018-09-20,76.52583240100448\r
2018-09-22,75.87557911286792\r
2018-09-25,80.14375849443448\r
2018-09-27,80.14375849443448\r
2018-10-02,73.29791247138832\r
2018-10-05,73.29791247138832\r
2018-10-10,68.25532351801769\r
2018-10-12,68.25532351801769\r
2018-10-15,68.25532351801769\r
2018-10-20,63.063910867221885\r
2018-10-22,63.063910867221885\r
2018-10-25,63.063910867221885\r
2018-10-30,63.063910867221885\r
2018-11-04,57.17869857118281\r
2018-11-09,57.17869857118281\r
2018-11-11,57.17869857118281\r
2018-11-14,57.17869857118281\r
2018-11-24,53.203981159902135\r
2019-01-03,43.79950337811992\r
2019-01-10,43.79950337811992\r
2019-01-15,43.79950337811992\r
2019-02-12,7.59141792826268\r
2019-02-14,7.59141792826268\r
2019-02-17,64.87647528450786\r
2019-02-19,64.87647528450786\r
2019-02-22,54.045574145743046\r
2019-02-24,54.045574145743046\r
2019-02-27,65.48544961084617\r
2019-03-04,60.38562218844601\r
2019-03-24,74.26015293784461\r
2019-03-26,74.26015293784461\r
2019-03-29,77.50557680860736\r
2019-03-31,77.50557680860736\r
2019-04-05,77.50557680860736\r
2019-04-13,100.0\r
2019-05-13,87.24441960938528\r
2019-05-15,87.24441960938528\r
2019-05-23,98.18482126855808\r
2019-05-25,98.18482126855808\r
2019-05-30,98.18482126855808\r
2019-06-02,98.18482126855808\r
2019-06-04,98.18482126855808\r
2019-06-07,100.0\r
2019-06-12,87.9338354838682\r
2019-06-27,87.58884274555653\r
2019-06-29,87.58884274555653\r
2019-07-02,88.62552833308189\r
2019-07-04,88.62552833308189\r
2019-07-07,85.87243029721606\r
2019-07-09,85.87243029721606\r
2019-07-12,90.71424023858673\r
2019-07-14,88.62552833308189\r
2019-07-17,88.62552833308189\r
2019-07-19,100.0\r
2019-07-22,87.9338354838682\r
2019-07-24,100.0\r
2019-07-29,74.90457162147017\r
2019-08-01,74.90457162147017\r
2019-08-03,74.90457162147017\r
2019-08-06,74.90457162147017\r
2019-08-26,79.48073873757471\r
2019-08-28,79.48073873757471\r
2019-08-31,87.24441960938528\r
2019-09-02,87.24441960938528\r
2019-09-07,90.01573354307068\r
2019-09-12,86.21457141662825\r
2019-09-15,88.62552833308189\r
2019-09-17,59.50372489672944\r
2019-09-20,63.063910867221885\r
2019-09-22,63.063910867221885\r
2019-09-27,63.063910867221885\r
2019-09-30,63.063910867221885\r
2019-10-25,55.46053083616718\r
2019-10-30,55.46053083616718\r
2019-12-04,38.52955260119102\r
2019-12-06,38.52955260119102\r
2019-12-14,38.52955260119102\r
2019-12-19,38.52955260119102\r
2019-12-29,15.770852809619667\r
2020-02-07,14.130459773477847\r
2020-02-09,14.130459773477847\r
2020-02-12,14.130459773477847\r
2020-02-14,14.130459773477847\r
2020-02-22,14.130459773477847\r
2020-03-18,26.30990514285173\r
2020-03-20,26.30990514285173\r
2020-03-23,26.30990514285173\r
2020-03-25,25.89521474031195\r
2020-03-28,51.537467660949886\r
2020-04-02,84.50958359120344\r
2020-04-04,85.87243029721606\r
2020-04-07,90.36470351020111\r
2020-04-09,90.36470351020111\r
2020-04-12,90.36470351020111\r
2020-04-14,92.47041306546522\r
2020-04-17,92.47041306546522\r
2020-04-22,89.3194952997461\r
2020-05-17,88.2793974656022\r
2020-05-19,88.2793974656022\r
2020-05-22,93.53089561517531\r
2020-05-24,93.53089561517531\r
2020-05-27,90.71424023858673\r
2020-05-29,90.71424023858673\r
2020-06-01,94.95276175247106\r
2020-06-21,75.55132655679914\r
2020-06-23,75.55132655679914\r
2020-06-26,75.55132655679914\r
2020-06-28,75.55132655679914\r
2020-07-01,75.55132655679914\r
2020-07-21,82.8189177799162\r
2020-07-23,82.8189177799162\r
2020-07-28,82.8189177799162\r
2020-07-31,86.5572835835753\r
2020-08-05,84.50958359120344\r
2020-08-07,92.11804776892737\r
2020-08-10,92.11804776892737\r
2020-08-15,92.11804776892737\r
2020-08-20,90.01573354307068\r
2020-08-25,86.9005664351192\r
2020-08-27,86.9005664351192\r
2020-09-01,86.9005664351192\r
2020-09-04,79.15009647417881\r
2020-09-09,80.14375849443448\r
2020-09-14,77.1784139374548\r
2020-09-16,77.1784139374548\r
2020-09-19,77.1784139374548\r
2020-11-18,40.75336474495425\r
2020-11-23,58.33634822507944\r
2020-11-25,58.33634822507944\r
2020-11-28,56.89080966144311\r
2020-12-13,61.56994720813261\r
2021-02-21,68.87738334737331\r
2021-02-23,68.87738334737331\r
2021-02-26,74.58207004635557\r
2021-02-28,74.58207004635557\r
2021-03-05,60.97657741909216\r
2021-03-23,74.90457162147017\r
2021-03-25,74.90457162147017\r
2021-03-28,76.85183233653984\r
2021-03-30,76.85183233653984\r
2021-04-02,74.26015293784461\r
2021-04-04,77.50557680860736\r
2021-04-07,77.50557680860736\r
2021-04-09,51.537467660949886\r
2021-05-17,81.47672817753526\r
2021-05-22,81.47672817753526\r
2021-05-24,81.47672817753526\r
2021-05-27,83.15590296106924\r
2021-05-29,81.81141215750185\r
2021-06-01,83.83159603888872\r
2021-06-03,83.83159603888872\r
2021-06-11,85.53086058934555\r
2021-06-13,84.84943686963487\r
2021-06-16,92.11804776892737\r
2021-06-18,92.11804776892737\r
2021-06-21,92.11804776892737\r
2021-06-26,76.52583240100448\r
2021-07-21,70.12860319645102\r
2021-07-23,70.12860319645102\r
2021-08-15,72.34094687345237\r
2021-08-17,72.34094687345237\r
2021-08-20,74.26015293784461\r
2021-08-25,74.26015293784461\r
2021-09-24,67.01832127581453\r
2021-09-26,67.01832127581453\r
2021-09-29,67.01832127581453\r
2021-10-01,67.01832127581453\r
2021-10-14,60.680797748898875\r
2021-10-16,60.680797748898875\r
2021-10-21,60.680797748898875\r
2021-10-24,61.86753639090695\r
2022-01-27,41.003683036970294\r
2022-01-29,41.003683036970294\r
2022-02-01,41.003683036970294\r
2022-02-11,40.254660511140514\r
2022-02-13,40.254660511140514\r
2022-02-18,40.254660511140514\r
2022-02-26,38.77405265947824\r
2022-02-28,38.77405265947824\r
2022-03-03,38.77405265947824\r
2022-03-05,38.77405265947824\r
2022-03-08,57.46719737321079\r
2022-03-10,56.89080966144311\r
2022-04-17,75.2276572591889\r
2022-04-19,75.2276572591889\r
2022-04-27,81.47672817753526\r
2022-05-02,77.50557680860736\r
2022-05-04,77.50557680860736\r
2022-05-07,77.50557680860736\r
2022-06-11,84.50958359120344\r
2022-06-13,84.50958359120344\r
2022-06-16,84.50958359120344\r
2022-06-18,84.50958359120344\r
2022-06-21,87.9338354838682\r
2022-06-23,74.90457162147017\r
2022-06-28,74.90457162147017\r
2022-07-01,72.65934862534725\r
2022-07-06,84.17030319114261\r
2022-07-08,84.17030319114261\r
2022-07-11,86.5572835835753\r
2022-07-13,86.5572835835753\r
2022-07-16,83.83159603888872\r
2022-07-18,86.9005664351192\r
2022-07-21,76.20041452723481\r
2022-07-26,85.18986265809801\r
2022-07-28,72.65934862534725\r
2022-07-31,72.65934862534725\r
2022-08-10,70.75775639456666\r
2022-08-12,70.75775639456666\r
2022-08-15,70.75775639456666\r
2022-08-17,67.63563500468007\r
2022-08-25,55.46053083616718\r
2022-08-30,57.46719737321079\r
2022-09-01,57.46719737321079\r
2022-09-04,56.316863494858026\r
2022-09-06,64.57288440493394\r
2022-09-09,64.57288440493394\r
2022-09-11,64.269891646471\r
2022-09-19,56.89080966144311\r
2022-09-21,56.89080966144311\r
2022-10-04,51.26188277952777\r
2022-10-06,51.26188277952777\r
2022-10-09,51.26188277952777\r
2022-10-11,51.26188277952777\r
2023-02-11,17.48622573405112\r
2023-02-13,17.48622573405112\r
2023-02-16,25.688907760241086\r
2023-02-21,24.870622101200848\r
2023-02-26,48.271531628310306\r
2023-03-03,47.20289273640886\r
2023-03-28,44.83530323164027\r
2023-04-04,44.83530323164027\r
2023-04-07,59.797085287526386\r
`;export{n as default};

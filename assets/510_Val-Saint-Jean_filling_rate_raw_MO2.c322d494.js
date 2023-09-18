const n=`date,value\r
2017-01-03,12.90469972826125\r
2017-01-13,12.90469972826125\r
2017-02-25,89.73346688091046\r
2017-03-07,81.46450723128274\r
2017-03-14,90.78675351409682\r
2017-03-17,90.78675351409682\r
2017-03-27,79.4415492222751\r
2017-04-03,92.90627071359691\r
2017-04-06,92.90627071359691\r
2017-04-23,79.94560885471236\r
2017-05-03,79.94560885471236\r
2017-05-16,98.5513558105933\r
2017-05-23,98.5513558105933\r
2017-05-26,98.82308381010468\r
2017-06-02,89.9963827650444\r
2017-06-05,89.9963827650444\r
2017-06-15,95.84860373264593\r
2017-06-22,95.84860373264593\r
2017-06-25,75.20261521748971\r
2017-07-02,79.94560885471236\r
2017-07-05,73.97150928476228\r
2017-07-07,74.95582202619197\r
2017-07-12,74.95582202619197\r
2017-07-17,76.93814458075106\r
2017-07-22,76.93814458075106\r
2017-07-27,76.93814458075106\r
2017-08-04,100.0\r
2017-08-06,100.0\r
2017-08-14,93.97247188017668\r
2017-08-19,98.27989130612617\r
2017-08-21,88.68451476174275\r
2017-08-24,94.23969081283343\r
2017-08-26,94.50717675206765\r
2017-08-29,85.82237023030434\r
2017-09-03,87.90065427995214\r
2017-09-20,77.18721362906369\r
2017-09-23,77.18721362906369\r
2017-09-28,77.18721362906369\r
2017-10-05,84.27517957118249\r
2017-10-10,99.9126264746755\r
2017-10-13,85.82237023030434\r
2017-10-15,84.78980849811192\r
2017-10-18,81.97303959667384\r
2017-10-25,79.6934387445726\r
2017-10-28,72.01667047154473\r
2017-10-30,81.21065907317781\r
2017-11-04,81.21065907317781\r
2017-11-07,79.1899405508061\r
2017-11-17,80.70380009405727\r
2017-11-19,43.165128175205574\r
2017-11-22,22.49251019368427\r
2017-11-27,24.459088235236077\r
2017-11-29,16.226530327302076\r
2017-12-07,18.284946247510444\r
2017-12-19,62.98649134697527\r
2017-12-24,65.79202263340804\r
2017-12-27,65.79202263340804\r
2018-02-25,78.93861299393964\r
2018-02-27,78.93861299393964\r
2018-03-14,85.3055393763873\r
2018-03-17,85.3055393763873\r
2018-03-22,100.0\r
2018-03-29,96.6566497642993\r
2018-04-01,96.6566497642993\r
2018-04-06,80.95708994132215\r
2018-04-16,80.95708994132215\r
2018-04-18,100.0\r
2018-04-21,100.0\r
2018-04-23,100.0\r
2018-04-26,100.0\r
2018-05-06,91.05075068546907\r
2018-05-08,91.05075068546907\r
2018-05-11,95.31123437361643\r
2018-05-13,95.31123437361643\r
2018-05-18,92.10943446675806\r
2018-05-21,92.10943446675806\r
2018-05-23,88.68451476174275\r
2018-05-26,100.0\r
2018-06-02,91.31501759735278\r
2018-06-20,82.22772329106537\r
2018-06-22,87.11924689423111\r
2018-06-25,77.93611921577808\r
2018-06-27,80.95708994132215\r
2018-07-02,75.44969385426205\r
2018-07-07,76.44085733006746\r
2018-07-10,76.93814458075106\r
2018-07-12,77.43656593101737\r
2018-07-15,86.85932401841009\r
2018-07-17,86.85932401841009\r
2018-07-25,90.78675351409682\r
2018-07-27,88.1616688599485\r
2018-07-30,88.1616688599485\r
2018-08-01,88.1616688599485\r
2018-08-04,90.52302631511678\r
2018-08-06,92.10943446675806\r
2018-08-11,86.08119753380122\r
2018-08-16,95.04294875542452\r
2018-08-19,86.85932401841009\r
2018-08-21,79.1899405508061\r
2018-08-26,80.95708994132215\r
2018-09-03,74.21715790748443\r
2018-09-05,74.21715790748443\r
2018-09-08,91.57955401850117\r
2018-09-10,82.48268498590932\r
2018-09-13,82.48268498590932\r
2018-09-18,94.23969081283343\r
2018-09-20,89.73346688091046\r
2018-09-23,83.76165458266676\r
2018-09-25,85.3055393763873\r
2018-09-28,82.73792442663004\r
2018-09-30,82.73792442663004\r
2018-10-05,76.93814458075106\r
2018-10-08,78.93861299393964\r
2018-10-13,72.50365116199626\r
2018-10-18,22.81623295027627\r
2018-10-20,24.459088235236077\r
2018-10-23,18.73719807919084\r
2018-10-25,15.37113316972944\r
2018-10-30,15.37113316972944\r
2018-11-04,12.90469972826125\r
2018-11-14,18.284946247510444\r
2018-11-19,19.49955063451385\r
2018-11-22,16.80579887606603\r
2018-11-29,17.392183444264525\r
2018-12-19,45.0065902752397\r
2018-12-27,45.0065902752397\r
2018-12-29,64.61782281986378\r
2019-01-01,59.313268807519506\r
2019-01-03,67.21085886692384\r
2019-01-06,66.73672976671561\r
2019-01-11,66.73672976671561\r
2019-01-16,66.73672976671561\r
2019-02-12,76.93814458075106\r
2019-02-15,76.93814458075106\r
2019-02-17,64.61782281986378\r
2019-02-20,64.61782281986378\r
2019-02-22,65.32144960136077\r
2019-02-25,60.68161593804867\r
2019-02-27,65.32144960136077\r
2019-03-12,74.95582202619197\r
2019-03-22,75.6970576595674\r
2019-03-24,79.4415492222751\r
2019-03-27,75.94470635731945\r
2019-03-29,78.18631966059726\r
2019-04-01,74.46309309208955\r
2019-04-13,69.8396027083442\r
2019-04-18,92.6403901928368\r
2019-05-01,82.48268498590932\r
2019-05-06,96.11768703109801\r
2019-05-13,79.4415492222751\r
2019-05-16,79.94560885471236\r
2019-05-23,83.50530668940709\r
2019-05-31,94.77492947401895\r
2019-06-02,88.94634560743262\r
2019-06-17,74.21715790748443\r
2019-06-25,74.21715790748443\r
2019-06-27,74.21715790748443\r
2019-06-30,74.21715790748443\r
2019-07-02,74.21715790748443\r
2019-07-05,77.43656593101737\r
2019-07-07,78.43680228307363\r
2019-07-10,77.93611921577808\r
2019-07-15,78.43680228307363\r
2019-07-17,77.68620121638953\r
2019-07-20,77.68620121638953\r
2019-07-22,77.93611921577808\r
2019-07-25,81.71863415805603\r
2019-08-04,77.18721362906369\r
2019-08-09,84.53235616680483\r
2019-08-14,72.99178605167769\r
2019-08-16,72.99178605167769\r
2019-08-21,72.99178605167769\r
2019-08-24,79.94560885471236\r
2019-08-26,81.21065907317781\r
2019-08-29,71.5308462845003\r
2019-08-31,71.77361367051176\r
2019-09-03,72.01667047154473\r
2019-09-13,69.35901169971915\r
2019-09-15,71.04618091977657\r
2019-09-18,68.64031864481765\r
2019-09-20,74.46309309208955\r
2019-09-30,80.95708994132215\r
2019-10-03,80.19805929049201\r
2019-10-13,76.19263967228255\r
2019-10-15,76.19263967228255\r
2019-10-25,76.19263967228255\r
2019-11-22,15.230158068216651\r
2019-11-24,15.230158068216651\r
2019-12-02,15.230158068216651\r
2019-12-04,15.230158068216651\r
2019-12-17,76.44085733006746\r
2019-12-22,76.44085733006746\r
2019-12-29,79.1899405508061\r
2020-01-06,50.476432593495936\r
2020-01-11,71.04618091977657\r
2020-01-16,61.369900230911426\r
2020-01-18,61.369900230911426\r
2020-01-21,61.369900230911426\r
2020-02-07,72.74757447537299\r
2020-02-12,72.74757447537299\r
2020-02-15,69.35901169971915\r
2020-02-20,69.8396027083442\r
2020-02-22,69.35901169971915\r
2020-03-13,78.18631966059726\r
2020-03-18,78.18631966059726\r
2020-03-21,92.90627071359691\r
2020-03-23,92.90627071359691\r
2020-03-26,92.90627071359691\r
2020-03-28,79.6934387445726\r
2020-03-31,74.46309309208955\r
2020-04-02,74.46309309208955\r
2020-04-05,77.43656593101737\r
2020-04-07,69.8396027083442\r
2020-04-10,77.18721362906369\r
2020-04-12,77.18721362906369\r
2020-04-15,85.82237023030434\r
2020-05-07,78.18631966059726\r
2020-05-17,78.18631966059726\r
2020-05-20,90.52302631511678\r
2020-05-22,90.52302631511678\r
2020-05-25,99.63984663555921\r
2020-05-27,78.18631966059726\r
2020-05-30,88.94634560743262\r
2020-06-01,88.94634560743262\r
2020-06-26,88.68451476174275\r
2020-06-29,96.38703578156026\r
2020-07-01,96.38703578156026\r
2020-07-04,96.92652876016095\r
2020-07-09,93.17241936929457\r
2020-07-11,93.17241936929457\r
2020-07-14,99.63984663555921\r
2020-07-19,97.46708091751542\r
2020-07-21,89.47082190309152\r
2020-07-24,88.68451476174275\r
2020-07-29,81.97303959667384\r
2020-07-31,77.68620121638953\r
2020-08-05,68.40134041775431\r
2020-08-08,72.50365116199626\r
2020-08-10,71.04618091977657\r
2020-08-15,75.94470635731945\r
2020-08-20,81.97303959667384\r
2020-08-25,77.68620121638953\r
2020-09-04,59.99606905709067\r
2020-09-07,58.63322450859404\r
2020-09-09,58.63322450859404\r
2020-09-12,73.48107285099097\r
2020-09-14,61.83027270212382\r
2020-09-17,66.26378352483914\r
2020-11-06,22.81623295027627\r
2020-11-08,22.81623295027627\r
2020-11-11,26.312171769645836\r
2020-11-18,17.392183444264525\r
2020-11-21,17.392183444264525\r
2020-11-23,17.68802168743727\r
2020-11-28,14.256224405990029\r
2020-12-18,77.93611921577808\r
2020-12-28,77.93611921577808\r
2021-01-10,43.98021172828931\r
2021-02-11,84.27517957118249\r
2021-02-14,84.27517957118249\r
2021-02-19,70.56267671118329\r
2021-02-21,76.44085733006746\r
2021-02-24,67.21085886692384\r
2021-02-26,74.7093145581701\r
2021-03-01,70.80428352451422\r
2021-03-06,68.40134041775431\r
2021-03-21,88.94634560743262\r
2021-03-23,92.37477803451725\r
2021-03-26,92.37477803451725\r
2021-03-28,88.42295576667408\r
2021-03-31,89.20844806668306\r
2021-04-02,86.85932401841009\r
2021-04-05,84.53235616680483\r
2021-04-07,84.53235616680483\r
2021-04-15,80.45078979048913\r
2021-04-17,80.45078979048913\r
2021-04-22,85.56381742943124\r
2021-04-27,84.27517957118249\r
2021-05-27,72.01667047154473\r
2021-05-30,72.01667047154473\r
2021-06-01,72.50365116199626\r
2021-06-09,65.79202263340804\r
2021-06-11,65.79202263340804\r
2021-06-14,75.6970576595674\r
2021-06-16,74.7093145581701\r
2021-06-26,74.21715790748443\r
2021-07-01,81.97303959667384\r
2021-07-11,68.87959013522776\r
2021-07-19,91.8443597182987\r
2021-07-21,65.55658747749032\r
2021-07-29,75.20261521748971\r
2021-08-25,76.93814458075106\r
2021-08-28,76.93814458075106\r
2021-08-30,72.01667047154473\r
2021-09-02,72.01667047154473\r
2021-09-07,56.16346080260863\r
2021-09-22,57.50596731282642\r
2021-09-24,63.21863885037903\r
2021-09-27,63.21863885037903\r
2021-10-02,63.21863885037903\r
2021-10-07,67.9242649660023\r
2021-10-09,67.9242649660023\r
2021-10-12,68.64031864481765\r
2021-10-14,66.73672976671561\r
2021-10-17,66.73672976671561\r
2021-10-19,67.21085886692384\r
2021-10-22,67.21085886692384\r
2021-10-24,63.21863885037903\r
2021-10-27,39.564303984061006\r
2021-11-06,23.304861966326463\r
2021-11-11,11.987164122591992\r
2021-11-18,13.171203211050814\r
2021-11-23,8.678900629221186\r
2021-12-16,37.22571563447483\r
2021-12-18,52.63843311075507\r
2021-12-21,46.4574635902736\r
2021-12-23,53.73135404396551\r
2022-01-12,52.63843311075507\r
2022-01-15,61.599935062945455\r
2022-01-17,52.63843311075507\r
2022-01-22,55.71844436581237\r
2022-01-25,54.17073223099468\r
2022-01-27,51.553442949281184\r
2022-01-30,53.29323707643411\r
2022-02-09,73.23628560516498\r
2022-02-11,68.40134041775431\r
2022-02-19,68.40134041775431\r
2022-03-08,67.21085886692384\r
2022-03-23,67.68616834998554\r
2022-03-26,71.04618091977657\r
2022-04-10,72.26001639819923\r
2022-04-15,84.27517957118249\r
2022-04-17,73.72614750520846\r
2022-04-22,86.08119753380122\r
2022-04-27,74.95582202619197\r
2022-04-30,82.22772329106537\r
2022-05-02,82.22772329106537\r
2022-05-07,82.99344135939417\r
2022-05-10,86.34029909541307\r
2022-05-15,89.9963827650444\r
2022-05-17,86.85932401841009\r
2022-05-27,81.21065907317781\r
2022-05-30,81.46450723128274\r
2022-06-01,78.93861299393964\r
2022-06-04,80.95708994132215\r
2022-06-06,88.94634560743262\r
2022-06-11,87.63991226573867\r
2022-06-14,84.0182789599843\r
2022-06-19,77.18721362906369\r
2022-06-21,77.18721362906369\r
2022-06-29,81.97303959667384\r
2022-07-01,78.43680228307363\r
2022-07-04,79.6934387445726\r
2022-07-06,73.72614750520846\r
2022-07-11,65.55658747749032\r
2022-07-14,72.26001639819923\r
2022-07-16,68.16265575687143\r
2022-07-19,73.23628560516498\r
2022-07-21,67.68616834998554\r
2022-07-24,72.01667047154473\r
2022-07-26,67.21085886692384\r
2022-07-31,66.50010863312089\r
2022-08-03,70.56267671118329\r
2022-08-08,68.87959013522776\r
2022-08-10,70.56267671118329\r
2022-08-13,72.50365116199626\r
2022-08-25,70.08033600758826\r
2022-08-28,79.1899405508061\r
2022-08-30,70.56267671118329\r
2022-09-02,70.56267671118329\r
2022-09-04,75.20261521748971\r
2022-09-12,81.97303959667384\r
2022-09-19,82.73792442663004\r
2022-09-22,78.18631966059726\r
2022-10-04,68.64031864481765\r
2022-10-09,72.50365116199626\r
2022-10-12,72.50365116199626\r
2022-10-19,68.64031864481765\r
2022-10-22,71.5308462845003\r
2022-10-24,71.77361367051176\r
2022-11-11,63.21863885037903\r
2022-11-13,80.70380009405727\r
2022-11-23,75.6970576595674\r
2022-12-06,57.50596731282642\r
2022-12-08,57.50596731282642\r
2022-12-11,69.8396027083442\r
2022-12-13,69.8396027083442\r
2023-02-04,66.73672976671561\r
2023-02-06,69.11915458714519\r
2023-02-09,66.26378352483914\r
2023-02-11,64.852066954653\r
2023-02-14,64.61782281986378\r
2023-02-16,64.3838772364532\r
2023-02-26,62.523099125773285\r
2023-03-06,70.56267671118329\r
2023-03-13,81.46450723128274\r
2023-03-16,78.43680228307363\r
2023-03-28,98.27989130612617\r
2023-04-05,98.27989130612617\r
2023-04-07,98.27989130612617\r
2023-05-02,74.46309309208955\r
2023-05-25,83.50530668940709\r
2023-05-27,83.50530668940709\r
2023-05-30,69.8396027083442\r
2023-06-01,75.94470635731945\r
2023-06-06,73.23628560516498\r
2023-06-11,66.50010863312089\r
2023-06-14,72.50365116199626\r
2023-06-16,67.9242649660023\r
2023-06-24,75.44969385426205\r
2023-06-26,87.37944305703232\r
2023-07-06,99.63984663555921\r
2023-07-09,100.0\r
2023-07-11,95.84860373264593\r
2023-07-14,95.04294875542452\r
2023-07-19,87.63991226573867\r
2023-07-26,79.1899405508061\r
2023-07-31,76.44085733006746\r
2023-08-08,82.99344135939417\r
2023-08-10,82.99344135939417\r
2023-08-15,82.99344135939417\r
2023-08-20,79.94560885471236\r
2023-08-23,74.95582202619197\r
`;export{n as default};

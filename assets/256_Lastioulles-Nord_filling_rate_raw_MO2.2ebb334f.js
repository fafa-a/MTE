const r=`date,value\r
2017-02-15,85.11290909039985\r
2017-02-22,90.09373580471936\r
2017-02-25,84.92038930494516\r
2017-03-07,66.42236940084743\r
2017-03-14,94.8238124448995\r
2017-03-17,95.21081119138591\r
2017-03-27,80.7257696828543\r
2017-04-03,79.64925204644074\r
2017-04-06,96.23947945943799\r
2017-04-23,77.98846190866983\r
2017-05-03,80.04165742916591\r
2017-05-16,100.0\r
2017-05-23,100.0\r
2017-05-26,100.0\r
2017-06-22,99.54948526955869\r
2017-06-25,89.36619187506885\r
2017-07-02,94.18832488832028\r
2017-07-05,84.55740630597421\r
2017-07-07,86.9215352556797\r
2017-07-12,86.9215352556797\r
2017-07-17,86.48897926356808\r
2017-08-14,100.0\r
2017-08-19,94.27896243319898\r
2017-08-21,84.83490325835135\r
2017-08-24,89.47621363503555\r
2017-08-26,92.8570844944858\r
2017-08-29,86.83492744482177\r
2017-09-03,89.67444371943401\r
2017-10-05,56.529441359845876\r
2017-10-10,56.529441359845876\r
2017-10-13,57.07567115575245\r
2017-10-15,55.22710870529948\r
2017-10-18,59.72803925440865\r
2017-10-25,59.46502020790558\r
2017-10-28,59.062985511138976\r
2017-10-30,66.32924805608401\r
2017-11-04,66.32924805608401\r
2017-11-07,66.32924805608401\r
2017-11-17,76.87191710642993\r
2017-11-19,84.55740630597421\r
2017-11-22,75.70422174154771\r
2017-11-27,77.96808065201624\r
2017-11-29,75.5039054430607\r
2017-12-07,73.35939206109494\r
2018-02-12,22.364012786280323\r
2018-02-22,72.04635657727306\r
2018-02-25,75.68417674587532\r
2018-02-27,75.64409566573617\r
2018-03-17,53.54456354982558\r
2018-03-22,56.56349462045149\r
2018-03-29,47.02723619201992\r
2018-04-01,47.86065308699651\r
2018-04-06,68.90725420089696\r
2018-04-16,68.56539747002456\r
2018-04-18,76.08564116628136\r
2018-04-21,76.50845839915841\r
2018-04-23,75.00441368657015\r
2018-04-26,72.84828010667597\r
2018-05-06,65.58690794443699\r
2018-05-11,61.141789350813625\r
2018-05-13,61.141789350813625\r
2018-05-18,62.574072766285106\r
2018-05-21,61.15957840108093\r
2018-06-20,82.31370485089411\r
2018-06-22,91.51414670133299\r
2018-06-25,84.85627025309022\r
2018-06-27,81.81038134608247\r
2018-07-02,81.32965015446422\r
2018-07-07,78.31496750396991\r
2018-07-10,77.70339555075022\r
2018-07-12,93.19453029794035\r
2018-07-15,91.49185713027387\r
2018-07-17,91.49185713027387\r
2018-07-25,88.59815983258966\r
2018-07-30,89.25624586153033\r
2018-08-01,89.25624586153033\r
2018-08-04,89.25624586153033\r
2018-08-06,85.17713657031122\r
2018-08-11,89.30021517808555\r
2018-08-16,89.30021517808555\r
2018-08-19,88.07365245315555\r
2018-08-21,87.94279787050276\r
2018-08-26,78.90870527543773\r
2018-09-03,86.35944790739161\r
2018-09-05,83.11416860361601\r
2018-09-08,86.94319475781101\r
2018-09-10,83.26209539937719\r
2018-09-13,83.62195915117707\r
2018-09-18,77.27689099970466\r
2018-09-20,68.24340614890491\r
2018-09-23,66.38511208991086\r
2018-09-25,58.61034849845935\r
2018-09-28,59.83342878352714\r
2018-09-30,58.94092999364746\r
2018-10-05,55.68183725494602\r
2018-10-08,55.47947806308831\r
2018-10-13,58.176957437103596\r
2018-10-18,60.25602693476596\r
2018-10-20,51.77757307172036\r
2018-10-23,45.95905922796881\r
2018-10-25,43.53952686975331\r
2018-10-30,43.53952686975331\r
2018-11-04,41.73687621073306\r
2018-11-14,41.36430392135258\r
2018-11-19,45.65638652440609\r
2018-11-22,42.09688273243856\r
2018-11-29,44.026459835972084\r
2019-01-11,74.16944169180717\r
2019-01-16,73.5762338770218\r
2019-01-23,30.634429994816507\r
2019-02-05,5.158384686963336\r
2019-02-12,84.79217830215049\r
2019-02-15,56.10474358547233\r
2019-02-17,59.780721022627326\r
2019-02-20,59.780721022627326\r
2019-02-22,61.69459697061923\r
2019-02-25,50.123239714902276\r
2019-02-27,55.59747082005339\r
2019-03-12,57.76259473069025\r
2019-03-22,75.68417674587532\r
2019-03-24,69.173800718819\r
2019-03-27,72.96605154200988\r
2019-03-29,71.42391452888143\r
2019-04-01,74.07038858632056\r
2019-04-13,80.31076727076245\r
2019-04-18,43.59838767070945\r
2019-05-13,87.76849443787962\r
2019-05-16,84.11021646303354\r
2019-05-23,84.42950236848381\r
2019-05-31,83.15641838215826\r
2019-06-02,86.1869084103666\r
2019-06-17,75.84461989125796\r
2019-06-25,75.84461989125796\r
2019-06-27,81.49668118603113\r
2019-06-30,80.7465512275742\r
2019-07-02,82.56601459206922\r
2019-07-05,85.73491072839047\r
2019-07-07,84.0039382452248\r
2019-07-10,86.38102892242502\r
2019-07-15,88.42313038887626\r
2019-07-17,88.20461592140832\r
2019-07-20,87.22504313325209\r
2019-07-22,86.16535454979515\r
2019-07-25,88.20461592140832\r
2019-08-04,81.41314169919458\r
2019-08-09,88.03002216149066\r
2019-08-14,74.46704554796747\r
2019-08-16,85.92846116676498\r
2019-08-21,85.71342019989025\r
2019-08-24,87.35529919027087\r
2019-08-26,79.07293672550311\r
2019-08-29,71.81258661177714\r
2019-08-31,68.30016651885032\r
2019-09-03,64.39056751788893\r
2019-09-13,63.33345795317403\r
2019-09-15,64.189328601691\r
2019-09-18,71.15254621392867\r
2019-09-20,71.77366628189755\r
2019-09-30,71.67641711042523\r
2019-10-03,86.2084652877408\r
2020-01-16,70.55371553711723\r
2020-01-18,70.55371553711723\r
2020-01-21,70.55371553711723\r
2020-02-07,79.21679600677864\r
2020-02-12,80.6634430084562\r
2020-02-15,74.38761930943302\r
2020-02-20,76.1258529867128\r
2020-02-22,71.61810302308112\r
2020-03-28,64.04319439707827\r
2020-03-31,52.853457219227536\r
2020-04-02,52.853457219227536\r
2020-04-05,50.8262676285571\r
2020-04-07,46.90446348386765\r
2020-04-10,40.31412606107038\r
2020-04-12,41.27859112144327\r
2020-04-15,37.42942150497686\r
2020-05-20,88.90492750471832\r
2020-05-22,88.90492750471832\r
2020-05-25,98.3153935583407\r
2020-05-27,82.3557264670312\r
2020-05-30,90.62493290658374\r
2020-06-01,90.62493290658374\r
2020-06-24,97.85193636545762\r
2020-06-26,100.0\r
2020-06-29,100.0\r
2020-07-01,100.0\r
2020-07-04,100.0\r
2020-07-09,100.0\r
2020-07-11,98.89643892372753\r
2020-07-14,97.18209936835457\r
2020-07-19,88.57627055946644\r
2020-07-21,83.13529199095346\r
2020-07-24,87.63789384657031\r
2020-07-29,87.02986296669432\r
2020-07-31,81.16281086786749\r
2020-08-05,77.74408355297282\r
2020-08-08,76.9528166307554\r
2020-08-10,75.60402646657937\r
2020-08-15,74.72550845360514\r
2020-08-20,76.91236091631608\r
2020-08-25,85.07010583209401\r
2020-09-04,73.59596453017664\r
2020-09-07,72.37825865922417\r
2020-09-09,72.37825865922417\r
2020-09-12,77.56108140085863\r
2020-09-14,67.24499129227975\r
2020-09-17,69.8235265256931\r
2020-11-06,62.953124601985756\r
2020-11-08,62.953124601985756\r
2020-11-11,62.953124601985756\r
2020-11-18,67.96000033895389\r
2020-11-21,54.92511514096725\r
2020-11-23,56.00308274728032\r
2020-11-28,56.00308274728032\r
2021-02-14,72.63264226782167\r
2021-02-19,72.63264226782167\r
2021-02-21,80.04165742916591\r
2021-02-24,73.08392944774586\r
2021-02-26,72.02685950735038\r
2021-03-01,75.02435774017027\r
2021-03-06,69.42182394567324\r
2021-03-21,49.9801133383809\r
2021-03-23,50.139156784454016\r
2021-03-26,50.139156784454016\r
2021-03-28,38.122299417195386\r
2021-03-31,38.20428224034885\r
2021-04-02,29.191902912897906\r
2021-04-05,28.99234926058123\r
2021-04-07,27.94863059526126\r
2021-04-15,30.38128011591197\r
2021-04-17,29.914260874945004\r
2021-04-22,30.357231898903535\r
2021-05-27,83.32553766193872\r
2021-05-30,83.32553766193872\r
2021-06-01,83.4313348611387\r
2021-06-14,86.42420000541746\r
2021-06-16,96.83664198482137\r
2021-06-26,91.2468723608988\r
2021-07-01,91.31364993531017\r
2021-07-11,80.89210586226223\r
2021-07-19,95.75866445185336\r
2021-07-21,80.62190685774013\r
2021-07-29,85.92846116676498\r
2021-08-20,91.93822595694806\r
2021-08-25,91.96057631370348\r
2021-08-28,91.1801221229795\r
2021-08-30,83.28323981569663\r
2021-09-02,79.66987805867228\r
2021-09-22,50.346336089947506\r
2021-09-24,59.430000075475085\r
2021-09-27,59.430000075475085\r
2021-10-02,59.430000075475085\r
2021-10-12,64.06145098002315\r
2021-10-14,62.14243868788031\r
2021-10-17,61.17737034728476\r
2021-10-19,61.141789350813625\r
2021-10-22,60.20311113417759\r
2021-10-24,56.46136926447129\r
2021-10-27,47.42748831773074\r
2021-11-06,44.9644833343323\r
2022-01-15,69.88101850091763\r
2022-01-17,66.64615895788076\r
2022-01-22,66.55286211827394\r
2022-01-27,57.96956890361312\r
2022-01-30,53.24775988983832\r
2022-02-09,72.10486550567931\r
2022-02-11,75.40385865926409\r
2022-02-19,75.26391786234197\r
2022-03-06,64.88601261478728\r
2022-03-08,66.45963841007172\r
2022-03-23,48.06251469368523\r
2022-03-26,51.93979014601269\r
2022-04-10,46.9965261773299\r
2022-04-15,55.90152507396679\r
2022-04-17,54.25733395520113\r
2022-04-22,60.60946395487484\r
2022-04-27,62.93504546255898\r
2022-04-30,66.79558604505394\r
2022-05-02,66.79558604505394\r
2022-05-07,63.097862339276254\r
2022-05-17,87.33358229383474\r
2022-05-27,71.8904626950882\r
2022-06-01,87.5943844995867\r
2022-06-04,86.77000329171725\r
2022-06-06,86.77000329171725\r
2022-06-11,82.69233152884388\r
2022-06-14,81.1211310008711\r
2022-06-19,82.54497227473372\r
2022-06-21,83.02970509112029\r
2022-06-29,92.29619653956688\r
2022-07-01,93.93932315706122\r
2022-07-04,92.40822201005147\r
2022-07-06,85.73491072839047\r
2022-07-11,78.64223663365176\r
2022-07-14,82.4187813951842\r
2022-07-16,78.43760393051372\r
2022-07-19,77.8254953176385\r
2022-07-21,74.66581868637829\r
2022-07-24,76.99328425049413\r
2022-07-26,76.08564116628136\r
2022-07-31,76.75065709662645\r
2022-08-03,79.93828821937238\r
2022-08-08,82.04085684391745\r
2022-08-10,77.74408355297282\r
2022-08-13,81.07946311426892\r
2022-08-25,79.27849478206457\r
2022-08-28,80.53887047031876\r
2022-08-30,77.03376377627833\r
2022-09-02,79.83499375605692\r
2022-09-04,79.64925204644074\r
2022-09-12,81.01698374599972\r
2022-09-19,81.81038134608247\r
2022-09-22,82.92419327659616\r
2022-10-04,75.60402646657937\r
2022-10-09,80.6426734366045\r
2022-10-12,80.24862013424135\r
2022-10-19,88.8610672213921\r
2022-10-22,89.25624586153033\r
2022-10-24,81.95700559060857\r
2022-11-11,76.87191710642993\r
2022-11-13,76.87191710642993\r
2023-02-04,42.90958196489015\r
2023-02-06,42.90958196489015\r
2023-02-09,42.90958196489015\r
2023-02-11,42.90958196489015\r
2023-02-14,45.61108212864051\r
2023-02-16,39.071057699746035\r
2023-02-26,34.21250148586097\r
2023-03-01,64.7757300378921\r
2023-03-06,65.43900079422878\r
2023-03-13,50.05959971613413\r
2023-03-16,80.76733576574074\r
2023-04-05,80.24862013424135\r
2023-04-07,80.24862013424135\r
2023-04-30,94.00719614001487\r
2023-05-02,97.02080025236708\r
2023-05-27,90.98003540432657\r
2023-05-30,83.2409539874709\r
2023-06-01,87.4856640266466\r
2023-06-06,90.58059973022795\r
2023-06-14,84.47212497573395\r
2023-06-16,85.2199699529406\r
2023-06-24,86.83492744482177\r
2023-06-26,81.99892521937618\r
2023-07-04,88.83914162148956\r
`;export{r as default};

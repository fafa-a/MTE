const r=`date,value\r
2017-02-22,98.09319139004855\r
2017-02-25,98.38905283825005\r
2017-03-07,94.94134650006116\r
2017-03-17,100.0\r
2017-03-27,100.0\r
2017-04-06,97.87308340511677\r
2017-04-16,97.71597552257236\r
2017-04-23,89.1046968890416\r
2017-05-03,89.1046968890416\r
2017-05-16,88.08080499149807\r
2017-05-23,87.65799211692867\r
2017-05-26,89.14112857226641\r
2017-06-12,92.18412312637916\r
2017-06-15,87.65799211692867\r
2017-06-22,92.66415565982008\r
2017-06-25,89.18363917114013\r
2017-07-02,86.98907729761467\r
2017-07-05,90.5418275483907\r
2017-07-07,90.64567811958082\r
2017-07-10,90.64567811958082\r
2017-07-12,90.64567811958082\r
2017-07-17,90.4013940030311\r
2017-07-22,89.54832343741376\r
2017-07-27,92.12879417304984\r
2017-08-04,92.01817316757102\r
2017-08-06,92.01817316757102\r
2017-08-11,87.9055482710294\r
2017-08-14,88.75280832153123\r
2017-08-19,88.69825113788856\r
2017-08-21,87.57955268468771\r
2017-08-24,87.70627545818992\r
2017-08-26,86.8928136486094\r
2017-08-29,87.59765178448397\r
2017-09-03,85.05341220473713\r
2017-09-05,85.05341220473713\r
2017-09-08,84.70754166923659\r
2017-09-20,69.44317718898422\r
2017-09-23,72.51268922016392\r
2017-09-28,72.9688870973385\r
2017-10-03,67.77872334191811\r
2017-10-05,53.38506720639583\r
2017-10-08,53.380044749224176\r
2017-10-10,54.04956562187877\r
2017-10-13,51.717322308539636\r
2017-10-15,51.74710871072039\r
2017-10-18,52.399026172811716\r
2017-10-25,50.51139938148975\r
2017-10-28,50.737939231079\r
2017-10-30,50.737939231079\r
2017-11-07,46.928560606887224\r
2018-02-25,67.86104171625428\r
2018-02-27,67.95987258755868\r
2018-03-02,70.93830621372365\r
2018-03-14,83.88670820427552\r
2018-03-19,94.95999457703451\r
2018-03-22,94.95999457703451\r
2018-04-18,99.3481377534285\r
2018-04-21,100.0\r
2018-04-23,100.0\r
2018-04-26,100.0\r
2018-05-06,99.7276714189175\r
2018-05-11,100.0\r
2018-05-18,100.0\r
2018-05-21,100.0\r
2018-06-25,94.55005022969786\r
2018-06-27,93.65790776088761\r
2018-07-02,93.614619571795\r
2018-07-07,94.61832868145954\r
2018-07-10,95.05325529971212\r
2018-07-12,96.83163833593342\r
2018-07-15,96.45622812484642\r
2018-07-17,96.55628471912551\r
2018-07-20,95.44532031354511\r
2018-07-22,96.36871011513813\r
2018-07-25,94.38253504907608\r
2018-07-27,93.81256891060012\r
2018-07-30,93.08956880830691\r
2018-08-01,92.12879417304984\r
2018-08-04,91.91374296235824\r
2018-08-06,93.6331707455687\r
2018-08-11,90.85962687018531\r
2018-08-16,93.57752130724784\r
2018-08-19,91.46580666300743\r
2018-08-21,91.17171493827874\r
2018-08-26,92.16567877541505\r
2018-08-31,91.59458203071273\r
2018-09-03,90.37697901705099\r
2018-09-08,88.68006817023902\r
2018-09-10,87.39260974994761\r
2018-09-13,86.01623251508589\r
2018-09-20,83.57224766610166\r
2018-09-23,73.6579970372916\r
2018-09-25,73.6579970372916\r
2018-09-28,70.87693607048779\r
2018-09-30,70.87693607048779\r
2018-10-03,66.92480771349442\r
2018-10-05,64.4679735605196\r
2018-10-20,76.43259517407661\r
2018-10-23,79.04742836995716\r
2018-10-25,77.69842460310397\r
2018-10-30,78.26476908461733\r
2018-11-04,80.36994365535948\r
2019-02-20,49.33067555698344\r
2019-02-22,48.16515820467891\r
2019-02-25,47.40350491790849\r
2019-02-27,47.37467002821941\r
2019-03-12,48.20384239390993\r
2019-03-22,43.53736850860177\r
2019-03-24,43.831145607862595\r
2019-03-27,42.62346200023833\r
2019-03-29,43.04936755059565\r
2019-04-01,43.091116370224086\r
2019-04-08,42.979819485832714\r
2019-04-13,44.622820603367245\r
2019-05-06,69.33248661983868\r
2019-05-11,69.33248661983868\r
2019-05-13,70.19204682743879\r
2019-05-16,69.86439723184216\r
2019-05-23,72.1249123407852\r
2019-05-31,78.05654723146856\r
2019-06-02,76.6277201933619\r
2019-06-12,79.40201941829687\r
2019-06-17,78.9371020298041\r
2019-06-22,89.98057783871378\r
2019-06-25,89.03185006551365\r
2019-06-27,82.5429457692832\r
2019-06-30,84.90426609495427\r
2019-07-02,84.90426609495427\r
2019-07-05,88.55888366220549\r
2019-07-07,88.55888366220549\r
2019-07-10,87.30220659645016\r
2019-07-12,87.10344162743424\r
2019-07-15,88.2259427475385\r
2019-07-17,88.7770599453296\r
2019-07-22,88.54071127825877\r
2019-07-25,87.79079498973185\r
2019-08-01,88.2743416576431\r
2019-08-04,86.83266890965355\r
2019-08-09,88.38327513217106\r
2019-08-11,86.97102485758926\r
2019-08-14,90.5601509169139\r
2019-08-16,87.62178607142368\r
2019-08-21,88.71643548570272\r
2019-08-24,89.05005970334756\r
2019-08-26,88.94688998787838\r
2019-08-29,87.65195739144052\r
2019-08-31,87.08538040337685\r
2019-09-03,86.49013842540388\r
2019-09-05,86.49013842540388\r
2019-09-13,85.48349421386287\r
2019-09-15,85.17876981860213\r
2019-09-18,82.89734388531527\r
2019-09-20,84.21349726692544\r
2019-10-08,68.80208259519985\r
2019-10-13,68.80208259519985\r
2019-10-25,70.8044330764426\r
2019-10-30,71.06668913897519\r
2019-11-04,71.06668913897519\r
2019-11-09,71.06668913897519\r
2020-02-20,72.0575514922231\r
2020-02-22,70.23095816386198\r
2020-03-01,70.23095816386198\r
2020-03-08,74.86116086199789\r
2020-03-11,79.2449968014873\r
2020-03-13,79.15781175000008\r
2020-03-18,80.13631192194356\r
2020-03-21,80.13631192194356\r
2020-03-28,82.24214958581246\r
2020-03-31,80.31151211563055\r
2020-04-05,80.38163185131609\r
2020-04-07,83.47147560950575\r
2020-04-10,81.51837423358783\r
2020-04-12,81.54774979201292\r
2020-04-15,80.53363565473086\r
2020-04-25,81.4713814911609\r
2020-05-05,82.91507854465769\r
2020-05-07,83.16351121531528\r
2020-05-17,84.20755144954451\r
2020-05-20,85.46555809818221\r
2020-05-22,93.99209418165927\r
2020-05-25,95.27099543224195\r
2020-05-27,95.5948355304759\r
2020-05-30,95.5948355304759\r
2020-06-19,92.56561220328699\r
2020-06-21,98.0554455921551\r
2020-06-24,97.96739298230197\r
2020-06-26,95.85045774872674\r
2020-07-01,96.31871303100095\r
2020-07-04,94.95377840071262\r
2020-07-09,97.82908377884458\r
2020-07-11,97.83536899125656\r
2020-07-14,96.79407302213743\r
2020-07-19,98.87447456413882\r
2020-07-21,98.3323729835722\r
2020-07-24,97.82908377884458\r
2020-07-26,97.38321597180504\r
2020-07-29,97.44596862308231\r
2020-07-31,96.05638598091498\r
2020-08-03,96.05638598091498\r
2020-08-05,95.90660376571624\r
2020-08-08,97.54640399204445\r
2020-08-10,97.96110463093765\r
2020-08-15,100.0\r
2020-08-20,98.7861502869855\r
2020-08-23,100.0\r
2020-08-25,98.2882970129963\r
2020-09-02,96.28746973178552\r
2020-09-04,95.12788827908342\r
2020-09-07,94.52522622650295\r
2020-09-12,94.5438440026478\r
2020-09-14,94.03544690395094\r
2020-09-17,94.53763792643024\r
2020-09-19,94.6121207954214\r
2021-03-23,83.28783071659231\r
2021-03-26,82.37185493670347\r
2021-03-28,85.4296900474776\r
2021-03-31,85.4296900474776\r
2021-04-02,83.8807709399629\r
2021-04-05,82.11841054185179\r
2021-04-07,82.00062797743959\r
2021-04-15,82.96237783593466\r
2021-04-17,69.80337281158214\r
2021-04-20,68.81311729218905\r
2021-04-22,68.81311729218905\r
2021-05-27,75.12887644999259\r
2021-05-30,75.12887644999259\r
2021-06-14,81.15444299070734\r
2021-06-16,86.39407964056083\r
2021-06-19,86.39407964056083\r
2021-06-21,86.39407964056083\r
2021-06-26,84.44550535244827\r
2021-07-01,83.40629415157336\r
2021-07-19,88.99543492638105\r
2021-07-21,85.18474093367895\r
2021-07-26,85.41175811260551\r
2021-07-29,90.37697901705099\r
2021-08-05,90.20004340193533\r
2021-08-10,91.2084572250107\r
2021-08-13,92.20871771987136\r
2021-08-18,91.38612219822633\r
2021-08-20,91.66206256205659\r
2021-08-23,91.90145994249022\r
2021-08-25,91.60684984962941\r
2021-08-28,91.96288111925713\r
2021-08-30,91.10436831607824\r
2021-09-04,89.96229797776617\r
2021-09-07,89.65783613051597\r
2021-09-12,77.23147401464357\r
2021-09-14,77.23147401464357\r
2021-09-17,77.04728701910962\r
2021-09-22,77.50805968184864\r
2021-09-24,55.99478190317014\r
2021-09-29,55.99478190317014\r
2021-10-07,51.98065512136408\r
2021-10-12,52.9037097160661\r
2021-10-14,52.28434876368379\r
2021-10-17,52.28434876368379\r
2021-10-24,51.444576313163424\r
2021-10-27,50.540926769334305\r
2022-04-10,85.72277554513789\r
2022-04-15,85.72277554513789\r
2022-04-17,81.36568450753165\r
2022-04-27,89.48142341196098\r
2022-04-30,90.63956804240613\r
2022-05-07,90.63956804240613\r
2022-05-12,80.86138942467257\r
2022-05-15,81.75936945961296\r
2022-05-17,80.5160913284554\r
2022-05-20,80.5160913284554\r
2022-05-22,80.5160913284554\r
2022-05-27,80.86724664882057\r
2022-06-01,79.47184418180554\r
2022-06-04,79.46020514322274\r
2022-06-06,84.45145738482944\r
2022-06-11,84.80290210878569\r
2022-06-14,85.94433117299246\r
2022-06-16,85.54927189252953\r
2022-06-19,85.13100647719662\r
2022-06-29,87.23593296978079\r
2022-07-01,88.63764661344284\r
2022-07-04,88.63764661344284\r
2022-07-06,88.63764661344284\r
2022-07-11,89.21400847871305\r
2022-07-14,89.35983443522922\r
2022-07-16,89.15327369193184\r
2022-07-19,89.55440617579836\r
2022-07-21,88.85589466322307\r
2022-07-24,89.0015037332059\r
2022-07-26,88.8983548567524\r
2022-07-29,88.92868816432957\r
2022-07-31,89.68217901374713\r
2022-08-03,89.76131028026523\r
2022-08-05,89.3355239858875\r
2022-08-08,88.7709968093988\r
2022-08-10,89.54832343741376\r
2022-08-13,89.44494029186791\r
2022-08-15,89.73087211987104\r
2022-08-20,89.53007614010568\r
2022-08-30,89.97448439894623\r
2022-09-02,90.19394446372621\r
2022-09-04,90.06590203628974\r
2022-09-19,88.89228865501202\r
2022-09-22,88.45592507829393\r
2022-10-04,81.28351087027089\r
2022-10-07,81.28351087027089\r
2022-10-09,82.30699280166326\r
2022-10-12,82.30699280166326\r
2022-10-24,78.9371020298041\r
2022-10-27,78.9371020298041\r
2022-11-01,78.76301872943566\r
2023-02-19,43.51408420658605\r
2023-02-21,43.50942789960845\r
2023-02-26,42.68817254565348\r
2023-03-01,42.85473791821962\r
2023-03-03,44.28021084086259\r
2023-03-16,60.34949769860075\r
2023-03-28,64.93177359422748\r
2023-04-05,65.57557114108256\r
2023-04-07,61.621063009964736\r
2023-04-15,61.430496390193646\r
`;export{r as default};

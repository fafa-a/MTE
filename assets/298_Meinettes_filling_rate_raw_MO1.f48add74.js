const n=`date,value\r
2017-02-19,78.09106041156313\r
2017-02-22,85.01683523784196\r
2017-03-11,79.83856469992976\r
2017-03-14,79.08833060726961\r
2017-04-03,97.88021329758975\r
2017-04-10,84.2534615298337\r
2017-04-20,86.16544118321823\r
2017-04-23,74.628268736246\r
2017-05-23,82.2271074606437\r
2017-06-02,76.23061399835984\r
2017-06-09,81.59666582320979\r
2017-06-12,80.46524690061733\r
2017-06-19,81.09327597383553\r
2017-06-22,88.86193500756046\r
2017-07-04,74.9972080664842\r
2017-07-07,63.79854845655799\r
2017-07-14,60.64252122320597\r
2017-07-17,62.85884014522911\r
2017-08-03,37.50567935064871\r
2017-08-06,37.20096523957878\r
2017-08-18,35.387170666736914\r
2017-08-21,28.67357210056855\r
2017-08-23,28.95727111950696\r
2017-08-26,25.056925815501423\r
2017-09-07,22.54526167535108\r
2017-09-27,19.851957031390143\r
2017-10-05,12.757849450285699\r
2017-10-07,14.841901651483095\r
2017-10-10,13.67336826627897\r
2017-10-12,12.082827000620894\r
2017-10-15,13.061078018237934\r
2017-10-17,12.682349578635646\r
2017-10-22,2.523160366444689\r
2017-10-27,8.730303483643695\r
2017-10-30,4.872795137896652\r
2017-11-21,6.378940513021108\r
2018-01-15,20.96990755483386\r
2018-01-23,5.047553619653951\r
2018-02-19,44.37804363120658\r
2018-02-24,46.306505849483784\r
2018-02-27,67.59540194939888\r
2018-03-14,60.294585729773274\r
2018-03-19,64.03407448894235\r
2018-03-21,80.46524690061733\r
2018-03-31,66.99817162823334\r
2018-04-18,88.73301280372468\r
2018-04-20,86.16544118321823\r
2018-04-30,90.4130108479004\r
2018-05-05,82.47965784518257\r
2018-05-20,55.14261467278728\r
2018-06-09,81.59666582320979\r
2018-06-19,76.72552421812138\r
2018-06-22,80.59074511636142\r
2018-06-24,79.83856469992976\r
2018-06-27,85.90982881675939\r
2018-06-29,90.67224079620132\r
2018-07-02,88.99090873643088\r
2018-07-07,87.18997760587484\r
2018-07-09,79.96379316339139\r
2018-07-17,76.9733097225737\r
2018-07-19,76.35425885464187\r
2018-07-24,75.98348992406316\r
2018-07-27,71.08788152318839\r
2018-07-29,64.5058425235702\r
2018-08-01,64.86029347617192\r
2018-08-03,58.44828756997362\r
2018-08-11,62.507441380216086\r
2018-08-16,39.451300028414636\r
2018-08-18,50.56105400309875\r
2018-08-21,42.7883951465428\r
2018-08-26,38.628791038625124\r
2018-08-28,36.3917536817054\r
2018-09-02,30.86804987237134\r
2018-09-05,33.10636883559827\r
2018-09-10,28.390643917022455\r
2018-09-17,25.87955948016802\r
2018-09-20,25.147967531106037\r
2018-09-25,24.784347243059887\r
2018-09-27,22.10451937880686\r
2018-10-02,28.390643917022455\r
2018-10-05,17.667729555854613\r
2018-10-17,19.851957031390143\r
2018-10-20,16.92822718090636\r
2018-10-22,16.278266876371273\r
2018-11-04,19.93735241216455\r
2018-11-24,51.4463914538292\r
2019-01-03,63.44570800131574\r
2019-02-04,76.1070243414156\r
2019-02-12,67.23688859657831\r
2019-02-14,68.43397015366689\r
2019-02-17,67.47583917378999\r
2019-02-22,74.38258775772698\r
2019-02-27,79.96379316339139\r
2019-03-16,65.80810405021344\r
2019-03-21,80.08907565314193\r
2019-03-24,88.34655567891315\r
2019-03-29,86.67729255802956\r
2019-03-31,88.08917583878058\r
2019-04-05,79.08833060726961\r
2019-04-13,93.14507504176794\r
2019-04-15,89.89516472737945\r
2019-04-20,91.45115504126161\r
2019-04-23,88.34655567891315\r
2019-05-03,96.16285223282308\r
2019-05-23,90.02454945303604\r
2019-05-30,85.39923212132825\r
2019-06-02,100.0\r
2019-06-07,90.93167498571904\r
2019-06-12,88.47532310569474\r
2019-06-17,87.96056349318879\r
2019-06-19,91.32120864938115\r
2019-06-24,85.90982881675939\r
2019-06-27,87.44663206722569\r
2019-06-29,68.0742352179166\r
2019-07-02,91.19131315444868\r
2019-07-04,87.0617283079662\r
2019-07-07,83.99942542829464\r
2019-07-14,78.21552847893325\r
2019-07-17,77.84228812970551\r
2019-07-19,71.08788152318839\r
2019-07-22,66.52144001407441\r
2019-07-24,65.57079663564302\r
2019-07-29,45.55386621142577\r
2019-08-03,55.7087669251077\r
2019-08-08,43.84638831749915\r
2019-08-11,40.174892962445135\r
2019-08-13,45.98353022180625\r
2019-08-16,42.0520525652777\r
2019-08-23,29.24173757166913\r
2019-08-26,29.622214152131853\r
2019-08-28,35.08731081212019\r
2019-08-31,31.060966230142782\r
2019-09-02,33.59862625774233\r
2019-09-07,31.641694639675038\r
2019-09-12,25.97141357135142\r
2019-09-15,23.79196500317218\r
2019-09-17,20.451835527582453\r
2019-09-20,20.710425461926203\r
2019-09-27,19.766662682193278\r
2019-10-25,28.014611370945786\r
2019-12-06,83.61876769834795\r
2019-12-29,78.71394601421208\r
2020-02-07,53.34168990762086\r
2020-02-12,68.91442769671134\r
2020-02-22,73.89189586855167\r
2020-02-24,72.30334667346891\r
2020-03-20,82.9853976767002\r
2020-03-25,81.97477048834314\r
2020-03-28,100.0\r
2020-04-02,98.80840388589198\r
2020-04-04,100.0\r
2020-04-07,99.8721401445316\r
2020-04-09,91.84129927381258\r
2020-04-14,100.0\r
2020-04-24,92.23190041196187\r
2020-05-04,86.54925147097316\r
2020-05-09,90.4130108479004\r
2020-05-17,87.5750371620885\r
2020-05-19,78.34005111183076\r
2020-05-22,89.50731823185555\r
2020-05-27,98.67565761275466\r
2020-05-29,86.4212625230239\r
2020-06-23,85.52680270293264\r
2020-07-01,82.2271074606437\r
2020-07-08,75.98348992406316\r
2020-07-11,71.20917243954182\r
2020-07-13,66.64053500999991\r
2020-07-18,62.6245140218196\r
2020-07-21,69.39580938794936\r
2020-07-23,52.113162712132535\r
2020-07-28,42.47238885734199\r
2020-07-31,55.93567309680411\r
2020-08-05,33.008157799169716\r
2020-08-07,30.3872110177967\r
2020-08-10,32.030487245577646\r
2020-08-20,20.27994037268026\r
2020-08-27,13.8276415192615\r
2020-09-01,6.130565716157613\r
2020-09-04,7.011555580466521\r
2020-09-14,1.6964041488705617\r
2020-09-16,1.827819270310949\r
2020-09-19,1.8722187327108535\r
2020-10-31,5.946080516389843\r
2020-11-18,4.30277067028427\r
2020-11-23,11.053222253830738\r
2020-12-13,7.924175014896108\r
2021-01-24,36.593596775070395\r
2021-02-21,78.34005111183076\r
2021-02-23,83.11196555939108\r
2021-02-28,92.10164931910523\r
2021-03-20,97.61545955622968\r
2021-03-23,92.49255457718579\r
2021-03-25,94.45389552865296\r
2021-03-28,88.47532310569474\r
2021-03-30,100.0\r
2021-04-02,96.16285223282308\r
2021-04-04,84.63491138806312\r
2021-04-14,93.01446992793191\r
2021-04-24,93.53719293683601\r
2021-05-27,78.96348139733284\r
2021-06-01,79.33819187114062\r
2021-06-03,93.27573060236153\r
2021-06-11,87.0617283079662\r
2021-06-13,82.2271074606437\r
2021-06-16,91.06146858902339\r
2021-06-18,80.59074511636142\r
2021-06-26,93.01446992793191\r
2021-07-11,77.34540007573052\r
2021-07-21,75.98348992406316\r
2021-07-23,80.46524690061733\r
2021-08-10,73.15753820045612\r
2021-08-15,75.86001078663335\r
2021-08-20,80.84190302137469\r
2021-08-25,76.1070243414156\r
2021-08-27,72.18154507839529\r
2021-09-01,72.30334667346891\r
2021-09-04,74.25983096477312\r
2021-09-06,69.75745039184329\r
2021-09-24,61.10729141337716\r
2021-09-26,75.86001078663335\r
2021-10-01,54.12756778284846\r
2021-10-11,64.15192707527156\r
2021-10-14,59.94720223254433\r
2021-10-16,55.93567309680411\r
2021-10-21,44.91145864534576\r
2021-10-24,56.04922136535434\r
2021-11-30,61.92298440503292\r
2021-12-23,59.369460296875666\r
2022-01-14,49.460360515710654\r
2022-01-24,51.224660614721365\r
2022-02-01,3.276141302176478\r
2022-02-08,36.29094751202501\r
2022-02-13,57.531095417806235\r
2022-02-26,57.64552578392963\r
2022-02-28,63.32821433991636\r
2022-03-05,76.1070243414156\r
2022-03-08,71.81647988256216\r
2022-03-23,84.2534615298337\r
2022-03-25,82.8588829274678\r
2022-04-04,83.11196555939108\r
2022-04-14,67.11750088798458\r
2022-04-17,81.59666582320979\r
2022-04-19,92.23190041196187\r
2022-05-09,90.54260027548906\r
2022-05-19,85.90982881675939\r
2022-05-29,76.1070243414156\r
2022-06-06,77.59373457959113\r
2022-06-11,73.76936273599975\r
2022-06-13,76.47795887008422\r
2022-06-16,60.41050296524837\r
2022-06-18,71.93811163998011\r
2022-06-21,62.507441380216086\r
2022-06-28,72.05980005292597\r
2022-07-03,74.38258775772698\r
2022-07-06,67.7150229878315\r
2022-07-08,66.99817162823334\r
2022-07-11,65.57079663564302\r
2022-07-13,64.9785625668291\r
2022-07-16,63.44570800131574\r
2022-07-18,63.093407052126096\r
2022-07-21,53.229680367297625\r
2022-07-26,56.73183990360583\r
2022-07-28,50.67148953027289\r
2022-07-31,43.740269257227574\r
2022-08-07,38.219331668522514\r
2022-08-10,37.09954613165955\r
2022-08-12,35.587467021079384\r
2022-08-22,28.296506412992823\r
2022-09-01,27.827113864001724\r
2022-09-04,34.29113370422443\r
2022-09-09,28.768052960655677\r
2022-09-11,34.390380298385914\r
2022-09-19,29.908458268659793\r
2022-09-21,33.59862625774233\r
2022-10-04,32.71400751291668\r
2022-10-06,31.060966230142782\r
2022-10-11,39.348225752241625\r
2022-11-18,57.76001873351602\r
2022-12-05,67.7150229878315\r
2023-01-17,65.57079663564302\r
2023-02-03,83.3652605797403\r
2023-02-08,70.60328788484165\r
2023-02-11,83.3652605797403\r
2023-02-13,69.99883169151106\r
2023-02-16,73.64688562273219\r
2023-02-21,78.71394601421208\r
2023-03-05,80.71629716916033\r
2023-03-28,82.47965784518257\r
2023-04-04,71.08788152318839\r
2023-04-19,98.14516438035416\r
2023-05-27,86.29332574885959\r
2023-05-29,100.0\r
2023-06-01,100.0\r
2023-06-03,98.54296049588068\r
2023-06-08,89.89516472737945\r
2023-06-16,86.29332574885959\r
2023-06-26,91.971448928977\r
2023-06-28,94.19172937449777\r
2023-07-06,84.88947468141814\r
2023-07-08,94.32278737018024\r
2023-07-11,100.0\r
2023-07-13,83.74560070410412\r
2023-07-16,49.241024185478366\r
2023-07-18,85.78210108572117\r
2023-07-31,71.57338650675501\r
2023-08-02,79.46320384818678\r
2023-08-22,54.12756778284846\r
2023-08-25,57.64552578392963\r
2023-09-04,45.55386621142577\r
2023-09-06,52.22452082289437\r
2023-09-11,50.23014597019627\r
2023-09-19,66.40240370171094\r
2023-09-26,66.52144001407441\r
2023-09-29,55.595409137914885\r
2023-10-01,66.52144001407441\r
2023-10-06,67.59540194939888\r
2023-10-11,70.36133369580423\r
2023-10-21,97.48315676363606\r
`;export{n as default};

const n=`date,value\r
2017-02-19,77.75449843688429\r
2017-02-22,84.65042410450873\r
2017-03-11,79.49447121663836\r
2017-03-14,78.74747053208365\r
2017-04-03,97.45836273369926\r
2017-04-10,83.89034043458206\r
2017-04-20,85.79407971263684\r
2017-04-23,74.3066309282772\r
2017-05-23,81.87271967908161\r
2017-06-02,75.90207029767178\r
2017-06-09,81.24499516037163\r
2017-06-12,80.1184525012691\r
2017-06-19,80.74377485359092\r
2017-06-22,88.47895201101379\r
2017-07-04,74.67398017958872\r
2017-07-07,63.52358528744466\r
2017-07-14,60.38116010728797\r
2017-07-17,62.58792699263772\r
2017-08-03,37.344034913533896\r
2017-08-06,37.0406340793281\r
2017-08-18,35.23465671731523\r
2017-08-21,28.549992858637356\r
2017-08-23,28.83246917293422\r
2017-08-26,24.948933832969733\r
2017-09-07,22.44809462768753\r
2017-09-27,19.766397764753073\r
2017-10-05,12.702864833851834\r
2017-10-07,14.777935050165528\r
2017-10-10,13.61443788679691\r
2017-10-12,12.030751640219849\r
2017-10-15,13.004786527431108\r
2017-10-17,12.627690356501159\r
2017-10-22,2.512285884386352\r
2017-10-27,8.692677049010651\r
2017-10-30,4.851794045771987\r
2017-11-21,6.351448136760542\r
2018-01-15,20.879530071696966\r
2018-01-23,5.025799341961026\r
2018-02-19,44.186780227710884\r
2018-02-24,46.10693103301897\r
2018-02-27,67.30407485204098\r
2018-03-14,60.0347241690683\r
2018-03-19,63.75809623428492\r
2018-03-21,80.1184525012691\r
2018-03-31,66.70941851328995\r
2018-04-18,88.35058544454895\r
2018-04-20,85.79407971263684\r
2018-04-30,90.02334292295153\r
2018-05-05,82.12418160540673\r
2018-05-20,54.904957414896074\r
2018-06-09,81.24499516037163\r
2018-06-19,76.39484752090371\r
2018-06-22,80.24340983657072\r
2018-06-24,79.49447121663836\r
2018-06-27,85.53956900112229\r
2018-06-29,90.28145562501663\r
2018-07-02,88.60736988044727\r
2018-07-07,86.81420052101286\r
2018-07-09,79.61915996225358\r
2018-07-17,76.64156510313502\r
2018-07-19,76.02518226124153\r
2018-07-24,75.65601129492103\r
2018-07-27,70.78150230826819\r
2018-07-29,64.2278310120907\r
2018-08-01,64.58075432872607\r
2018-08-03,58.19638330618885\r
2018-08-11,62.23804270907276\r
2018-08-16,39.28127022767646\r
2018-08-18,50.343142655917106\r
2018-08-21,42.60398291436203\r
2018-08-26,38.46230614108502\r
2018-08-28,36.23491011450846\r
2018-09-02,30.7350127261887\r
2018-09-05,32.96368483552153\r
2018-09-10,28.26828405753587\r
2018-09-17,25.768022057106283\r
2018-09-20,25.039583171016393\r
2018-09-25,24.677530037539967\r
2018-09-27,22.009251871204203\r
2018-10-02,28.26828405753587\r
2018-10-05,17.59158401606976\r
2018-10-17,19.766397764753073\r
2018-10-20,16.855268796965987\r
2018-10-22,16.20810973398664\r
2018-11-04,19.851425102913762\r
2018-11-24,51.22466442122716\r
2019-01-03,63.17226552714159\r
2019-02-04,75.7790132955381\r
2019-02-12,66.94710664358571\r
2019-02-14,68.13902894005493\r
2019-02-17,67.18502737592534\r
2019-02-22,74.06200880175527\r
2019-02-27,79.61915996225358\r
2019-03-16,65.52447996658233\r
2019-03-21,79.74390250131168\r
2019-03-24,87.96579389800425\r
2019-03-29,86.30372507681724\r
2019-03-31,87.70952333038996\r
2019-04-05,78.74747053208365\r
2019-04-13,92.74363228734191\r
2019-04-15,89.50772864960982\r
2019-04-20,91.05701285436936\r
2019-04-23,87.96579389800425\r
2019-05-03,95.74840326430277\r
2019-05-23,89.63655574448856\r
2019-05-30,85.03117290882258\r
2019-06-02,100.0\r
2019-06-07,90.53977168804636\r
2019-06-12,88.09400635448318\r
2019-06-17,87.58146528672177\r
2019-06-19,90.92762651397268\r
2019-06-24,85.53956900112229\r
2019-06-27,87.06974883613049\r
2019-06-29,67.78084441352816\r
2019-07-02,90.79829085116499\r
2019-07-04,86.68650396034107\r
2019-07-07,83.63739919449733\r
2019-07-14,77.87843006361295\r
2019-07-17,77.50679833012565\r
2019-07-19,70.78150230826819\r
2019-07-22,66.23474154831376\r
2019-07-24,65.28819531507382\r
2019-07-29,45.35753517064375\r
2019-08-03,55.468669627101704\r
2019-08-08,43.65741627694931\r
2019-08-11,40.001744573414555\r
2019-08-13,45.78534738688774\r
2019-08-16,41.87081387065532\r
2019-08-23,29.115709612920803\r
2019-08-26,29.494546390459032\r
2019-08-28,34.93608921836976\r
2019-08-31,30.92709764038674\r
2019-09-02,33.453820694337175\r
2019-09-07,31.505323188525715\r
2019-09-12,25.85948026950218\r
2019-09-15,23.68942483172674\r
2019-09-17,20.363690865252433\r
2019-09-20,20.621166311734502\r
2019-09-27,19.681471022737405\r
2019-10-25,27.893872161192785\r
2019-12-06,83.25838204820506\r
2019-12-29,78.37469948630368\r
2020-02-07,53.11179439341731\r
2020-02-12,68.61741577566393\r
2020-02-22,73.5734317286717\r
2020-02-24,71.9917289671135\r
2020-03-20,82.62774176622361\r
2020-03-25,81.62147024521676\r
2020-03-28,100.0\r
2020-04-02,98.38255294531777\r
2020-04-04,100.0\r
2020-04-07,99.4417046436523\r
2020-04-09,91.44547561771469\r
2020-04-14,100.0\r
2020-04-24,91.83439331745664\r
2020-05-04,86.1762358296369\r
2020-05-09,90.02334292295153\r
2020-05-17,87.1976005222925\r
2020-05-19,78.00241602069893\r
2020-05-22,89.12155372035379\r
2020-05-27,98.25037879077614\r
2020-05-29,86.04879849685118\r
2020-06-23,85.15819367836617\r
2020-07-01,81.87271967908161\r
2020-07-08,75.65601129492103\r
2020-07-11,70.90227047707403\r
2020-07-13,66.35332326081357\r
2020-07-18,62.35461078332592\r
2020-07-21,69.09672277651198\r
2020-07-23,51.88856198502345\r
2020-07-28,42.28933856979539\r
2020-07-31,55.69459786369504\r
2020-08-05,32.86589707546011\r
2020-08-07,30.256246222450955\r
2020-08-10,31.892440150551888\r
2020-08-20,20.192536555364597\r
2020-08-27,13.768046242793917\r
2020-09-01,6.10414380188914\r
2020-09-04,6.981336718290808\r
2020-09-14,1.6890928749912184\r
2020-09-16,1.8199416149208214\r
2020-09-19,1.8641497216052163\r
2020-10-31,5.920453708536953\r
2020-11-18,4.284226307001853\r
2020-11-23,11.005584351506098\r
2020-12-13,7.890022885617051\r
2021-01-24,36.43588329126943\r
2021-02-21,78.00241602069893\r
2021-02-23,82.75376415835123\r
2021-02-28,91.70470358930403\r
2021-03-20,97.19475004538069\r
2021-03-23,92.0939240982612\r
2021-03-25,94.04681193383824\r
2021-03-28,88.09400635448318\r
2021-03-30,100.0\r
2021-04-02,95.74840326430277\r
2021-04-04,84.27014629519061\r
2021-04-14,92.61359006399275\r
2021-04-24,93.13406020698417\r
2021-05-27,78.62315940546156\r
2021-06-01,78.99625492748955\r
2021-06-03,92.87372474002989\r
2021-06-11,86.68650396034107\r
2021-06-13,81.87271967908161\r
2021-06-16,90.66900589836516\r
2021-06-18,80.24340983657072\r
2021-06-26,92.61359006399275\r
2021-07-11,77.01205179687992\r
2021-07-21,75.65601129492103\r
2021-07-23,80.1184525012691\r
2021-08-10,72.84223904342555\r
2021-08-15,75.53306433597756\r
2021-08-20,80.49348528476983\r
2021-08-25,75.7790132955381\r
2021-08-27,71.87045232054412\r
2021-09-01,71.9917289671135\r
2021-09-04,73.9397810740801\r
2021-09-06,69.45680515628487\r
2021-09-24,60.843927200406156\r
2021-09-26,75.53306433597756\r
2021-10-01,53.89428524062726\r
2021-10-11,63.875440891806825\r
2021-10-14,59.688837848022914\r
2021-10-16,55.69459786369504\r
2021-10-21,44.71789629483185\r
2021-10-24,55.80765675446908\r
2021-11-30,61.6561046648997\r
2021-12-23,59.113585902446566\r
2022-01-14,49.24719300952283\r
2022-01-24,51.00388921223453\r
2022-02-01,3.2620215734882474\r
2022-02-08,36.13453840587071\r
2022-02-13,57.28314412892366\r
2022-02-26,57.39708131554887\r
2022-02-28,63.05527824763131\r
2022-03-05,75.7790132955381\r
2022-03-08,71.50696050663906\r
2022-03-23,83.89034043458206\r
2022-03-25,82.5017722785564\r
2022-04-04,82.75376415835123\r
2022-04-14,66.82823347996992\r
2022-04-17,81.24499516037163\r
2022-04-19,91.83439331745664\r
2022-05-09,90.15237383752455\r
2022-05-19,85.53956900112229\r
2022-05-29,75.7790132955381\r
2022-06-06,77.25931601240585\r
2022-06-11,73.45142669745222\r
2022-06-13,76.148349146243\r
2022-06-16,60.15014181683816\r
2022-06-18,71.62806804753026\r
2022-06-21,62.23804270907276\r
2022-06-28,71.74923199977164\r
2022-07-03,74.06200880175527\r
2022-07-06,67.42318033987542\r
2022-07-08,66.70941851328995\r
2022-07-11,65.28819531507382\r
2022-07-13,64.69851369549828\r
2022-07-16,63.17226552714159\r
2022-07-18,62.821482947692544\r
2022-07-21,53.000267599158434\r
2022-07-26,56.48733329856689\r
2022-07-28,50.45310222081203\r
2022-07-31,43.55175457556476\r
2022-08-07,38.054611485834876\r
2022-08-10,36.93965207413294\r
2022-08-12,35.434089821290975\r
2022-08-22,28.174552273496218\r
2022-09-01,27.70718274330337\r
2022-09-04,34.14334352680021\r
2022-09-09,28.644066518916052\r
2022-09-11,34.24216238147993\r
2022-09-19,29.77955683331689\r
2022-09-21,33.453820694337175\r
2022-10-04,32.57301453740606\r
2022-10-06,30.92709764038674\r
2022-10-11,39.178640187780225\r
2022-11-18,57.51108081591077\r
2022-12-05,67.42318033987542\r
2023-01-17,65.28819531507382\r
2023-02-03,83.00596751120642\r
2023-02-08,70.29899720337175\r
2023-02-11,83.00596751120642\r
2023-02-13,69.6971461349935\r
2023-02-16,73.3294774440815\r
2023-02-21,78.37469948630368\r
2023-03-05,80.36842077689667\r
2023-03-28,82.12418160540673\r
2023-04-04,70.78150230826819\r
2023-04-19,97.72217191290724\r
2023-05-27,85.92141311298839\r
2023-05-29,99.57431797352326\r
2023-06-01,100.0\r
2023-06-03,98.11825358064095\r
2023-06-08,89.50772864960982\r
2023-06-16,85.92141311298839\r
2023-06-26,91.57506434535789\r
2023-06-28,93.78577568057145\r
2023-07-06,84.52361245496543\r
2023-07-08,93.91626883390715\r
2023-07-11,100.0\r
2023-07-13,83.3846684207532\r
2023-07-16,49.028801989394324\r
2023-07-18,85.41239175943781\r
2023-07-31,71.2649148306091\r
2023-08-02,79.12072811971666\r
2023-08-22,53.89428524062726\r
2023-08-25,57.39708131554887\r
`;export{n as default};

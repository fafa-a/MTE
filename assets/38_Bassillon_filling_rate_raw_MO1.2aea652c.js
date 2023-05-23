const n=`date,value\r
2017-01-26,33.34905808303403\r
2017-02-15,51.738764434248665\r
2017-02-18,50.997238983276105\r
2017-02-25,53.163136181417116\r
2017-03-10,57.008543993489866\r
2017-03-30,59.063868099777906\r
2017-04-06,71.18471141799213\r
2017-04-09,71.31676022212417\r
2017-04-19,70.04566264297203\r
2017-05-09,73.98470259128825\r
2017-05-16,77.66801772630501\r
2017-05-26,76.6125968329763\r
2017-06-18,77.76015136395387\r
2017-07-05,73.312899286648\r
2017-07-18,72.06746127630296\r
2017-08-02,61.48287413647362\r
2017-08-12,54.83776902038594\r
2017-08-14,60.22669709064553\r
2017-08-22,45.823657959425084\r
2017-08-24,50.444777556566976\r
2017-10-08,40.51270086716654\r
2017-10-11,38.4459435429519\r
2017-10-13,38.7651348558779\r
2017-10-16,36.65295676659577\r
2017-10-23,38.15985438561968\r
2017-10-26,35.66603153365558\r
2017-10-31,36.99547605097492\r
2017-11-07,37.87488556479022\r
2017-11-17,37.24563053394692\r
2017-11-20,33.28996363426331\r
2017-11-22,36.96426889347417\r
2017-12-05,33.46741187365181\r
2017-12-12,38.06474031704228\r
2017-12-25,41.46789765841527\r
2018-01-11,74.2543238081634\r
2018-02-15,99.63755195899091\r
2018-02-25,100.0\r
2018-03-02,95.89663873683169\r
2018-03-15,99.95268446244137\r
2018-03-30,93.5966618777347\r
2018-04-19,92.0292577030855\r
2018-04-21,100.0\r
2018-05-06,87.70448796773584\r
2018-05-11,99.58508060721027\r
2018-05-21,94.92196598827155\r
2018-06-20,95.8452099886875\r
2018-06-23,89.3320696495685\r
2018-06-25,86.6769223289821\r
2018-07-08,80.87974965074328\r
2018-07-13,86.82332864085379\r
2018-07-23,84.97841927328359\r
2018-07-25,85.84973358118091\r
2018-08-02,75.42862733035932\r
2018-08-04,70.6577993465446\r
2018-08-12,62.62917888373346\r
2018-08-19,57.991916127965794\r
2018-08-22,53.768942667903744\r
2018-08-27,44.85133608408114\r
2018-09-01,41.20322910576089\r
2018-09-03,39.86074241279777\r
2018-09-08,43.37940403212826\r
2018-09-11,41.368542809649114\r
2018-09-16,37.4338266087778\r
2018-09-23,37.46524098221399\r
2018-09-26,36.621901486188676\r
2018-10-03,36.80844024242082\r
2018-10-06,37.528111186432504\r
2018-11-15,34.15221455653643\r
2018-12-07,32.23565675262848\r
2018-12-20,39.34316776104233\r
2019-01-16,38.12813586552582\r
2019-02-03,71.58124285515906\r
2019-02-13,59.70395875931654\r
2019-02-15,70.43885845772195\r
2019-02-20,72.1117485445931\r
2019-02-23,70.8332086142605\r
2019-02-25,68.65697708874369\r
2019-02-28,74.02960374500664\r
2019-03-12,67.71071122955314\r
2019-03-20,68.70015282138267\r
2019-03-22,65.96558206478792\r
2019-03-25,74.8854404377545\r
2019-03-27,70.30766494148827\r
2019-03-30,63.91126056946697\r
2019-05-01,71.14072366743774\r
2019-05-06,74.74996535242515\r
2019-05-14,80.22257444775451\r
2019-06-08,86.04399203257887\r
2019-06-13,77.71407738531475\r
2019-06-18,83.91980749071264\r
2019-06-23,82.63010967690605\r
2019-06-28,88.14681761702681\r
2019-07-05,74.93062738647657\r
2019-07-15,77.43793421119908\r
2019-07-25,56.111627664255735\r
2019-08-14,49.85896251255498\r
2019-08-17,47.40924457587086\r
2019-08-22,48.266462012599256\r
2019-08-24,51.51571737217871\r
2019-09-11,46.10347328098455\r
2019-09-13,47.72975718507639\r
2019-09-16,42.97322706884388\r
2019-10-08,43.71941578516502\r
2019-10-11,40.5782018186725\r
2019-10-13,44.437973159415925\r
2019-12-05,90.02730131909435\r
2019-12-10,86.87215953881181\r
2019-12-15,76.65832725502125\r
2019-12-25,80.97386135727402\r
2019-12-30,81.2565408505421\r
2020-01-09,93.54588376227645\r
2020-01-11,92.3819744584934\r
2020-01-16,93.3936361127864\r
2020-01-19,89.92780946123088\r
2020-01-29,85.8012049426882\r
2020-02-05,90.9753517438945\r
2020-02-15,84.20782969282126\r
2020-02-20,86.28713889577898\r
2020-02-23,87.99924474369661\r
2020-03-11,97.08349366775639\r
2020-03-21,97.03173207746859\r
2020-03-24,89.38163532952267\r
2020-03-26,86.43319972549367\r
2020-04-03,96.56652911930325\r
2020-04-05,85.55877757651943\r
2020-04-08,89.77867983815325\r
2020-04-10,89.23298154112011\r
2020-04-15,93.19084152524086\r
2020-05-18,89.13395109868316\r
2020-05-20,90.42584569111007\r
2020-05-28,92.83650719391956\r
2020-05-30,91.37608916834938\r
2020-06-24,85.31670988442511\r
2020-07-07,95.94808195221667\r
2020-07-09,85.21998350519576\r
2020-07-19,74.43435703750995\r
2020-07-22,72.1117485445931\r
2020-07-24,63.45476884764256\r
2020-07-27,61.80925678734184\r
2020-08-06,46.13851300848159\r
2020-08-08,49.27673477672111\r
2020-08-21,36.528818464211064\r
2020-08-31,33.85358049863426\r
2020-09-02,33.794018715071836\r
2020-09-05,34.78382456919596\r
2020-09-10,33.43780281287814\r
2020-09-12,33.26043701943274\r
2020-09-17,32.32283623423074\r
2020-09-30,30.517972275887573\r
2020-10-30,43.24378906702697\r
2020-11-09,45.89352804733071\r
2020-11-11,46.38418201032862\r
2020-11-14,43.68535196335725\r
2020-11-21,48.23058377445394\r
2020-11-26,47.30265867138549\r
2020-11-29,45.02416306632956\r
2020-12-26,80.22257444775451\r
2021-01-03,96.56652911930325\r
2021-02-14,100.0\r
2021-02-19,95.12672636279252\r
2021-02-24,100.0\r
2021-02-27,100.0\r
2021-03-01,99.7950529814613\r
2021-03-04,97.80967607502589\r
2021-03-21,100.0\r
2021-03-24,89.08445750124288\r
2021-03-29,91.6772484203836\r
2021-03-31,96.20551505099783\r
2021-04-05,90.77532936665914\r
2021-04-08,95.07551457778257\r
2021-04-15,99.42775351378268\r
2021-04-23,96.2570450777729\r
2021-05-03,86.23848073889602\r
2021-05-20,80.73868969653117\r
2021-05-30,83.96777525523979\r
2021-06-07,83.1065542958733\r
2021-06-09,81.5869865602481\r
2021-06-14,91.47641784876163\r
2021-07-02,84.49636942363283\r
2021-07-17,85.12331466268182\r
2021-07-22,77.71407738531475\r
2021-08-11,67.75357392991397\r
2021-08-26,55.80140470757158\r
2021-08-28,51.14509503911492\r
2021-09-05,43.4133425672901\r
2021-09-12,44.129267822335\r
2021-09-17,40.87364286896295\r
2021-10-07,42.23377161192254\r
2021-10-12,40.80789217199096\r
2021-10-20,38.06474031704228\r
2021-10-27,38.89319892408534\r
2021-11-19,38.95731402095562\r
2021-12-14,83.72808016254655\r
2021-12-16,83.29753438483462\r
2021-12-19,84.0637539060818\r
2022-01-13,77.89845922178719\r
2022-01-15,83.68018426098611\r
2022-01-23,96.05101178622294\r
2022-01-25,88.73840592655627\r
2022-02-09,91.02539341250736\r
2022-02-22,100.0\r
2022-03-09,92.3315430309161\r
2022-03-21,97.75771178756749\r
2022-03-24,96.7214665090558\r
2022-03-26,88.14681761702681\r
2022-04-05,90.92532450539048\r
2022-05-08,89.72899880589537\r
2022-05-10,95.02431725394574\r
2022-05-15,77.48392227827587\r
2022-06-17,82.91580407201008\r
2022-07-12,85.8012049426882\r
2022-07-14,83.91980749071264\r
2022-07-17,79.28862867542098\r
2022-08-01,58.9442538412303\r
2022-08-03,53.655079751336785\r
2022-08-11,40.38186542070866\r
2022-08-28,26.991557076953733\r
2022-09-05,19.019027672088818\r
2022-09-10,17.153778822304332\r
2022-09-20,17.849406944688045\r
2022-09-22,17.279178355243072\r
2022-10-02,15.805952218754502\r
2022-10-05,15.62663448992709\r
2022-10-07,16.80108016342071\r
2022-10-17,15.527477032713467\r
2022-10-30,15.468141417915806\r
2022-11-01,16.006452842043874\r
2022-11-06,16.595404595132113\r
2022-11-11,16.066861510887158\r
2022-11-16,16.35034690356835\r
2022-12-04,32.03271806238612\r
2022-12-14,35.45202405408691\r
2022-12-21,2.5703480832660617\r
2023-01-10,50.114815066459414\r
2023-01-18,75.88285591062316\r
2023-02-02,88.63966376729353\r
2023-02-04,84.0637539060818\r
2023-02-09,83.63230273081592\r
2023-02-12,87.90093486237282\r
2023-02-14,90.42584569111007\r
2023-02-17,90.6254640849631\r
2023-02-24,82.24998810392373\r
2023-03-09,90.12685086790444\r
2023-03-16,99.74253814574409\r
2023-04-05,91.62701912516312\r
2023-04-08,88.5409792552787\r
2023-04-10,85.17164189204844\r
2023-04-18,68.48441648714746\r
2023-04-20,86.82332864085379\r
`;export{n as default};

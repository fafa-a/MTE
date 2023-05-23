const n=`date,value\r
2017-01-03,38485.81051459184\r
2017-01-13,38485.81051459184\r
2017-02-25,267612.98410012946\r
2017-03-07,242952.38595142248\r
2017-03-14,270754.21098924393\r
2017-03-17,270754.21098924393\r
2017-03-27,236919.29876202115\r
2017-04-03,277075.2675841322\r
2017-04-06,277075.2675841322\r
2017-04-23,238422.5606674145\r
2017-05-03,238422.5606674145\r
2017-05-16,293910.6593372592\r
2017-05-23,293910.6593372592\r
2017-05-26,294721.03637205384\r
2017-06-02,268397.08067820757\r
2017-06-05,268397.08067820757\r
2017-06-15,285850.21573685494\r
2017-06-22,285850.21573685494\r
2017-06-25,224277.48497888003\r
2017-07-02,238422.5606674145\r
2017-07-05,220605.94587699955\r
2017-07-07,223541.47126321212\r
2017-07-12,223541.47126321212\r
2017-07-17,229453.37094472777\r
2017-07-22,229453.37094472777\r
2017-07-27,229453.37094472777\r
2017-08-04,343046.3186234798\r
2017-08-06,343046.3186234798\r
2017-08-14,280255.00961079577\r
2017-08-19,293101.0681262774\r
2017-08-21,264484.6840739957\r
2017-08-24,281051.93921200273\r
2017-08-26,281849.66510950204\r
2017-08-29,255948.88282159757\r
2017-09-03,262146.9693958305\r
2017-09-20,230196.1719707305\r
2017-09-23,230196.1719707305\r
2017-09-28,230196.1719707305\r
2017-10-05,251334.68119034945\r
2017-10-10,297970.3899733938\r
2017-10-13,255948.88282159757\r
2017-10-15,252869.46400468796\r
2017-10-18,244468.98693146068\r
2017-10-25,237670.51131480318\r
2017-10-28,214776.01122247218\r
2017-10-30,242195.33214017347\r
2017-11-04,242195.33214017347\r
2017-11-07,236168.92379337482\r
2017-11-17,240683.7217161562\r
2017-11-19,128731.77824904444\r
2017-11-22,67079.63017658629\r
2017-11-27,72944.57484504451\r
2017-11-29,48392.537961824244\r
2017-12-07,54531.371621926184\r
2017-12-19,187845.22088878427\r
2017-12-24,196212.1839143516\r
2017-12-27,196212.1839143516\r
2018-02-25,235419.3871955201\r
2018-02-27,235419.3871955201\r
2018-03-14,254407.53317915794\r
2018-03-17,254407.53317915794\r
2018-03-22,300415.6251271533\r
2018-03-29,288260.05921373755\r
2018-04-01,288260.05921373755\r
2018-04-06,241439.1104715999\r
2018-04-16,241439.1104715999\r
2018-04-18,313575.14406933374\r
2018-04-21,315234.0114182216\r
2018-04-23,311092.6263592364\r
2018-04-26,311092.6263592364\r
2018-05-06,271541.532300686\r
2018-05-08,271541.532300686\r
2018-05-11,284247.6139124463\r
2018-05-13,284247.6139124463\r
2018-05-18,274698.855156663\r
2018-05-21,274698.855156663\r
2018-05-23,264484.6840739957\r
2018-05-26,302867.8870365759\r
2018-06-02,272329.65806185803\r
2018-06-20,245228.5325706392\r
2018-06-22,259816.57060974312\r
2018-06-25,232429.64032803668\r
2018-06-27,241439.1104715999\r
2018-07-02,225014.34998134105\r
2018-07-07,227970.30637878377\r
2018-07-10,229453.37094472777\r
2018-07-12,230939.81774680002\r
2018-07-15,259041.40010923563\r
2018-07-17,259041.40010923563\r
2018-07-25,270754.21098924393\r
2018-07-27,262925.39569623384\r
2018-07-30,262925.39569623384\r
2018-08-01,262925.39569623384\r
2018-08-04,269967.6948190721\r
2018-08-06,274698.855156663\r
2018-08-11,256720.78598619183\r
2018-08-16,283447.50312467554\r
2018-08-19,259041.40010923563\r
2018-08-21,236168.92379337482\r
2018-08-26,241439.1104715999\r
2018-09-03,221338.54613476078\r
2018-09-05,221338.54613476078\r
2018-09-08,273118.5875831106\r
2018-09-10,245988.90729324924\r
2018-09-13,245988.90729324924\r
2018-09-18,281051.93921200273\r
2018-09-20,267612.98410012946\r
2018-09-23,249803.19066219387\r
2018-09-25,254407.53317915794\r
2018-09-28,246750.11034006762\r
2018-09-30,246750.11034006762\r
2018-10-05,229453.37094472777\r
2018-10-08,235419.3871955201\r
2018-10-13,216228.33843439005\r
2018-10-18,68045.07167711004\r
2018-10-20,72944.57484504451\r
2018-10-23,55880.12662323871\r
2018-10-25,45841.47876523056\r
2018-10-30,45841.47876523056\r
2018-11-04,38485.81051459184\r
2018-11-14,54531.371621926184\r
2018-11-19,58153.69800477363\r
2018-11-22,50120.09614405528\r
2018-11-29,51868.87649970704\r
2018-12-19,134223.5884378945\r
2018-12-27,134223.5884378945\r
2018-12-29,192710.35648078742\r
2019-01-01,176890.53386713826\r
2019-01-03,200443.59290364728\r
2019-01-06,199029.5931133146\r
2019-01-11,199029.5931133146\r
2019-01-16,199029.5931133146\r
2019-02-12,229453.37094472777\r
2019-02-15,229453.37094472777\r
2019-02-17,192710.35648078742\r
2019-02-20,192710.35648078742\r
2019-02-22,194808.78942040715\r
2019-02-25,180971.36871743714\r
2019-02-27,194808.78942040715\r
2019-03-12,223541.47126321212\r
2019-03-22,225752.06544466966\r
2019-03-24,236919.29876202115\r
2019-03-27,226490.63054549083\r
2019-03-29,233175.81552875758\r
2019-04-01,222072.0010087905\r
2019-04-13,208283.32102616562\r
2019-04-18,276282.32954163867\r
2019-05-01,245988.90729324924\r
2019-05-06,286652.70545416226\r
2019-05-13,236919.29876202115\r
2019-05-16,238422.5606674145\r
2019-05-23,249038.6818666734\r
2019-05-31,282648.1866356725\r
2019-06-02,265265.5447314527\r
2019-06-17,221338.54613476078\r
2019-06-25,221338.54613476078\r
2019-06-27,221338.54613476078\r
2019-06-30,221338.54613476078\r
2019-07-02,221338.54613476078\r
2019-07-05,230939.81774680002\r
2019-07-07,233922.8322706281\r
2019-07-10,232429.64032803668\r
2019-07-15,233922.8322706281\r
2019-07-17,231684.30746704887\r
2019-07-20,231684.30746704887\r
2019-07-22,232429.64032803668\r
2019-07-25,243710.271137161\r
2019-08-04,230196.1719707305\r
2019-08-09,252101.66143292215\r
2019-08-14,217684.10782580788\r
2019-08-16,217684.10782580788\r
2019-08-21,217684.10782580788\r
2019-08-24,238422.5606674145\r
2019-08-26,242195.33214017347\r
2019-08-29,213327.1330618242\r
2019-08-31,214051.14057954264\r
2019-09-03,214776.01122247218\r
2019-09-13,206850.04982401172\r
2019-09-15,211881.71086816452\r
2019-09-18,204706.6845918461\r
2019-09-20,222072.0010087905\r
2019-09-30,241439.1104715999\r
2019-10-03,239175.44603788655\r
2019-10-13,227230.0444629668\r
2019-10-15,227230.0444629668\r
2019-10-25,227230.0444629668\r
2019-11-22,45421.047359746975\r
2019-11-24,45421.047359746975\r
2019-12-02,45421.047359746975\r
2019-12-04,45421.047359746975\r
2019-12-17,227970.30637878377\r
2019-12-22,227970.30637878377\r
2019-12-29,236168.92379337482\r
2020-01-06,150536.3519611004\r
2020-01-11,211881.71086816452\r
2020-01-16,183024.0456051662\r
2020-01-18,183024.0456051662\r
2020-01-21,183024.0456051662\r
2020-02-07,216955.79328544321\r
2020-02-12,216955.79328544321\r
2020-02-15,206850.04982401172\r
2020-02-20,208283.32102616562\r
2020-02-22,206850.04982401172\r
2020-03-13,233175.81552875758\r
2020-03-18,233175.81552875758\r
2020-03-21,277075.2675841322\r
2020-03-23,277075.2675841322\r
2020-03-26,277075.2675841322\r
2020-03-28,237670.51131480318\r
2020-03-31,222072.0010087905\r
2020-04-02,222072.0010087905\r
2020-04-05,230939.81774680002\r
2020-04-07,208283.32102616562\r
2020-04-10,230196.1719707305\r
2020-04-12,230196.1719707305\r
2020-04-15,255948.88282159757\r
2020-05-07,233175.81552875758\r
2020-05-17,233175.81552875758\r
2020-05-20,269967.6948190721\r
2020-05-22,269967.6948190721\r
2020-05-25,297156.8760271964\r
2020-05-27,233175.81552875758\r
2020-05-30,265265.5447314527\r
2020-06-01,265265.5447314527\r
2020-06-26,264484.6840739957\r
2020-06-29,287455.9868315608\r
2020-07-01,287455.9868315608\r
2020-07-04,289064.92194710695\r
2020-07-09,277869.0052880372\r
2020-07-11,277869.0052880372\r
2020-07-14,297156.8760271964\r
2020-07-19,290677.01586167037\r
2020-07-21,266829.69544856844\r
2020-07-24,264484.6840739957\r
2020-07-29,244468.98693146068\r
2020-07-31,231684.30746704887\r
2020-08-05,203993.97751941957\r
2020-08-08,216228.33843439005\r
2020-08-10,211881.71086816452\r
2020-08-15,226490.63054549083\r
2020-08-20,244468.98693146068\r
2020-08-25,231684.30746704887\r
2020-09-04,178926.85563964435\r
2020-09-07,174862.43119283448\r
2020-09-09,174862.43119283448\r
2020-09-12,219143.3125684353\r
2020-09-14,184397.01886810956\r
2020-09-17,197619.12097279786\r
2020-11-06,68045.07167711004\r
2020-11-08,68045.07167711004\r
2020-11-11,78471.04374976603\r
2020-11-18,51868.87649970704\r
2020-11-21,51868.87649970704\r
2020-11-23,52751.157746808174\r
2020-11-28,42516.47560158747\r
2020-12-18,232429.64032803668\r
2020-12-28,232429.64032803668\r
2021-01-10,131162.60979399257\r
2021-02-11,251334.68119034945\r
2021-02-14,251334.68119034945\r
2021-02-19,210439.7516016364\r
2021-02-21,227970.30637878377\r
2021-02-24,200443.59290364728\r
2021-02-26,222806.30966282677\r
2021-03-01,211160.29793225156\r
2021-03-06,203993.97751941957\r
2021-03-21,265265.5447314527\r
2021-03-23,275490.19183904096\r
2021-03-26,275490.19183904096\r
2021-03-28,263704.6341592693\r
2021-03-31,266047.21542465215\r
2021-04-02,259041.40010923563\r
2021-04-05,252101.66143292215\r
2021-04-07,252101.66143292215\r
2021-04-15,239929.16664657654\r
2021-04-17,239929.16664657654\r
2021-04-22,255177.7983088268\r
2021-04-27,251334.68119034945\r
2021-05-27,214776.01122247218\r
2021-05-30,214776.01122247218\r
2021-06-01,216228.33843439005\r
2021-06-09,196212.1839143516\r
2021-06-11,196212.1839143516\r
2021-06-14,225752.06544466966\r
2021-06-16,222806.30966282677\r
2021-06-26,221338.54613476078\r
2021-07-01,244468.98693146068\r
2021-07-11,205420.26626638137\r
2021-07-19,273908.32017667673\r
2021-07-21,195510.04337718905\r
2021-07-29,224277.48497888003\r
2021-08-25,229453.37094472777\r
2021-08-28,229453.37094472777\r
2021-08-30,214776.01122247218\r
2021-09-02,214776.01122247218\r
2021-09-07,167496.83106219297\r
2021-09-22,171500.60118120597\r
2021-09-24,188537.5566281325\r
2021-09-27,188537.5566281325\r
2021-10-02,188537.5566281325\r
2021-10-07,202571.19079644902\r
2021-10-09,202571.19079644902\r
2021-10-12,204706.6845918461\r
2021-10-14,199029.5931133146\r
2021-10-17,199029.5931133146\r
2021-10-19,200443.59290364728\r
2021-10-22,200443.59290364728\r
2021-10-24,188537.5566281325\r
2021-10-27,117993.00552012482\r
2021-11-06,69502.31470636517\r
2021-11-11,35749.43522467751\r
2021-11-18,39280.60642275668\r
2021-11-23,25883.169087591225\r
2021-12-16,111018.61092055886\r
2021-12-18,156984.10696445496\r
2021-12-21,138550.54192452133\r
2021-12-23,160243.53560895508\r
2022-01-12,156984.10696445496\r
2022-01-15,183710.08070430375\r
2022-01-17,156984.10696445496\r
2022-01-22,166169.65424885633\r
2022-01-25,161553.89741560892\r
2022-01-27,153748.33033702723\r
2022-01-30,158936.93514937873\r
2022-02-09,218413.2812033028\r
2022-02-11,203993.97751941957\r
2022-02-19,203993.97751941957\r
2022-03-08,200443.59290364728\r
2022-03-23,201861.1129611532\r
2022-03-26,211881.71086816452\r
2022-04-10,215501.74412753253\r
2022-04-15,251334.68119034945\r
2022-04-17,219874.20107438698\r
2022-04-22,256720.78598619183\r
2022-04-27,223541.47126321212\r
2022-04-30,245228.5325706392\r
2022-05-02,245228.5325706392\r
2022-05-07,247512.14095408443\r
2022-05-10,257493.50707340866\r
2022-05-15,268397.08067820757\r
2022-05-17,259041.40010923563\r
2022-05-27,242195.33214017347\r
2022-05-30,242952.38595142248\r
2022-06-01,235419.3871955201\r
2022-06-04,241439.1104715999\r
2022-06-06,265265.5447314527\r
2022-06-11,261369.35597099148\r
2022-06-14,250568.52401878784\r
2022-06-19,230196.1719707305\r
2022-06-21,230196.1719707305\r
2022-06-29,244468.98693146068\r
2022-07-01,233922.8322706281\r
2022-07-04,237670.51131480318\r
2022-07-06,219874.20107438698\r
2022-07-11,195510.04337718905\r
2022-07-14,215501.74412753253\r
2022-07-16,203282.14595224554\r
2022-07-19,218413.2812033028\r
2022-07-21,201861.1129611532\r
2022-07-24,214776.01122247218\r
2022-07-26,200443.59290364728\r
2022-07-31,198323.91562348267\r
2022-08-03,210439.7516016364\r
2022-08-08,205420.26626638137\r
2022-08-10,210439.7516016364\r
2022-08-13,216228.33843439005\r
2022-08-25,209001.26226729108\r
2022-08-28,236168.92379337482\r
2022-08-30,210439.7516016364\r
2022-09-02,210439.7516016364\r
2022-09-04,224277.48497888003\r
2022-09-12,244468.98693146068\r
2022-09-19,246750.11034006762\r
2022-09-22,233175.81552875758\r
2022-10-04,204706.6845918461\r
2022-10-09,216228.33843439005\r
2022-10-12,216228.33843439005\r
2022-10-19,204706.6845918461\r
2022-10-22,213327.1330618242\r
2022-10-24,214051.14057954264\r
2022-11-11,188537.5566281325\r
2022-11-13,240683.7217161562\r
2022-11-23,225752.06544466966\r
2022-12-06,171500.60118120597\r
2022-12-08,171500.60118120597\r
2022-12-11,208283.32102616562\r
2022-12-13,208283.32102616562\r
2023-02-04,192710.35648078742\r
2023-02-06,200443.59290364728\r
2023-02-09,195510.04337718905\r
2023-02-11,194108.42298724415\r
2023-02-14,186463.24179631\r
2023-02-16,189924.91561218342\r
2023-02-26,189230.78852686213\r
2023-03-06,218413.2812033028\r
2023-03-13,244468.98693146068\r
2023-03-16,239175.44603788655\r
2023-03-28,277075.2675841322\r
2023-04-05,277075.2675841322\r
2023-04-07,277075.2675841322\r
2023-05-02,199736.15251482534\r
`;export{n as default};

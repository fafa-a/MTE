const n=`date,value\r
2017-01-03,38485.81051459184\r
2017-02-25,242952.38595142248\r
2017-03-14,270754.21098924393\r
2017-03-17,205420.26626638137\r
2017-03-27,236168.92379337482\r
2017-04-03,277075.2675841322\r
2017-04-23,238422.5606674145\r
2017-05-16,293910.6593372592\r
2017-05-26,257493.50707340866\r
2017-06-02,239175.44603788655\r
2017-06-15,285850.21573685494\r
2017-06-22,212603.98953515867\r
2017-06-25,208283.32102616562\r
2017-07-05,213327.1330618242\r
2017-07-07,208283.32102616562\r
2017-07-17,229453.37094472777\r
2017-08-04,343046.3186234798\r
2017-08-06,239175.44603788655\r
2017-08-14,271541.532300686\r
2017-08-19,239929.16664657654\r
2017-08-21,250568.52401878784\r
2017-08-24,281051.93921200273\r
2017-08-26,255948.88282159757\r
2017-08-29,261369.35597099148\r
2017-09-20,230196.1719707305\r
2017-10-05,251334.68119034945\r
2017-10-10,296344.14535457746\r
2017-10-15,237670.51131480318\r
2017-10-28,214776.01122247218\r
2017-10-30,214776.01122247218\r
2017-11-17,116820.23978201758\r
2017-11-19,75438.98941798857\r
2017-11-22,40483.48124215773\r
2017-11-27,54531.371621926184\r
2017-12-19,170830.99583129375\r
2018-02-25,235419.3871955201\r
2018-03-14,254407.53317915794\r
2018-03-22,288260.05921373755\r
2018-04-06,241439.1104715999\r
2018-04-18,313575.14406933374\r
2018-04-21,297970.3899733938\r
2018-04-23,275490.19183904096\r
2018-05-06,271541.532300686\r
2018-05-11,254407.53317915794\r
2018-05-18,264484.6840739957\r
2018-05-26,272329.65806185803\r
2018-06-20,245228.5325706392\r
2018-06-22,236168.92379337482\r
2018-06-25,230939.81774680002\r
2018-06-27,212603.98953515867\r
2018-07-02,212603.98953515867\r
2018-07-10,239175.44603788655\r
2018-07-15,262925.39569623384\r
2018-07-25,262925.39569623384\r
2018-08-06,242952.38595142248\r
2018-08-11,254407.53317915794\r
2018-08-19,203993.97751941957\r
2018-08-21,234670.68975747432\r
2018-09-03,221338.54613476078\r
2018-09-08,252101.66143292215\r
2018-09-10,255177.7983088268\r
2018-09-20,249803.19066219387\r
2018-09-28,230939.81774680002\r
2018-10-05,204706.6845918461\r
2018-10-13,68045.07167711004\r
2018-10-20,58612.232011801294\r
2018-10-23,50120.09614405528\r
2018-10-25,38485.81051459184\r
2018-11-14,54531.371621926184\r
2018-11-19,48822.42594303139\r
2018-11-22,45001.981514589825\r
2018-12-19,134223.5884378945\r
2018-12-29,187153.78228498704\r
2019-01-01,176890.53386713826\r
2019-01-03,162868.01151514938\r
2019-02-12,229453.37094472777\r
2019-02-15,176890.53386713826\r
2019-02-17,196212.1839143516\r
2019-02-22,167496.83106219297\r
2019-02-25,179607.45121774278\r
2019-02-27,221338.54613476078\r
2019-03-22,225752.06544466966\r
2019-03-24,221338.54613476078\r
2019-03-27,233175.81552875758\r
2019-03-29,211160.29793225156\r
2019-04-01,198323.91562348267\r
2019-04-13,276282.32954163867\r
2019-05-01,245988.90729324924\r
2019-05-06,277075.2675841322\r
2019-05-13,159589.76464216944\r
2019-05-23,258267.04535611506\r
2019-05-31,279458.87697529193\r
2019-06-02,264484.6840739957\r
2019-06-17,221338.54613476078\r
2019-06-27,183710.08070430375\r
2019-06-30,249803.19066219387\r
2019-07-05,242952.38595142248\r
2019-07-07,209001.26226729108\r
2019-07-10,255948.88282159757\r
2019-07-15,170162.31318072026\r
2019-07-17,242952.38595142248\r
2019-07-22,228711.41547713897\r
2019-07-25,259041.40010923563\r
2019-08-04,196915.21009184667\r
2019-08-14,209720.07275335758\r
2019-08-24,244468.98693146068\r
2019-08-29,197619.12097279786\r
2019-08-31,208283.32102616562\r
2019-09-03,175537.55045644712\r
2019-09-13,208283.32102616562\r
2019-09-15,222806.30966282677\r
2019-09-20,237670.51131480318\r
2019-10-13,227230.0444629668\r
2019-11-22,45421.047359746975\r
2019-12-17,227970.30637878377\r
2019-12-29,216955.79328544321\r
2020-01-06,150536.3519611004\r
2020-01-11,208283.32102616562\r
2020-01-16,184397.01886810956\r
2020-02-07,203993.97751941957\r
2020-02-15,173514.94277087174\r
2020-02-20,201861.1129611532\r
2020-02-22,204706.6845918461\r
2020-03-13,233175.81552875758\r
2020-03-21,274698.855156663\r
2020-03-28,222806.30966282677\r
2020-03-31,183024.0456051662\r
2020-04-05,211881.71086816452\r
2020-04-10,268397.08067820757\r
2020-04-15,264484.6840739957\r
2020-05-07,233175.81552875758\r
2020-05-20,260592.55613664855\r
2020-05-25,268397.08067820757\r
2020-05-27,183710.08070430375\r
2020-05-30,266047.21542465215\r
2020-06-26,264484.6840739957\r
2020-07-04,254407.53317915794\r
2020-07-09,258267.04535611506\r
2020-07-14,304506.62371912756\r
2020-07-19,233922.8322706281\r
2020-07-21,189924.91561218342\r
2020-07-24,316895.95758451853\r
2020-07-29,214776.01122247218\r
2020-07-31,173514.94277087174\r
2020-08-05,166832.77806117883\r
2020-08-08,222072.0010087905\r
2020-08-10,273908.32017667673\r
2020-08-20,230196.1719707305\r
2020-08-25,172171.12816288407\r
2020-09-04,165507.4607210066\r
2020-09-12,240683.7217161562\r
2020-09-14,174862.43119283448\r
2020-09-17,210439.7516016364\r
2020-11-06,68045.07167711004\r
2020-11-11,58612.232011801294\r
2020-11-18,40081.10451185221\r
2020-11-21,37696.751386704746\r
2020-11-23,61389.92707301066\r
2020-12-18,232429.64032803668\r
2021-01-10,131162.60979399257\r
2021-02-11,251334.68119034945\r
2021-02-14,144815.24051787454\r
2021-02-19,224277.48497888003\r
2021-02-21,216228.33843439005\r
2021-02-24,178247.17020412884\r
2021-02-26,218413.2812033028\r
2021-03-01,192710.35648078742\r
2021-03-21,265265.5447314527\r
2021-03-23,236168.92379337482\r
2021-03-28,264484.6840739957\r
2021-03-31,216228.33843439005\r
2021-04-02,274698.855156663\r
2021-04-15,239929.16664657654\r
2021-04-22,251334.68119034945\r
2021-05-27,214776.01122247218\r
2021-06-01,196212.1839143516\r
2021-06-14,225752.06544466966\r
2021-06-16,219874.20107438698\r
2021-06-26,196915.21009184667\r
2021-07-11,203993.97751941957\r
2021-07-19,227970.30637878377\r
2021-07-21,193408.9450241465\r
2021-07-29,240683.7217161562\r
2021-08-25,214776.01122247218\r
2021-08-30,167496.83106219297\r
2021-09-22,171500.60118120597\r
2021-09-24,184397.01886810956\r
2021-10-07,202571.19079644902\r
2021-10-12,199029.5931133146\r
2021-10-14,200443.59290364728\r
2021-10-19,204706.6845918461\r
2021-10-24,116820.23978201758\r
2021-10-27,69502.31470636517\r
2021-11-11,35749.43522467751\r
2021-11-18,25883.169087591225\r
2021-12-16,111018.61092055886\r
2021-12-18,128126.57509722139\r
2021-12-21,155039.79345138677\r
2021-12-23,157634.10516112618\r
2022-01-12,156984.10696445496\r
2022-01-15,139795.6693292011\r
2022-01-17,150536.3519611004\r
2022-01-22,139795.6693292011\r
2022-01-25,170830.99583129375\r
2022-01-27,122725.1276336303\r
2022-01-30,185084.85909971228\r
2022-02-09,176890.53386713826\r
2022-02-11,196915.21009184667\r
2022-03-08,196915.21009184667\r
2022-03-23,201861.1129611532\r
2022-03-26,203282.14595224554\r
2022-04-10,215501.74412753253\r
2022-04-15,229453.37094472777\r
2022-04-17,223541.47126321212\r
2022-04-30,245228.5325706392\r
2022-05-10,297156.8760271964\r
2022-05-15,259041.40010923563\r
2022-05-17,211160.29793225156\r
2022-05-27,242195.33214017347\r
2022-05-30,210439.7516016364\r
2022-06-01,262146.9693958305\r
2022-06-06,291484.2457442595\r
2022-06-11,220605.94587699955\r
2022-06-14,215501.74412753253\r
2022-06-19,242195.33214017347\r
2022-06-29,232429.64032803668\r
2022-07-04,222806.30966282677\r
2022-07-06,194808.78942040715\r
2022-07-11,165507.4607210066\r
2022-07-14,232429.64032803668\r
2022-07-16,183024.0456051662\r
2022-07-19,222072.0010087905\r
2022-07-21,176890.53386713826\r
2022-07-24,217684.10782580788\r
2022-07-26,175537.55045644712\r
2022-07-31,199029.5931133146\r
2022-08-03,211881.71086816452\r
2022-08-08,206134.72164284662\r
2022-08-10,200443.59290364728\r
2022-08-13,196212.1839143516\r
2022-08-25,209001.26226729108\r
2022-08-28,236168.92379337482\r
2022-08-30,184397.01886810956\r
2022-09-04,219143.3125684353\r
2022-09-12,239929.16664657654\r
2022-09-19,226490.63054549083\r
2022-09-22,233922.8322706281\r
2022-10-04,204706.6845918461\r
2022-10-09,204706.6845918461\r
2022-10-22,213327.1330618242\r
2022-10-24,201861.1129611532\r
2022-11-11,188537.5566281325\r
2022-11-13,225752.06544466966\r
2022-12-06,171500.60118120597\r
2022-12-11,191315.85146822347\r
2023-02-04,192710.35648078742\r
2023-02-06,190619.93691466688\r
2023-02-11,183024.0456051662\r
2023-02-14,170162.31318072026\r
2023-02-16,189230.78852686213\r
2023-03-06,218413.2812033028\r
2023-03-13,242195.33214017347\r
2023-03-16,255177.7983088268\r
2023-03-28,277075.2675841322\r
2023-04-05,172842.57571268515\r
2023-05-02,199736.15251482534\r
`;export{n as default};
const r=`date,value\r
2017-01-26,33.28997453268489\r
2017-01-29,37.14061443381063\r
2017-02-15,57.38221198630006\r
2017-02-18,58.59427578528481\r
2017-02-25,59.27207065884055\r
2017-03-10,69.08920221229937\r
2017-03-30,73.18507656438989\r
2017-04-06,83.99455933731865\r
2017-04-09,80.27331949152028\r
2017-04-19,73.7779792364255\r
2017-04-29,90.02532242607515\r
2017-05-09,88.10259714073744\r
2017-05-16,76.92240316909793\r
2017-05-26,91.31646113512979\r
2017-06-18,92.28969477133093\r
2017-07-05,96.55515682086553\r
2017-07-18,95.3990927657627\r
2017-08-02,85.88070742968125\r
2017-08-12,82.74656417473778\r
2017-08-14,88.58170235542566\r
2017-08-22,74.67096126077811\r
2017-09-01,80.73473694322243\r
2017-09-03,86.51318758992302\r
2017-09-06,27.88857204508946\r
2017-09-21,77.52735426166763\r
2017-10-08,77.67889171922904\r
2017-10-11,76.16891481935482\r
2017-10-13,77.22463887859003\r
2017-10-16,73.7779792364255\r
2017-10-23,77.52735426166763\r
2017-10-26,75.11908218276866\r
2017-10-31,75.56828806169626\r
2017-11-07,76.01857766759737\r
2017-11-17,73.18507656438989\r
2017-11-20,76.16891481935482\r
2017-11-22,78.28623895187566\r
2017-11-30,74.9695879304293\r
2017-12-05,72.15216298240698\r
2017-12-12,74.82021427450971\r
2017-12-20,76.46994977624422\r
2017-12-25,73.18507656438989\r
2018-01-09,95.56389949914973\r
2018-01-24,100.0\r
2018-02-10,99.88918415777877\r
2018-02-15,100.0\r
2018-03-02,91.96481946131243\r
2018-03-15,91.80255578454577\r
2018-03-22,98.71706394994288\r
2018-03-30,67.50632335766423\r
2018-04-06,80.88878063513623\r
2018-04-19,88.74163780435916\r
2018-04-21,97.88326785844987\r
2018-05-06,80.58081215985126\r
2018-05-11,100.0\r
2018-05-21,100.0\r
2018-05-24,83.36961628148927\r
2018-06-20,96.05901047443989\r
2018-06-23,86.6716011196574\r
2018-06-25,90.3474090742993\r
2018-07-13,81.97041230416279\r
2018-07-23,84.30773913153108\r
2018-07-25,85.4075811145432\r
2018-08-02,79.3536997956291\r
2018-08-04,75.11908218276866\r
2018-08-12,69.37859258561667\r
2018-08-19,68.22397230130397\r
2018-08-22,59.95301826609023\r
2018-08-27,53.67726320280851\r
2018-09-01,45.34524602865076\r
2018-09-03,39.417017265511255\r
2018-09-08,42.814478063019536\r
2018-09-11,38.95735590357634\r
2018-09-16,39.53227351186854\r
2018-09-23,38.04459446985387\r
2018-09-26,37.02823636863305\r
2018-10-03,37.253130336551315\r
2018-10-23,36.02304965102951\r
2018-11-15,38.04459446985387\r
2018-11-22,40.92595143072801\r
2018-12-27,42.57652798390332\r
2019-01-16,52.12019575703559\r
2019-02-13,66.64920505162219\r
2019-02-15,84.30773913153108\r
2019-02-20,86.19671263618127\r
2019-02-23,84.30773913153108\r
2019-02-25,83.21367587310472\r
2019-03-20,76.31937220394741\r
2019-03-22,77.52735426166763\r
2019-03-27,84.1510902471017\r
2019-03-30,76.01857766759737\r
2019-05-01,72.8893519448763\r
2019-05-06,76.62064749118424\r
2019-05-14,85.4075811145432\r
2019-06-08,81.97041230416279\r
2019-06-13,74.67096126077811\r
2019-06-28,91.64040814522852\r
2019-07-05,82.12540571766934\r
2019-07-15,89.54306607664245\r
2019-07-23,81.1972245721959\r
2019-07-25,79.3536997956291\r
2019-08-04,79.96630297635933\r
2019-08-09,76.46994977624422\r
2019-08-14,75.71826424346173\r
2019-08-17,71.71130697108818\r
2019-08-22,73.33312062309852\r
2019-08-24,79.20084714003937\r
2019-08-29,75.86836079387595\r
2019-09-11,62.708200055304445\r
2019-09-13,66.36448502336214\r
2019-09-16,64.38529126509519\r
2019-10-08,58.05431449351908\r
2019-10-11,50.32714503170917\r
2019-10-13,56.180426251723645\r
2019-12-05,87.46542766520221\r
2019-12-10,79.20084714003937\r
2019-12-15,64.6665468363143\r
2019-12-25,80.73473694322243\r
2019-12-30,79.65976296162684\r
2020-01-09,83.83814644397793\r
2020-01-11,83.99455933731865\r
2020-01-14,84.93551358192349\r
2020-01-19,82.43574807058258\r
2020-01-31,94.41267272856406\r
2020-02-05,84.93551358192349\r
2020-02-15,78.89549990252398\r
2020-02-20,81.97041230416279\r
2020-03-21,95.3990927657627\r
2020-03-24,89.54306607664245\r
2020-03-26,86.83013196349732\r
2020-04-03,92.45230632678617\r
2020-04-05,88.74163780435916\r
2020-04-08,90.99297874393508\r
2020-04-10,96.38965972684785\r
2020-05-05,94.24867313756367\r
2020-05-18,86.19671263618127\r
2020-05-20,91.47837658239396\r
2020-05-25,86.6716011196574\r
2020-05-28,93.75736726778334\r
2020-05-30,91.64040814522852\r
2020-06-12,80.73473694322243\r
2020-06-24,84.62139065744951\r
2020-07-07,94.90536387022503\r
2020-07-19,71.56459814467826\r
2020-07-22,68.6560354133486\r
2020-07-24,58.729582210705026\r
2020-07-27,60.774307370868016\r
2020-08-06,41.512408845407585\r
2020-08-18,39.07206654847064\r
2020-09-02,31.481647682130088\r
2020-09-12,23.718831574939873\r
2020-09-17,27.588831996063977\r
2020-09-30,24.759435101916385\r
2020-10-30,66.79175007971631\r
2020-11-11,77.07346104229707\r
2020-11-14,71.27154554215664\r
2020-11-21,73.7779792364255\r
2020-11-26,72.44667446112335\r
2020-11-29,62.43042911153703\r
2020-12-26,80.27331949152028\r
2021-01-03,93.10391097979311\r
2021-01-18,87.94312924721666\r
2021-02-17,49.31398217816777\r
2021-02-19,83.99455933731865\r
2021-02-24,98.3832019189096\r
2021-02-27,96.72076884338804\r
2021-03-01,98.3832019189096\r
2021-03-04,100.0\r
2021-03-21,88.10259714073744\r
2021-03-24,83.52567487411388\r
2021-03-29,89.3825470849903\r
2021-03-31,91.80255578454577\r
2021-04-03,91.47837658239396\r
2021-04-08,92.94083612928468\r
2021-04-15,100.0\r
2021-04-23,96.2242775988506\r
2021-05-03,84.46450594887172\r
2021-05-28,85.25010757277165\r
2021-06-09,82.9021497775323\r
2021-06-14,91.96481946131243\r
2021-07-22,78.7430054083358\r
2021-08-11,79.96630297635933\r
2021-08-23,59.40800818149585\r
2021-08-26,53.54679934924271\r
2021-08-31,43.0529647800518\r
2021-09-05,34.15505202711273\r
2021-09-12,36.35686703110519\r
2021-10-07,37.14061443381063\r
2021-10-12,35.46946126279449\r
2021-10-15,34.04642626091457\r
2021-10-17,32.00926093506558\r
2021-10-27,32.967890283661546\r
2021-11-09,36.13418357820567\r
2021-11-11,36.691929994319956\r
2021-11-19,36.245456065240376\r
2021-12-14,83.52567487411388\r
2021-12-19,81.97041230416279\r
2022-01-13,77.67889171922904\r
2022-01-15,77.37593663326216\r
2022-01-23,86.6716011196574\r
2022-01-25,83.99455933731865\r
2022-02-09,86.03865129402614\r
2022-02-22,99.72139555517435\r
2022-03-21,89.54306607664245\r
2022-04-05,86.98878008066347\r
2022-05-08,87.3064279721494\r
2022-05-10,87.62454446904707\r
2022-05-28,84.77839321565106\r
2022-06-17,75.26869698583124\r
2022-06-24,84.77839321565106\r
2022-07-02,81.66078121607029\r
2022-07-07,74.9695879304293\r
2022-07-12,81.1972245721959\r
2022-07-14,79.04811382772584\r
2022-07-17,75.11908218276866\r
2022-07-24,59.27207065884055\r
2022-08-01,52.50772206512605\r
2022-08-06,30.229906231523213\r
2022-08-11,23.438176732904275\r
2022-08-28,17.034104358049113\r
2022-09-05,12.696556543738662\r
2022-09-10,12.334607749470436\r
2022-09-20,12.478878584564162\r
2022-09-22,12.696556543738662\r
2022-10-07,12.989159892124949\r
2022-10-15,13.507689740842846\r
2022-10-22,10.998167666875029\r
2022-11-01,13.284456606274658\r
2022-11-06,12.048107579882277\r
2022-11-16,11.835024771843425\r
2022-12-04,36.245456065240376\r
2022-12-11,34.15505202711273\r
2022-12-21,45.34524602865076\r
2023-01-03,46.94127986545438\r
2023-01-10,55.51722388636301\r
2023-02-02,81.50614362688245\r
2023-02-04,81.1972245721959\r
2023-02-09,78.7430054083358\r
2023-02-12,80.27331949152028\r
2023-02-17,82.28051765398958\r
2023-02-24,66.22231012368293\r
2023-03-01,89.3825470849903\r
2023-04-05,84.93551358192349\r
2023-04-18,69.95884159803755\r
`;export{r as default};

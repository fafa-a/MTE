const r=`date,value\r
2017-02-19,83.24338272862886\r
2017-03-01,77.70086643147626\r
2017-03-11,80.45661975232032\r
2017-04-10,85.49487250731077\r
2017-04-20,84.36668781922883\r
2017-06-09,79.35057623517112\r
2017-06-19,86.06078760864496\r
2017-07-04,81.0115035287766\r
2017-07-14,76.06245698687889\r
2017-07-24,76.06245698687889\r
2017-07-29,69.09536960545384\r
2017-08-03,60.31950624559978\r
2017-08-13,57.81298211576765\r
2017-08-18,76.06245698687889\r
2017-09-02,64.40108918604392\r
2017-09-07,76.06245698687889\r
2017-09-12,46.27610541942185\r
2017-09-17,76.60733268348038\r
2017-09-27,84.36668781922883\r
2017-10-07,72.28392670774892\r
2017-10-12,71.2158871761062\r
2017-10-17,78.79942252389338\r
2017-10-22,60.31950624559978\r
2017-10-27,64.91736140687493\r
2017-11-16,64.40108918604392\r
2017-11-21,55.83280549457881\r
2017-11-26,62.34944755887106\r
2017-12-16,64.40108918604392\r
2017-12-21,59.312751966847664\r
2018-01-05,68.56850224917576\r
2018-01-20,75.5188462799109\r
2018-02-04,63.372571321241026\r
2018-02-09,54.851158218486596\r
2018-02-14,64.40108918604392\r
2018-03-16,78.24951823300623\r
2018-03-26,86.06078760864496\r
2018-04-05,100.0\r
2018-04-15,54.3624601136271\r
2018-04-20,66.99578516794298\r
2018-04-25,90.05595866707623\r
2018-05-25,78.24951823300623\r
2018-06-09,83.80442389618113\r
2018-06-14,89.48162139631054\r
2018-07-04,78.24951823300623\r
2018-07-09,77.15347021044192\r
2018-07-14,91.20820751746798\r
2018-07-19,78.79942252389338\r
2018-07-24,93.52692863169827\r
2018-07-29,78.79942252389338\r
2018-08-13,88.90847912322282\r
2018-08-28,77.15347021044192\r
2018-09-02,86.62791413763861\r
2018-09-07,68.56850224917576\r
2018-09-12,88.90847912322282\r
2018-09-17,70.68380747874382\r
2018-09-27,87.19624931001697\r
2018-10-02,78.79942252389338\r
2018-11-26,59.81544106328715\r
2018-12-06,50.50448435747627\r
2018-12-11,52.42194233414826\r
2019-01-05,41.27413421634933\r
2019-01-10,24.750508650744933\r
2019-01-15,27.051448871585134\r
2019-01-25,14.944842301249968\r
2019-01-30,70.15302569222182\r
2019-02-04,38.1893209614671\r
2019-02-14,27.8330657721937\r
2019-03-01,33.919911311040295\r
2019-03-11,37.75502425897179\r
2019-03-16,30.220815788786247\r
2019-03-21,34.760589362537175\r
2019-03-31,7.6750935561841285\r
2019-04-05,31.438401240956953\r
2019-04-15,46.27610541942185\r
2019-04-30,31.0308049656974\r
2019-05-10,54.3624601136271\r
2019-06-04,69.09536960545384\r
2019-06-19,63.88615789868236\r
2019-06-29,55.83280549457881\r
2019-07-04,63.88615789868236\r
2019-07-19,52.42194233414826\r
2019-07-29,43.524710118034534\r
2019-08-03,36.89128776656977\r
2019-08-08,57.315838465487886\r
2019-08-18,50.50448435747627\r
2019-08-23,47.20533877529354\r
2019-09-02,19.99975314235611\r
2019-09-07,59.81544106328715\r
2019-09-12,44.8935603102027\r
2019-09-17,39.062738951664905\r
2019-09-27,33.919911311040295\r
2019-10-02,37.75502425897179\r
2019-10-07,39.062738951664905\r
2019-11-06,14.307736868513143\r
2019-11-16,12.755040624132832\r
2019-12-06,18.262038208025242\r
2019-12-21,2.7492793010925274\r
2020-01-05,13.060927449669851\r
2020-02-04,16.245765935245633\r
2020-02-09,57.315838465487886\r
2020-02-14,13.992582482237134\r
2020-02-24,23.998420875828682\r
2020-03-20,24.750508650744933\r
2020-04-04,19.648119313090323\r
2020-04-09,29.01896220178225\r
2020-04-14,22.88452775870796\r
2020-04-29,76.60733268348038\r
2020-05-04,33.08594780738384\r
2020-05-19,92.36520447951015\r
2020-05-24,38.1893209614671\r
2020-06-23,81.0115035287766\r
2020-06-28,78.79942252389338\r
2020-07-03,63.88615789868236\r
2020-07-08,69.09536960545384\r
2020-07-23,86.06078760864496\r
2020-08-02,50.50448435747627\r
2020-08-07,64.91736140687493\r
2020-08-22,25.89267505920886\r
2020-08-27,52.42194233414826\r
2020-09-01,41.721138626741244\r
2020-09-06,22.151548450589615\r
2020-09-16,32.25875766738304\r
2020-09-26,45.813744420697\r
2020-10-11,61.83991808509928\r
2020-10-31,59.312751966847664\r
2020-11-05,36.0340711613453\r
2020-11-20,28.22657726542337\r
2020-11-30,66.99578516794298\r
2020-12-30,47.20533877529354\r
2021-01-14,64.40108918604392\r
2021-01-19,76.06245698687889\r
2021-01-24,57.315838465487886\r
2021-02-23,68.56850224917576\r
2021-02-28,70.15302569222182\r
2021-03-10,78.24951823300623\r
2021-03-15,68.56850224917576\r
2021-03-30,86.62791413763861\r
2021-05-04,85.49487250731077\r
2021-05-14,90.63148826011188\r
2021-05-19,75.5188462799109\r
2021-06-03,95.27833323283376\r
2021-06-13,76.60733268348038\r
2021-07-03,92.36520447951015\r
2021-07-18,100.0\r
2021-07-28,91.78611379846544\r
2021-08-02,86.06078760864496\r
2021-08-17,83.80442389618113\r
2021-08-22,91.78611379846544\r
2021-08-27,79.90297631978216\r
2021-09-01,74.97650374511682\r
2021-09-11,89.48162139631054\r
2021-10-01,86.06078760864496\r
2021-10-06,74.97650374511682\r
2021-10-11,79.35057623517112\r
2021-10-16,78.79942252389338\r
2021-11-05,60.31950624559978\r
2021-11-20,54.3624601136271\r
2021-11-30,71.2158871761062\r
2021-12-05,71.2158871761062\r
2021-12-20,59.312751966847664\r
2022-01-09,79.35057623517112\r
2022-01-14,50.50448435747627\r
2022-01-24,71.74926137890225\r
2022-01-29,63.372571321241026\r
2022-02-08,48.6103892285256\r
2022-02-18,64.40108918604392\r
2022-02-23,76.06245698687889\r
2022-03-25,94.69335932011252\r
2022-04-09,99.40574341245822\r
2022-04-19,92.36520447951015\r
2022-05-09,91.20820751746798\r
2022-05-14,86.62791413763861\r
2022-05-29,89.48162139631054\r
2022-06-13,74.43543258858948\r
2022-06-18,77.15347021044192\r
2022-06-28,84.93017163677007\r
2022-07-03,84.36668781922883\r
2022-07-08,80.45661975232032\r
2022-07-23,100.0\r
2022-08-02,79.90297631978216\r
2022-08-07,83.24338272862886\r
2022-08-12,76.60733268348038\r
2022-08-22,85.49487250731077\r
2022-08-27,72.81987980895855\r
2022-09-11,71.74926137890225\r
2022-09-16,62.86033326147395\r
2022-09-26,77.15347021044192\r
2022-10-16,57.81298211576765\r
2022-10-26,69.09536960545384\r
2022-11-05,57.315838465487886\r
2022-11-20,48.6103892285256\r
2022-11-25,70.68380747874382\r
2022-11-30,41.721138626741244\r
2022-12-05,63.372571321241026\r
2022-12-10,60.31950624559978\r
2022-12-25,36.0340711613453\r
2023-01-04,47.67220068300475\r
2023-01-09,55.83280549457881\r
2023-01-19,56.820091633927184\r
2023-01-29,58.81144303077052\r
2023-02-03,66.99578516794298\r
2023-02-08,51.46031220159381\r
2023-02-13,61.33174874445216\r
2023-02-18,81.5676246662894\r
2023-03-05,84.36668781922883\r
2023-03-30,71.74926137890225\r
2023-04-24,81.5676246662894\r
2023-05-24,83.80442389618113\r
2023-06-13,100.0\r
2023-06-18,100.0\r
2023-06-23,90.63148826011188\r
2023-06-28,100.0\r
2023-07-03,89.48162139631054\r
2023-07-08,87.76579036015487\r
`;export{r as default};

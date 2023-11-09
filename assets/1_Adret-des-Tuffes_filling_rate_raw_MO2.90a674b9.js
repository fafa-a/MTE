const r=`date,value\r
2017-07-04,93.45756835759894\r
2017-07-06,93.45756835759894\r
2017-07-14,96.40183977478472\r
2017-08-18,86.03214979274784\r
2017-08-20,86.03214979274784\r
2017-08-23,100.0\r
2017-08-25,100.0\r
2017-08-30,92.8746149776142\r
2017-09-22,100.0\r
2017-09-24,100.0\r
2017-09-27,100.0\r
2017-09-29,90.56243937333733\r
2017-10-02,90.56243937333733\r
2017-10-07,72.16933352225347\r
2017-10-09,72.16933352225347\r
2017-10-12,79.47093035723049\r
2017-10-14,79.47093035723049\r
2017-10-17,70.15264897302112\r
2017-10-19,78.40461677979795\r
2017-10-22,78.40461677979795\r
2017-10-24,65.24536021095854\r
2017-10-27,65.24536021095854\r
2017-11-16,54.24570775460287\r
2017-11-18,54.24570775460287\r
2017-11-21,62.86347175055562\r
2017-11-23,62.86347175055562\r
2017-11-26,62.86347175055562\r
2017-11-28,29.856476703747916\r
2017-12-01,29.856476703747916\r
2018-06-19,42.78341646869877\r
2018-06-21,42.78341646869877\r
2018-06-24,42.78341646869877\r
2018-06-26,42.78341646869877\r
2018-06-29,42.78341646869877\r
2018-07-09,78.93680350181866\r
2018-07-11,78.93680350181866\r
2018-07-14,78.93680350181866\r
2018-07-19,78.93680350181866\r
2018-07-29,81.62685936797682\r
2018-07-31,81.62685936797682\r
2018-08-03,81.62685936797682\r
2018-08-05,81.62685936797682\r
2018-08-08,81.62685936797682\r
2018-08-28,75.25218209095908\r
2018-08-30,75.25218209095908\r
2018-09-02,100.0\r
2018-09-04,100.0\r
2018-09-07,100.0\r
2018-09-09,92.8746149776142\r
2018-09-12,92.8746149776142\r
2018-09-14,58.2425185275864\r
2018-09-17,92.29362634607914\r
2018-09-19,92.29362634607914\r
2018-09-22,92.29362634607914\r
2018-09-24,74.21684516351296\r
2018-09-27,87.15298388013355\r
2018-09-29,58.2425185275864\r
2018-10-02,58.2425185275864\r
2018-10-04,58.2425185275864\r
2018-10-07,58.2425185275864\r
2018-10-17,67.67504072419212\r
2018-10-19,67.67504072419212\r
2018-10-22,75.25218209095908\r
2018-10-24,75.25218209095908\r
2018-10-27,75.25218209095908\r
2018-11-01,59.15151344829898\r
2018-11-03,54.68224423723934\r
2018-11-11,54.68224423723934\r
2018-11-16,82.17070205898096\r
2018-11-18,82.17070205898096\r
2019-06-29,43.55372126617327\r
2019-07-01,43.55372126617327\r
2019-07-04,46.709150282812175\r
2019-07-06,46.709150282812175\r
2019-07-09,70.65393375851934\r
2019-07-14,66.69742474624844\r
2019-07-16,75.25218209095908\r
2019-07-19,76.29525083877742\r
2019-07-21,75.77274947024286\r
2019-07-24,78.93680350181866\r
2019-07-26,73.70207354016497\r
2019-07-29,81.62685936797682\r
2019-07-31,81.0849618579225\r
2019-08-03,87.15298388013355\r
2019-08-05,80.00699836075205\r
2019-08-08,89.4181208836332\r
2019-08-10,79.47093035723049\r
2019-08-15,96.40183977478472\r
2019-08-18,96.40183977478472\r
2019-08-23,78.93680350181866\r
2019-09-12,49.153923528573465\r
2019-09-14,49.153923528573465\r
2019-09-17,49.153923528573465\r
2019-09-19,49.153923528573465\r
2019-09-22,49.153923528573465\r
2019-09-27,71.15714207321105\r
2019-09-29,59.15151344829898\r
2019-10-02,59.15151344829898\r
2019-10-04,59.15151344829898\r
2019-10-07,59.15151344829898\r
2019-11-16,45.90914133739855\r
2019-11-18,45.90914133739855\r
2019-11-21,45.90914133739855\r
2019-11-23,45.90914133739855\r
2019-11-26,45.90914133739855\r
2019-11-28,45.90914133739855\r
2020-05-26,17.92148555575935\r
2020-05-29,17.92148555575935\r
2020-05-31,17.92148555575935\r
2020-06-03,17.92148555575935\r
2020-06-05,17.209710650656625\r
2020-07-08,73.18923175566417\r
2020-07-10,73.18923175566417\r
2020-07-13,73.18923175566417\r
2020-07-18,73.18923175566417\r
2020-07-20,73.18923175566417\r
2020-07-23,80.00699836075205\r
2020-07-25,77.34605966387494\r
2020-07-28,77.34605966387494\r
2020-07-30,77.34605966387494\r
2020-08-02,77.34605966387494\r
2020-08-04,77.34605966387494\r
2020-08-07,84.36554462989486\r
2020-08-09,73.18923175566417\r
2020-08-12,87.15298388013355\r
2020-08-14,87.15298388013355\r
2020-08-19,87.15298388013355\r
2020-08-22,87.15298388013355\r
2020-08-24,82.17070205898096\r
2020-08-27,91.13753950313642\r
2020-09-01,69.15584574017598\r
2020-09-03,69.15584574017598\r
2020-09-06,69.15584574017598\r
2020-09-08,69.15584574017598\r
2020-09-11,69.15584574017598\r
2020-11-05,78.40461677979795\r
2020-11-07,78.40461677979795\r
2020-11-10,82.17070205898096\r
2020-11-12,82.17070205898096\r
2020-11-15,77.34605966387494\r
2020-11-17,77.34605966387494\r
2020-11-20,77.34605966387494\r
2020-11-22,74.73354766745376\r
2020-11-25,76.81968722730926\r
2020-11-27,73.70207354016497\r
2020-11-30,74.21684516351296\r
2020-12-02,57.7908640366522\r
2020-12-07,79.47093035723049\r
2020-12-10,56.89323527632716\r
2020-12-15,57.7908640366522\r
2021-06-13,4.314723898763001\r
2021-06-15,4.314723898763001\r
2021-06-18,4.314723898763001\r
2021-07-18,77.87436917381669\r
2021-07-20,77.87436917381669\r
2021-07-23,77.87436917381669\r
2021-08-17,7.742249294022642\r
2021-08-19,7.742249294022642\r
2021-08-27,63.81050085180545\r
2021-08-29,63.81050085180545\r
2021-09-01,70.65393375851934\r
2021-09-06,70.65393375851934\r
2021-09-11,47.51661036827025\r
2021-09-21,39.408477617514414\r
2021-09-23,39.408477617514414\r
2021-09-28,39.408477617514414\r
2021-10-01,39.77609968037983\r
2021-10-06,5.010907932106509\r
2021-10-08,5.010907932106509\r
2021-10-11,42.40103993564546\r
2021-10-13,40.14556146674701\r
2021-10-16,53.811055788493\r
2021-10-18,53.811055788493\r
2021-10-21,47.51661036827025\r
2021-10-23,70.15264897302112\r
2021-10-26,70.15264897302112\r
2021-10-28,65.24536021095854\r
2021-10-31,76.29525083877742\r
2021-11-02,64.28687744301062\r
2021-11-05,76.29525083877742\r
2021-11-07,76.29525083877742\r
2021-11-12,60.99227884862264\r
2021-11-15,60.99227884862264\r
2021-11-20,74.21684516351296\r
2021-11-27,74.21684516351296\r
2021-11-30,74.21684516351296\r
2022-05-29,6.296851702515779\r
2022-06-18,62.86347175055562\r
2022-06-20,62.86347175055562\r
2022-06-23,62.86347175055562\r
2022-06-25,62.86347175055562\r
2022-07-08,78.40461677979795\r
2022-07-10,78.40461677979795\r
2022-07-13,82.71649093270962\r
2022-07-15,84.36554462989486\r
2022-07-18,77.87436917381669\r
2022-07-20,84.36554462989486\r
2022-07-25,76.81968722730926\r
2022-07-28,76.81968722730926\r
2022-08-02,72.6783187654746\r
2022-08-04,72.6783187654746\r
2022-08-07,72.6783187654746\r
2022-08-09,72.6783187654746\r
2022-08-12,75.25218209095908\r
2022-08-22,40.8900094825743\r
2022-09-06,63.33603265566148\r
2022-09-08,63.33603265566148\r
2022-09-11,52.947400701675186\r
2022-09-13,56.89323527632716\r
2022-09-16,56.89323527632716\r
2022-09-18,29.856476703747916\r
2022-09-21,34.796196634788906\r
2022-09-23,14.9489081007144\r
2022-09-26,14.9489081007144\r
2022-10-01,14.9489081007144\r
2022-10-06,19.642906925791443\r
2022-10-11,19.642906925791443\r
2022-10-16,13.882573106112691\r
2022-10-18,35.14002453938078\r
2022-10-26,57.3411033351933\r
2022-10-28,53.811055788493\r
2022-10-31,67.18527471718554\r
2022-11-05,54.68224423723934\r
2022-11-10,66.69742474624844\r
2022-11-12,73.18923175566417\r
2022-11-17,73.18923175566417\r
2022-11-20,76.29525083877742\r
2022-11-22,65.24536021095854\r
2022-11-25,69.65328665508636\r
2022-11-27,69.65328665508636\r
2022-11-30,49.153923528573465\r
2022-12-02,52.947400701675186\r
2023-06-28,45.116573557904566\r
2023-07-03,62.392817029293234\r
2023-07-08,62.392817029293234\r
2023-07-10,62.392817029293234\r
2023-07-13,62.392817029293234\r
2023-08-22,58.2425185275864\r
2023-08-24,58.2425185275864\r
2023-08-27,58.2425185275864\r
2023-08-29,58.2425185275864\r
2023-09-01,61.45722169354142\r
2023-09-06,53.37828716377522\r
2023-09-08,53.37828716377522\r
2023-09-11,60.06809720425703\r
2023-09-26,46.709150282812175\r
2023-09-28,46.709150282812175\r
2023-10-01,51.66602244821613\r
2023-10-03,51.66602244821613\r
2023-10-06,48.74179304114078\r
2023-10-08,65.727468580068\r
2023-10-11,48.33153150225974\r
2023-10-13,66.21148972901115\r
2023-10-16,46.709150282812175\r
`;export{r as default};

const n=`date,value\r
2017-02-15,10194.391814793582\r
2017-02-25,8405.41096952657\r
2017-03-17,6413.223307523907\r
2017-03-27,7721.963955058735\r
2017-04-03,6413.223307523907\r
2017-04-23,8754.151066267246\r
2017-05-16,31127.504453188165\r
2017-05-26,6413.223307523907\r
2017-06-15,5789.211381392437\r
2017-06-22,7721.963955058735\r
2017-06-25,5789.211381392437\r
2017-07-05,4047.825186459305\r
2017-07-07,3256.5280894446655\r
2017-07-17,8754.151066267246\r
2017-08-14,6732.946276080457\r
2017-08-21,8405.41096952657\r
2017-08-26,8754.151066267246\r
2017-08-29,5789.211381392437\r
2017-10-05,8405.41096952657\r
2017-10-13,9107.480755775556\r
2017-10-15,9827.660292359791\r
2017-10-18,7387.3964817672395\r
2017-11-04,6413.223307523907\r
2017-11-17,7721.963955058735\r
2017-11-22,8061.3258620205825\r
2018-02-27,6732.946276080457\r
2018-03-14,9107.480755775556\r
2018-03-19,7721.963955058735\r
2018-04-18,7057.69792597457\r
2018-04-21,7057.69792597457\r
2018-05-06,6732.946276080457\r
2018-05-11,9465.337268740544\r
2018-05-26,5186.4050737363805\r
2018-06-20,6098.614898126179\r
2018-06-22,8405.41096952657\r
2018-06-25,45279.98502999738\r
2018-06-27,8061.3258620205825\r
2018-07-12,7387.3964817672395\r
2018-07-27,8061.3258620205825\r
2018-08-06,7057.69792597457\r
2018-08-19,6098.614898126179\r
2018-09-03,4323.795472711571\r
2018-09-08,6098.614898126179\r
2018-09-10,8061.3258620205825\r
2018-09-18,7057.69792597457\r
2018-09-25,9465.337268740544\r
2018-10-05,7721.963955058735\r
2018-10-13,6732.946276080457\r
2018-10-18,7721.963955058735\r
2018-10-20,9465.337268740544\r
2018-10-23,6098.614898126179\r
2018-11-09,9827.660292359791\r
2018-11-14,5789.211381392437\r
2018-11-22,10565.475983046214\r
2018-11-24,13684.760645049655\r
2018-12-07,11320.488869085228\r
2019-02-05,9827.660292359791\r
2019-02-15,5789.211381392437\r
2019-02-17,8754.151066267246\r
2019-02-20,10565.475983046214\r
2019-02-22,8405.41096952657\r
2019-02-25,5485.107943850306\r
2019-02-27,9827.660292359791\r
2019-03-22,8405.41096952657\r
2019-03-29,7721.963955058735\r
2019-05-01,9827.660292359791\r
2019-05-13,8754.151066267246\r
2019-05-16,7387.3964817672395\r
2019-05-23,9465.337268740544\r
2019-05-31,8405.41096952657\r
2019-06-02,7387.3964817672395\r
2019-06-27,7721.963955058735\r
2019-06-30,8405.41096952657\r
2019-07-02,9107.480755775556\r
2019-07-05,8754.151066267246\r
2019-07-10,8061.3258620205825\r
2019-07-15,10565.475983046214\r
2019-07-17,8754.151066267246\r
2019-07-22,8754.151066267246\r
2019-07-25,7721.963955058735\r
2019-08-04,8754.151066267246\r
2019-08-14,7387.3964817672395\r
2019-08-24,6732.946276080457\r
2019-08-26,8405.41096952657\r
2019-09-03,6732.946276080457\r
2019-09-13,6413.223307523907\r
2019-09-15,6732.946276080457\r
2019-09-20,7387.3964817672395\r
2019-10-03,5485.107943850306\r
2019-10-13,6732.946276080457\r
2019-11-04,5789.211381392437\r
2019-11-24,5485.107943850306\r
2019-12-04,6413.223307523907\r
2020-01-06,6413.223307523907\r
2020-01-16,7721.963955058735\r
2020-01-21,5789.211381392437\r
2020-02-15,7721.963955058735\r
2020-02-20,3256.5280894446655\r
2020-02-22,5485.107943850306\r
2020-03-18,6098.614898126179\r
2020-03-21,9107.480755775556\r
2020-03-23,8405.41096952657\r
2020-03-26,7387.3964817672395\r
2020-03-28,10194.391814793582\r
2020-03-31,8405.41096952657\r
2020-04-02,8061.3258620205825\r
2020-04-05,6098.614898126179\r
2020-04-10,5186.4050737363805\r
2020-04-15,7057.69792597457\r
2020-05-07,3256.5280894446655\r
2020-05-17,5186.4050737363805\r
2020-05-20,6413.223307523907\r
2020-05-30,8061.3258620205825\r
2020-06-26,5186.4050737363805\r
2020-07-04,7721.963955058735\r
2020-07-09,7057.69792597457\r
2020-07-11,4605.632621582498\r
2020-07-19,9827.660292359791\r
2020-07-21,7057.69792597457\r
2020-07-24,8754.151066267246\r
2020-07-29,5789.211381392437\r
2020-08-08,5186.4050737363805\r
2020-08-10,7057.69792597457\r
2020-08-20,6732.946276080457\r
2020-08-25,4605.632621582498\r
2020-09-04,6413.223307523907\r
2020-09-09,7387.3964817672395\r
2020-09-12,3256.5280894446655\r
2020-09-14,4893.209069881383\r
2020-09-17,4605.632621582498\r
2020-11-06,5186.4050737363805\r
2020-11-11,449.2828437515625\r
2020-11-18,7387.3964817672395\r
2020-11-21,6098.614898126179\r
2020-11-28,7387.3964817672395\r
2020-12-11,13280.645426265675\r
2020-12-18,4323.795472711571\r
2021-02-21,6098.614898126179\r
2021-02-24,6732.946276080457\r
2021-03-01,6732.946276080457\r
2021-03-28,8754.151066267246\r
2021-03-31,6732.946276080457\r
2021-04-02,7387.3964817672395\r
2021-04-05,4323.795472711571\r
2021-04-22,7057.69792597457\r
2021-04-27,9465.337268740544\r
2021-05-27,2761.113989659658\r
2021-05-30,9107.480755775556\r
2021-06-01,4605.632621582498\r
2021-06-14,7057.69792597457\r
2021-06-26,2523.594851208045\r
2021-07-19,6098.614898126179\r
2021-07-21,3005.491601860505\r
2021-08-10,3005.491601860505\r
2021-08-15,2523.594851208045\r
2021-08-20,3514.0400132379204\r
2021-09-02,4893.209069881383\r
2021-09-07,4893.209069881383\r
2021-09-12,1854.483611744135\r
2021-09-22,2761.113989659658\r
2021-09-24,4047.825186459305\r
2021-10-02,3777.8580311930673\r
2021-10-14,4323.795472711571\r
2021-10-19,3514.0400132379204\r
2021-10-22,2523.594851208045\r
2021-10-24,4605.632621582498\r
2021-10-27,3514.0400132379204\r
2021-12-23,4323.795472711571\r
2022-01-15,4323.795472711571\r
2022-01-25,5186.4050737363805\r
2022-02-09,5186.4050737363805\r
2022-02-26,6098.614898126179\r
2022-03-06,5186.4050737363805\r
2022-03-08,3777.8580311930673\r
2022-03-23,3005.491601860505\r
2022-03-26,2293.1524539965235\r
2022-04-17,2761.113989659658\r
2022-05-02,3005.491601860505\r
2022-05-10,1854.483611744135\r
2022-05-17,3514.0400132379204\r
2022-05-30,3777.8580311930673\r
2022-06-04,3256.5280894446655\r
2022-06-11,3005.491601860505\r
2022-06-16,2761.113989659658\r
2022-06-21,3514.0400132379204\r
2022-06-29,2070.026825725838\r
2022-07-04,2070.026825725838\r
2022-07-11,2523.594851208045\r
2022-07-14,2523.594851208045\r
2022-07-16,2761.113989659658\r
2022-07-19,2761.113989659658\r
2022-07-24,2761.113989659658\r
2022-08-03,1854.483611744135\r
2022-08-08,1646.8189616908921\r
2022-08-10,2293.1524539965235\r
2022-08-13,2070.026825725838\r
2022-08-25,2070.026825725838\r
2022-09-04,3005.491601860505\r
2022-09-12,3514.0400132379204\r
2022-09-19,2761.113989659658\r
2022-09-22,3256.5280894446655\r
2022-10-04,2523.594851208045\r
2022-10-09,4047.825186459305\r
2022-10-22,3777.8580311930673\r
2022-11-11,4893.209069881383\r
2022-12-08,4893.209069881383\r
2022-12-28,4893.209069881383\r
2023-01-15,3256.5280894446655\r
2023-02-11,3514.0400132379204\r
2023-02-14,2293.1524539965235\r
2023-03-28,7387.3964817672395\r
2023-04-05,1646.8189616908921\r
2023-04-20,2523.594851208045\r
`;export{n as default};

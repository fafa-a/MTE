const n=`date,value\r
2017-02-15,91.09118091054317\r
2017-02-25,75.10588421189814\r
2017-03-17,57.30484909140223\r
2017-03-27,68.99899752667996\r
2017-04-03,57.30484909140223\r
2017-04-23,78.22202373449981\r
2017-05-16,100.0\r
2017-05-26,57.30484909140223\r
2017-06-15,51.729039932184705\r
2017-06-22,68.99899752667996\r
2017-06-25,51.729039932184705\r
2017-07-05,36.169021463246914\r
2017-07-07,29.098448904563316\r
2017-07-17,78.22202373449981\r
2017-08-14,60.161708362573016\r
2017-08-21,75.10588421189814\r
2017-08-26,78.22202373449981\r
2017-08-29,51.729039932184705\r
2017-10-05,75.10588421189814\r
2017-10-13,81.37917319989135\r
2017-10-15,87.8142804281487\r
2017-10-18,66.00949635877768\r
2017-11-04,57.30484909140223\r
2017-11-17,68.99899752667996\r
2017-11-22,72.03133897703988\r
2018-02-27,60.161708362573016\r
2018-03-14,81.37917319989135\r
2018-03-19,68.99899752667996\r
2018-04-18,63.06350101768503\r
2018-04-21,63.06350101768503\r
2018-05-06,60.161708362573016\r
2018-05-11,84.57677173786456\r
2018-05-26,46.34271189787948\r
2018-06-20,54.49369055864507\r
2018-06-22,75.10588421189814\r
2018-06-25,100.0\r
2018-06-27,72.03133897703988\r
2018-07-12,66.00949635877768\r
2018-07-27,72.03133897703988\r
2018-08-06,63.06350101768503\r
2018-08-19,54.49369055864507\r
2018-09-03,38.63493210584748\r
2018-09-08,54.49369055864507\r
2018-09-10,72.03133897703988\r
2018-09-18,63.06350101768503\r
2018-09-25,84.57677173786456\r
2018-10-05,68.99899752667996\r
2018-10-13,60.161708362573016\r
2018-10-18,68.99899752667996\r
2018-10-20,84.57677173786456\r
2018-10-23,54.49369055864507\r
2018-11-09,87.8142804281487\r
2018-11-14,51.729039932184705\r
2018-11-22,94.40697411502708\r
2018-11-24,100.0\r
2018-12-07,100.0\r
2019-02-05,87.8142804281487\r
2019-02-15,51.729039932184705\r
2019-02-17,78.22202373449981\r
2019-02-20,94.40697411502708\r
2019-02-22,75.10588421189814\r
2019-02-25,49.01174774370222\r
2019-02-27,87.8142804281487\r
2019-03-22,75.10588421189814\r
2019-03-29,68.99899752667996\r
2019-05-01,87.8142804281487\r
2019-05-13,78.22202373449981\r
2019-05-16,66.00949635877768\r
2019-05-23,84.57677173786456\r
2019-05-31,75.10588421189814\r
2019-06-02,66.00949635877768\r
2019-06-27,68.99899752667996\r
2019-06-30,75.10588421189814\r
2019-07-02,81.37917319989135\r
2019-07-05,78.22202373449981\r
2019-07-10,72.03133897703988\r
2019-07-15,94.40697411502708\r
2019-07-17,78.22202373449981\r
2019-07-22,78.22202373449981\r
2019-07-25,68.99899752667996\r
2019-08-04,78.22202373449981\r
2019-08-14,66.00949635877768\r
2019-08-24,60.161708362573016\r
2019-08-26,75.10588421189814\r
2019-09-03,60.161708362573016\r
2019-09-13,57.30484909140223\r
2019-09-15,60.161708362573016\r
2019-09-20,66.00949635877768\r
2019-10-03,49.01174774370222\r
2019-10-13,60.161708362573016\r
2019-11-04,51.729039932184705\r
2019-11-24,49.01174774370222\r
2019-12-04,57.30484909140223\r
2020-01-06,57.30484909140223\r
2020-01-16,68.99899752667996\r
2020-01-21,51.729039932184705\r
2020-02-15,68.99899752667996\r
2020-02-20,29.098448904563316\r
2020-02-22,49.01174774370222\r
2020-03-18,54.49369055864507\r
2020-03-21,81.37917319989135\r
2020-03-23,75.10588421189814\r
2020-03-26,66.00949635877768\r
2020-03-28,91.09118091054317\r
2020-03-31,75.10588421189814\r
2020-04-02,72.03133897703988\r
2020-04-05,54.49369055864507\r
2020-04-10,46.34271189787948\r
2020-04-15,63.06350101768503\r
2020-05-07,29.098448904563316\r
2020-05-17,46.34271189787948\r
2020-05-20,57.30484909140223\r
2020-05-30,72.03133897703988\r
2020-06-26,46.34271189787948\r
2020-07-04,68.99899752667996\r
2020-07-09,63.06350101768503\r
2020-07-11,41.15326563486273\r
2020-07-19,87.8142804281487\r
2020-07-21,63.06350101768503\r
2020-07-24,78.22202373449981\r
2020-07-29,51.729039932184705\r
2020-08-08,46.34271189787948\r
2020-08-10,63.06350101768503\r
2020-08-20,60.161708362573016\r
2020-08-25,41.15326563486273\r
2020-09-04,57.30484909140223\r
2020-09-09,66.00949635877768\r
2020-09-12,29.098448904563316\r
2020-09-14,43.722882219502075\r
2020-09-17,41.15326563486273\r
2020-11-06,46.34271189787948\r
2020-11-11,4.014531277951038\r
2020-11-18,66.00949635877768\r
2020-11-21,54.49369055864507\r
2020-11-28,66.00949635877768\r
2020-12-11,100.0\r
2020-12-18,38.63493210584748\r
2021-02-21,54.49369055864507\r
2021-02-24,60.161708362573016\r
2021-03-01,60.161708362573016\r
2021-03-28,78.22202373449981\r
2021-03-31,60.161708362573016\r
2021-04-02,66.00949635877768\r
2021-04-05,38.63493210584748\r
2021-04-22,63.06350101768503\r
2021-04-27,84.57677173786456\r
2021-05-27,24.671715440810946\r
2021-05-30,81.37917319989135\r
2021-06-01,41.15326563486273\r
2021-06-14,63.06350101768503\r
2021-06-26,22.549381984977387\r
2021-07-19,54.49369055864507\r
2021-07-21,26.855332245804693\r
2021-08-10,26.855332245804693\r
2021-08-15,22.549381984977387\r
2021-08-20,31.399426310869565\r
2021-09-02,43.722882219502075\r
2021-09-07,43.722882219502075\r
2021-09-12,16.570591482258326\r
2021-09-22,24.671715440810946\r
2021-09-24,36.169021463246914\r
2021-10-02,33.75675132226847\r
2021-10-14,38.63493210584748\r
2021-10-19,31.399426310869565\r
2021-10-22,22.549381984977387\r
2021-10-24,41.15326563486273\r
2021-10-27,31.399426310869565\r
2021-12-23,38.63493210584748\r
2022-01-15,38.63493210584748\r
2022-01-25,46.34271189787948\r
2022-02-09,46.34271189787948\r
2022-02-26,54.49369055864507\r
2022-03-06,46.34271189787948\r
2022-03-08,33.75675132226847\r
2022-03-23,26.855332245804693\r
2022-03-26,20.49028219018703\r
2022-04-17,24.671715440810946\r
2022-05-02,26.855332245804693\r
2022-05-10,16.570591482258326\r
2022-05-17,31.399426310869565\r
2022-05-30,33.75675132226847\r
2022-06-04,29.098448904563316\r
2022-06-11,26.855332245804693\r
2022-06-16,24.671715440810946\r
2022-06-21,31.399426310869565\r
2022-06-29,18.496560804955465\r
2022-07-04,18.496560804955465\r
2022-07-11,22.549381984977387\r
2022-07-14,22.549381984977387\r
2022-07-16,24.671715440810946\r
2022-07-19,24.671715440810946\r
2022-07-24,24.671715440810946\r
2022-08-03,16.570591482258326\r
2022-08-08,14.715020443751248\r
2022-08-10,20.49028219018703\r
2022-08-13,18.496560804955465\r
2022-08-25,18.496560804955465\r
2022-09-04,26.855332245804693\r
2022-09-12,31.399426310869565\r
2022-09-19,24.671715440810946\r
2022-09-22,29.098448904563316\r
2022-10-04,22.549381984977387\r
2022-10-09,36.169021463246914\r
2022-10-22,33.75675132226847\r
2022-11-11,43.722882219502075\r
2022-12-08,43.722882219502075\r
2022-12-28,43.722882219502075\r
2023-01-15,29.098448904563316\r
2023-02-11,31.399426310869565\r
2023-02-14,20.49028219018703\r
2023-03-28,66.00949635877768\r
2023-04-05,14.715020443751248\r
2023-04-20,22.549381984977387\r
`;export{n as default};

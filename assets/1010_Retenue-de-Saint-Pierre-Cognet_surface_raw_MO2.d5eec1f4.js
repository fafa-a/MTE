const r=`date,value\r
2017-02-19,921700\r
2017-02-22,874300\r
2017-03-01,846800\r
2017-03-11,999000\r
2017-03-14,1007900\r
2017-03-21,982000\r
2017-03-31,869000\r
2017-04-03,942500\r
2017-04-10,943000\r
2017-04-20,935700\r
2017-04-23,961500\r
2017-04-30,960400\r
2017-05-03,901200\r
2017-05-23,982200\r
2017-05-30,987800\r
2017-06-02,976700\r
2017-06-09,926500\r
2017-06-12,874600\r
2017-06-19,789300\r
2017-06-22,807000\r
2017-07-02,800800\r
2017-07-04,726400\r
2017-07-07,838500\r
2017-07-12,829900\r
2017-07-14,799700\r
2017-07-17,836100\r
2017-07-19,848400\r
2017-07-22,838100\r
2017-07-24,829800\r
2017-07-27,883700\r
2017-08-18,756300\r
2017-08-21,792200\r
2017-08-23,771700\r
2017-08-26,782600\r
2017-09-05,818100\r
2017-09-07,781100\r
2017-09-10,781100\r
2017-09-12,781100\r
2017-10-02,770400\r
2017-10-05,781300\r
2017-10-07,732100\r
2017-10-10,736900\r
2017-10-12,744700\r
2017-10-15,770400\r
2017-10-17,749200\r
2017-10-22,743900\r
2017-10-25,783100\r
2017-10-27,886900\r
2017-10-30,921400\r
2017-11-01,921400\r
2017-11-06,918100\r
2018-02-24,945400\r
2018-02-27,945400\r
2018-03-04,955600\r
2018-03-16,1014000\r
2018-03-19,1002400\r
2018-03-21,1002400\r
2018-03-24,970000\r
2018-03-26,945600\r
2018-03-31,915200\r
2018-04-15,914800\r
2018-04-18,938600\r
2018-04-20,907300\r
2018-04-23,907300\r
2018-04-25,920500\r
2018-04-28,912400\r
2018-05-25,1003200\r
2018-05-28,1003200\r
2018-06-19,837200\r
2018-06-22,768600\r
2018-06-27,880900\r
2018-06-29,853900\r
2018-07-02,765900\r
2018-07-04,856200\r
2018-07-07,833900\r
2018-07-09,793500\r
2018-07-12,828300\r
2018-07-14,828300\r
2018-07-17,837900\r
2018-07-19,811100\r
2018-07-22,829400\r
2018-07-24,790000\r
2018-07-27,805700\r
2018-07-29,773400\r
2018-08-01,785900\r
2018-08-03,777000\r
2018-08-06,765100\r
2018-08-08,775800\r
2018-08-11,762500\r
2018-08-16,870800\r
2018-08-18,870800\r
2018-08-21,906200\r
2018-08-23,867900\r
2018-08-26,869500\r
2018-08-28,808500\r
2018-08-31,808500\r
2018-09-02,808500\r
2018-09-05,792900\r
2018-09-07,792400\r
2018-09-10,792100\r
2018-09-12,792100\r
2018-09-17,772500\r
2018-09-20,798100\r
2018-09-22,837800\r
2018-09-25,809600\r
2018-09-27,795600\r
2018-10-02,784200\r
2018-10-05,769100\r
2018-10-12,773200\r
2018-10-17,795100\r
2018-10-20,820600\r
2018-10-22,820600\r
2018-10-25,823200\r
2019-02-14,897800\r
2019-02-17,960100\r
2019-02-19,902900\r
2019-02-22,921100\r
2019-02-27,894400\r
2019-03-01,899400\r
2019-03-11,841600\r
2019-03-16,942800\r
2019-03-19,957600\r
2019-03-21,967100\r
2019-03-24,943400\r
2019-03-26,955600\r
2019-03-29,948600\r
2019-03-31,948900\r
2019-04-05,944800\r
2019-04-13,895000\r
2019-04-15,849200\r
2019-04-18,808200\r
2019-04-20,814700\r
2019-04-30,832900\r
2019-05-10,891600\r
2019-05-13,891600\r
2019-05-15,890000\r
2019-05-23,886100\r
2019-05-30,863000\r
2019-06-02,916500\r
2019-06-04,927300\r
2019-06-07,897400\r
2019-06-12,896600\r
2019-06-19,828100\r
2019-06-24,828100\r
2019-06-27,901100\r
2019-06-29,861000\r
2019-07-02,874700\r
2019-07-04,834400\r
2019-07-07,876500\r
2019-07-12,877400\r
2019-07-14,841600\r
2019-07-17,856800\r
2019-07-19,850700\r
2019-07-22,894000\r
2019-07-24,911600\r
2019-07-29,890000\r
2019-08-01,933200\r
2019-08-03,923400\r
2019-08-06,914300\r
2019-08-08,859200\r
2019-08-11,836700\r
2019-08-16,834600\r
2019-08-18,802700\r
2019-08-21,814700\r
2019-08-23,802800\r
2019-08-26,824100\r
2019-08-31,781500\r
2019-09-02,780600\r
2019-09-05,819300\r
2019-09-07,795600\r
2019-09-12,810200\r
2019-09-15,760100\r
2019-09-17,742700\r
2019-09-20,733200\r
2019-09-25,741100\r
2019-09-27,756000\r
2019-09-30,793200\r
2019-10-02,795900\r
2019-10-05,838300\r
2019-10-07,858200\r
2019-10-10,858200\r
2019-10-17,904700\r
2019-10-20,904700\r
2020-02-12,844800\r
2020-02-14,844800\r
2020-02-19,844800\r
2020-02-22,849700\r
2020-02-24,837800\r
2020-03-03,838800\r
2020-03-08,819400\r
2020-03-10,907400\r
2020-03-15,896100\r
2020-03-18,896100\r
2020-03-20,846300\r
2020-03-25,859800\r
2020-03-28,865000\r
2020-03-30,865000\r
2020-04-02,891900\r
2020-04-04,861000\r
2020-04-07,822100\r
2020-04-09,798800\r
2020-04-14,758800\r
2020-04-22,819500\r
2020-04-24,933900\r
2020-04-29,951400\r
2020-05-04,974400\r
2020-05-07,973400\r
2020-05-09,985600\r
2020-05-14,996100\r
2020-05-19,999100\r
2020-05-22,1003800\r
2020-05-24,937700\r
2020-05-27,931900\r
2020-05-29,933000\r
2020-06-03,933000\r
2020-06-06,933000\r
2020-06-23,860900\r
2020-06-26,889300\r
2020-06-28,889300\r
2020-07-01,917200\r
2020-07-03,917200\r
2020-07-06,923900\r
2020-07-08,894400\r
2020-07-11,915300\r
2020-07-16,900800\r
2020-07-18,800100\r
2020-07-21,800100\r
2020-07-23,880100\r
2020-07-26,871100\r
2020-07-28,877800\r
2020-07-31,916900\r
2020-08-02,896300\r
2020-08-05,892900\r
2020-08-07,880900\r
2020-08-10,877400\r
2020-08-12,874000\r
2020-08-15,874600\r
2020-08-20,865600\r
2020-08-22,850100\r
2020-08-25,850700\r
2020-08-27,851000\r
2020-09-01,843700\r
2020-09-04,833800\r
2020-09-06,861500\r
2020-09-14,958300\r
2020-09-16,973800\r
2020-09-26,915700\r
2020-09-29,915700\r
2021-02-21,882400\r
2021-02-23,908600\r
2021-02-26,886600\r
2021-02-28,898200\r
2021-03-05,904100\r
2021-03-08,952400\r
2021-03-10,958000\r
2021-03-13,951600\r
2021-03-15,951600\r
2021-03-20,947400\r
2021-03-23,943100\r
2021-03-25,974200\r
2021-03-28,947200\r
2021-03-30,959600\r
2021-04-02,938400\r
2021-04-04,961100\r
2021-04-07,958000\r
2021-04-09,948600\r
2021-04-14,941200\r
2021-04-19,928600\r
2021-04-22,954300\r
2021-04-24,959300\r
2021-06-03,918500\r
2021-06-11,928500\r
2021-06-13,944500\r
2021-06-16,966700\r
2021-06-18,966700\r
2021-06-26,971000\r
2021-07-01,975000\r
2021-07-11,784000\r
2021-07-23,924300\r
2021-07-26,924300\r
2021-07-28,870500\r
2021-08-02,887900\r
2021-08-05,866100\r
2021-08-10,999800\r
2021-08-12,1001900\r
2021-08-15,1001600\r
2021-08-17,998100\r
2021-08-20,1002700\r
2021-08-22,997200\r
2021-08-25,984100\r
2021-08-27,1001100\r
2021-08-30,1005400\r
2021-09-01,970000\r
2021-09-06,959800\r
2021-09-11,958600\r
2021-09-24,892500\r
2021-09-29,892500\r
2021-10-01,952400\r
2021-10-06,937200\r
2021-10-09,992100\r
2021-10-11,992100\r
2021-10-14,1011700\r
2021-10-16,921600\r
2021-10-21,879100\r
2021-10-24,857000\r
2021-10-26,824300\r
2022-02-13,891800\r
2022-02-18,906000\r
2022-02-23,888800\r
2022-02-26,935900\r
2022-02-28,913600\r
2022-03-03,909800\r
2022-03-05,913900\r
2022-03-08,904600\r
2022-03-10,915200\r
2022-03-23,1007400\r
2022-03-25,1020200\r
2022-03-28,1010300\r
2022-04-04,1018100\r
2022-04-14,961900\r
2022-04-17,1021700\r
2022-04-19,1021700\r
2022-04-22,974000\r
2022-04-27,1012500\r
2022-04-29,1029500\r
2022-05-07,1012200\r
2022-05-12,934600\r
2022-05-14,978700\r
2022-05-17,978700\r
2022-05-19,974000\r
2022-05-22,974000\r
2022-05-29,938700\r
2022-06-01,948500\r
2022-06-06,942600\r
2022-06-11,969200\r
2022-06-13,978900\r
2022-06-16,955200\r
2022-06-18,958000\r
2022-06-21,958000\r
2022-06-26,935000\r
2022-06-28,903100\r
2022-07-03,985200\r
2022-07-06,980600\r
2022-07-08,986300\r
2022-07-11,929500\r
2022-07-13,947400\r
2022-07-16,930500\r
2022-07-18,907900\r
2022-07-21,912000\r
2022-07-26,902200\r
2022-07-28,922400\r
2022-07-31,962000\r
2022-08-02,955000\r
2022-08-05,927400\r
2022-08-07,932000\r
2022-08-10,915900\r
2022-08-12,898000\r
2022-08-20,940400\r
2022-08-22,908300\r
2022-08-25,899100\r
2022-08-27,899100\r
2022-09-01,857300\r
2022-09-04,861200\r
2022-09-06,932500\r
2022-09-09,878400\r
2022-09-11,899400\r
2022-09-16,906400\r
2022-09-19,868300\r
2022-09-21,880600\r
2022-09-26,914600\r
2022-10-04,868500\r
2022-10-06,888000\r
2022-10-11,876900\r
2022-10-16,876400\r
2022-10-19,892600\r
2022-10-26,879300\r
2022-10-31,813600\r
2022-11-05,813600\r
2023-02-11,844000\r
2023-02-13,907200\r
2023-02-16,945800\r
2023-02-18,907800\r
2023-02-21,945500\r
2023-02-26,975100\r
2023-02-28,849300\r
2023-04-19,982100\r
2023-04-22,982100\r
2023-04-24,982100\r
2023-06-06,912800\r
2023-06-16,944600\r
2023-06-23,1023800\r
2023-06-26,944100\r
2023-06-28,988600\r
2023-07-06,981900\r
2023-07-08,994500\r
2023-07-11,958900\r
2023-07-13,958900\r
2023-07-16,954700\r
2023-07-18,943600\r
2023-07-21,938100\r
2023-07-23,928700\r
2023-07-26,937000\r
2023-07-28,921600\r
2023-07-31,919200\r
2023-08-02,911600\r
2023-08-05,926500\r
2023-08-07,906400\r
2023-08-10,917000\r
2023-08-12,875800\r
2023-08-15,865400\r
2023-08-17,848200\r
2023-08-22,837300\r
2023-08-25,839900\r
2023-08-30,811700\r
2023-09-01,826500\r
2023-09-04,883400\r
2023-09-06,888000\r
2023-09-11,853700\r
2023-09-19,858700\r
2023-09-24,900900\r
2023-09-26,905700\r
2023-09-29,885700\r
2023-10-01,900800\r
2023-10-04,900800\r
2023-10-06,879800\r
2023-10-09,888800\r
2023-10-11,867000\r
2023-10-21,906200\r
`;export{r as default};

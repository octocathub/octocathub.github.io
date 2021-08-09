# sql优化

## explain返回列简介

1、type常用关键字

system > const > eq_ref > ref > range > index > all。

- system：表仅有一行，基本用不到；

- const：表最多一行数据配合，主键查询时触发较多；

- eq_ref：对于每个来自于前面的表的行组合，从该表中读取一行。这可能是最好的联接类型，除了const类型；

- ref：对于每个来自于前面的表的行组合，所有有匹配索引值的行将从这张表中读取；

- range：只检索给定范围的行，使用一个索引来选择行。当使用=、<>、>、>=、<、<=、IS NULL、<=>、BETWEEN或者IN操作符，用常量比较关键字列时，可以使用range；

- index：该联接类型与ALL相同，除了只有索引树被扫描。这通常比ALL快，因为索引文件通常比数据文件小；

- all：全表扫描；

实际sql优化中，最后达到ref或range级别。

2、Extra常用关键字
Using index：只从索引树中获取信息，而不需要回表查询；
Using temporary：mysql常建一个临时表来容纳结果，典型情况如查询包含可以按不同情况列出列的GROUP BY和ORDER BY子句时；
Using where：WHERE子句用于限制哪一个行匹配下一个表或发送到客户。除非你专门从表中索取或检查所有行，如果Extra值不为Using where并且表联接类型为ALL或index，查询可能会有一些错误。需要回表查询。


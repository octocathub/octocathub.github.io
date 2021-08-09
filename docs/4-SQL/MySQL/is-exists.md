# SQL 查找是否"存在"

## 多数人的写法

业务代码中，需要根据一个或多个条件，查询是否存在记录，不关心有多少条记录。普遍的SQL及代码写法如下

``` java
##### SQL写法:  
SELECT count(*) FROM table WHERE a = 1 AND b = 2  
  
##### Java写法:  
int nums = xxDao.countXxxxByXxx(params);  
if ( nums > 0 ) {  
  //当存在时，执行这里的代码  
} else {  
  //当不存在时，执行这里的代码  
}  
```

## 优化方案

``` java 
SELECT 1 FROM table WHERE a = 1 AND b = 2 LIMIT 1  
  
##### Java写法:  
Integer exist = xxDao.existXxxxByXxx(params);  
if ( exist != NULL ) {  
  //当存在时，执行这里的代码  
} else {  
  //当不存在时，执行这里的代码  
}
```

SQL不再使用`count`，而是改用`LIMIT 1`，让数据库查询时遇到一条就返回，不要再继续查找还有多少条了业务代码中直接判断是否非空即可。


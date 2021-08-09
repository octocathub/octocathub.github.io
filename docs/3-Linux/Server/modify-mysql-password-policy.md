# 修改mysql密码策略

修改密码安全策略，改为LOW，密码长度最小6位

```  bash
mysql> SHOW VARIABLES LIKE 'validate_password%';
+--------------------------------------+--------+
| Variable_name      | Value |
+--------------------------------------+--------+
| validate_password.check_user_name | ON  |
| validate_password.dictionary_file |  |
| validate_password.length    | 8  |
| validate_password.mixed_case_count | 1  |
| validate_password.number_count  | 1  |
| validate_password.policy    | MEDIUM |
| validate_password.special_char_count | 1  |
+--------------------------------------+--------+
7 rows in set (0.00 sec)
  
mysql> set global validate_password.policy=LOW;
Query OK, 0 rows affected (0.00 sec)
  
mysql> set global validate_password.length=6;
Query OK, 0 rows affected (0.00 sec)
  
mysql> SHOW VARIABLES LIKE 'validate_password%';
+--------------------------------------+-------+
| Variable_name      | Value |
+--------------------------------------+-------+
| validate_password.check_user_name | ON |
| validate_password.dictionary_file |  |
| validate_password.length    | 6  |
| validate_password.mixed_case_count | 1  |
| validate_password.number_count  | 1  |
| validate_password.policy    | LOW |
| validate_password.special_char_count | 1  |
+--------------------------------------+-------+
7 rows in set (0.00 sec)
```

关于 mysql 密码策略相关参数；

1. validate_password.length  固定密码的总长度；

2. validate_password_dictionary_file 指定密码验证的文件路径；

3. validate_password_mixed_case_count  整个密码中至少要包含大/小写字母的总个数；

4. validate_password_number_count  整个密码中至少要包含阿拉伯数字的个数；

5. validate_password.policy 指定密码的强度验证等级，默认为 MEDIUM；

6. validate_password_special_char_count 整个密码中至少要包含特殊字符的个数。

关于 `validate_password.policy` 的取值：

- LOW：只验证长度；
- MEDIUM：验证长度、数字、大小写、特殊字符；
- STRONG：验证长度、数字、大小写、特殊字符、字典文件。
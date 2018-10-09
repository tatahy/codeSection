<!--  HY 2018/5/31 -->	
MySQL 命令行，修改用户密码的命令：
'set password'或'alter user'

mysql>help set password

Syntax:
SET PASSWORD syntax for MySQL 5.7.6 and up:

*Note*: SET PASSWORD is deprecated as of MySQL 5.7.6 and will be
removed in a future MySQL release. ALTER USER is now the preferred
statement for assigning passwords. For example: ALTER USER user
IDENTIFIED BY 'auth_string';

The SET PASSWORD statement assigns a password to a MySQL user account:


详细'set password'命令参考：
http://dev.mysql.com/doc/refman/5.7/en/set-password.html

示例,修改当前用户的password为12345678：
1.查看当前用户：
mysql>select current_user;
结果：
+----------------+
| current_user   |
+----------------+
| root@localhost |
+----------------+
1 row in set (0.00 sec)


2.修改当前用户的password为12345678：
mysql> set password for 'root'@'localhost'='12345678';
结果:
Query OK, 0 rows affected (0.00 sec)


mysql>help alter user

Syntax:
ALTER USER syntax for MySQL 5.7.6 and up:

The ALTER USER statement modifies MySQL accounts. It provides control
over account password expiration. As of MySQL 5.7.6, it also provides
control over authentication, SSL, and resource-limit properties, and
account locking and unlocking.

To use ALTER USER, you must have the global CREATE USER privilege or
the UPDATE privilege for the mysql database. When the read_only system
variable is enabled, ALTER USER additionally requires the SUPER
privilege.

An error occurs if you try to modify an account that does not exist.

*Note*: SET PASSWORD is deprecated as of MySQL 5.7.6 and will be removed in a future MySQL release. ALTER USER is now the preferred statement for assigning passwords. 

详细'alter user'命令参考：
http://dev.mysql.com/doc/refman/5.7/en/alter-user.html

<!--/  HY 2018/5/31 -->	

<!--  HY 2018/10/9 -->	
-- //MySQL 数据表中导入*.xlsx文件
1. Office Excel打开'*.xlsx'文件，另存为'*.csv'文件
2. NP++中打开上一步中创建的'*.csv'文件，选择'编码'->'转为UTF-8编码'（UTF-8为MySQL中的通用编码方式，Office Excel使用的是'ANSI编码'）
3. phoMyAdmin中选定MySQLd数据表,导入上一步中修改后的'*.csv'文件。注意各项分隔符的内容要与'*.csv'中的一致。

-- //MySQL 数据表中导出*.csv文件给Office Excel
 phoMyAdmin中选定MySQLd数据表，
 '格式'：'CSV for MS Excel';
 勾选'首行保存字段名'，
 'Excel版本':'Excel 2008'，
 '文件的字符集':'gb2312'

<!--/  HY 2018/10/9 -->	






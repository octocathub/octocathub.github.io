# Springboot中如何优雅的进行字段校验

一般推荐与业务无关的放在Controller层中进行校验，而与业务有关的放在Service层中进行校验。那么如何将参数校验写的优雅美观呢，如果都是if - else，就感觉写的很low，还好有轮子可以使用！

## 常用校验工具类

### 使用Hibernate Validate
引入依赖

``` xml
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-validator</artifactId>
    <version>4.3.1.Final</version>
</dependency>
```
常用注解说明: 

| 注解        | 说明     | 
|:-------------:|:-------------:|
|Length(min=,max=@)     | 检查所属的字段的长度是否在min和max之间，只能用于字符串 |
| @Range(min=,max=,message=)     | 被注释的元素必须在合适的范围内     |
| @Max | 该字段的值只能小于或等于该值      |
| @Min     | 该字段的值只能大于或等于该值|
|@NotNull     | 不能为null     |
| @NotBlank | 不能为空，检查时会将空格忽略     |
| @NotEmpty      | 不能为空，这里的空是指空字符串|
| @Pattern(regex=,flag=)     |被注释的元素必须符合指定的正则表达式     |

使用姿势需要搭配在Controller中搭配@Validated或@Valid注解一起使用，@Validated和@Valid注解区别不是很大，一般情况下任选一个即可，区别如下：

| 注解        | @Validated     | @Valid |
|:-------------:|:-------------:|:-------------:|
|所属的包|属于org.springframework.validation.annotation包下的,是spring提供的|属于javax.validation包下,是jdk给提供的|	
|是否支持分组和排序|是|否|
		
虽然@Validated比@Valid更加强大，在@Valid之上提供了分组功能和验证排序功能，不过在实际项目中一直没有用到过 Hibernate-validate框架中的注解是需要加在实体中一起使用的。

定义一个实体
``` java
public class DataSetSaveVO {
    //唯一标识符为空
    @NotBlank(message = "user uuid is empty")
    //用户名称只能是字母和数字
    @Pattern(regexp = "^[a-z0-9]+$", message = "user names can only be alphabetic and numeric")
    @Length(max = 48, message = "user uuid length over 48 byte")
    private String userUuid;

    //数据集名称只能是字母和数字
    @Pattern(regexp = "^[A-Za-z0-9]+$", message = "data set names can only be letters and Numbers")
    //文件名称过长
    @Length(max = 48, message = "file name too long")
    //文件名称为空
    @NotBlank(message = "file name is empty")
    private String name;

    //数据集描述最多为256字节
    @Length(max = 256, message = "data set description length over 256 byte")
    //数据集描述为空
    @NotBlank(message = "data set description is null")
    private String description;
}
```

说明：message字段为不符合校验规则时抛出的异常信息。
Controller层中的方法
``` java
@PostMapping
public ResponseVO createDataSet(@Valid @RequestBody DataSetSaveVO dataSetVO) {
    return ResponseUtil.success(dataSetService.saveDataSet(dataSetVO));
}
```

说明：在校验的实体DataSetSaveVO旁边添加@Valid或@Validated注解。


### 使用commons-lang3
引入依赖
``` xml
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-lang3</artifactId>
    <version>3.4</version>
</dependency>
```
常用方法说明

|方法        |说明     |
|:-------------:|:-------------:|
|CollectionUtils.isEmpty|判断集合是否为空，为null或者size==0，返回true|
|CollectionUtils.isNotEmpty|判断集合是否为非空|
|StringUtils.isEmpty判断字符串是否为空
|StringUtils.isNotEmpty|判断字符串是否非空|
|StringUtils.isBlank|判断字符串是否为空，为null或者size==0或者只存在空白字符(如" ")，则返回true|
|StringUtils.isNotBlank判断字符串是否为非空
	
测试代码
``` java
//StringUtils.isEmpty
System.out.println(StringUtils.isEmpty(""));  //true
System.out.println(StringUtils.isEmpty("  "));  //false
//StringUtils.isNotEmpty
System.out.println(StringUtils.isNotEmpty(""));  //false

//StringUtils.isBlank
System.out.println(StringUtils.isBlank(""));  //true
System.out.println(StringUtils.isBlank(" "));  //true
//StringUtils.isNotBlank
System.out.println(StringUtils.isNotBlank(" "));  //false

List<Integer> emptyList = new ArrayList<>();
List<Integer> nullList = null;
List<Integer> notEmptyList = new ArrayList<>();
notEmptyList.add(1);

//CollectionUtils.isEmpty
System.out.println(CollectionUtils.isEmpty(emptyList));   //true
System.out.println(CollectionUtils.isEmpty(nullList));   //true
System.out.println(CollectionUtils.isEmpty(notEmptyList));   //false

//CollectionUtils.isNotEmpty
System.out.println(CollectionUtils.isNotEmpty(emptyList));   //false
System.out.println(CollectionUtils.isNotEmpty(nullList));   //false
System.out.println(CollectionUtils.isNotEmpty(notEmptyList));   //true
```

### 自定义注解
当上面的方面都无法满足校验的需求以后，可以考虑使用自定义注解。



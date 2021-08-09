# Spring-data-jpa详解

## 注解

### @OneToManyy和@ManyToOne注解

两个对象存在一对多或多对一的关系。如何在程序在表明这两个对象的关系，以及如何利用这种关系优雅地使用它们。其实，在javax.persistence包下有这样两个注解——@OneTomany和@ManyToOne，可以为我们所用。

@OneToMany(cascade = {CascadeType.REFRESH, CascadeType.PERSIST,
			CascadeType.MERGE}, mappedBy = "father")

示例:
``` java 
@OneToMany(cascade = {CascadeType.REFRESH, CascadeType.PERSIST,
			CascadeType.MERGE}, mappedBy = "father")
@OrderBy("seqNum ASC")

private List<Chapter> son;

```

@ManyToOne(cascade = { CascadeType.REFRESH, CascadeType.PERSIST, CascadeType.MERGE }, fetch = FetchType.LAZY)
@JoinColumn(name = "FATHER_ID")
示例：
``` java 
@ManyToOne(cascade = { CascadeType.REFRESH, CascadeType.PERSIST, CascadeType.MERGE }, fetch = FetchType.LAZY)
@JoinColumn(name = "COURSE_ID", nullable = false)
private Course course;
```


@Transient
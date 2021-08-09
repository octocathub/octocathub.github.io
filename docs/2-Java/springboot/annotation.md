# 注解

## 基本注解


// 屏蔽编译器的警告
@SuppressWarnings("all")


## springboot注解

### Spring Web MVC 注解

@RequestMapping

@RequestMapping注解的主要用途是将Web请求与请求处理类中的方法进行映射。Spring MVC和Spring WebFlux都通过RquestMappingHandlerMapping和RequestMappingHndlerAdapter两个类来提供对@RequestMapping注解的支持。

@RequestMapping注解对请求处理类中的请求处理方法进行标注；@RequestMapping注解拥有以下的六个配置属性：

value:映射的请求URL或者其别名
method:兼容HTTP的方法名
params:根据HTTP参数的存在、缺省或值对请求进行过滤
header:根据HTTP Header的存在、缺省或值对请求进行过滤
consume:设定在HTTP请求正文中允许使用的媒体类型
product:在HTTP响应体中允许使用的媒体类型
提示：在使用@RequestMapping之前，请求处理类还需要使用@Controller或@RestController进行标记。


下面是使用@RequestMapping的两个示例：
``` java
@Controller
public class DemoController {
    @ResuestMapping(value="/demo/home",method=RequestMethod.GET)
    public String home(){
        return "/home";
    }
}
```

@RequestMapping还可以对类进行标记，这样类中的处理方法在映射请求路径时，会自动将类上@RequestMapping设置的value拼接到方法中映射路径之前，如下：
``` java
@Controller
@RequestMapping(value="/demo")
public class DemoController {
    @ResuestMapping(value="/home",method=RequestMethod.GET)
    public String home(){
        return "/home";
    }
}
```

@RequestBody

@RequestBody在处理请求方法的参数列表中使用，它可以将请求主体中的参数绑定到一个对象中，请求主体参数是通过HttpMessageConverter传递的，根据请求主体中的参数名与对象的属性名进行匹配并绑定值。此外，还可以通过@Valid注解对请求主体中的参数进行校验。下面是一个使用@RequestBody的示例：
``` java 
@Controller
@RequestMapping(value="/api/v1")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/users")
    public User createUser(@Valid @RequestBody User user){
        return userService.save(user);
    }
}
```
@GetMapping

@GetMapping注解用于处理HTTP GET请求，并将请求映射到具体的处理方法中。具体来说，@GetMapping是一个组合注解，它相当于是@RequestMapping(method=RequestMethod.GET)的快捷方式。下面是@GetMapping的一个使用示例：
``` java
@Controller
@RequestMapping(value="/api/v1")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> findAllUser(){
        List<User> users = userService.findAll();
        return users;
    }

    @GetMapping("/users")
    public User findOneById(@PathVariable(name="id")) long id{ 
        throws UserNotFoundException{
             return userService.findOne(id);
        }
    }
}
```
@PostMapping

@PostMapping注解用于处理HTTP POST请求，并将请求映射到具体的处理方法中。@PostMapping与@GetMapping一样，也是一个组合注解，它相当于是@RequestMapping(method=HttpMethod.POST)的快捷方式。下面是使用@PostMapping的一个示例:

``` java
@Controller
@RequestMapping(value="/api/v1")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/users")
    public User createUser(@Valid @RequestBody User user){
        return userService.save(user);
    }
}
```
@PutMapping

@PutMapping注解用于处理HTTP PUT请求，并将请求映射到具体的处理方法中，@PutMapping是一个组合注解，相当于是@RequestMapping(method=HttpMethod.PUT)的快捷方式。下面是使用@PutMapping的一个示例：
``` java 
@Controller
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(name="id") long id,@Value @ReponseBody User detail) throws UserNotFoundException {
        User user = userRepository.findById(id).orElseThrow(()-> new UserNotFoundException("User not found with this id:"+id));
        user.setLastName(detail.getLastName());
        user.setEmail(detail.getEmail());
        user.setAddress(detail.getAddress());
        final User origin = userRepository.save(user);
        return ResponseEntity.ok(origin);
    }
}
```

@DeleteMapping

@DeleteMapping注解用于处理HTTP DELETE请求，并将请求映射到删除方法中。@DeleteMapping是一个组合注解，它相当于是@RequestMapping(method=HttpMethod.DELETE)的快捷方式。下面是使用@DeleteMapping的一个示例：
``` java
@RequestController
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @DeleteMapping("/users/{id}")
    public Map<String,Boolean> deleteById(@PathVariable(name="id") long id,@Value @ReponseBody User detail) throws UserNotFoundException {
        User user = userRepository.findById(id).orElseThrow(()-> new UserNotFoundException("User not found with this id:"+id));
        userRepository.delete(user);
        Map<String.Boolean> response = new HashMap<>();
        reponse.put("deleted",Boolean.TRUE);
        return response;
    }
}
```


@PatchMapping

@PatchMapping注解用于处理HTTP PATCH请求，并将请求映射到对应的处理方法中。@PatchMapping相当于是@RequestMapping(method=HttpMethod.PATCH)的快捷方式。下面是一个简单的示例：

``` java 
@RequestController
@RequestMapping("/api/v1")
public class UserController{
    @PatchMapping("/users/patches")
    public ResponseEntity<Object> patch(){
        return new ResponseEntity<>("Patch method response message",HttpStatus.OK);
    }
}
```

@ControllerAdvice

@ControllerAdvice是@Component注解的一个延伸注解，Spring会自动扫描并检测被@ControllerAdvice所标注的类。@ControllerAdvice需要和@ExceptionHandler、@InitBinder以及@ModelAttribute注解搭配使用，主要是用来处理控制器所抛出的异常信息。首先，我们需要定义一个被@ControllerAdvice所标注的类，在该类中，定义一个用于处理具体异常的方法，并使用@ExceptionHandler注解进行标记。此外，在有必要的时候，可以使用@InitBinder在类中进行全局的配置，还可以使用@ModelAttribute配置与视图相关的参数。使用@ControllerAdvice注解，就可以快速的创建统一的，自定义的异常处理类。下面是一个使用@ControllerAdvice的示例代码：
``` java 
@ControllerAdvice(basePackages = {"com.ramostear.controller.user"})
public class UserControllerAdvice {
    @InitBinder
    public void binder(WebDataBinder binder){
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        format.setLenient(false);
        binder.registerCustomEditor(Date.class,"user",new CustomDateFormat(format,true));
    }

    @ModelAttribute
    public void modelAttribute(Model model){
        model.addAttribute("msg","User not found exception");
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ModelAndView userNotFoundExceptionHandler(UserNotFoundException ex){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("exception",ex);
        modelAndView.setViewName("error");
        return modelAndView;
    }
}
```

@ResponseBody

@ResponseBody会自动将控制器中方法的返回值写入到HTTP响应中。特别的，@ResponseBody注解只能用在被@Controller注解标记的类中。如果在被@RestController标记的类中，则方法不需要使用@ResponseBody注解进行标注。@RestController相当于是@Controller和@ResponseBody的组合注解。下面是使用该注解的一个示例：



@ExceptionHandler

@ExceptionHander注解用于标注处理特定类型异常类所抛出异常的方法。当控制器中的方法抛出异常时，Spring会自动捕获异常，并将捕获的异常信息传递给被@ExceptionHandler标注的方法。下面是使用该注解的一个示例：



@ResponseStatus

@ResponseStatus注解可以标注请求处理方法。使用此注解，可以指定响应所需要的HTTP STATUS。特别地，我们可以使用HttpStauts类对该注解的va lue属性进行赋值。下面是使用@ResponseStatus注解的一个示例：



@PathVariable

@PathVariable注解是将方法中的参数绑定到请求URI中的模板变量上。可以通过@RequestMapping注解来指定URI的模板变量，然后使用@PathVariable注解将方法中的参数绑定到模板变量上。特别地，@PathVariable注解允许我们使用value或name属性来给参数取一个别名。下面是使用此注解的一个示例：

 
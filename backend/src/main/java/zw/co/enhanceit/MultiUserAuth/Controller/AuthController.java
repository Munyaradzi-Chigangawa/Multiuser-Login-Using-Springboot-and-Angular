package zw.co.enhanceit.MultiUserAuth.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import zw.co.enhanceit.MultiUserAuth.Model.User;
import zw.co.enhanceit.MultiUserAuth.Service.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public User Register(@RequestBody User user) {
        return authService.register(user);

    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {

        return authService.login(user);

    }
}

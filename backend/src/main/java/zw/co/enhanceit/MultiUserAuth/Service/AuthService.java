package zw.co.enhanceit.MultiUserAuth.Service;
import org.springframework.stereotype.Service;
import zw.co.enhanceit.MultiUserAuth.Model.User;
import zw.co.enhanceit.MultiUserAuth.Repository.UserRepository;
import java.security.SecureRandom;
import java.util.Base64;

@Service
public class AuthService {

    private final UserRepository userRepository;

    private static final SecureRandom secureRandom = new SecureRandom();
    private static final Base64.Encoder base64encoder = Base64.getUrlEncoder();

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String register (User user) {
        // Check if user already exists or not
        if (checkUserExist(user))
            return "Error while adding user.";

            user.setToken(generateToken());

            userRepository.save(user);

            return "Successfully registered user.";
    }

    private String generateToken() {
        byte[] token = new byte[24];
        secureRandom.nextBytes(token);
        return base64encoder.encodeToString(token);

    }

    private boolean checkUserExist(User user) {
        User existingUser = userRepository.findById(user.getUsername()).orElse(null);

        return existingUser != null;
    }

    public String login(User user) {
        User existingUser = userRepository.findById(user.getUsername()).orElse(null);

        if(existingUser == null)
            return "";

        return existingUser.getToken();
    }
}

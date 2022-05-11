package zw.co.enhanceit.MultiUserAuth.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import zw.co.enhanceit.MultiUserAuth.Model.User;

public interface UserRepository extends JpaRepository<User, String> {
}

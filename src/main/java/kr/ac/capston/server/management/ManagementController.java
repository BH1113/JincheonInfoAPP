package kr.ac.capston.server.management;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ManagementController {
    @RequestMapping(value = "/manager")
    public String managent(){
        return "hi";
    }
}

package kr.ac.capston.server.sample;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Sample {

    @RequestMapping("/sample")
    public String sample(){
        return "index";
    }
}

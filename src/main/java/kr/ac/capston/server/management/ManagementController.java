package kr.ac.capston.server.management;

import kr.ac.capston.server.model.dao.DetailDao;
import kr.ac.capston.server.model.dto.DetailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
public class ManagementController {

    @Autowired
    private DetailDao detailDao;

    @RequestMapping(value = "/manager", method = RequestMethod.GET)
    public String managent(Model model){
        List<DetailDto> detailDto = detailDao.getAll();
        model.addAttribute("details", detailDto);
        return "manage";
    }

    @RequestMapping(value = "/manager", method = RequestMethod.POST)
    public String addInformation(DetailDto detailDto){
        detailDao.add(detailDto);
        return "manage";
    }

    @InitBinder
    protected void initBinder(WebDataBinder binder){
        binder.setValidator(new UploadCommandValidator());
    }
}

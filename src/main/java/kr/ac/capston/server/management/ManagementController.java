package kr.ac.capston.server.management;

import kr.ac.capston.server.model.dao.DetailDao;
import kr.ac.capston.server.model.dto.DetailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Controller
public class ManagementController {

    @Autowired
    private DetailDao detailDao;

    @RequestMapping(value = "/manage", method = RequestMethod.GET)
    public String managent(Model model){
        List<DetailDto> detailDto = detailDao.getAll();
        model.addAttribute("details", detailDto);
        return "manage";
    }

    @RequestMapping(value = "/manage", method = RequestMethod.POST)
    public String addInformation(@RequestParam("name") String imageName,
                                 @RequestParam("detailIntro") String detailIntro){
        DetailDto detailDto = new DetailDto();
        detailDto.setName(imageName);
        detailDto.setDetailIntro(detailIntro);
        detailDao.add(detailDto);
        return "redirect:manage";
    }

    @RequestMapping(value="/manage/{detailId}", method = RequestMethod.GET)
    public String specificFile(@PathVariable String detailId, Model model){
        List<DetailDto> detailDto = detailDao.getByName(detailId);
        model.addAttribute("detail", detailDto);
        return "detailInformation";
    }

    @InitBinder
    protected void initBinder(WebDataBinder binder){
        binder.setValidator(new UploadCommandValidator());
    }
}

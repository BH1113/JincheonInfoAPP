package kr.ac.capston.server.management;

import kr.ac.capston.server.model.dao.DetailDao;
import kr.ac.capston.server.model.dto.DetailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.Console;
import java.math.BigDecimal;
import java.util.List;

@Controller
public class ManagementController {

    @Autowired
    private DetailDao detailDao;

    @RequestMapping(value = "/manage", method = RequestMethod.GET)
    public String management(Model model){
        List<DetailDto> detailDto = detailDao.getAll();
        model.addAttribute("details", detailDto);
        return "manage";
    }

    @RequestMapping(value = "/manage", method = RequestMethod.POST)
    public String addInformation(@RequestParam("name") String imageName,
                                 @RequestParam("detailIntro") String detailIntro, @RequestParam("cor_x") BigDecimal cor_x,
                                 @RequestParam("cor_y") BigDecimal cor_y, @RequestParam("image") MultipartFile multipartFile){
        DetailDto detailDto = new DetailDto();
        if(!multipartFile.isEmpty()){
            String[] format = multipartFile.getOriginalFilename().split("\\.");
            String path = "http://";
        }

        detailDto.setName(imageName);
        detailDto.setDetailIntro(detailIntro);
        detailDao.add(detailDto);
        return "redirect:manage";
    }

    @RequestMapping(value="/manage/{detailId}", method = RequestMethod.GET)
    public String specificFile(@PathVariable String detailId, Model model){
        List<DetailDto> detailDto = detailDao.getByName(detailId);
        ManagementRequest managementRequest = new ManagementRequest();
        managementRequest.setName(detailDto.get(0).getName());
        managementRequest.setDetailIntro(detailDto.get(0).getDetailIntro());

        model.addAttribute("detail", managementRequest);
        return "detailInformation";
    }

    @InitBinder
    protected void initBinder(WebDataBinder binder){
        binder.setValidator(new UploadCommandValidator());
    }
}

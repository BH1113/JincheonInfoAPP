package kr.ac.capston.server.management;

import kr.ac.capston.server.model.dao.DetailDao;
import kr.ac.capston.server.model.dao.ImageDao;
import kr.ac.capston.server.model.dto.DetailDto;
import kr.ac.capston.server.model.dto.ImageDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Controller
public class ManagementController {

    @Autowired
    private DetailDao detailDao;

    @Autowired
    private ImageDao imageDao;

    @Autowired
    private SftpUploader sftpUploader;

    @RequestMapping(value = "/manage", method = RequestMethod.GET)
    public String management(Model model){
        List<DetailDto> detailDto = detailDao.getAll();
        model.addAttribute("details", detailDto);
        return "manage";
    }

    @RequestMapping(value = "/manage", method = RequestMethod.POST)
    public String addInformation(@RequestParam("name") String imageName,
                                 @RequestParam("detailIntro") String detailIntro, @RequestParam("cor_x") BigDecimal cor_x,
                                 @RequestParam("cor_y") BigDecimal cor_y, @RequestParam("image") MultipartFile multipartFile) throws Exception {
        DetailDto detailDto = new DetailDto();
        detailDto.setName(imageName);
        detailDto.setDetailIntro(detailIntro);
        int pkNum = detailDao.add(detailDto);

        if(!multipartFile.isEmpty()){
            ImageDto imageDto = new ImageDto();
            String[] format = multipartFile.getOriginalFilename().split("\\.");
            String saveFileName = UUID.randomUUID().toString().replace("-", "");

            imageDto.setName(saveFileName);
            imageDto.setDetailId(pkNum);
            imageDto.setType(format[1]);
            imageDao.add(imageDto);

            sftpUploader.upload(multipartFile, saveFileName);
        }
        return "redirect:manage";
    }

    @RequestMapping(value="/manage/{detailId}", method = RequestMethod.GET)
    public String specificFile(@PathVariable int detailId, Model model){
        List<DetailDto> detailDto = detailDao.getByPk(detailId);
        List<ImageDto> imageDtos = imageDao.getByDetailId(detailId);

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

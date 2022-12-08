package kr.ac.capston.server.detail;

import kr.ac.capston.server.model.dao.DetailDao;
import kr.ac.capston.server.model.dao.ImageDao;
import kr.ac.capston.server.model.dto.DetailDto;
import kr.ac.capston.server.model.dto.ImageDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class DetailController {
    @Autowired
    private DetailDao detailDao;
    @Autowired
    private ImageDao imageDao;

    @RequestMapping(value = "/detail/{detailId}", method = RequestMethod.GET)
    @ResponseBody
    public DetailJson sendDetail(@PathVariable String detailId, Model model){
        List<DetailDto> detailDto = detailDao.getByName(detailId);
        List<ImageDto> imageDto = imageDao.getByDetailId(detailDto.get(0).getPk());
        DetailJson detailJson = new DetailJson();
        detailJson.setDetailDto(detailDto.get(0));
        detailJson.setImageDtoList(imageDto);
        return detailJson;
    }
}

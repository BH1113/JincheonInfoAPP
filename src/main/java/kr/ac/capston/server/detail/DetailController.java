package kr.ac.capston.server.detail;

import kr.ac.capston.server.model.dao.DetailDao;
import kr.ac.capston.server.model.dao.DetailDaoImpl;
import kr.ac.capston.server.model.dto.DetailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class DetailController {
    @Autowired
    private DetailDao detailDao;

    @RequestMapping(value = "/detail/{detailId}", method = RequestMethod.GET)
    @ResponseBody
    public DetailDto sendDetail(@PathVariable String detailId, Model model){
        List<DetailDto> detailDto = detailDao.getByName(detailId);
        return detailDto.get(0);
    }
}

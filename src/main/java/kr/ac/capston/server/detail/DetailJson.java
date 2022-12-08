package kr.ac.capston.server.detail;

import kr.ac.capston.server.model.dto.DetailDto;
import kr.ac.capston.server.model.dto.ImageDto;

import java.util.*;

public class DetailJson {
    private DetailDto detailDto;
    private List<ImageDto> imageDtoList;

    public DetailDto getDetailDto() {
        return detailDto;
    }

    public void setDetailDto(DetailDto detailDto) {
        this.detailDto = detailDto;
    }

    public List<ImageDto> getImageDtoList() {
        return imageDtoList;
    }

    public void setImageDtoList(List<ImageDto> imageDtoList) {
        this.imageDtoList = imageDtoList;
    }
}

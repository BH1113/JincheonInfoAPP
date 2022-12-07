package kr.ac.capston.server.model.dao;

import kr.ac.capston.server.model.dto.ImageDto;

import java.util.List;

public interface ImageDao {
    public abstract void add(ImageDto fileDto);
    public abstract void update(int pk);
    public abstract List<ImageDto> getAll();
    public abstract List<ImageDto> getByDetailId(int detailId);
}

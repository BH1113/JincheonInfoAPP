package kr.ac.capston.server.model.dao;

import kr.ac.capston.server.model.dto.FileDto;

import java.util.List;

public interface ImageDao {
    public abstract void add(FileDto fileDto);
    public abstract void update(int pk);
    public abstract List<FileDto> getAll();
    public abstract List<FileDto> getByDetailId(int detailId);
}

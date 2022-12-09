package kr.ac.capston.server.model.dao;

import kr.ac.capston.server.model.dto.DetailDto;

import java.util.List;

public interface DetailDao {
    public abstract List<DetailDto> getByName(String name);
    public abstract List<DetailDto> getByPk(int pk);
    public abstract int add(DetailDto detailDto);
    public abstract void delete(String name);
    public abstract void update(DetailDto detailDto);
    public abstract List<DetailDto> getAll();
}

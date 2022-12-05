package kr.ac.capston.server.model.dao;

import kr.ac.capston.server.model.dto.FileDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class ImageDaoImpl implements ImageDao{

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void add(FileDto fileDto){}

    @Override
    public void update(int pk){}

    @Override
    public List<FileDto> getAll(){return null;}

    @Override
    public List<FileDto> getByDetailId(int detailId){return null;}
}

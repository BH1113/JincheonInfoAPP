package kr.ac.capston.server.model.dao;

import kr.ac.capston.server.model.dto.ImageDto;
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
    public void add(ImageDto fileDto){}

    @Override
    public void update(int pk){}

    @Override
    public List<ImageDto> getAll(){return null;}

    @Override
    public List<ImageDto> getByDetailId(int detailId){return null;}
}

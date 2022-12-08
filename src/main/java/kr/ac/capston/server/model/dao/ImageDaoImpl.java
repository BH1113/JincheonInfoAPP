package kr.ac.capston.server.model.dao;

import kr.ac.capston.server.management.ManagementRowMapper;
import kr.ac.capston.server.model.dto.ImageDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

public class ImageDaoImpl implements ImageDao{

    private JdbcTemplate jdbcTemplate;
    private ManagementRowMapper managementMapper = new ManagementRowMapper();

    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void add(ImageDto fileDto){
        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement psmt = con.prepareStatement("insert into capdb.jincheonImage " +
                        "(name, type, detailId) values (?,?,?)");
                psmt.setString(1, fileDto.getName());
                psmt.setString(2, fileDto.getType());
                psmt.setInt(3, fileDto.getDetailId());
                return psmt;
            }
        });
    }

    @Override
    public void update(int pk){}

    @Override
    public List<ImageDto> getAll(){return null;}

    @Override
    public List<ImageDto> getByDetailId(int detailId){
        List<ImageDto> imageDtos = (List<ImageDto>) jdbcTemplate.query(
                new PreparedStatementCreator() {
                    @Override
                    public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                        PreparedStatement psmt = con.prepareStatement(
                                "select * from capdb.jincheonImage where detailId = ?"
                        );
                        psmt.setInt(1, detailId);
                        return psmt;
                    }
                }, managementMapper);
        return  imageDtos;
    }
}

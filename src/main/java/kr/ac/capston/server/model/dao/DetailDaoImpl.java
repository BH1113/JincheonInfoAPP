package kr.ac.capston.server.model.dao;

import kr.ac.capston.server.model.DetailMapper;
import kr.ac.capston.server.model.dto.DetailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;


public class DetailDaoImpl implements DetailDao{

    private JdbcTemplate jdbcTemplate;

    @Autowired
    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        System.out.println(jdbcTemplate);
        this.jdbcTemplate = jdbcTemplate;
    }

    private DetailMapper detailMapper = new DetailMapper();

    @Override
    public void add(DetailDto detailDto){
        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement pstmt = con.prepareStatement(
                        "insert into capdb.jincheondetail (name, detailIntro, detailImage, cor_x, cor_y, imageFormat) values(?,?,?,?,?,?)"
                );
                pstmt.setString(1, detailDto.getName());
                pstmt.setString(2, detailDto.getDetailIntro());
                pstmt.setString(3, detailDto.getDetailImage());
                pstmt.setBigDecimal(4, detailDto.getCor_x());
                pstmt.setBigDecimal(5, detailDto.getCor_y());
                pstmt.setString(6, detailDto.getImageFormat());
                return pstmt;
            }
        });
    }


    @Override
    public void delete(String name){
        jdbcTemplate.update("delete from capdb.jincheondetail where name = ?", name);
    }

    @Override
    public void update(DetailDto detailDto){
        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
                PreparedStatement pstmt = con.prepareStatement(
                        "update capdb.jincheondetail set detailIntro = ? where name = ?"
                );
                pstmt.setString(1, detailDto.getDetailIntro());
                pstmt.setString(2, detailDto.getName());
                return pstmt;
            }
        });
    }

    @Override
    public List<DetailDto> getByName(String name){
        System.out.println(name);
        System.out.println(jdbcTemplate);
        List<DetailDto> detailDto = (List<DetailDto>) jdbcTemplate.query(
                "select * from capdb.jincheondetail where name = ?",
                new String[]{name},
                (rs, rowNum) -> {
                    DetailDto detailDto1 = new DetailDto();
                    detailDto1.setName(rs.getString("name"));
                    detailDto1.setDetailImage(rs.getString("detailImage"));
                    detailDto1.setDetailIntro(rs.getString("detailIntro"));
                    detailDto1.setImageFormat(rs.getString("imageFormat"));
                    detailDto1.setImageAmount(rs.getInt("imageamount"));
                    detailDto1.setCor_x(rs.getBigDecimal("cor_x"));
                    detailDto1.setCor_y(rs.getBigDecimal("cor_y"));
                    return  detailDto1;
                });
        return  detailDto;
    }

    @Override
    public List<DetailDto> getAll(){
         List<DetailDto> detailDtoList = jdbcTemplate.query(
                 "select * from capdb.jincheondetail",
                 detailMapper
         );
         return detailDtoList;
    }
}

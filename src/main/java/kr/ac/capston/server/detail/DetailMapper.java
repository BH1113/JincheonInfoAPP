package kr.ac.capston.server.detail;

import kr.ac.capston.server.model.dto.DetailDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class DetailMapper implements RowMapper<DetailDto> {

    @Override
    public DetailDto mapRow(ResultSet rs, int rowNum) throws SQLException{
        DetailDto detailDto = new DetailDto();
        detailDto.setPk(rs.getInt("pk"));
        detailDto.setName(rs.getString("name"));
        detailDto.setDetailIntro(rs.getString("detailIntro"));
        detailDto.setCor_x(rs.getBigDecimal("cor_x"));
        detailDto.setCor_y(rs.getBigDecimal("cor_y"));
        return detailDto;
    }
}

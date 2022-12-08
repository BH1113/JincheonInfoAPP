package kr.ac.capston.server.management;

import kr.ac.capston.server.model.dto.ImageDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ManagementRowMapper implements RowMapper<ImageDto> {
    @Override
    public ImageDto mapRow(ResultSet rs, int rowNum) throws SQLException {
        ImageDto imageDto = new ImageDto();
        imageDto.setPk(rs.getInt("pk"));
        imageDto.setName(rs.getString("name"));
        imageDto.setType(rs.getString("type"));
        imageDto.setDetailId(rs.getInt("detailId"));
        return imageDto;
    }
}

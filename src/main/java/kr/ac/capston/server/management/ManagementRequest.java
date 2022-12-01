package kr.ac.capston.server.management;

import java.math.BigDecimal;

public class ManagementRequest {
    private int pk;
    private String name;
    private String detailIntro;
    private String detailImage;
    private BigDecimal cor_x;
    private BigDecimal cor_y;
    private String imageFormat;

    public String getImageFormat() {
        return imageFormat;
    }

    public void setImageFormat(String imageFormat) {
        this.imageFormat = imageFormat;
    }

    public int getPk() {
        return pk;
    }

    public void setPk(int pk) {
        this.pk = pk;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDetailIntro() {
        return detailIntro;
    }

    public void setDetailIntro(String detailIntro) {
        this.detailIntro = detailIntro;
    }

    public String getDetailImage() {
        return detailImage;
    }

    public void setDetailImage(String detailImage) {
        this.detailImage = detailImage;
    }

    public BigDecimal getCor_x() {
        return cor_x;
    }

    public void setCor_x(BigDecimal cor_x) {
        this.cor_x = cor_x;
    }

    public BigDecimal getCor_y() {
        return cor_y;
    }

    public void setCor_y(BigDecimal cor_y) {
        this.cor_y = cor_y;
    }
}

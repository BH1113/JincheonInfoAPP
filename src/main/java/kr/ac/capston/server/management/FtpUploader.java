package kr.ac.capston.server.management;

import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public class FtpUploader {
    private FTPClient ftpClient = null;
    private String host = "192.168.86.159";
    private int port = 8080;

    public void upload(MultipartFile multipartFile) throws IOException {
        ftpClient = new FTPClient();
        int reply;

        ftpClient.connect(host, port);
        reply = ftpClient.getReplyCode();
        if(!FTPReply.isPositiveCompletion(reply)){
            ftpClient.disconnect();
            throw new IOException("서버 접속 에러 ");
        }

    }
}

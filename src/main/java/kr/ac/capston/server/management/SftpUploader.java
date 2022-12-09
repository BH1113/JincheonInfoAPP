package kr.ac.capston.server.management;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.SocketException;
import java.util.Properties;

public class SftpUploader {
    private JSch jsch = null;
    private String host = "192.168.86.159";
    private int port = 8080;
    private String id = "root";
    private String pwd = "qudgjs21";
    private String path = "/var/www/image";

    private Session jschSession = null;
    private Channel channel = null;
    private ChannelSftp channelSftp = null;

    public void upload(MultipartFile multipartFile, String saveFileName, String format) throws Exception {
        jsch = new JSch();
        FileInputStream fis = null;

        jschSession = jsch.getSession(id, host, port);
        jschSession.setPassword(pwd);

        Properties config = new Properties();
        config.put("StrictHostKeyChecking", "no");
        jschSession.setConfig(config);

        jschSession.connect();
        channel = jschSession.openChannel("sftp");

        channelSftp = (ChannelSftp) channel;
        channelSftp.connect();

        try {
            channelSftp.cd(path);

            File file = new File(multipartFile.getOriginalFilename());
            multipartFile.transferTo(file);
            fis = new FileInputStream(file);

            channelSftp.put(fis, saveFileName + "." +format);
        }catch (Exception e){
            throw e;
        }finally {
            channelSftp.disconnect();
            channel.disconnect();
            jschSession.disconnect();
        }
    }
}

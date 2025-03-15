package com.example.springs3demo.service;

import com.example.springs3demo.Model.MetaData;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FileServiceImpl {


    String saveFile(MultipartFile file);

    byte[] downloadFile(String filename);


    String deleteFile(String filename);


    List<MetaData> listAllFiles();
}

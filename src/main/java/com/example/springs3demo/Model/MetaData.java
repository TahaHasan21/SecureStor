package com.example.springs3demo.Model;

import java.util.Date;

public class MetaData {

        private String fileName;
        private Date lastModified;

        public MetaData(String fileName, Date lastModified) {
            this.fileName = fileName;
            this.lastModified = lastModified;
        }

        public String getFileName() {
            return fileName;
        }

        public Date getLastModified() {
            return lastModified;
        }




}

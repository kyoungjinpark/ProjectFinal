package com.java.web;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.FileStatus;
import org.apache.hadoop.fs.FileSystem;
import org.apache.hadoop.fs.Path;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;

@Controller
public class testController {
	@Resource(name="hdConf")
	Configuration conf;
	String inputFile = "/input/csv";
	HashMap<String, Object> resultMap; 
	List<HashMap<String, Object>> resultList;
	
	@RequestMapping(value="/test")
	public void status(HttpServletResponse response) throws Throwable {
		resultList = new ArrayList<HashMap<String, Object>>();
		getDir(inputFile); // 디렉토리 호출
		System.out.println(resultList.size());
		
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("result", resultList);
		JSONObject json = JSONObject.fromObject(JSONSerializer.toJSON(resultMap));
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/json;charset=utf-8");
		response.getWriter().write(json.toString());	
	}
	public FileStatus[] getStatus(String newPath) throws IOException {
		URI uri = URI.create(newPath);
        Path path = new Path(uri);
		FileSystem file = FileSystem.get(uri, conf);
		return file.listStatus(path); // 목록 보내기
	}
	public void getDir(String newPath) throws IOException {
		FileStatus[] dirList = getStatus(newPath); // 목록 호출
		for(int i = 0; i < dirList.length; i++) {
        	String name = dirList[i].getPath().getName();
        	if(dirList[i].isDirectory()) {
        		getDir(newPath + "/" + name); // 다음 디렉토리 호출
        	}else {
	        		resultMap = new HashMap<String,Object>();
					resultMap.put(name, newPath + "/" + name);
	        		resultList.add(resultMap);
	        		System.out.println("파일 : " + newPath + "/" + name);
        	}
        }
	}
	
	
}
